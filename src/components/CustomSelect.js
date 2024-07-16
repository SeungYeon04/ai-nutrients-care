import { MenuItem, Select } from "@mui/material";

function CustomSelect({ options, value, onChange }) {
  return (
    <Select className="w-full" value={value} label="Gender" onChange={onChange}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.value}
        </MenuItem>
      ))}
    </Select>
  );
}
export default CustomSelect;
