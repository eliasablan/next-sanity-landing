import { defineType } from "sanity";

export default defineType({
  name: "networkLogo",
  type: "document",
  title: "Logo de RRSS",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Nombre",
    },
    {
      name: "logo",
      type: "image",
      title: "Logo",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt",
        },
      ],
    },
  ],
});
