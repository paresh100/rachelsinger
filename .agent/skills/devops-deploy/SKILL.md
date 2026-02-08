---
name: devops-deploy
description: Handles CI/CD and production deployment. Use when the project is ready for staging/prod.
---
# Deployment Workflow
1. **Pre-flight:** Run `npm run build` and `security-audit` skill.
2. **Environment:** Verify all production keys are in the Antigravity Secret Store.
3. **Platform:** Default to **Google Cloud Run** via `gcloud` or **Vercel** if it's a Next.js project.
4. **Artifacts:** Capture a screenshot of the successful deployment and provide the live URL.
