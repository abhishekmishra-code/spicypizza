// import("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Location from "./components/Location";
import Promise from "./components/Promise";
import Specials from "./components/Specials";

function App() {
  
  return (
    <>
      <Header />
      <Home />
      <Specials />
      <Promise />
      <Location />
      <Footer />
    </>
  );
}

export default App;
