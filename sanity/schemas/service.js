import { defineType } from "sanity";

export default defineType({
  name: "service",
  type: "document",
  title: "Servicio",
  fields: [
    {
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      options: {
        providers: ["fa", "mdi", "hi", "fi", "si"],
        outputFormat: "react",
      },
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
