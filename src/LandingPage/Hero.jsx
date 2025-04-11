import { useRef } from 'react';
import confetti from "canvas-confetti";
import Logo from "../assets/img/BitcoinWeekLogo.svg";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
function Hero() {

  const ref = useRef();
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  let exploding = false;

  const defaults = {
    particleCount: 500,
    spread: 80,
    angle: 90,
  };

  const fire = (particleRatio, opts) => {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(defaults.particleCount * particleRatio),
      })
    );
  };

  if (isVisible) {
    if (exploding) {
      return;
    }

    exploding = true;
  window.setTimeout(() => {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

  }, 300);
  }

  return (
    <div className="flex flex-col justify-center items-center md:justify-normal my-14 md:my-0 relative z-10 md:h-screen" ref={ref}>
      <div className="z-10 md:mt-32">
        <img src={Logo} alt="BitcoinWeek Logo" className={`w-[300px] md:w-[500px] transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:translate-y-4 animate__rubberBand' : 'md:opacity-0'}`} />
        <div className={`flex flex-col justify-center items-center text-white w-[300px] md:w-[600px] text-center my-5 transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:translate-y-4' : 'md:opacity-0'}`}>
          <h2 className="text-lg md:text-2xl">21 - 25 de Abril 2025. Guadalajara, México</h2>
          <h2 className="text-2xl md:text-5xl my-4 font-bold">Es momento de construir el futuro con Bitcoin</h2>
          <h2 className="text-lg md:text-3xl">Aprende, colabora y participa!!</h2>
        </div>
      </div>
      <div className={`separator absolute bottom-[-50px] md:bottom-[0px] w-full h-16 md:h-[270px] bg-cover transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100' : 'md:opacity-0'}`}>
      </div>
    </div>
  );
}

export default Hero;
