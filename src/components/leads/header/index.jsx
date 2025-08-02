"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Stack,
  Chip,
  Tooltip,
  Divider,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";

export default function LeadsHeader() {
  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{ mb: 4, bgcolor: "#fff", color: "text.primary" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: App Title or CRM Module Name */}
        <Box>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <Typography variant="h6" fontWeight={600} color="primary">
              Mohammad
            </Typography>
            <Stack direction={"row"} spacing={2}>
              <Tooltip title="Message">
                <IconButton size="small">
                  <MessageIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="WhatsApp">
                <IconButton size="small">
                  <WhatsAppIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Mail">
                <IconButton size="small">
                  <MailIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <IconButton
                size="medium"
                sx={{
                  bgcolor: "action.hover",
                  color: "primary.main",
                  "&:hover": {
                    bgcolor: "action.selected",
                  },
                }}
              >
                <ArrowBackIosIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="medium"
                sx={{
                  bgcolor: "action.hover",
                  color: "primary.main",
                  "&:hover": {
                    bgcolor: "action.selected",
                  },
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Box>

        {/* Right: Actions */}
        <Box display="flex" alignItems="center" gap={1}>
          <Chip variant="filled" color="primary" label="Cold" />
          <Chip variant="filled" color="info" label="Warm" />
          <Chip variant="filled" color="error" label="Hot" />
          <Chip
            variant="outlined"
            color="secondary"
            label={
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <span>Open</span>
                <KeyboardArrowDownIcon fontSize="small" />
              </Stack>
            }
          />
          <Chip
            variant="outlined"
            color="secondary"
            label={
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <span>Viewing</span>
                <KeyboardArrowDownIcon fontSize="small" />
              </Stack>
            }
          />

          <Stack direction="row" alignItems="center" spacing={1}>
            <Tooltip title="Edit">
              <IconButton color="success" size="medium">
                <EditIcon fontSize="large" />
              </IconButton>
            </Tooltip>

            {/* MUI Vertical Divider */}
            <Divider orientation="vertical" flexItem />

            <Tooltip title="Cancel">
              <IconButton color="error" size="medium">
                <CancelIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
