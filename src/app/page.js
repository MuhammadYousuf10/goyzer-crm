"use client";

import { Box, Grid, Container } from "@mui/material";
import ContactCard from "@/components/leads/contactCard";
import LeadDetailsForm from "@/components/leads/LeadDetailsForm";
// import TaskPanel from "@/components/leads/TaskPanel";
// import ActivityTimeline from "@/components/leads/ActivityTimeline";
// import NotesSection from "@/components/leads/NotesSection";
// import OfferHistory from "@/components/leads/OfferHistory";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Grid container spacing={3}>
          {/* LEFT SIDE */}
          <Grid item xs={12} md={6} size={6}>
            <Box display="flex" flexDirection="column" gap={2}>
              <ContactCard />
              <LeadDetailsForm />
            </Box>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} md={6} size={6}>
            <Box display="flex" flexDirection="column" gap={2}>
              ss
              {/* <TaskPanel />
              <ActivityTimeline />
              <NotesSection />
              <OfferHistory /> */}
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
}
