import { DESTROY_NOTIFY, NOTIFY } from "../actionTypes";

export const notificationService = (payload) => {
  return {
    type: NOTIFY,
    payload,
  };
};

export const destroyNotification = () => {
  return {
    type: DESTROY_NOTIFY,
  };
};
