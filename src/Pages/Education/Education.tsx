import education from "../../animation/education.json";
import education_2 from "../../animation/education_2.json";

import Lottie from "lottie-react";
import Educations from "../../Data/Education.json";

function Education() {
  return (
    <>
      <div className="overflow-hidden bg-[#04152D]" id="education">
        <div className="p-5 md:h-[500px] md:max-w-[1170px] md:m-auto text-white ">
          <div className="text-center md:text-left text-4xl mt-20 font-bold">
            Education
          </div>
          <div className="w-auto md:flex flex-row justify-between mt-10">
            <div className="md:mr-32 flex justify-center mb-10">
              <Lottie
                className="w-[400px] h-[400px] md:w-[430px] md:h-[350px]"
                animationData={education_2}
              />
            </div>
            <div className="flex flex-col grow md:w-14 text-white">
              {Educations.map((_item, index) => {
                return (
                  <>
                    <div className="p-6 bg-[#19376D] rounded-lg text-left flex flex-row justify-between">
                      <img
                        className="h-[100px] w-[100px] rounded-full mr-[20px] bg-cover bg-center"
                        src={_item.image}
                      />
                      <div className="grow text-left">
                        <h1>{_item.study}</h1>
                        <h1>{_item.group}</h1>
                        <h1>{_item.College}</h1>
                      </div>
                    </div>
                    <br />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
