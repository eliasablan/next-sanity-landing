import { defineType } from 'sanity';

export default defineType({
  name: 'heroHeaderMessage',
  type: 'document',
  title: 'Mensajes del Header',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Texto',
    },
  ],
});
