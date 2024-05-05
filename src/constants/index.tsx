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
  // {
  //   heading: "Task Details",
  //   task: SERVICES,
  //   type: "taskDetails",
  // },
];
