import {defineField, defineType} from 'sanity';

export const tagType = defineType({
  name: 'tag',
  type: 'document',
  title: 'Tag',
  fields: [
    defineField({
      name: 'name',
      title: 'Tag Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
  ]
})