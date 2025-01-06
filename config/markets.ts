import {
    AaveV3Ethereum,
    AaveV3Arbitrum,
    AaveV3Optimism,
    AaveV3Polygon,
    AaveV3Avalanche,
    AaveV3Fantom,
    AaveV3Harmony,
    AaveV3Metis,
    AaveV3Base,
    AaveV3Gnosis,
    AaveV3BNB,
    AaveV3Scroll,
    AaveV3ZkSync,
    AaveV3EthereumLido,
    AaveV3EthereumEtherFi,
    AaveV2Ethereum,
    AaveV2Avalanche,
    AaveV2Polygon,
    AaveV2EthereumAMM,
} from "@bgd-labs/aave-address-book";

type Market = {
    chainId: number;
    lendingPoolAddressProvider: string;
    uiPoolDataProvider: string;
    marketName: string;
};

export const marketConfig: Record<string, Market> = {
    ethereum_core_v3: {
        chainId: 1,
        lendingPoolAddressProvider: AaveV3Ethereum.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV3Ethereum.UI_POOL_DATA_PROVIDER,
        marketName: "proto_mainnet_v3",
    },
    ethereum_prime_v3: {
        chainId: 1,
        lendingPoolAddressProvider: AaveV3EthereumLido.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV3EthereumLido.UI_POOL_DATA_PROVIDER,
        marketName: "proto_lido_v3",
    },
    ethereum_etherfi_v3: {
        chainId: 1,
        lendingPoolAddressProvider: AaveV3EthereumEtherFi.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV3EthereumEtherFi.UI_POOL_DATA_PROVIDER,
        marketName: "proto_etherfi_v3",
    },
    base_v3: {
        chainId: 8453,
        lendingPoolAddressProvider: AaveV3Base.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV3Base.UI_POOL_DATA_PROVIDER,
        marketName: "proto_base_v3",
    },
    polygon_v3: {
        chainId: 137,
        lendingPoolAddressProvider: AaveV3Polygon.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV3Polygon.UI_POOL_DATA_PROVIDER,
        marketName: "proto_polygon_v3",
    },
    avalanche_v3: {
        chainId: 43114,
        lendingPoolAddressProvider: AaveV3Avalanche.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV3Avalanche.UI_POOL_DATA_PROVIDER,
        marketName: "proto_avalanche_v3",
    },
    fantom_v3: {
        chainId: 250,
        lendingPoolAddressProvider: AaveV3Fantom.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV3Fantom.UI_POOL_DATA_PROVIDER,
        marketName: "proto_fantom_v3",
    },
    harmony_v3: {
        chainId: 1666600000,
        lendingPoolAddressProvider: AaveV3Harmony.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV3Harmony.UI_POOL_DATA_PROVIDER,
        marketName: "proto_harmony_v3",
    },
    gnosis_v3: {
        chainId: 100,
        lendingPoolAddressProvider: AaveV3Gnosis.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV3Gnosis.UI_POOL_DATA_PROVIDER,
        marketName: "proto_gnosis_v3",
    },
    arbitrum_v3: {
        chainId: 42161,
        lendingPoolAddressProvider: AaveV3Arbitrum.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV3Arbitrum.UI_POOL_DATA_PROVIDER,
        marketName: "proto_arbitrum_v3",
    },
    optimism_v3: {
        chainId: 10,
        lendingPoolAddressProvider: AaveV3Optimism.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV3Optimism.UI_POOL_DATA_PROVIDER,
        marketName: "proto_optimism_v3",
    },
    scroll_v3: {
        chainId: 534352,
        lendingPoolAddressProvider: AaveV3Scroll.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV3Scroll.UI_POOL_DATA_PROVIDER,
        marketName: "proto_scroll_v3",
    },
    zksync_v3: {
        chainId: 324,
        lendingPoolAddressProvider: AaveV3ZkSync.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV3ZkSync.UI_POOL_DATA_PROVIDER,
        marketName: "proto_zksync_v3",
    },
    bnb_v3: {
        chainId: 56,
        lendingPoolAddressProvider: AaveV3BNB.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV3BNB.UI_POOL_DATA_PROVIDER,
        marketName: "proto_bnb_v3",
    },
    metis_v3: {
        chainId: 1088,
        lendingPoolAddressProvider: AaveV3Metis.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV3Metis.UI_POOL_DATA_PROVIDER,
        marketName: "proto_metis_v3",
    },
    ethereum_core_v2: {
        chainId: 1,
        lendingPoolAddressProvider: AaveV2Ethereum.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV2Ethereum.UI_POOL_DATA_PROVIDER,
        marketName: "proto_mainnet_v2",
    },
    ethereum_amm_v2: {
        chainId: 1,
        lendingPoolAddressProvider: AaveV2EthereumAMM.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV2EthereumAMM.UI_POOL_DATA_PROVIDER,
        marketName: "amm_mainnet",
    },
    polygon_v2: {
        chainId: 137,
        lendingPoolAddressProvider: AaveV2Polygon.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV2Polygon.UI_POOL_DATA_PROVIDER,
        marketName: "proto_polygon_v2",
    },
    avalanche_v2: {
        chainId: 43114,
        lendingPoolAddressProvider: AaveV2Avalanche.POOL_ADDRESSES_PROVIDER,
        uiPoolDataProvider: AaveV2Avalanche.UI_POOL_DATA_PROVIDER,
        marketName: "proto_avalanche_v2",
    },
};
