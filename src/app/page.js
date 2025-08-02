"use client";

import { Box, Grid, Container } from "@mui/material";
import ContactCard from "@/components/leads/contactCard";
import LeadDetailsForm from "@/components/leads/leadDetailsForm";
import TaskPanel from "@/components/leads/taskPanel";
import ActivityTimeline from "@/components/leads/activityTimeLine";
import { motion } from "framer-motion";
import {
  activityListOfferHistory,
  filterFieldsActivityHistory,
  filterFieldsOfferHistory,
  taskPanel,
  taskPanelOffers,
} from "@/dummyData";
import { activityListHistory } from "@/dummyData";
import LeadsHeader from "@/components/leads/header";

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <LeadsHeader />
        <Grid container spacing={4}>
          {/* LEFT SIDE */}
          <Grid size={{ xs: 6 }}>
            <Box display="flex" flexDirection="column" gap={2}>
              <ContactCard />
              <LeadDetailsForm />
            </Box>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid size={{ xs: 6 }}>
            <Box display="flex" flexDirection="column" gap={2}>
              <TaskPanel initialTasks={taskPanel} title={"Tasks"} />
              <ActivityTimeline
                activityList={activityListHistory}
                filterFields={filterFieldsActivityHistory}
                title={"Activity History"}
                collapsable={true}
              />
              <TaskPanel
                initialTasks={taskPanelOffers}
                title={"Offers"}
                showInput={false}
                allowDelete={false}
              />
              <ActivityTimeline
                activityList={activityListOfferHistory}
                filterFields={filterFieldsOfferHistory}
                title={"Offer History"}
                collapsable={false}
              />
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
}
