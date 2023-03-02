import { Navbar } from "../components";

const Home = () => {
  return (
    <div className="gradient min-h-screen text-white">
      <Navbar />
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-2xl font-bold">Welcome to Techlift! </div>
          <div className="max-w-[58ch] text-center my-4 mb-10">
            Our app is the ultimate destination for tech enthusiasts. Not only
            can you request and donate your favorite favorite devices, but you
            can also earn rewards by been a patron to the tech communities and
            gain recognition.
          </div>
          <div className="mb-8">So why wait? Support a tech enthusiast journey today!</div>
          <button className="bg-primary px-4 py-2 drop-shadow-lg hover:scale-110 transition duration-200 text-white rounded-2xl shadow">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
