import { useCursor } from "../CursorContext";
import WorkTimeLine from "./WorkTimeline";
import { useInView } from "react-intersection-observer";

function WorkExperience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const { setIsHovering } = useCursor();

  const textEnter = () => setIsHovering("text");
  const texLeave = () => setIsHovering("default");
  return (
    <div
      ref={ref}
      className={`lg:ml-[400px] lg:mr-[100px] flex-col text-white mt-14 transition-all duration-700 ease-in-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } pb-[150px] border-gray-700 border-b-2`}
      id="work-experience"
    >
      <h2
        className="text-3xl text-center font-bold"
        onMouseEnter={textEnter}
        onMouseLeave={texLeave}
      >
        Work Experience
      </h2>
      <div className="border-t-2 border-pink-800 w-12 mx-auto my-5" />
      <div className="flex justify-center px-16">
        <WorkTimeLine />
      </div>
    </div>
  );
}

export default WorkExperience;
