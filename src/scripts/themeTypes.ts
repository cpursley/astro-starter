export type Theme = {
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        text: string;
        muted: string;
        footer: string;
        heroBackground: string;
        heroText: string;
        heroAccent: string;
        buttonPrimary: string;
        buttonPrimaryHover: string;
        buttonSecondary: string;
        buttonSecondaryText: string;
        buttonSecondaryHover: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
    };
    fonts: {
        sans: string;
        serif: string;
        heading: string;
    };
    header: {
        style: 'gradient' | 'solid';
        background: {
            gradient: {
                from: string;
                to: string;
            };
            solid: string;
        };
        text: string;
        textHover: string;
        logo: {
            visible: boolean,
            src: string;
            alt: string;
            height: string;
            width: string;
        };
        navigation: {
            text: {
                class: {
                    color: string | null;
                    hover: string | null;
                    fontSize: string | null;
                    fontWeight: string | null;
                    textTransform: string | null;
                    transition: string | null;
                    padding: string | null;
                    opts: string | null;
                }
            }
        };
        siteTitle: {
            visible: boolean;
            class: {
                color: string | null;
                hover: string | null;
                fontSize: string | null;
                fontWeight: string | null;
                textTransform: string | null;
                transition: string | null;
                padding: string | null;
                opts: string | null;
            }
        };
    };
};
