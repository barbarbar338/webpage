import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://338.rocks",
	integrations: [sitemap(), mdx(), pagefind(), react()],
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		shikiConfig: {
			theme: "css-variables",
		},
	},
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	output: "static",
});
