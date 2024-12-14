import data from './content';
import { useInView } from "react-intersection-observer";

function WorkTimeLine() {
    const { ref, inView } = useInView({
        threshold: 0.1, // Komponen akan aktif saat 20% dari elemen terlihat
    });
    return (
      <div ref={ref}
        className={`flex justify-center transition-all duration-700 ease-in-out transform ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-x-16"
        }`}>
          <ol className="relative border-s border-gray-200 mt-4">                  
              
              {data.map((company, index) => (
                <div key={index}>
                    <li  className="mb-10 ms-12">
                    <span className="absolute flex items-center justify-center w-14 h-14 bg-blue-100 rounded-r-full -start-7 ring-8 ring-white">
                        <img className="rounded-full shadow-lg" src={company.logo} alt="Bonnie image"/>
                    </span>
                    <div className="p-4 bg-black bg-opacity-10 rounded-l-3xl shadow">
                        <h5 className="text-xl font-bold tracking-tight text-white">{company.companyName}</h5>
                        <h5 className="mb-2 text-lg font-semibold tracking-tight text-white ">{company.roleName} <span className='text-sm italic text-pink-600'>({company.year})</span></h5>
                        {company.tasks.map((task, idx) => (
                            <ul key={idx} className="list-disc pl-5 text-white">
                                <li className="pl-2">
                                    <span className="block">{task}</span>
                                </li>
                            </ul>
                        ))}
                    </div>
                </li>
                </div>
                
              ))}
          </ol>
      </div>
    )
  }
  
  export default WorkTimeLine;
  