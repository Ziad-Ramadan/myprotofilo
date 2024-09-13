import Navbar from "./components/Navbar";
import  Whoami from "./components/Whoami";
import Projectslider from "./components/Projectslider";
import Services from "./components/services";
export default function Home() {
  return (
    <>
      <Navbar/>
      <section id="Home">
      <Whoami/>
      </section>
      <section id="Project">
      <Projectslider/>
      </section>
      <section id="Services">
      <Services/>
      </section>
      <section id="Contact">

      </section>
    </>
  );
} 
