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
      type: 'string',
      title: 'Small Overview',
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
            {type: 'string', name: 'description'},
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
  ],
})
