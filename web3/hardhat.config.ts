import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-verify";
import "dotenv/config";

const { PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.29",
  networks: {
    "b3-testnet": {
      url: "https://b3-testnet.rpc.caldera.xyz/http",
      chainId: 1993,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      "b3-testnet": "empty",
    },
    customChains: [
      {
        network: "b3-testnet",
        chainId: 1993,
        urls: {
          apiURL: "https://b3-testnet.explorer.caldera.xyz/api",
          browserURL: "https://b3-testnet.explorer.caldera.xyz",
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
};

export default config;
