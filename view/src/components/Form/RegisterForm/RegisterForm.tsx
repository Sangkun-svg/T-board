import {
  TextField,
  Box,
  InputAdornment,
  FormControl,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { IUser } from "../../../interface";
import { registerFromStyle } from "../../../style";

export const RegisterForm = () => {
  const [id, setId] = useState<string>("");

  const handleId = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setId(value);
  };

  return (
    <Box sx={registerFromStyle}>
      <FormControl sx={{ m: 5, width: "80%" }} variant="standard">
        <TextField
          id="id"
          type="text"
          placeholder="ID"
          variant="standard"
          value={id}
          onChange={handleId}
        />
      </FormControl>
    </Box>
  );
};
