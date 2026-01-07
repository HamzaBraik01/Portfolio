"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Twitter, Instagram, Mail, Sparkles } from "lucide-react";

export default function Social() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/HamzaBraik01", label: "GitHub", color: "purple" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hamza-braik", label: "LinkedIn", color: "blue" },
    { icon: Twitter, href: "https://twitter.com/HamzaBraik01", label: "Twitter", color: "cyan" },
    { icon: Instagram, href: "https://instagram.com/hamza_braik", label: "Instagram", color: "pink" },
    { icon: Mail, href: "mailto:hamzabraik02@gmail.com", label: "Email", color: "teal" },
  ];

  const colorMap = {
    purple: "hover:bg-purple-500 hover:border-purple-500 hover:shadow-purple-500/30",
    blue: "hover:bg-blue-500 hover:border-blue-500 hover:shadow-blue-500/30",
    cyan: "hover:bg-cyan-500 hover:border-cyan-500 hover:shadow-cyan-500/30",
    pink: "hover:bg-pink-500 hover:border-pink-500 hover:shadow-pink-500/30",
    teal: "hover:bg-teal-500 hover:border-teal-500 hover:shadow-teal-500/30",
  };

  return (
    <section
      id="social"
      className="min-h-screen relative bg-slate-50 dark:bg-slate-950 flex items-center justify-center py-20 transition-colors duration-500"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
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
            Connect With Me
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Follow{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Connect with me on social media and stay updated with my latest projects and insights.
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            const hoverColors = colorMap[social.color as keyof typeof colorMap];

            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`group w-16 h-16 md:w-20 md:h-20 
                  bg-white dark:bg-slate-800/50 
                  border border-slate-200 dark:border-slate-700 
                  rounded-2xl flex items-center justify-center 
                  transition-all duration-300 
                  shadow-lg hover:shadow-xl
                  ${hoverColors}`}
                aria-label={social.label}
              >
                <Icon className="w-6 h-6 md:w-8 md:h-8 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors duration-300" />
              </motion.a>
            );
          })}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-teal-500 rounded-full mt-12 md:mt-16"
        />

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 md:mt-8 text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl text-center"
        >
          Let&apos;s collaborate and create something amazing together. Feel free to reach out!
        </motion.p>
      </div>
    </section>
  );
}