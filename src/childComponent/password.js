import React from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  FilledInput,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Password = ({
  error,
  helperText,
  values,
  handleChangePassword,
  handleChangeShowPassword,
  handleChangeMouseDownPassword,
}) => {
  return (
    <>
      <FormControl sx={{ m: 1, width: "32ch" }} variant="filled">
        <InputLabel
          htmlFor="filled-adornment-password"
          sx={error ? { color: "red" } : {}}
        >
          Password
        </InputLabel>
        <FilledInput
          error={error}
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
        <FormHelperText sx={{ color: "red" }}>{helperText}</FormHelperText>
      </FormControl>
    </>
  );
};

export default Password;
