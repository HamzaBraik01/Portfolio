import {
  Code2,
  Database,
  Smartphone,
  Rocket,
  Layers,
  Server,
  BarChart3,
  LineChart,
  Settings,
  Cloud,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ColorKey } from "@/lib/constants/colors";

type ServiceFeature = {
  icon: LucideIcon;
  text: string;
};

export type Service = {
  title: string;
  icon: LucideIcon;
  gradient: string;
  glowColor: ColorKey;
  description: string;
  features: ServiceFeature[];
};

export const services: Service[] = [
  {
    title: "Backend Development",
    icon: Server,
    gradient: "from-purple-500 to-purple-600",
    glowColor: "purple",
    description:
      "Building robust backend systems with Java, Spring Boot, and microservices architecture for enterprise-grade applications.",
    features: [
      { icon: Code2, text: "Spring Boot REST APIs" },
      { icon: Database, text: "Database Design & Optimization" },
      { icon: Settings, text: "Microservices Architecture" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Layers,
    gradient: "from-pink-500 to-pink-600",
    glowColor: "pink",
    description:
      "Creating modern, responsive web interfaces with Angular and Vue.js that deliver exceptional user experiences.",
    features: [
      { icon: Smartphone, text: "Angular & Vue.js Apps" },
      { icon: Rocket, text: "Responsive UI/UX" },
      { icon: Rocket, text: "Performance Optimization" },
    ],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    gradient: "from-teal-500 to-teal-600",
    glowColor: "teal",
    description:
      "Transforming raw data into actionable insights with Power BI dashboards, ETL processes, and database management.",
    features: [
      { icon: LineChart, text: "Power BI Dashboards" },
      { icon: Database, text: "ETL & Data Processing" },
      { icon: Cloud, text: "Database Administration" },
    ],
  },
];
