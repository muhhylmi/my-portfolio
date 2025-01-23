import profileImage from "../../assets/images/muhhylmi.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useNav } from "../NavProvider";

function NavbarMenu() {
  const { activeNav } = useNav();
  return (
    <div>
      <div className="mt-10 flex flex-col items-center">
        <img
          src={profileImage}
          alt="image random"
          className="w-32 h-32 rounded-full shadow-lg max-lg:w-24 max-lg:h-24"
        />
        <h2 className="text-xl mt-4 font-bold lg:mt-8 lg:text-3xl">
          Muh Hylmi
        </h2>
        <h3 className="italic mt-2 text-sm lg:text-base">Backend Developer</h3>
      </div>
      <div className="flex justify-center font-bold flex-col mt-6 lg:mt-10">
        <a href="#about-me">
          <div
            className={`w-full border-b-2 h-12 lg:h-14 flex justify-center items-center  cursor-pointer hover:bg-white hover:text-pink-900 ${
              activeNav == "about-me" ? "text-pink-800 bg-white" : "text-white"
            }`}
          >
            About Me
          </div>
        </a>
        <a href="#work-experience">
          <div
            className={`w-full border-b-2 h-12 lg:h-14 flex justify-center items-center cursor-pointer hover:bg-white hover:text-pink-900 ${
              activeNav == "work-experience"
                ? "text-pink-800 bg-white"
                : "text-white"
            }`}
          >
            Work Experiences
          </div>
        </a>
        <a href="#my-skills">
          <div
            className={`w-full border-b-2 h-12 lg:h-14 flex justify-center items-center  cursor-pointer hover:bg-white hover:text-pink-900  ${
              activeNav == "my-skills" ? "text-pink-800 bg-white" : "text-white"
            }`}
          >
            My Skills
          </div>
        </a>
        <a href="#portfolio">
          <div
            className={`w-full border-b-2 h-12 lg:h-14 flex justify-center items-center  cursor-pointer hover:bg-white hover:text-pink-900  ${
              activeNav == "portfolio" ? "text-pink-800 bg-white" : "text-white"
            }`}
          >
            My Portfolio
          </div>
        </a>
        <a href="#contact">
          <div
            className={`w-full border-b-2 h-12 lg:h-14 flex justify-center items-center cursor-pointer hover:bg-white hover:text-pink-900  ${
              activeNav == "contact" ? "text-pink-800 bg-white" : "text-white"
            }`}
          >
            Contact Me
          </div>
        </a>
      </div>
      <div className="flex justify-center mt-14">
        <div className="w-10 h-10 bg-pink-950 flex justify-center items-center mr-3 hover:text-pink-900 hover:bg-white">
          <a href="https://www.linkedin.com/in/muh-hylmi-ab1552159/">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="w-10 h-10 bg-pink-950 flex justify-center items-center mr-3 hover:text-pink-900 hover:bg-white cursor-pointer">
          <a href="https://github.com/muhhylmi">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 w-full flex justify-center items-center h-8">
        <span className="text-xs text-white">Copyright @muh-hylmi</span>
      </div>
    </div>
  );
}

export default NavbarMenu;
