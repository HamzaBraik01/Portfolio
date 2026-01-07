'use client';

import { motion } from 'framer-motion';
import { Code, Layers, Database, Settings, Lightbulb, BarChart3, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Code,
      skills: ['Java', 'Spring Boot', 'JEE', 'Servlets', 'JSP', 'PHP (Laravel)', 'Python (Flask)', 'OOP', 'MVC'],
      level: 90,
      color: 'purple'
    },
    {
      title: 'Frontend Development',
      icon: Layers,
      skills: ['Angular', 'Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'DOM & AJAX'],
      level: 85,
      color: 'pink'
    },
    {
      title: 'Database & BI',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Power BI', 'DAX', 'Power Query', 'ETL', 'Stored Procedures'],
      level: 88,
      color: 'teal'
    },
    {
      title: 'Analysis & Design',
      icon: BarChart3,
      skills: ['UML', 'Class Diagrams', 'Use Case Diagrams', 'Figma', 'Wireframing', 'Prototyping', 'UI/UX Design'],
      level: 82,
      color: 'cyan'
    },
    {
      title: 'DevOps & Tools',
      icon: Settings,
      skills: ['Git/GitHub', 'Docker', 'Jira', 'Trello', 'Agile (Scrum)', 'Kanban', 'Maven', 'SonarQube'],
      level: 85,
      color: 'violet'
    },
    {
      title: 'Soft Skills',
      icon: Lightbulb,
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability', 'Continuous Learning'],
      level: 92,
      color: 'amber'
    }
  ];

  const colorMap = {
    purple: {
      gradient: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-100 dark:bg-purple-500/20',
      text: 'text-purple-600 dark:text-purple-400',
      border: 'border-purple-200 dark:border-purple-500/30',
      hoverBorder: 'hover:border-purple-400 dark:hover:border-purple-500',
      shadow: 'group-hover:shadow-purple-500/20',
    },
    pink: {
      gradient: 'from-pink-500 to-pink-600',
      bg: 'bg-pink-100 dark:bg-pink-500/20',
      text: 'text-pink-600 dark:text-pink-400',
      border: 'border-pink-200 dark:border-pink-500/30',
      hoverBorder: 'hover:border-pink-400 dark:hover:border-pink-500',
      shadow: 'group-hover:shadow-pink-500/20',
    },
    teal: {
      gradient: 'from-teal-500 to-teal-600',
      bg: 'bg-teal-100 dark:bg-teal-500/20',
      text: 'text-teal-600 dark:text-teal-400',
      border: 'border-teal-200 dark:border-teal-500/30',
      hoverBorder: 'hover:border-teal-400 dark:hover:border-teal-500',
      shadow: 'group-hover:shadow-teal-500/20',
    },
    cyan: {
      gradient: 'from-cyan-500 to-cyan-600',
      bg: 'bg-cyan-100 dark:bg-cyan-500/20',
      text: 'text-cyan-600 dark:text-cyan-400',
      border: 'border-cyan-200 dark:border-cyan-500/30',
      hoverBorder: 'hover:border-cyan-400 dark:hover:border-cyan-500',
      shadow: 'group-hover:shadow-cyan-500/20',
    },
    violet: {
      gradient: 'from-violet-500 to-violet-600',
      bg: 'bg-violet-100 dark:bg-violet-500/20',
      text: 'text-violet-600 dark:text-violet-400',
      border: 'border-violet-200 dark:border-violet-500/30',
      hoverBorder: 'hover:border-violet-400 dark:hover:border-violet-500',
      shadow: 'group-hover:shadow-violet-500/20',
    },
    amber: {
      gradient: 'from-amber-500 to-amber-600',
      bg: 'bg-amber-100 dark:bg-amber-500/20',
      text: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-200 dark:border-amber-500/30',
      hoverBorder: 'hover:border-amber-400 dark:hover:border-amber-500',
      shadow: 'group-hover:shadow-amber-500/20',
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
      id="skills"
      className="min-h-screen relative bg-white dark:bg-slate-950 flex items-center justify-center overflow-y-auto py-20 transition-colors duration-500"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
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
            My Expertise
          </motion.div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Technical{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 rounded-full mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-4 max-w-2xl mx-auto">
            Technologies and skills I&apos;ve mastered through training and professional experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorMap[category.color as keyof typeof colorMap];

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className={`h-full bg-slate-50 dark:bg-slate-900/50 border ${colors.border} rounded-xl p-5 ${colors.hoverBorder} transition-all duration-300 shadow-lg ${colors.shadow} hover:shadow-xl`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colors.gradient} flex items-center justify-center mb-3 shadow-lg`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className={`text-lg font-bold ${colors.text}`}
                      >
                        {category.level}%
                      </motion.span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category.level}%` }}
                      transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-shimmer" />
                    </motion.div>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * skillIndex }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`px-2.5 py-1 text-xs font-medium rounded-full ${colors.bg} ${colors.text} cursor-default transition-all duration-200`}
                      >
                        {skill}
                      </motion.span>
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

export default Skills;
