import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'blog'>;

export function filterPublishedPosts(posts: Post[]): Post[] {
    return posts.filter((post) => !post.data.draft);
}

export function sortPostsByDate(posts: Post[]): Post[] {
    return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getAllTags(posts: Post[]): string[] {
    const tags = posts.flatMap((post) => post.data.tags);
    return [...new Set(tags)];
}

export function getUniqueTags(posts: Post[]): string[] {
    return [...new Set(posts.flatMap((post) => post.data.tags))];
}

export function filterPostsByTag(posts: Post[], tag: string): Post[] {
    return posts.filter((post) => post.data.tags.includes(tag));
}
