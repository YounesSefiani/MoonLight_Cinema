import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import CarouselMenu from "./components/CarouselMenu/CarouselMenu";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselMenu />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
