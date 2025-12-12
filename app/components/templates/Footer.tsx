"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Heart, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  { icon: <Mail className="w-5 h-5" />, href: "mailto:tu@email.com", label: "Email" },
];

const navLinks = [
  { label: "Inicio", href: "#" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Proyectos", href: "#proyectos" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-forest-900 text-ivory-50 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-coffee-400 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-coffee-300 to-blush-300 bg-clip-text text-transparent">
              Miguel Solis
            </h3>
            <p className="text-sage-300 text-sm leading-relaxed max-w-xs">
              Desarrollador de software apasionado por crear experiencias digitales excepcionales.
            </p>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-sage-400">
              Conecta conmigo
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-forest-800 hover:bg-coffee-500 rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-forest-800 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sage-400 text-sm flex items-center gap-1">
            © {currentYear} Miguel Solis. Hecho con
            <Heart className="w-4 h-4 text-blush-400 fill-blush-400" />
            en Perú
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-forest-800 hover:bg-coffee-500 rounded-lg text-sm font-medium transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            Volver arriba
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
