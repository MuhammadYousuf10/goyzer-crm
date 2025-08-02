"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Box,
  IconButton,
  Tooltip,
  Chip,
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
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { motion } from "framer-motion";
import SelectInput from "@/components/common/SelectInput";

const ExpandMoreIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "expand",
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ActivityTimeline({
  activityList,
  filterFields,
  title,
  collapsable = false,
}) {
  const [activities, setActivities] = useState(activityList);
  const [openCollapse, setOpenCollapse] = useState(collapsable);

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
          title={
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Box>{title}</Box>
              <Chip
                label={activityList?.length}
                size="medium"
                variant="outlined"
                color="warning"
              />
            </Stack>
          }
          action={
            <ExpandMoreIconButton
              expand={openCollapse}
              onClick={() => setOpenCollapse(!openCollapse)}
              aria-expanded={openCollapse}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMoreIconButton>
          }
        />
        <Collapse in={openCollapse} timeout="auto" unmountOnExit>
          <CardContent>
            <Box mb={2}>
              <Stack
                spacing={2}
                direction="row"
                overflow={"auto"}
                sx={{ pb: 1 }}
              >
                {filterFields?.map((field) => (
                  <SelectInput
                    key={field.name}
                    label={field.label}
                    defaultValue=""
                    options={field.options}
                    minWidth={120}
                  />
                ))}
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
                    {index !== 0 && (
                      <TimelineConnector
                        sx={{ height: 20, width: 3, bgcolor: "grey.400" }}
                      />
                    )}
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
                    {index !== activities.length - 1 && (
                      <TimelineConnector
                        sx={{ height: 20, width: 3, bgcolor: "grey.400" }}
                      />
                    )}
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
        </Collapse>
      </Card>
    </motion.div>
  );
}
