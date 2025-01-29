# Aave Example

This repository contains TypeScript examples for interacting with the [Aave Protocol](https://aave.com).

## Prerequisites

1. Install [Node.js](https://nodejs.org/) (recommended version **18 or higher**)
2. Install [pnpm](https://pnpm.io/)

```sh
    npm install -g pnpm
```

3. Install dependencies

```sh
    pnpm install
```

4.  Run individual scripts

    a. Live Data

```sh
    pnpm ts-node data/live-rates.ts <market_name>
```

`<market_name>` options: ethereum_core_v3, ethereum_prime_v3, ethereum_etherfi_v3, base_v3, polygon_v3, avalanche_v3, fantom_v3, harmony_v3, gnosis_v3, arbitrum_v3, optimism_v3, scroll_v3, zksync_v3, bnb_v3, metis_v3, ethereum_core_v2, ethereum_amm_v2, polygon_v2, avalanche_v2
