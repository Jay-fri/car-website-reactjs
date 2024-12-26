import React, { useEffect, useRef } from "react";
import Brand1 from "../assets/svg/brand1.svg";
import Brand2 from "../assets/svg/brand2.svg";
import Brand3 from "../assets/svg/brand3.svg";
import Brand4 from "../assets/svg/brand4.svg";
import Brand5 from "../assets/svg/brand5.svg";
import Time from "../assets/svg/dashboard.svg";
import Speed from "../assets/svg/funds.svg";
import Type from "../assets/svg/electric.svg";
import Shop from "../assets/svg/shop.svg";
import Shape1 from "../assets/svg/shape1.svg";

const Slider1 = () => {
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    if (container) {
      const handleWheel = (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      };

      container.addEventListener("wheel", handleWheel);

      return () => {
        container.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  return (
    <div className=" w-full sm:w-[80vw] flex gap-[30px] sm:mx-auto p-[20px] scrollbar-hide overflow-x-scroll overflow-y-hidden rounded-[20px]">
      <div className="relative overflow-hidden shrink-0 card h-[400px] w-[280px] rounded-[20px] p-[30px]">
        <div className="flex flex-col gap-[0px]">
          <p className="font-[500] text-[1.7rem] mb-0">Porsche</p>
          <p className="mt-0 font-[300] text-[1.3rem] text-gray-400">Turbo S</p>
        </div>
        <img
          className="relative z-50 w-[280px] mt-[1rem] ml-[10px]"
          src={Brand1}
          alt=""
        />
        <div className="flex gap-[15px] mt-[30px] w-full">
          <div className="flex gap-[5px] items-center">
            <img className="w-[25px]" src={Time} alt="" />
            <p className="font-[300] text-[1rem]">3.7 Sec</p>
          </div>
          <div className="flex gap-[5px] w-fit items-center">
            <img className="w-[25px]" src={Speed} alt="" />
            <p className="w-fit font-[300] text-[1rem] ">356 Km/h</p>
          </div>
        </div>
        <div className="flex gap-[5px] mt-[9px] items-center">
          <img className="w-[25px]" src={Type} alt="" />
          <p className="w-fit font-[300] text-[1rem] ">Electric</p>
        </div>
        <p className="mt-[25px] text-[1.5rem] font-[500]">$175,900</p>
        <button className="absolute w-fit bottom-0 right-0 hover:scale-110 transition-all">
          <img className="w-[50px]" src={Shop} alt="" />
        </button>
        <img className="absolute top-0 left-[1px]" src={Shape1} alt="" />
      </div>
      <div className="relative overflow-hidden card shrink-0 h-[400px] w-[280px] rounded-[20px] p-[30px]">
        <div className="flex flex-col gap-[0px]">
          <p className="font-[500] text-[1.7rem] mb-0">Porsche</p>
          <p className="mt-0 font-[300] text-[1.3rem] text-gray-400">Taycan</p>
        </div>
        <img
          className="relative z-50 w-[280px] mt-[1rem] ml-[10px]"
          src={Brand2}
          alt=""
        />
        <div className="flex gap-[15px] mt-[30px] w-full">
          <div className="flex gap-[5px] items-center">
            <img className="w-[25px]" src={Time} alt="" />
            <p className="font-[300] text-[1rem]">3.7 Sec</p>
          </div>
          <div className="flex gap-[5px] w-fit items-center">
            <img className="w-[25px]" src={Speed} alt="" />
            <p className="w-fit font-[300] text-[1rem] ">356 Km/h</p>
          </div>
        </div>
        <div className="flex gap-[5px] mt-[9px] items-center">
          <img className="w-[25px]" src={Type} alt="" />
          <p className="w-fit font-[300] text-[1rem] ">Electric</p>
        </div>
        <p className="mt-[25px] text-[1.5rem] font-[500]">$114,900</p>
        <button className="absolute w-fit bottom-0 right-0 hover:scale-110 transition-all">
          <img className="w-[50px]" src={Shop} alt="" />
        </button>
        <img className="absolute top-0 left-[1px]" src={Shape1} alt="" />
      </div>
      <div className="relative overflow-hidden card shrink-0 h-[400px] w-[280px] rounded-[20px] p-[30px]">
        <div className="flex flex-col gap-[0px]">
          <p className="font-[500] text-[1.7rem] mb-0">Porsche</p>
          <p className="mt-0 font-[300] text-[1.3rem] text-gray-400">
            Turbo S Cross
          </p>
        </div>
        <img
          className="relative z-50 w-[280px] mt-[1rem] ml-[10px]"
          src={Brand3}
          alt=""
        />
        <div className="flex gap-[15px] mt-[30px] w-full">
          <div className="flex gap-[5px] items-center">
            <img className="w-[25px]" src={Time} alt="" />
            <p className="font-[300] text-[1rem]">3.7 Sec</p>
          </div>
          <div className="flex gap-[5px] w-fit items-center">
            <img className="w-[25px]" src={Speed} alt="" />
            <p className="w-fit font-[300] text-[1rem] ">356 Km/h</p>
          </div>
        </div>
        <div className="flex gap-[5px] mt-[9px] items-center">
          <img className="w-[25px]" src={Type} alt="" />
          <p className="w-fit font-[300] text-[1rem] ">Electric</p>
        </div>
        <p className="mt-[25px] text-[1.5rem] font-[500]">$150,900</p>
        <button className="absolute w-fit bottom-0 right-0 hover:scale-110 transition-all">
          <img className="w-[50px]" src={Shop} alt="" />
        </button>
        <img className="absolute top-0 left-[1px]" src={Shape1} alt="" />
      </div>
      <div className="relative overflow-hidden card shrink-0 h-[400px] w-[280px] rounded-[20px] p-[30px]">
        <div className="flex flex-col gap-[0px]">
          <p className="font-[500] text-[1.7rem] mb-0">Porsche</p>
          <p className="mt-0 font-[300] text-[1.3rem] text-gray-400">
            Boxster 718
          </p>
        </div>
        <img
          className="relative z-50 w-[280px] mt-[1rem] ml-[10px]"
          src={Brand4}
          alt=""
        />
        <div className="flex gap-[15px] mt-[30px] w-full">
          <div className="flex gap-[5px] items-center">
            <img className="w-[25px]" src={Time} alt="" />
            <p className="font-[300] text-[1rem]">3.7 Sec</p>
          </div>
          <div className="flex gap-[5px] w-fit items-center">
            <img className="w-[25px]" src={Speed} alt="" />
            <p className="w-fit font-[300] text-[1rem] ">356 Km/h</p>
          </div>
        </div>
        <div className="flex gap-[5px] mt-[9px] items-center">
          <img className="w-[25px]" src={Type} alt="" />
          <p className="w-fit font-[300] text-[1rem] ">Electric</p>
        </div>
        <p className="mt-[25px] text-[1.5rem] font-[500]">$125,900</p>
        <button className="absolute w-fit bottom-0 right-0 hover:scale-110 transition-all">
          <img className="w-[50px]" src={Shop} alt="" />
        </button>
        <img className="absolute top-0 left-[1px]" src={Shape1} alt="" />
      </div>
      <div className="relative overflow-hidden card h-[400px] shrink-0 w-[280px] rounded-[20px] p-[30px]">
        <div className="flex flex-col gap-[0px]">
          <p className="font-[500] text-[1.7rem] mb-0">Porsche</p>
          <p className="mt-0 font-[300] text-[1.3rem] text-gray-400">Cayman</p>
        </div>
        <img
          className="relative z-50 w-[280px] mt-[1rem] ml-[10px]"
          src={Brand5}
          alt=""
        />
        <div className="flex gap-[15px] mt-[30px] w-full">
          <div className="flex gap-[5px] items-center">
            <img className="w-[25px]" src={Time} alt="" />
            <p className="font-[300] text-[1rem]">3.7 Sec</p>
          </div>
          <div className="flex gap-[5px] w-fit items-center">
            <img className="w-[25px]" src={Speed} alt="" />
            <p className="w-fit font-[300] text-[1rem] ">356 Km/h</p>
          </div>
        </div>
        <div className="flex gap-[5px] mt-[9px] items-center">
          <img className="w-[25px]" src={Type} alt="" />
          <p className="w-fit font-[300] text-[1rem] ">Electric</p>
        </div>
        <p className="mt-[25px] text-[1.5rem] font-[500]">$128,900</p>
        <button className="absolute w-fit bottom-0 right-0 hover:scale-110 transition-all">
          <img className="w-[50px]" src={Shop} alt="" />
        </button>
        <img className="absolute top-0 left-[1px]" src={Shape1} alt="" />
      </div>
    </div>
  );
};

export default Slider1;
