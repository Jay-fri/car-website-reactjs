import React, { useState } from "react";
import "./App.css";
import Logo from "./assets/svg/Logo.svg";
import Menu from "./assets/svg/menu.svg";
import Close from "./assets/svg/close.svg";
import Light from "./assets/svg/light.svg";
import Porshe from "./assets/svg/porshe.svg";
import Blue from "./assets/svg/blue.svg";
import Blue2 from "./assets/svg/blue2.svg";
import Temperature from "./assets/svg/temp.svg";
import Milleage from "./assets/svg/milleage.svg";
import Battery from "./assets/svg/battery.svg";
import Start from "./assets/svg/start.svg";
import Features from "./assets/images/features.png";
import About from "./assets/images/about.png";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <nav className=" flex w-[100vw] bg-black h-[60px] items-center justify-between p-[45px]">
        <img src={Logo} className="w-[130px]" alt="Logo" />
        <button className="z-30" onClick={toggleDropdown}>
          <img src={Menu} className="w-[35px] z-30" alt="Menu" />
        </button>
      </nav>

      <div
        className={`absolute z-50 flex flex-col items-center justify-between top-0 h-[100vh] w-[100vw] right-0 pl-[20px] pr-[20px] pb-[60px] bg-white/10 backdrop-blur-md pt-[20px] shadow-lg  transform  transition-all duration-[0.5s] ease-in-out ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="w-[100%] flex justify-end items-center z-50">
          <button className="close z-50" onClick={() => setIsOpen(false)}>
            <img src={Close} className="z-50" alt="" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-[90px]">
          <p className="text-[2rem] text-white font-[500]">HOME</p>
          <p className="text-[2rem] text-white font-[500]">ABOUT</p>
          <p className="text-[2rem] text-white font-[500]">POPULAR</p>
          <p className="text-[2rem] text-white font-[500]">FEATURED</p>
        </div>
      </div>

      <div className="mt-[80px]  flex flex-col items-center text-center">
        <div className="flex flex-col gap-5">
          <p className="text-[2rem] font-[500]">Choose The Best Car</p>
          <div className="flex flex-col gap-2 items-center">
            <p className="text-[1.5rem] font-[500] font-oleo">
              Porshe Mission E
            </p>
            <div className="flex gap-1 items-center">
              <img src={Light} alt="L" />
              <p className="text-[1.2rem] font-[300]">Electric car</p>
            </div>
          </div>
        </div>

        <img className="mt-[40px]" src={Porshe} alt="car image" />
      </div>

      <img
        className="shade absolute top-0 left-0 w-[100vw] z-10"
        src={Blue}
        alt=""
      />
      <img
        className="shade2 absolute top-[200px] right-0 w-[100vw] z-10"
        src={Blue2}
        alt=""
      />

      <div className="flex w-[100vw] justify-between p-[20px] mt-[30px]">
        <div className="flex flex-col gap-[5px] items-center text-center justify-center">
          <div>
            <img src={Temperature} alt="temp icon" />
          </div>
          <div className="font-[100] text-[1.5rem]">24 &deg;</div>
          <div
            className="font-[400] text-[0.8rem] text-gray-400
          "
          >
            TEMPERATURE
          </div>
        </div>

        <div className="flex flex-col gap-[5px] items-center text-center">
          <div>
            <img src={Milleage} alt="Milleage icon" />
          </div>
          <div className="font-[100] text-[1.5rem]">873</div>
          <div className="font-[400] text-[0.8rem] text-gray-400">MILEAGE</div>
        </div>

        <div className="flex flex-col gap-[5px] items-center text-center">
          <div>
            <img src={Battery} alt="Battery icon" />
          </div>
          <div className="font-[100] text-[1.5rem]">94%</div>
          <div
            className="font-[400] text-[0.8rem] text-gray-400
          "
          >
            BATTERY
          </div>
        </div>
      </div>

      <div className="w-full flex align-middle items-center justify-center mt-[30px]">
        <img src={Start} alt="start button" />
      </div>

      <div className="w-fit ml-auto mr-auto relative flex align-middle justify-center items-center mt-[50px]">
        <img src={About} alt="about" />
        <div className="absolute bottom-[-20px] right-0 flex flex-col items-center text-center p-[10px] rounded-[10px] bg-white/10 backdrop-blur-md w-[220px]">
          <p className="font-[500] text-[1.5rem]">2.500+</p>
          <p className="font-[200] text-[0.9rem]">
            Supercharges placed along popular routes
          </p>
        </div>
      </div>

      <div className="flex flex-col h-fit w-full gap-[30px] items-start mt-[70px] p-[30px]">
        <p className="font-[500] text-[1.5rem]">
          Machines With Future Technology
        </p>
        <p className="font-[200] text-[1.1rem]">
          See the future with high-performance electric cars produced by
          renowned brands. They feature futuristic builds and designs with new
          and innovative platforms that last a long time.
        </p>
        <button className="bg-blue-500  p-[20px] text-[1.1rem] font-[300] rounded-[6px] transition-all hover:bg-opacity-50">
          Know more
        </button>
      </div>
    </div>
  );
}

export default App;
