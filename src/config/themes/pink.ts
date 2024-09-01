export const pinkTheme = {
    colors: {
        primary: {           // based on tailwind colors
            50: '#fdf2f8',   // pink-50
            100: '#fce7f3',  // pink-100
            200: '#fbcfe8',  // pink-200
            300: '#f9a8d4',  // pink-300
            400: '#f472b6',  // pink-400
            500: '#ec4899',  // pink-500
            600: '#db2777',  // pink-600
            700: '#be185d',  // pink-700
            800: '#9d174d',  // pink-800
            900: '#831843',  // pink-900
        },
        secondary: {         // complementary color: gold/amber
            50: '#fffbeb',   // amber-50
            100: '#fef3c7',  // amber-100
            200: '#fde68a',  // amber-200
            300: '#fcd34d',  // amber-300
            400: '#fbbf24',  // amber-400
            500: '#f59e0b',  // amber-500
            600: '#d97706',  // amber-600
            700: '#b45309',  // amber-700
            800: '#92400e',  // amber-800
            900: '#78350f',  // amber-900
        },
        neutral: {
            50: '#f8fafc',   // slate-50
            100: '#f1f5f9',  // slate-100
            200: '#e2e8f0',  // slate-200
            300: '#cbd5e1',  // slate-300
            400: '#94a3b8',  // slate-400
            500: '#64748b',  // slate-500
            600: '#475569',  // slate-600
            700: '#334155',  // slate-700
            800: '#1e293b',  // slate-800
            900: '#0f172a',  // slate-900
            950: '#020617',  // slate-950
        },
        accent: '#10b981',   // emerald-500
    },
    fonts: {
        sans: '"Lato", "Helvetica Neue", Arial, sans-serif',
        serif: '"Playfair Display", Georgia, "Times New Roman", serif',
        heading: '"Cormorant Garamond", Georgia, serif',
    },
    components: {
        header: {
            siteTitle: {
                fontSize: 'fontSize.2xl',
                fontWeight: 'fontWeight.bold',
                textColor: 'colors.neutral.50',
                hoverColor: 'colors.primary.100',
            },
            navItems: {
                spacing: 'spacing.2 md:spacing.0',
                fontSize: 'fontSize.sm',
                fontWeight: 'fontWeight.medium',
                textTransform: 'uppercase',
                textColor: 'colors.neutral.50',
                hoverColor: 'colors.primary.100',
            },
        },
        footer: {
            style: {
                spacing: 'spacing.4',
                backgroundColor: 'colors.neutral.900',
            },
            copyright: {
                fontSize: 'fontSize.sm',
                fontWeight: 'fontWeight.normal',
                textColor: 'colors.neutral.200',
            },
            navItems: {
                spacing: 'spacing.4',
                fontSize: 'fontSize.sm',
                fontWeight: 'fontWeight.normal',
                textTransform: 'none',
                textColor: 'colors.neutral.200',
                hoverColor: 'colors.neutral.50',
            },
        },
    },
};

