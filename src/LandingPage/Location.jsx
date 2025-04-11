import { useRef } from 'react';
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import TalentLandLogo from "../assets/img/talent-land-logo.png";
import HackerGarageLogo from "../assets/img/hacker-garage-logo.svg";

function Location() {

  const ref = useRef();
  const entry = useIntersectionObserver(ref, {
    threshold: 1.0,
    root: null,
    rootMargin: '500px',
    freezeOnceVisible: false,
  });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div className={`relative flex flex-col justify-center items-center my-16 transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:translate-y-4' : 'md:opacity-0'} md:my-12`} ref={ref}>
      <div className="relative z-10 flex flex-col justify-center items-center text-white w-[300px] md:w-[600px] text-center">
        <h2 className="flex items-center justify-center title relative text-2xl md:text-3xl font-bold px-4 before:w-[300px] before:md:w-[600px]">En donde?</h2>
        <div>
          <h3 className="text-xl md:text-2xl my-4">Durante Talent Land</h3>
          <div className="flex flex-col md:flex-row justify-center items-center my-6 bg-white rounded-md p-4 w-[150px] md:w-[200px] mx-auto">
            <img src={TalentLandLogo} alt="Talent Land Logo" className="w-[200px] md:w-[200px]" />
          </div>
          <p className="text-lg md:text-2xl text-center">
            Av. Mariano Otero 1499, Verde Valle, 44550 Guadalajara, Jal.
          </p>
          <p className="my-2 text-sm md:text-xl text-center font-bold">
            @FutureLand, stand No. 11 (frente al podio).
          </p>
          <div className="flex items-center justify-center">
            <a
              className=" bg-cyan-500  rounded-md p-2 my-4 w-1/2 md:text-xl font-bold"
              href="https://www.google.com/maps/dir/?api=1&destination=Expo%2C%20Guadalajara%20Guadalajara%20Jalisco"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
            </a>
          </div>

          <h3 className="text-xl md:text-2xl my-4">Día extra en Hacker Garage</h3>
          <div className="flex flex-col md:flex-row justify-center items-center my-6 bg-white rounded-md p-4 w-[100px] md:w-[120px] mx-auto">
            <img src={HackerGarageLogo} alt="Talent Land Logo" className="w-[100px] md:w-[120px]" />
          </div>
          <p className="text-lg md:text-2xl text-center">
          Marsella 155, int. 105-A, Col. Americana, Guadalajara, Jal.
          </p>
          <div className="flex items-center justify-center">
            <a
              className="bg-cyan-500 rounded-md p-2 my-4 w-1/2 md:text-xl font-bold"
              href="https://maps.app.goo.gl/jreEVZKj2scfxmej6"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
            </a>
          </div>

          <h3 className="text-xl md:text-2xl my-4">The Westin Guadalajara</h3>
          <p className="text-lg md:text-2xl text-center">
            Frente a la Expo Guadalajara en Av de Las Rosas 2911, Verde Valle, 44530 Guadalajara, Jal.
          </p>
          <div className="flex items-center justify-center">
            <a
              className="bg-cyan-500 rounded-md p-2 my-4 w-1/2 md:text-xl font-bold"
              href="https://maps.app.goo.gl/hyNPRTbt9Cm34CNM8"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
