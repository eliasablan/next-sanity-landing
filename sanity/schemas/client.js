import { defineType } from "sanity";

export default defineType({
  name: "client",
  type: "document",
  title: "Cliente",
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      type: "string",
      title: "Nombre",
    },
  ],
});
