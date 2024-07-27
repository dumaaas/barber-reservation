import { useSelector } from "react-redux";
import YourInfo from "../YourInfo/YourInfo";
import YourPlan from "../YourInfo/YourPlan";
import YourAddOns from "../YourAddOns/YourAddOns";
import YourSummary from "../YourSummary.js/YourSummary";
import SuccessScreen from "../SuccessScreen/SuccessScreen";
import YourTermin from "../YourTermin/YourTermins";

function FormSteps() {
  const activeStep = useSelector((state) => state.activeStep);
  const componentsData = [
    {
      step: 1,
      component: <YourInfo />,
      title: "Odaberi barbera",
      subtitle: "Iz liste odaberite Vašeg barbera.",
    },
    {
      step: 2,
      component: <YourPlan />,
      title: "Odaberi datum",
      subtitle: "Odaberite datum Vašeg termina.",
    },
    {
      step: 3,
      component: <YourTermin />,
      title: "Odaberi termin",
      subtitle: "Odaberi dostupni termin.",
    },
    {
      step: 4,
      component: <YourAddOns />,
      title: "Odaberi uslugu",
      subtitle: "Odaberi jednu ili više usluga iz liste.",
    },
    {
      step: 5,
      component: <YourSummary />,
      title: "Pregled termina",
      subtitle: "Provjerite da li je sve u redu prije potvrde.",
    },
  ];
  return (
    <div className="lg:shadow-none relative lg:static shadow-[0_0_10px_rgba(0,0,0,0.1)] mx-[20px] lg:mb-0 mb-[110px] lg:mx-0 lg:rounded-0 rounded-[20px] lg:p-0 px-[30px] pt-[30px] pb-[40px] lg:mt-0 mt-[-70px]   z-20 bg-white">
      {activeStep <= 5 && (
        <div className="flex flex-col lg:gap-[8px] gap-[4px] lg:pb-[40px] lg:pt-[10px] pb-[20px]">
          <h2 className="lg:text-[32px] text-[26px]  font-bold text-marine-blue">
            {componentsData.find((item) => item.step === activeStep).title}
          </h2>
          <p className="text-cool-gray lg:text-[18px] text-[16px]">
            {componentsData.find((item) => item.step === activeStep).subtitle}
          </p>
        </div>
      )}
      {activeStep <= 5 && (
        <div className="relative">
          {componentsData.map((item) => {
            return (
              <div
                key={item.step}
                className={`w-full lg:absolute top-0 transition-all duration-[0.8s] ease-in-out transform ${
                  activeStep === item.step
                    ? "opacity-1 translate-x-0 translate-y-0 "
                    : "opacity-0 translate-x-[-100%] hidden lg:block"
                }`}
              >
                {item.component}
              </div>
            );
          })}
        </div>
      )}
      <SuccessScreen />
    </div>
  );
}

export default FormSteps;
