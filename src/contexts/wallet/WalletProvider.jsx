import React, { createContext, useCallback, useMemo, useState } from "react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
function onError(error) {
  console.debug(`web3-react error: ${error}`);
}

export const walletContext = createContext({});
function WalletProvider({ children }) {
  //   const [account, setAccount] = useState("");
  const { activate, account, chainId } = useWeb3React();

  const injected = new InjectedConnector({
    supportedChainIds: [4002],
  });

  const connectWallet = useCallback(async () => {
    try {
      await activate(injected);
      console.log(injected, account, chainId);
    } catch (error) {
      console.log(error);
    }
  }, [injected, activate, chainId, account]);

  //context values
  const values = { connectWallet };
  return (
    <walletContext.Provider value={values}>{children}</walletContext.Provider>
  );
}

export default WalletProvider;
