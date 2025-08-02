"use client";

import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

export default function CustomButton({
  children,
  onClick,
  startIcon,
  endIcon,
  variant = "contained", // "outlined" or "text"
  color = "primary",
  size = "medium", // "small", "medium", "large"
  fullWidth = false,
  loading = false,
  disabled = false,
  sx = {},
  ...rest
}) {
  return (
    <motion.div whileTap={{ scale: 0.97 }} style={{ display: "inline-block" }}>
      <Button
        variant={variant}
        color={color}
        size={size}
        onClick={onClick}
        startIcon={loading ? <CircularProgress size={20} /> : startIcon}
        endIcon={!loading ? endIcon : null}
        fullWidth={fullWidth}
        disabled={disabled || loading}
        sx={{
          textTransform: "capitalize",
          fontWeight: 500,
          ...sx,
        }}
        {...rest}
      >
        {children}
      </Button>
    </motion.div>
  );
}
