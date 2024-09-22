import Navbar from "./components/Navbar";
import  Whoami from "./components/Whoami";
import Projectslider from "./components/Projectslider";
import Services from "./components/services";
import Contact from "./components/Contact";
import Information from './components/Information';
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
export default function Home() {
  return (
    <div>
    <Navbar/>
    
    <div className="h-100vw bg-slate-200">
      <section id="Home">
      <Whoami/>
      </section>
      <section>
      <Information/>
      </section>
      <section>
        <SkillsSection/>
      </section>
      <section id="Project">
      <Projectslider/>
      </section>
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
