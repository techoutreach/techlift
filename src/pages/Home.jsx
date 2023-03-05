import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import useWalletContext from "../contexts/wallet/hooks";

const Home = () => {
  const { account, error } = useWeb3React();
  const { connectWallet } = useWalletContext();
  return (
    <div className="">
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-2xl font-bold">Welcome to Techlift! </div>
          <div className="max-w-[58ch] text-center my-4 mb-10">
            Our app is the ultimate destination for tech enthusiasts. Not only
            can you request and donate your favorite favorite devices, but you
            can also earn rewards by been a patron to the tech communities and
            gain recognition.
          </div>
          <div className="mb-8">
            So why wait? Support a tech enthusiast journey today!
          </div>
          {!window?.web3 || !window.ethereum ? (
            <a href="https://metamask.io/">Please install metamask</a>
          ) : error ? (
            <div>
              {error instanceof UnsupportedChainIdError
                ? "Unsupported network"
                : { error }}
            </div>
          ) : !account ? (
            <button
              onClick={() => connectWallet()}
              className="bg-primary px-4 py-2 drop-shadow-lg hover:scale-110 transition duration-200 text-white rounded-2xl shadow"
            >
              Connect Wallet
            </button>
          ) : (
            <div>connected: {account}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
