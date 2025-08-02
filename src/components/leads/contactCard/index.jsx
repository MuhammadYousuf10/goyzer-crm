"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Chip,
  CardHeader,
  Avatar,
  Divider,
} from "@mui/material";
import { Phone, Email } from "@mui/icons-material";
import { motion } from "framer-motion";
import CallIcon from "@mui/icons-material/Call";

export default function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "primary.main", width: 32, height: 32 }}>
              <CallIcon fontSize="small" />
            </Avatar>
          }
          title="Contact"
        />
        <CardContent>
          <Stack direction="row" alignItems="center" mb={2} spacing={2}>
            <Typography variant="h6" color="primary">
              Mohamed Mamduh
            </Typography>
            <Chip label="Seller" color="success" size="small" />
          </Stack>

          <Stack direction="row" alignItems="center" spacing={5}>
            <Typography variant="body2" gutterBottom>
              Lead No: 14856
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Phone fontSize="small" />
              <Typography variant="body2">+971 55 55582750</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Email fontSize="small" />
              <Typography variant="body2">fahadnaqi1@outlook.com</Typography>
            </Box>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} mt={2}>
            <Typography variant="caption" color="primary">
              128 existing open leads
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="caption">Calls: 0</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="caption">Offers: 0</Typography>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}
