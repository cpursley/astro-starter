export const config = {
    site: {
        name: 'Astro Starter',
        site: 'https://yoursite.com',
        base: '/',
        trailingSlash: false,
    },
    form: {
        url: 'https://webhook.site/a03658a2-c312-4975-a424-cb2c68721174',
    },
    navigation: {
        header: {
            items: [
                { href: "/", text: "Home" },
                { href: "/about", text: "About" },
                { href: "/services", text: "Services" },
                { href: "/contact", text: "Contact" },
                { href: "/blog", text: "Blog" },
            ],
        },
        footer: {
            items: [
                { href: "/contact-us", text: "Contact Us" },
            ],
        },
    },
    ui: {
        theme: 'default',
    },
    themes: {
        default: {
            colors: {
                primary: '#3b82f6',
                secondary: '#1d4ed8',
                accent: '#dbeafe',
                background: '#f9fafb',
                text: '#111827',
                muted: '#6b7280',
                headerFrom: '#3b82f6',
                headerTo: '#9333ea',
                headerSolid: '#3b82f6',
                headerStyle: 'gradient', // 'gradient' or 'solid'
                footer: '#111827',
                heroBackground: '#f9fafb',
                heroText: '#111827',
                heroAccent: '#2563eb',
                buttonPrimary: '#2563eb',
                buttonPrimaryHover: '#1d4ed8',
                buttonSecondary: '#dbeafe',
                buttonSecondaryText: '#1d4ed8',
                buttonSecondaryHover: '#bfdbfe',
            },
            fonts: {
                sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                heading: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFile, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            },
        },
    },
};

export default config;
