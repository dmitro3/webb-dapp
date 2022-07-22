import {
  AppConfig,
  CurrencyId,
  CurrencyRole,
  CurrencyType,
  PresetTypedChainId,
  zeroAddress,
} from '@webb-dapp/api-providers';
import GanacheLogo from '@webb-dapp/apps/configs/logos/chains/GanacheLogo';
import HarmonyLogo from '@webb-dapp/apps/configs/logos/chains/HarmonyLogo';
import { MoonbeamLogo } from '@webb-dapp/apps/configs/logos/chains/MoonbeamLogo';
import PolygonLogo from '@webb-dapp/apps/configs/logos/chains/PolygonLogo';
import ShidenLogo from '@webb-dapp/apps/configs/logos/chains/ShidenLogo';
import WEBBLogo from '@webb-dapp/apps/configs/logos/chains/WebbLogo';
import EtherLogo from '@webb-dapp/apps/configs/logos/Eth';
import WebbWrappedLogo from '@webb-dapp/apps/configs/logos/WebbWrappedLogo';
import React from 'react';

export const currenciesConfig: AppConfig['currencies'] = {
  [CurrencyId.ETH]: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
    color: '',
    id: CurrencyId.ETH,
    type: CurrencyType.NATIVE,
    role: CurrencyRole.Wrappable,
    icon: React.createElement(EtherLogo),
    addresses: new Map([
      [PresetTypedChainId.Ropsten, zeroAddress],
      [PresetTypedChainId.Rinkeby, zeroAddress],
      [PresetTypedChainId.Goerli, zeroAddress],
      [PresetTypedChainId.Kovan, zeroAddress],
      [PresetTypedChainId.OptimismTestnet, zeroAddress],
      [PresetTypedChainId.ArbitrumTestnet, zeroAddress],
      [PresetTypedChainId.HermesLocalnet, zeroAddress],
      [PresetTypedChainId.AthenaLocalnet, zeroAddress],
      [PresetTypedChainId.DemeterLocalnet, zeroAddress],
    ]),
  },
  [CurrencyId.ONE]: {
    name: 'Harmony',
    symbol: 'ONE',
    decimals: 18,
    color: '',
    id: CurrencyId.ONE,
    type: CurrencyType.NATIVE,
    role: CurrencyRole.Wrappable,
    icon: React.createElement(HarmonyLogo),
    addresses: new Map([
      [PresetTypedChainId.HarmonyMainnet0, zeroAddress],
      [PresetTypedChainId.HarmonyTestnet0, zeroAddress],
      [PresetTypedChainId.HarmonyTestnet1, zeroAddress],
    ]),
  },
  // This currency represents the native currency
  // of a protocol-substrate local chain.
  [CurrencyId.WEBB]: {
    name: 'WEBB',
    symbol: 'WEBB',
    decimals: 12,
    color: '',
    id: CurrencyId.WEBB,
    type: CurrencyType.NATIVE,
    role: CurrencyRole.Wrappable,
    icon: React.createElement(WEBBLogo),
    addresses: new Map([
      [PresetTypedChainId.EggStandalone, '0'],
      [PresetTypedChainId.DkgSubstrateStandalone, '0'],
      [PresetTypedChainId.ProtocolSubstrateStandalone, '0'],
    ]),
  },
  [CurrencyId.SDN]: {
    name: 'Shiden',
    symbol: 'SDN',
    decimals: 18,
    color: '',
    id: CurrencyId.SDN,
    type: CurrencyType.NATIVE,
    role: CurrencyRole.Wrappable,
    icon: React.createElement(ShidenLogo),
    addresses: new Map([[PresetTypedChainId.Shiden, zeroAddress]]),
  },
  [CurrencyId.WETH]: {
    name: 'Wrapped Ethereum',
    symbol: 'WETH',
    decimals: 18,
    color: '',
    id: CurrencyId.WETH,
    type: CurrencyType.ERC20,
    role: CurrencyRole.Wrappable,
    imageUrl: 'https://www.polysa.finance/images/farms/weth.png',
    icon: React.createElement(EtherLogo),
    addresses: new Map([
      [PresetTypedChainId.Ropsten, '0xc778417E063141139Fce010982780140Aa0cD5Ab'],
      [PresetTypedChainId.Rinkeby, '0xc778417E063141139Fce010982780140Aa0cD5Ab'],
      [PresetTypedChainId.Goerli, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'],
      [PresetTypedChainId.Kovan, '0xd0A1E359811322d97991E03f863a0C30C2cF029C'],
      [PresetTypedChainId.OptimismTestnet, '0xbC6F6b680bc61e30dB47721c6D1c5cde19C1300d'],
      [PresetTypedChainId.ArbitrumTestnet, '0xEBbc3452Cc911591e4F18f3b36727Df45d6bd1f9'],
      [PresetTypedChainId.PolygonTestnet, '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'],
      [PresetTypedChainId.MoonbaseAlpha, '0xD909178CC99d318e4D46e7E66a972955859670E1'],
    ]),
  },
  [CurrencyId.MATIC]: {
    name: 'Polygon',
    symbol: 'MATIC',
    decimals: 18,
    color: '',
    id: CurrencyId.MATIC,
    type: CurrencyType.NATIVE,
    role: CurrencyRole.Wrappable,
    icon: React.createElement(PolygonLogo),
    addresses: new Map([[PresetTypedChainId.PolygonTestnet, zeroAddress]]),
  },
  [CurrencyId.webbETH]: {
    name: 'webbETH',
    symbol: 'webbETH',
    decimals: 18,
    color: '',
    id: CurrencyId.webbETH,
    type: CurrencyType.ERC20,
    role: CurrencyRole.Governable,
    icon: WebbWrappedLogo(EtherLogo()),
    addresses: new Map([
      [PresetTypedChainId.Ropsten, '0x91aE682aaeFE8e3c5059b170570D6fa42435C141'],
      [PresetTypedChainId.Rinkeby, '0x4953110789D0cB6de126f4EA88890670ccfe6906'],
      [PresetTypedChainId.Goerli, '0x6447F077a6cD8dadB9D3daD9f6C4B5a06183b5d7'],
      [PresetTypedChainId.PolygonTestnet, '0x682FaA319Bf7baE7F0cb68435e857d22Bf976e17'],
      [PresetTypedChainId.OptimismTestnet, '0x9898b4968fDD84b3aB0E901296F54775bA2fa6b5'],
      [PresetTypedChainId.ArbitrumTestnet, '0x88b7cb281650e7b161640790515fafe362c255c6'],
      [PresetTypedChainId.Kovan, '0x91a9a1e76fa609F6ba8fCd718a60B030678765ad'],
      [PresetTypedChainId.MoonbaseAlpha, '0xb30b0bf0CD3a73F97679c962424d4EF8dfe8e13D'],
    ]),
  },
  [CurrencyId.DEV]: {
    name: 'Development Token',
    symbol: 'DEV',
    decimals: 18,
    color: '',
    id: CurrencyId.DEV,
    type: CurrencyType.ERC20,
    role: CurrencyRole.Wrappable,
    icon: React.createElement(GanacheLogo),
    addresses: new Map([
      [PresetTypedChainId.HermesLocalnet, '0x2946259E0334f33A064106302415aD3391BeD384'],
      [PresetTypedChainId.AthenaLocalnet, '0xDe09E74d4888Bc4e65F589e8c13Bce9F71DdF4c7'],
      [PresetTypedChainId.DemeterLocalnet, '0xF2E246BB76DF876Cef8b38ae84130F4F55De395b'],
    ]),
  },
  [CurrencyId.webbDEV]: {
    name: 'Webb Development Token',
    symbol: 'webbDEV',
    decimals: 18,
    color: '',
    id: CurrencyId.webbDEV,
    type: CurrencyType.ERC20,
    role: CurrencyRole.Governable,
    icon: WebbWrappedLogo(GanacheLogo()),
    addresses: new Map([
      [PresetTypedChainId.HermesLocalnet, '0xD30C8839c1145609E564b986F667b273Ddcb8496'],
      [PresetTypedChainId.AthenaLocalnet, '0xD24260C102B5D128cbEFA0F655E5be3c2370677C'],
      [PresetTypedChainId.DemeterLocalnet, '0xe69a847CD5BC0C9480adA0b339d7F0a8caC2B667'],
    ]),
  },
  [CurrencyId.TEST]: {
    name: 'Test Token',
    symbol: 'TEST',
    decimals: 18,
    color: '',
    id: CurrencyId.TEST,
    type: CurrencyType.ORML,
    role: CurrencyRole.Governable,
    icon: React.createElement(GanacheLogo),
    addresses: new Map([[PresetTypedChainId.ProtocolSubstrateStandalone, '1']]),
  },
  [CurrencyId.KSM]: {
    name: 'Kusama',
    symbol: 'KSM',
    decimals: 12,
    color: '',
    id: CurrencyId.KSM,
    type: CurrencyType.NATIVE,
    role: CurrencyRole.Wrappable,
    icon: React.createElement(WEBBLogo),
    addresses: new Map([[PresetTypedChainId.Kusama, '0']]),
  },
  [CurrencyId.DOT]: {
    name: 'Polkadot',
    symbol: 'DOT',
    decimals: 10,
    color: '',
    id: CurrencyId.DOT,
    type: CurrencyType.NATIVE,
    role: CurrencyRole.Wrappable,
    icon: React.createElement(WEBBLogo),
    addresses: new Map([[PresetTypedChainId.Polkadot, '0']]),
  },
  [CurrencyId.moonDEV]: {
    name: 'moonbase Dev',
    symbol: 'moonDEV',
    decimals: 12,
    color: '',
    id: CurrencyId.moonDEV,
    type: CurrencyType.NATIVE,
    role: CurrencyRole.Wrappable,
    icon: React.createElement(MoonbeamLogo),
    addresses: new Map([[PresetTypedChainId.MoonbaseAlpha, '0']]),
  },
};

// on startup build a new map
// currency Address => currency ID
const createReverseCurrencyMap = (): Map<string, CurrencyId> => {
  let contractMapping = new Map<string, CurrencyId>();

  Object.values(currenciesConfig).forEach((config) => {
    config.addresses.forEach((addressEntry) => {
      contractMapping.set(addressEntry, config.id as CurrencyId);
    });
  });

  return contractMapping;
};

export const reverseCurrencyMap = createReverseCurrencyMap();
