"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/lib/pathHelper";
import { useScrollToSection } from "@/lib/hooks/useScrollToSection";

const roles = [
  "Java Full Stack Developer",
  "Spring Boot Specialist",
  "Microservices Architect",
  "Data Analytics Enthusiast",
];

const techBadges = [
  { label: "Java 17", color: "from-orange-500 to-red-500", delay: 0 },
  { label: "Spring Boot", color: "from-green-500 to-emerald-600", delay: 0.3 },
  { label: "Docker", color: "from-blue-500 to-cyan-500", delay: 0.6 },
  { label: "PostgreSQL", color: "from-indigo-500 to-blue-600", delay: 0.9 },
  { label: "React", color: "from-cyan-400 to-blue-500", delay: 1.2 },
  { label: "Microservices", color: "from-purple-500 to-violet-600", delay: 1.5 },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/HamzaBraik01", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/hamzabraik/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:braikhamza8@gmail.com", label: "Email" },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollToSection } = useScrollToSection();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 90);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: "var(--bg-section-2)" }}
    >
      {/* ── Dot Grid Background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, var(--dot-color) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── Ambient glows ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[80px]"
        />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-12"
      >
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">

          {/* ── LEFT: Text Content ── */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-sm font-medium text-green-300">Available for new opportunities</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg font-mono mb-3 tracking-wide"
            >
              <span className="text-purple-400">const</span>{" "}
              <span className="text-cyan-400">developer</span>{" "}
              <span className="text-slate-400">=</span>{" "}
              <span className="text-green-400">&quot;Hello, I&apos;m 👋&quot;</span>
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 text-slate-900 dark:text-white leading-none"
            >
              Hamza{" "}
              <span className="relative inline-block">
                <span
                  className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
                  style={{ WebkitBackgroundClip: "text" }}
                >
                  BRAIK
                </span>
                {/* Underline accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 rounded-full origin-left"
                />
              </span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 justify-center lg:justify-start mb-8 h-12"
            >
              <span className="text-slate-500 font-mono text-lg">&gt;</span>
              <h2 className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-200">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                  className="text-purple-400 ml-0.5"
                >
                  |
                </motion.span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Building{" "}
              <span className="text-purple-300 font-medium">scalable backend systems</span> with Java & Spring Boot,
              crafting <span className="text-cyan-300 font-medium">modern frontends</span>, and designing{" "}
              <span className="text-pink-300 font-medium">resilient microservices</span> architectures.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0 mb-10"
            >
              {[
                { value: "1+", label: "Years Exp." },
                { value: "10+", label: "Projects" },
                { value: "100%", label: "Satisfaction" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl border border-black/[0.07] dark:border-white/5 bg-black/[0.03] dark:bg-white/3 backdrop-blur-sm text-center"
                >
                  <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(139,92,246,0.5)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("#portfolio")}
                className="group relative px-7 py-3.5 rounded-xl font-semibold text-white text-sm overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="https://drive.google.com/drive/folders/1Fgi2GaKqiBBmIwyU0WSV3O4GLK9Dt3FN?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl font-semibold text-sm border border-black/[0.1] dark:border-white/10 bg-black/[0.04] dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-white/10 hover:border-purple-400/40 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl border border-black/[0.08] dark:border-white/10 bg-black/[0.04] dark:bg-white/5 backdrop-blur-sm flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-white hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Photo + Floating badges ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center items-center relative"
          >
            {/* Outer glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[380px] h-[380px] rounded-full"
              style={{
                background: "conic-gradient(from 0deg, #7c3aed, #ec4899, #06b6d4, #7c3aed)",
                padding: "3px",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 3px))",
                WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), white calc(100% - 3px))",
              }}
            />

            {/* Static border ring */}
            <div className="absolute w-[366px] h-[366px] rounded-full border border-white/10" />

            {/* Photo container */}
            <div className="relative w-[340px] h-[340px] rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-purple-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-transparent to-cyan-900/50 z-10" />
              <Image
                src={getAssetPath("/profile.png")}
                alt="Hamza BRAIK"
                width={340}
                height={340}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>

            {/* Floating tech badges */}
            {techBadges.map((badge, i) => {
              const angle = (i / techBadges.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 220;
              const cx = Math.cos(angle) * radius;
              const cy = Math.sin(angle) * radius;
              return (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + badge.delay, type: "spring", stiffness: 200 }}
                  style={{ position: "absolute", left: `calc(50% + ${cx}px)`, top: `calc(50% + ${cy}px)`, transform: "translate(-50%, -50%)" }}
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${badge.color} shadow-lg whitespace-nowrap backdrop-blur-sm border border-white/20`}
                  >
                    {badge.label}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollToSection("#about")}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500 hover:text-purple-400 transition-colors group"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}