import ActivitiesTimeline from './ActivitiesTimeline';
import { useInView } from "react-intersection-observer";

function AboutMe() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ease-in-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } flex-col lg:ml-[400px] lg:mr-[100px] border-b-2 border-gray-700 pb-[150px]`}
      id='about-me'>
        <div className='flex-1 text-white p-10'>
            <h2 className="text-3xl text-center font-bold">About Me</h2>
            <div className="border-t-2 border-pink-800 w-12 mx-auto my-5"/>
            <p className="text-center font-normal text-xl">
            Backend Developer with 3 years of experience in designing, developing, and maintaining software. passionate about IT, with a particular focus on data processing. Eager to embrace new challenges, I exhibit a strong commitment to continuous learning and a determination to grasp complex concepts. Skilled in creating RESTful APIs, database management, and know the basics of cloud services integration and adept at managing HTTP requests and utilizing message brokers.
            </p>
        </div>
        <div className='flex-col text-white p-10 justify-center'>
            <h2 className="text-3xl text-center font-bold">Educations</h2>
            <div className="border-t-2 border-pink-800 w-12 mx-auto my-5"/>
            <div className='flex justify-center'>
              <ActivitiesTimeline />
            </div>
        </div>
          
    </div>
  )
}

export default AboutMe
