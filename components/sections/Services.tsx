"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { colorMap } from "@/lib/constants/colors";
import { services } from "@/lib/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center py-24 overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: "var(--bg-section-2)" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--dot-color) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-pink-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-sm font-medium mb-5">
            <Zap className="w-4 h-4" />
            What I Offer
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            From backend systems to data visualization, I provide comprehensive Full Stack solutions
            tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorMap[service.glowColor];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative h-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] backdrop-blur-md rounded-2xl p-6 hover:border-purple-500/30 hover:bg-purple-50/50 dark:hover:bg-white/[0.06] transition-all duration-500 overflow-hidden">
                  {/* Top gradient line on hover */}
                  <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${service.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                  {/* Glow overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                    className={`w-12 h-12 mb-5 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg relative z-10`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 leading-relaxed relative z-10">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2.5 relative z-10">
                    {service.features.map((feature) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <motion.div
                          key={feature.text}
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300"
                        >
                          <div className={`w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center shrink-0`}>
                            <FeatureIcon className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{feature.text}</span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Number watermark */}
                  <div className={`absolute top-5 right-5 text-6xl font-black bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none select-none`}>
                    0{index + 1}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-slate-500 dark:text-slate-500 mb-4 text-sm">Ready to bring your project to life?</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139,92,246,0.4)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
          >
            Start a Project →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}