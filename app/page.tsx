import Hero from "./components/templates/Hero";
import About from "./components/templates/About";
import Experience, { ExperienceItem } from "./components/templates/Experience";
import TechStack from "./components/templates/TechStack";
import Projects from "./components/templates/Projects";
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
  return await client.fetch(query);
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
      <Experience experiences={experiences} />
      <TechStack />
      <Projects projects={projects} technologies={technologies} />
      <About />
    </>
  );
}