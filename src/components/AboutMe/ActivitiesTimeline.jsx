import { useCursor } from "../CursorContext";
import data from "./content";

const ActivitiesTimeline = () => {
  const { setIsHovering } = useCursor();

  const textEnter = () => setIsHovering("text");
  const texLeave = () => setIsHovering("default");
  return (
    <div>
      <ol className="items-center sm:flex mt-6">
        {data.map((school, index) => (
          <li key={index} className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                <img src={school.logo} alt="" />
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3
                className="text-lg font-semibold text-white"
                onMouseEnter={textEnter}
                onMouseLeave={texLeave}
              >
                {school.schoolName}
              </h3>
              <time
                onMouseEnter={textEnter}
                onMouseLeave={texLeave}
                className="block mt-1 mb-2 text-sm font-semibold leading-none text-pink-600 italic"
              >
                {school.year}
              </time>
              <p
                onMouseEnter={textEnter}
                onMouseLeave={texLeave}
                className="text-base font-normal text-white"
              >
                {school.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ActivitiesTimeline;
