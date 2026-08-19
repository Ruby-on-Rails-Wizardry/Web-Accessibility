---
title: Understanding WCAG 2 conformance
description: Five conformance requirements; levels; claims.
---

> **Local copy for agent and developer use.** This is not the official specification.
>
> **Source:** [Understanding Conformance](https://www.w3.org/WAI/WCAG22/Understanding/conformance) — W3C WAI
>
> **Normative text:** [WCAG 2.2 Conformance](https://www.w3.org/TR/WCAG22/#conformance)
>
> **Status:** Informative commentary on the five conformance requirements.
>
> Copyright © World Wide Web Consortium. https://www.w3.org/copyright/document-license-2023/
>
> This software or document includes material copied from or derived from [Understanding Conformance](https://www.w3.org/WAI/WCAG22/Understanding/conformance).

Conformance means satisfying the requirements of the standard. In WCAG 2 those requirements are the **success criteria**. There must be no content that violates the applicable criteria.

If there is no content to which a criterion applies, that criterion is satisfied.

Testing is **functional** testing (does the content satisfy the criterion?), using a mix of automated and human evaluation by people who understand how people with disabilities use the web. Usability testing, including users with disabilities, is recommended in addition.

## Three levels

WCAG 2 has three conformance levels because different situations require or allow different amounts of accessibility.

| Level | Meaning in practice |
| --- | --- |
| **A** | Minimum. If not met, even assistive technology often cannot make the content accessible. |
| **AA** | The usual legal and procurement target (Section 508, ADA Title II, EN 301 549). |
| **AAA** | Enhanced. W3C **does not recommend requiring AAA as a general policy for entire sites** because it is not possible to satisfy all AAA criteria for some content. |

A criterion is included only if it is an important access issue for people with disabilities (beyond general usability) **and** it is testable.

Factors used when assigning a level included: whether it is essential; whether it can be met for all sites and content types; whether authors can reasonably learn it; limits on look-and-feel or function; whether there are workarounds.

## Five conformance requirements

### 1. Conformance level

One level is met **in full**:

- **A** — all Level A criteria, or a conforming alternate version
- **AA** — all Level A and AA criteria, or a Level AA conforming alternate version
- **AAA** — all A, AA, and AAA criteria, or a Level AAA conforming alternate version

Authors are encouraged to report progress on criteria above the claimed level. No conformance is possible without at least all Level A criteria.

### 2. Full pages

Conformance is for **full web page(s)** only. You cannot claim that part of a page conforms.

- Alternatives obtainable from the page (long description, alternative video presentation) count as part of the page.
- Each automatically presented variation of a responsive page must conform (or have a conforming alternate).
- Authors who cannot control third-party content may consider a [statement of partial conformance](https://www.w3.org/WAI/WCAG22/Understanding/conformance#conformance-partial).

### 3. Complete processes

If a page is one step in a process (for example select → pay → confirm), **every page in the process** must conform at that level. A conforming product page does not make a non-conforming checkout “AA.”

GSA states the same for Section 508: a sequence does not conform if any step fails. See [../section-508/applicability-conformance.md](../section-508/applicability-conformance/).

### 4. Only accessibility-supported ways of using technologies

Only [accessibility-supported](https://www.w3.org/WAI/WCAG22/Understanding/conformance#accessibility-support) ways of using technologies are **relied upon** to satisfy criteria. Information provided in an unsupported way must also be available in a supported way.

“Accessibility supported” means assistive technologies can use that technique **and** accessibility-supported user agents are available to users.

### 5. Non-interference

Unsupported or non-conforming technologies must not block the rest of the page. The page as a whole still meets conformance when that technology is on, off, or unsupported.

These criteria apply to **all** content on the page, including content not relied upon:

- **1.4.2** Audio Control
- **2.1.2** No Keyboard Trap
- **2.3.1** Three Flashes or Below Threshold
- **2.2.2** Pause, Stop, Hide

## Conformance claims

A claim is **not required** in order to conform. If you make a claim, the required information must be provided (date, guidelines version and URI, level, scope, technologies relied upon). Optional: technologies used but not relied upon; user agents tested; extra steps beyond the criteria.

Schema.org `accessibilitySummary` / `accessibilityFeature` / `accessMode` can carry this in the page.

### Partial claims (third-party content)

If a page fails only for reasons legitimately outside the author’s control (embedded widgets, user-generated posts), the author can make a **statement of partial conformance**. That is a statement of **non-conformance** for the excluded parts.

## Conforming alternate versions

Requirement 1 allows a non-conforming page in scope if a conforming alternate version:

1. conforms at the designated level,
2. provides the same information and functionality in the same language,
3. is as up to date, and
4. can be reached via an accessibility-supported mechanism (or the non-conforming version can only be reached from the conforming one).

W3C’s preferred method is to make content **directly** accessible. Alternate versions are a fallback. Section 508 and the ADA Title II rule both constrain this option further. See those local files.

## “Programmatically determined”

Content is authored so user agents, including assistive technologies, can access the information and transform it (speech, braille, different presentation). Distinct from “accessibility supported,” which is about whether AT and browsers support that *way of using* a technology.

## “Web page”

A non-embedded resource from a single URI using HTTP, plus resources rendered with it. Includes much more than static HTML: single-page apps, portals, immersive experiences at one URI.

## Agent notes

- Do not claim “this component is AA.” Claim the **page** (or process) against the profile.
- If any applicable AA criterion fails, the page does not conform to AA.
- Report extra AAA work separately; do not mix it into an AA claim unless the profile is AAA.
