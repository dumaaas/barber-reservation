import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

function YourSummary() {
  const dispatch = useDispatch();
  const plan = useSelector((state) => state.plan);
  const addOns = useSelector((state) => state.addOns);
  const yourTermin = useSelector((state) => state.yourTermin);
  const isMonthly = useSelector((state) => state.isMonthly);
  const [totalSum, setTotalSum] = useState(0);

  const changePlan = () => {
    dispatch({
      type: "SET_MONTHLY",
      payload: !isMonthly,
    });
  };

  useEffect(() => {
    countSum();
  });

  const countSum = () => {
    if (addOns && plan) {
      var sum = addOns.reduce((sum, item) => {
        if (item.checked) {
          if (!isMonthly) {
            return parseInt(item.monthlyPrice) + sum;
          } else {
            return parseInt(item.yearlyPrice) + sum;
          }
        } else {
          return 0 + sum;
        }
      }, 0);

      sum += !isMonthly
        ? parseInt(plan.monthlyPrice)
        : parseInt(plan.yearlyPrice);

      setTotalSum(sum);
    }
  };
  return (
    <div>
      <div className="rounded-[8px] px-[15px] lg:px-[30px] py-[15px] lg:py-[20px] bg-[rgba(150,153,171,0.1)]">
        <div
          className={`
            items-center border-b pb-[15px] lg:pb-[20px] border-light-gray flex-1  flex justify-between`}
        >
          <div className="">
            {plan && (
              <h3 className=" text-marine-blue font-bold lg:text-[18px] text-[16px]">
                {plan.title}
              </h3>
            )}
          </div>
          {yourTermin && (
            <p className="text-[16px] lg:text-[18px] font-bold text-marine-blue">
              {yourTermin[0].title} h
            </p>
          )}
        </div>
        {addOns && addOns.length && (
          <div>
            {addOns
              .filter((item) => item.checked)
              .map((obj) => {
                return (
                  <div className="flex items-center justify-between flex-1 pt-[15px] lg:text-[16px] text-[14px] lg:pt-[20px]">
                    <p className=" text-cool-gray">{obj.title}</p>

                    <p className="text-[14px] lg:text-[16px] text-marine-blue">
                      {obj.monthlyPrice} €
                    </p>
                  </div>
                );
              })}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between flex-1 px-[15px] pt-[15px] lg:pt-[25px] lg:px-[30px]">
        <p className="lg:text-[16px] text-[14px] text-cool-gray">Ukupno</p>

        {addOns && plan && (
          <p className="text-[18px] lg:text-[22px] text-purplish-blue font-bold">
            {totalSum} €
          </p>
        )}
      </div>
    </div>
  );
}

export default YourSummary;
