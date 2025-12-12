import { defineField, defineType } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título del Proyecto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen Principal',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'technologies',
      title: 'Tecnologías',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'technology' }] }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'demoUrl',
      title: 'URL de Demo',
      type: 'url',
    }),
    defineField({
      name: 'codeUrl',
      title: 'URL del Código (GitHub)',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Proyecto Destacado',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      featured: 'featured',
    },
    prepare({ title, media, featured }) {
      return {
        title: featured ? `⭐ ${title}` : title,
        media,
      }
    },
  },
})