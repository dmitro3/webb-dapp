export enum EVMChainId {
  /* Default EVM Chains on MetaMask */
  EthereumMainNet = 1,
  Goerli = 5,
  Sepolia = 11155111,
  Ganache = 1337,

  /* Added EVM Chains on MetaMask */
  Edgeware = 2021,
  HarmonyTestnet0 = 1666700000,
  HarmonyTestnet1 = 1666700001,
  Shiden = 336,
  OptimismTestnet = 420,
  ArbitrumTestnet = 421613,
  PolygonTestnet = 80001,
  MoonbaseAlpha = 1287,
  AvalancheFuji = 43113,
  ScrollAlpha = 534353,
  TangleTestnet = 4006,

  /** Self hosted EVM */
  AthenaOrbit = 3884533461,
  HermesOrbit = 3884533462,
  DemeterOrbit = 3884533463,

  /** Local EVM */
  HermesLocalnet = 5001,
  AthenaLocalnet = 5002,
  DemeterLocalnet = 5003,
}

export default EVMChainId;
