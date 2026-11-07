import Hero from "./components/templates/Hero";
import SeasonalHighlights from "./components/templates/SeasonalHighlights";
import About from "./components/templates/About";
import Experience, { ExperienceItem } from "./components/templates/Experience";
import TechStack from "./components/templates/TechStack";
import Projects from "./components/templates/Projects";
import Footer from "./components/templates/Footer";
import { client } from "@/sanity/lib/client";

// Types
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

// Data fetching
async function getExperiences(): Promise<ExperienceItem[]> {
  const query = `*[_type == "experience"] | order(order asc) {
    _id,
    jobTitle,
    company,
    startDate,
    endDate,
    description,
    link
  }`;
  const experiences = await client.fetch<ExperienceItem[]>(query);
  return experiences.length ? experiences : [
    {
      _id: "mibanco",
      jobTitle: "Practicante Pre Profesional de Ingeniería de Software",
      company: "Mibanco",
      startDate: "2026-03-01",
      description: "Participo en iniciativas de desarrollo de software y automatización orientadas a mejorar la eficiencia, trazabilidad y estandarización de procesos QA. He colaborado en soluciones con GitHub Agents, Jira y Xray.",
    },
    {
      _id: "uppersap",
      jobTitle: "SAP BTP Developer Trainee",
      company: "UpperSAP",
      startDate: "2026-01-01",
      endDate: "2026-03-01",
      description: "Experiencia formativa como desarrollador trainee en SAP Business Technology Platform.",
    },
  ];
}

async function getProjects(): Promise<Project[]> {
  const query = `*[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    image,
    description,
    technologies[]-> {
      _id,
      name,
      iconKey,
      category
    },
    demoUrl,
    codeUrl,
    featured
  }`;
  return await client.fetch(query);
}

async function getTechnologies(): Promise<Technology[]> {
  const query = `*[_type == "technology"] | order(name asc) {
    _id,
    name,
    iconKey,
    category
  }`;
  return await client.fetch(query);
}

export default async function Home() {
  const [experiences, projects, technologies] = await Promise.all([
    getExperiences(),
    getProjects(),
    getTechnologies(),
  ]);

  return (
    <>
      <Hero />
      <SeasonalHighlights />
      <Experience experiences={experiences} />
      <TechStack />
      <Projects projects={projects} technologies={technologies} />
      <About imageUrl="/Foto.jpg" />
      <Footer />
    </>
  );
}
