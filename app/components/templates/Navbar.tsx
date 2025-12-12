"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre Mí", href: "#sobre-mi" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled
        ? "top-4"
        : "top-6"
        }`}
    >
      <div
        className={`flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300 ${isScrolled
          ? "bg-ivory-50/80 backdrop-blur-lg border border-sage-300 shadow-lg"
          : "bg-ivory-50/60"
          }`}
      >
        {navLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${isScrolled
              ? "text-forest-800 hover:text-coffee-600 hover:bg-sage-100"
              : "text-forest-700 hover:text-coffee-600 hover:bg-ivory-100"
              }`}
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}

