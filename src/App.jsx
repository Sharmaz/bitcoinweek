import Hero from "./LandingPage/Hero";
import About from "./LandingPage/About";
import Location from "./LandingPage/Location";
import Schedule from "./LandingPage/Schedule";
import Brands from "./LandingPage/Brands";
function App() {

  return (
    <div className="flex flex-col justify-center bg-violet-950">
      <Hero />
      <About />
      <Location />
      <Schedule />
      <Brands />
    </div>
  );
}

export default App;
