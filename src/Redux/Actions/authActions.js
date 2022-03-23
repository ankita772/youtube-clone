import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, NOTIFY } from "../actionTypes";
import Api from "../../Service/index";

export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await Api.post("login", data);
      console.log(response);
      if (response.token) {
        dispatch({ type: LOGIN_USER, payload: response });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: NOTIFY,
        payload: {
          severity: "error",
          message: error?.message,
        },
      });
    }
  };
};

export const logout = () => {
  localStorage.clear();
  return {
    type: LOGOUT_USER,
  };
};
