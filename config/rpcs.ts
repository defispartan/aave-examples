export const rpcConfig: Record<number, string[]> = {
    [1]: [ // Ethereum Mainnet
        "https://ethereum.publicnode.com",
        "https://rpc.ankr.com/eth",
        "https://eth.llamarpc.com",
        "https://cloudflare-eth.com"
    ],
    [8453]: [ // Base Mainnet
        "https://mainnet.base.org",
        "https://base.llamarpc.com"
    ],
    [137]: [ // Polygon Mainnet
        "https://polygon-rpc.com",
        "https://rpc.ankr.com/polygon",
        "https://polygon.llamarpc.com"
    ],
    [43114]: [ // Avalanche C-Chain
        "https://api.avax.network/ext/bc/C/rpc",
        "https://rpc.ankr.com/avalanche",
        "https://avax.meowrpc.com"
    ],
    [250]: [ // Fantom Mainnet
        "https://rpc.ftm.tools",
        "https://fantom.publicnode.com",
        "https://rpc.ankr.com/fantom"
    ],
    [1666600000]: [ // Harmony Mainnet
        "https://rpc.hermesdefi.io",
        "https://harmony.publicnode.com",
        "https://api.harmony.one"
    ],
    [100]: [ // Gnosis Chain (formerly xDai)
        "https://rpc.gnosischain.com",
        "https://gnosis.publicnode.com",
        "https://xdai-rpc.gateway.pokt.network"
    ],
    [42161]: [ // Arbitrum One
        "https://arb1.arbitrum.io/rpc",
        "https://arbitrum.publicnode.com",
        "https://rpc.ankr.com/arbitrum"
    ],
    [10]: [ // Optimism Mainnet
        "https://mainnet.optimism.io",
        "https://optimism.publicnode.com",
        "https://rpc.ankr.com/optimism"
    ],
    [534352]: [ // Scroll Mainnet
        "https://rpc.scroll.io",
        "https://scroll.publicnode.com"
    ],
    [324]: [ // zkSync Era Mainnet
        "https://mainnet.era.zksync.io",
        "https://zksync.publicnode.com"
    ],
    [56]: [ // BNB Chain (Binance Smart Chain)
        "https://bsc-dataseed1.binance.org",
        "https://rpc.ankr.com/bsc",
        "https://bsc.publicnode.com"
    ],
    [1088]: [ // Metis Andromeda Mainnet
        "https://andromeda.metis.io/?owner=1088",
        "https://metis.publicnode.com"
    ]
};
