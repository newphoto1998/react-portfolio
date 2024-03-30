import Profile from "../../animation/profile.json";
import Lottie from "lottie-react";

function About() {
  return (
    <>
      <div className="overflow-hidden bg-[#04152D]" id="About">
    
          <div className="p-10 mt-16 h-auto md:h-[450px] max-w-[1170px] m-auto bg-[#0C0C0C99] rounded-xl ">
           
            <div className="flex flex-col md:flex-row justify-between items-center ">
              <div className="w-500">
          
                <Lottie
                  className="md:w-[450px] h-[450px] bg-cover md:ml-[-100px]"
                  animationData={Profile}
                />
              </div>
              <div className="w-auto md:w-4/5 text-white mb-20">
              <h1 className=" text-4xl font-bold text-center md:text-left , ">
                  Who I am
                </h1>
                <h1 className="text-lg  mt-10 text-left">
                  My name is Phatcharaphon Fongsamut. I'm a system developer in
                  Thailand
                </h1>

                <br />

                <h1 className="text-lg text-left">
                  I am a professional and passionate programmer in my daily
                  life. A quick learner with a self-learning attitude. I love to
                  learn and explore new technologies and am Passionate about
                  Problem Solving. Love almost all the stacks of Software
                  Engineering. My current stack includes C#.net, NodeJs, React,
                  NextJs, Redux, Bootstrap, Ant Design, Material UI, MSSQL etc.
                </h1>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
}

export default About;
