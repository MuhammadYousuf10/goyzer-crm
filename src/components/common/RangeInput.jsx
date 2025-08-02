"use client";

import React from "react";
import { Grid, Box } from "@mui/material";
import NumberInput from "./NumberInput";

export default function RangeInput() {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid size={{ xs: 6 }}>
          <NumberInput label="Min Bathroom" placeholder="Min" />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <NumberInput label="Max Bathroom" placeholder="Max" />
        </Grid>
      </Grid>
    </Box>
  );
}
