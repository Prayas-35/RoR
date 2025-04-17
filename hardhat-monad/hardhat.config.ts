import type { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-ignition-viem";
import "@nomicfoundation/hardhat-ethers";
import "dotenv/config";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const RPC_URL_MONAD = process.env.RPC_URL_MONAD || "https://testnet-rpc.monad.xyz";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    monadTestnet: {
      url: RPC_URL_MONAD,
      accounts: [PRIVATE_KEY],
      chainId: 10143,
    },
  },
  etherscan: {
    enabled: false,
  },
  sourcify: {
    enabled: true,
    apiUrl: "https://sourcify-api-monad.blockvision.org",
    browserUrl: "https://testnet.monadexplorer.com",
  },
};

export default config;