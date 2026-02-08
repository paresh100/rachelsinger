---
name: security-audit
description: Scans for vulnerabilities. Run before every "Commit" or "Deploy" task.
---
# Security Protocols
1. **Dependency Check:** Run `npm audit` and look for CVEs.
2. **Secret Detection:** Scan for hardcoded API keys or `.env` files being tracked in Git.
3. **OWASP Focus:** Ensure all user inputs are sanitized and no `dangerouslySetInnerHTML` is used without a sanitizer.
