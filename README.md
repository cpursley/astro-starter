# 🚀 Astro Starter

Scaffold for quickly building static sites with SEO performance in mind.

## 🔌 Integrations
- [@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [@astrojs/mdx](https://docs.astro.build/en/guides/markdown-content/)
- [@astrojs/rss](https://docs.astro.build/en/guides/rss/)
- [Astrolib SEO](https://github.com/onwidget/astrolib/tree/main/packages/seo)
- [astro-robots-txt](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme)

## 🏁 Get Started

```sh
npm install && npm run dev
```

## 📁 Project Structure

Inside Astro Starter, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   │   └── blog/
│   │       ├── post-1.md
│   │       └── post-2.md
│   ├── data/
│   │   ├── footer.ts
│   │   └── navigation.ts
│   ├── i18n/
│   │   └── ui.ts
│   └── pages/
│       ├── blog/
│       │   └── [...page].astro
│       ├── index.astro
│       └── about.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name. To add a blog post, create a new `.md` file in `src/content/blog/`.

The data folder is where you can configure the links and other elements that are used in the site.

The i18n folder is where you can configure the text that is used in the various components.

Any static assets, like images, can be placed in the `public/` directory.



## 🎨 Extend / Customize

`src/i18n/ui.ts` contains a list of variables that you can customize to your liking.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
