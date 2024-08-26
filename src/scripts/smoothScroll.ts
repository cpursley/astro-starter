// src/scripts/smoothScroll.ts

export function initSmoothScroll() {
    document.addEventListener('DOMContentLoaded', () => {
        const tocLinks = document.querySelectorAll('.toc a[href^="#"]');

        tocLinks.forEach((link) => {
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
