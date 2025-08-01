"use client";
import { Box, TextField } from "@mui/material";

export default function TextInput({ label, ...rest }) {
  return (
    <Box sx={{ minWidth: 250 }}>
      <TextField
        fullWidth
        size="small"
        label={label}
        variant="outlined"
        {...rest}
      />
    </Box>
  );
}
