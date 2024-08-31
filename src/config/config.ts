import { themes } from './themes';

export const config = {
    site: {
        name: 'Astro Starter',
        site: 'https://yoursite.com',
        base: '/',
        trailingSlash: false,
    },
    ui: {
        theme: 'blue', // 'blue', 'emerald', 'custom', etc
    },
    themes,
    navigation: {
        header: {
            style: 'gradient', // 'solid', 'gradient', 'translucent', or 'none'
            logo: {
                visible: true,
                src: '/logo-blue.svg',
                alt: 'Logo Blue',
                height: '8',
                width: 'auto',
            },
            siteTitle: {
                visible: true,
                style: {
                    fontSize: "text-2xl",
                    fontWeight: "font-bold",
                    textColor: "text-gray-50",
                    hoverColor: "hover:text-primary-100",
                },
            },
            navItems: {
                style: {
                    spacing: "py-2 md:py-0",
                    fontSize: "text-sm",
                    fontWeight: "font-medium",
                    textTransform: "uppercase",
                    textColor: "text-gray-50",
                    hoverColor: "hover:text-primary-100",
                },
                items: [
                    { href: "/", text: "Home" },
                    { href: "/about", text: "About" },
                    { href: "/services", text: "Services" },
                    { href: "/contact", text: "Contact" },
                    { href: "/blog", text: "Blog" },
                ],
            },
        },
        footer: {
            items: [
                { href: "/contact-us", text: "Contact Us" },
            ],
        },
    },
    form: {
        url: 'https://api.web3forms.com/submit',
        key: process.env.WEB3FORMS_KEY
    },
};

export default config;
