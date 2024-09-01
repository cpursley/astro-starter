export const emeraldTheme = {
    colors: {
        primary: {           // based on tailwind colors
            50: '#ecfdf5',   // emerald-50
            100: '#d1fae5',  // emerald-100
            200: '#a7f3d0',  // emerald-200
            300: '#6ee7b7',  // emerald-300
            400: '#34d399',  // emerald-400
            500: '#10b981',  // emerald-500
            600: '#059669',  // emerald-600
            700: '#047857',  // emerald-700
            800: '#065f46',  // emerald-800
            900: '#064e3b',  // emerald-900
        },
        secondary: {
            50: '#fff7ed',   // orange-50
            100: '#ffedd5',  // orange-100
            200: '#fed7aa',  // orange-200
            300: '#fdba74',  // orange-300
            400: '#fb923c',  // orange-400
            500: '#f97316',  // orange-500
            600: '#ea580c',  // orange-600
            700: '#c2410c',  // orange-700
            800: '#9a3412',  // orange-800
            900: '#7c2d12',  // orange-900
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
        accent: '#10b981',
    },
    fonts: {
        sans: '"Poppins", sans-serif',
        serif: '"Merriweather", serif',
        heading: '"Montserrat", sans-serif',
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
