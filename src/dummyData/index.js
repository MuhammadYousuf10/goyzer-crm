import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import NoteIcon from "@mui/icons-material/Note";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const activityList = [
  {
    id: 1,
    icon: <PhoneIcon fontSize="small" />,
    title: "Call with client",
    description: "Discussed project scope and next steps.",
    timestamp: "Aug 1, 2025 - 10:00 AM",
    color: "primary",
    completed: true,
  },
  {
    id: 2,
    icon: <EmailIcon fontSize="small" />,
    title: "Follow-up Email",
    description: "Sent summary and proposal after call.",
    timestamp: "Aug 1, 2025 - 11:30 AM",
    color: "secondary",
    completed: false,
  },
  {
    id: 3,
    icon: <NoteIcon fontSize="small" />,
    title: "Updated Notes",
    description: "Added client requirements to CRM.",
    timestamp: "Aug 1, 2025 - 12:45 PM",
    color: "success",
    completed: false,
  },
  {
    id: 4,
    icon: <AccessTimeIcon fontSize="small" />,
    title: "Scheduled Demo",
    description: "Demo set with technical team.",
    timestamp: "Aug 2, 2025 - 2:00 PM",
    color: "info",
    completed: false,
  },
];
export const taskPanel = [
  { id: 1, label: "Follow-up call" },
  { id: 2, label: "Send proposal" },
];
export const taskPanelOffers = [{ id: 1, label: "Offers" }];
