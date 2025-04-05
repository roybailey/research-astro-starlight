import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from "astro/zod";
import { getAllMdxFileNames } from "@/diagrams.ts";


const docs = defineCollection({
	loader: docsLoader(),
	schema: docsSchema()
});

const diagrams = defineCollection({
	loader: async () => {
		const data = await getAllMdxFileNames("src/content");
		console.log(JSON.stringify(data, null, 2));
		// Must return an array of entries with an id property, or an object with IDs as keys and entries as values
		return data
	},
	schema: z.object({
		id: z.string(),
		type: z.string().optional(),
		content: z.string().optional(),
	})
});

export const collections = {
	docs,
	diagrams,
};
