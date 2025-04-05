import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import {glob, file, type Loader, type LoaderContext} from 'astro/loaders';
import { z } from "astro/zod";
import * as fs from 'fs';
import * as path from 'path';
import {getAllMdxFileNames} from "@/diagrams.ts";


const docs = defineCollection({
	loader: docsLoader(),
	schema: docsSchema()
});

// Define any options that the loader needs
export function diagramLoader(options: { baseDir: string }): Loader {
	// Return a loader object
	return {
		name: "diagram-loader",
		// Called when updating the collection.
		load: async (context: LoaderContext): Promise<void> => {
			console.log("Loading diagram loader");
			// Load data and update the store
			const response = await getAllMdxFileNames(options.baseDir);
		},
		// Optionally, define the schema of an entry.
		// It will be overridden by user-defined schema.
		schema: async () => z.object({
			id: z.string(),
			content: z.string(),
		})
	};
}

const diagrams = defineCollection({
	// loader: diagramLoader({ baseDir: "src/content"}),
	loader: async () => {
		const data = await getAllMdxFileNames("src/content");
		console.log(JSON.stringify(data, null, 2));
		// Must return an array of entries with an id property, or an object with IDs as keys and entries as values
		return data
		// return data.map((codeBlock) => ({
		// 	id: codeBlock.id,
		// 	type: codeBlock.type,
		// 	content: codeBlock.content,
		// }));
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
