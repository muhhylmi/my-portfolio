import { useInView } from "react-intersection-observer";
import data from './content';

function MySkills() {
  const { ref, inView } = useInView({
    threshold: 0.2    
  });
  
  return (
    <div ref={ref}
      className={`lg:ml-[400px] lg:mr-[100px] flex-col text-white mt-14 transition-all duration-700 ease-in-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } pb-[150px] border-b-2 border-gray-700`}
      id="my-skills">
        <div className="flex-col mt-16 text-white">
            <h2 className="text-3xl text-center font-bold">My Skills</h2>
            <div className="border-t-2 border-pink-800 w-12 mx-auto my-5"/>
        </div>
        <div className="flex p-10 flex-wrap justify-center">
           {data.map((skill, index) => (
             <div key={index} className="w-[350px] h-[250px] shadow-lg border border-pink-800 m-3 p-4">
              <h2 className="my-4 font-bold text-center">{skill.tag}</h2>
              <div className="flex flex-wrap">
                {skill.skills.map((val, index) => (
                  <div key={index} 
                  className={`flex m-2 text-white font-bold py-1 px-2 text-lg rounded-full justify-center items-center ${val.color}`}>
                    {val.icon}<span className="ml-1 text-xs">{val.name}</span>
                  </div>
                ))}    
              </div>
            </div>
           ))}
        </div>
    </div>
  )
}

export default MySkills;
