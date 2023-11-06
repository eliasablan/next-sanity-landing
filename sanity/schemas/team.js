import { defineType } from 'sanity';
import DynamicIconRenderer from '@/components/DynamicIconRenderer';

export default defineType({
  name: 'team',
  type: 'document',
  title: 'Equipo',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Imagen',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Nombre',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Titulo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rrss',
      type: 'array',
      title: 'RRSS',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'socialNetwork',
              type: 'reference',
              to: [{ type: 'socialNetwork' }],
              title: 'Red Social',
            },
            {
              name: 'username',
              type: 'string',
              title: 'Nombre de Usuario',
            },
          ],
          preview: {
            select: {
              icon: 'socialNetwork.icon',
              network: 'socialNetwork.name',
              username: 'username',
            },

            prepare: ({ icon, network, username }) => ({
              media: icon ? (
                <DynamicIconRenderer icon={icon} />
              ) : undefined,
              title: username,
              subtitle: network,
            }),
          },
        },
      ],
      options: {
        sortable: false,
      },
    },
  ],
  preview: {
    select: {
      image: 'image',
      name: 'name',
      title: 'title',
      category: 'category',
    },

    prepare: ({ image, name, title }) => ({
      media: image,
      title: name,
      subtitle: title,
    }),
  },
});
