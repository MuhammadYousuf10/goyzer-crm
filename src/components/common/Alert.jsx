"use client";

import * as React from "react";
import Alert from "@mui/material/Alert";

export default function BasicAlerts({ alertMessage, alertType }) {
  return (
    <Alert severity={alertType}>{alertMessage}</Alert>
  );
}
