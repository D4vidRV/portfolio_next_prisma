import {defineType, defineField, defineArrayMember} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'overview',
      type: 'text',
      title: 'Small Overview',
    }),
    defineField({
      name: 'overview_es',
      type: 'text',
      title: 'Small Overview ES',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'feature',
          fields: [
            {title: 'Description', type: 'text', name: 'description'},
            {title: 'Description ES',type: 'text', name: 'description_es'},
            {type: 'image', name: 'image'},
          ],
        }),
      ],
    }),
    defineField({
      name: 'link',
      type: 'string',
      title: 'Link',
    }),
    defineField({
      name: 'github',
      type: 'string',
      title: 'Github',
    }),
  ],
})
