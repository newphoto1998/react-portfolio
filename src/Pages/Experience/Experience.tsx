import Experiences from "../../Data/Experience/Experience.json";
import Skills from "../../Data/Experience/Skill.json";

function Experience() {
  return (
    <div className="overflow-hidden bg-[#04152D]" id="experience">
      <div className="p-5 md:h-[700px] md:max-w-[1170px] md:m-auto text-white">
        <div className="text-center md:text-left text-3xl mt-20 font-bold">
          EXPERIENCE
        </div>
        <div className="w-auto md:flex flex-row justify-items-center mt-12">
          <div className="p-4 grid grid-cols-2 md:grid grid-cols-3 grow md:w-[2px] justify-items-start mb-20">
            {/* <div className="hover:-translate-y-1 hover:scale-110 duration-300 box-border h-28 w-28 p-4 rounded-full bg-blue-900 text-center "><img src="../public/assets/images/Experience/C.svg" className="w-20 h-20 "/><br />C#</div>
            <div className="hover:-translate-y-1 hover:scale-110 duration-300 box-border h-28 w-28 p-4 rounded-full bg-blue-900 text-center "><img src="../public/assets/images/Experience/NODE.png" className="w-20 h-20"/><br />NODE JS</div>
            <div className="hover:-translate-y-1 hover:scale-110 duration-300 box-border h-28 w-28 p-4 rounded-full bg-blue-900 text-center "><img src="../public/assets/images/Experience/REACT.png" className="w-20 h-20"/><br />REACT</div>
            <div className="hover:-translate-y-1 hover:scale-110 duration-300 box-border h-28 w-28 p-4 rounded-full bg-blue-900 text-center mt-14"><img src="../public/assets/images/Experience/angular.png" className="w-20 h-20 "/><br />Angular</div>
            <div className="hover:-translate-y-1 hover:scale-110 duration-300 box-border h-28 w-28 p-4 rounded-full bg-blue-900 text-center mt-14"><img src="../public/assets/images/Experience/HTML.png"  className="w-20 h-20 "/><br />HTML</div>
            <div className="hover:-translate-y-1 hover:scale-110 duration-300 box-border h-28 w-28 p-4 rounded-full bg-blue-900 text-center mt-14"><img src="../public/assets/images/Experience/CSS.png" className="w-20 h-20"/><br />CSS</div>
            <div className="hover:-translate-y-1 hover:scale-110 duration-300 box-border h-28 w-28 p-4 rounded-full bg-blue-900 text-center mt-14"><img src="../public/assets/images/Experience/tailwind.svg" className="w-20 h-20"/><br />Tailwind</div>
            <div className="hover:-translate-y-1 hover:scale-110 duration-300 box-border h-28 w-28 p-4 rounded-full bg-blue-900 text-center mt-14"><img src="../public/assets/images/Experience/TS.png" className="w-20 h-20"/><br />TypeScrpit</div>
            <div className="hover:-translate-y-1 hover:scale-110 duration-300 box-border h-28 w-28 p-4 rounded-full bg-blue-900 text-center mt-14"><img src="../public/assets/images/Experience/SQL.png" className="w-20 h-20"/><br />MS SQL</div> */}

            {Skills.map((_item, index) => {
              return (
                <>
                  <div
                    className={
                      index >= 3
                        ? "hover:-translate-y-1 hover:scale-110 duration-300 box-border h-28 w-28 p-4 rounded-full bg-blue-900 text-center mt-14"
                        : "hover:-translate-y-1 hover:scale-110 duration-300 box-border h-28 w-28 p-4 rounded-full bg-blue-900 text-center"
                    }
                  >
                    <img src={_item.image} className="w-20 h-20 " />
                    <br />
                    {_item.title}
                  </div>
                </>
              );
            })}
          </div>

          <div className="p-4 flex flex-col grow md:w-14 text-white ">
            {Experiences.map((_item, index) => {
              return (
                <>
                  <div  key={index} className=" hover:-translate-y-1 hover:scale-110 duration-300 p-6 bg-slate-900 rounded-lg text-left flex flex-row justify-between space-x-4 bg-gradient-to-r from-[#19376D] from-100% to-[#19376D] to-0% ">
                    <div className="bg-cover bg-center">
                      <img src={_item.image} className="w-20 h-20" />
                    </div>
                    <div className="grow text-left">
                      <h1 className="text-xl">{_item.name} </h1>
                      <p className="text-sm font-thin	">{_item.workTime}</p>
                      {_item.JobRes.map((res, index2) => {
                        return (
                          <>
                            <h1  key={index2} className="text-sm">
                              <p className="text-2xl inline">·</p> {res}
                            </h1>
                          </>
                        );
                      })}
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
  );
}

export default Experience;
