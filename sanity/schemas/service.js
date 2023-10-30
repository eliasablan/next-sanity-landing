import { defineType } from "sanity";

export default defineType({
  name: "service",
  type: "document",
  title: "Servicio",
  fields: [
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
