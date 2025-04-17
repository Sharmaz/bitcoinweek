import { useRef } from 'react';
import useIntersectionObserver from "../hooks/useIntersectionObserver";

import hrfLogo from '../assets/img/hrf.svg';

function Special() {

  const ref = useRef();
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <div className={`flex flex-col justify-center items-center my-5 transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:translate-y-4' : 'md:opacity-0'}`} ref={ref}>
      <div className="relative z-10 flex flex-col justify-center items-center text-white w-[300px] md:w-[600px] text-center ">
        <h2 className="flex items-center justify-center title relative text-2xl md:text-3xl font-bold px-4 before:w-[300px] before:md:w-[600px]">Bitcoin es:</h2>
        <div className="flex flex-col md:flex-row justify-around items-center mt-6 rounded-md py-4 w-[300px] md:w-[600px]">
          <div className="bg-white rounded-md p-4">
            <img src={hrfLogo} alt="bitcoin ln gdl logo" className="w-[250px] md:w-[280px] my-4" />
          </div>
        </div>
        <div className="flex flex-col justify-around items-start my-6 rounded-md py-4 w-[300px] md:w-[600px]">
          <h3 className="text-2xl my-1 font-bold">
          Resistencia contra la censura y represión
          </h3>
          <h3 className="text-2xl my-1 font-bold">
          Libertad y Privacidad
          </h3>
          <h3 className="text-2xl my-1 font-bold">
          Protección ante la devaluación monetaria
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Special;
