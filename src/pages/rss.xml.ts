import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext): Promise<Response> {
    if (!context.site) {
        throw new Error('site is not defined in your Astro config');
    }

    return rss({
        title: 'Astro Learner | Blog',
        description: 'My journey learning Astro',
        site: context.site.toString(),
        items: await pagesGlobToRssItems(import.meta.glob<{ frontmatter: { title: string, pubDate: string } }>('./**/*.md')),
        customData: `<language>en-us</language>`,
    });
}
