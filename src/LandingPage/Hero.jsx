import Logo from "../assets/img/BitcoinWeekLogo.svg";

function Hero() {

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <img src={Logo} alt="BitcoinWeek Logo" className="w-[300px] md:w-[500px]" />
      <div className="flex flex-col justify-center items-center text-white w-[300px] md:w-[600px] text-center my-5">
        <h2 className="text-lg md:text-2xl">Del 21 de al 25 de Abril</h2>
        <h2 className="text-2xl md:text-5xl my-4 font-bold">Es momento de construir el futuro con Bitcoin</h2>
        <h2 className="text-lg md:text-3xl">Aprende, colabora y participa!!</h2>
      </div>
    </div>
  );
}

export default Hero;
