"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  useTheme,
  Stack,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { motion } from "framer-motion";
import SelectInput from "@/components/common/SelectInput";
import { activityList } from "@/dummyData";

export default function ActivityTimeline() {
  const theme = useTheme();
  const [activities, setActivities] = useState(activityList);
  console.log("activityList", activityList);
  const toggleComplete = (id) => {
    setActivities((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <AccessTimeIcon fontSize="small" />
            </Avatar>
          }
          title="Activity Timeline"
        />
        <CardContent>
          <Box mb={2}>
            <Stack spacing={2} direction="row">
              <SelectInput
                label="Everyone"
                defaultValue=""
                options={[
                  { label: "ABC", value: "abc" },
                  { label: "XYZ", value: "xyz" },
                ]}
                minWidth={120}
              />
              <SelectInput
                label="Types"
                defaultValue=""
                options={[
                  { label: "ABC", value: "abc" },
                  { label: "XYZ", value: "xyz" },
                ]}
                minWidth={120}
              />
              <SelectInput
                label="Status"
                defaultValue=""
                options={[
                  { label: "ABC", value: "abc" },
                  { label: "XYZ", value: "xyz" },
                ]}
                minWidth={120}
              />
              <SelectInput
                label="Leads"
                defaultValue=""
                options={[
                  { label: "ABC", value: "abc" },
                  { label: "XYZ", value: "xyz" },
                ]}
                minWidth={120}
              />
              <SelectInput
                label="Sort By"
                defaultValue=""
                options={[
                  { label: "ABC", value: "abc" },
                  { label: "XYZ", value: "xyz" },
                ]}
                minWidth={120}
              />
            </Stack>
          </Box>
          <Timeline position="alternate">
            {activities?.map((activity, index) => (
              <TimelineItem key={activity.id}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align={index % 2 === 0 ? "right" : "left"}
                  variant="body2"
                  color="text.secondary"
                >
                  {activity.timestamp}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector
                    sx={{ height: 20, width: 3, bgcolor: "grey.400" }}
                  />
                  <TimelineDot
                    color={activity.completed ? "success" : activity.color}
                    variant={activity.completed ? "filled" : "outlined"}
                    sx={{ width: 32, height: 32 }}
                  >
                    {activity.completed ? (
                      <CheckCircleIcon fontSize="small" />
                    ) : (
                      activity.icon
                    )}
                  </TimelineDot>
                  <TimelineConnector
                    sx={{ height: 20, width: 3, bgcolor: "grey.400" }}
                  />
                </TimelineSeparator>
                <TimelineContent
                  sx={{
                    py: 2,
                    px: 2,
                    textAlign: index % 2 === 0 ? "left" : "right",
                  }}
                >
                  <Box>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      justifyContent={index % 2 === 0 ? "left" : "right"}
                    >
                      <Typography variant="subtitle1" fontWeight={600}>
                        {activity.title}
                      </Typography>
                      <Tooltip
                        title={
                          activity.completed ? "Un Mark" : "Mark as Completed"
                        }
                        placement="top"
                      >
                        <IconButton
                          onClick={() => toggleComplete(activity.id)}
                          size="small"
                          sx={{ p: 0.5 }}
                        >
                          {activity.completed ? (
                            <CheckCircleIcon
                              color="success"
                              fontSize="medium"
                            />
                          ) : (
                            <RadioButtonUncheckedIcon fontSize="medium" />
                          )}
                        </IconButton>
                      </Tooltip>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {activity.description}
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </CardContent>
      </Card>
    </motion.div>
  );
}
