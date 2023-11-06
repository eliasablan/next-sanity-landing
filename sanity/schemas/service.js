import { defineType } from "sanity";
import DynamicIconRenderer from "@/components/DynamicIconRenderer";

export default defineType({
  name: "service",
  type: "document",
  title: "Servicio",
  fields: [
    {
      title: "Icono",
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
  preview: {
    select: {
      icon: "icon",
      title: "title",
      description: "description",
    },

    prepare: ({ icon, title, description }) => ({
      media: <DynamicIconRenderer icon={icon} />,
      title,
      subtitle: description,
    }),
  },
});
