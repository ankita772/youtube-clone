import React from "react";
import { TextField } from "@mui/material";

const Email = ({ emailValidColor, handleChangeEmail }) => {
  return (
    <>
      <TextField
        label="Email Id"
        type="email"
        color={emailValidColor}
        onChange={handleChangeEmail}
        sx={{ m: 1, width: "32ch" }}
        variant="filled"
      />
    </>
  );
};

export default Email;
