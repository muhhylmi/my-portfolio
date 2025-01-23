import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useCursor } from "../CursorContext";

function ContactMe() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const { setIsHovering } = useCursor();
  const textEnter = () => setIsHovering("text");
  const texLeave = () => setIsHovering("default");

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } flex-col lg:ml-[400px] lg:mr-[100px] border-b-2 border-gray-700 pb-[150px]`}
      id="contact"
    >
      <div className="text-white p-10">
        <h2
          className="text-3xl text-center font-bold"
          onMouseEnter={textEnter}
          onMouseLeave={texLeave}
        >
          Contact Me
        </h2>
        <div className="border-t-2 border-pink-800 w-12 mx-auto my-5" />
        <p
          className="text-center font-normal text-xl"
          onMouseEnter={textEnter}
          onMouseLeave={texLeave}
        >
          Contact me via email
        </p>
      </div>

      <div className="text-white">
        <a href="mailto:muhhylmi2nd@gmail.com">
          <FaEnvelope className="mx-auto text-9xl hover:text-pink-800" />
        </a>
        <h3
          className="text-center my-3 text-xl"
          onMouseEnter={textEnter}
          onMouseLeave={texLeave}
        >
          Follow Me On:
        </h3>

        <div className="flex justify-center text-white text-5xl">
          <a
            href="https://www.linkedin.com/in/muh-hylmi-ab1552159/"
            className="mx-2 hover:text-pink-800"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/muhhylmi"
            className="mx-2 hover:text-pink-800"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
