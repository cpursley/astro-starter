import fs from 'fs';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const configPath = path.join(__dirname, '..', '..', 'config.yaml');
const configFile = fs.readFileSync(configPath, 'utf8');
const config = yaml.load(configFile) as Record<string, any>;

export function getConfig(): Record<string, any> {
    return config;
}

export function getTheme(): string {
    return config.ui?.theme || 'default';
}

export function getThemeConfig(themeName: string): Record<string, any> {
    return config.themes?.[themeName] || {};
}

export function getCurrentThemeAttributes(): Record<string, any> {
    const currentTheme = getTheme();
    return getThemeConfig(currentTheme);
}

export function getFormUrl(): string {
    return config.form?.url || '';
}