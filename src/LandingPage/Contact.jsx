import { useRef } from 'react';
import useIntersectionObserver from "../hooks/useIntersectionObserver";


function Contact() {

  const ref = useRef();
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <div className={`relative z-10 flex flex-col justify-center items-center transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:translate-y-4' : 'md:opacity-0'} md:my-32`} ref={ref}>
      <div className="relative z-10 flex flex-col justify-center items-center text-white w-[300px] md:w-[600px] text-center">
        <h2 className="flex items-center justify-center title relative text-2xl md:text-3xl font-bold px-4 before:w-[300px] before:md:w-[600px] w-[200px] md:w-[auto]">Contáctanos!!</h2>
        <form className="rounded-2xl p-4 text-slate-900 w-[300px] md:w-[400px]" action="https://formspree.io/f/xkgjpyqn" method="POST">
          <div className="flex align-middle my-3 md:my-4 w-full">
            <input className="rounded-lg p-4 w-full m-0.5" type="text" name="fullname" placeholder="Nombre completo" />
          </div>
          <div className="flex align-middle my-3 md:my-4 w-full">
            <input className="rounded-lg p-4 w-full m-0.5 " type="email" name="email" placeholder="Email" />
          </div>
          <div className="flex align-middle my-3 md:my-4">
            <input className="rounded-lg p-4 w-full m-0.5" type="text" name="subject" placeholder="Asunto" />
          </div>
          <div className="flex align-middle my-3 md:my-8">
            <textarea className="rounded-lg p-4 w-full m-0.5 h-72 md:h-auto" name="message" cols={30} rows={5} placeholder="Como te podemos ayudar?" />
          </div>
          <div className="flex align-middle justify-center mt-4 md:mt-8 md:w-1/2">
            <button className="bg-cyan-500 rounded-lg p-4 w-full m-0.5 text-center text-slate-100" type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
