import type { Theme } from '@/scripts/themeTypes';

type ClassObject = {
    [key: string]: string | null | undefined;
};

export function createClass(classObject: ClassObject): string {
    return Object.values(classObject)
        .filter((value): value is string =>
            typeof value === 'string' && value.trim() !== ''
        )
        .join(' ');
}

export function navTextClass(navText: Theme['header']['navigation']['text']['class']): string {
    return createClass(navText);
}

export function siteTitleClass(siteTitle: Theme['header']['siteTitle']['class']): string {
    return createClass(siteTitle);
}
