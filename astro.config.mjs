import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel/serverless";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://website.com",
  integrations: [tailwind({
    nesting: true
  }), sitemap(), robotsTxt(), alpinejs()],
  output: "hybrid",
  adapter: vercel()
});