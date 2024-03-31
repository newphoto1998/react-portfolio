import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Contract() {
  return (
    <div className="overflow-hidden bg-[#19376D]" id="Contract">
      <div className="p-5 md:h-[320px] md:max-w-[1170px] md:m-auto text-white ">
        <div className="flex flex-col md:flex-row justify-between align-items-start mt-8 ">
          <div className="text-center grid content-center grow">
            <h1 className="text-3xl md:text-5xl font-bold ">CONTRACT</h1>
            <br />
            <h1 className="text-2xl md:text-4xl font-bold ">
              Feel free to reach out !
            </h1>
          </div>
          <div className="flex-col grid md:justify-items-start space-y-10 mt-10 md:mt-0">
            <div className="">
              <FaGithub className="w-[35px] h-[45px] md:w-[30px] md:h-[50px] inline" />
              <h1 className="text-xl md:text-2xl inline">
                &nbsp;&nbsp;github.com/newphoto1998
              </h1>
            </div>
            <div>
              <FaLinkedin className="w-[32px] h-[45px] md:w-[30px] md:h-[50px] inline" />
              <h1 className="text-xl md:text-2xl inline">
                &nbsp;linkedin.com/new-patcharaphon
              </h1>
            </div>
            <div>
              <MdEmail className="w-[35px] h-[45px] md:w-[30px] md:h-[50px] inline" />
              <h1 className="text-xl md:text-2xl inline">
                &nbsp;&nbsp;patcharaphon1998@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contract;
