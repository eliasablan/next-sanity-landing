import { defineType } from "sanity";

export default defineType({
  name: "portfolio",
  type: "document",
  title: "Portafolio",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Imagen",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt",
        },
      ],
    },
    {
      name: "title",
      type: "string",
      title: "Titulo",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "date",
      type: "date",
      title: "Fecha",
      options: {
        dateFormat: "YYYY-MM-DD",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "category",
      type: "string",
      title: "Categoria",
    },
    {
      name: "description",
      type: "text",
      title: "Descripcion",
    },
  ],
});
