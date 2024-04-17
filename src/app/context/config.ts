

const chains = {
  sepolia: {
    name: "Sepolia Base Testnet",
    jsonProviderUrl: "https://sepolia.base.org",
    contracts: {
      mainContract: "0x6981e82d270BD01D026D0E3E10Ba486337c91923",
      nftContract: "0xd29F55255C784d777Aa7A09063E7D18377446fe2",
    },
  },
  degen: {
    name: "Degen Mainnet",
    jsonProviderUrl: "https://rpc.degen.tips",
    contracts: {
      mainContract: "0x683FE95FB68eC198B397cC6F1d87E31EE38489D2",
      nftContract: "0xDdfb1A53E7b73Dba09f79FCA24765C593D447a80",
    },
  },
};

export const networks = [
  {
    "name": "sepolia",
    "chainId": 84532,
  },
  {
    "name": "degen",
    "chainId": 666666666,
  },
  {
    "name": "base",
    "chainId": 8453,
  }
]



export default chains;
