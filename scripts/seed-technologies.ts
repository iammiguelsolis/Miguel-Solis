// Script para crear todas las tecnologías en Sanity automáticamente
// Ejecutar con: npx ts-node --esm scripts/seed-technologies.ts

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_WRITE_TOKEN, // Necesitas un token con permisos de escritura
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Todas las tecnologías del TechStack
const technologies = [
  // Lenguajes
  { name: 'Java', iconKey: 'java', category: 'languages' },
  { name: 'Python', iconKey: 'python', category: 'languages' },
  { name: 'JavaScript', iconKey: 'js', category: 'languages' },
  { name: 'TypeScript', iconKey: 'ts', category: 'languages' },

  // Bases de datos
  { name: 'MySQL', iconKey: 'mysql', category: 'databases' },
  { name: 'PostgreSQL', iconKey: 'postgres', category: 'databases' },
  { name: 'MongoDB', iconKey: 'mongodb', category: 'databases' },
  { name: 'Oracle Database', iconKey: 'oracle', category: 'databases' },

  // Backend
  { name: 'Spring Boot', iconKey: 'spring', category: 'backend' },
  { name: 'Node.js', iconKey: 'nodejs', category: 'backend' },
  { name: 'Express', iconKey: 'express', category: 'backend' },
  { name: 'FastAPI', iconKey: 'fastapi', category: 'backend' },
  { name: 'Flask', iconKey: 'flask', category: 'backend' },

  // Frontend
  { name: 'React', iconKey: 'react', category: 'frontend' },
  { name: 'Next.js', iconKey: 'nextjs', category: 'frontend' },
  { name: 'Tailwind CSS', iconKey: 'tailwind', category: 'frontend' },
  { name: 'Bootstrap', iconKey: 'bootstrap', category: 'frontend' },

  // Cloud & DevOps
  { name: 'AWS', iconKey: 'aws', category: 'cloud' },
  { name: 'Azure', iconKey: 'azure', category: 'cloud' },
  { name: 'Docker', iconKey: 'docker', category: 'cloud' },
  { name: 'Vercel', iconKey: 'vercel', category: 'cloud' },
  { name: 'Git', iconKey: 'git', category: 'cloud' },
  { name: 'GitHub', iconKey: 'github', category: 'cloud' },

  // Herramientas
  { name: 'VS Code', iconKey: 'vscode', category: 'tools' },
  { name: 'IntelliJ IDEA', iconKey: 'idea', category: 'tools' },
  { name: 'Postman', iconKey: 'postman', category: 'tools' },
]

async function seedTechnologies() {
  console.log('🚀 Iniciando seed de tecnologías...\n')

  for (const tech of technologies) {
    try {
      // Verificar si ya existe
      const existing = await client.fetch(
        `*[_type == "technology" && iconKey == $iconKey][0]`,
        { iconKey: tech.iconKey }
      )

      if (existing) {
        console.log(`⏭️  ${tech.name} ya existe, saltando...`)
        continue
      }

      // Crear la tecnología
      await client.create({
        _type: 'technology',
        name: tech.name,
        iconKey: tech.iconKey,
        category: tech.category,
      })

      console.log(`✅ ${tech.name} creado`)
    } catch (error) {
      console.error(`❌ Error creando ${tech.name}:`, error)
    }
  }

  console.log('\n🎉 ¡Seed completado!')
}

seedTechnologies()
