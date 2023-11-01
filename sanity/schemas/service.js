import { defineType } from "sanity";

export default defineType({
  name: "service",
  type: "document",
  title: "Servicio",
  fields: [
    {
      name: "logo",
      type: "array",
      title: "Logo SVG",
      of: [
        {
          type: "block",
          styles: [
            { title: "SVG", value: "svg" },
            { title: "Ruta", value: "path" },
          ],
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
