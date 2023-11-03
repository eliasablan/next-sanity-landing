import { defineConfig } from "sanity";
import { schemaTypes } from "./sanity/schemas";

import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { iconPicker } from "sanity-plugin-icon-picker";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

const config = defineConfig({
  name: "default",
  title: "Dummy Landing Web",

  projectId,
  dataset,

  apiVersion: "2023-09-21",

  plugins: [deskTool(), visionTool(), iconPicker()],

  basePath: "/admin",

  schema: {
    types: schemaTypes,
  },
});

export default config;
