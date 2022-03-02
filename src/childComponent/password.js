import React from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  FilledInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Password = ({
  passwordValidColor,
  values,
  handleChangePassword,
  handleChangeShowPassword,
  handleChangeMouseDownPassword,
}) => {
  return (
    <>
      <FormControl
        sx={{ m: 1, width: "32ch" }}
        variant="filled"
        color={passwordValidColor}
      >
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChangePassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleChangeShowPassword}
                onMouseDown={handleChangeMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );
};

export default Password;
