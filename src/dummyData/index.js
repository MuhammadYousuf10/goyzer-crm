import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import NoteIcon from "@mui/icons-material/Note";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const activityListHistory = [
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
export const activityListOfferHistory = [
  {
    id: 1,
    icon: <PhoneIcon fontSize="small" />,
    title: "Client Discussion",
    description: "Had a call to explain the offer details and pricing.",
    timestamp: "Aug 1, 2025 - 10:00 AM",
    color: "primary",
    completed: true,
  },
  {
    id: 2,
    icon: <EmailIcon fontSize="small" />,
    title: "Offer Sent",
    description: "Shared the official offer via email with attachments.",
    timestamp: "Aug 1, 2025 - 11:15 AM",
    color: "secondary",
    completed: true,
  },
];
export const taskPanel = [
  { id: 1, label: "Follow-up call" },
  { id: 2, label: "Send proposal" },
];
export const taskPanelOffers = [{ id: 1, label: "Offers" }];
export const filterFieldsActivityHistory = [
  {
    label: "Everyone",
    name: "everyone",
    options: [
      { label: "ABC", value: "abc" },
      { label: "XYZ", value: "xyz" },
    ],
  },
  {
    label: "Types",
    name: "types",
    options: [
      { label: "Meeting", value: "meeting" },
      { label: "Call", value: "call" },
    ],
  },
  {
    label: "Status",
    name: "status",
    options: [
      { label: "Completed", value: "completed" },
      { label: "Pending", value: "pending" },
    ],
  },
  {
    label: "Leads",
    name: "leads",
    options: [
      { label: "Lead A", value: "lead-a" },
      { label: "Lead B", value: "lead-b" },
    ],
  },
  {
    label: "Sort By",
    name: "sortBy",
    options: [
      { label: "Newest", value: "newest" },
      { label: "Oldest", value: "oldest" },
    ],
  },
];
export const filterFieldsOfferHistory = [
  {
    label: "Everyone",
    name: "everyone",
    options: [
      { label: "ABC", value: "abc" },
      { label: "XYZ", value: "xyz" },
    ],
  },
  {
    label: "Status",
    name: "status",
    options: [
      { label: "Completed", value: "completed" },
      { label: "Pending", value: "pending" },
    ],
  },
  {
    label: "Leads",
    name: "leads",
    options: [
      { label: "Lead A", value: "lead-a" },
      { label: "Lead B", value: "lead-b" },
    ],
  },
  {
    label: "Sort By",
    name: "sortBy",
    options: [
      { label: "Newest", value: "newest" },
      { label: "Oldest", value: "oldest" },
    ],
  },
];
