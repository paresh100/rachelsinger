---
name: seo-growth
description: Optimizes site for Google SGE, Perplexity, and traditional SERPs. 
---
# SEO & Growth Protocols

## 1. Technical Foundations
* **Sitemap:** Generate a dynamic `sitemap.xml` that auto-updates on build.
* **Robots.txt:** Include "Allow" for AI crawlers (GPTBot, Google-Extended, PerplexityBot).
* **Speed:** Ensure a Lighthouse score of 95+ (especially LCP and CLS).

## 2. On-Page Excellence
* **Heading Hierarchy:** Strictly enforce H1 -> H2 -> H3 progression. 
* **Semantic HTML:** Use `<article>`, `<section>`, and `<aside>` to define content blocks for RAG (Retrieval-Augmented Generation) systems.
* **Alt Text:** Use the Vision API to generate descriptive alt text for all images.

## 3. AEO (Answer Engine Optimization)
* **FAQ Schema:** Implement JSON-LD for every page to capture "People Also Ask" snippets.
* **Citation Readiness:** Structure "Key Takeaways" in `<div>` blocks with clear IDs so AI agents can cite specific sections.
