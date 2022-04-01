import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useDispatch } from "react-redux";
import { destroyNotification } from "../Redux/Actions";
const Notification = ({ open, vertical, horizontal, severity, message }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        key={vertical + horizontal}
        onClose={() => dispatch(destroyNotification())}
      >
        <Alert severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
export default Notification;
