# WCAG 2 Overview

> **Local copy for agent and developer use.** This is not the official specification.
>
> **Source:** [WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/) — W3C Web Accessibility Initiative
>
> **Related normative text:** [WCAG 2.2 W3C Recommendation](https://www.w3.org/TR/WCAG22/) (latest published); dated [REC-WCAG22-20241212](https://www.w3.org/TR/2024/REC-WCAG22-20241212/)
>
> **Status of the overview page:** Informative WAI resource. Only the WCAG technical standard is [normative](https://www.w3.org/TR/WCAG22/#interpreting-normative-requirements).
>
> Copyright © World Wide Web Consortium. https://www.w3.org/copyright/document-license-2023/
>
> This software or document includes material copied from or derived from [WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/).

WCAG 2 is developed through the W3C process as a **single shared standard** for web content accessibility. It is a technical standard, not an introduction to accessibility. For introductions, see [Accessibility Fundamentals](https://www.w3.org/WAI/fundamentals/) and the local copy at [principles.md](principles.md).

Web “content” means the information in a page or application, including text, images, and sounds, plus the code or markup that defines structure and presentation. WCAG applies to dynamic content, multimedia, web on mobile, and AI web interfaces. It can also be applied to non-web ICT (native apps, software, documents) as described in [WCAG2ICT](wcag2ict.md).

A different official page introduces the early draft of [WCAG 3](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/).

## Who WCAG is for

Primarily:

- web content developers (page authors, site designers)
- web authoring tool developers
- web accessibility evaluation tool developers
- others who want or need a standard for web accessibility, including mobile

Policy makers, managers, and researchers have additional [WAI resources](https://www.w3.org/WAI/resources/).

## What is in WCAG 2

WCAG 2.2 has **13 guidelines** under **4 principles**: perceivable, operable, understandable, and robust.

For each guideline there are testable **success criteria** at three levels: **A**, **AA**, and **AAA**. Conformance is determined by the success criteria. Details: [conformance.md](conformance.md) and the [Conformance section of WCAG 2.2](https://www.w3.org/TR/WCAG22/#conformance).

Short paraphrase of the guidelines: [at-a-glance.md](at-a-glance.md). Full catalog: [success-criteria.md](success-criteria.md).

### Supporting material (informative)

These do **not** set or change requirements:

| Resource | Role | Official URL |
| --- | --- | --- |
| How to Meet WCAG 2 (Quick Reference) | Customizable checklist | https://www.w3.org/WAI/WCAG22/quickref/ |
| Understanding WCAG 2 | Intent, benefits, examples | https://www.w3.org/WAI/WCAG22/Understanding/ |
| Techniques for WCAG 2 | Sufficient / advisory / failures | https://www.w3.org/WAI/WCAG22/Techniques/ |
| ACT Rules | How to test criteria | https://www.w3.org/WAI/standards-guidelines/act/rules/ |
| Supplemental Guidance | Beyond WCAG, including cognitive | https://www.w3.org/WAI/WCAG2/supplemental/ |

See [documents.md](documents.md).

## WCAG 2.0, 2.1, 2.2

Versions are stable, referenceable standards when published as a W3C Recommendation. The **dated URL does not change**.

| Version | First Recommendation | Latest published URL |
| --- | --- | --- |
| WCAG 2.0 | 11 December 2008 | https://www.w3.org/TR/WCAG20/ |
| WCAG 2.1 | 5 June 2018 (updates 21 Sep 2023, 12 Dec 2024, 6 May 2025) | https://www.w3.org/TR/WCAG21/ |
| WCAG 2.2 | 5 October 2023 (update 12 December 2024) | https://www.w3.org/TR/WCAG22/ |

Later versions **add** success criteria. They do **not** change existing success criteria, with one exception: **4.1.1 Parsing is obsolete and removed from WCAG 2.2**. Notes added to 2.1 and 2.0 errata address this. See [WCAG 2 FAQ, 4.1.1 Parsing](https://www.w3.org/WAI/standards-guidelines/wcag/faq/#parsing411).

- WCAG 2.0: 12 guidelines.
- WCAG 2.1: adds 1 guideline and **17** success criteria. [whats-new-2.1.md](whats-new-2.1.md)
- WCAG 2.2: adds **9** success criteria. [whats-new-2.2.md](whats-new-2.2.md)

WCAG 2.0, 2.1, and 2.2 are all existing standards. **2.2 does not deprecate 2.1; 2.1 does not deprecate 2.0.** W3C encourages use of the latest version.

They are designed to be **backwards compatible**: content that conforms to WCAG 2.2 also conforms to 2.1 and 2.0. To meet all three, use the 2.2 resources.

## ISO, EAA, EN 301 549

- WCAG 2.2 is ISO/IEC **40500:2025**, free from ISO, matching the October 2023 WCAG 2.2 text. W3C expects the December 2024 WCAG 2.2 to become ISO/IEC 40500:2026.
- The European Accessibility Act is commonly implemented via **EN 301 549**, which currently uses **WCAG 2.1**. The next EN 301 549 is expected to use WCAG 2.2.

Laws worldwide: [Web Accessibility Laws & Policies](https://www.w3.org/WAI/policies/).

## Related guidelines

WCAG is one of a set: ATAG (authoring tools) and UAAG (user agents). See [Essential Components of Web Accessibility](https://www.w3.org/WAI/fundamentals/components/) and [authoring-tools/atag.md](../authoring-tools/atag.md).

## Machine-readable WCAG

W3C publishes JSON of principles, guidelines, success criteria, glossary terms, and Techniques: [JSON Serialization of WCAG 2](https://github.com/w3c/wcag/tree/main/11ty/json).

## Who develops WCAG

The Accessibility Guidelines Working Group ([AG WG](https://www.w3.org/WAI/GL/)), part of W3C WAI. Techniques and Understanding documents are updated periodically.
