import { useRef } from 'react';
import useIntersectionObserver from "../hooks/useIntersectionObserver";


function About() {

  const ref = useRef();
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <div className={`flex flex-col justify-center items-center transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:translate-y-4' : 'md:opacity-0'}`} ref={ref}>
      <div className="flex flex-col justify-center items-center text-white w-[300px] md:w-[600px] text-center">
        <h2 className="text-2xl md:text-3xl font-bold">De que se trata BitcoinWeek?</h2>
        <p className="text-lg md:text-2xl my-8 text-left">Durante la semana del Talent Land y un dia extra en el Hacker Garage, tendremos charlas, talleres y eventos (sorpresa) para que todos los participantes puedan aprender sobre el mundo de Bitcoin.</p>
      </div>
    </div>
  );
}

export default About;
