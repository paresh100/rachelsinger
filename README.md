# Master Agentic Template (Paid Multi-Model) 🚀

## 🤖 Model Roles
- **Gemini (Native):** Terminal control, file management, and browser testing.
- **Claude (Manual/CLI):** UI/UX design, GSAP animations, and "Wow Factor" polish.
- **ChatGPT (Manual):** Deep logic auditing, SEO keyword strategy, and technical writing.

## 🛠 Project Skills (.agent/skills/)
- `creative-ui`: Motion standards (GSAP/Framer).
- `claude-engineer`: Bridge for Anthropic reasoning.
- `gpt-logic-audit`: Bridge for OpenAI logic.
- `seo-growth`: Google SGE and AI Answer Engine optimization.
- `continuous-debug`: Background testing and visual verification.
- `senior-engineer`: Logic, API, & Clean Code.
- `visual-assets`: AI Asset Generation.
- `cinematic-video`: Background Loops.
- `devops-deploy`: Automated Launch.
- `netlify-forms`: Spam-proof Contact Forms.
- `google-drive`: File Management & Organization.
- `google-sheets`: Data Architecture & Reporting.

## 📥 Deployment Workflow
1. Gemini builds the scaffold.
2. User uses Claude for the "Wow" animations.
3. Gemini verifies the build and SEO.
4. Gemini deploys to Cloud Run/Vercel.

## Project Overview
This is a high-performance Next.js 14+ application built for Rachel Singer. It utilizes a sophisticated agentic workflow for continuous deployment and optimization.

## 🛠 Project Execution Rules (Loki Mode)

To maintain the "Whole Shebang" standard, the following rules are hardcoded for this workspace:

*   **Plan Before Code:** The agent MUST generate an Implementation Plan artifact for any change affecting more than two files.
*   **Visual Verification:** Every UI update MUST be followed by a Browser Recording or Screenshot artifact to verify the "Wow Factor."
*   **Performance Guardrails:** No animation may result in a Lighthouse performance score below 90.
*   **No Spaghetti:** Logic belongs in `/services`, visuals in `/components`, and motion configurations in `/styles/motion`.

## 🏗 Directory Structure

```plaintext
├── .agent/
│   └── skills/           # The "Brain" (Cloned AI Capabilities)
├── assets/
│   └── branding/         # Reference images for Nano Banana
├── src/
│   ├── components/       # UI (Framer Motion)
│   ├── services/         # Business Logic
│   └── styles/           # Tailwind & GSAP Configs
├── public/               # Generated Veo Videos & Assets
└── .env.example          # Template for required API keys
```

## 🚀 How to Initialize a New Project

When you clone this folder for a new client, give the following Activation Prompt to the Antigravity Agent:

> "Loki Mode: Scan the .agent/skills directory. Update the site name to '[New Name]' and use the visual-assets skill to generate a new brand-aligned hero image. Finally, run the senior-engineer skill to verify the dependency tree."

## 📧 Notification & Deployment

*   **Notifications:** Uses the email-notifier skill. Important build statuses or deployment links will be sent to the configured user email.
*   **Deployment:** Trigger via `/deploy` workflow. This runs a `security-audit` followed by a push to production.
