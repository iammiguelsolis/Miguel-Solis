"use client";
import React, { useState, useRef, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import ProjectCard from "@/app/components/molecules/ProjectCard";
import TechFilter from "@/app/components/molecules/TechFilter";

interface Technology {
  _id: string;
  name: string;
  iconKey: string;
  category: string;
}

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  image: object;
  description: string;
  technologies: Technology[];
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

interface ProjectsProps {
  projects: Project[];
  technologies: Technology[];
}

export default function Projects({ projects, technologies }: ProjectsProps) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  // Toggle technology filter
  const handleToggle = (techId: string) => {
    setSelectedTechs((prev) =>
      prev.includes(techId)
        ? prev.filter((id) => id !== techId)
        : [...prev, techId]
    );
  };

  // Clear all filters
  const handleClear = () => setSelectedTechs([]);

  // Filter projects - show only those with ALL selected technologies (AND logic)
  const filteredProjects = useMemo(() => {
    if (selectedTechs.length === 0) return projects;

    return projects.filter((project) => {
      const projectTechIds = (project.technologies || []).map((t) => t._id);
      return selectedTechs.every((techId) => projectTechIds.includes(techId));
    });
  }, [projects, selectedTechs]);

  // Sort: featured first, then by order
  const sortedProjects = useMemo(() => {
    return [...filteredProjects].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [filteredProjects]);

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="relative py-20 px-6 bg-ivory-50 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 -z-10 opacity-20">
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.15, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-[500px] h-[500px] bg-gradient-to-br from-sage-300 to-forest-200 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <FolderGit2 className="w-8 h-8 text-coffee-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-forest-900">
            Proyectos
          </h2>
        </motion.div>

        {/* Tech Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TechFilter
            technologies={technologies}
            selectedTechs={selectedTechs}
            onToggle={handleToggle}
            onClear={handleClear}
          />
        </motion.div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-sm text-sage-600 mb-6"
        >
          Mostrando {sortedProjects.length} de {projects.length} proyectos
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {sortedProjects.map((project, index) => (
              <ProjectCard key={project._id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {sortedProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-forest-800 mb-2">
              No se encontraron proyectos
            </h3>
            <p className="text-forest-600 mb-4">
              No hay proyectos que coincidan con los filtros seleccionados.
            </p>
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-coffee-500 text-white rounded-lg hover:bg-coffee-600 transition-colors"
            >
              Limpiar filtros
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
