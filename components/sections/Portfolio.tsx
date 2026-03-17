"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowRight, Sparkles, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { getAssetPath } from "@/lib/pathHelper";
import { portfolioProjects } from "@/lib/data/projects";

export default function Portfolio() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = portfolioProjects.length;

  const go = useCallback(
    (next: number) => {
      setDirection(next > current ? 1 : -1);
      setCurrent((next + total) % total);
    },
    [current, total]
  );

  const prev = () => go(current - 1);
  const next = () => go(current + 1);
  const project = portfolioProjects[current];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <section
      id="portfolio"
      className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden transition-colors duration-500"
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-5">
            <Sparkles className="w-4 h-4" />
            My Work
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto hidden md:block">
            Explore my latest work across Full Stack development and Data Analytics.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="w-full max-w-5xl flex items-center gap-4">
          {/* Prev */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="shrink-0 w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 text-slate-300" />
          </motion.button>

          {/* Slide */}
          <div className="flex-1 relative overflow-hidden" style={{ minHeight: "420px" }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03] backdrop-blur-md hover:border-purple-500/30 transition-all duration-500 flex flex-col md:flex-row shadow-2xl">
                  {/* Image */}
                  <div className="relative md:w-1/2 h-52 md:h-auto overflow-hidden shrink-0">
                    <img
                      src={getAssetPath(project.image)}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

                    {/* Scan lines */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ x: ["-100%", "200%"], opacity: [0, 0.15, 0] }}
                          transition={{ duration: 3.5, delay: i * 0.7, repeat: Infinity, ease: "linear" }}
                          className="absolute h-px bg-white/60"
                          style={{ top: `${20 + i * 18}%`, width: "50%" }}
                        />
                      ))}
                    </div>

                    <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/10">
                      {current + 1} / {total}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <span className={`text-xs font-semibold px-3 py-1.5 bg-gradient-to-r ${project.gradient} rounded-full inline-block mb-4 text-white shadow-sm`}>
                        {project.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-white leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-1 border border-white/10 bg-white/5 text-slate-300 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      {project.github && (
                        <motion.a
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-slate-900 rounded-xl text-sm font-semibold hover:opacity-90 transition-all shadow-md"
                        >
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </motion.a>
                      )}
                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        href="/projects"
                        className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/10 bg-white/5 text-slate-300 rounded-xl text-sm font-semibold hover:border-purple-400/50 hover:text-purple-300 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        All Projects
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="shrink-0 w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </motion.button>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2 mt-6">
          {portfolioProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-gradient-to-r from-purple-500 to-cyan-400"
                  : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/HamzaBraik01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-purple-500/40 text-purple-300 rounded-xl font-semibold text-sm hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}