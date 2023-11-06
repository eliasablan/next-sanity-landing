import { defineType } from 'sanity';
import { DateFormat } from '@/components/date';

export default defineType({
  name: 'portfolio',
  type: 'document',
  title: 'Portafolio',
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
    },
    {
      name: 'title',
      type: 'string',
      title: 'Titulo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'date',
      type: 'date',
      title: 'Fecha',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'category',
      type: 'string',
      title: 'Categoria',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Descripcion',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      image: 'image',
      title: 'title',
      category: 'category',
      date: 'date',
    },

    prepare: ({ image, title, category, date }) => ({
      media: image,
      title: `${title} - ${category}`,
      subtitle: DateFormat(date),
    }),
  },
});
