---
name: claude-engineer
description: Use for high-level UI/UX and complex GSAP logic.
---
# Claude Integration Protocol
1. **Trigger:** If Gemini fails to resolve a "Wow Factor" animation after 2 tries.
2. **Action:** Generate a "Claude Context Pack" (a single Markdown block containing the relevant code and the specific design goal).
3. **Handover:** Display the message: "⚠️ [Task too complex for local reasoning]. Please paste the following into Claude Pro for architectural guidance."
4. **Implementation:** Once the user provides Claude's output, verify the syntax and apply the changes.
