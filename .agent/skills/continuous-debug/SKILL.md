---
name: continuous-debug
description: Background testing and visual verification using Vitest and Playwright.
---
# Continuous Debugging Protocol

## 1. Headless Verification
- After every UI change, launch the integrated browser in headless mode.
- Check the console for any `404` assets or `Hydration` errors.

## 2. Visual Regression
- Compare the current render against the `visual-assets` moodboard. 
- Ensure animations (GSAP/Framer) are not dropping frames (maintain 60fps).

## 3. TDD Enforcement
- If a new function is added, automatically generate a `.test.ts` file in the `/tests` directory and ensure it passes before reporting the task as "Complete."
