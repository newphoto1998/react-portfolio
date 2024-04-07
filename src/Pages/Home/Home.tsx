import { TypeAnimation } from "react-type-animation";
import { Tilt } from "react-tilt";
import styles from "./Home.module.css";
import { Link } from "react-scroll";

function Home() {
  return (
    <div className="overflow-hidden bg-[#04152D]" id="home">
      <div className="p-4 h-auto md:h-[500px] md:max-w-[1170px] md:m-auto text-white">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-10">
          <div className="text-center text-3xl md:text-left">
            <h1>Hi, it’s me</h1>
            <h1 className="text-white text-4xl md:text-5xl font-bold mt-3 md:text-7xl ">
              Phatcharaphon.F
            </h1>

            <p className="text-2xl md:text-3xl font-thin mt-3">
              <span style={{ marginRight: "10px" }}> I'm a </span>
              <TypeAnimation
                sequence={[
                  "Software Developer",
                  1500,
                  "Full Stack Developer",
                  1500,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </p>

            <ul className="flex justify-center md:justify-start  space-x-5 mt-10 ">
              <li>
                <button
                  className="text-white hover:outline-6 hover:transition ease-in-out delay-150  hover:bg-indigo-500 duration-300 hover:transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:text-white duration-300  font-bold  px-6 py-2 rounded-full text-[24px]"
                  onClick={() => window.open("/assets/CV/CV.pdf", "_blank")}
                >
                  Resume
                </button>
              </li>
              <li>
                <button className="bg-blue-500 hover:bg-slate-600	 text-white font-bold  px-10 py-2 rounded-full text-[24px]">
                  <Link
                    to="Contract"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Contact
                  </Link>
                </button>
              </li>
            </ul>
          </div>

          <Tilt scale={1.2} transitionSpeed={2500} titleReverse={true}>
            {/* <div className="animate-bounce  "> */}
            <div className={styles.profile_img}></div>
            {/* </div> */}
          </Tilt>
          <div className={styles.topBlur}></div>
          <div className={styles.bottomBlur}></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
