import { UiPoolDataProvider } from "@aave/contract-helpers";
import { StaticJsonRpcProvider } from "@ethersproject/providers";
import { formatReserves } from "@aave/math-utils";
import dayjs from "dayjs";
import { rpcConfig } from "../config/rpcs";
import { marketConfig } from "../config/markets";

async function fetchReserves(market: string) {
    if (!marketConfig[market]) {
        console.error("❌ Invalid market! Please provide one of:", Object.keys(marketConfig).join(", "));
        return;
    }

    const { chainId, lendingPoolAddressProvider, uiPoolDataProvider, marketName } = marketConfig[market];

    const rpcUrls = rpcConfig[chainId];

    if (!rpcUrls || rpcUrls.length === 0) {
        console.error(`❌ No RPC URLs found for ${market}`);
        return;
    }

    console.log(`✅ Fetching reserves for ${market} on Aave...`);

    const provider = new StaticJsonRpcProvider(rpcUrls[0], chainId);
    const currentTimestamp = dayjs().unix();

    try {
        const poolDataProviderContract = new UiPoolDataProvider({
            uiPoolDataProviderAddress: uiPoolDataProvider,
            provider,
            chainId,
        });

        const reserves = await poolDataProviderContract.getReservesHumanized({
            lendingPoolAddressProvider,
        });

        const formattedPoolReserves = formatReserves({
            reserves: reserves.reservesData,
            currentTimestamp,
            marketReferenceCurrencyDecimals: reserves.baseCurrencyData.marketReferenceCurrencyDecimals,
            marketReferencePriceInUsd: reserves.baseCurrencyData.marketReferenceCurrencyPriceInUsd,
        });

        console.log(`🔹 Reserves for ${market}:`);
        console.table(
            formattedPoolReserves.map((n) => ({
                symbol: n.symbol,
                supplyRate: `${(parseFloat(n.supplyAPY) * 100).toFixed(2)}%`,
                borrowRate: `${(parseFloat(n.variableBorrowAPY) * 100).toFixed(2)}%`,
            }))
        );
    } catch (error) {
        console.error("❌ Error fetching reserves:", error);
    }
}

const args = process.argv.slice(2);
const market = args[0];

if (!market) {
    console.error("❌ You must specify a market! Example: node --loader ts-node/esm data/live-rates.ts ethereum_core_v3");
} else {
    fetchReserves(market);
}
