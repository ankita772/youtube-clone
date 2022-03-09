import React from "react";
import { TextField } from "@mui/material";

const Email = ({ handleChangeEmail }) => {
  return (
    <>
      <TextField
        label="Email Id"
        type="email"
        onChange={handleChangeEmail}
        sx={{ m: 1, width: "32ch" }}
        variant="filled"
      />
    </>
  );
};

export default Email;
