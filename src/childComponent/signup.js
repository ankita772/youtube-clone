import React, { useState } from "react";
import validator from "validator";
import Email from "./email";
import Password from "./password";
import Notification from "../component/notification";

import {
  Box,
  Modal,
  Button,
  Typography,
  TextField,
  FormHelperText,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ setIsSignup }) {
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [signupValues, setSignupValues] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    showPassword: false,
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  //onchange name
  const handleChangeName = (prop) => (event) => {
    setSignupValues({ ...signupValues, [prop]: event.target.value });
  };
  //onChane ph
  const handleChangePh = (prop) => (event) => {
    setSignupValues({ ...signupValues, [prop]: event.target.value });
  };

  //onchange for email
  const handleChangeEmail = (prop) => (event) => {
    setSignupValues({ ...signupValues, [prop]: event.target.value });
  };

  //onchange for password

  const handleChangePassword = (prop) => (e) => {
    setSignupValues({ ...signupValues, [prop]: e.target.value });
  };

  //hide and show password

  const handleChangeShowPassword = () => {
    setSignupValues({
      ...signupValues,
      showPassword: !signupValues.showPassword,
    });
  };

  const handleChangeMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignup = () => {};

  return (
    <>
      <Box sx={{ mr: 2 }}>
        <Button
          variant="outlined"
          sx={{
            color: "info",
            fontWeight: "bold",
            fontSize: { xs: "8px", sm: "8px", md: "10px", lg: "15px" },
            p: 1,
          }}
          onClick={() => {
            setSignupModalOpen(true);
          }}
        >
          Sign Up
        </Button>

        <Modal open={signupModalOpen} onClose={() => setSignupModalOpen(false)}>
          <Box sx={style}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              Sign Up
            </Typography>
            <Box sx={{ ml: 2, mt: 1 }}>
              <TextField
                type="text"
                label="Name"
                variant="filled"
                onChange={handleChangeName("text")}
                sx={{ m: 1, width: "32ch" }}
              />

              <TextField
                type="number"
                label="Phone Number"
                variant="filled"
                onChange={handleChangePh("number")}
                sx={{ m: 1, width: "32ch" }}
              />

              <Email handleChangeEmail={handleChangeEmail("email")} />

              <Password
                values={signupValues}
                handleChangePassword={handleChangePassword("password")}
                handleChangeShowPassword={handleChangeShowPassword}
                handleChangeMouseDownPassword={handleChangeMouseDownPassword}
              />
            </Box>
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Button
                variant="contained"
                color="success"
                sx={{ textAlign: "center" }}
                onClick={handleSignup}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Modal>
        <Notification
          open={snackbar.open}
          vertical="top"
          horizontal="right"
          severity={snackbar.severity}
          message={snackbar.message}
          onClose={() => {
            setSnackbar({ ...snackbar, open: false });
          }}
        />
      </Box>
    </>
  );
}
