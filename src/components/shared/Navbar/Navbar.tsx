import { MdOutlineHome } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlinePortrait } from "react-icons/md";
import { ImBlog } from "react-icons/im";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isToggle, setToggle] = useState<Boolean>(false);

  return (
    <>
      {/* <div className="top-0 mb-20"> */}
      <nav className="p-4 bg-[#04152D]">
        <div className="max-w-[1170px] m-auto">
          <div className="h-[50px] flex justify-between items-center">
            <a className="text-white text-3xl font-bold" href="">
              NewphotoDev.
            </a>
            {/* <ul className="hidden md:flex space-x-16 text-xl text-white font-200 cursor-pointer">
              <li ><Link to="home" spy={true} smooth={true} offset={-100} duration={500} ><MdOutlineHome className="inline" /> Home</Link></li>
              <li><Link to="About" spy={true} smooth={true} offset={-100} duration={500}><IoPersonOutline className="inline"/> About</Link></li>
              <li><Link to="education" spy={true} smooth={true} offset={-100} duration={500}> Education</Link></li>
              <li><Link to="experience"  spy={true} smooth={true} offset={-100} duration={500}><MdOutlinePortrait className="inline" /> Experience</Link></li>
              <li><Link to="Contract"><ImBlog className="inline" /> Contract</Link></li>
            </ul> */}

            <ul className="hidden md:flex space-x-16 text-xl text-white font-200 cursor-pointer">
              <li className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                <Link
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {" "}
                  Education
                </Link>
              </li>
              <li className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {" "}
                  Experience
                </Link>
              </li>
              <li className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                <Link to="Contract">Contract</Link>
              </li>
            </ul>

            <FaBars
              className="items-right md:hidden  text-white"
              onClick={() => setToggle(!isToggle)}
            />
          </div>
        </div>

        {/* responesive */}

        {isToggle && (
          <>
            <ul className="flex flex-col items-center space-y-5 text-xl text-white md:hidden p-5">
              <li>
                <Link to="/" spy={true}>
                  <MdOutlineHome className="inline" /> Home
                </Link>
              </li>
              <li>
                <a href="">
                  <IoPersonOutline className="inline" /> About
                </a>
              </li>
              <li>
                <a href="">
                  <AiOutlineFundProjectionScreen className="inline" /> Project
                </a>
              </li>
              <li>
                <a href="">
                  <MdOutlinePortrait className="inline" /> Resume
                </a>
              </li>
              <li>
                <a href="">
                  <ImBlog className="inline" /> Blogs
                </a>
              </li>
            </ul>
          </>
        )}
      </nav>
      {/* </div> */}
    </>
  );
}

export default Navbar;
