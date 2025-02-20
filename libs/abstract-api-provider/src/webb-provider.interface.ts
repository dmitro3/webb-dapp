// Copyright 2022 @webb-tools/
// SPDX-License-Identifier: Apache-2.0

import { ApiPromise } from '@polkadot/api';
import { EventBus } from '@webb-tools/app-util';
import { BridgeStorage } from '@webb-tools/browser-utils';
import { VAnchor__factory } from '@webb-tools/contracts';
import { ApiConfig } from '@webb-tools/dapp-config';
import { type RelayerCMDBase } from '@webb-tools/dapp-config/relayer-config';
import { InteractiveFeedback, Storage } from '@webb-tools/dapp-types';
import { NoteManager } from '@webb-tools/note-manager';
import { Utxo, UtxoGenInput } from '@webb-tools/sdk-core';
import { ZkComponents } from '@webb-tools/utils';
import { Backend } from '@webb-tools/wasm-utils';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetContractReturnType, PublicClient } from 'viem';
import { AccountsAdapter } from './account/Accounts.adapter';
import { ChainQuery } from './chain-query';
import { ContributePayload, Crowdloan, CrowdloanEvent } from './crowdloan';
import { ECDSAClaims } from './ecdsa-claims';
import { WebbRelayerManager } from './relayer/webb-relayer-manager';
import { WebbState } from './state';
import {
  ActionEvent,
  NewNotesTxResult,
  TransactionExecutor,
} from './transaction/transactionExecutor';
import { BridgeApi } from './vanchor';
import { VAnchorActions } from './vanchor/vanchor-actions';
import { WrapUnwrap } from './wrap-unwrap';
import { WebbProviderType } from './types';

export interface RelayChainMethods<T extends WebbApiProvider<any>> {
  // Crowdloan API
  crowdloan: WebbMethod<Crowdloan<T, ContributePayload>, CrowdloanEvent>;
}

/// list of the apis that are available for  the provider
export interface WebbMethods<
  ProviderType extends WebbProviderType,
  T extends WebbApiProvider<any>
> {
  // Variable Anchor API
  variableAnchor: WebbVariableAnchor<ProviderType, T>;
  // Wrap and unwrap API
  wrapUnwrap: WrapAndUnwrap<T>;
  // Chain query : an API for querying chain storage used currently for balances
  chainQuery: ChainQuery<T>;
  // Methods for querying information about the current bridge
  bridgeApi: BridgeApi<T>;
  // Claims
  claim: {
    core: ECDSAClaims<T>;
    enabled: boolean;
  };
}

export type WebbMethod<
  T extends EventBus<K>,
  K extends Record<string, unknown>
> = {
  // The underlying provider for the methods
  inner: T;
  enabled: boolean;
};

export type WebbTransactionMethod<T> = {
  inner: T;
  enabled: boolean;
};

export interface WebbVariableAnchor<
  ProviderType extends WebbProviderType,
  T extends WebbApiProvider<any>
> {
  actions: WebbMethod<VAnchorActions<ProviderType, T>, ActionEvent>;
}

export interface WrapAndUnwrap<T> {
  core: {
    inner: WrapUnwrap<T>;
    enabled: boolean;
  };
}

/// TODO improve this and add a spec
/// An interface for Apis pre-initialization
export type ApiInitHandler = {
  /// an error handler for the Api before init
  /*
   * For instance Polkadot provider the dApp will prepare the parameters for the provider
   * This process may have an error
   **/
  onError(error: InteractiveFeedback): any;
};

export type WebbProviderEvents<T = any> = {
  /// event is trigger to show an interactiveFeedback related to the provider
  interactiveFeedback: InteractiveFeedback;
  /// The provider is updated and an action is required to handle this update
  providerUpdate: T;
  /// accountsChange
  newAccounts: AccountsAdapter<any>;
};

export type ProvideCapabilities = {
  addNetworkRpc: boolean;
  listenForAccountChange: boolean;
  listenForChainChane: boolean;
  hasSessions: boolean;
};

export type NotificationKey = string | number;
export type VariantType = 'default' | 'error' | 'success' | 'warning' | 'info';
/**
 * Notification data
 *
 * @param persist - Either the Notification is kept for future manual removal or by an event
 * @param message - Main message/ title for the notification
 * @param description - Description about the Notification
 * @param variant - Notification variant that can be used to style the notification
 * @param action - Arbitrary action that can be used  for clicking the notification (Not implemented)
 **/
export type NotificationData = {
  persist: boolean;
  message: string;
  description: string;
  variant: VariantType;
  action: string;
};

export type NotificationApi = {
  addToQueue(data: NotificationData): NotificationKey;
  remove(key: NotificationKey): void;
};
type MethodPath = {
  // Main section for the Transaction
  section: string;
  // The call name
  method: string;
};

