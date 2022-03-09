import React, { useState } from "react";
import validator from "validator";
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

const Signin = () => {
  //email
  const [emailValidColor, setEmailValidColor] = useState("");
  const [helperTextEmail, setHelperTextEmail] = useState(false);
  const [errMessageEmail, setErrMessageEmail] = useState("");
  //password
  const [passwordValidColor, setPasswordValidColor] = useState("");
  const [helperTextPassword, setHelperTextPassword] = useState(false);
  const [errMessagePassword, setErrMessagePassword] = useState("");

  const [signinModalOpen, setSigninModalOpen] = useState(false);
  const [signinValues, setSigninValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    severity: "success",
    message: "",
  });
  //onchange for email
  const handleChangeEmail = (prop) => (event) => {
    if (event.target.value === "") {
      setEmailValidColor("error");
    } else {
      setEmailValidColor("success");
    }
    setSigninValues({ ...signinValues, [prop]: event.target.value });
  };
  //onchange for password
  const handleChangePassword = (prop) => (event) => {
    if (event.target.value === "") {
      setPasswordValidColor("error");
    } else {
      setPasswordValidColor("success");
    }
    setSigninValues({ ...signinValues, [prop]: event.target.value });
  };
  //hide & show password
  const handleChangeShowPassword = () => {
    setSigninValues({
      ...signinValues,
      showPassword: !signinValues.showPassword,
    });
  };

  const handleChangeMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const getUser = async () => {
  //   let fetchData = {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: signinValues.email,
  //       password: signinValues.password,
  //     }),
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //     }),
  //   };
  //   const res = await fetch("http://localhost:5000/get-user", fetchData);
  //   const user = await res.json();
  //   console.log(user);

  // };
  //after clicking sign in

  const handleSignin = () => {
    if (
      validator.isEmail(signinValues.email) &&
      signinValues.password.length >= 6
    ) {
      console.log("sign in compleated");
    } else {
      if (!validator.isEmail(signinValues.email)) {
        setEmailValidColor("error");
        setHelperTextEmail(true);
        setErrMessageEmail("Invalid Email");
      }
      if (signinValues.password.length < 6) {
        setPasswordValidColor("error");
        setHelperTextPassword(true);
        setErrMessagePassword("Password must be at least 6 digits");
      }
    }
  };

  return (
    <>
      <Box sx={{ display: { md: "flex" }, mr: 2 }}>
        <Button
          variant="outlined"
          sx={{
            color: "info",
            fontWeight: "bold",
            fontSize: { xs: "8px", sm: "8px", md: "10px", lg: "15px" },
            p: 1,
          }}
          onClick={() => {
            setSigninModalOpen(true);
          }}
        >
          Sign IN
        </Button>
        <Modal open={signinModalOpen} onClose={() => setSigninModalOpen(false)}>
          <Box sx={style}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              Sign In
            </Typography>
            <Box sx={{ ml: 2, mt: 1 }}>
              <Email
                emailValidColor={emailValidColor}
                values={signinValues}
                handleChangeEmail={handleChangeEmail("email")}
              />
              <Password
                passwordValidColor={passwordValidColor}
                values={signinValues}
                handleChangePassword={handleChangePassword("password")}
                handleChangeShowPassword={handleChangeShowPassword}
                handleChangeMouseDownPassword={handleChangeMouseDownPassword}
              />
            </Box>
            <Box sx={{ textAlign: "center", mt: 1 }}>
              <Button
                variant="contained"
                color="success"
                onClick={handleSignin}
                sx={{ textAlign: "center" }}
              >
                Sign in
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
};
export default Signin;
