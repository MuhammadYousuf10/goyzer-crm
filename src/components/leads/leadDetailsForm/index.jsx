"use client";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import SelectInput from "@/components/common/SelectInput";
import TextInput from "@/components/common/TextInput";
import InfoIcon from "@mui/icons-material/Info";
import RangeInput from "@/components/common/RangeInput";

export default function LeadDetailsForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "primary.main", width: 32, height: 32 }}>
              <InfoIcon fontSize="small" />
            </Avatar>
          }
          title="Lead Details"
        />
        <CardContent>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                <SelectInput
                  label="Assigned To"
                  defaultValue="faizan"
                  options={[
                    { label: "Faizan Ur Rehman", value: "faizan" },
                    { label: "Abbas Ali", value: "abbas" },
                  ]}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                <SelectInput
                  label="Unit Type"
                  defaultValue="apartment"
                  options={[
                    { label: "Apartment", value: "apartment" },
                    { label: "Villa", value: "villa" },
                  ]}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                <TextInput label="Unit Ref. No" defaultValue="AP5299" />
              </Grid>

              <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                <TextInput
                  label="Referred By"
                  defaultValue="Faizan Ur Rehman"
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <RangeInput />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextInput
                  label="Location"
                  defaultValue="Sharjah District > Abu Shagara 1 & 2 > Demo 7 Testing"
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextInput
                  label="Other Location"
                  defaultValue="Garden Heights! (Property)"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                <SelectInput
                  label="Method of Contact"
                  defaultValue="abc"
                  options={[
                    { label: "ABC", value: "abc" },
                    { label: "XYZ", value: "xyz" },
                  ]}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 12, lg: 6 }}>
                <SelectInput
                  label="Lead Source"
                  defaultValue=""
                  options={[
                    { label: "Yes", value: "yes" },
                    { label: "No", value: "no" },
                  ]}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
