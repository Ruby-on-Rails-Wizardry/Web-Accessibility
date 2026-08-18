# What's New in WCAG 2.2

> **Local copy for agent and developer use.** This is not the official specification.
>
> **Source:** [What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) — W3C WAI
>
> **Normative text:** [WCAG 2.2](https://www.w3.org/TR/WCAG22/) (Recommendation 5 October 2023; update 12 December 2024)
>
> **Status:** Informative introduction to the 9 success criteria added in 2.2. Persona quotes are from [Stories of Web Users](https://www.w3.org/WAI/people-use-web/user-stories/archived/).
>
> Copyright © World Wide Web Consortium. https://www.w3.org/copyright/document-license-2023/
>
> This software or document includes material copied from or derived from [What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/).

WCAG 2.2 adds **9** success criteria. The 2.0 and 2.1 criteria are essentially the same in 2.2, with one exception: **4.1.1 Parsing is obsolete and removed**. See [WCAG 2 FAQ, 4.1.1 Parsing](https://www.w3.org/WAI/standards-guidelines/wcag/faq/#parsing411). Notes about different languages: [FAQ, internationalization](https://www.w3.org/WAI/standards-guidelines/wcag/faq/#i18n22).

These 9 are the difference between **ADA Title II** (WCAG 2.1 AA) and current **WCAG 2.2 AA** practice. For AA, ignore the AAA items below.

The U.S. Access Board congratulated W3C on 2.2 (27 November 2023) and noted it is the final edition in the WCAG 2 line of normative requirements; AG WG attention has turned to WCAG 3. Source: https://www.access-board.gov/news/2023/11/27/w3c-wcag-2-2-now-available/

## Added at Level A

### 3.2.6 Consistent Help (A)

**What to do:** Put help in the same place when it is on multiple pages.

**Why:** People who need help can find it more easily if it is in the same place.

**Normative (WCAG 2.2):** If a web page contains any of the following help mechanisms, and those mechanisms are repeated on multiple web pages within a set of web pages, they occur in the same relative order to other page content, unless a change is initiated by the user: human contact details; human contact mechanism; self-help option; a fully automated contact mechanism.

[Understanding Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help)

### 3.3.7 Redundant Entry (A)

**What to do:** Don't ask for the same information twice in the same session.

**Why:** Some people with cognitive disabilities have difficulty remembering what they entered before.

**Normative:** Information previously entered by or provided to the user that is required to be entered again in the same process is either auto-populated or available for the user to select — except when re-entering is essential, required for security, or previously entered information is no longer valid.

[Understanding Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry)

## Added at Level AA

### 2.4.11 Focus Not Obscured (Minimum) (AA)

**What to do:** When an item gets keyboard focus, it is at least partially visible.

**Why:** People who can't use a mouse need to see what has keyboard focus. Sticky headers/footers commonly fail this.

**Normative:** When a user interface component receives keyboard focus, the component is not entirely hidden due to author-created content.

[Understanding Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum)

### 2.5.7 Dragging Movements (AA)

**What to do:** For any action that involves dragging, provide a simple pointer alternative.

**Why:** Some people cannot use a mouse to drag items.

**Normative:** All functionality that uses a dragging movement for operation can be achieved by a single pointer without dragging, unless dragging is essential or the functionality is determined by the user agent and not modified by the author.

[Understanding Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements)

### 2.5.8 Target Size (Minimum) (AA)

**What to do:** Ensure targets meet a minimum size or have sufficient spacing.

**Why:** Some people with physical impairments cannot click small buttons that are close together.

**Normative:** The size of the target for pointer inputs is at least 24 by 24 CSS pixels, except where spacing, equivalent control, inline text, user-agent control, or essential presentation applies.

[Understanding Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum)

### 3.3.8 Accessible Authentication (Minimum) (AA)

**What to do:** Don't make people solve, recall, or transcribe something to log in.

**Why:** Some people with cognitive disabilities cannot solve puzzles, memorize a username and password, or retype one-time passcodes.

**Normative:** A cognitive function test (such as remembering a password or solving a puzzle) is not required for any step in an authentication process unless that step provides an alternative that does not rely on such a test, a mechanism to assist (password managers, copy-and-paste), object recognition, or identification of personal content the user provided.

[Understanding Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum)

## Added at Level AAA

| ID | Name | What to do | Understanding |
| --- | --- | --- | --- |
| 2.4.12 | Focus Not Obscured (Enhanced) | Focused component is **fully** visible | [2.4.12](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-enhanced) |
| 2.4.13 | Focus Appearance | Focus indicator size (≥ 2 CSS px perimeter) and 3:1 contrast | [2.4.13](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance) |
| 3.3.9 | Accessible Authentication (Enhanced) | No object-recognition or personal-content puzzles either | [3.3.9](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-enhanced) |

## Removed

**4.1.1 Parsing** — obsolete in 2.2. Modern browsers and assistive technologies no longer depend on the parsing requirement as written. If a profile is WCAG 2.0 or 2.1 (including Section 508 and ADA Title II), the criterion still exists in those Recommendations but is treated as obsolete in later notes. See the [FAQ](https://www.w3.org/WAI/standards-guidelines/wcag/faq/#parsing411).
