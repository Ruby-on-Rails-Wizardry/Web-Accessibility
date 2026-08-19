---
title: WCAG Evaluation Methodology (WCAG-EM)
description: WCAG-EM 2.0 evaluation process.
---

> **Local copy for agent and developer use.** This is not the official specification.
>
> **Source:** [WCAG-EM Overview](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/) — W3C WAI
>
> **Full methodology:** [WCAG-EM 2.0](https://www.w3.org/TR/wcag-em-2/) — W3C Group Note, 23 July 2026
>
> **Prior version:** [WCAG-EM 1.0](https://www.w3.org/TR/2014/NOTE-WCAG-EM-20140710/) (websites only, 10 July 2014)
>
> **Status:** Informative Group Note. Supporting resource for WCAG; **does not define additional WCAG requirements**.
>
> Copyright © World Wide Web Consortium. https://www.w3.org/copyright/document-license-2023/
>
> This software or document includes material copied from or derived from [WCAG-EM Overview](https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/).

WCAG-EM is an approach for determining how well a digital product conforms to WCAG 2. Use it for a structured audit. For a first pass, W3C recommends [Easy Checks](https://www.w3.org/WAI/test-evaluate/preliminary/) first, then fix obvious barriers, then invest in WCAG-EM.

It applies to websites, **mobile applications, and kiosks** (2.0 expanded beyond websites). It covers self-assessment and third-party evaluation and is independent of particular tools, browsers, or AT.

Accessibility should be integrated from planning through development, not left until evaluation.

## Who it is for

Internal evaluators, external auditors, benchmarkers, researchers; also a reference for managers, procurers, policy makers. Successful use requires knowledge of WCAG, accessible design, assistive technologies, and how people with disabilities use digital products ([Required Expertise](https://www.w3.org/TR/WCAG-EM/#expertise) in the Note).

## Five steps

1. **Define the scope** — what is included; goal; WCAG conformance level (A, AA, AAA). This is where you name the **profile** (508, ADA Title II, WCAG 2.2 AA).
2. **Explore the product** — key views; key functionality; types of content and design; required technologies.
3. **Select a representative sample** — structured plus random views when you cannot test every view.
4. **Evaluate the selected sample** — successes and failures; accessibility support; record steps.
5. **Report findings** — aggregate; evaluation statements; optional overall scores.

Involve **real users with disabilities**. See [Involving Users in Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/involving-users/).

## Report tool

[WCAG-EM Report Tool](https://www.w3.org/WAI/eval/report-tool/) walks the steps and generates a structured report.

## WCAG-EM 2 vs 1

- 1.0: websites and web pages.
- 2.0 (23 July 2026): also apps and other digital products.

Changelog: https://github.com/w3c/wai-wcag-em/

## Related U.S. testing

- [Section508.gov testing overview](https://www.section508.gov/test/testing-overview)
- [ICT Testing Baseline](https://ictbaseline.access-board.gov/)
- Harmonized web/software test methods: https://www.section508.gov/test/web-software

## Agent usage

An agent can draft a WCAG-EM scope (step 1) and a sample plan (step 3) from a sitemap. It cannot complete step 4. Human keyboard, screen-reader, and user testing remain mandatory. Automated tools are efficiency aids, not a conformance determination.
