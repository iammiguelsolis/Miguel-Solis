import { defineField, defineType } from 'sanity'

// Lista de iconos disponibles - debe coincidir con iconMap del frontend
const availableIcons = [
  // Lenguajes
  { title: 'Java', value: 'java' },
  { title: 'Python', value: 'python' },
  { title: 'JavaScript', value: 'js' },
  { title: 'TypeScript', value: 'ts' },
  // Bases de datos
  { title: 'MySQL', value: 'mysql' },
  { title: 'PostgreSQL', value: 'postgres' },
  { title: 'MongoDB', value: 'mongodb' },
  { title: 'Oracle Database', value: 'oracle' },
  // Backend
  { title: 'Spring Boot', value: 'spring' },
  { title: 'Node.js', value: 'nodejs' },
  { title: 'Express', value: 'express' },
  { title: 'FastAPI', value: 'fastapi' },
  { title: 'Flask', value: 'flask' },
  // Frontend
  { title: 'React', value: 'react' },
  { title: 'Next.js', value: 'nextjs' },
  { title: 'Tailwind CSS', value: 'tailwind' },
  { title: 'Bootstrap', value: 'bootstrap' },
  // Cloud & DevOps
  { title: 'AWS', value: 'aws' },
  { title: 'Azure', value: 'azure' },
  { title: 'Docker', value: 'docker' },
  { title: 'Vercel', value: 'vercel' },
  { title: 'Git', value: 'git' },
  { title: 'GitHub', value: 'github' },
  // Herramientas
  { title: 'VS Code', value: 'vscode' },
  { title: 'IntelliJ IDEA', value: 'idea' },
  { title: 'Postman', value: 'postman' },
]

const categories = [
  { title: 'Lenguajes', value: 'languages' },
  { title: 'Bases de Datos', value: 'databases' },
  { title: 'Backend', value: 'backend' },
  { title: 'Frontend', value: 'frontend' },
  { title: 'Cloud & DevOps', value: 'cloud' },
  { title: 'Herramientas', value: 'tools' },
]

export const technologyType = defineType({
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconKey',
      title: 'Icono',
      type: 'string',
      options: {
        list: availableIcons,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: categories,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
})
