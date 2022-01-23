import * as React from "react";
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
  OutlinedInput,
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
  const [signupModalOpen, setSignupModalOpen] = React.useState(false);
  const [signupValues, setSignupValues] = React.useState({
    name: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChangePassword = (prop) => (event) => {
    setSignupValues({ ...signupValues, [prop]: event.target.value });
  };
  const handleChangeEmail = (prop) => (event) => {
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

  // createUserWithEmailAndPassword(auth, signupValues.email, signupValues.password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });

  const nameForRegister = () => (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "32ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Name" variant="outlined" />
      </Box>
    </>
  );

  const emailForRegister = () => (
    <TextField
      label="Email Id"
      type="email"
      value={signupValues.email}
      onChange={handleChangeEmail("email")}
      sx={{ m: 1, width: "32ch" }}
    />
  );

  const passwordForRegister = () => (
    <FormControl sx={{ m: 1, width: "32ch" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
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
        label="Password"
      />
    </FormControl>
  );

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
      <Modal open={signupModalOpen} onClose={() => setSignupModalOpen(false)}>
        <Box sx={style}>
          <Typography variant="h5" component="h2" sx={{ textAlign: "center" }}>
            Sign Up
          </Typography>
          <Box sx={{ ml: 2, mt: 1 }}>
            {nameForRegister()}
            {emailForRegister()}
            {passwordForRegister()}
          </Box>
          <Box sx={{ textAlign: "center", mt: 1 }}>
            <Button
              variant="contained"
              color="success"
              sx={{ textAlign: "center" }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
