"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { getAssetPath } from "@/lib/pathHelper";
import { colorMap } from "@/lib/constants/colors";
import { aboutSkills } from "@/lib/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-24 overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: "var(--bg-section-1)" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--dot-color) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-5">
            <User className="w-4 h-4" />
            About Me
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            The{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Full Stack
            </span>{" "}
            Approach
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I don&apos;t just write code — I architect complete solutions that blend robust backend systems,
            intuitive frontend experiences, and data-driven insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "conic-gradient(from 0deg, #7c3aed, #ec4899, #06b6d4, #7c3aed)",
                  padding: "2px",
                  borderRadius: "1rem",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              <div className="absolute inset-[2px] rounded-2xl overflow-hidden bg-[#0a0a1a] border border-white/5">
                <img
                  src={getAssetPath("/Hamza.png")}
                  alt="Hamza BRAIK"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/15 via-pink-500/10 to-cyan-500/15 rounded-3xl blur-3xl -z-10" />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg z-10"
              >
                1+ Year
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-6 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg z-10"
              >
                10+ Projects
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Building{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Scalable Solutions
              </span>
            </h3>

            {[
              "As a Java Full Stack Developer, I combine strong backend expertise in Spring Boot, JEE, and microservices architecture with modern frontend skills in Angular and Vue.js. Currently training at YOUCODE - UM6P (2024-2026), I bring hands-on experience from professional internships at INTIC Solutions and the Provincial Health Delegation.",
              "My experience extends beyond development to Data Analytics and Business Intelligence, where I've designed interactive Power BI dashboards and implemented ETL processes. I thrive in Agile environments using Scrum and Kanban methodologies.",
            ].map((text, i) => (
              <div key={i} className="p-5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-sm">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{text}</p>
              </div>
            ))}

            <div className="grid grid-cols-3 gap-3 pt-2">
              {aboutSkills.map((skill, index) => {
                const Icon = skill.icon;
                const colors = colorMap[skill.color];
                return (
                  <motion.div
                    key={skill.label}
                    whileHover={{ scale: 1.06, y: -4 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-center p-3 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.03] dark:bg-white/[0.03] hover:border-purple-500/30 hover:bg-purple-50 dark:hover:bg-white/[0.06] transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-9 h-9 mx-auto mb-2 bg-gradient-to-br ${colors.gradient} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{skill.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}