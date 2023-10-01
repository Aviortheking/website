// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Define your collection(s)
const projectsCollection = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		image: image().optional(),
		link: z.object({
			href: z.string(),
			rel: z.string().optional(),
			text: z.string().optional()
		}).optional(),
		disabled: z.string().optional(),
		created: z.date().optional(),
		updated: z.date().optional()
	})
})
const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		image: z.string().optional()
	})
})
const clientsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string()
	})
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
  clients: clientsCollection
}
