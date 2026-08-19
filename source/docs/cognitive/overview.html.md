---
title: Cognitive accessibility at W3C
description: What WCAG covers and what it does not for cognitive accessibility.
---

> **Local copy for agent and developer use.** This is not the official specification.
>
> **Sources:**
> - [Cognitive Accessibility at W3C](https://www.w3.org/WAI/cognitive/) — W3C WAI
> - [About Supplemental Guidance](https://www.w3.org/WAI/WCAG2/supplemental/about/)
>
> **Status:** Informative. Supplemental guidance is **not required** to meet WCAG. W3C encourages following it because the issues are essential for some people.
>
> Copyright © World Wide Web Consortium. https://www.w3.org/copyright/document-license-2023/
>
> This software or document includes material copied from or derived from [Cognitive Accessibility at W3C](https://www.w3.org/WAI/cognitive/) and [About Supplemental Guidance](https://www.w3.org/WAI/WCAG2/supplemental/about/).

Cognitive and learning disabilities affect perception, memory, language, attention, problem solving, and comprehension. Terms vary: intellectual and developmental disabilities, ADHD, autism, dementia, dyslexia, and others.

Technology can help people navigate differently, choose text or audio, and change presentation. Designers can also **create** barriers. Examples: [How People with Disabilities Use the Web — Cognitive and learning](https://www.w3.org/WAI/people-use-web/abilities-barriers/#cognitive).

## What WCAG already covers

WCAG includes requirements that help cognitive accessibility, especially:

| Guideline | Focus |
| --- | --- |
| [1.3 Adaptable](https://www.w3.org/WAI/WCAG22/Understanding/adaptable) | Present content other ways without losing structure |
| [1.4 Distinguishable](https://www.w3.org/WAI/WCAG22/Understanding/distinguishable) | See and hear; separate foreground from background |
| [2.2 Enough Time](https://www.w3.org/WAI/WCAG22/Understanding/enough-time) | Time to read and use |
| [2.4 Navigable](https://www.w3.org/WAI/WCAG22/Understanding/navigable) | Find content; know where you are |
| [3.1 Readable](https://www.w3.org/WAI/WCAG22/Understanding/readable) | Readable, understandable text |
| [3.2 Predictable](https://www.w3.org/WAI/WCAG22/Understanding/predictable) | Appear and operate predictably |
| [3.3 Input Assistance](https://www.w3.org/WAI/WCAG22/Understanding/input-assistance) | Avoid and correct mistakes |

WCAG 2.1 and 2.2 added more in this area (input purpose, text spacing, consistent help, redundant entry, accessible authentication). Understanding documents and advisory techniques add further detail.

**WCAG still does not address every user need** for cognitive and learning disabilities. WCAG 2.1’s abstract states that explicitly.

## Supplemental guidance (beyond the standard)

Two official layers:

1. **[Cognitive Accessibility Guidance](https://www.w3.org/WAI/WCAG2/supplemental/#cognitiveaccessibilityguidance)** — short objectives and design patterns (what to do, how it helps, examples).
2. **[Making Content Usable](https://www.w3.org/TR/coga-usable/)** (“Content Usable”) — W3C Working Group Note, 29 April 2021. Longer: aims, the same patterns, involving users, personas, user needs. Local: [coga-usable.md](coga-usable/).

Following this is **not** required for a WCAG, 508, or ADA Title II claim. It is the right next load for an agent after the profile’s success criteria pass, especially for forms, onboarding, help, and language.

Ongoing work:

- [COGA Task Force](https://www.w3.org/WAI/GL/task-forces/coga/)
- [WAI-Adapt](https://www.w3.org/WAI/adapt/) (personalization)

Comments on Content Usable: https://github.com/w3c/coga/issues/new or public-coga-comments@w3.org
