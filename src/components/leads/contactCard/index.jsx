"use client";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Stack,
  Chip,
  CardHeader,
  Avatar,
} from "@mui/material";
import { Phone, Email, Call } from "@mui/icons-material";
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
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6" color="primary">
              Mohamed
            </Typography>
            <Chip label="Seller" color="primary" size="small" />
          </Stack>

          <Typography variant="body2" color="text.secondary" gutterBottom>
            Lead No: 14856
          </Typography>

          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Phone fontSize="small" />
            <Typography variant="body2">+971 55 55582750</Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Email fontSize="small" />
            <Typography variant="body2">fahadnaqi1@outlook.com</Typography>
          </Box>

          <Typography variant="caption" display="block" mt={2}>
            128 existing open leads | Calls: 0 | Offers: 0
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
