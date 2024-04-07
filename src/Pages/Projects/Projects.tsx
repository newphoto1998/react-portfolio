import projects from "../../Data/Project.json";

function Projects() {
  return (
    <div className="overflow-hidden bg-[#04152D]" id="projects">
      <div className="p-5 md:h-[800px] sm:h-[2000px]  md:max-w-[1170px] md:m-auto text-white ">
        <div className="text-center md:text-left text-4xl mt-20 font-bold">
          PROJECTS
        </div>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3 mt-10">
          {projects.map((item,index) => {
            return (
              <>
                <div className="rounded-lg hover:-translate-y-1 hover:scale-110 duration-300 p-6 bg-gradient-to-r from-[#19376D] from-100% to-[#19376D] to-0%">
                  <img
                    src={item.image}
                    className="bg-cover bg-center rounded-lg"
                  />
                  <h1 className="text-xl mt-5 font-bold">{item.name}</h1>
                  <p className="text-md w-5/5  font-thin mt-2 md:w-5/5">
                    {item.description}
                  </p>
                  <div className="flex flex-row justify-between mt-4">
                    {item.technology.map((tech) => {
                      return (
                        <>
                          <button className="bg-blue-950  px-2 py-2 rounded-full text-[16px]">
                            {tech}
                          </button>
                        </>
                      );
                    })}
                  </div>
                  <div className="flex justify-around text-center mt-6 text-2xl ">
                 {index == 1 &&
                    <div className="bg-[#576CBC] rounded-3xl">
                    <button  className="p-2 w-[120px] "><a href={item.demo}>Demo</a></button>
                  </div>}
                 
                    <div className="bg-[#576CBC]  rounded-3xl">
                      <button className="p-2 w-[120px]"><a href={item.source}>Source</a></button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
