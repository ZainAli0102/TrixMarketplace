import "./App.css";
import Main from "./Components/main/Main";
import NFTsFeatures from "./Components/NFTsFeatures/NFTsFeatures";
import CreateNFTs from "./Components/CreateNFTs/CreateNFTs";
import DiscoverNFTs from "./Components/DiscoverNFTs/DiscoverNFTs";

function App() {
  return (
    <div>
      <Main />
      <NFTsFeatures />
      <CreateNFTs />
      <DiscoverNFTs />
    </div>
  );
}

export default App;
