import { createConfig } from "ponder";
import { http } from "viem";

import { PricingDAOAbi } from "./abis/PricingDAOAbi";
import { EFTAbi } from "./abis/EFTAbi";
import { AaveVaultAbi } from "./abis/AaveVaultAbi";

const isLocal = process.env.PONDER_CHAIN !== "sepolia";

// Contract addresses per network
const addresses = {
  hardhat: {
    PricingDAO: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
    EFT: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
    AaveVault: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
    fromBlock: 0
  },
  sepolia: {
    PricingDAO: "0x5325677B41090e00067807465B927B5cB13580Ce",
    EFT: "0xBEeb8a8b5a3F1C206b47907432c82Ecec9d99A84",
    AaveVault: "0x41c131B337c57bf08eBeb384bc498E40E3351A79",
    fromBlock: 9832999
  },
};

const network = isLocal ? "hardhat" : "sepolia";
const addr = addresses[network];

export default createConfig({
  chains: {
    [network]: {
      id: isLocal ? 31337 : 11155111,
      rpc: isLocal ? process.env.PONDER_RPC_URL_31337 : process.env.PONDER_RPC_URL_11155111,
    }
  },
  contracts: {
    PricingDAO: {
      chain: network,
      abi: PricingDAOAbi,
      address: addr.PricingDAO,
      startBlock: addr.fromBlock,
    },
    EFT: {
      chain: network,
      abi: EFTAbi,
      address: addr.EFT,
      startBlock: addr.fromBlock,
    },
    AaveVault: {
      chain: network,
      abi: AaveVaultAbi,
      address: addr.AaveVault,
      startBlock: addr.fromBlock,
    },
  },
});
