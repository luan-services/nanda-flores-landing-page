import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	vite: {
		plugins: [tailwindcss()]
	},
	site: 'https://www.nandaflores.com.br/',
	integrations: [sitemap(), react()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Noto Sans",
			cssVariable: "--font-noto-sans",
			weights: [400, 500, 600, 700], /* regular medium semibold bold */
			styles: ["normal"]
		},
		{
			provider: fontProviders.google(),
			name: "Playfair Display",
			cssVariable: "--font-playfair-display",
			weights: [400, 500, 600, 700], 
			styles: ["normal", "italic"]
		}
  	]
});