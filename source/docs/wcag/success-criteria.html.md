---
title: WCAG 2.2 success criteria catalog
description: Full catalog with level, version, and legal-profile tags.
---

> **Local catalog for agent and developer use.** This is not the official specification.
>
> Normative sources:
> - [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
> - [WCAG 2.1](https://www.w3.org/TR/WCAG21/)
> - [WCAG 2.0](https://www.w3.org/TR/WCAG20/)
>
> **Supporting:** [How to Meet WCAG 2](https://www.w3.org/WAI/WCAG22/quickref/), [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/)
>
> **Status:** Informative index. Wording of each criterion is in the dated Recommendation.
>
> Copyright © World Wide Web Consortium. https://www.w3.org/copyright/document-license-2023/
>
> This software or document includes material copied from or derived from [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

## How to read the profile columns

| Column | Means |
| --- | --- |
| **First** | WCAG version that introduced the criterion (`2.0`, `2.1`, `2.2`) |
| **508-W** | Revised Section 508 **web** content (E205.4): WCAG 2.0 A + AA |
| **508-N** | Section 508 **non-web** documents/software: same, except four criteria do not apply (E205.4 Exception) |
| **ADA-II** | DOJ ADA Title II web & mobile rule: WCAG 2.1 A + AA |
| **22-AA** | Current WCAG 2.2 Level AA practice (includes 2.0 + 2.1 + 2.2 A/AA; not 4.1.1) |

`Y` = in scope for that profile. `—` = not in that profile (wrong level or not yet added). `n/a` = explicitly excepted.

**4.1.1 Parsing:** still in WCAG 2.0 / 2.1 (and therefore in 508 and ADA Title II text). Removed as obsolete in WCAG 2.2. Marked `obs`.

Section 508 also has ICT chapters (hardware, software interoperability, authoring tools, support, functional performance criteria) that are **not** WCAG criteria. See [../section-508/revised-standards.md](../section-508/revised-standards/).

Understanding URL pattern: `https://www.w3.org/WAI/WCAG22/Understanding/<slug>`

---

## Principle 1 — Perceivable

### Guideline 1.1 Text Alternatives

| ID | Name | Level | First | 508-W | 508-N | ADA-II | 22-AA | Understanding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | Non-text Content | A | 2.0 | Y | Y | Y | Y | [non-text-content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) |

### Guideline 1.2 Time-based Media

| ID | Name | Level | First | 508-W | 508-N | ADA-II | 22-AA | Understanding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | Audio-only and Video-only (Prerecorded) | A | 2.0 | Y | Y | Y | Y | [audio-only-and-video-only-prerecorded](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded) |
| 1.2.2 | Captions (Prerecorded) | A | 2.0 | Y | Y | Y | Y | [captions-prerecorded](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded) |
| 1.2.3 | Audio Description or Media Alternative (Prerecorded) | A | 2.0 | Y | Y | Y | Y | [audio-description-or-media-alternative-prerecorded](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded) |
| 1.2.4 | Captions (Live) | AA | 2.0 | Y | Y | Y | Y | [captions-live](https://www.w3.org/WAI/WCAG22/Understanding/captions-live) |
| 1.2.5 | Audio Description (Prerecorded) | AA | 2.0 | Y | Y | Y | Y | [audio-description-prerecorded](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded) |
| 1.2.6 | Sign Language (Prerecorded) | AAA | 2.0 | — | — | — | — | [sign-language-prerecorded](https://www.w3.org/WAI/WCAG22/Understanding/sign-language-prerecorded) |
| 1.2.7 | Extended Audio Description (Prerecorded) | AAA | 2.0 | — | — | — | — | [extended-audio-description-prerecorded](https://www.w3.org/WAI/WCAG22/Understanding/extended-audio-description-prerecorded) |
| 1.2.8 | Media Alternative (Prerecorded) | AAA | 2.0 | — | — | — | — | [media-alternative-prerecorded](https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded) |
| 1.2.9 | Audio-only (Live) | AAA | 2.0 | — | — | — | — | [audio-only-live](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-live) |

### Guideline 1.3 Adaptable

| ID | Name | Level | First | 508-W | 508-N | ADA-II | 22-AA | Understanding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | Info and Relationships | A | 2.0 | Y | Y | Y | Y | [info-and-relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) |
| 1.3.2 | Meaningful Sequence | A | 2.0 | Y | Y | Y | Y | [meaningful-sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) |
| 1.3.3 | Sensory Characteristics | A | 2.0 | Y | Y | Y | Y | [sensory-characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics) |
| 1.3.4 | Orientation | AA | 2.1 | — | — | Y | Y | [orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation) |
| 1.3.5 | Identify Input Purpose | AA | 2.1 | — | — | Y | Y | [identify-input-purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) |
| 1.3.6 | Identify Purpose | AAA | 2.1 | — | — | — | — | [identify-purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) |

### Guideline 1.4 Distinguishable

| ID | Name | Level | First | 508-W | 508-N | ADA-II | 22-AA | Understanding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | Use of Color | A | 2.0 | Y | Y | Y | Y | [use-of-color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) |
| 1.4.2 | Audio Control | A | 2.0 | Y | Y | Y | Y | [audio-control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control) |
| 1.4.3 | Contrast (Minimum) | AA | 2.0 | Y | Y | Y | Y | [contrast-minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) |
| 1.4.4 | Resize Text | AA | 2.0 | Y | Y | Y | Y | [resize-text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) |
| 1.4.5 | Images of Text | AA | 2.0 | Y | Y | Y | Y | [images-of-text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) |
| 1.4.6 | Contrast (Enhanced) | AAA | 2.0 | — | — | — | — | [contrast-enhanced](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) |
| 1.4.7 | Low or No Background Audio | AAA | 2.0 | — | — | — | — | [low-or-no-background-audio](https://www.w3.org/WAI/WCAG22/Understanding/low-or-no-background-audio) |
| 1.4.8 | Visual Presentation | AAA | 2.0 | — | — | — | — | [visual-presentation](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation) |
| 1.4.9 | Images of Text (No Exception) | AAA | 2.0 | — | — | — | — | [images-of-text-no-exception](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception) |
| 1.4.10 | Reflow | AA | 2.1 | — | — | Y | Y | [reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow) |
| 1.4.11 | Non-text Contrast | AA | 2.1 | — | — | Y | Y | [non-text-contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) |
| 1.4.12 | Text Spacing | AA | 2.1 | — | — | Y | Y | [text-spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) |
| 1.4.13 | Content on Hover or Focus | AA | 2.1 | — | — | Y | Y | [content-on-hover-or-focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) |

---

## Principle 2 — Operable

### Guideline 2.1 Keyboard Accessible

| ID | Name | Level | First | 508-W | 508-N | ADA-II | 22-AA | Understanding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | Keyboard | A | 2.0 | Y | Y | Y | Y | [keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard) |
| 2.1.2 | No Keyboard Trap | A | 2.0 | Y | Y | Y | Y | [no-keyboard-trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) |
| 2.1.3 | Keyboard (No Exception) | AAA | 2.0 | — | — | — | — | [keyboard-no-exception](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception) |
| 2.1.4 | Character Key Shortcuts | A | 2.1 | — | — | Y | Y | [character-key-shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) |

### Guideline 2.2 Enough Time

| ID | Name | Level | First | 508-W | 508-N | ADA-II | 22-AA | Understanding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.1 | Timing Adjustable | A | 2.0 | Y | Y | Y | Y | [timing-adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) |
| 2.2.2 | Pause, Stop, Hide | A | 2.0 | Y | Y | Y | Y | [pause-stop-hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) |
| 2.2.3 | No Timing | AAA | 2.0 | — | — | — | — | [no-timing](https://www.w3.org/WAI/WCAG22/Understanding/no-timing) |
| 2.2.4 | Interruptions | AAA | 2.0 | — | — | — | — | [interruptions](https://www.w3.org/WAI/WCAG22/Understanding/interruptions) |
| 2.2.5 | Re-authenticating | AAA | 2.0 | — | — | — | — | [re-authenticating](https://www.w3.org/WAI/WCAG22/Understanding/re-authenticating) |
| 2.2.6 | Timeouts | AAA | 2.1 | — | — | — | — | [timeouts](https://www.w3.org/WAI/WCAG22/Understanding/timeouts) |

### Guideline 2.3 Seizures and Physical Reactions

| ID | Name | Level | First | 508-W | 508-N | ADA-II | 22-AA | Understanding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3.1 | Three Flashes or Below Threshold | A | 2.0 | Y | Y | Y | Y | [three-flashes-or-below-threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold) |
| 2.3.2 | Three Flashes | AAA | 2.0 | — | — | — | — | [three-flashes](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes) |
| 2.3.3 | Animation from Interactions | AAA | 2.1 | — | — | — | — | [animation-from-interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions) |

### Guideline 2.4 Navigable

| ID | Name | Level | First | 508-W | 508-N | ADA-II | 22-AA | Understanding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2.4.1 | Bypass Blocks | A | 2.0 | Y | n/a | Y | Y | [bypass-blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) |
| 2.4.2 | Page Titled | A | 2.0 | Y | Y | Y | Y | [page-titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled) |
| 2.4.3 | Focus Order | A | 2.0 | Y | Y | Y | Y | [focus-order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) |
| 2.4.4 | Link Purpose (In Context) | A | 2.0 | Y | Y | Y | Y | [link-purpose-in-context](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context) |
| 2.4.5 | Multiple Ways | AA | 2.0 | Y | n/a | Y | Y | [multiple-ways](https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways) |
| 2.4.6 | Headings and Labels | AA | 2.0 | Y | Y | Y | Y | [headings-and-labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) |
| 2.4.7 | Focus Visible | AA | 2.0 | Y | Y | Y | Y | [focus-visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible) |
| 2.4.8 | Location | AAA | 2.0 | — | — | — | — | [location](https://www.w3.org/WAI/WCAG22/Understanding/location) |
| 2.4.9 | Link Purpose (Link Only) | AAA | 2.0 | — | — | — | — | [link-purpose-link-only](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only) |
| 2.4.10 | Section Headings | AAA | 2.0 | — | — | — | — | [section-headings](https://www.w3.org/WAI/WCAG22/Understanding/section-headings) |
| 2.4.11 | Focus Not Obscured (Minimum) | AA | 2.2 | — | — | — | Y | [focus-not-obscured-minimum](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum) |
| 2.4.12 | Focus Not Obscured (Enhanced) | AAA | 2.2 | — | — | — | — | [focus-not-obscured-enhanced](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced) |
| 2.4.13 | Focus Appearance | AAA | 2.2 | — | — | — | — | [focus-appearance](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance) |

508-N `n/a` on 2.4.1 and 2.4.5 is the E205.4 exception for non-web documents (also 3.2.3 and 3.2.4).

### Guideline 2.5 Input Modalities

| ID | Name | Level | First | 508-W | 508-N | ADA-II | 22-AA | Understanding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2.5.1 | Pointer Gestures | A | 2.1 | — | — | Y | Y | [pointer-gestures](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures) |
| 2.5.2 | Pointer Cancellation | A | 2.1 | — | — | Y | Y | [pointer-cancellation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) |
| 2.5.3 | Label in Name | A | 2.1 | — | — | Y | Y | [label-in-name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) |
| 2.5.4 | Motion Actuation | A | 2.1 | — | — | Y | Y | [motion-actuation](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation) |
| 2.5.5 | Target Size (Enhanced) | AAA | 2.1 | — | — | — | — | [target-size-enhanced](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced) |
| 2.5.6 | Concurrent Input Mechanisms | AAA | 2.1 | — | — | — | — | [concurrent-input-mechanisms](https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms) |
| 2.5.7 | Dragging Movements | AA | 2.2 | — | — | — | Y | [dragging-movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) |
| 2.5.8 | Target Size (Minimum) | AA | 2.2 | — | — | — | Y | [target-size-minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) |

---

## Principle 3 — Understandable

### Guideline 3.1 Readable

| ID | Name | Level | First | 508-W | 508-N | ADA-II | 22-AA | Understanding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.1 | Language of Page | A | 2.0 | Y | Y | Y | Y | [language-of-page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) |
| 3.1.2 | Language of Parts | AA | 2.0 | Y | Y | Y | Y | [language-of-parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts) |
| 3.1.3 | Unusual Words | AAA | 2.0 | — | — | — | — | [unusual-words](https://www.w3.org/WAI/WCAG22/Understanding/unusual-words) |
| 3.1.4 | Abbreviations | AAA | 2.0 | — | — | — | — | [abbreviations](https://www.w3.org/WAI/WCAG22/Understanding/abbreviations) |
| 3.1.5 | Reading Level | AAA | 2.0 | — | — | — | — | [reading-level](https://www.w3.org/WAI/WCAG22/Understanding/reading-level) |
| 3.1.6 | Pronunciation | AAA | 2.0 | — | — | — | — | [pronunciation](https://www.w3.org/WAI/WCAG22/Understanding/pronunciation) |

### Guideline 3.2 Predictable

| ID | Name | Level | First | 508-W | 508-N | ADA-II | 22-AA | Understanding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | On Focus | A | 2.0 | Y | Y | Y | Y | [on-focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) |
| 3.2.2 | On Input | A | 2.0 | Y | Y | Y | Y | [on-input](https://www.w3.org/WAI/WCAG22/Understanding/on-input) |
| 3.2.3 | Consistent Navigation | AA | 2.0 | Y | n/a | Y | Y | [consistent-navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation) |
| 3.2.4 | Consistent Identification | AA | 2.0 | Y | n/a | Y | Y | [consistent-identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification) |
| 3.2.5 | Change on Request | AAA | 2.0 | — | — | — | — | [change-on-request](https://www.w3.org/WAI/WCAG22/Understanding/change-on-request) |
| 3.2.6 | Consistent Help | A | 2.2 | — | — | — | Y | [consistent-help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help) |

### Guideline 3.3 Input Assistance

| ID | Name | Level | First | 508-W | 508-N | ADA-II | 22-AA | Understanding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | Error Identification | A | 2.0 | Y | Y | Y | Y | [error-identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification) |
| 3.3.2 | Labels or Instructions | A | 2.0 | Y | Y | Y | Y | [labels-or-instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions) |
| 3.3.3 | Error Suggestion | AA | 2.0 | Y | Y | Y | Y | [error-suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion) |
| 3.3.4 | Error Prevention (Legal, Financial, Data) | AA | 2.0 | Y | Y | Y | Y | [error-prevention-legal-financial-data](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data) |
| 3.3.5 | Help | AAA | 2.0 | — | — | — | — | [help](https://www.w3.org/WAI/WCAG22/Understanding/help) |
| 3.3.6 | Error Prevention (All) | AAA | 2.0 | — | — | — | — | [error-prevention-all](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-all) |
| 3.3.7 | Redundant Entry | A | 2.2 | — | — | — | Y | [redundant-entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) |
| 3.3.8 | Accessible Authentication (Minimum) | AA | 2.2 | — | — | — | Y | [accessible-authentication-minimum](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum) |
| 3.3.9 | Accessible Authentication (Enhanced) | AAA | 2.2 | — | — | — | — | [accessible-authentication-enhanced](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced) |

---

## Principle 4 — Robust

### Guideline 4.1 Compatible

| ID | Name | Level | First | 508-W | 508-N | ADA-II | 22-AA | Understanding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1.1 | Parsing | A | 2.0 | Y (obs) | Y (obs) | Y (obs) | removed | [parsing](https://www.w3.org/WAI/standards-guidelines/wcag/faq/#parsing411) |
| 4.1.2 | Name, Role, Value | A | 2.0 | Y | Y | Y | Y | [name-role-value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) |
| 4.1.3 | Status Messages | AA | 2.1 | — | — | Y | Y | [status-messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) |

---

## Counts

| Profile | Criteria in scope |
| --- | --- |
| WCAG 2.0 A + AA (508 web) | 38 (25 A + 13 AA), including 4.1.1 |
| 508 non-web | 34 (38 minus 2.4.1, 2.4.5, 3.2.3, 3.2.4) |
| WCAG 2.1 A + AA (ADA Title II) | 50 (2.0's 38 + 12 new A/AA from 2.1) |
| WCAG 2.2 A + AA | 55 (2.1's 50 − 4.1.1 + 6 new A/AA from 2.2) |
| WCAG 2.2 AAA (additional) | 28 AAA criteria; not a recommended site-wide policy |

2.1 A/AA additions (12): 1.3.4, 1.3.5, 1.4.10, 1.4.11, 1.4.12, 1.4.13, 2.1.4, 2.5.1, 2.5.2, 2.5.3, 2.5.4, 4.1.3.

2.2 A/AA additions (6): 2.4.11, 2.5.7, 2.5.8, 3.2.6, 3.3.7, 3.3.8.

## Surface filters (for agents)

Load only rows that apply to the thing being built:

| Surface | Typical A/AA IDs |
| --- | --- |
| Images / icons | 1.1.1, 1.4.5, 1.4.11 |
| Video / audio | 1.2.1–1.2.5, 1.4.2 |
| Structure / headings | 1.3.1, 1.3.2, 2.4.1, 2.4.2, 2.4.6, 2.4.10* |
| Color / contrast / zoom | 1.4.1, 1.4.3, 1.4.4, 1.4.10, 1.4.11, 1.4.12 |
| Keyboard / focus | 2.1.1, 2.1.2, 2.1.4, 2.4.3, 2.4.7, 2.4.11 |
| Pointer / touch / drag | 2.5.1, 2.5.2, 2.5.7, 2.5.8 |
| Forms | 1.3.1, 1.3.5, 2.4.6, 2.5.3, 3.2.2, 3.3.1–3.3.4, 3.3.7 |
| Auth / login | 3.3.8 (+ 1.3.5, 3.3.1, 3.3.2, 1.4.3) |
| Dynamic updates | 4.1.2, 4.1.3, 2.2.1, 2.2.2 |
| Custom widgets | 4.1.2, 2.1.1, 2.4.3, 2.4.7, 1.3.1 |

\* 2.4.10 is AAA; use it as an advisory pattern, not an AA requirement.
