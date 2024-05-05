export interface Service {
  id: number;
  name: string;
  image: string;
  description: string;
  // handleCardClick?: (id: number) => void;
  // onClickCard?: (id) => void;
}

interface Task {
  id: number;
  name: string;
  image: string;
  description: string;
}

type FAQType = "category" | "service" | "task" | "taskDetails";

export interface FAQ {
  heading: string;
  category?: string[];
  service?: Service[];
  task?: Task[];
  type: FAQType;
}

export const FOOTER_LINKS = ["Link", "Link", "Link", "Link", "Link"];
