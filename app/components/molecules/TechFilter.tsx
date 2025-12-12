"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Filter } from "lucide-react";
import { getIcon } from "@/app/lib/iconMap";

interface Technology {
  _id: string;
  name: string;
  iconKey: string;
  category: string;
}

interface TechFilterProps {
  technologies: Technology[];
  selectedTechs: string[];
  onToggle: (techId: string) => void;
  onClear: () => void;
}

export default function TechFilter({
  technologies,
  selectedTechs,
  onToggle,
  onClear,
}: TechFilterProps) {
  const hasFilters = selectedTechs.length > 0;

  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-forest-700">
          <Filter className="w-5 h-5" />
          <span className="text-sm font-semibold uppercase tracking-wide">
            Filtrar por tecnologías
          </span>
          {hasFilters && (
            <span className="px-2 py-0.5 text-xs font-bold bg-coffee-400 text-white rounded-full">
              {selectedTechs.length}
            </span>
          )}
        </div>

        <AnimatePresence>
          {hasFilters && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={onClear}
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-blush-600 hover:text-blush-700 hover:bg-blush-50 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
              Limpiar filtros
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Tech Chips */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => {
          const isSelected = selectedTechs.includes(tech._id);
          return (
            <motion.button
              key={tech._id}
              onClick={() => onToggle(tech._id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium
                transition-all duration-200 border
                ${isSelected
                  ? "bg-forest-900 text-ivory-50 border-forest-900 shadow-lg"
                  : "bg-white text-forest-700 border-sage-200 hover:border-coffee-400 hover:shadow-md"
                }
              `}
            >
              <span className={`w-4 h-4 ${isSelected ? "text-ivory-50" : "text-coffee-500"}`}>
                {getIcon(tech.iconKey, "w-4 h-4")}
              </span>
              {tech.name}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
