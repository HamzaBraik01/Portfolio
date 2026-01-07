"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, ArrowRight } from "lucide-react";
import { getAssetPath } from "@/lib/pathHelper";

const projects = [
  {
    title: "Smart Delivery Management System (SDMS)",
    category: "Full Stack Development",
    description: "Software solution for optimization and intelligent tracking of logistics deliveries. Features modular architecture for route management, real-time order tracking, and automated driver assignment.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Swagger", "JUnit", "Mockito"],
    image: "/smartlogi-sdms.png",
    gradient: "from-purple-500 to-purple-600",
    glowColor: "purple",
    github: "https://github.com/HamzaBraik01/smartlogi-sdms",
  },

  {
    title: "OctoPOS – Point of Sale System",
    category: "Full Stack Development",
    description: "Complete commercial management application for the restaurant sector. Digitized order-taking, visual table management, fast checkout system, and automated financial reports (revenue, sales).",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind CSS"],
    gradient: "from-pink-500 to-pink-600",
    glowColor: "pink",
    image: "/OctoPOS.png",
    github: "https://github.com/HamzaBraik01/OctoPOS",
  },

  {
    title: "Surveillance & Prediction System for Refrigeration",
    category: "Full Stack + ML",
    description: "Intelligent solution for real-time monitoring and predictive maintenance of refrigeration equipment using Machine Learning for anomaly detection and preventive alerts.",
    tags: ["Python", "Flask", "Vue.js", "Machine Learning", "SQL"],
    gradient: "from-teal-500 to-teal-600",
    glowColor: "teal",
    image: "/FroidPredict-Maintenance-Predictive-et-Analyse-Thermodynamique-des-Installations-Frigorifiques.png",
    github: "https://github.com/HamzaBraik01/FroidPredict-Maintenance-Predictive-et-Analyse-Thermodynamique-des-Installations-Frigorifiques",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative bg-slate-50 dark:bg-slate-950 flex items-center justify-center py-8 md:py-12 md:min-h-screen transition-colors duration-500"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center w-full md:h-full md:justify-start md:pt-18 pb-12 md:pb-0 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-10"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            My Work
          </motion.div>

          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm max-w-3xl mx-auto hidden md:block">
            Explore my latest work across Full Stack development and Data Analytics. Each project showcases my approach to solving real-world challenges with modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-10 w-full">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/HamzaBraik01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 text-sm md:text-base border-2 border-purple-500 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all duration-300 group"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const glowShadows = {
    purple: "group-hover:shadow-purple-500/20",
    pink: "group-hover:shadow-pink-500/20",
    teal: "group-hover:shadow-teal-500/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className={`relative rounded-2xl overflow-hidden 
        bg-white dark:bg-slate-800/50 
        border border-slate-200 dark:border-slate-700/50 
        shadow-lg ${glowShadows[project.glowColor as keyof typeof glowShadows]}
        hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-500/30
        transition-all duration-500`}
      >
        {/* Image Header */}
        <div className="relative h-36 md:h-48 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
          )}

          {/* Overlay Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`} />

          {/* Animated Lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: ['-100%', '200%'],
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute h-px bg-white/50"
                style={{ top: `${20 + i * 15}%`, width: '50%' }}
              />
            ))}
          </div>

          {/* GitHub Link */}
          {project.github && (
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 z-10"
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5 text-white" />
            </motion.a>
          )}
        </div>

        {/* Content */}
        <div className="p-4 md:p-5">
          <span className={`text-xs font-semibold px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full inline-block mb-3 text-white shadow-sm`}>
            {project.category}
          </span>

          <h3 className="text-sm md:text-base font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-slate-900 dark:text-white">
            {project.title}
          </h3>

          <p className="text-slate-600 dark:text-slate-400 text-xs mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05 }}
                className="text-[11px] px-2.5 py-1 
                  bg-slate-100 dark:bg-slate-700/50 
                  text-slate-600 dark:text-slate-300 
                  border border-slate-200 dark:border-slate-600/50
                  rounded-full font-medium
                  hover:border-purple-300 dark:hover:border-purple-500/50
                  transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
            {project.tags.length > 4 && (
              <span className="text-[11px] px-2.5 py-1 text-slate-500 dark:text-slate-400 font-medium">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}