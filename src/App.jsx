import Hero from "./LandingPage/Hero";
import About from "./LandingPage/About";
import Location from "./LandingPage/Location";
function App() {

  return (
    <div className="flex flex-col justify-center bg-violet-950">
      <Hero />
      <About />
      <Location />
    </div>
  );
}

export default App;
