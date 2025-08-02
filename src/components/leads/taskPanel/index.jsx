"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Stack,
  Chip,
  TextField,
  Box,
} from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";
import CustomButton from "@/components/common/CustomButton";
import SaveIcon from "@mui/icons-material/Save";

export default function TaskPanel({
  title = "",
  initialTasks = [],
  showInput = true,
  allowDelete = true,
  onTasksChange,
}) {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    if (onTasksChange) onTasksChange(tasks);
  }, [tasks, onTasksChange]);

  const handleDelete = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  };

  const handleAddTask = () => {
    const trimmed = newTask.trim();
    if (trimmed) {
      const updated = [...tasks, { id: Date.now(), label: trimmed }];
      setTasks(updated);
      setNewTask("");
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "primary.main", width: 32, height: 32 }}>
              <FormatListBulletedIcon size={"large"} />
            </Avatar>
          }
          title={title}
          action={
            <CustomButton
              startIcon={<SaveIcon />}
              size="medium"
              color="success"
            >
              Save
            </CustomButton>
          }
        />
        <CardContent>
          <Stack spacing={2}>
            {showInput && (
              <Box display="flex" gap={2} alignItems="center">
                <TextField
                  size="small"
                  fullWidth
                  variant="outlined"
                  label="Add Task"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <CustomButton
                  variant="contained"
                  color="primary"
                  onClick={handleAddTask}
                  startIcon={<AddIcon />}
                  size="large"
                >
                  Add
                </CustomButton>
              </Box>
            )}

            <Stack direction="row" flexWrap="wrap" gap={1}>
              {tasks?.map((task) => (
                <Chip
                  key={task.id}
                  label={task.label}
                  onDelete={
                    allowDelete ? () => handleDelete(task.id) : undefined
                  }
                  deleteIcon={allowDelete ? <CancelIcon /> : undefined}
                  variant="outlined"
                  color="primary"
                />
              ))}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}
