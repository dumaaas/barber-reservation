import { useSelector } from "react-redux";
import sidebarBgImageDesktop from "../../assets/barber.jpg";
import sidebarBgImageMobile from "../../assets/barber.jpg";

import { useState, useEffect } from "react";

function SidebarNav() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const activeStep = useSelector((state) => state.activeStep);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ovdje koristimo screenWidth kako bismo odabrali željenu sliku
  const backgroundImage =
    screenWidth < 1024 ? sidebarBgImageMobile : sidebarBgImageDesktop;

  const steps = [
    {
      step: 1,
      title: "Odaberi barbera",
    },
    {
      step: 2,
      title: "Odaberi datum",
    },
    {
      step: 3,
      title: "Odaberi vrijeme",
    },
    {
      step: 4,
      title: "Odaberi uslugu",
    },
    {
      step: 5,
      title: "Potvrdi termin",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="flex relative justify-center lg:min-w-[300px] lg:pl-[35px] lg:py-[35px] pt-[30px] pb-[120px] lg:pr-[100px] lg:rounded-[10px]"
    >
      <div className="w-full h-full absolute left-0 top-0 bg-black bg-opacity-60 z-10 inset-1 lg:rounded-[10px]" />
      <div className="z-20 lg:justify-start justify-center relative flex lg:flex-col gap-[28px]">
        {steps.map((item) => {
          return (
            <div
              key={item.step}
              className="flex items-center flex-row gap-[16px] "
            >
              <div
                className={`cursor-pointer flex items-center justify-center rounded-full border-[1px] w-[39px] h-[39px] ${
                  (item.step === 5 && activeStep === 6) ||
                  activeStep === item.step
                    ? "border-transparent ease-in-out transition-all duration-300 delay-300"
                    : "border-white"
                }`}
              >
                <p
                  className={`relative z-20 text-[16px] font-bold ${
                    (item.step === 5 && activeStep === 6) ||
                    activeStep === item.step
                      ? "text-marine-blue ease-in-out transition-colors duration-300 delay-300"
                      : "text-white"
                  }`}
                >
                  {item.step}
                </p>
              </div>
              <div className="flex-col hidden lg:flex">
                <label className="uppercase text-[14px] text-[#cfa240] font-semibold">
                  Korak {item.step}
                </label>
                <p className="uppercase font-bold text-[15px] tracking-[1px] text-white">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
        <div
          style={{
            top:
              activeStep <= 5
                ? screenWidth >= 1024
                  ? 2 + (activeStep - 1) * 72
                  : 0
                : screenWidth >= 1024
                ? 2 + 4 * 72
                : 0,
            left:
              activeStep <= 5
                ? screenWidth >= 1024
                  ? 0
                  : (activeStep - 1) * 67
                : screenWidth >= 1024
                ? 0
                : 4 * 67,
          }}
          className="transitiona-all duration-500 ease-in-out w-[39px] h-[39px] bg-[#cfa240] absolute top-[37px] rounded-full z-10"
        ></div>
      </div>
    </div>
  );
}

export default SidebarNav;
