import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import MyPortfolio from "./components/MyPortfolio/MyPortfolio";
import MySkills from "./components/MySkills/MySkills";
import Navbar from "./components/Navbar/Navbar";
import ParticleBackground from "./components/ParticleBackground";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import { useNav } from "./components/NavProvider";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function App() {
  const { setActiveNav } = useNav();

  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
  const { ref: workRef, inView: workInView } = useInView({ threshold: 0.5 });
  const { ref: skillRef, inView: skillInView } = useInView({ threshold: 0.5 });
  const { ref: portfolioRef, inView: portfolioInView } = useInView({ threshold: 0.5 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.5 });
  
  useEffect(() => {
    if (aboutInView) setActiveNav('about-me');
    else if (workInView) setActiveNav('work-experience');
    else if (skillInView) setActiveNav('my-skills');
    else if (portfolioInView) setActiveNav('portfolio');
    else if (contactInView) setActiveNav('contact');
  }, [workInView, skillInView, aboutInView, portfolioInView, contactInView, setActiveNav]);

  return (
    <>
      <div className="relative bg-page-bg bg-blend-darken bg-center bg-no-repeat bg-cover min-h-screen before:absolute before:inset-0 before:bg-black before:opacity-50">
          <ParticleBackground />
          <Navbar />
          <section ref={aboutRef}><AboutMe /></section>
          <section ref={workRef}><WorkExperience /></section>
          <section ref={skillRef}><MySkills /></section>
          <section ref={portfolioRef}><MyPortfolio /></section>
          <section ref={contactRef}><ContactMe /></section>
      </div>
    </>
  )
}

export default App
