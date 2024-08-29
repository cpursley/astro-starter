import config from '../config/config';

type ThemeName = keyof typeof config.themes;

export function getConfig(): typeof config {
    return config;
}

export function getTheme(): ThemeName {
    return (config.ui?.theme || 'default') as ThemeName;
}

export function getThemeConfig(themeName: ThemeName): typeof config.themes[ThemeName] {
    return config.themes[themeName];
}

export function getCurrentThemeAttributes(): typeof config.themes[ThemeName] {
    const currentTheme = getTheme();
    return getThemeConfig(currentTheme);
}

export function getFormUrl(): string {
    return config.form?.url || '';
}
