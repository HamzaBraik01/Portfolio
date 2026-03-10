import { Code2, Database, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ColorKey } from "@/lib/constants/colors";

// ─── About section skills ─────────────────────────────────────────────────────

export type AboutSkill = {
  icon: LucideIcon;
  label: string;
  color: ColorKey;
};

export const aboutSkills: AboutSkill[] = [
  { icon: Code2, label: "Development", color: "purple" },
  { icon: Database, label: "Data & BI", color: "pink" },
  { icon: TrendingUp, label: "DevOps", color: "teal" },
];
