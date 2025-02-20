import { PresetTypedChainId } from '@webb-tools/dapp-types';

export type GasLimitConfigType = {
  default: bigint;
  [typedChainId: number]: bigint;
};

const gasLimitConfig: GasLimitConfigType = {
  default: BigInt(20000000),

  // EVM
  [PresetTypedChainId.OptimismTestnet]: BigInt(2000000),
  [PresetTypedChainId.PolygonTestnet]: BigInt(2000000),
  [PresetTypedChainId.ArbitrumTestnet]: BigInt(20000000),
  [PresetTypedChainId.Sepolia]: BigInt(2000000),
  [PresetTypedChainId.MoonbaseAlpha]: BigInt(2000000),
  [PresetTypedChainId.Goerli]: BigInt(2000000),
  [PresetTypedChainId.AvalancheFuji]: BigInt(2000000),
  [PresetTypedChainId.ScrollAlpha]: BigInt(2000000),

  // Orbit
  [PresetTypedChainId.HermesOrbit]: BigInt(2000000), // TODO: benchmark gas limit
  [PresetTypedChainId.AthenaOrbit]: BigInt(2000000), // TODO: benchmark gas limit
  [PresetTypedChainId.DemeterOrbit]: BigInt(2000000), // TODO: benchmark gas limit

  // Local Orbit
  [PresetTypedChainId.HermesLocalnet]: BigInt(2000000), // TODO: benchmark gas limit
  [PresetTypedChainId.AthenaLocalnet]: BigInt(2000000), // TODO: benchmark gas limit
  [PresetTypedChainId.DemeterLocalnet]: BigInt(2000000), // TODO: benchmark gas limit

  // Substrate
  // On substrate we don't use the gas amount, we use the partial fee instead
  [PresetTypedChainId.ProtocolSubstrateStandalone]: BigInt(
    '10840000100000000000'
  ), // Temporary
  [PresetTypedChainId.LocalTangleStandalone]: BigInt('10840000100000000000'), // Temporary
};

export default gasLimitConfig;
