import { defineType } from "sanity";
import DynamicIconRenderer from "@/components/DynamicIconRenderer";

export default defineType({
  name: "team",
  type: "document",
  title: "Equipo",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Imagen",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt",
        },
      ],
    },
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
      name: "rrss",
      type: "array",
      title: "RRSS",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "socialNetwork",
              type: "reference",
              to: [{ type: "socialNetwork" }],
              title: "Red Social",
            },
            {
              name: "username",
              type: "string",
              title: "Nombre de Usuario",
            },
          ],
          preview: {
            select: {
              icon: "socialNetwork.icon",
              network: "socialNetwork.name",
              username: "username",
            },

            prepare: ({ icon, network, username }) => ({
              media: <DynamicIconRenderer icon={icon} />,
              title: username,
              subtitle: network,
            }),
          },
        },
      ],
    },
  ],
});
