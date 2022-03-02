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

const Signin = () => {
  const [emailValidColor, setEmailValidColor] = useState("");
  const [passwordValidColor, setPasswordValidColor] = useState("");
  const [signinModalOpen, setSigninModalOpen] = useState(false);
  const [signinValues, setSigninValues] = useState({
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

  //after clicking sign in

  const handleSignin = () => {
    if (signinValues.email === "" && signinValues.password === "") {
      setEmailValidColor("error");
      setPasswordValidColor("error");
    } else if (signinValues.email === "") {
      setEmailValidColor("error");
    } else if (signinValues.password === "") {
      setPasswordValidColor("error");
    } else {
      setSigninValues({
        ...signinValues,
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
      </Box>
    </>
  );
};
export default Signin;
