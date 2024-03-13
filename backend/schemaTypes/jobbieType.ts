import {defineField, defineType} from 'sanity'

export const jobbieType = defineType({
  name: 'jobbie',
  type: 'document',
  title: 'Jobbie',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Name of jobbie' }),
    defineField({ name: 'slug', type: 'slug', title: 'Slug of your jobbie', options: { source: 'name' } }),
    defineField({ name: 'jobbieImage', type: 'image', title: 'Jobbie Image' }),
    defineField({ name: 'jobbieDescription', type: 'text', title: 'Jobbie Description' }),
    defineField({ name: 'resume', type: 'file', title: 'Resume' }),
    defineField({ name: 'github', type: 'url', title: 'Github' }),
    defineField({ name: 'linkedin', type: 'url', title: 'Linkedin' })
  ]
})