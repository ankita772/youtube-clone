import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../actionTypes";

const INITIAL_STATE = {
  authDetails: null,
  token: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        authDetails: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        authDetails: action.payload.user,
        token: action.payload.token,
      };
    case LOGOUT_USER:
      return {
        authDetails: null,
        token: null,
      };
    default:
      return state;
  }
};

export default reducer;
