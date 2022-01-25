import * as React from "react";
import Notification from "../component/notification";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  Box,
  Modal,
  TextField,
  FormControl,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  InputLabel,
  FilledInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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
  const auth = getAuth();
  let validColorField1 = "";
  let validColorField2 = "";
  const [emailValidColor, setEmailValidColor] = React.useState("");
  const [passwordValidColor, setPasswordValidColor] = React.useState("");
  const [signupModalOpen, setSignupModalOpen] = React.useState(false);
  const [signupValues, setSignupValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    severity: "",
    message: "",
  });

  const handleChangePassword = (prop) => (event) => {
    if (event.target.value === "") {
      validColorField2 = "error";
      setPasswordValidColor(validColorField2);
    } else {
      validColorField2 = "success";
      setPasswordValidColor(validColorField2);
    }
    setSignupValues({ ...signupValues, [prop]: event.target.value });
  };

  const handleChangeEmail = (prop) => (event) => {
    if (event.target.value === "") {
      validColorField1 = "error";
      setEmailValidColor(validColorField1);
    } else {
      validColorField1 = "success";
      setEmailValidColor(validColorField1);
    }
    setSignupValues({ ...signupValues, [prop]: event.target.value });
  };

  const handleChangeShowPassword = () => {
    setSignupValues({
      ...signupValues,
      showPassword: !signupValues.showPassword,
    });
  };

  const handleChangeMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const emailForRegister = () => (
    <TextField
      label="Email Id"
      type="email"
      color={emailValidColor}
      value={signupValues.email}
      onChange={handleChangeEmail("email")}
      sx={{ m: 1, width: "32ch" }}
      variant="filled"
    />
  );

  const passwordForRegister = () => (
    <>
      <FormControl
        sx={{ m: 1, width: "32ch" }}
        variant="filled"
        color={passwordValidColor}
      >
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={signupValues.showPassword ? "text" : "password"}
          value={signupValues.password}
          onChange={handleChangePassword("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleChangeShowPassword}
                onMouseDown={handleChangeMouseDownPassword}
                edge="end"
              >
                {signupValues.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );

  const handleSignup = () => {
    if (signupValues.email === "" && signupValues.password === "") {
      validColorField1 = "error";
      validColorField2 = "error";
      setEmailValidColor(validColorField1);
      setPasswordValidColor(validColorField2);
      console.log("hjk");
    } else if (signupValues.email === "") {
      validColorField1 = "error";

      setEmailValidColor(validColorField1);
    } else if (signupValues.password === "") {
      validColorField2 = "error";

      setPasswordValidColor(validColorField2);
    } else {
      setSignupValues({
        ...signupValues,
        email: "",
        password: "",
        showPassword: false,
      });
      setEmailValidColor("");
      setPasswordValidColor("");

      createUserWithEmailAndPassword(
        auth,
        signupValues.email,
        signupValues.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          setSnackbar({
            ...snackbar,
            open: true,
            severity: "success",
            message: "Sign up successfully Completed",
          });
          setSignupModalOpen(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSnackbar({
            ...snackbar,
            open: true,
            severity: "error",
            message: errorMessage,
          });
        });
    }
  };

  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}>
      <Button
        variant="outlined"
        color="error"
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
          <Typography variant="h5" component="h2" sx={{ textAlign: "center" }}>
            Sign Up
          </Typography>
          <Box sx={{ ml: 2, mt: 1 }}>
            {emailForRegister()}
            {passwordForRegister()}
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
  );
}
