import React from "react";
import CustomSelect from "./CustomSelect";
import CustomInput from "./CustomInput";
import { TextField } from "@mui/material";

function FormInput({
  label,
  inputType,
  options,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex mt-6">
      <label className="font-semibold mr-4 w-20">{label}</label>
      {inputType === "select" && (
        <CustomSelect options={options} value={value} onChange={onChange} />
      )}
      {inputType === "text" && (
        <CustomInput
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {inputType === "multiline" && (
        <TextField
          className="w-full"
          placeholder="건강 상태를 입력해주세요."
          multiline
          maxRows={4}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default FormInput;
