"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2, Shield, Zap, Users, Clock, Sparkles } from "lucide-react";

export default function WhyChooseMe() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const points = [
    { icon: Award, title: "Professional Quality", desc: "Clean code, polished UI, performance and accessibility at pro standards.", color: "purple" },
    { icon: CheckCircle2, title: "Tangible Results", desc: "Clear goals, tracked KPIs, deliverables that drive real value.", color: "pink" },
    { icon: Zap, title: "Fast Delivery", desc: "Accurate planning, efficient sprints, deadlines respected.", color: "teal" },
    { icon: Shield, title: "Reliable & Transparent", desc: "Clear process, proactive communication, no ambiguity.", color: "violet" },
    { icon: Users, title: "Client-Centered", desc: "Listening, guidance, and support from start to finish.", color: "cyan" },
    { icon: Clock, title: "Ongoing Support", desc: "Maintenance, improvements, and support after delivery.", color: "amber" },
  ];

  const colorMap = {
    purple: { gradient: "from-purple-500 to-purple-600", shadow: "group-hover:shadow-purple-500/20", border: "hover:border-purple-300 dark:hover:border-purple-500/30" },
    pink: { gradient: "from-pink-500 to-pink-600", shadow: "group-hover:shadow-pink-500/20", border: "hover:border-pink-300 dark:hover:border-pink-500/30" },
    teal: { gradient: "from-teal-500 to-teal-600", shadow: "group-hover:shadow-teal-500/20", border: "hover:border-teal-300 dark:hover:border-teal-500/30" },
    violet: { gradient: "from-violet-500 to-violet-600", shadow: "group-hover:shadow-violet-500/20", border: "hover:border-violet-300 dark:hover:border-violet-500/30" },
    cyan: { gradient: "from-cyan-500 to-cyan-600", shadow: "group-hover:shadow-cyan-500/20", border: "hover:border-cyan-300 dark:hover:border-cyan-500/30" },
    amber: { gradient: "from-amber-500 to-amber-600", shadow: "group-hover:shadow-amber-500/20", border: "hover:border-amber-300 dark:hover:border-amber-500/30" },
  };

  return (
    <section
      id="why"
      className="min-h-screen md:min-h-screen relative bg-white dark:bg-slate-900 flex items-start pt-24 pb-6 md:py-0 md:items-center md:justify-center overflow-visible transition-colors duration-500"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-12"
        >
          {/* Section Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            My Values
          </motion.div>

          <motion.h2
            variants={item}
            className="text-xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 text-slate-900 dark:text-white"
          >
            Why{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              Choose Me
            </span>
          </motion.h2>
          <motion.p
            variants={item}
            className="text-slate-600 dark:text-slate-400 text-xs md:text-base max-w-3xl mx-auto leading-relaxed"
          >
            A hybrid, results-driven approach: tech, design, and data working together to grow your business.
          </motion.p>
        </motion.div>

        {/* Points grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {points.map((p) => {
            const Icon = p.icon;
            const colors = colorMap[p.color as keyof typeof colorMap];

            return (
              <motion.div
                key={p.title}
                variants={item}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`rounded-xl md:rounded-2xl p-4 md:p-6 
                  bg-slate-50 dark:bg-slate-800/50 
                  border border-slate-200 dark:border-slate-700/50 
                  shadow-lg ${colors.shadow}
                  ${colors.border}
                  transition-all duration-500`}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className={`w-10 md:w-12 h-10 md:h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shrink-0 shadow-lg`}
                    >
                      <Icon className="w-5 md:w-6 h-5 md:h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-sm md:text-lg font-semibold text-slate-900 dark:text-white mb-1">
                        {p.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}