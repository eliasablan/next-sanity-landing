import { defineType } from "sanity";

export default defineType({
  name: "team",
  type: "document",
  title: "Equipo",
  fields: [
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
    // RRSS de compañeros
    // {
    //   name: 'RRSS',
    // }
  ],
});
