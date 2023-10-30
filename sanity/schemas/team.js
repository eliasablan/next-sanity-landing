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
    {
      name: "network",
      type: "document",
      title: "RRSS",
      // of: [{ type: "networkLogo" }],
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
