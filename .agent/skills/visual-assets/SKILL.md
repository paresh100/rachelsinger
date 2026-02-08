---
name: visual-assets
description: Generates high-fidelity images, UI mockups, and brand icons using Nano Banana Pro.
---
# Image Generation Protocols

## 1. Tooling: Nano Banana Pro
* Always use **Nano Banana Pro** (Thinking model) for assets requiring high-fidelity text or complex composition.
* **Resolution:** Default to 2K (2048x2048) for hero assets, 512x512 for icons.
* **Consistency:** Use "Reference Images" from the `./assets/brand/` folder to ensure character and style consistency.

## 2. Prompting Directives
* **UI Mockups:** Include "clean minimalist UI, high-contrast, 4k, professional lighting" in the prompt.
* **Iconography:** Use "flat vector style, monochrome, transparent background, SVG-ready" for icons.

## 3. Workflow
1. Generate an image based on the user's "Wow Factor" requirements.
2. Use the **SynthID** verification script to ensure the asset is watermarked.
3. Place the final asset in `public/assets/generated/`.
