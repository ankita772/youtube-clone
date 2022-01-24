import * as React from "react";
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
  Snackbar,
  Alert,
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

export default function SigninTransitionsModal() {
  let validColorField1 = "";
  let validColorField2 = "";
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
    vertical: "top",
    horizontal: "right",
  });
  const { vertical, horizontal, open, severity, message } = snackbar;

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleEmail = (prop) => (event) => {
    if (event.target.value === "") {
      validColorField1 = "error";
      setEmailValidColor(validColorField1);
    } else {
      validColorField1 = "success";
      setEmailValidColor(validColorField1);
    }
    setSigninValues({ ...signinValues, [prop]: event.target.value });
  };

  const handlePassword = (prop) => (event) => {
    if (event.target.value === "") {
      validColorField2 = "error";
      setPasswordValidColor(validColorField2);
    } else {
      validColorField2 = "success";
      setPasswordValidColor(validColorField2);
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
      validColorField1 = "error";
      validColorField2 = "error";
      setEmailValidColor(validColorField1);
      setPasswordValidColor(validColorField2);
    } else if (signinValues.email === "") {
      validColorField1 = "error";
      setEmailValidColor(validColorField1);
    } else if (signinValues.password === "") {
      validColorField2 = "error";
      setPasswordValidColor(validColorField2);
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
      <Button
        variant="outlined"
        color="error"
        onClick={() => {
          setSigninModalOpen(true);
        }}
      >
        Sign IN
      </Button>
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
      <Modal open={signinModalOpen} onClose={() => setSigninModalOpen(false)}>
        <Box sx={style}>
          <Typography variant="h5" component="h2" sx={{ textAlign: "center" }}>
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
    </>
  );
}
