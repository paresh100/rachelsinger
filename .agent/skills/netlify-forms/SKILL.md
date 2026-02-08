---
name: netlify-forms
description: Configures Netlify-compliant forms with AJAX submission and spam protection.
---
# Netlify Form Protocols

## 1. The "Shadow Form" Requirement
Next.js 15+ renders components dynamically. Netlify needs a static HTML file in `/public` to "see" the form during deployment.
- **Action:** Always create/update `public/__forms.html` with a hidden version of every form used in the app.

## 2. Form Attributes
Every form must include:
- `data-netlify="true"`
- `name="[form-name]"`
- A hidden input: `<input type="hidden" name="form-name" value="[form-name]" />`

## 3. Spam Protection
- **Honeypot:** Add `data-netlify-honeypot="bot-field"` to the form tag and a hidden `bot-field` input.
- **reCAPTCHA:** If high security is requested, add `data-netlify-recaptcha="true"`.

## 4. AJAX Submission Logic
Use `fetch` with `application/x-www-form-urlencoded`. 
- **Constraint:** Do not send JSON. Netlify only accepts URL-encoded strings for forms.
