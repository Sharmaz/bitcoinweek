import { useRef } from 'react';
import useIntersectionObserver from "../hooks/useIntersectionObserver";

import RusoImg from '../assets/img/Ruso.png';
import RonnyImg from '../assets/img/Ronny.jpg';
import ChrisImg from '../assets/img/Chris.png';
import CarlosImg from '../assets/img//Carlos.png';
import JorgeImg from '../assets/img/Jorge.png';
import DulceImg from '../assets/img/Dulce.jpg';
import GustavoImg from '../assets/img/Gustavo.jpg';

function Events() {

  const ref = useRef();
  const entry = useIntersectionObserver(ref, {
    threshold: 1.0,
    root: null,
    rootMargin: '2400px',
    freezeOnceVisible: false,
  });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div className={`flex flex-col justify-center items-center my-5 transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:translate-y-4' : 'md:opacity-0'}`} ref={ref}>
      <div className="relative z-10 flex flex-col justify-center items-center text-white w-[300px] md:w-[600px] text-center ">
        <h2 className="flex items-center justify-center title relative text-2xl md:text-3xl font-bold px-4 before:w-[300px] before:md:w-[600px]">Charlas y Talleres</h2>
        <div className="flex flex-col justify-around items-center mt-6 rounded-md py-4 w-[300px] md:w-[600px]">
         <h3 className="text-3xl font-bold my-4 underline">Lunes 21 de Abril</h3>
          <div className="mb-6">
            <div className="flex items-center justify-center">
              <img src={GustavoImg} alt="Gustavo" className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] my-4 rounded-full object-cover" />
            </div>
            <h2 className="text-xl font-bold mb-2">Gustavo Echaiz
            </h2>
            <p className="text-sm text-white">2pm - 3pm</p>
            <p className="mt-2 text-white">
              Descubre cómo Swapido, una solución de pagos instantáneos a cuentas bancarias usando la red Lightning, está transformando el uso de Bitcoin en México. Gustavo Flores, CEO y fundador, comparte su experiencia construyendo herramientas para la era Bitcoin, desde desarrollos técnicos hasta su impacto en las comunidades locales.
            </p>
          </div>
          <h3 className="text-3xl font-bold my-4 underline">Martes 22 de Abril</h3>
          <div className="mb-6">
            <div className="flex items-center justify-center">
              <img src={RusoImg} alt="Ruso" className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] my-4 rounded-full" />
            </div>
            <h2 className="text-xl font-bold mb-2">Ruso de &quot;Kernel Panic Room&quot;</h2>
            <p className="text-sm text-white">4:40 - 5:50 pm</p>
            <p className="mt-2 text-white">
              Cómo el código libre se traslada a otros campos de la vida: descentralización social, hackspaces y maneras de emanciparnos del yugo de las corporaciones a las que les regalamos nuestros datos personales.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-center">
              <img src={RonnyImg} alt="Ruso" className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] my-4 rounded-full object-cover" />
            </div>
            <h2 className="text-xl font-bold mb-2">Ronny de &quot;BTC Hardware Shop&quot;</h2>
            <p className="text-sm text-white">5:50 - 7:00 pm</p>
            <p className="mt-2 text-white">
              Cómo implementar la autocustodia de tus Bitcoin y cómo, de manera autónoma y sin depender del permiso de terceros, puedes resguardar tus Bitcoin assets.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-center">
              <img src={ChrisImg} alt="Ruso" className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] my-4 rounded-full object-cover" />
            </div>
            <h2 className="text-xl font-bold mb-2">Chris Guida desarrollador de Lightning</h2>
            <p className="text-sm text-white">5:50 - 7:00 pm</p>
            <p className="mt-2 text-white">
              En este taller práctico usarás Lightning para aceptar pagos en bitcoin, sin terceros. Instala phoenixd y albyhub en tu laptop y crea tu propio punto de venta por menos de $1500 MXN.
            </p>
            <p className="mt-2 text-white">
              Requisitos: Laptop con Linux o Mac. Si usas Windows, instala WSL antes.
            </p>
          </div>

          <h3 className="text-2xl font-bold my-4 underline">Miercoles 23 de Abril</h3>
          <div className="mb-6">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center">
                <img src={CarlosImg} alt="Ruso" className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] my-4 rounded-full object-cover" />
              </div>
              <div className="flex items-center justify-center">
                <img src={JorgeImg} alt="Ruso" className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] my-4 rounded-full object-cover" />
              </div>
            </div>
            <h2 className="text-xl font-bold mb-2">
              Dr. Carlos R. Guzmán Durán y Dr. Jorge Martinez Ortega
            </h2>
            <p className="text-sm text-white">4:40 - 5:50 pm</p>
            <p className="mt-2 text-white">
              Criptografía: cómo funciona el consenso de Bitcoin?
            </p>
          </div>
          <div className="mb-6">
            <div className="flex items-center justify-center">
              <img src={DulceImg} alt="Ruso" className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] my-4 rounded-full object-cover" />
            </div>
            <h2 className="text-xl font-bold mb-2">Dulce V de Libreria de Satoshi</h2>
            <p className="text-sm text-white">5:50 - 7:00 pm</p>
            <p className="mt-2 text-white">
              La misión de la Librería de Satoshi es hacer accesible la educación técnica de Bitcoin en español para América Latina y el Caribe, formando contribuidores de Bitcoin Core, educadores y emprendedores.
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Events;
