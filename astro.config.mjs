// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import expressiveCode from 'astro-expressive-code';
import remarkMermaid from "remark-mermaidjs";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    markdown: {
        // Applied to .md and .mdx files
        remarkPlugins: [remarkMermaid],
    },
    integrations: [expressiveCode(), mdx(), react(), starlight({
    title: 'Research Astro Starlight',
    routeMiddleware: './src/routeData.ts',
    customCss: ['./src/assets/css/global.css'],
    social: {
        github: 'https://github.com/withastro/starlight',
    },
    components: {
        // Override the default `SocialIcons` component.
        // Header: './src/components/layout/header.astro',
        // PageFrame: './src/components/PageFrame.astro',
        SocialIcons: './src/components/layout/social.astro',
        SiteTitle: './src/components/layout/logo.astro',
        ThemeSelect: './src/components/layout/ThemeSelect.astro',
    },
    sidebar: [
        {
            label: 'Home',
            link: '/'
        },
        {
            label: 'Custom Starlight Page',
            link: '/samples'
        },
        {
            label: 'Astro+React (not Starlight)',
            link: '/landing',
            badge: { text: 'Not Working', variant: 'caution' },
        },
        {
            label: 'Guides',
            items: [
                // Each item here is one entry in the navigation menu.
                {label: 'Example Guide', slug: 'guides/example'},
            ],
        },
        {
            label: 'Reference',
            autogenerate: {directory: 'reference'},
        },
    ],
})],
    experimental: {
        svg: {
            mode: "sprite",
        },
    },
});