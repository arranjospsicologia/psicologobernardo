import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { browser } from '$app/environment';

// Register plugins only on browser
if (browser) {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Initialize scroll reveal animation on an element
 */
export function scrollReveal(
    node: HTMLElement,
    options: {
        y?: number;
        duration?: number;
        delay?: number;
        start?: string;
    } = {}
) {
    if (!browser) return;

    const { y = 40, duration = 0.8, delay = 0, start = 'top 85%' } = options;

    gsap.from(node, {
        y,
        opacity: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: node,
            start
        }
    });

    return {
        destroy() {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === node) trigger.kill();
            });
        }
    };
}

/**
 * Stagger animation for lists/grids
 */
export function staggerReveal(
    node: HTMLElement,
    options: {
        childSelector?: string;
        y?: number;
        stagger?: number;
        duration?: number;
    } = {}
) {
    if (!browser) return;

    const { childSelector = ':scope > *', y = 30, stagger = 0.15, duration = 0.6 } = options;

    const children = node.querySelectorAll(childSelector);

    gsap.from(children, {
        y,
        opacity: 0,
        stagger,
        duration,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: node,
            start: 'top 85%'
        }
    });

    return {
        destroy() {
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === node) trigger.kill();
            });
        }
    };
}

/**
 * Hero entrance animation timeline
 */
export function heroAnimation(node: HTMLElement) {
    if (!browser) return;

    const tl = gsap.timeline();

    const eyebrow = node.querySelector('.hero-eyebrow');
    const title = node.querySelector('.hero-title');
    const description = node.querySelector('.hero-description');
    const buttons = node.querySelector('.hero-buttons');
    const image = node.querySelector('.hero-image');

    tl.from(eyebrow, { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' })
        .from(title, { x: -50, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')
        .from(description, { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .from(buttons, { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
        .from(
            image,
            { scale: 0.9, opacity: 0, duration: 0.8, ease: 'power2.out', filter: 'blur(10px)' },
            '-=0.6'
        );

    return {
        destroy() {
            tl.kill();
        }
    };
}
