import Painting from "../assets/png/painting.png";
import Paint from "../assets/png/paint.png";
import PaintWall from "../assets/png/paintWall.png";
import PaintRoom from "../assets/png/paintRoom.png";
import DryWall from "../assets/png/wall.png";
export const pages = ["Services", "Commercial", "Login", "Book Service"];
export const steps = ["Select Tack", "Schedule", "Cart", "Confirm"];
export const CATEGORIES = [
  "Drywall & Paint",
  "Doors, Knobs, Handles",
  "Clogs, Leaks & Fixtures",
  "Caulking",
  "TV & Furniture Mounting",
  "Furniture Assembly",
  "Cent Cleaning",
  "Other Categories",
];

export const SERVICES = [
  {
    id: 1,
    name: "Painting",
    image: Painting,
    description:
      "Select your desired category and service to find the right task you need done!",
  },
  {
    id: 2,
    name: "Dry wall repair",
    image: DryWall,
    description:
      "Select your desired category and service to find the right task you need done! ",
  },
];

export const TASK = [
  {
    id: 1,
    name: "Paint Patched Area",
    image: Paint,
    description:
      "Select your desired category and service to find the right task you need done! ",
  },
  {
    id: 2,
    name: "Paint Room",
    image: PaintRoom,
    description:
      "Select your desired category and service to find the right task you need done! ",
  },
  {
    id: 3,
    name: "Paint Wall Section",
    image: PaintWall,
    description:
      "Select your desired category and service to find the right task you need done! ",
  },
];

export const TASK_SELECTION = [
  {
    id: 1,
    heading: "Job category",
    category: CATEGORIES,
    type: "category",
  },
  {
    id: 2,
    heading: "Service",
    service: SERVICES,
    type: "service",
  },
  {
    id: 3,
    heading: "Task",
    task: TASK,
    type: "task",
  },
  {
    id: 4,
    heading: "Task Details",
    type: "taskDetails",
  },
];

export const FOOTER_LINKS = ["Link", "Link", "Link", "Link", "Link"];

export const TIME_SLOTS = [
  {
    title: "Morning",
    timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"],
  },
  {
    title: "Afternoon",
    timeSlots: [
      "12:00 PM",
      "12:30 PM",
      "1:00 PM",
      "01:30 PM",
      "2:00 PM",
      "2:30 PM",
      "3:00 PM",
      "3:30 PM",
      "4:00 PM",
      "4:30 PM",
      "5:00 PM",
      "5:30 PM",
    ],
  },
  {
    title: "Evening",
    timeSlots: [
      "4:00 PM",
      "4:30 PM",
      "5:00 PM",
      "5:30 PM",
      "6:00 PM",
      "6:30 PM",
      "7:00 PM",
      "7:30 PM",
    ],
  },
];
