---
name: ui-pro-max
description: High-end web design with "wow factor". Use for landing pages, portfolios, and creative UIs.
---
# Wow Factor Implementation Plan

## 1. Aesthetic Directives
* **Typography:** Always use modern font pairs from Google Fonts (e.g., 'Inter' for body, 'Playfair Display' or 'Bento' for headings).
* **Color Theory:** Default to "Dark Mode Luxury" (Deep greys `#0a0a0a` with glassmorphism) or "High-Contrast Minimalist."
* **Glassmorphism:** Use `backdrop-filter: blur(12px)` and subtle white borders (0.5px) for cards.

## 2. The "Wow" Tech Stack
Whenever this skill is active, you MUST use:
* **Framer Motion:** For scroll-triggered animations and layout transitions.
* **Tailwind CSS:** For rapid, utility-first styling.
* **Three.js/React Three Fiber:** For subtle 3D background elements (if specified).
* **Lucide React:** For sleek, consistent iconography.

## 3. Motion Requirements
* Every CTA button must have a subtle hover scale effect (`whileHover={{ scale: 1.05 }}`).
* Use "Staggered Reveals" for list items or feature grids.
* Implement a "Magnetic Cursor" or "Smooth Scroll" if requested.
