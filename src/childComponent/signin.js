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

export default function SigninTransitionsModal() {
  const [signinModalOpen, setSigninModalOpen] = React.useState(false);
  const [signinValues, setSigninValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handlePassword = (prop) => (event) => {
    setSigninValues({ ...signinValues, [prop]: event.target.value });
  };
  const handleEmail = (prop) => (event) => {
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

  const passwordField = () => (
    <FormControl sx={{ m: 1, width: "32ch" }} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
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
        label="Password"
      />
    </FormControl>
  );

  const emailField = () => (
    <TextField
      label="Email Id"
      type="email"
      value={signinValues.email}
      onChange={handleEmail("email")}
      sx={{ m: 1, width: "32ch" }}
    />
  );
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
