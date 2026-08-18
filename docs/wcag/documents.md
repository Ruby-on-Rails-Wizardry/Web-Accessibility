# The WCAG 2 documents

> **Local copy for agent and developer use.** This is not the official specification.
>
> **Source:** [The WCAG 2 Documents](https://www.w3.org/WAI/standards-guidelines/wcag/docs/) — W3C WAI
>
> **Status:** Informative. Only the WCAG technical standard includes requirements (normative). Supporting materials do not set or change requirements and are not required for conformance.
>
> Copyright © World Wide Web Consortium. https://www.w3.org/copyright/document-license-2023/
>
> This software or document includes material copied from or derived from [The WCAG 2 Documents](https://www.w3.org/WAI/standards-guidelines/wcag/docs/).

When developing content and tools, most people should use the supporting documents below, **not** the Recommendation text itself. Agents should do the same: load Understanding and Techniques for the criteria in the active profile, and only open the Recommendation when the exact normative wording is needed.

## The standard (normative)

[WCAG 2.2](https://www.w3.org/TR/WCAG22/) is the stable, referenceable technical standard. Overview: [overview.md](overview.md).

## Quick Reference / checklist

**[How to Meet WCAG 2 (Quick Reference)](https://www.w3.org/WAI/WCAG22/quickref/)** is the key designer/developer resource. It includes all guidelines and success criteria and is essentially the WCAG 2 checklist. Filters exist for role, topic, technology (HTML, CSS, ARIA), and Level A / AA / AAA.

## Understanding (informative)

A guide to implementing WCAG. For each guideline and success criterion:

- intent
- how it helps people with different disabilities
- browser and assistive technology support notes
- examples
- resources

Lists:

- [About Understanding](https://www.w3.org/WAI/WCAG22/Understanding/intro) — local: [understanding-intro.md](understanding-intro.md)
- [2.2 Understanding list](https://www.w3.org/WAI/WCAG22/Understanding/)
- [2.1 Understanding list](https://www.w3.org/WAI/WCAG21/Understanding/)
- [2.0 Understanding list](https://www.w3.org/TR/UNDERSTANDING-WCAG20/)

## Techniques (informative)

Specific developer guidance, including HTML, CSS, scripting, multimedia, and WAI-ARIA.

- **Sufficient techniques** — examples of ways to meet a criterion. Following them meets the criterion.
- **Advisory techniques** — suggested improvements; sometimes the only way some users can access some content.
- **Failures** — documented ways content fails a criterion.

Lists:

- [About Techniques](https://www.w3.org/WAI/WCAG22/Understanding/understanding-techniques)
- [2.2 Techniques list](https://www.w3.org/WAI/WCAG22/Techniques/)
- [2.1 Techniques list](https://www.w3.org/WAI/WCAG21/Techniques/)
- [2.0 Techniques list](https://www.w3.org/TR/WCAG20-TECHS/)

Techniques are **not** the only way to conform. Other techniques are allowed if they meet the success criterion.

## ACT Rules (informative)

[Accessibility Conformance Testing (ACT) Rules](https://www.w3.org/WAI/standards-guidelines/act/rules/) describe how to test conformance. They are primarily for evaluation tools and test methodologies, and are more robust than the tests inside Techniques.

- [About ACT Rules](https://www.w3.org/WAI/standards-guidelines/act/rules/about/)
- [All ACT Rules](https://www.w3.org/WAI/standards-guidelines/act/rules/)

## Supplemental guidance (beyond WCAG)

Not required to meet WCAG. Much of it is essential for people with cognitive and learning disabilities.

- [About Supplemental Guidance](https://www.w3.org/WAI/WCAG2/supplemental/about/)
- [All Supplemental Guidance](https://www.w3.org/WAI/WCAG2/supplemental/)
- Local: [../cognitive/overview.md](../cognitive/overview.md)

## Getting started (before WCAG)

- [Introduction to Web Accessibility](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [Accessibility Principles](https://www.w3.org/WAI/fundamentals/accessibility-principles/) — local: [principles.md](principles.md)
- [Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/) — structure, menus, images, tables, carousels, forms
- [Making Audio and Video Media Accessible](https://www.w3.org/WAI/media/av/)

## How the documents link

WAI describes four connected boxes (the official diagram still says “WCAG 2.0” and still applies to 2.1 and 2.2):

1. **How to Meet WCAG 2** (customizable quick reference) — guidelines → success criteria → techniques
2. **WCAG 2** (the standard) — principles → guidelines → success criteria; plus conformance
3. **Techniques** — support notes, examples, code, tests
4. **Understanding** — intent, benefits, scenarios, resources, techniques

Quick Reference links to the Standard, Techniques, and Understanding. The Standard links to Quick Reference and Understanding. Techniques and Understanding cross-link.

ACT Rules and Supplemental Guidance are not in that original diagram.
