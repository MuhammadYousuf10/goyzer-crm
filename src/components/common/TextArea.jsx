"use client";
import { Box, TextField } from "@mui/material";

export default function Textarea({ label, ...rest }) {
  return (
    <Box sx={{ minWidth: 250 }}>
      <TextField
        fullWidth
        multiline
        rows={4}
        label={label}
        variant="outlined"
        size="small"
        {...rest}
      />
    </Box>
  );
}
