import Navbar from "./components/Navbar";
import  Whoami from "./components/Whoami";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import SkillsSection from "./components/SkillsSection";
import Projects from "./components/three"
import Timeline from "./components/Timeline";
export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className="h-100vw ">
      <section id="Home">
      <Whoami/>
      </section>
      <section>
      <Timeline/>
      </section>
      <section id = "About">
      </section>
      <section id="BOUT">
      <Aboutme/>
      </section>
      <section id="Project">
        <Projects/>
      </section>
      <section id="Services">
      </section>
      <section>
        <SkillsSection/>
      </section>
      <section id="Contact">
      <Contact/>
      </section>
      <Footer/>
    </div>
    </div>
  );
} 
