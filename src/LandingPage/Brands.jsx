import { useRef } from 'react';
import useIntersectionObserver from "../hooks/useIntersectionObserver";

import btcLnLogo from '../assets/img/bitcoin-ln-guadalajara.jpg';
import bitdevsLogo from '../assets/img/bitdevs-gdl.png';
import kapitalexLogo from '../assets/img/kapitalex.svg';
import hrfLogo from '../assets/img/hrf.svg';
import asociaciontionLogo from '../assets/img/asociacion-btc-mx.svg';
import VivaBtcLogo from '../assets/img/viva-bitcoin.jpeg';
import YopakiLogo from '../assets/img/yopaki-logo.jpeg';
import LaCasaDeSatoshiLogo from '../assets/img/la-casa-de-satoshi-logo.jpeg';
import BtcIslaMujeresLogo from '../assets/img/btc-isla-mujeres-logo.jpeg';
import AceptaBitcoinCoLogo from '../assets/img/acepta-bitcoin-co-logo.jpeg';
import BaseLayerLogo from '../assets/img/base-layer-logo.jpeg';
import MayanBitcoinLogo from '../assets/img/mayan-bitcoin-logo.jpeg';
import SwapidoLogo from '../assets/img/swapido-logo.jpeg';
import KardashevBtcLogo from '../assets/img/kardashev-btc-logo.jpeg';
import BitcoinHomesLogo from '../assets/img/bit-casa-homes-logo.jpeg';
import IbexLogo from '../assets/img/ibex-logo.jpeg';
import AthenaBitcoinLogo from '../assets/img/athena-bitcoin-logo.jpeg';

function Brands() {

  const ref = useRef();
  const entry = useIntersectionObserver(ref, {
    threshold: 1.0,
    root: null,
    rootMargin: '1000px',
    freezeOnceVisible: false,
  });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div className={`flex flex-col justify-center items-center my-5 transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:translate-y-4' : 'md:opacity-0'}`} ref={ref}>
      <div className="relative z-10 flex flex-col justify-center items-center text-white w-[300px] md:w-[600px] text-center ">
        <h2 className="flex items-center justify-center title relative text-2xl md:text-3xl font-bold px-4 before:w-[300px] before:md:w-[600px]">Bitcoin Week es Patrocinado por</h2>
        <div className="flex flex-col md:flex-row justify-around items-center my-6 bg-white rounded-md py-4 w-[300px] md:w-[600px]">
          <img src={hrfLogo} alt="bitcoin ln gdl logo" className="w-[250px] md:w-[280px] my-4" />
          <img src={asociaciontionLogo} alt="bitdevs gdl logo" className="w-[250px] md:w-[280px] my-4" />
        </div>
        <h2 className="flex items-center justify-center title relative text-2xl md:text-3xl font-bold px-4 before:w-[300px] before:md:w-[600px]">Comunidades</h2>
        <div className="flex flex-col md:flex-row justify-evenly items-center my-6 bg-white rounded-md py-4 w-[300px] md:w-[600px]">
          <img src={btcLnLogo} alt="bitcoin ln gdl logo" className="w-[200px] md:w-[220px] my-4" />
          <img src={bitdevsLogo} alt="bitdevs gdl logo" className="w-[200px] md:w-[220px] my-4" />
          {/* <img src={kapitalexLogo} alt="kapitalex logo" className="w-[150px] md:w-[120px] my-4" /> */}
        </div>
        <h2 className="flex items-center justify-center title relative text-2xl md:text-3xl font-bold px-4 before:w-[300px] before:md:w-[600px]">Asociación Bitcoin de México</h2>
        <div className="flex flex-shrink flex-col justify-evenly items-center my-6 bg-white rounded-md py-4 w-[300px] md:w-[600px]">
          <div className="flex flex-col md:flex-row justify-evenly items-center w-full">
            <img src={kapitalexLogo} alt="kapitalex logo" className="w-[150px] my-4" />
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start w-full">
            <div className="flex flex-col justify-center items-center w-[100px]">
              <img src={VivaBtcLogo} alt="Viva Bitcoin logo" className="w-[100px] my-4" />
              <h3 className="text-slate-900">Viva Bitcoin</h3>
            </div>
            <div className="flex flex-col justify-center items-center w-[100px]">
              <img src={LaCasaDeSatoshiLogo} alt="La casa de Satoshi logo" className="w-[100px]   my-4" />
              <h3 className="text-slate-900">La casa de Satoshi</h3>
            </div>
            <div className="flex flex-col justify-center items-center w-[100px]">
              <img src={YopakiLogo} alt="Yopaki logo" className="w-[100px] my-4" />
              <h3 className="text-slate-900">Yopaki</h3>
            </div>
            <div className="flex flex-col justify-center items-center w-[100px]">
              <img src={BtcIslaMujeresLogo} alt="BTC Isla logo" className="w-[100px] my-4" />
              <h3 className="text-slate-900">BTC Isla</h3>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start w-full">
            <div className="flex flex-col justify-center items-center w-[100px]">
              <img src={SwapidoLogo} alt="Swapido logo" className="w-[100px] my-4" />
              <h3 className="text-slate-900">Swapido</h3>
            </div>
            <div className="flex flex-col justify-center items-center w-[100px]">
              <img src={MayanBitcoinLogo} alt="Mayan Bitcoin logo" className="w-[100px]   my-4" />
              <h3 className="text-slate-900">Mayan Bitcoin</h3>
            </div>
            <div className="flex flex-col justify-center items-center w-[100px]">
              <img src={BaseLayerLogo} alt="Base Layer logo" className="w-[100px] my-4" />
              <h3 className="text-slate-900">Base Layer</h3>
            </div>
            <div className="flex flex-col justify-center items-center w-[100px]">
              <img src={AceptaBitcoinCoLogo} alt="Acepta Bitcoin Co logo" className="w-[100px] my-4" />
              <h3 className="text-slate-900">Acepta Bitcoin Co</h3>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start w-full">
            <div className="flex flex-col justify-center items-center w-[100px]">
              <img src={KardashevBtcLogo} alt="Kardashev BTC logo" className="w-[100px] my-4" />
              <h3 className="text-slate-900">Kardashev BTC</h3>
            </div>
            <div className="flex flex-col justify-center items-center w-[100px]">
              <img src={BitcoinHomesLogo} alt="Bitcoin Homes logo" className="w-[100px] my-4" />
              <h3 className="text-slate-900">Bitcoin Homes</h3>
            </div>
            <div className="flex flex-col justify-center items-center w-[100px]">
              <img src={IbexLogo} alt="Ibex logo" className="w-[100px]   my-4" />
              <h3 className="text-slate-900">Ibex</h3>
            </div>
            <div className="flex flex-col justify-center items-center w-[100px]">
              <img src={AthenaBitcoinLogo} alt="Athena Bitcoin logo" className="w-[100px] my-4" />
              <h3 className="text-slate-900">Athena Bitcoin</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
