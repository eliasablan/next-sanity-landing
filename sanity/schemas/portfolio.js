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
