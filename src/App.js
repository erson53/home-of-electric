import "./App.css";
import Contactdata from "./components/Contactdata";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Servicecarousel from "./components/Servicecarousel";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Home />
      <Welcome />
      <Servicecarousel />
      <Contactdata />
      <Footer />
    </div>
  );
}

export default App;
