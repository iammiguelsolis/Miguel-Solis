"use client"; // Necesario para animaciones
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TypewriterText({ text, className = "", delay = 0 }: TypewriterTextProps) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * 0.1 }, // Velocidad de escritura
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20, 
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} className="whitespace-pre">
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}