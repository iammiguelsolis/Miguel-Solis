import React from "react";

// 1. Simple Icons
import {
  SiPython, SiJavascript, SiTypescript,
  SiMysql, SiPostgresql, SiMongodb, SiOracle,
  SiSpringboot, SiNodedotjs, SiExpress, SiFastapi, SiFlask,
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap,
  SiDocker, SiVercel, SiGit, SiGithub,
  SiIntellijidea, SiPostman
} from "react-icons/si";

// 2. Iconos alternativos
import { FaJava, FaAws } from "react-icons/fa";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { Code2 } from "lucide-react";

// Mapa de iconos compartido entre TechStack y Projects
export const iconMap: Record<string, React.ReactNode> = {
  // Lenguajes
  java: <FaJava className="w-full h-full" />,
  python: <SiPython className="w-full h-full" />,
  js: <SiJavascript className="w-full h-full" />,
  ts: <SiTypescript className="w-full h-full" />,

  // Bases de datos
  mysql: <SiMysql className="w-full h-full" />,
  postgres: <SiPostgresql className="w-full h-full" />,
  mongodb: <SiMongodb className="w-full h-full" />,
  oracle: <SiOracle className="w-full h-full" />,

  // Backend
  spring: <SiSpringboot className="w-full h-full" />,
  nodejs: <SiNodedotjs className="w-full h-full" />,
  express: <SiExpress className="w-full h-full" />,
  fastapi: <SiFastapi className="w-full h-full" />,
  flask: <SiFlask className="w-full h-full" />,

  // Frontend
  react: <SiReact className="w-full h-full" />,
  nextjs: <SiNextdotjs className="w-full h-full" />,
  tailwind: <SiTailwindcss className="w-full h-full" />,
  bootstrap: <SiBootstrap className="w-full h-full" />,

  // Cloud
  aws: <FaAws className="w-full h-full" />,
  azure: <VscAzure className="w-full h-full" />,
  docker: <SiDocker className="w-full h-full" />,
  vercel: <SiVercel className="w-full h-full" />,
  git: <SiGit className="w-full h-full" />,
  github: <SiGithub className="w-full h-full" />,

  // Herramientas
  vscode: <VscVscode className="w-full h-full" />,
  idea: <SiIntellijidea className="w-full h-full" />,
  postman: <SiPostman className="w-full h-full" />,
};

// Colores por categoría
export const categoryColors: Record<string, string> = {
  languages: "from-amber-400 to-orange-500",
  databases: "from-blue-400 to-cyan-500",
  backend: "from-green-400 to-emerald-500",
  frontend: "from-pink-400 to-rose-500",
  cloud: "from-violet-400 to-purple-500",
  tools: "from-slate-400 to-zinc-500",
};

// Helper para obtener icono con fallback
export function getIcon(iconKey: string, className = "w-5 h-5"): React.ReactNode {
  const icon = iconMap[iconKey];
  if (icon) {
    return <span className={className}>{icon}</span>;
  }
  return <Code2 className={className} />;
}
