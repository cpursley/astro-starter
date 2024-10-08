type ColorScale = {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};

type ExtendedColorScale = ColorScale & {
    950: string;
};

export type Theme = {
    colors: {
        primary: ColorScale,
        secondary: ColorScale,
        neutral: ExtendedColorScale,
        accent: string;
    };
    fonts: {
        sans: string;
        serif: string;
        heading: string;
    };
    components: {
        header: {
            siteTitle: {
                fontSize: string;
                fontWeight: string;
                textColor: string;
                hoverColor: string;
            };
            navItems: {
                spacing: string;
                fontSize: string;
                fontWeight: string;
                textTransform: string;
                textColor: string;
                hoverColor: string;
            };
        };
        footer: {
            style: {
                spacing: string;
                backgroundColor: string;
            };
            copyright: {
                fontSize: string;
                fontWeight: string;
                textColor: string;
            };
            navItems: {
                spacing: string;
                fontSize: string;
                fontWeight: string;
                textTransform: string;
                textColor: string;
                hoverColor: string;
            };
        };
    };
};
