import "./App.css";
import Contract from "./components/Contract/Contract";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Number from "./components/Number/Number";
import Portfolio from "./components/Portfolio/Portfolio";
import Profile from "./components/Profile/Profile";
import Services from "./components/Service/Services";
import Skill from "./components/Skill/Skills";
import Testimoials from "./components/Testimonials/Testimoials";
import AnimatedCursor from "react-animated-cursor";
function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="0, 65, 125"
        outerAlpha={0.2}
        innerScale={1.5}
        outerStyle={{
          border: '3px solid #fff',
        }}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Navbar />
      <Profile />
      <Skill />
      <Services />
      <Portfolio />
      <Number />
      <Testimoials />
      <Contract />
      <Footer />
    </>
  );
}

export default App;
