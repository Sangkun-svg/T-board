import {
  TextField,
  Box,
  InputAdornment,
  FormControl,
  Input,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import _ from "lodash";

export const RegisterForm = () => {
  const [data, setData] = useState({
    id: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setData({ ...data, [prop]: event.target.value });
  };

  const handlePhoneNumberFormat = (prop) => (event) => {
    const regex = /^[0-9]{0,11}$/;
    let inputValue = event.target.value;
    if (regex.test(inputValue)) {
      setData({
        ...data,
        [prop]: inputValue,
      });
    }
  };

  const handleClickShowPassword = () => {
    setData({
      ...data,
      showPassword: !data.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickCreateUser = () => {
    console.log("create");
  };

  return (
    <Box sx={style}>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <TextField
          id="id"
          variant="standard"
          type="text"
          value={data.id}
          placeholder="ID"
          onChange={handleChange("id")}
          // error={data.id === "" ? true : false} TODO: handling error state when click the create btn
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <Input
          id="password"
          type={data.showPassword ? "text" : "password"}
          value={data.password}
          placeholder="Password"
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {data.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <Input
          id="email"
          type="email"
          value={data.email}
          placeholder="Sangkun@gmail.com"
          onChange={handleChange("email")}
          // error={data.email === "" ? true : false} TODO: handling error state when click the create btn
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <Input
          id="address"
          type="address"
          value={data.address}
          placeholder="Seoul , Republic of Korea"
          onChange={handleChange("address")}
          // error={data.address === "" ? true : false} TODO: handling error state when click the create btn
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
        <TextField
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          id="phone"
          type="text"
          value={data.phone}
          placeholder="010-0000-0000"
          onChange={handlePhoneNumberFormat("phone")}
        />
      </FormControl>
    </Box>
  );
};
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
