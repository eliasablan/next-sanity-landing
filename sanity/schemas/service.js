import { defineType } from "sanity";

export default defineType({
  name: "service",
  type: "document",
  title: "Servicio",
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
      name: "description",
      type: "text",
      title: "Descripcion",
    },
  ],
});
