import '@webb-tools/protocol-substrate-types';
import '@webb-tools/tangle-substrate-types';

import type { ApiPromise } from '@polkadot/api';
import type { Option } from '@polkadot/types';
import {
  PalletAssetRegistryAssetDetails,
  PalletAssetRegistryAssetMetadata,
} from '@polkadot/types/lookup';
import { ChainType, parseTypedChainId } from '@webb-tools/sdk-core';
import type { ChainAddressConfig } from '../../anchors';
import { chainsConfig } from '../../chains';
import { DEFAULT_DECIMALS, DEFAULT_NATIVE_INDEX } from '../../constants';
import { CurrencyConfig } from '../../currencies';
import type { ICurrency } from '../../types';
import {
  OnChainConfigBase,
  type CurrencyResponse,
} from '../on-chain-config-base';

// the singleton instance of the EVM on-chain config with lazy initialization
let SubstrateOnChainConfigInstance: SubstrateOnChainConfig;

export class SubstrateOnChainConfig extends OnChainConfigBase {
  private constructor() {
    super();
  }

  static getInstance() {
    if (!SubstrateOnChainConfigInstance) {
      SubstrateOnChainConfigInstance = new SubstrateOnChainConfig();
    }
    return SubstrateOnChainConfigInstance;
  }

  async fetchFungibleCurrency(
    typedChainId: number,
    treeId: string,
    provider: ApiPromise
  ): Promise<ICurrency | null> {
    // First check if the fungible currency is already cached
    const cachedFungibleCurrency = this.fungibleCurrencyCache.get(typedChainId);
    if (cachedFungibleCurrency) {
      if (cachedFungibleCurrency instanceof Error) {
        return null;
      }

      return Promise.resolve(cachedFungibleCurrency);
    }

    try {
      this.assertChainType(typedChainId, ChainType.Substrate);

      const vanchor = await provider.query.vAnchorBn254.vAnchors(treeId);
      if (vanchor.isNone) {
        throw new Error('VAnchor not found with tree id: ' + treeId);
      }

      const vanchorDetail = vanchor.unwrap();
      const assetId = vanchorDetail.asset.toString();

      const [asset, metadata] = await provider.queryMulti<
        [
          Option<PalletAssetRegistryAssetDetails>,
          Option<PalletAssetRegistryAssetMetadata>
        ]
      >([
        [provider.query.assetRegistry.assets, assetId],
        [provider.query.assetRegistry.assetMetadataMap, assetId],
      ]);

      if (asset.isNone || metadata.isNone) {
        throw new Error('Asset not found with id: ' + assetId);
      }

      const assetDetail = asset.unwrap();
      const assetMetadata = metadata.unwrap();
      if (!assetDetail.assetType.isPoolShare) {
        throw new Error('Asset type is not PoolShare');
      }

      const name = assetDetail.name.toHuman()?.toString();
      const symbol = assetMetadata.symbol.toHuman()?.toString();
      const decimals = assetMetadata.decimals.toNumber();
      if (!name || !symbol || !decimals) {
        throw new Error('Asset name is empty');
      }

      const fungible: ICurrency = {
        name,
        symbol,
        decimals,
        address: assetId,
      };

      // Cache the fungible currency
      this.fungibleCurrencyCache.set(typedChainId, fungible);
      return fungible;
    } catch (error) {
      console.error('Failed to fetch fungible currency', error);
    }

    return null;
  }

  async fetchWrappableCurrencies(
    fungibleCurrency: ICurrency,
    typedChainId: number,
    provider: ApiPromise
  ): Promise<ICurrency[]> {
    // First check if the wrappable currencies are already cached
    const cachedWrappableCurrencies =
      this.wrappableCurrenciesCache.get(typedChainId);
    if (cachedWrappableCurrencies) {
      if (cachedWrappableCurrencies instanceof Error) {
        return [];
      }

      return Promise.resolve(cachedWrappableCurrencies);
    }

    const fungibleId = fungibleCurrency.address;

    try {
      this.assertChainType(typedChainId, ChainType.Substrate);

      const asset = await provider.query.assetRegistry.assets(fungibleId);
      if (asset.isNone) {
        throw new Error('Asset not found with id: ' + fungibleId);
      }

      const detail = asset.unwrap();
      if (!detail.assetType.isPoolShare) {
        throw new Error('Asset type is not PoolShare');
      }

      const wrappableAssetIds = detail.assetType.asPoolShare.map((a) =>
        a.toString()
      );
      const wrappable: ICurrency[] = await Promise.all(
        wrappableAssetIds.map(async (assetId) => {
          if (assetId === `${DEFAULT_NATIVE_INDEX}`) {
            const native = chainsConfig[typedChainId].nativeCurrency;

            if (!native) {
              throw new Error('Native currency not found');
            }

            return {
              ...native,
              address: `${DEFAULT_NATIVE_INDEX}`,
            };
          }
          const asset = await provider.query.assetRegistry.assets(assetId);
          if (asset.isNone) {
            throw new Error('Asset not found with id: ' + assetId);
          }

          const detail = asset.unwrap();
          const name = detail.name.toHuman()?.toString();
          if (!name) {
            throw new Error('Asset name is empty');
          }

          return {
            name,
            symbol: name,
            decimals: DEFAULT_DECIMALS,
            address: assetId,
          };
        })
      );

      // Cache the wrappable currencies
      this.wrappableCurrenciesCache.set(typedChainId, wrappable);
      return wrappable;
    } catch (error) {
      console.error('Failed to fetch wrappable currencies', error);
    }

    return [] as ICurrency[];
  }

