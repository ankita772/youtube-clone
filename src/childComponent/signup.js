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
  //name
  const [formError, setFormError] = useState("");
  const [errorStatement, setErrorStatement] = useState("");
  const [validation, setValidation] = useState();
  const error = {
    name: false,
    phoneNumber: false,
    email: false,
    password: false,
  };
  const errorText = {
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  };
  const validColor = {
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  };

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

  //post request

  const createUser = async () => {
    let fetchData = {
      method: "POST",
      body: JSON.stringify({
        name: signupValues.name,
        phone_nb: signupValues.phone,
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
    // setSnackbar({
    //   ...snackbar,
    //   open: true,
    //   severity: "success",
    //   message: "user is created successfully",
    // });
  };

  //after clicking signup button

  const handleSignup = () => {
    if (
      signupValues.name !== "" &&
      signupValues.phone_nb.length === 10 &&
      validator.isEmail(signupValues.email) &&
      signupValues.password.length >= 6
    ) {
      createUser();
    } else {
      if (signupValues.name === "") {
        validColor.name = "error";
        error.name = true;
        errorText.name = "Please Enter Your name";
      }
      if (signupValues.phone_nb.length !== 10) {
        validColor.phoneNumber = "error";
        error.phoneNumber = true;
        errorText.phoneNumber = "Please Enter 10 digit Phone Number ";
      }
      if (!validator.isEmail(signupValues.email)) {
        validColor.email = "error";
        error.Email = true;
        errorText.email = "Please Enter Valid Email Id";
      }
      if (signupValues.password.length < 6) {
        validColor.password = "error";
        error.password = true;
        errorText.password = "Password must be at least 6 digits";
      }
      setValidation(validColor);
      setFormError(error);
      setErrorStatement(errorText);
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
              {formError.name === true ? (
                <FormHelperText sx={{ ml: 1 }}>jkkxd</FormHelperText>
              ) : (
                ""
              )}
              <TextField
                type="number"
                label="Phone Number"
                variant="filled"
                onChange={handleChangePh("number")}
                sx={{ m: 1, width: "32ch" }}
              />
              {formError.phoneNumber === true ? (
                <FormHelperText sx={{ ml: 1 }}>jkkxd</FormHelperText>
              ) : (
                ""
              )}
              <Email
                emailValidColor={validation.email}
                handleChangeEmail={handleChangeEmail("email")}
              />
              {formError.email === true ? (
                <FormHelperText sx={{ ml: 1 }}>jkkxd</FormHelperText>
              ) : (
                ""
              )}
              <Password
                passwordValidColor={validation.password}
                values={signupValues}
                handleChangePassword={handleChangePassword("password")}
                handleChangeShowPassword={handleChangeShowPassword}
                handleChangeMouseDownPassword={handleChangeMouseDownPassword}
              />
              {formError.password === true ? (
                <FormHelperText sx={{ ml: 1 }}>jkkxd</FormHelperText>
              ) : (
                ""
              )}
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
