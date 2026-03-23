"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { colorMap } from "@/lib/constants/colors";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SubmitStatus = "idle" | "success" | "error";

const CONTACT_EMAIL = "braikhamza8@gmail.com";

const contactInfo = [
  { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, color: "purple" as const },
  { icon: Phone, label: "Phone", value: "06-9386-8517", href: "tel:+212693868517", color: "pink" as const },
  { icon: MapPin, label: "Location", value: "Safi, Morocco", href: null, color: "teal" as const },
];

const initialFormData: FormData = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openGmailFallback = () => {
    const subject = encodeURIComponent(`[Contact] ${formData.subject || "New message"}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${CONTACT_EMAIL}&su=${subject}&body=${body}`;
    const win = window.open(gmailUrl, "_blank");
    if (!win) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const subject = encodeURIComponent(`[Portfolio] ${formData.subject}`);
      const body = encodeURIComponent(
        `👋 New message from your portfolio\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
      );

      const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${CONTACT_EMAIL}&su=${subject}&body=${body}`;
      const win = window.open(gmailUrl, "_blank");

      // Fallback to mailto if popup blocked
      if (!win) {
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      }

      setSubmitStatus("success");
      setFormData(initialFormData);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center relative overflow-hidden w-full px-4 md:px-8 lg:px-12 py-24 transition-colors duration-500"
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
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4"
          >
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </motion.div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-slate-900 dark:text-white">
            Let&apos;s Build{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700/50 shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-slate-900 dark:text-white placeholder-slate-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email@gmail.com"
                    className="w-full px-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-slate-900 dark:text-white placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mt-5">
                <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-slate-900 dark:text-white placeholder-slate-400"
                />
              </div>

              {/* Message */}
              <div className="mt-5">
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-slate-900 dark:text-white placeholder-slate-400 resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-100 dark:bg-green-500/20 border border-green-200 dark:border-green-500/30 rounded-xl text-green-700 dark:text-green-400 text-center flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-100 dark:bg-red-500/20 border border-red-200 dark:border-red-500/30 rounded-xl text-red-700 dark:text-red-400 text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5" />
                    We couldn&apos;t send automatically.
                  </div>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=${CONTACT_EMAIL}`}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-purple-600 dark:text-purple-400 font-medium"
                  >
                    Open Gmail compose
                  </a>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full flex flex-col"
          >
            <div className="bg-slate-50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 md:p-8 h-full flex flex-col shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>

              <div className="space-y-4 flex-1">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  const gradient = colorMap[item.color].gradient;

                  const card = (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                        <p className="text-slate-900 dark:text-white font-semibold">{item.value}</p>
                      </div>
                    </motion.div>
                  );

                  return item.href ? (
                    <a key={item.label} href={item.href} className="block">{card}</a>
                  ) : (
                    <div key={item.label}>{card}</div>
                  );
                })}
              </div>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-teal-50 dark:from-purple-500/10 dark:to-teal-500/10 rounded-xl border border-purple-200 dark:border-purple-500/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Available for Projects</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Open for freelance &amp; full-time opportunities
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}