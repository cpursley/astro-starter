import typography from '@tailwindcss/typography';
import { getThemeConfig, getTheme } from './src/scripts/themeConfig';

const themeConfig = getThemeConfig(getTheme());
const { colors, fonts, components } = themeConfig;

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: colors.primary[50],
					100: colors.primary[100],
					200: colors.primary[200],
					300: colors.primary[300],
					400: colors.primary[400],
					500: colors.primary[500],
					600: colors.primary[600],
					700: colors.primary[700],
					800: colors.primary[800],
					900: colors.primary[900],
				},
				secondary: {
					50: colors.secondary[50],
					100: colors.secondary[100],
					200: colors.secondary[200],
					300: colors.secondary[300],
					400: colors.secondary[400],
					500: colors.secondary[500],
					600: colors.secondary[600],
					700: colors.secondary[700],
					800: colors.secondary[800],
					900: colors.secondary[900],
				},
				neutral: {
					50: colors.neutral[50],
					100: colors.neutral[100],
					200: colors.neutral[200],
					300: colors.neutral[300],
					400: colors.neutral[400],
					500: colors.neutral[500],
					600: colors.neutral[600],
					700: colors.neutral[700],
					800: colors.neutral[800],
					900: colors.neutral[900],
					950: colors.neutral[950],
				},
				accent: colors.accent,
			},
			fontFamily: {
				sans: [fonts.sans],
				serif: [fonts.serif],
				heading: [fonts.heading],
			},
		},
	},
	plugins: [
		typography,
		function ({ addComponents, theme }) {
			addComponents({
				'.header-site-title': {
					fontSize: theme(components.header.siteTitle.fontSize),
					fontWeight: theme(components.header.siteTitle.fontWeight),
					color: theme(components.header.siteTitle.textColor),
					transition: 'color 200ms',
					'&:hover': {
						color: theme(components.header.siteTitle.hoverColor),
					},
				},
				'.header-nav-item': {
					paddingTop: theme(components.header.navItems.spacing.split(' ')[0]),
					paddingBottom: theme(components.header.navItems.spacing.split(' ')[0]),
					fontSize: theme(components.header.navItems.fontSize),
					fontWeight: theme(components.header.navItems.fontWeight),
					textTransform: components.header.navItems.textTransform,
					color: theme(components.header.navItems.textColor),
					'&:hover': {
						color: theme(components.header.navItems.hoverColor),
					},
					'@screen md': {
						paddingTop: theme(components.header.navItems.spacing.split(' ')[1].split(':')[1]),
						paddingBottom: theme(components.header.navItems.spacing.split(' ')[1].split(':')[1]),
					},
				},
				'.footer': {
					padding: `${theme(components.footer.style.spacing)} 0`,
					backgroundColor: theme(components.footer.style.backgroundColor),
				},
				'.footer-copyright': {
					fontSize: theme(components.footer.copyright.fontSize),
					fontWeight: theme(components.footer.copyright.fontWeight),
					color: theme(components.footer.copyright.textColor),
				},
				'.footer-nav-item': {
					fontSize: theme(components.footer.navItems.fontSize),
					fontWeight: theme(components.footer.navItems.fontWeight),
					textTransform: components.footer.navItems.textTransform,
					color: theme(components.footer.navItems.textColor),
					'&:hover': {
						color: theme(components.footer.navItems.hoverColor),
					},
				},
			});
		}
	],
};