export type TXNotificationPayload<T = undefined> = {
  // Generic data for the transaction payload
  data: T;
  // notification key
  key: NotificationKey;
  address: string;
  // More metadata for the transaction path (EX Anchor::Deposit ,VAnchor::Withdraw)
  path: MethodPath;
};
/**
 * Transaction notification provider
 *
 * @param loading - Transaction status is in progress
 * @param failed - Transaction failed
 * @param finalize - Transaction Done with success
 **/
export type TXNotification = {
  loading(payload: TXNotificationPayload<any>): NotificationKey;
  failed(payload: TXNotificationPayload<any>): NotificationKey;
  finalize(payload: TXNotificationPayload<any>): NotificationKey;
};
export type NotificationLevel =
  | 'loading'
  | 'error'
  | 'success'
  | 'warning'
  | 'info';
/**
 * Notification emitted from the webb provider
 *
 * @param message - Title of the notification
 * @param description - details about the notification
 * @param name - Event name/ event identifier
 * @param key - key for a given notification can be used to remove/dismiss a notification
 * @param level - level
 * @param data - Record for more metadata
 * @param persist - if true the notification will be dismissed by the user or with another action
 **/
export type NotificationPayload = {
  message: string;
  description: string;
  name: 'Transaction';
  key: string;
  level: NotificationLevel;
  data?: Record<string, string>;
  persist?: boolean;
};
// Function call to register a notification
export type NotificationHandler = ((
  notification: NotificationPayload
) => string | number) & {
  // remove the notification programmatically
  remove(key: string | number): void;
};

/**
 * The representation of an api provider
 *
 * @param {AccountsAdapter} accounts - Accounts Adapter will have all methods related to the provider accounts.
 * @param {WebbState} state - State of the provider
 * @param {WebbMethods} methods - All of the available methods  of the API provider.
 * @param {Backend} backend - Backend for the provider
 * @param {() => Promise<void> | void} destroy -  A hook will be called to drop the provider and do cleanup listeners etc.
 * @param {ProvideCapabilities} capabilities - Manifesto of the supported actions of the provider.
 * @param {() => Promise<void> | undefined} endSession - Clean up for the provider that will remove the side effects.
 * @param {WebbRelayerManager} relayingManager - Object used by the provider for sending transactions or queries to a compatible relayer.
 * @param {any} getProvider - A getter method for getting the underlying provider
 * @param {NotificationHandler} notificationHandler - Function for emitting notification of the current provider process
 *
 **/
export interface WebbApiProvider<T> extends EventBus<WebbProviderEvents> {
  accounts: AccountsAdapter<unknown>;
  state: WebbState;
  methods: WebbMethods<WebbProviderType, WebbApiProvider<T>>;
  backend: Backend;

  relayChainMethods: RelayChainMethods<WebbApiProvider<T>> | null;
  noteManager: NoteManager | null;
  typedChainidSubject: BehaviorSubject<number>;

  type: WebbProviderType;

  destroy(): Promise<void> | void;

  capabilities?: ProvideCapabilities;

  endSession?(): Promise<void>;

  relayerManager: WebbRelayerManager<WebbProviderType, RelayerCMDBase>;

  getProvider(): any;

  // Used by frontend to prevent unsupported actions
  // e.g. attempting to fetch available tokens from a DKG chain.
  ensureApiInterface(): Promise<boolean>;

  // Configuration passed to the ApiProvider on initialization.
  // Then, the config is used as state for the provider.
  config: ApiConfig;

  // Notification handler
  notificationHandler: NotificationHandler;

  // new block observable
  newBlock: Observable<bigint | null>;

  /** Get the latest block number */
  getBlockNumber(): bigint | null;

  // get zk fixtures
  getZkFixtures: (maxEdges: number, isSmall?: boolean) => Promise<ZkComponents>;

  // get vanchor max edges
  getVAnchorMaxEdges: (
    vAnchorAddress: string,
    provider?: PublicClient | ApiPromise
  ) => Promise<number>;

  // get vanchor levels
  getVAnchorLevels: (
    vAnchorAddressOrTreeId: string,
    providerOrApi?: PublicClient | ApiPromise
  ) => Promise<number>;

  // generate utxo
  generateUtxo: (input: UtxoGenInput) => Promise<Utxo>;

  getVAnchorLeaves(
    vanchor:
      | GetContractReturnType<typeof VAnchor__factory.abi, PublicClient>
      | ApiPromise,
    storage: Storage<BridgeStorage>,
    options: {
      treeHeight: number;
      targetRoot: string;
      commitment: bigint;
      importMetaUrl: string;
      treeId?: number;
      palletId?: number;
      tx?: TransactionExecutor<NewNotesTxResult>;
    }
  ): Promise<{
    provingLeaves: string[];
    commitmentIndex: number;
  }>;
}
