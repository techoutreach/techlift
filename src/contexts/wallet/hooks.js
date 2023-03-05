import { useContext } from "react";
import { walletContext } from "./WalletProvider";

const useWalletContext = () => useContext(walletContext);
export default useWalletContext;
