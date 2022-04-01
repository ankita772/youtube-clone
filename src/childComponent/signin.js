import React, { useState } from "react";
import validator from "validator";
import Email from "./email";
import Password from "./password";
import Notification from "../component/notification";
import { Box, Modal, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/Actions";

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
  const [signinModalOpen, setSigninModalOpen] = useState(false);
  const [signinValues, setSigninValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const authDetails = useSelector((state) => state.authDetails);
  //onchange for email
  const handleChangeEmail = (prop) => (event) => {
    setSigninValues({ ...signinValues, [prop]: event.target.value });
    setError({ ...error, email: "" });
  };
  //onchange for password
  const handleChangePassword = (prop) => (event) => {
    setSigninValues({ ...signinValues, [prop]: event.target.value });
    setError({ ...error, password: "" });
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

  const validation = () => {
    const errorFound = {
      email: "",
      pssword: "",
    };
    if (!validator.isEmail(signinValues.email)) {
      errorFound.email = "Please Enter a Valid Email";
    }
    if (signinValues.password.trim() === "") {
      errorFound.password = "Please Enter Password";
    } else if (signinValues.password.trim().length < 6) {
      errorFound.password = "Password length should be more than 6 ";
    }
    setError(errorFound);
  };

  //get user api
  const getUser = async () => {
    const body = {
      email: signinValues.email,
      password: signinValues.password,
    };
    dispatch(loginUser(body));

    setSigninModalOpen(false);
  };

  const handleSignin = () => {
    if (
      validator.isEmail(signinValues.email) &&
      signinValues.password.trim().length !== "" &&
      signinValues.password.trim().length >= 6
    ) {
      getUser();
      setSigninValues({
        ...signinValues,
        email: "",
        password: "",
      });
    } else {
      validation();
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
                error={error.email ? true : false}
                helperText={error.email}
                values={signinValues.email}
                handleChangeEmail={handleChangeEmail("email")}
              />
              <Password
                error={error.password ? true : false}
                helperText={error.password}
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
