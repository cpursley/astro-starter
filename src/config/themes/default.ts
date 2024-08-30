export const defaultTheme = {
    colors: {
        primary: '#3b82f6',
        secondary: '#1d4ed8',
        accent: '#dbeafe',
        background: '#f9fafb',
        text: '#111827',
        muted: '#6b7280',
        footer: '#111827',
        heroBackground: '#f9fafb',
        heroText: '#111827',
        heroAccent: '#2563eb',
        buttonPrimary: '#2563eb',
        buttonPrimaryHover: '#1d4ed8',
        buttonSecondary: '#dbeafe',
        buttonSecondaryText: '#1d4ed8',
        buttonSecondaryHover: '#bfdbfe',
        success: '#34d399',
        danger: '#ef4444',
        warning: '#f59e0b',
        info: '#3b82f6',
    },
    fonts: {
        sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        heading: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFile, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    header: {
        style: 'gradient', // or 'solid'
        background: {
            gradient: {
                from: '#3b82f6',
                to: '#9333ea',
            },
            solid: '#3b82f6',
        },
        text: '#ffffff',
        textHover: '#bfdbfe',
        logo: {
            visible: true,
            src: '/logo.svg',
            alt: 'Logo',
            height: '8',
            width: 'auto',
        },
        navigation: {
            text: {
                class: {
                    color: 'text-white',
                    hover: 'hover:text-blue-200',
                    fontSize: 'text-sm',
                    fontWeight: 'font-medium',
                    textTransform: 'uppercase',
                    transition: 'transition duration-150 ease-in-out',
                    padding: 'py-2 md:py-0',
                    opts: 'tracking-wider'
                }
            }
        },
        siteTitle: {
            visible: true,
            class: {
                color: 'text-white',
                hover: 'hover:text-blue-200',
                fontSize: 'text-2xl',
                fontWeight: 'font-bold',
                textTransform: null,
                transition: 'transition duration-150 ease-in-out',
                padding: null,
                opts: null
            }
        },
    },
};
