---
description: WCAG is the technical standard; 508 and ADA Title II use it.
title: WCAG, Section 508, and ADA — which name to use
---

**WCAG** (Web Content Accessibility Guidelines) is the technical standard. **Section 508** is a U.S. federal procurement/ICT law that *uses* WCAG. **ADA** is a civil rights law; Title II now also *uses* WCAG for state and local web and mobile apps.

This file is a short orientation. The library, official sources, and agent workflow live under [`docs/`](/docs/).

## The usual bars

| Context | What people say | What it actually requires |
| --- | --- | --- |
| U.S. federal ICT (agencies and their vendors) | “508” | Revised 508 Standards: **WCAG 2.0 Level AA** for electronic content, plus ICT chapters (software, hardware, authoring tools, support). [docs/section-508/revised-standards.md](/docs/section-508/revised-standards/) |
| U.S. state and local government web/apps | “ADA Title II” / “the web rule” | **WCAG 2.1 Level AA**. [docs/ada/title-ii-web-mobile.md](/docs/ada/title-ii-web-mobile/) |
| Current engineering practice | “WCAG 2.2 AA” | Latest WCAG 2 Recommendation. Content that meets 2.2 also meets 2.1 and 2.0. [docs/wcag/overview.md](/docs/wcag/overview/) |
| Private businesses (ADA Title III) | “ADA” / “WCAG” | No WCAG edition is written into Title III the way 508 and the Title II rule do. Courts and DOJ commonly treat WCAG as the practical benchmark. Use **2.2 AA** unless counsel says otherwise. |

Level **AAA** is real but W3C does not recommend requiring it for entire sites. [docs/wcag/conformance.md](/docs/wcag/conformance/)

## Working with an agent

Name a **profile** (`section-508-web`, `ada-title-ii`, `wcag-22-aa`) and a **surface** (form, nav, modal). Do not ask the model to “remember 508.” Point it at:

- [docs/profiles/requirement-profiles.md](/docs/profiles/requirement-profiles/)
- [docs/wcag/success-criteria.md](/docs/wcag/success-criteria/)
- [docs/agents/reducing-cognitive-load.md](/docs/agents/reducing-cognitive-load/)
- [docs/definitions/](/docs/definitions/) — official terms; DHS training at https://www.dhs.gov/508-training

## Official starting URLs

- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- How to Meet WCAG: https://www.w3.org/WAI/WCAG22/quickref/
- Revised 508 Standards: https://www.access-board.gov/ict/
- Section508.gov: https://www.section508.gov/
- ADA Title II fact sheet: https://www.ada.gov/resources/2024-03-08-web-rule/
- DHS Section 508 Training: https://www.dhs.gov/508-training
- Access Board defined terms: https://www.access-board.gov/ict/#E103-defined-terms

Full bibliography: [docs/SOURCES.md](/docs/SOURCES/).
