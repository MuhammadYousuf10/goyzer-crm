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
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <AppBar
        position="static"
        elevation={2}
        sx={{ mb: 4, bgcolor: "#fff", color: "text.primary" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 2, // space between stacked elements
            width: "100%",
            py: { xs: 2 },
          }}
        >
          {/* Left: App Title or CRM Module Name */}

          <Stack
            direction={"row"}
            spacing={2}
            alignItems={"center"}
            justifyContent={{
              xs: "space-between",
              sm: "space-between",
              md: "flex-start",
            }}
            sx={{
              width: "100%",
            }}
          >
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

          {/* Right: Actions */}
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              width: { xs: "100%", sm: "100%", md: "auto" },
              gap: { md: 1, lg: 3, xl: 5 },
            }}
            justifyContent={{
              xs: "space-between",
              sm: "space-between",
              md: "flex-start",
            }}
          >
            <Stack direction="row" alignItems="center" gap={1}>
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
            </Stack>

            <Stack direction="row" alignItems="center" gap={1}>
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
          </Stack>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}
