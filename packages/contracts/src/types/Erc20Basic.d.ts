/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { EventFragment, FunctionFragment, Result } from '@ethersproject/abi';
import { BytesLike } from '@ethersproject/bytes';
import { CallOverrides, Contract, ContractTransaction, Overrides } from '@ethersproject/contracts';
import { Listener, Provider } from '@ethersproject/providers';
import { BigNumber, BigNumberish, ethers, EventFilter, PopulatedTransaction, Signer } from 'ethers';

interface Erc20BasicInterface extends ethers.utils.Interface {
  functions: {
    '_totalSupply()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: '_totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
  encodeFunctionData(functionFragment: 'transfer', values: [string, BigNumberish]): string;

  decodeFunctionResult(functionFragment: '_totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;

  events: {
    'Transfer(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
}

export class Erc20Basic extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Erc20BasicInterface;

  functions: {
    _totalSupply(overrides?: Overrides): Promise<ContractTransaction>;

    '_totalSupply()'(overrides?: Overrides): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    'totalSupply()'(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    balanceOf(
      who: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    'balanceOf(address)'(
      who: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    transfer(to: string, value: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    'transfer(address,uint256)'(to: string, value: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;
  };

  _totalSupply(overrides?: Overrides): Promise<ContractTransaction>;

  '_totalSupply()'(overrides?: Overrides): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

  balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

  'balanceOf(address)'(who: string, overrides?: CallOverrides): Promise<BigNumber>;

  transfer(to: string, value: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  'transfer(address,uint256)'(to: string, value: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    _totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    '_totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceOf(address)'(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    transfer(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;

    'transfer(address,uint256)'(to: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimateGas: {
    _totalSupply(overrides?: Overrides): Promise<BigNumber>;

    '_totalSupply()'(overrides?: Overrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    'balanceOf(address)'(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    transfer(to: string, value: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    'transfer(address,uint256)'(to: string, value: BigNumberish, overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _totalSupply(overrides?: Overrides): Promise<PopulatedTransaction>;

    '_totalSupply()'(overrides?: Overrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'totalSupply()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(who: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'balanceOf(address)'(who: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(to: string, value: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>;

    'transfer(address,uint256)'(to: string, value: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
