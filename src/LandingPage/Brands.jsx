import { useRef } from 'react';
import useIntersectionObserver from "../hooks/useIntersectionObserver";

import btcLnLogo from '../assets/img/bitcoin-ln-guadalajara.jpg';
import bitdevsLogo from '../assets/img/bitdevs-gdl.png';
import kapitalexLogo from '../assets/img/kapitalex.svg';
import hrfLogo from '../assets/img/hrf.svg';
import asociaciontionLogo from '../assets/img/asociacion-btc-mx.svg';

function Brands() {

  const ref = useRef();
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <div className={`flex flex-col justify-center items-center my-5 transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:translate-y-4' : 'md:opacity-0'}`} ref={ref}>
      <div className="relative z-10 flex flex-col justify-center items-center text-white w-[300px] md:w-[600px] text-center ">
        <h2 className="flex items-center justify-center title relative text-2xl md:text-3xl font-bold px-4 before:w-[300px] before:md:w-[600px]">Presentado por</h2>
        <div className="flex flex-col md:flex-row justify-center items-center my-6 bg-white rounded-md py-4 w-[300px] md:w-[600px]">
          <img src={btcLnLogo} alt="bitcoin ln gdl logo" className="w-[200px] md:w-[220px] my-4" />
          <img src={bitdevsLogo} alt="bitdevs gdl logo" className="w-[200px] md:w-[220px] my-4" />
          <img src={kapitalexLogo} alt="kapitalex logo" className="w-[150px] md:w-[120px] my-4" />
        </div>
        <h2 className="flex items-center justify-center title relative text-2xl md:text-3xl font-bold px-4 before:w-[300px] before:md:w-[600px]">Patrocinado por</h2>
        <div className="flex flex-col md:flex-row justify-around items-center my-6 bg-white rounded-md py-4 w-[300px] md:w-[600px]">
          <img src={hrfLogo} alt="bitcoin ln gdl logo" className="w-[250px] md:w-[280px] my-4" />
          <img src={asociaciontionLogo} alt="bitdevs gdl logo" className="w-[250px] md:w-[280px] my-4" />
        </div>
      </div>
    </div>
  );
}

export default Brands;
