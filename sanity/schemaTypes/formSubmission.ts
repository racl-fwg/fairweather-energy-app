import { defineType, defineField } from 'sanity'

export const formSubmission = defineType({
  name: 'formSubmission',
  title: 'Form Submission',
  type: 'document',
  fields: [
    defineField({
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
    }),
    defineField({
      name: 'formData',
      title: 'Form Data',
      type: 'object',
    }),
  ],
})
