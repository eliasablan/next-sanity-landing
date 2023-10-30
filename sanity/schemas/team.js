import { defineType } from "sanity";

export default defineType({
  name: "team",
  type: "document",
  title: "Equipo",
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
      name: "name",
      type: "string",
      title: "Nombre",
    },
    {
      name: "title",
      type: "string",
      title: "Titulo",
    },
    {
      name: "network",
      type: "document",
      title: "RRSS",
      fields: [
        {
          name: "link",
          type: "string",
          title: "Link",
        },
        {
          name: "logo",
          type: "reference",
          to: [{ type: "networkLogo" }],
          title: "Logo",
        },
      ],
    },
  ],
});
