import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './project'
import { experienceType } from './experience'
import { technologyType } from './technology'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, experienceType, technologyType],
}