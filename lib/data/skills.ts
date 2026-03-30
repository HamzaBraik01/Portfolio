import { Code, Layers, Database, Settings, Lightbulb, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ColorKey } from "@/lib/constants/colors";

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
  level: number;
  color: ColorKey;
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: Code,
    skills: ["Java", "Spring Boot", "JEE", "Servlets", "JSP", "PHP (Laravel)", "Python (Flask)", "OOP", "MVC"],
    level: 90,
    color: "purple",
  },
  {
    title: "Frontend Development",
    icon: Layers,
    skills: ["Angular", "Vue.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "DOM & AJAX"],
    level: 85,
    color: "pink",
  },
  {
    title: "Database & BI",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Power BI", "DAX", "Power Query", "ETL", "Stored Procedures"],
    level: 88,
    color: "teal",
  },
  {
    title: "Analysis & Design",
    icon: BarChart3,
    skills: ["UML", "Class Diagrams", "Use Case Diagrams", "Figma", "Wireframing", "Prototyping", "UI/UX Design"],
    level: 82,
    color: "cyan",
  },
  {
    title: "DevOps & Tools",
    icon: Settings,
    skills: ["Git/GitHub", "Docker", "Jira", "Trello", "Agile (Scrum)", "Kanban", "Maven", "SonarQube"],
    level: 85,
    color: "violet",
  },
  {
    title: "Soft Skills",
    icon: Lightbulb,
    skills: ["Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Continuous Learning"],
    level: 92,
    color: "amber",
  },
];