  async fetchCurrenciesConfig(
    anchorConfig: Record<number, string[]>,
    providerFactory: (typedChainId: number) => Promise<ApiPromise>,
    existedCurreniciesConfig: Record<number, CurrencyConfig> = {},
    // prettier-ignore
    existedFungibleToWrappableMap: Map<number, Map<number, Set<number>>> = new Map(),
    existedAnchorConfig: Record<number, ChainAddressConfig> = {}
  ): Promise<{
    currenciesConfig: Record<number, CurrencyConfig>;
    fungibleToWrappableMap: Map<number, Map<number, Set<number>>>;
    anchorConfig: Record<number, ChainAddressConfig>;
  }> {
    // Get all evm typed chain ids from the anchor config
    let substrateTypedChainIds = Object.keys(anchorConfig)
      // Filter only evm chains
      .filter((typedChainId) => {
        const { chainType } = parseTypedChainId(+typedChainId);
        return chainType === ChainType.Substrate;
      });

    // Filter the chains if it is not working
    const substrateTypedChainIdBooleans = await Promise.all(
      substrateTypedChainIds.map(async (typedChainId) => {
        try {
          await providerFactory(+typedChainId);
          return true;
        } catch (error) {
          return false;
        }
      })
    );
    substrateTypedChainIds = substrateTypedChainIds.filter(
      (_, index) => substrateTypedChainIdBooleans[index]
    );
    if (substrateTypedChainIds.length === 0) {
      return {
        currenciesConfig: existedCurreniciesConfig,
        fungibleToWrappableMap: existedFungibleToWrappableMap,
        anchorConfig: existedAnchorConfig,
      };
    }

    const nativeCurrencies = substrateTypedChainIds.map((typedChainId) => ({
      typedChainId: +typedChainId,
      nativeCurrency: {
        ...chainsConfig[+typedChainId].nativeCurrency,
        address: `${DEFAULT_NATIVE_INDEX}`,
      } satisfies ICurrency,
    }));

    // Fetch all fungible currencies
    const fungibleCurrenciesWithNull = await Promise.allSettled(
      nativeCurrencies.map(async ({ typedChainId, nativeCurrency }) => {
        const provider = await providerFactory(typedChainId);

        // Support multiple anchor addresses for the same chain
        const treeIds = anchorConfig[typedChainId];
        if (!treeIds || treeIds.length === 0) {
          console.error('No anchor address found for chain', typedChainId);
          return [];
        }

        // Fetch the fungible currency
        const fungibleCurrencies = await Promise.all(
          treeIds.map(async (treeId) => {
            const fungible = await this.fetchFungibleCurrency(
              typedChainId,
              treeId,
              provider
            );

            return {
              typedChainId,
              nativeCurrency,
              fungibleCurrency: fungible,
              anchorAddressOrTreeId: treeId,
            } satisfies Omit<
              CurrencyResponse,
              'fungibleCurrency' | 'wrappableCurrencies'
            > & {
              fungibleCurrency: ICurrency | null;
            };
          })
        );

        return fungibleCurrencies;
      })
    );

    const fungibleCurrencies = fungibleCurrenciesWithNull
      .map((resp) => (resp.status === 'fulfilled' ? resp.value : null))
      .filter(
        (
          currencies
        ): currencies is {
          anchorAddressOrTreeId: string;
          fungibleCurrency: ICurrency | null;
          nativeCurrency: ICurrency;
          typedChainId: number;
        }[] => !!currencies && currencies.length > 0
      )
      .reduce((acc, currencies) => [...acc, ...currencies], [])
      .filter(
        (
          currency
        ): currency is {
          anchorAddressOrTreeId: string;
          fungibleCurrency: ICurrency;
          nativeCurrency: ICurrency;
          typedChainId: number;
        } => currency.fungibleCurrency !== null
      );

    // Fetch all wrappable currencies
    const wrappableCurrenciesWithNull = await Promise.allSettled(
      fungibleCurrencies.map(
        async ({
          typedChainId,
          nativeCurrency,
          fungibleCurrency,
          anchorAddressOrTreeId,
        }) => {
          const provider = await providerFactory(typedChainId);
          const wrappables = await this.fetchWrappableCurrencies(
            fungibleCurrency,
            typedChainId,
            provider
          );

          return {
            anchorAddressOrTreeId,
            fungibleCurrency,
            nativeCurrency,
            typedChainId,
            wrappableCurrencies: wrappables,
          };
        }
      )
    );

    const wrappableCurrencies = wrappableCurrenciesWithNull
      .map((resp) => (resp.status === 'fulfilled' ? resp.value : null))
      .filter(
        (currency): currency is CurrencyResponse =>
          !!currency && Array.isArray(currency.wrappableCurrencies)
      );

    const config = this.addCurrenciesIntoConfig(
      wrappableCurrencies,
      existedCurreniciesConfig,
      existedFungibleToWrappableMap,
      existedAnchorConfig
    );

    return config;
  }
}
