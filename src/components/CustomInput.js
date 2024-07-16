// CustomTextField.js
import React from "react";
import { Input } from "@mui/material";

const CustomInput = ({ placeholder, age, onChange }) => (
  <Input
    className="w-full"
    placeholder={placeholder}
    type="number"
    inputProps={{ ...age, min: 1, max: 100 }}
    onChange={onChange}
  />
);
export default CustomInput;
