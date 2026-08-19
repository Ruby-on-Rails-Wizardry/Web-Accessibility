---
title: Requirement profiles
description: 508 vs ADA Title II vs WCAG 2.0 / 2.1 / 2.2 and A / AA / AAA.
---

Project-authored map. **Not** an official interpretation. Citations point at the local copies and official URLs.

Use one profile name in the first message to an agent. The agent should then filter [../wcag/success-criteria.md](../wcag/success-criteria/) to that column and ignore the rest.

## Profile cards

### `section-508-web`

| | |
| --- | --- |
| Binds | U.S. federal agencies; ICT they develop, procure, maintain, or use |
| Technical bar | WCAG 2.0 Level A + AA (38 criteria), plus applicable ICT chapters |
| Official | [Revised 508 Standards E205.4](https://www.access-board.gov/ict/#E205-content); local [../section-508/revised-standards.md](../section-508/revised-standards/) |
| Catalog filter | column **508-W** = Y |
| Also read | [../section-508/applicability-conformance.md](../section-508/applicability-conformance/) |
| Not in this profile | All 2.1 and 2.2 additions; all AAA |
| Common extra | Teams often *also* meet 2.2 AA (backwards compatible). Report extras separately. |
| Watch | Whole **process** must pass. One failing step fails the sequence. Conforming alternates are tightly constrained. |

### `section-508-nonweb`

| | |
| --- | --- |
| Binds | Same as 508, for documents, software, native apps |
| Technical bar | WCAG 2.0 A + AA **minus** 2.4.1, 2.4.5, 3.2.3, 3.2.4; substitute “document” for “web page” |
| Official | E205.4 Exception and E205.4.1; [WCAG2ICT](https://www.w3.org/TR/wcag2ict-22/) |
| Catalog filter | column **508-N** = Y |
| Also | Software E207; authoring tools 504; hardware chapters if relevant |

### `ada-title-ii`

| | |
| --- | --- |
| Binds | U.S. state and local governments and their contractors for public services |
| Technical bar | WCAG 2.1 Level AA (50 A+AA criteria) |
| Official | [DOJ fact sheet](https://www.ada.gov/resources/2024-03-08-web-rule/); 28 C.F.R. Part 35; local [../ada/title-ii-web-mobile.md](../ada/title-ii-web-mobile/) |
| Catalog filter | column **ADA-II** = Y |
| Dates (after 2026 IFR) | Pop. ≥ 50k: 26 Apr 2027; smaller / special districts: 26 Apr 2028 |
| Exceptions | Archive, preexisting docs, some third-party posts, individualized password docs, old social posts — all narrow |
| Not in this profile | Six WCAG 2.2 A/AA criteria; AAA; Section 508 hardware chapters |

### `wcag-22-aa` (default best practice)

| | |
| --- | --- |
| Binds | Whoever chose it (policy, contract, or “meet current WCAG”) |
| Technical bar | WCAG 2.2 Level A + AA (55 criteria). Satisfies 2.1 AA and 2.0 AA. |
| Official | [WCAG 2.2](https://www.w3.org/TR/WCAG22/); ISO/IEC 40500:2025 |
| Catalog filter | column **22-AA** = Y |
| 4.1.1 | Do **not** test Parsing; it was removed |
| Also recommended | [../cognitive/coga-usable.md](../cognitive/coga-usable/) as advisory, not as a claim |

### `wcag-22-a`

Minimum WCAG 2.2 Level A only. Rare as a legal target. Use when the brief is explicitly A.

### `wcag-22-aaa`

All 2.2 A + AA + AAA. **Do not require for an entire site** (W3C). Use for a specific artifact (a form, a media player) or to report extras on top of AA.

### `en-301-549`

EU ICT (and several national adoptions). Current EN 301 549 uses **WCAG 2.1**; next version expected to use 2.2. Treat like `ada-title-ii` for web/software WCAG criteria, plus EN hardware/documentation clauses that are not in this library. Official PDF: see [../SOURCES.md](../SOURCES/).

## Choosing a profile

```text
Is this U.S. federal ICT (agency or vendor to an agency)?
  yes → section-508-web or section-508-nonweb
  no  → Is this a U.S. state/local government service (or its contractor)?
           yes → ada-title-ii   (consider targeting wcag-22-aa to exceed the floor)
           no  → default wcag-22-aa unless a contract names another edition
```

Private ADA Title III has **no** WCAG edition in the regulation. Courts and DOJ guidance commonly treat WCAG as the practical benchmark. `wcag-22-aa` is the usual engineering target.

## What changes between profiles (AA only)

Start from 508 web (WCAG 2.0 AA). Then add:

**Plus ADA Title II / WCAG 2.1 AA**

1.3.4 Orientation, 1.3.5 Identify Input Purpose, 1.4.10 Reflow, 1.4.11 Non-text Contrast, 1.4.12 Text Spacing, 1.4.13 Content on Hover or Focus, 2.1.4 Character Key Shortcuts, 2.5.1 Pointer Gestures, 2.5.2 Pointer Cancellation, 2.5.3 Label in Name, 2.5.4 Motion Actuation, 4.1.3 Status Messages.

**Plus WCAG 2.2 AA**

2.4.11 Focus Not Obscured (Minimum), 2.5.7 Dragging Movements, 2.5.8 Target Size (Minimum), 3.2.6 Consistent Help, 3.3.7 Redundant Entry, 3.3.8 Accessible Authentication (Minimum). Drop 4.1.1.

Details: [../wcag/whats-new-2.1.md](../wcag/whats-new-2.1/), [../wcag/whats-new-2.2.md](../wcag/whats-new-2.2/).

## What no profile replaces

- Keyboard testing, screen-reader testing, and users with disabilities ([../evaluation/wcag-em.md](../evaluation/wcag-em/))
- Cognitive usability beyond WCAG ([../cognitive/](../cognitive/))
- 508 hardware, support, and functional performance chapters
- Legal applicability decisions
