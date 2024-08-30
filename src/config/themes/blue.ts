export const blueTheme = {
    colors: {
        primary: {           // based on tailwind colors
            50: '#eff6ff',   // blue-50
            100: '#dbeafe',  // blue-100
            200: '#bfdbfe',  // blue-200
            300: '#93c5fd',  // blue-300
            400: '#60a5fa',  // blue-400
            500: '#3b82f6',  // blue-500
            600: '#2563eb',  // blue-600
            700: '#1d4ed8',  // blue-700
            800: '#1e40af',  // blue-800
            900: '#1e3a8a',  // blue-900
        },
        secondary: {
            50: '#faf5ff',   // purple-50
            100: '#f3e8ff',  // purple-100
            200: '#e9d5ff',  // purple-200
            300: '#d8b4fe',  // purple-300
            400: '#c084fc',  // purple-400
            500: '#a855f7',  // purple-500
            600: '#9333ea',  // purple-600
            700: '#7e22ce',  // purple-700
            800: '#6b21a8',  // purple-800
            900: '#581c87',  // purple-900
        },
    },
    fonts: {
        sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        heading: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFile, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    header: {
        style: 'gradient', // 'gradient' or 'solid'
        logo: {
            visible: true,
            src: '/logo-blue.svg',
            alt: 'Logo Blue',
            height: '8',
            width: 'auto',
        },
        siteTitle: {
            visible: true,
        },
    },
};
