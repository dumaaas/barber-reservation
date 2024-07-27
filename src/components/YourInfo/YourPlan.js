import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calendar, theme } from "antd";

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: "44px",
  height: "22px",
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(21px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(22px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "hsl(213, 96%, 18%)",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 14,
    height: 14,
    borderRadius: "100%",
    marginTop: "2px",
    marginLeft: "2px",

    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 80 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "hsl(213, 96%, 18%)"
        : "hsl(213, 96%, 18%)",
    boxSizing: "border-box",
  },
}));

function YourPlan() {
  const dispatch = useDispatch();
  const [isMonthly, setIsMonthly] = useState(false);
  const [pickedPlan, setPickedPlan] = useState(null);
  const isMonthlyStore = useSelector((state) => state.isMonthly);
  const plan = useSelector((state) => state.plan);
  const errorPlan = useSelector((state) => state.errorPlan);

  useEffect(() => {
    if (isMonthlyStore !== null) setIsMonthly(isMonthlyStore);
    if (plan !== null) setPickedPlan(plan.id);
  });

  const handleChange = (event) => {
    setIsMonthly(event.target.checked);
    dispatch({
      type: "SET_MONTHLY",
      payload: event.target.checked,
    });
  };

  const pickPlan = (item) => {
    if (errorPlan) {
      dispatch({
        type: "SET_ERROR_PLAN",
        payload: false,
      });
    }
    setPickedPlan(item.id);
    dispatch({
      type: "SET_PLAN",
      payload: item,
    });
  };

  const planData = [
    {
      id: 1,
      icon: "arcade",
      title: "Arcade",
      yearlyPrice: "90",
      monthlyPrice: "9",
      bonus: "2 months free",
    },
    {
      id: 2,
      icon: "advanced",
      title: "Advanced",
      yearlyPrice: "120",
      monthlyPrice: "12",
      bonus: "2 months free",
    },
    {
      id: 3,
      icon: "pro",
      title: "Pro",
      yearlyPrice: "150",
      monthlyPrice: "15",
      bonus: "2 months free",
    },
  ];
  return (
    <div className="flex flex-col gap-[30px]">
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />

      <div
        className={`${
          errorPlan ? "opacity-1" : "opacity-0"
        } text-strawberry-red transition-all duration-500 ease-in-out`}
      >
        Molimo Vas odaberite datum termina.
      </div>
    </div>
  );
}

export default YourPlan;
