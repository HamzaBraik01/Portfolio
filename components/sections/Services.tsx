"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Smartphone,
  Rocket,
  Layers,
  Server,
  BarChart3,
  Cpu,
  LineChart,
  Settings,
  Cloud,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Backend Development",
    icon: Server,
    gradient: "from-purple-500 to-purple-600",
    glowColor: "purple",
    description: "Building robust backend systems with Java, Spring Boot, and microservices architecture for enterprise-grade applications.",
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
    description: "Creating modern, responsive web interfaces with Angular and Vue.js that deliver exceptional user experiences.",
    features: [
      { icon: Smartphone, text: "Angular & Vue.js Apps" },
      { icon: Cpu, text: "Responsive UI/UX" },
      { icon: Rocket, text: "Performance Optimization" },
    ],
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    gradient: "from-teal-500 to-teal-600",
    glowColor: "teal",
    description: "Transforming raw data into actionable insights with Power BI dashboards, ETL processes, and database management.",
    features: [
      { icon: LineChart, text: "Power BI Dashboards" },
      { icon: Database, text: "ETL & Data Processing" },
      { icon: Cloud, text: "Database Administration" },
    ],
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="services"
      className="min-h-screen md:min-h-screen relative bg-slate-50 dark:bg-slate-950 flex items-start pt-24 pb-6 md:py-0 md:items-center overflow-visible transition-colors duration-500"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 md:mb-8"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            What I Offer
          </motion.div>

          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-1.5 md:mb-2 text-slate-900 dark:text-white">
            Professional{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-[10px] md:text-sm max-w-xl mx-auto leading-relaxed">
            From backend systems to data visualization, I provide comprehensive Full Stack solutions
            tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-3 md:gap-5"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const glowShadows = {
              purple: "group-hover:shadow-purple-500/20",
              pink: "group-hover:shadow-pink-500/20",
              teal: "group-hover:shadow-teal-500/20",
            };

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                {/* Card with Glassmorphism */}
                <div className={`relative h-full 
                  bg-white dark:bg-slate-800/50 
                  border border-slate-200 dark:border-slate-700/50 
                  shadow-lg ${glowShadows[service.glowColor as keyof typeof glowShadows]}
                  backdrop-blur-sm 
                  rounded-xl md:rounded-2xl p-4 md:p-6 
                  hover:border-purple-300 dark:hover:border-purple-500/30 
                  transition-all duration-500
                  overflow-hidden`}
                >
                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Animated Border Line */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`w-10 md:w-12 h-10 md:h-12 mb-3 md:mb-4 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center relative z-10 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <Icon className="w-5 md:w-6 h-5 md:h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-sm md:text-lg font-bold mb-2 md:mb-3 relative z-10 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-3 md:mb-4 leading-relaxed relative z-10 text-[10px] md:text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 md:space-y-2.5 relative z-10">
                    {service.features.map((feature) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <motion.div
                          key={feature.text}
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 md:gap-3 text-slate-700 dark:text-slate-300"
                        >
                          <div className={`w-6 md:w-7 h-6 md:h-7 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center shrink-0 shadow-sm`}>
                            <FeatureIcon className="w-3 md:w-3.5 h-3 md:h-3.5 text-white" />
                          </div>
                          <span className="text-[10px] md:text-xs font-medium">{feature.text}</span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Number indicator */}
                  <div className={`
                    absolute top-4 right-4 md:top-6 md:right-6 text-4xl md:text-6xl font-bold 
                    bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent 
                    opacity-10 group-hover:opacity-20
                    transition-opacity duration-300 pointer-events-none select-none
                  `}>
                    0{index + 1}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-6 md:mt-10"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-3 md:mb-4 text-[10px] md:text-sm">
            Ready to bring your project to life?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 md:px-8 py-2.5 md:py-3 text-xs md:text-sm bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 text-white rounded-full font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
          >
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}