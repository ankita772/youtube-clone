import React, { useState } from "react";
import Email from "./email";
import Password from "./password";
import Notification from "../component/notification";

import { Box, Modal, Button, Typography } from "@mui/material";

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

export default function TransitionsModal() {
  const [emailValidColor, setEmailValidColor] = useState("");
  const [passwordValidColor, setPasswordValidColor] = useState("");
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [signupValues, setSignupValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    severity: "",
    message: "",
  });

  //onchange for email
  const handleChangeEmail = (prop) => (event) => {
    if (event.target.value === "") {
      setEmailValidColor("error");
    } else {
      setEmailValidColor("success");
    }
    setSignupValues({ ...signupValues, [prop]: event.target.value });
  };

  //onchange for password

  const handleChangePassword = (prop) => (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      setPasswordValidColor("error");
    } else {
      setPasswordValidColor("success");
    }
    setSignupValues({ ...signupValues, [prop]: event.target.value });
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

  //post request

  const createNewUser = async () => {
    let fetchData = {
      method: "POST",
      body: JSON.stringify({
        email: signupValues.email,
        password: signupValues.password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };
    const res = await fetch("http://localhost:5000/create-user", fetchData);
    const user = await res.json();
    console.log(user);
  };

  // const createNewUser = async () => {
  //   let fetchData = {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: signupValues.email,
  //       password: signupValues.password,
  //     }),
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //     }),
  //   };

  //   const res = await fetch("http://localhost:5000/create-user", fetchData);
  //   const data = await res.json();
  //   console.log(data);
  // };

  //after clicking signup button

  const handleSignup = () => {
    if (signupValues.email === "" && signupValues.password === "") {
      setEmailValidColor("error");
      setPasswordValidColor("error");
    } else if (signupValues.email === "") {
      setEmailValidColor("error");
    } else if (signupValues.password === "") {
      setPasswordValidColor("error");
    } else {
      createNewUser();
      setSignupValues({
        ...signupValues,
        email: "",
        password: "",
        showPassword: false,
      });
      setEmailValidColor("");
      setPasswordValidColor("");
    }
  };

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
              <Email
                emailValidColor={emailValidColor}
                values={signupValues}
                handleChangeEmail={handleChangeEmail("email")}
              />
              <Password
                passwordValidColor={passwordValidColor}
                values={signupValues}
                handleChangePassword={handleChangePassword("password")}
                handleChangeShowPassword={handleChangeShowPassword}
                handleChangeMouseDownPassword={handleChangeMouseDownPassword}
              />
            </Box>
            <Box sx={{ textAlign: "center", mt: 1 }}>
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
      </Box>
    </>
  );
}
