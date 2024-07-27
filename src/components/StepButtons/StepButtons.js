import { useDispatch, useSelector } from "react-redux";
function StepButtons() {
  const dispatch = useDispatch();
  const activeStep = useSelector((state) => state.activeStep);
  const plan = useSelector((state) => state.plan);
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.email);
  const phone = useSelector((state) => state.phone);

  const nextStep = () => {
    if (activeStep + 1 === 2) {
      var errorFlag = false;

      if (errorFlag) return;
    }
    if (activeStep + 1 === 3 && !plan) {
      dispatch({
        type: "SET_ERROR_PLAN",
        payload: true,
      });
      return;
    }
    if (activeStep + 1 > 6) return;
    dispatch({
      type: "NEXT_STEP",
    });
  };
  const prevStep = () => {
    if (activeStep - 1 < 1) return;

    dispatch({
      type: "PREV_STEP",
    });
  };
  return (
    <div>
      {activeStep < 6 && (
        <div className="flex items-center justify-between gap-[10px]">
          <button
            onClick={() => prevStep()}
            className={`${
              activeStep === 1 ? "opacity-0 cursor-auto" : "opacity-1"
            } font-medium text-[16px] lg:text-[18px] text-cool-gray transition-all duration-500 ease-in-out hover:text-marine-blue`}
          >
            Nazad
          </button>
          <button
            onClick={() => nextStep()}
            className={`${
              activeStep > 4
                ? "bg-purplish-blue hover:bg-opacity-60"
                : "hover:bg-opacity-80 bg-marine-blue"
            } font-medium text-white  transition-colors duration-[2000] ease-in-out lg:px-[27px] px-[20px] text-[16px] lg:text-[18px] rounded-[8px] text-center py-[10px] lg:py-[12px]`}
          >
            {activeStep > 4 ? "Potvrdi" : "Dalje"}
          </button>
        </div>
      )}
    </div>
  );
}

export default StepButtons;
