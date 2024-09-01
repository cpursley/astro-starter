import { themes } from './themes';

export const config = {
    site: {
        name: 'Astro Starter',
        site: 'https://yoursite.com',
        base: '/',
        trailingSlash: false,
    },
    ui: {
        theme: 'blue', // 'blue', 'emerald', 'pink', 'custom', etc
    },
    themes,
    navigation: {
        header: {
            style: 'gradient', // 'solid', 'gradient', 'translucent', or 'none'
            logo: {
                visible: true,
                src: '/logo.svg',
                alt: 'Logo',
                height: '8',
                width: 'auto',
            },
            siteTitle: {
                visible: true,
            },
            navItems: {
                links: [
                    { href: "/", text: "Home" },
                    { href: "/about", text: "About" },
                    { href: "/services", text: "Services" },
                    { href: "/contact", text: "Contact" },
                    { href: "/blog", text: "Blog" },
                ],
            },
        },
        footer: {
            logo: {
                visible: true,
                src: '/logo.svg',
                alt: 'Logo',
                height: '5',
                width: 'auto',
            },
            copyright: {
                visible: true,
            },
            navItems: {
                links: [
                    { href: "/contact", text: "Contact Us" },
                    { href: "/privacy", text: "Privacy Policy" },
                    { href: "/terms", text: "Terms of Service" },
                ],
            },
        },
    },
    contactForm: {
        url: 'https://api.web3forms.com/submit',
        key: process.env.WEB3FORMS_KEY
    },
};

export default config;
