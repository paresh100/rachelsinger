---
name: creative-ui
description: Professional-grade web animation using GSAP and Framer Motion. Use for high-end landing pages, interactive storytelling, and "Awwwards" style sites.
---

# High-End Animation Strategy

## 1. Tool Selection Logic
* **Use Framer Motion for:** Component-level entry/exit, layout changes (`layout` prop), and simple hover/tap interactions.
* **Use GSAP (GreenSock) for:** Complex multi-step timelines, scroll-driven scrubbing (ScrollTrigger), SVG morphing, and heavy performance-critical animations.

## 2. Design Principles (The "Wow" Factor)
* **Staggering:** Never animate a list all at once. Use `.stagger` in GSAP or `staggerChildren` in Framer Motion.
* **Easing:** Avoid "linear". Use `power4.out` or `expo.out` for high-end, snappy feels.
* **Glassmorphism:** Apply `backdrop-filter: blur(15px)` to overlays.
* **Micro-interactions:** Every button should have a `whileHover={{ scale: 1.02 }}` and `whileTap={{ scale: 0.98 }}`.

## 3. Implementation Patterns

### GSAP ScrollTrigger Template
```typescript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Agent must use gsap.context() for React cleanup
useEffect(() => {
  let ctx = gsap.context(() => {
    gsap.to(".hero-text", {
      scrollTrigger: {
        trigger: ".hero",
        scrub: true,
        start: "top top",
        pin: true
      },
      y: -200,
      opacity: 0
    });
  });
  return () => ctx.revert();
}, []);
```
