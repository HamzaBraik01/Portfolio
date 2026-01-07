"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Eye, MessageCircle } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/lib/pathHelper";

const roles = [
  "Java Full Stack Developer",
  "Spring Boot Specialist",
  "Data Analytics Enthusiast",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-12 bg-slate-50 dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Premium Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-to-bl from-teal-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-teal-500/5 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className={`absolute w-2 h-2 rounded-full ${i % 3 === 0
                ? "bg-purple-500/40"
                : i % 3 === 1
                  ? "bg-pink-500/40"
                  : "bg-teal-500/40"
              }`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-[400px_1fr] gap-10 items-center">

          {/* Left: Profile Image with Premium Styling */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative h-full min-h-130 group"
          >
            {/* Glow Effect */}
            <motion.div
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-6 bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-teal-500/30 blur-3xl opacity-80 -z-10"
            />

            {/* Profile Card */}
            <div className="absolute -left-8 w-full rounded-2xl overflow-hidden border-2 border-white/20 dark:border-slate-700/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-2xl shadow-purple-500/10 dark:shadow-purple-500/20 bottom-8 group-hover:border-purple-400/50 transition-all duration-500">
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Image
                src={getAssetPath("/profile.png")}
                alt="Hamza BRAIK"
                width={400}
                height={500}
                className="w-full h-auto object-cover relative z-10"
                priority
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-12 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl shadow-xl shadow-purple-500/10 border border-slate-200 dark:border-slate-700 z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Available</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <div className="text-center md:text-left pb-8 relative">
            <div className="relative z-10">

              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-purple-600 dark:text-purple-400 text-lg md:text-xl mb-4 font-semibold flex items-center gap-2 justify-center md:justify-start"
              >
                <motion.span
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  👋
                </motion.span>
                Hello, I&apos;m
              </motion.p>

              {/* Name with Glow Effect */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 text-slate-900 dark:text-white"
              >
                <span className="relative">
                  Hamza{" "}
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
                    BRAIK
                  </span>
                  <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-teal-500/10 blur-2xl -z-10"
                  />
                </span>
              </motion.h1>

              {/* Typing Animation with Gradient */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="h-14 md:h-16 flex items-center justify-center md:justify-start mb-7"
              >
                <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
                    {displayText}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-purple-500 ml-1"
                  >
                    |
                  </motion.span>
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-3xl mb-10 leading-relaxed"
              >
                I build <span className="text-purple-600 dark:text-purple-400 font-semibold">robust backend systems</span> with Java &amp; Spring Boot,
                craft <span className="text-pink-600 dark:text-pink-400 font-semibold">modern web interfaces</span> using Angular &amp; Vue.js,
                and transform <span className="text-teal-600 dark:text-teal-400 font-semibold">data into actionable insights</span> with Power BI.
                Passionate about clean code and agile methodologies.
              </motion.p>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-6 mb-10 justify-center md:justify-start"
              >
                {[
                  { number: "1+", label: "Years Experience" },
                  { number: "10+", label: "Projects Completed" },
                  { number: "100%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons with Premium Styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("#portfolio")}
                  className="group px-7 py-3.5 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 rounded-full font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  View My Work
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("#contact")}
                  className="px-7 py-3.5 border-2 border-purple-500/50 dark:border-purple-500/30 rounded-full font-semibold text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 hover:border-purple-500 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get In Touch
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={getAssetPath("/BRAIK_HAMZA_CV.pdf")}
                  download="BRAIK_HAMZA_CV.pdf"
                  className="px-7 py-3.5 border-2 border-slate-300 dark:border-slate-700 rounded-full font-semibold text-slate-700 dark:text-slate-300 hover:border-teal-500 dark:hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.a>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 group"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="relative"
        >
          <div className="w-10 h-16 rounded-full border-2 border-slate-300 dark:border-slate-600 flex items-start justify-center pt-2 group-hover:border-purple-500 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-gradient-to-b from-purple-500 to-teal-500"
            />
          </div>
        </motion.div>
      </motion.button>
    </section>
  );
}