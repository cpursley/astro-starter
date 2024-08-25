import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://website.com",
  integrations: [
    tailwind({ nesting: true }),
    sitemap(),
    robotsTxt()
  ]
});