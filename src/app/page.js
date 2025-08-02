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
import BasicAlerts from "@/components/common/Alert";

export default function Home() {
  return (
    <Container maxWidth="xxl" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <LeadsHeader />
        <Grid container spacing={4}>
          {/* LEFT SIDE */}
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Box display="flex" flexDirection="column" gap={2}>
              <ContactCard />
              <LeadDetailsForm />
            </Box>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
            <Box display="flex" flexDirection="column" gap={2}>
              <TaskPanel
                initialTasks={taskPanel}
                title={"Tasks"}
                customCardMinHeight={218}
              />
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
              <BasicAlerts
                alertMessage={
                  "Notes/Extra Requirements: www.goyzer.com How are you doing"
                }
                alertType={"info"}
              />
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
}
