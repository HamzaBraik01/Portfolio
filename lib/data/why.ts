import { Award, CheckCircle2, Shield, Zap, Users, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ColorKey } from "@/lib/constants/colors";

export type WhyPoint = {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: ColorKey;
};

export const whyPoints: WhyPoint[] = [
  {
    icon: Award,
    title: "Professional Quality",
    desc: "Clean code, polished UI, performance and accessibility at pro standards.",
    color: "purple",
  },
  {
    icon: CheckCircle2,
    title: "Tangible Results",
    desc: "Clear goals, tracked KPIs, deliverables that drive real value.",
    color: "pink",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Accurate planning, efficient sprints, deadlines respected.",
    color: "teal",
  },
  {
    icon: Shield,
    title: "Reliable & Transparent",
    desc: "Clear process, proactive communication, no ambiguity.",
    color: "violet",
  },
  {
    icon: Users,
    title: "Client-Centered",
    desc: "Listening, guidance, and support from start to finish.",
    color: "cyan",
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    desc: "Maintenance, improvements, and support after delivery.",
    color: "amber",
  },
];
