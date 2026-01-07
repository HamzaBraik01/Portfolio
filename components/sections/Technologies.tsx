'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Cloud, Sparkles } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    {
      category: 'Frontend',
      icon: Code2,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      color: 'purple'
    },
    {
      category: 'Design',
      icon: Palette,
      items: ['Visual Creativity', 'UI/UX Principles', 'Responsive Design', 'Modern Aesthetics'],
      color: 'pink'
    },
    {
      category: 'Tools & Deployment',
      icon: Cloud,
      items: ['Git', 'GitHub', 'Vercel', 'GitHub Pages', 'Docker'],
      color: 'teal'
    }
  ];

  const colorMap = {
    purple: {
      gradient: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-100 dark:bg-purple-500/20',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'hover:border-purple-400 dark:hover:border-purple-500',
      shadow: 'group-hover:shadow-purple-500/20',
      dot: 'bg-purple-500',
    },
    pink: {
      gradient: 'from-pink-500 to-pink-600',
      bg: 'bg-pink-100 dark:bg-pink-500/20',
      text: 'text-pink-600 dark:text-pink-400',
      border: 'hover:border-pink-400 dark:hover:border-pink-500',
      shadow: 'group-hover:shadow-pink-500/20',
      dot: 'bg-pink-500',
    },
    teal: {
      gradient: 'from-teal-500 to-teal-600',
      bg: 'bg-teal-100 dark:bg-teal-500/20',
      text: 'text-teal-600 dark:text-teal-400',
      border: 'hover:border-teal-400 dark:hover:border-teal-500',
      shadow: 'group-hover:shadow-teal-500/20',
      dot: 'bg-teal-500',
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section
      id="technologies"
      className="min-h-screen md:min-h-screen relative bg-slate-50 dark:bg-slate-900 flex items-center justify-center overflow-visible transition-colors duration-500 py-20 md:py-0"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 text-center"
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
            Tech Stack
          </motion.div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Technologies{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              Used
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 rounded-full mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            The tools and technologies used to develop this portfolio
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const colors = colorMap[tech.color as keyof typeof colorMap];

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className={`h-full bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 md:p-8 ${colors.border} transition-all duration-500 shadow-lg ${colors.shadow} hover:shadow-xl`}>
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${colors.gradient} flex items-center justify-center mb-6 mx-auto shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                    {tech.category}
                  </h3>
                  <div className="space-y-3">
                    {tech.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 justify-center"
                      >
                        <div className={`w-2 h-2 rounded-full ${colors.dot} flex-shrink-0`}></div>
                        <span className="text-slate-700 dark:text-slate-300 text-sm">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
