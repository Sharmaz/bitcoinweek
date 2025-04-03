import { useState, useEffect, useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function Schedule() {

  const [winWidth, setWinWidth] = useState(0);
  useEffect(() => {
    if (window.innerWidth < 767) {
      setWinWidth(300);
    } else {
      setWinWidth(600);
    }
  }, []);

  const ref = useRef();
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <div className={`flex flex-col justify-center items-center my-5 transition-all ease-in-out duration-300 ${isVisible ? 'md:opacity-100 md:translate-y-4' : 'md:opacity-0'}`} ref={ref}>
      <div className="flex flex-col justify-center items-center text-white w-[300px] md:w-[600px] text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Agenda</h2>
        <div className="my-6">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FMexico_City&showNav=0&showCalendars=0&showTz=0&mode=AGENDA&showTabs=0&src=ZGQ0MWNmNzlhODE1MWM5ZDhkNDkxYWZiYWZmODFjNjZlZjlkOGQyZTRlNDk1ZDM5MzNkNTg2MTM3ZTUzZTg4N0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23E4C441"
            width={winWidth}
            height="550"
            frameBorder="0" 
            scrolling="no"
          >
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
