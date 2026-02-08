---
name: senior-engineer
description: Architect-level code standards. Use for backend logic, API design, and refactoring.
---
# Engineering Standards
1. **TDD First:** Before writing a function, write a Vitest or Jest test case.
2. **Clean Architecture:** Keep business logic in `services/`, UI in `components/`, and data types in `types/`.
3. **Self-Correction:** If a build fails, analyze the stack trace, fix it, and retry once before reporting.
4. **Performance:** Use `React.memo` and `useCallback` for any component involving GSAP to prevent memory leaks.
