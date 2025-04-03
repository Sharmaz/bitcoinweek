import { useRef } from 'react';
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function Location() {

  const ref = useRef();
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <div className={`flex flex-col justify-center items-center my-5 transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:translate-y-4' : 'md:opacity-0'}`} ref={ref}>
      <div className="flex flex-col justify-center items-center text-white w-[300px] md:w-[600px] text-center">
        <h2 className="text-2xl md:text-3xl font-bold">En donde?</h2>
        <div>
          <h3 className="text-xl md:text-2xl my-4">Durante Talent Land</h3>
          <p className="text-lg md:text-2xl text-center">
            Av. Mariano Otero 1499, Verde Valle, 44550 Guadalajara, Jal.
          </p>
          <p className="my-2 text-sm md:text-xl text-center font-bold">
            @FutureLand, stand No. 11 (frente al podio).
          </p>
          <div className="flex items-center justify-center">
            <a
              className=" bg-cyan-500  rounded-md p-2 my-4 w-1/2 md:text-xl lg:text-2xl font-bold"
              href="https://www.google.com/maps/dir/?api=1&destination=Expo%2C%20Guadalajara%20Guadalajara%20Jalisco"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
            </a>
          </div>

          <h3 className="text-xl md:text-2xl my-4">Dia extra en Hacker Garage</h3>
          <p className="text-lg md:text-2xl text-center">
          Marsella 155, int. 105-A, Col. Americana, Guadalajara, Jal.
          </p>
          <div className="flex items-center justify-center">
            <a
              className=" bg-cyan-500 rounded-md p-2 my-4 w-1/2 md:text-xl font-bold"
              href="https://maps.app.goo.gl/mJDwW4xGXFuswSRN8"
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
