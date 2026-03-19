"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { techCategories, type Tech } from "@/lib/data/technologies";

const FALLBACK_COLORS = [
  "from-purple-500 to-indigo-500",
  "from-pink-500 to-rose-500",
  "from-teal-500 to-cyan-500",
  "from-orange-500 to-amber-500",
  "from-blue-500 to-sky-500",
  "from-green-500 to-emerald-500",
];

function TechLogo({ tech, idx }: { tech: Tech; idx: number }) {
  const [failed, setFailed] = useState(false);
  const initials = tech.name
    .split(/[\s\./]/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const color = FALLBACK_COLORS[idx % FALLBACK_COLORS.length];

  if (failed) {
    return (
      <div
        className={`w-9 h-9 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shadow-sm`}
      >
        <span className="text-white text-xs font-bold">{initials}</span>
      </div>
    );
  }

  return (
    <img
      src={tech.icon}
      alt={tech.name}
      className={`w-8 h-8 object-contain transition-transform duration-200 group-hover:scale-110 ${
        tech.darkInvert ? "dark:invert" : ""
      }`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="min-h-screen relative flex items-center justify-center overflow-hidden transition-colors duration-500 py-20 md:py-24"
      style={{ backgroundColor: "var(--bg-section-1)" }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--dot-color) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Tech Stack
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technologies{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              Used
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 rounded-full mx-auto mb-4" />
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto">
            The tools and technologies powering my projects
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {techCategories.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-gradient-to-r ${category.gradient} text-white shadow-sm whitespace-nowrap`}
                >
                  {category.category}
                </span>
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 md:gap-4">
                {category.techs.map((tech, techIdx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.05 + techIdx * 0.04 }}
                    whileHover={{ y: -6, scale: 1.08 }}
                    className="group flex flex-col items-center gap-2 p-3 rounded-2xl
                      bg-white/[0.04]
                      border border-white/[0.08]
                      hover:border-purple-500/30 hover:bg-white/[0.08]
                      shadow-sm hover:shadow-md
                      transition-all duration-200 cursor-default"
                  >
                    <div className="w-9 h-9 flex items-center justify-center">
                      <TechLogo tech={tech} idx={catIdx * 10 + techIdx} />
                    </div>
                    <span className="text-[10px] md:text-xs font-medium text-slate-400 text-center leading-tight truncate w-full">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
