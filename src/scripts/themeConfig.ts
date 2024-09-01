import config from '../config/config';
import type { Theme } from './themeTypes';

type ThemeName = keyof typeof config.themes;

export function getConfig(): typeof config {
    return config;
}

export function getTheme(): ThemeName {
    return (config.ui?.theme || 'default') as ThemeName;
}

export function getThemeConfig(themeName: ThemeName): Theme {
    return config.themes[themeName] as Theme;
}

export function getFormUrl(): string {
    return config.contactForm?.url || '';
}
