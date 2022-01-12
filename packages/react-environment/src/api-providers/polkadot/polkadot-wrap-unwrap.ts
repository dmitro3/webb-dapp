import { MixerSize } from '@webb-dapp/react-environment';
import { WebbPolkadot } from '@webb-dapp/react-environment/api-providers';
import {
  Amount,
  WrappingBalance,
  WrappingEvent,
  WrappingTokenId,
  WrapUnWrap,
} from '@webb-dapp/react-environment/webb-context/wrap-unwrap';
import { Observable } from 'rxjs';

export class PolkadotWrapUnwrap extends WrapUnWrap<WebbPolkadot> {
  canWrap(wrapPayload: any): Promise<boolean> {
    return Promise.resolve(false);
  }

  getSizes(): Promise<MixerSize[]> {
    return Promise.resolve([]);
  }

  getTokensAddress(): Promise<string> {
    return Promise.resolve('');
  }

  unwrap(unwrapPayload: any): Promise<string> {
    return Promise.resolve('');
  }

  wrap(wrapPayload: any): Promise<string> {
    return Promise.resolve('');
  }

  get balances(): Observable<[WrappingBalance, WrappingBalance]> {
    return new Observable();
  }

  canUnWrap(unwrapPayload: Amount): Promise<boolean> {
    return Promise.resolve(false);
  }

  getGovernedTokens(): Promise<WrappingTokenId[]> {
    return Promise.resolve([]);
  }

  getNativeTokens(): Promise<WrappingTokenId[]> {
    return Promise.resolve([]);
  }

  getWrappedTokens(): Promise<WrappingTokenId[]> {
    return Promise.resolve([]);
  }

  get liquidity(): Observable<[WrappingBalance, WrappingBalance]> {
    return new Observable();
  }

  get subscription(): Observable<Partial<WrappingEvent>> {
    return new Observable();
  }
}
