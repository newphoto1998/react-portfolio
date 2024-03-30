import About from "../Pages/About/About";
import Contract from "../Pages/Contract/Contract";
import Education from "../Pages/Education/Education";
import Experience from "../Pages/Experience/Experience";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
function PortfolioLayout() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contract/>
      {/* <Footer /> */}
    </>
  );
}

export default PortfolioLayout;
