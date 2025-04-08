import Hero from "./LandingPage/Hero";
import About from "./LandingPage/About";
import Location from "./LandingPage/Location";
import Schedule from "./LandingPage/Schedule";
import Brands from "./LandingPage/Brands";
import Contact from "./LandingPage/Contact";
import Footer from "./LandingPage/Footer";

function App() {

  return (
    <div className="flex flex-col justify-center bg-violet-950">
      <Hero />
      <About />
      <Location />
      <Schedule />
      <Brands />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
