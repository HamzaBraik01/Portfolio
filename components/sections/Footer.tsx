"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code2, Heart, ArrowUp, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Backend Development",
    "Frontend Development",
    "REST APIs",
    "Database Design",
    "Data Analytics",
    "Power BI Dashboards",
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/HamzaBraik01", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hamza-braik", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hamzabraik02@gmail.com", label: "Email" },
  ];

  return (
    <footer
      id="footer"
      className="relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-t border-slate-200 dark:border-slate-800/50 transition-colors duration-500"
    >
      {/* Gradient Border Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          {/* Brand */}
          <div className="lg:col-span-2 md:text-left text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-4 md:justify-start justify-center">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-teal-400 flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
                  Hamza BRAIK
                </span>
              </div>

              <p className="text-slate-600 dark:text-slate-400 max-w-md mb-6 text-sm leading-relaxed">
                Moroccan Java Full Stack Developer passionate about building robust backend systems
                and modern web applications. Currently training at YOUCODE - UM6P (2024-2026).
              </p>

              {/* Social Links */}
              <div className="flex gap-3 md:justify-start justify-center">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-500/50 shadow-sm hover:shadow-lg transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      if (pathname !== "/") {
                        router.push(`/${link.href}`);
                        return;
                      }
                      const element = document.querySelector(link.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-sm flex items-center gap-2 md:justify-start justify-center w-full"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100" />
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-slate-600 dark:text-slate-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
        >
          <p className="text-slate-500 dark:text-slate-500 text-sm flex items-center gap-2 justify-center">
            © {currentYear} Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            </motion.span>
            by Hamza BRAIK
          </p>
          <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-500">
            <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 z-40"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}