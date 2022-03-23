import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistCombineReducers } from "redux-persist";

import authReducer from "./authReducer";
import notificationReducer from "./notificationReducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = persistCombineReducers(persistConfig, {
  auth: authReducer,
  notification: notificationReducer,
});

export default rootReducer;
