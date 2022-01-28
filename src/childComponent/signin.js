import * as React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Notification from "../component/notification";
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

export default function SigninTransitionsModal({ completeSignin }) {
  const auth = getAuth();
  const [emailValidColor, setEmailValidColor] = React.useState("");
  const [passwordValidColor, setPasswordValidColor] = React.useState("");
  const [signinModalOpen, setSigninModalOpen] = React.useState(false);
  const [signinValues, setSigninValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    severity: "",
    message: "",
  });

  const handleEmail = (prop) => (event) => {
    if (event.target.value === "") {
      setEmailValidColor("error");
    } else {
      setEmailValidColor("success");
    }
    setSigninValues({ ...signinValues, [prop]: event.target.value });
  };

  const handlePassword = (prop) => (event) => {
    if (event.target.value === "") {
      setPasswordValidColor("error");
    } else {
      setPasswordValidColor("success");
    }
    setSigninValues({ ...signinValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setSigninValues({
      ...signinValues,
      showPassword: !signinValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const emailField = () => (
    <TextField
      label="Email Id"
      type="email"
      value={signinValues.email}
      onChange={handleEmail("email")}
      color={emailValidColor}
      sx={{ m: 1, width: "32ch" }}
      variant="filled"
    />
  );

  const passwordField = () => (
    <>
      <FormControl
        sx={{ m: 1, width: "32ch" }}
        variant="filled"
        color={passwordValidColor}
      >
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={signinValues.showPassword ? "text" : "password"}
          value={signinValues.password}
          onChange={handlePassword("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {signinValues.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );

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

      signInWithEmailAndPassword(
        auth,
        signinValues.email,
        signinValues.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("User", JSON.stringify(user));
          setSigninModalOpen(false);
          completeSignin(true);

          setSnackbar({
            ...snackbar,
            open: true,
            severity: "success",
            message: "Sign in completed successfully",
          });
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
              {emailField()}
              {passwordField()}
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
}
