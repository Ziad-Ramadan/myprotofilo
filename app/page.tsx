import Navbar from "./components/Navbar";
import  Whoami from "./components/Whoami";
import Services from "./components/services";
import Contact from "./components/Contact";
import Information from './components/Information';
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import Slider from "./components/Slider";
export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className="h-100vw bg-slate-200">
      <section id="Home">
      <Whoami/>
      </section>
      <section id = "About">
      <Information/>
      </section>
      <section id="BOUT">
      <SkillsSection/>
      </section>
      <section id="Project">
      {/* <Projectslider/> */}
      <Slider  />
=      </section>
      <section id="Services">
      <Services/>
      </section>
      <section id="Contact">
      <Contact/>
      </section>
      <Footer/>
    </div>
    </div>
  );
} 
