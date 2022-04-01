import React, { useState } from "react";
import validator from "validator";
import Email from "./email";
import Password from "./password";

import { Box, Modal, Button, Typography, TextField } from "@mui/material";
import { notificationService } from "../Redux/Actions";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [signupValues, setSignupValues] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  //onchange name
  const handleChangeName = (prop) => (event) => {
    setSignupValues({ ...signupValues, [prop]: event.target.value });
    setError({ ...error, name: "" });
  };
  //onChane ph
  const handleChangePh = (prop) => (event) => {
    setSignupValues({ ...signupValues, [prop]: event.target.value });
    setError({ ...error, phone: "" });
  };

  //onchange for email
  const handleChangeEmail = (prop) => (event) => {
    setSignupValues({ ...signupValues, [prop]: event.target.value });
    setError({ ...error, email: "" });
  };

  //onchange for password

  const handleChangePassword = (prop) => (e) => {
    setSignupValues({ ...signupValues, [prop]: e.target.value });
    setError({ ...error, password: "" });
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

  const validation = () => {
    // false -> "",undefined,null,0
    // true -> "juabsd",
    const errorFound = {
      name: "",
      email: "",
      password: "",
      phone: "",
    };

    if (signupValues.name.trim() === "") {
      errorFound.name = "Please enter a name";
    }
    if (!validator.isEmail(signupValues.email)) {
      errorFound.email = "Please enter a valid email";
    }
    if (signupValues.password.trim() === "") {
      errorFound.password = "Please enter a password";
    } else if (signupValues.password.trim().length < 6) {
      errorFound.password = "Password length should be more than 6 ";
    }
    if (signupValues.phone.trim() === "") {
      errorFound.phone = "Please enter a phone number";
    } else if (signupValues.phone.trim().length < 10) {
      errorFound.phone = "Phone number should of 10 digits";
    }

    setError(errorFound);
  };

  //add user api

  const addUser = async () => {
    try {
      let fetchData = {
        method: "POST",
        body: JSON.stringify({
          name: signupValues.name,
          phone: signupValues.phone,
          email: signupValues.email,
          password: signupValues.password,
        }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      };
      const res = await fetch("http://localhost:5000/add-user", fetchData);
      const data = await res.json();
      console.log(data);

      dispatch(
        notificationService({
          message: "User Sign Up Compleated Successfully",
          severity: "success",
        })
      );
      setSignupModalOpen(false);
    } catch (error) {
      dispatch(
        notificationService({ message: error.message, severity: "error" })
      );
    }
  };

  const handleSignup = () => {
    if (
      signupValues.name.trim() !== "" &&
      signupValues.phone.trim() !== "" &&
      signupValues.phone.trim().length >= 10 &&
      validator.isEmail(signupValues.email) &&
      signupValues.password.trim() !== "" &&
      signupValues.password.trim().length >= 6
    ) {
      addUser();
      setSignupValues({
        ...signupValues,
        name: "",
        phone: "",
        email: "",
        password: "",
      });
    } else {
      validation();
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
                error={error.name ? true : false}
                helperText={error.name}
                label="Name"
                value={signupValues.name}
                variant="filled"
                onChange={handleChangeName("name")}
                sx={{ m: 1, width: "32ch" }}
              />

              <TextField
                error={error.phone ? true : false}
                helperText={error.phone}
                label="Phone Number"
                value={signupValues.phone}
                variant="filled"
                onChange={handleChangePh("phone")}
                sx={{ m: 1, width: "32ch" }}
              />

              <Email
                error={error.email ? true : false}
                helperText={error.email}
                values={signupValues.email}
                handleChangeEmail={handleChangeEmail("email")}
              />

              <Password
                error={error.password ? true : false}
                helperText={error.password}
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
      </Box>
    </>
  );
}
