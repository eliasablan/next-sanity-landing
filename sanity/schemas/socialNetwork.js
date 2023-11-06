import { defineType } from 'sanity';
import DynamicIconRenderer from '@/components/DynamicIconRenderer';

export default defineType({
  name: 'socialNetwork',
  type: 'document',
  title: 'Red Social',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Red Social',
    },
    {
      title: 'Icono',
      name: 'icon',
      type: 'iconPicker',
      options: {
        providers: ['fa', 'mdi', 'hi', 'fi', 'si'],
        outputFormat: 'react',
      },
    },
    {
      name: 'base_url',
      type: 'url',
      title: 'URL base',
      validation: (Rule) => Rule.required(),
      //   validation: (Rule) =>
      //     Rule.custom((base_url) =>
      //       base_url
      //         .toLowerCase()
      //         .match(
      //           /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
      //         )
      //         ? true
      //         : "No dejes este campo vacío. Asegúrate de que estas agregando 'http' o 'https' al inicio."
      //     ),
    },
  ],
  preview: {
    select: {
      icon: 'icon',
      name: 'name',
      base_url: 'base_url',
    },

    prepare: ({ icon, name, base_url }) => ({
      media: icon ? <DynamicIconRenderer icon={icon} /> : null,
      title: name,
      subtitle: base_url,
    }),
  },
});
