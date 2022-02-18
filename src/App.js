import BannerPage from "./components/BannerPage";
import Header from "./components/Header";
import HowDoesItWork from "./components/HowDoesItWork";
import SearchBars from "./components/SearchBars";
import LifeCoaching from "./components/LifeCoaching";
import BlackWater from "./components/BlackWater";
import Brands from "./components/Brands";
import CounterPart from "./components/CounterPart";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <SearchBars/>
      <Header/>
      <BannerPage/>
      <HowDoesItWork/>
      <LifeCoaching/>
      <BlackWater/>
      <Brands/>
      <CounterPart/>
      <Footer/>
    </div>
  );
}

export default App;
