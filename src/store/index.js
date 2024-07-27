const reducerFn = (
  state = {
    activeStep: 1,
    plan: null,
    isMonthly: null,
    addOns: null,
    yourTermin: null,
    errorPlan: false,
    name: {
      errorText: "",
      showError: false,
      text: "",
    },
    email: {
      errorText: "",
      showError: false,
      text: "",
    },
    phone: {
      errorText: "",
      showError: false,
      text: "",
    },
  },
  action
) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SET_PHONE":
      return {
        ...state,
        phone: action.payload,
      };
    case "NEXT_STEP":
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    case "PREV_STEP":
      return {
        ...state,
        activeStep: state.activeStep - 1,
      };
    case "CHANGE_PLAN":
      return {
        ...state,
        activeStep: 2,
      };
    case "SET_PLAN":
      return {
        ...state,
        plan: action.payload,
      };
    case "SET_MONTHLY":
      return {
        ...state,
        isMonthly: action.payload,
      };
    case "SET_ADDONS":
      return {
        ...state,
        addOns: action.payload,
      };
    case "SET_TERMIN":
      return {
        ...state,
        yourTermin: action.payload,
      };
    case "SET_ERROR_PLAN":
      return {
        ...state,
        errorPlan: action.payload,
      };

    default:
      break;
  }
  return state;
};

export default reducerFn;
