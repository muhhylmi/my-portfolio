import { FaEye } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import datas from "./content";
import { useState } from "react";
import { useCursor } from "../CursorContext";

function MyPortfolio() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const [activePortfolio, setActivePortfolio] = useState(datas[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleClick = (value) => {
    setActivePortfolio(value);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1500);
  };
  const { setIsHovering } = useCursor();
  const textEnter = () => setIsHovering("text");
  const texLeave = () => setIsHovering("default");

  return (
    <div
      ref={ref}
      className={`lg:ml-[400px] lg:mr-[100px] flex-col text-white mt-14 transition-all duration-700 ease-in-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } pb-[150px] border-b-2 border-gray-700`}
      id="portfolio"
    >
      <div className="flex-1 text-white p-10">
        <h2
          className="text-3xl text-center font-bold"
          onMouseEnter={textEnter}
          onMouseLeave={texLeave}
        >
          My Portfolios
        </h2>
        <div className="border-t-2 border-pink-800 w-12 mx-auto my-5" />
        <p
          className="text-center font-normal text-xl"
          onMouseEnter={textEnter}
          onMouseLeave={texLeave}
        >
          some of the projects I&apos;ve worked on
        </p>
      </div>

      <div className="grid gap-4 px-6">
        <div
          className={`flex justify-around p-4 mb-4 ${
            isAnimating ? "animate-bounce" : ""
          }`}
        >
          <div className="w-auto lg:h-[300px] mr-4">
            <img
              className="h-full max-w-full rounded-lg"
              src={activePortfolio.image}
              alt=""
            />
          </div>
          <div className="max-w-[450px] h-[300px] text-white overflow-hidden">
            <h3
              className="text-2xl font-bold"
              onMouseEnter={textEnter}
              onMouseLeave={texLeave}
            >
              Project Name: {activePortfolio.name}
            </h3>
            <h4
              className="mb-4 mt-2 font-semibold"
              onMouseEnter={textEnter}
              onMouseLeave={texLeave}
            >
              Tools / Stack : {activePortfolio.tools}
            </h4>
            <ul className="list-disc pl-5 text-white">
              {activePortfolio.description.map((desc, idx) => (
                <li key={idx} className="pl-2">
                  <span
                    className="block"
                    onMouseEnter={textEnter}
                    onMouseLeave={texLeave}
                  >
                    {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 justify-items-center">
          {datas.map((value) => (
            <div key={value.id} className="relative group h-full">
              <img
                className="max-w-full rounded-lg h-full object-cover"
                src={value.image}
                alt=""
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
                <button
                  className="bg-white p-2 rounded-full shadow-lg text-pink-800"
                  onClick={() => handleClick(value)}
                >
                  <FaEye />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio;
