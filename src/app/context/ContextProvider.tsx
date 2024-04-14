'use client'
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { EthersExtension } from "@dynamic-labs/ethers-v6";
import {
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";
import React, { ReactNode } from 'react';



interface ContextProviderProps {
  children: ReactNode;
}


const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {


  return (
    <DynamicContextProvider 
      settings={{ 
        environmentId: '622731b3-a151-4656-8b08-de858d71d397',
        walletConnectors: [EthereumWalletConnectors],
        networkValidationMode: "always",
        walletConnectorExtensions: [EthersExtension],
        evmNetworks: [
          {
            blockExplorerUrls: ['https://explorer.degen.tips'],
            chainId: 666666666,
            chainName: 'Degen Chain',
            iconUrls: ['https://your-icon-url.com/degen-chain-icon.svg'],
            name: 'Degen',
            nativeCurrency: {
              decimals: 18,
              name: 'DEGEN',
              symbol: 'DEGEN',
            },
            networkId: 666666666,
            rpcUrls: ['https://rpc.degen.tips'],
            vanityName: 'Degen Chain',
          },
        ]
      }}
      > 
     
      {children}
      
    </DynamicContextProvider> 
  );
};

export default ContextProvider;
