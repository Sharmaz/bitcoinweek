import { useRef } from 'react';
import useIntersectionObserver from "../hooks/useIntersectionObserver";


function About() {

  const ref = useRef();
  const entry = useIntersectionObserver(ref, {
    threshold: 1.0,
    root: null,
    rootMargin: '50px',
    freezeOnceVisible: false,
  });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div className={`relative z-10 flex flex-col justify-center items-center transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:translate-y-4' : 'md:opacity-0'} md:my-32`} ref={ref}>
      <div className="relative z-10 flex flex-col justify-center items-center text-white w-[300px] md:w-[600px] text-center">
        <h2 className="flex items-center justify-center title relative text-2xl md:text-3xl font-bold px-4 before:w-[300px] before:md:w-[600px] w-[200px] md:w-[auto]">De que se trata BitcoinWeek?</h2>
        <p className="text-lg md:text-2xl my-8">Durante la semana del Talent Land y un dia extra en el Hacker Garage, tendremos cada día un evento entre charlas, talleres y sorpresas.</p>
      </div>
    </div>
  );
}

export default About;
