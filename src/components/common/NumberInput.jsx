"use client";

import { TextField } from "@mui/material";

export default function NumberInput({ label, placeholder }) {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      type="number"
      fullWidth
      variant="outlined"
      size="small"
    />
  );
}
