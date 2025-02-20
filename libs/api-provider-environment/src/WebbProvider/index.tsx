'use client';

import {
  Currency,
  type Account,
  type WebbApiProvider,
} from '@webb-tools/abstract-api-provider';
import { Bridge } from '@webb-tools/abstract-api-provider/state';
import { LoggerService } from '@webb-tools/browser-utils/logger';
import {
  multipleKeypairStorageFactory,
  netStorageFactory,
  type NetworkStorage,
} from '@webb-tools/browser-utils/storage';
import {
  ApiConfig,
  HUBBLE_BRIDGE_DAPP_NAME,
  chainsConfig,
  chainsPopulated,
  parseOnChainData,
  walletsConfig,
  type Chain,
  type Wallet,
} from '@webb-tools/dapp-config';
import wagmiConfig from '@webb-tools/dapp-config/wagmi-config';
import {
  CurrencyRole,
  WalletId,
  WebbError,
  WebbErrorCodes,
  type BareProps,
  type InteractiveFeedback,
} from '@webb-tools/dapp-types';
import WalletNotInstalledError from '@webb-tools/dapp-types/errors/WalletNotInstalledError';
import type { Maybe, Nullable } from '@webb-tools/dapp-types/utils/types';
import { NoteManager } from '@webb-tools/note-manager';
import { WebbPolkadot } from '@webb-tools/polkadot-api-provider';
import { getRelayerManagerFactory } from '@webb-tools/relayer-manager-factory';
import {
  ChainType,
  calculateTypedChainId,
} from '@webb-tools/sdk-core/typed-chain-id';
import {
  WebbWeb3Provider,
  isViemError,
  type Web3RelayerManager,
} from '@webb-tools/web3-api-provider';
import { useWebbUI } from '@webb-tools/webb-ui-components';
import { useCallback, useEffect, useMemo, useState, type FC } from 'react';
import { WagmiConfig } from 'wagmi';
import type { TAppEvent } from '../app-event';
import { insufficientApiInterface } from '../error/interactive-errors/insufficient-api-interface';
import { unsupportedChain } from '../error/interactive-errors/unsupported-chain';
import onChainDataJson from '../generated/on-chain-config.json';
import ModalQueueManagerProvider from '../modal-queue-manager/ModalQueueManagerProvider';
import { StoreProvider } from '../store';
import { useTxApiQueue } from '../transaction';
import { WebbContext } from '../webb-context';
import {
  notificationHandler,
  registerInteractiveFeedback,
  useNoteAccount,
} from './private';
import { useActiveAccount, useActiveChain, useActiveWallet } from './subjects';

interface WebbProviderProps extends BareProps {
  appEvent: TAppEvent;
  applicationName: string;
  applicationVersion?: string;
}

const chains = chainsPopulated;
const logger = LoggerService.get('WebbProvider');

const { currencies, anchors, fungibleToWrappableMap } =
  parseOnChainData(onChainDataJson);

const apiConfig = ApiConfig.init({
  anchors,
  chains: chainsConfig,
  currencies,
  fungibleToWrappableMap,
  wallets: walletsConfig,
});

const appNetworkStoragePromise = netStorageFactory();

