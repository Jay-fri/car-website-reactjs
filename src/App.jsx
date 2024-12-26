import React, { useState, useEffect } from "react";
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
import About from "./assets/images/about.png";
import Slider1 from "./components/Slider1";
import Carfeatures from "./assets/svg/featurescar.svg";
import Logo1 from "./assets/svg/logo1.svg";
import Logo2 from "./assets/svg/logo2.svg";
import Logo3 from "./assets/svg/logo3.svg";
import Logo4 from "./assets/svg/logo4.svg";
import Logo5 from "./assets/svg/logo5.svg";
import Logo6 from "./assets/svg/logo6.svg";
import Shop from "./assets/svg/shop.svg";
import Shape from "./assets/svg/shape.svg";
import Featured1 from "./assets/svg/featured1.svg";
import Featured2 from "./assets/svg/featured2.svg";
import Featured3 from "./assets/svg/featured3.svg";
import Featured4 from "./assets/svg/featured5.svg";
import Featured5 from "./assets/svg/featured6.svg";
import Subscribe from "./assets/svg/subscribe.svg";
import Facebook from "./assets/svg/facebook.svg";
import Twitter from "./assets/svg/twitter.svg";
import Instagram from "./assets/svg/instagram.svg";
import Copyright from "./assets/svg/copyright.svg";
import FooterShape1 from "./assets/svg/footershape1.svg";
import FooterShape2 from "./assets/svg/footershape2.svg";
import Preloader from "./components/Preloader";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); //3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <nav className=" flex w-[100vw] bg-black h-[60px] items-center justify-between pt-[45px] pb-[45px] pl-[25px] pr-[25px]">
            <img src={Logo} className="w-[130px]" alt="Logo" />
            <button className="z-30" onClick={toggleDropdown}>
              <img src={Menu} className="w-[35px] z-30" alt="Menu" />
            </button>
          </nav>

          <div
            className={`absolute z-[100] flex flex-col items-center justify-between top-0 h-[100vh] w-[100vw] right-0 pl-[20px] pr-[20px] pb-[60px] bg-white/10 backdrop-blur-md pt-[20px] shadow-lg  transform  transition-all duration-[0.5s] ease-in-out ${
              isOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
          >
            <div className="w-[100%] h-fit flex justify-end items-center z-50">
              <button
                className="close h-fit z-50"
                onClick={() => setIsOpen(false)}
              >
                <img src={Close} className="z-50" alt="" />
              </button>
            </div>
            <div className=" absolute top-[100px] flex flex-col items-center gap-[90px]">
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
            className="shade absolute top-0 left-0 w-full z-10"
            src={Blue}
            alt=""
          />
          <img
            className="shade2 absolute top-[200px] right-0 w-full -z-10"
            src={Blue2}
            alt=""
          />

          <div className="flex w-[100vw] justify-between p-[20px] mt-[30px]">
            <div className="flex flex-col gap-[5px] items-center text-center justify-center z-50">
              <div>
                <img src={Temperature} alt="temp icon" />
              </div>
              <div className="font-[300] text-[1.5rem]">24 &deg;</div>
              <div
                className="font-[400] text-[0.8rem] text-gray-400
          "
              >
                TEMPERATURE
              </div>
            </div>

            <div className="flex flex-col gap-[5px] items-center text-center z-50">
              <div>
                <img src={Milleage} alt="Milleage icon" />
              </div>
              <div className="font-[300] text-[1.5rem]">873</div>
              <div className="font-[400] text-[0.8rem] text-gray-400">
                MILEAGE
              </div>
            </div>

            <div className="flex flex-col gap-[5px] items-center text-center z-50">
              <div>
                <img src={Battery} alt="Battery icon" />
              </div>
              <div className="font-[300] text-[1.5rem]">94%</div>
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
              renowned brands. They feature futuristic builds and designs with
              new and innovative platforms that last a long time.
            </p>
            <button className="bg-blue-500  p-[20px] text-[1.1rem] font-[300] rounded-[6px] transition-all hover:bg-opacity-50">
              Know more
            </button>
          </div>
          <Slider1 />

          <div className="features">
            <div className="w-full pt-[60px] flex items-center justify-center">
              <p className="font-[500] text-[1.8rem]">More Features</p>
            </div>
            <div className="relative w-fit mt-[150px] mb-0 ml-auto mr-auto ">
              <img src={Carfeatures} alt="" />
              <div className="absolute flex flex-col gap-[5px] top-0 left-[-100px] pl-[40px] pr-[40px] pt-[20px] pb-[20px] w-[150px] h-[130px] text-center rounded-[30px] bg-white/20 backdrop-blur-md ">
                <p className="font-[500] text-[1.5rem]">800v</p>
                <p className="font-[300] w-[70px] text-[1.2rem]">
                  Turbo Chargin
                </p>
              </div>
              <div className="absolute flex flex-col gap-[5px] top-[100px] right-[-100px] pl-[40px] pr-[40px] pt-[20px] pb-[20px] w-[150px] h-[130px] text-center rounded-[30px] bg-white/10 backdrop-blur-md ">
                <p className="font-[500] text-[1.5rem]">350</p>
                <p className="font-[300] w-[70px] text-[1.2rem]">Km Range</p>
              </div>
              <div className="absolute flex flex-col gap-[5px] bottom-0 left-[-100px] pl-[40px] pr-[40px] pt-[20px] pb-[20px] w-[150px] h-[130px] text-center rounded-[30px] bg-white/20 backdrop-blur-md ">
                <p className="font-[500] text-[1.5rem]">480</p>
                <p className="font-[300] w-[70px] text-[1.2rem]">Km Travel</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[50px] items-center pt-[40px]">
            <p className="font-[500] text-[1.8rem]">Featured Luxury Cars</p>
            <div className="flex gap-[30px]">
              <div className="bg-white/10 w-fit p-[10px] rounded-[10px]">
                <img className="w-[40px]" src={Logo1} alt="" />
              </div>
              <div className="bg-white/10 w-fit p-[10px] rounded-[10px] flex items-center justify-center">
                <img className="w-[40px]" src={Logo2} alt="" />
              </div>
              <div className="bg-white/10 w-fit p-[10px] rounded-[10px] flex items-center justify-center">
                <img className="w-[40px]" src={Logo3} alt="" />
              </div>
            </div>

            <div className="relative shrink-0 card h-[350px] w-[280px] rounded-[20px] p-[40px]">
              <div className="flex flex-col gap-[0px]">
                <p className="font-[500] text-[1.7rem] mb-0">Tesla</p>
                <p className="mt-0 font-[300] text-[1.3rem] text-gray-400">
                  Model X
                </p>
              </div>
              <img
                className="relative z-50 w-[280px] mt-[1.5rem]"
                src={Featured1}
                alt=""
              />
              <p className="mt-[40px] text-[1.5rem] font-[500]">$98,900</p>
              <button className="absolute w-fit bottom-0 right-0 hover:scale-110 transition-all">
                <img className="w-[60px]" src={Shop} alt="" />
              </button>

              <img
                className=" absolute top-0 w-[100%] h-[100%] ml-[-40px]"
                src={Shape}
                alt=""
              />
            </div>
            <div className="relative shrink-0 card h-[350px] w-[280px] rounded-[20px] p-[40px]">
              <div className="flex flex-col gap-[0px]">
                <p className="font-[500] text-[1.7rem] mb-0">Tesla</p>
                <p className="mt-0 font-[300] text-[1.3rem] text-gray-400">
                  Model 3
                </p>
              </div>
              <img
                className="relative z-50 w-[280px] mt-[1.5rem]"
                src={Featured2}
                alt=""
              />
              <p className="mt-[40px] text-[1.5rem] font-[500]">$45,900</p>
              <button className="absolute w-fit bottom-0 right-0 hover:scale-110 transition-all">
                <img className="w-[60px]" src={Shop} alt="" />
              </button>

              <img
                className=" absolute top-0 w-[100%] h-[100%] ml-[-40px]"
                src={Shape}
                alt=""
              />
            </div>
            <div className="relative shrink-0 card h-[350px] w-[280px] rounded-[20px] p-[40px]">
              <div className="flex flex-col gap-[0px]">
                <p className="font-[500] text-[1.7rem] mb-0">Audi</p>
                <p className="mt-0 font-[300] text-[1.3rem] text-gray-400">
                  E-tron
                </p>
              </div>
              <img
                className="relative z-50 w-[280px] mt-[1.5rem]"
                src={Featured3}
                alt=""
              />
              <p className="mt-[40px] text-[1.5rem] font-[500]">$175,900</p>
              <button className="absolute w-fit bottom-0 right-0 hover:scale-110 transition-all">
                <img className="w-[60px]" src={Shop} alt="" />
              </button>

              <img
                className=" absolute top-0 w-[100%] h-[100%] ml-[-40px]"
                src={Shape}
                alt=""
              />
            </div>
            <div className="relative shrink-0 card h-[350px] w-[280px] rounded-[20px] p-[40px]">
              <div className="flex flex-col gap-[0px]">
                <p className="font-[500] text-[1.7rem] mb-0">Porsche</p>
                <p className="mt-0 font-[300] text-[1.3rem] text-gray-400">
                  Boxster 987
                </p>
              </div>
              <img
                className="relative z-50 w-[280px] mt-[1.5rem]"
                src={Featured4}
                alt=""
              />
              <p className="mt-[40px] text-[1.5rem] font-[500]">$126,900</p>
              <button className="absolute w-fit bottom-0 right-0 hover:scale-110 transition-all">
                <img className="w-[60px]" src={Shop} alt="" />
              </button>

              <img
                className=" absolute top-0 w-[100%] h-[100%] ml-[-40px]"
                src={Shape}
                alt=""
              />
            </div>
            <div className="relative shrink-0 card h-[350px] w-[280px] rounded-[20px] p-[40px]">
              <div className="flex flex-col gap-[0px]">
                <p className="font-[500] text-[1.7rem] mb-0">Porsche</p>
                <p className="mt-0 font-[300] text-[1.3rem] text-gray-400">
                  Panamera
                </p>
              </div>
              <img
                className="relative w-[280px] mt-[1.5rem] z-[100]"
                src={Featured5}
                alt=""
              />
              <p className="mt-[40px] text-[1.5rem] font-[500]">$126,900</p>
              <button className="absolute w-fit bottom-0 right-0 hover:scale-110 transition-all">
                <img className="w-[60px]" src={Shop} alt="" />
              </button>

              <img
                className=" absolute top-0 w-[100%] h-[100%] ml-[-40px] z-0"
                src={Shape}
                alt=""
              />
            </div>
          </div>
          <div className="offer relative p-[30px]">
            <div className="flex flex-col gap-[30px] w-full text-center items-center justify-center">
              <p className="font-[500] text-[1.8rem] mt-[20px]">
                Do You Want To Receive Special Offers?
              </p>
              <p className="font-[300] text-[1.2rem]">
                Be the first to receive all the information about our products
                and new cars by email by subscribing to our mailing list.
              </p>
              <button className="w-[180px] h-[60px] font-[300] text-[1.3rem] rounded-[10px] bg-blue-600 hover:bg-blue-700 transition-all">
                Subscribe Now
              </button>
            </div>
            <img className="absolute bottom-8 right-0" src={Subscribe} alt="" />
          </div>

          <div className="grid grid-cols-3 gap-[50px] items-center p-[40px] mt-[30px] mb-[30px]">
            <img className="w-[55px]" src={Logo1} alt="" />
            <img className="w-[55px]" src={Logo2} alt="" />
            <img className="w-[55px]" src={Logo3} alt="" />
            <img className="w-[55px]" src={Logo4} alt="" />
            <img className="w-[55px]" src={Logo5} alt="" />
            <img className="w-[55px]" src={Logo6} alt="" />
          </div>

          <div className="relative p-[30px] grid grid-cols-1 gap-[60px]">
            <div className="flex flex-col gap-[30px]">
              <img className="w-[120px]" src={Logo} alt="" />
              <p className="font-[300] text-[1.2rem] ">
                We offer the best electric cars of the most recognized brands in
                the world.
              </p>
            </div>
            <div className="flex flex-col gap-[30px]">
              <p className="font-[500] text-[1.6rem]">Company</p>
              <div className="flex flex-col gap-[10px]">
                <p className="font-[300] text-[1.15rem] ">About</p>
                <p className="font-[300] text-[1.15rem] ">Cars</p>
                <p className="font-[300] text-[1.15rem] ">History</p>
                <p className="font-[300] text-[1.15rem] ">Shop</p>
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <p className="font-[500] text-[1.6rem]">Information</p>
              <div className="flex flex-col gap-[10px]">
                <p className="font-[300] text-[1.15rem] ">Request a quote</p>
                <p className="font-[300] text-[1.15rem] ">Find a dealer</p>
                <p className="font-[300] text-[1.15rem] ">Contact us</p>
                <p className="font-[300] text-[1.15rem] ">Services</p>
              </div>
            </div>
            <div className="flex flex-col gap-[20px]">
              <p className="font-[500] text-[1.6rem]">Follow us</p>
              <div className="flex gap-[20px]">
                <img className="w-[30px]" src={Facebook} alt="" />
                <img className="w-[30px]" src={Instagram} alt="" />
                <img className="w-[30px]" src={Twitter} alt="" />
              </div>
            </div>
            <img
              className="absolute top-0 left-0 w-full"
              src={FooterShape1}
              alt=""
            />
            <img
              className="absolute bottom-[-135px] w-full right-0"
              src={FooterShape2}
              alt=""
            />
          </div>
          <div className="flex gap-[5px] items-center justify-center mt-[70px] mb-[40px]">
            <img className="w-[18px]" src={Copyright} alt="" />
            <p className="font-[300] text-[0.9rem] text-gray-400">
              Joshua || web dev. All right reserved
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
