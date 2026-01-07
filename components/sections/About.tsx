"use client";

import { motion } from "framer-motion";
import { Code2, Database, TrendingUp, Sparkles } from "lucide-react";
import { getAssetPath } from "@/lib/pathHelper";

const skills = [
  { icon: Code2, label: "Development", color: "purple" },
  { icon: Database, label: "Data & BI", color: "pink" },
  { icon: TrendingUp, label: "DevOps", color: "teal" },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="min-h-screen md:min-h-screen relative overflow-visible bg-white dark:bg-slate-900 flex items-start pt-20 pb-4 md:py-0 md:items-center transition-colors duration-500"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-4 md:mb-15 mt-2 md:mt-12"
        >
          {/* Section Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            About Me
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl lg:text-4xl font-bold mb-1.5 md:mb-4 text-slate-900 dark:text-white"
          >
            The{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              Full Stack
            </span>{" "}
            Approach
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-slate-600 dark:text-slate-400 text-[11px] md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            I don&apos;t just write code — I architect complete solutions that blend robust backend systems,
            intuitive frontend experiences, and data-driven insights to deliver real business value.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center md:gap-y-32">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-56 md:max-w-sm mx-auto group">
              {/* Animated Border Gradient */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl p-[3px]"
                style={{
                  background: "linear-gradient(135deg, #9333ea, #ec4899, #14b8a6, #9333ea)",
                  backgroundSize: "300% 300%",
                }}
              >
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-2xl" />
              </motion.div>

              {/* Image Container */}
              <div className="absolute inset-[3px] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src={getAssetPath("/Hamza.png")}
                  alt="Hamza BRAIK"
                  className="object-contain w-full h-full rounded-2xl"
                />
              </div>

              {/* Glow Effect */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-teal-500/20 rounded-3xl blur-2xl -z-10"
              />

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-semibold shadow-lg shadow-purple-500/25 text-[11px] md:text-base z-10"
              >
                1+ Year
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-semibold shadow-lg shadow-teal-500/25 text-[11px] md:text-base z-10"
              >
                10+ Projects
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-1.5 md:space-y-5"
          >
            <div className="space-y-2 md:space-y-4">
              <h3 className="text-base md:text-2xl font-bold text-center md:text-left text-slate-900 dark:text-white">
                Building{" "}
                <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                  Scalable Solutions
                </span>
              </h3>

              {/* Glass Card for Bio */}
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 md:p-6 border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px] md:text-base text-justify">
                  As a Java Full Stack Developer, I combine strong backend expertise in Spring Boot, JEE, and microservices architecture with modern frontend skills in Angular and Vue.js. Currently training at YOUCODE - UM6P (2024-2026), I bring hands-on experience from professional internships at INTIC Solutions and the Provincial Health Delegation.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 md:p-6 border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px] md:text-base text-justify">
                  My experience extends beyond development to Data Analytics and Business Intelligence, where I&apos;ve designed interactive Power BI dashboards and implemented ETL processes. I thrive in Agile environments using Scrum and Kanban methodologies, always focusing on clean code, performance optimization, and delivering impactful solutions.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 gap-2 md:gap-3 pt-2 md:pt-5">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                const colors = {
                  purple: "from-purple-500 to-purple-600",
                  pink: "from-pink-500 to-pink-600",
                  teal: "from-teal-500 to-teal-600",
                };
                const glowColors = {
                  purple: "shadow-purple-500/25 hover:shadow-purple-500/40",
                  pink: "shadow-pink-500/25 hover:shadow-pink-500/40",
                  teal: "shadow-teal-500/25 hover:shadow-teal-500/40",
                };

                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`text-center p-2 md:p-3.5 
                      bg-white dark:bg-slate-800/50 
                      border border-slate-200 dark:border-slate-700 
                      rounded-xl 
                      shadow-lg ${glowColors[skill.color as keyof typeof glowColors]}
                      transition-all duration-300 cursor-pointer`}
                  >
                    <div className={`w-8 h-8 md:w-10 md:h-10 mx-auto mb-1 md:mb-2.5 bg-gradient-to-br ${colors[skill.color as keyof typeof colors]} rounded-lg flex items-center justify-center shadow-md`}>
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <p className="text-[11px] md:text-sm font-semibold text-slate-700 dark:text-slate-300">{skill.label}</p>
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