const WebbProviderInner: FC<WebbProviderProps> = ({ children, appEvent }) => {
  const [activeWallet, setActiveWallet] = useActiveWallet();
  const [activeChain, setActiveChain] = useActiveChain();
  const [activeAccount, setActiveAccount] = useActiveAccount();

  const [activeApi, setActiveApi] =
    useState<Maybe<WebbApiProvider<unknown>>>(undefined);

  const [loading, setLoading] = useState(true);

  const [accounts, setAccounts] = useState<Array<Account>>([]);

  const [isConnecting, setIsConnecting] = useState(false);

  /// storing all interactive feedbacks to show the modals
  const [interactiveFeedbacks, setInteractiveFeedbacks] = useState<
    InteractiveFeedback[]
  >([]);

  const { notificationApi } = useWebbUI();

  const {
    loginIfExist,
    loginNoteAccount,
    logoutNoteAccount,
    noteManager,
    purgeNoteAccount,
    setNoteManager,
  } = useNoteAccount(activeApi);

  /// An effect/hook will be called every time the active api is switched, it will cancel all the interactive feedbacks
  useEffect(() => {
    setInteractiveFeedbacks([]);
    const off = activeApi?.on('interactiveFeedback', (feedback) => {
      registerInteractiveFeedback(setInteractiveFeedbacks, feedback);
    });
    return () => {
      off && off();
      setInteractiveFeedbacks((p) => {
        p.forEach((p) => p.cancel());
        return [];
      });

      appEvent.send('changeNetworkSwitcherVisibility', false);
    };
  }, [activeApi, appEvent]);

  /// the active feedback is the last one
  const activeFeedback = useMemo(() => {
    if (interactiveFeedbacks.length === 0) {
      return null;
    }
    return interactiveFeedbacks[interactiveFeedbacks.length - 1];
  }, [interactiveFeedbacks]);

  /// callback for setting active account
  /// it will store on the provider and the storage of the network
  const setActiveAccountWithStorage = useCallback(
    async (
      account: Account,
      options: {
        networkStorage?: NetworkStorage | undefined | null;
        chain?: Chain | undefined;
        activeApi?: Maybe<WebbApiProvider<unknown>>;
      } = {}
    ) => {
      const innerNetworkStorage =
        options.networkStorage ?? (await appNetworkStoragePromise);
      const innerChain = options.chain ?? activeChain;
      const innerActiveApi = options.activeApi ?? activeApi;

      if (innerNetworkStorage && innerChain) {
        const typedChainId = calculateTypedChainId(
          innerChain.chainType,
          innerChain.id
        );

        const networksConfig = await innerNetworkStorage.get('networksConfig');
        innerNetworkStorage?.set('networksConfig', {
          ...networksConfig,
          [typedChainId]: {
            ...networksConfig[typedChainId],
            defaultAccount: account.address,
          },
        });
      }

      if (innerActiveApi) {
        await innerActiveApi.accounts.setActiveAccount(account);
      }

      setActiveAccount(account);
      await loginIfExist(account.address);
    },
    [activeApi, activeChain, loginIfExist, setActiveAccount]
  );

  /// this will set the active api and the accounts
  const setActiveApiWithAccounts = useCallback(
    async (
      nextActiveApi: WebbApiProvider<unknown> | undefined,
      chain: Chain,
      _networkStorage?: NetworkStorage | null
    ): Promise<void> => {
      if (!nextActiveApi) {
        setActiveApi(nextActiveApi);
        setAccounts([]);
        setActiveAccount(null);
        setNoteManager(null);
        return;
      }

      let hasSetFromStorage = false;
      const accounts = await nextActiveApi.accounts.accounts();

      const typedChainId = calculateTypedChainId(chain.chainType, chain.id);

      setAccounts(accounts);

      if (_networkStorage) {
        const networkDefaultConfig = await _networkStorage.get(
          'networksConfig'
        );

        const defaultAccount =
          networkDefaultConfig?.[typedChainId]?.defaultAccount;
        const defaultFromSettings = accounts.find(
          (account) => account.address === defaultAccount
        );

        if (defaultFromSettings) {
          setActiveAccount(defaultFromSettings);
          await nextActiveApi.accounts.setActiveAccount(defaultFromSettings);
          await loginIfExist(defaultFromSettings.address);
          hasSetFromStorage = true;
        }
      }

      if (!hasSetFromStorage) {
        await setActiveAccountWithStorage(accounts[0], {
          networkStorage: _networkStorage,
          chain,
          activeApi: nextActiveApi,
        });
      }

      setActiveApi(nextActiveApi);
      nextActiveApi.on('newAccounts', async (accounts) => {
        const acs = await accounts.accounts();
        const active = acs[0];
        setAccounts(acs);

        if (!active) {
          return;
        }

        const networkStorage = _networkStorage ?? (await netStorageFactory());

        setActiveAccountWithStorage(active, {
          networkStorage,
          chain,
          activeApi: nextActiveApi,
        });
      });
    },
    // prettier-ignore
    [loginIfExist, setActiveAccount, setActiveAccountWithStorage, setNoteManager]
  );

  /// Error handler for the `WebbError`
  const catchWebbError = useCallback(
    (e: WebbError) => {
      const errorMessage = e.errorMessage;
      const code = errorMessage.code;
      switch (code) {
        case WebbErrorCodes.UnsupportedChain:
          {
            setActiveChain(undefined);
            const interactiveFeedback = unsupportedChain(apiConfig);
            if (interactiveFeedback) {
              registerInteractiveFeedback(
                setInteractiveFeedbacks,
                interactiveFeedback
              );
            }
          }
          break;
        case WebbErrorCodes.UnselectedChain:
          break;
        case WebbErrorCodes.MetaMaskExtensionNotInstalled:
        case WebbErrorCodes.PolkaDotExtensionNotInstalled:
        case WebbErrorCodes.TalismanExtensionNotInstalled:
        case WebbErrorCodes.SubWalletExtensionNotInstalled:
          {
            // TODO: Implement interactive feedback with new components from webb-ui-components:
          }
          break;
        case WebbErrorCodes.InsufficientProviderInterface:
          {
            setActiveChain(undefined);
            const interactiveFeedback = insufficientApiInterface(appEvent);
            registerInteractiveFeedback(
              setInteractiveFeedbacks,
              interactiveFeedback
            );
          }
          break;
        case WebbErrorCodes.RelayerMisbehaving:
          break;
        default:
          alert(code);
      }
    },
    [appEvent, setActiveChain]
  );

  /// Network switcher
  const switchChain = useCallback(
    async (
      chain: Chain,
      wallet: Wallet,
      _networkStorage?: NetworkStorage | undefined,
      _bridge?: Bridge | undefined
    ) => {
      const nextTypedChainId = calculateTypedChainId(chain.chainType, chain.id);

      const sharedWalletConnectionPayload = {
        walletId: wallet.id,
        typedChainId: { chainId: chain.id, chainType: chain.chainType },
      };

      // wallet cleanup
      /// if new wallet id isn't the same of the current then the dApp is dealing with api change
      if (activeApi) {
        await activeApi.destroy();
      }

      try {
        setLoading(true);
        appEvent.send('walletConnectionState', {
          ...sharedWalletConnectionPayload,
          status: 'loading',
        });

        const relayerManagerFactory = await getRelayerManagerFactory();
        const networkStorage =
          _networkStorage ?? (await appNetworkStoragePromise);

        /// init the active api value
        let localActiveApi: Nullable<WebbApiProvider<unknown>> = null;

        switch (wallet.id) {
          case WalletId.Polkadot:
          case WalletId.Talisman:
          case WalletId.SubWallet:
            {
              const relayerManager =
                await relayerManagerFactory.getRelayerManager('substrate');
              const webSocketUrls = chain.rpcUrls.default.webSocket;
              if (!webSocketUrls || webSocketUrls.length === 0) {
                throw new Error(
                  `No websocket urls found for chain ${chain.name}`
                );
              }

              const webbPolkadot = await WebbPolkadot.init(
                HUBBLE_BRIDGE_DAPP_NAME,
                Array.from(webSocketUrls),
                {
                  onError: (feedback: InteractiveFeedback) => {
                    registerInteractiveFeedback(
                      setInteractiveFeedbacks,
                      feedback
                    );
                    appEvent.send('walletConnectionState', {
                      ...sharedWalletConnectionPayload,
                      status: 'failed',
                    });
                  },
                },
                relayerManager,
                apiConfig,
                notificationHandler,
                nextTypedChainId,
                wallet
              );

              await setActiveApiWithAccounts(
                webbPolkadot,
                chain,
                _networkStorage ?? (await appNetworkStoragePromise)
              );

              localActiveApi = webbPolkadot;

              if (noteManager) {
                localActiveApi.noteManager = noteManager;
              }

              appEvent.send('walletConnectionState', {
                ...sharedWalletConnectionPayload,
                status: 'sucess',
              });
              setLoading(false);
            }
            break;

          case WalletId.MetaMask:
          case WalletId.WalletConnectV2:
            {
              const connector = walletsConfig[wallet.id].connector;
              if (!connector) {
                throw WebbError.from(WebbErrorCodes.NoConnectorConfigured);
              }

              const connProvider = await connector.getProvider();
              if (!connProvider) {
                throw new WalletNotInstalledError(wallet.id);
              }

              const chainId = chain.id;

              const relayerManager =
                (await relayerManagerFactory.getRelayerManager(
                  'evm'
                )) as Web3RelayerManager;

              const webbWeb3Provider = await WebbWeb3Provider.init(
                connector,
                chainId,
                relayerManager,
                noteManager,
                apiConfig,
                notificationHandler
              );

              const providerUpdateHandler = async ([
                updatedChainId,
              ]: number[]) => {
                const nextChain = Object.values(chains).find(
                  (chain) =>
                    chain.id === updatedChainId &&
                    chain.chainType === ChainType.EVM
                );
                const activeChain = nextChain ? nextChain : chain;

                try {
                  /// this will throw if the user switched to unsupported chain
                  const name = apiConfig.getEVMChainName(updatedChainId);
                  const newTypedChainId = calculateTypedChainId(
                    ChainType.EVM,
                    updatedChainId
                  );

                  /// update the current typed chain id
                  webbWeb3Provider.typedChainidSubject.next(newTypedChainId);

                  /// Alerting that the provider has changed via the extension
                  notificationApi({
                    message: 'Web3: Connected',
                    variant: 'info',
                    secondaryMessage: `Connection is switched to ${name} chain`,
                  });
                  setActiveWallet(wallet);
                  setActiveChain(activeChain);

                  const bridgeOptions: Record<number, Bridge> = {};

                  // Set a reasonable default bridge and change available bridges based on the new chain
                  let defaultBridge: Bridge | null = null;
                  for (const bridgeConfig of Object.values(
                    webbWeb3Provider.config.bridgeByAsset
                  )) {
                    if (
                      Object.keys(bridgeConfig.anchors).includes(
                        newTypedChainId.toString()
                      )
                    ) {
                      // List the bridge as supported by the new chain
                      const bridgeCurrencyConfig =
                        webbWeb3Provider.config.currencies[bridgeConfig.asset];
                      const bridgeCurrency = new Currency(bridgeCurrencyConfig);
                      if (
                        bridgeCurrency.getRole() !== CurrencyRole.Governable
                      ) {
                        continue;
                      }
                      const bridgeTargets = bridgeConfig.anchors;
                      const supportedBridge = new Bridge(
                        bridgeCurrency,
                        bridgeTargets
                      );
                      bridgeOptions[bridgeCurrency.id] = supportedBridge;

                      // Set the first compatible bridge encountered.
                      if (!defaultBridge) {
                        defaultBridge = supportedBridge;
                      }
                    }
                  }

                  // set the available bridges of the new chain
                  webbWeb3Provider.state.setBridgeOptions(bridgeOptions);
                  webbWeb3Provider.state.activeBridge = defaultBridge;

                  appEvent.send('networkSwitched', [
                    {
                      chainType: activeChain.chainType,
                      chainId: activeChain.id,
                    },
                    wallet.id,
                  ]);
                } catch (e) {
                  /// set the chain to be undefined as this won't be usable
                  // TODO mark the api as not ready
                  setActiveChain(undefined);
                  setActiveWallet(wallet);
                  webbWeb3Provider.state.activeBridge = null;
                  if (e instanceof WebbError) {
                    /// Catching the errors for the switcher from the event
                    catchWebbError(e);
                  }
                }
              };

              // Listen for chain updates when user switches chains in the extension
              webbWeb3Provider.on('providerUpdate', providerUpdateHandler);

              webbWeb3Provider.setChainListener();
              webbWeb3Provider.setAccountListener();

              // Get the new chain id after the initialization of webb provider
              const currentChainId = await webbWeb3Provider.getChainId();

              if (currentChainId !== chain.id) {
                await webbWeb3Provider.switchOrAddChain(chain.id);
              }

              // Emit events
              appEvent.send('networkSwitched', [
                {
                  chainType: chain.chainType,
                  chainId: chain.id,
                },
                wallet.id,
              ]);

              await setActiveApiWithAccounts(
                webbWeb3Provider,
                chain,
                _networkStorage ?? networkStorage
              );
              /// listen to `providerUpdate` by MetaMask
              localActiveApi = webbWeb3Provider;
              setLoading(false);
            }
            break;
        }
        /// settings the user selection
        setActiveChain(chain);
        setActiveWallet(wallet);
        setLoading(false);
        appEvent.send('walletConnectionState', {
          ...sharedWalletConnectionPayload,
          status: 'sucess',
        });

        // If the _bridge is passed in, set it as the active bridge
        if (localActiveApi?.state && _bridge) {
          localActiveApi.state.activeBridge = _bridge;
        }

        return localActiveApi;
      } catch (e) {
        setLoading(false);
        logger.error(e);

        let err: WebbError | undefined = undefined;

        if (e instanceof WebbError) {
          /// Catch the errors for the switcher while switching
          catchWebbError(e);
          err = e;
        } else {
          // Parse and display error
          let errorMessage = WebbError.getErrorMessage(
            WebbErrorCodes.SwitchChainFailed
          ).message;

          if (isViemError(e)) {
            errorMessage = e.shortMessage;
          } else if (e instanceof Error) {
            errorMessage = e.message;
          }

          notificationApi({
            variant: 'error',
            message: 'Web3: Switch Chain Error',
            secondaryMessage: errorMessage,
          });
        }

        appEvent.send('walletConnectionState', {
          ...sharedWalletConnectionPayload,
          status: 'failed',
          error: err,
        });

        return null;
      }
    },
    // prettier-ignore
    [activeApi, appEvent, catchWebbError, noteManager, notificationApi, setActiveApiWithAccounts, setActiveChain, setActiveWallet]
  );

  /// a util will store the network/wallet config before switching
  const switchChainAndStore = useCallback(
    async (chain: Chain, wallet: Wallet, bridge?: Bridge) => {
      setIsConnecting(true);

      try {
        const provider = await switchChain(chain, wallet, undefined, bridge);
        /** TODO: `networkStorage` can be `null` here.
         * Suggestion: use `useRef` instead of `useState`
         * for the `networkStorage` because state update asynchronous
         * */
        const _networkStorage = await appNetworkStoragePromise;
        if (provider && _networkStorage) {
          await Promise.all([
            _networkStorage.set(
              'defaultNetwork',
              calculateTypedChainId(chain.chainType, chain.id)
            ),
            _networkStorage.set('defaultWallet', wallet.id),
          ]);
        }
        return provider;
      } finally {
        setIsConnecting(false);
      }
    },
    [switchChain]
  );

  useEffect(() => {
    /// init the dApp
    const init = async () => {
      setIsConnecting(true);
      const _networkStorage = await appNetworkStoragePromise;
      /// get the default wallet and network from storage
      const [net, wallet] = await Promise.all([
        _networkStorage.get('defaultNetwork'),
        _networkStorage.get('defaultWallet'),
      ]);

      /// if there's no chain, return
      if (!net || !wallet) {
        return;
      }

      /// chain config by net id
      const chainConfig = chains[net];
      if (!chainConfig) {
        return;
      }

      let walletCfg: Wallet;

      // wallet config by chain
      if (Array.isArray(chainConfig.wallets)) {
        if (!chainConfig.wallets.length) {
          return;
        }

        // The new API with array of wallet ids
        if (chainConfig.wallets.includes(wallet)) {
          walletCfg = apiConfig.wallets[wallet];
        } else {
          walletCfg = apiConfig.wallets[chainConfig.wallets[0]];
        }
      } else {
        // The old API with Record of wallet ids and wallet configs
        walletCfg =
          chainConfig.wallets[wallet] || Object.values(chainConfig)[0];
      }

      const activeApi = await switchChain(
        chainConfig,
        walletCfg,
        _networkStorage
      );

      const networkDefaultConfig = await _networkStorage.get('networksConfig');

      if (activeApi) {
        const accounts = await activeApi.accounts.accounts();
        let defaultAccount = networkDefaultConfig[net]?.defaultAccount;
        defaultAccount = defaultAccount ?? accounts[0]?.address;

        const defaultFromSettings = accounts.find(
          (account) => account.address === defaultAccount
        );
        logger.info(`Default account from settings`, defaultFromSettings);

        if (defaultFromSettings) {
          const defaultAddr = defaultFromSettings.address;

          // NoteManager configuration
          const multipleKeyPairStorage = await multipleKeypairStorageFactory();
          const storedKeypair = await multipleKeyPairStorage.get(defaultAddr);
          let createdNoteManager: NoteManager | null = null;

          // Create the NoteManager if the stored keypair exists.
          if (storedKeypair) {
            createdNoteManager = await loginNoteAccount(
              storedKeypair,
              defaultAddr
            );
          }

          if (!activeApi.noteManager) {
            activeApi.noteManager = createdNoteManager;
          }

          setActiveAccountWithStorage(defaultFromSettings, {
            networkStorage: _networkStorage,
            chain: chainConfig,
            activeApi,
          });
        }
      } else {
        // If the user did not want to switch to the previously stored chain,
        // set the previosuly stored chain in the app for display only.
        setActiveChain(chains[net]);
      }
    };
    init().finally(() => {
      setIsConnecting(false);
      setLoading(false);
    });

    appEvent.on('networkSwitched', async ([chain, wallet]) => {
      // Set the default network to the last selected network
      const networkStorage = await netStorageFactory();
      await Promise.all([
        networkStorage.set(
          'defaultNetwork',
          calculateTypedChainId(chain.chainType, chain.chainId)
        ),
        networkStorage.set('defaultWallet', wallet),
      ]);
    });
    appEvent.on('switchNetwork', ([chain, wallet]) => {
      switchChainAndStore(chain, wallet);
    });
    appEvent.on('setActiveAccount', (nextAccount) => {
      setActiveAccountWithStorage(nextAccount);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const txQueue = useTxApiQueue(apiConfig);

  return (
    <WebbContext.Provider
      value={{
        loading,
        wallets: walletsConfig,
        chains: chains,
        noteManager,
        loginNoteAccount,
        logoutNoteAccount,
        purgeNoteAccount,
        activeWallet,
        activeChain,
        activeApi,
        accounts,
        activeAccount,
        setActiveAccount: setActiveAccountWithStorage,
        apiConfig,
        switchChain: switchChainAndStore,
        isConnecting,
        async inactivateApi(): Promise<void> {
          if (activeApi) {
            setAccounts([]);
            setActiveAccount(null);
            setNoteManager(null);
            setActiveWallet(undefined);
            setActiveChain(activeChain);
            await activeApi.destroy();
            setActiveApi(undefined);
            // remove app config from local storage
            const _networkStorage = await appNetworkStoragePromise;
            if (_networkStorage) {
              await Promise.all([
                _networkStorage.set('defaultNetwork', undefined),
                _networkStorage.set('defaultWallet', undefined),
                _networkStorage.set('networksConfig', {}),
              ]);
            }
          }
        },
        activeFeedback,
        registerInteractiveFeedback: (
          interactiveFeedback: InteractiveFeedback
        ) => {
          registerInteractiveFeedback(
            setInteractiveFeedbacks,
            interactiveFeedback
          );
        },
        appEvent,
        txQueue,
      }}
    >
      <ModalQueueManagerProvider>
        <StoreProvider>{children}</StoreProvider>
      </ModalQueueManagerProvider>
    </WebbContext.Provider>
  );
};

export const WebbProvider: FC<WebbProviderProps> = (props) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <WebbProviderInner {...props} />
    </WagmiConfig>
  );
};
