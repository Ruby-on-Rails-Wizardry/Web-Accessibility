# What's New in WCAG 2.1

> **Local copy for agent and developer use.** This is not the official specification.
>
> **Source:** [What's New in WCAG 2.1](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) — W3C WAI
>
> **Normative text:** [WCAG 2.1](https://www.w3.org/TR/WCAG21/)
>
> **Status:** Informative introduction to the 17 success criteria added in 2.1. Persona quotes are from [Stories of Web Users](https://www.w3.org/WAI/people-use-web/user-stories/archived/).
>
> Copyright © World Wide Web Consortium. https://www.w3.org/copyright/document-license-2023/
>
> This software or document includes material copied from or derived from [What's New in WCAG 2.1](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/).

WCAG 2.1 adds **17** success criteria addressing:

- [mobile accessibility](https://www.w3.org/WAI/standards-guidelines/mobile/)
- people with low vision
- [people with cognitive and learning disabilities](https://www.w3.org/WAI/cognitive/)

These 17 are the difference between the **Section 508** technical bar (WCAG 2.0 AA) and the **ADA Title II** technical bar (WCAG 2.1 AA), aside from 508's extra ICT chapters. For AA, ignore the AAA items below.

Official Understanding links use the 2.1 Understanding set; the same criteria appear in 2.2 Understanding.

## Added at Level A

| ID | Name | In brief (from WAI) | Understanding |
| --- | --- | --- | --- |
| 2.1.4 | Character Key Shortcuts | If single-character shortcuts exist, allow turning them off, remapping, or activating only on focus. Speech-input users otherwise trigger shortcuts accidentally. | [2.1.4](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts) |
| 2.5.1 | Pointer Gestures | Multipoint or path-based gestures have a single-pointer alternative. | [2.5.1](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures) |
| 2.5.2 | Pointer Cancellation | Completion on up-event, or abort/undo; avoid down-event-only activation. | [2.5.2](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) |
| 2.5.3 | Label in Name | The accessible name contains the visible label text (speech input). | [2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) |
| 2.5.4 | Motion Actuation | Device/user motion has a UI alternative; motion can be disabled. | [2.5.4](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation) |

## Added at Level AA

| ID | Name | In brief (from WAI) | Understanding |
| --- | --- | --- | --- |
| 1.3.4 | Orientation | Do not lock to one orientation unless essential. | [1.3.4](https://www.w3.org/WAI/WCAG22/Understanding/orientation) |
| 1.3.5 | Identify Input Purpose | Autocomplete / purpose for personal input fields so browsers can fill them. | [1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose) |
| 1.4.10 | Reflow | No two-dimensional scrolling at 320 CSS px width (or 256 height). | [1.4.10](https://www.w3.org/WAI/WCAG22/Understanding/reflow) |
| 1.4.11 | Non-text Contrast | 3:1 contrast for UI component boundaries/states and meaningful graphics. | [1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast) |
| 1.4.12 | Text Spacing | No loss when users set line height 1.5, paragraph 2×, letter 0.12, word 0.16. | [1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) |
| 1.4.13 | Content on Hover or Focus | Extra content is dismissible, hoverable, and persistent. | [1.4.13](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus) |
| 4.1.3 | Status Messages | Status can be programmatically determined so AT can announce it without moving focus. | [4.1.3](https://www.w3.org/WAI/WCAG22/Understanding/status-messages) |

## Added at Level AAA (not in ADA Title II / typical AA profiles)

| ID | Name | Understanding |
| --- | --- | --- |
| 1.3.6 | Identify Purpose | [1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) |
| 2.2.6 | Timeouts | [2.2.6](https://www.w3.org/WAI/WCAG22/Understanding/timeouts) |
| 2.3.3 | Animation from Interactions | [2.3.3](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions) |
| 2.5.5 | Target Size (Enhanced) (44×44) | [2.5.5](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced) |
| 2.5.6 | Concurrent Input Mechanisms | [2.5.6](https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms) |

## Normative quotes (selected AA)

From the official What's New page / WCAG 2.1:

**1.3.4 Orientation (AA):** Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.

**1.4.10 Reflow (AA):** Content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for vertical scrolling content at a width equivalent to 320 CSS pixels; horizontal scrolling content at a height equivalent to 256 CSS pixels; except for parts which require two-dimensional layout for usage or meaning.

**4.1.3 Status Messages (AA):** In content implemented using markup languages, status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.
