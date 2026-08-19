---
title: Introduction to Understanding WCAG 2.2
description: How Understanding documents work.
---

> **Local copy for agent and developer use.** This is not the official specification.
>
> **Source:** [Introduction to Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/intro) — W3C WAI
>
> **Normative standard:** [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
>
> **Status:** Informative (non-normative extended commentary). Not an introductory document; it is a detailed technical description.
>
> Copyright © World Wide Web Consortium. https://www.w3.org/copyright/document-license-2023/
>
> This software or document includes material copied from or derived from [Introduction to Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/intro).

Understanding WCAG 2.2 is the essential guide to using the Recommendation. The normative definition and requirements are in WCAG 2.2 itself. Understanding provides commentary on each guideline and success criterion: intent, how they work together, examples of sufficient techniques, and links to technique write-ups.

For an introduction, use the [WCAG Overview](https://www.w3.org/WAI/standards-guidelines/wcag/) and [overview.md](overview/).

## How Understanding is organized

There is an *Understanding Guideline X.X* section for each guideline (intent plus advisory techniques that are not tied to a single criterion).

Then an *Understanding success criterion X.X.X* section for each criterion, containing:

- the success criterion as it appears in WCAG 2.2
- intent
- benefits (how it helps people with disabilities)
- examples
- related resources
- sufficient techniques
- common failures
- advisory techniques (do not affect the claimed conformance level)
- key terms from the WCAG 2.2 glossary

Each guideline and criterion in WCAG 2.2 links to its Understanding section. Technique documents are linked from there.

All Understanding docs: https://www.w3.org/WAI/WCAG22/Understanding/

## Layers of guidance

### Guidelines

Thirteen guidelines under the four principles. A list is in the [WCAG 2.2 table of contents](https://www.w3.org/TR/WCAG22/#toc). Objective: content is directly accessible to as many people as possible, and can be re-presented to match different sensory, physical, and cognitive abilities.

### Success criteria

Testable, technology-neutral statements that are true or false for given content. Similar to WCAG 1.0 “checkpoints.” Some testing can be automated; others require human testers for part or all of the test.

Satisfying success criteria does not guarantee usability for people with a wide variety of disabilities. Professional qualitative review and usability testing (including users with disabilities) are recommended.

### Sufficient techniques, advisory techniques, and failures

See [Understanding Techniques for WCAG Success Criteria](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques). Techniques are informative. Sufficient techniques are examples; other techniques that meet the criterion are allowed.

## Four principles

See [principles.md](principles/). POUR: Perceivable, Operable, Understandable, Robust.

## Agent usage

When reviewing a component, load **only** the Understanding pages for criteria that apply to that component under the active profile. Do not load all Understanding docs at once.

Example: a login form under `wcag-22-aa` typically needs 1.3.1, 1.3.5, 1.4.3, 1.4.11, 2.1.1, 2.4.6, 2.4.7, 2.5.3, 3.2.2, 3.3.1, 3.3.2, 3.3.8, 4.1.2 — not the media or AAA set.
