"use client";

import ThemeToggle from "../ui/ThemeToggle";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Sparkles, Zap } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Choose Me", href: "#why" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Technologies", href: "#technologies" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
  { name: "Follow Me", href: "#social" },
  { name: "Footer", href: "#footer" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((i) => i.href);
      let current = "#home";
      for (const href of sections) {
        const el = document.querySelector(href) as HTMLElement | null;
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const threshold = Math.min(200, el.offsetHeight / 3);
        if (rect.top <= threshold && rect.bottom >= threshold) {
          current = href;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll as EventListener);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    setActive(href);

    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-white/80 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-purple-500/5 border-b border-slate-200/50 dark:border-slate-800/50"
          : "bg-transparent"
        }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex mr-3 items-center gap-2 left-0 cursor-pointer group"
            onClick={() => scrollToSection("#home")}
          >
            {/* Logo Icon */}
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-teal-400 flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-105">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-teal-400 rounded-full"
              />
            </div>

            {/* Logo Text */}
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
                Hamza BRAIK
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 tracking-widest uppercase">
                Full Stack Developer
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-1 items-center ml-auto mr-2 md:mr-4">
            {navItems.slice(0, 7).map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 relative ${active === item.href
                    ? "text-purple-600 dark:text-purple-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
              >
                {item.name}
                {active === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-purple-100 dark:bg-purple-500/20 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}

            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="ml-2"
            >
              <ThemeToggle />
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => scrollToSection("#contact")}
              className="ml-2 px-5 py-2 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 rounded-full font-semibold text-white text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Let&apos;s Talk
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden ml-auto">
            <ThemeToggle />

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white hover:bg-purple-100 dark:hover:bg-purple-500/20 transition-colors"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-800/50"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${active === item.href
                      ? "bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollToSection("#contact")}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Let&apos;s Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}