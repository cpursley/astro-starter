export function initSmoothScroll(selector: string = 'a[href^="#"]') {
    document.addEventListener('DOMContentLoaded', () => {
        const links = document.querySelectorAll(selector);

        links.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = (link as HTMLAnchorElement).getAttribute('href');
                if (targetId) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    });
}
