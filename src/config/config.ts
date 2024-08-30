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
    form: {
        url: 'https://api.web3forms.com/submit',
        key: process.env.WEB3FORMS_KEY
    },
};

export default config;
