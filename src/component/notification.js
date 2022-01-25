import React from "react";
import { Snackbar, Alert } from "@mui/material";
const Notification = ({
  open,
  vertical,
  horizontal,
  severity,
  message,
  onClose,
}) => {
  return (
    <>
      <Snackbar
        autoHideDuration={6000}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        key={vertical + horizontal}
        onClose={onClose}
      >
        <Alert severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
export default Notification;
