import { defineField, defineType } from "sanity";

export const cvDocument = defineType({
  name: "cvDocument",
  title: "CV / Hoja de Vida",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título del documento",
      type: "string",
      initialValue: "CV Rodrigo Escobar Gil",
    }),
    defineField({
      name: "file",
      title: "Archivo PDF",
      type: "file",
      options: { accept: "application/pdf" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "updatedAt",
      title: "Última actualización",
      type: "date",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "updatedAt" },
  },
});
