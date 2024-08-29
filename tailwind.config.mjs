import typography from '@tailwindcss/typography';
import { getThemeConfig, getTheme } from './src/scripts/themeConfig';

const themeConfig = getThemeConfig(getTheme());

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: themeConfig.colors.primary,
				secondary: themeConfig.colors.secondary,
				accent: themeConfig.colors.accent,
				background: themeConfig.colors.background,
				text: themeConfig.colors.text,
				muted: themeConfig.colors.muted,
				'header-bg-gradient-from': themeConfig.header.background.gradient.from,
				'header-bg-gradient-to': themeConfig.header.background.gradient.to,
				'header-bg-solid': themeConfig.header.background.solid,
				'header-text': themeConfig.header.text,
				'header-text-hover': themeConfig.header.textHover,
				footer: themeConfig.colors.footer,
				'hero-bg': themeConfig.colors.heroBackground,
				'hero-text': themeConfig.colors.heroText,
				'hero-accent': themeConfig.colors.heroAccent,
				'btn-primary': themeConfig.colors.buttonPrimary,
				'btn-primary-hover': themeConfig.colors.buttonPrimaryHover,
				'btn-secondary': themeConfig.colors.buttonSecondary,
				'btn-secondary-text': themeConfig.colors.buttonSecondaryText,
				'btn-secondary-hover': themeConfig.colors.buttonSecondaryHover,
			},
			fontFamily: {
				sans: [themeConfig.fonts.sans],
				serif: [themeConfig.fonts.serif],
				heading: [themeConfig.fonts.heading],
			},
		},
	},
	plugins: [typography]
};
