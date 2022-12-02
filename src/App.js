import "./App.css";
import Clients from "./Components/Clients/Clients";
import Contact from "./Components/Contact/Contact";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Hero/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
