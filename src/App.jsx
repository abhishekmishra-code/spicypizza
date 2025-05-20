// import("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";


function App() {
  

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
