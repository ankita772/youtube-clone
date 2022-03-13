import React from "react";
import { TextField } from "@mui/material";

const Email = ({ values, handleChangeEmail, error, helperText }) => {
  return (
    <>
      <TextField
        error={error}
        helperText={helperText}
        label="Email Id"
        value={values}
        type="email"
        onChange={handleChangeEmail}
        sx={{ m: 1, width: "32ch" }}
        variant="filled"
      />
    </>
  );
};

export default Email;
