import type { CollectionEntry } from 'astro:content';

export function filterPublishedPosts<T extends { draft?: boolean }>(posts: CollectionEntry<T>[]): CollectionEntry<T>[] {
    return posts.filter((post) => !post.data.draft);
}

export function sortPostsByDate<T extends { pubDate: Date }>(posts: CollectionEntry<T>[]): CollectionEntry<T>[] {
    return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function getAllTags<T extends { tags: string[] }>(posts: CollectionEntry<T>[]): string[] {
    const tags = posts.flatMap((post) => post.data.tags);
    return [...new Set(tags)];
}

export function getUniqueTags<T extends { tags: string[] }>(posts: CollectionEntry<T>[]): string[] {
    return [...new Set(posts.flatMap((post) => post.data.tags))];
}

export function filterPostsByTag<T extends { tags: string[] }>(posts: CollectionEntry<T>[], tag: string): CollectionEntry<T>[] {
    return posts.filter((post) => post.data.tags.includes(tag));
}
