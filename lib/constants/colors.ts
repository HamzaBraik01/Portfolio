/**
 * Centralized color map used across multiple section components.
 * Each key maps to Tailwind utility classes for gradient, background, text, border, shadow, and dot.
 */
export const colorMap = {
  purple: {
    gradient: "from-purple-500 to-purple-600",
    bg: "bg-purple-100 dark:bg-purple-500/20",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-500/30",
    hoverBorder: "hover:border-purple-400 dark:hover:border-purple-500",
    shadow: "group-hover:shadow-purple-500/20",
    dot: "bg-purple-500",
  },
  pink: {
    gradient: "from-pink-500 to-pink-600",
    bg: "bg-pink-100 dark:bg-pink-500/20",
    text: "text-pink-600 dark:text-pink-400",
    border: "border-pink-200 dark:border-pink-500/30",
    hoverBorder: "hover:border-pink-400 dark:hover:border-pink-500",
    shadow: "group-hover:shadow-pink-500/20",
    dot: "bg-pink-500",
  },
  teal: {
    gradient: "from-teal-500 to-teal-600",
    bg: "bg-teal-100 dark:bg-teal-500/20",
    text: "text-teal-600 dark:text-teal-400",
    border: "border-teal-200 dark:border-teal-500/30",
    hoverBorder: "hover:border-teal-400 dark:hover:border-teal-500",
    shadow: "group-hover:shadow-teal-500/20",
    dot: "bg-teal-500",
  },
  cyan: {
    gradient: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-100 dark:bg-cyan-500/20",
    text: "text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-200 dark:border-cyan-500/30",
    hoverBorder: "hover:border-cyan-400 dark:hover:border-cyan-500",
    shadow: "group-hover:shadow-cyan-500/20",
    dot: "bg-cyan-500",
  },
  violet: {
    gradient: "from-violet-500 to-violet-600",
    bg: "bg-violet-100 dark:bg-violet-500/20",
    text: "text-violet-600 dark:text-violet-400",
    border: "border-violet-200 dark:border-violet-500/30",
    hoverBorder: "hover:border-violet-400 dark:hover:border-violet-500",
    shadow: "group-hover:shadow-violet-500/20",
    dot: "bg-violet-500",
  },
  amber: {
    gradient: "from-amber-500 to-amber-600",
    bg: "bg-amber-100 dark:bg-amber-500/20",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-500/30",
    hoverBorder: "hover:border-amber-400 dark:hover:border-amber-500",
    shadow: "group-hover:shadow-amber-500/20",
    dot: "bg-amber-500",
  },
  blue: {
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-100 dark:bg-blue-500/20",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-500/30",
    hoverBorder: "hover:border-blue-400 dark:hover:border-blue-500",
    shadow: "group-hover:shadow-blue-500/20",
    dot: "bg-blue-500",
  },
} as const;

export type ColorKey = keyof typeof colorMap;
