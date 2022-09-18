import {
  TextField,
  Box,
  InputAdornment,
  FormControl,
  Input,
  IconButton,
} from "@mui/material";
import styled from "styled-components";

import { IUser } from "../../../interface";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const RegisterForm = () => {
  // return <BoxCustom>Createing..</BoxCustom>;
  return (
    <Box sx={style}>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <TextField
          id="id"
          variant="standard"
          type="text"
          placeholder="ID"
          // error={data.id === "" ? true : false} TODO: handling error state when click the create btn
        />
      </FormControl>
    </Box>
  );
};
