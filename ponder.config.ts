import { createConfig } from "ponder";
import { http } from "viem";

import { PricingDAOAbi } from "./abis/PricingDAOAbi";
import { EFTAbi } from "./abis/EFTAbi";
import { AaveVaultAbi } from "./abis/AaveVaultAbi";

export default createConfig({
  chains: {
    sepolia: {
      id: 11155111,
      rpc: process.env.PONDER_RPC_URL_11155111,
    },
  },
  contracts: {
    PricingDAO: {
      chain: "sepolia",
      abi: PricingDAOAbi,
      address: "0x84C41DEe19DeB10420621fD25887874B58735400",
      startBlock: 9819937,
    },
    EFT: {
      chain: "sepolia",
      abi: EFTAbi,
      address: "0xc5868984c142AB55Aa8928982bA8Ac313500EF01",
      startBlock: 9819937,
    },
    AaveVault: {
      chain: "sepolia",
      abi: AaveVaultAbi,
      address: "0xA856134BE466e248c0d3865CAd1737580897477D",
      startBlock: 9819937,
    },
  },
});
