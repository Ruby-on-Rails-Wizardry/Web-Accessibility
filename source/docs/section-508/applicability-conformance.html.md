---
title: Section 508 applicability and conformance
description: Scoping, exceptions, authoring tools.
---

> **Local copy of a U.S. government publication.** Works of the U.S. government are generally in the public domain.
>
> **Source:** [Applicability & Conformance Requirements](https://www.section508.gov/develop/applicability-conformance/) — GSA Section508.gov (reviewed/updated July 2026)
>
> **Standards:** [Revised 508 Standards](https://www.access-board.gov/ict/)

## Applicability

The Revised 508 Standards **incorporate by reference** the WCAG 2.0 Level AA success criteria, and apply those criteria and WCAG conformance requirements to **both web and non-web** electronic content.

[Chapter 2](https://www.access-board.gov/ict/#E201-application) specifies which electronic content must be accessible (scoping). Apply technical requirements by content type.

[E205 Electronic Content](https://www.access-board.gov/ict/#E205-content) applies to non-web electronic documents **regardless of format** (Microsoft Office, PDF, HTML). Other scoping covers non-web software (spreadsheets, video conferencing) and native mobile apps.

GSA: there is **no distinction** between “web pages” and “non-web” content for accessibility need. The same people need comparable access.

How to apply standards and exceptions: https://www.section508.gov/buy/determine-508-standards-exceptions

### Authoring tools

The Revised Standards include specific requirements for authoring tools ([Chapter 5, 504](https://www.access-board.gov/ict/#504-authoring-tools)). Authoring tools include word processors, tools used to develop web pages or applications, and **IDEs**.

### Where to look by product type

| Product | Look at |
| --- | --- |
| Electronic documents | E205, E205.4 (WCAG 2.0 A + AA, four exceptions) |
| Web content | E205, E205.2, E205.3 |
| Hardware | E206; Chapter 5 / 501 |
| Software | E207, E207.2, E207.3 |
| Authoring tools | Chapter 5, 504 |
| Functional performance criteria | E204; Chapter 3, 301–302 |

### Testing methods

If an agency has never used the [harmonized test methods](https://www.section508.gov/test/web-software) from the Federal CIO Council Accessibility Community of Practice, it may need to revise policies. Transition is easier if those methods (already built on WCAG 2.0 AA) are in use.

## Conformance (developer view)

From GSA:

- Assess the extent to which the work conforms to **WCAG 2.0 Level AA**.
- A page that fails **even one** of the **38** applicable WCAG success criteria **does not conform**.
- A **set of pages in a sequence** (identify → select → pay) does not conform if **any** step fails to conform fully.

That matches WCAG Conformance Requirement 3 (complete processes). Local: [../wcag/conformance.md](../wcag/conformance/).

### Conforming alternate versions

You can sometimes comply by providing a conforming alternate version. GSA warns that E101.2, E205, and E207 impose **significant constraints**. Do not treat a separate “accessible site” as the default.

W3C: https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html

## Agent / developer checklist

1. Confirm the ICT is in scope (public-facing content almost always is; internal content has E205 rules).
2. Use profile `section-508-web` or `section-508-nonweb` from [../profiles/requirement-profiles.md](../profiles/requirement-profiles/).
3. Test the **whole process**, not a single screen.
4. If you are generating markup (CMS, Rails views, an agent), also read 504 authoring-tool requirements and [../authoring-tools/atag.md](../authoring-tools/atag/).
