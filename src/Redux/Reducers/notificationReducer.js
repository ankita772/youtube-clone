import { DESTROY_NOTIFY, NOTIFY } from "../actionTypes";

const INITIAL_STATE = {
  open: false,
  severity: "success",
  message: "",
};

const notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTIFY:
      return {
        ...state,
        open: true,
        severity: action.payload.severity,
        message: action.payload.message,
      };
    case DESTROY_NOTIFY:
      return {
        open: false,
        severity: "success",
        message: "",
      };
    default:
      return state;
  }
};

export default notificationReducer;
