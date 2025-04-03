import { useState, useEffect } from "react";


function Schedule() {

  const [winWidth, setWinWidth] = useState(0);
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 767) {
      setWinWidth(300);
    } else {
      setWinWidth(600);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center my-5">
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
