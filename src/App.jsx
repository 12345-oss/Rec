import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Sobre from "./Pages/Sobre";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contato" element={<Contato/>}/>
        <Route path="/Sobre" element={<Sobre/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
