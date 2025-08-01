// components/common/SelectInput.js
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SelectInput({
  label,
  value,
  defaultValue,
  onChange,
  options = [],
  ...props
}) {
  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth size="small">
        <InputLabel>{label}</InputLabel>
        <Select label={label} defaultValue={defaultValue} fullWidth {...props}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
