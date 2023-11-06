import { defineType } from "sanity";
import DynamicIconRenderer from "@/components/DynamicIconRenderer";

export default defineType({
  name: "socialNetwork",
  type: "document",
  title: "Red Social",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Red Social",
    },
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
      name: "base_url",
      type: "string",
      title: "URL base",
    },
  ],
  preview: {
    select: {
      icon: "icon",
      name: "name",
      base_url: "base_url",
    },

    prepare: ({ icon, name, base_url }) => ({
      media: <DynamicIconRenderer icon={icon} />,
      title: name,
      subtitle: base_url,
    }),
  },
});
