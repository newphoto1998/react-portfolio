import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PortfolioLayout from "./Layout/PortfolioLayout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PortfolioLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
