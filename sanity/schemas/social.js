import { defineType } from "sanity";

export default defineType({
  name: "social",
  type: "document",
  title: "Red Social",
  fields: [
    {
      name: "link",
      type: "string",
      title: "Enlace",
    },
    {
      name: "logo",
      type: "reference",
      to: [{ type: "networkLogo" }],
      title: "Logo",
    },
  ],
});
