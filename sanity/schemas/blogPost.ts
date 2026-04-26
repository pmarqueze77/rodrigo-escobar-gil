import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Columna / Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título (ES)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "titleEn",
      title: "Title (EN)",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 100 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          "Derecho Constitucional",
          "Derecho Administrativo",
          "Derechos Humanos",
          "Derecho Internacional",
          "Arbitraje y MASC",
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Tiempo de lectura (ej: 8 min)",
      type: "string",
    }),
    defineField({
      name: "excerpt",
      title: "Extracto (ES)",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "excerptEn",
      title: "Excerpt (EN)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "Contenido (ES)",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Cita", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Negrita", value: "strong" },
              { title: "Cursiva", value: "em" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [{ title: "URL", name: "href", type: "url" }],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "bodyEn",
      title: "Content (EN)",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt" },
  },
});
