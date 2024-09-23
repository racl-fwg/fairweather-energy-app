import { defineType, defineField, defineArrayMember } from 'sanity'

export const selfCheckForm = defineType({
  name: 'selfCheckForm',
  title: 'Self-Check Form',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Form Title',
      type: 'string',
    }),
    defineField({
      name: 'sections',
      title: 'Form Sections',
      type: 'array',
      of: [defineArrayMember({ type: 'formSection' })],
    }),
  ],
})

export const formSection = defineType({
  name: 'formSection',
  title: 'Form Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [defineArrayMember({ type: 'formRow' })],
    }),
  ],
})

export const formRow = defineType({
  name: 'formRow',
  title: 'Form Row',
  type: 'object',
  fields: [
    defineField({
      name: 'rowNumber',
      title: 'Row Number',
      type: 'string',
    }),
    defineField({
      name: 'controlType',
      title: 'Control Type',
      type: 'string',
      options: {
        list: [
          { title: 'Checkbox', value: 'checkbox' },
          { title: 'Text', value: 'text' },
        ],
      },
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'note',
      title: 'Note',
      type: 'text',
    }),
  ],
})

// Ensure you are exporting the right schemas
export default [selfCheckForm, formSection, formRow]
