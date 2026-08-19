---
title: Accessibility principles (POUR)
description: Perceivable, Operable, Understandable, Robust.
---

> **Local copy for agent and developer use.** This is not the official specification.
>
> **Sources:**
> - [Accessibility Principles](https://www.w3.org/WAI/fundamentals/accessibility-principles/) — W3C WAI
> - [Introduction to Understanding WCAG 2.2 — Four Principles](https://www.w3.org/WAI/WCAG22/Understanding/intro#understanding-the-four-principles-of-accessibility)
>
> **Status:** Informative. Not a complete list of requirements.
>
> Copyright © World Wide Web Consortium. https://www.w3.org/copyright/document-license-2023/
>
> This software or document includes material copied from or derived from [Accessibility Principles](https://www.w3.org/WAI/fundamentals/accessibility-principles/) and [Introduction to Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/intro).

Anyone who wants to use the web must have content that is:

1. **Perceivable** — Information and user interface components must be presentable to users in ways they can perceive. It cannot be invisible to all of their senses.
2. **Operable** — User interface components and navigation must be operable. The interface cannot require interaction a user cannot perform.
3. **Understandable** — Information and the operation of the user interface must be understandable. Content or operation cannot be beyond their understanding.
4. **Robust** — Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies. As technologies evolve, the content should remain accessible.

If any of these are not true, users with disabilities will not be able to use the web. WCAG 2.2 includes only guidelines that address problems particular to people with disabilities — issues that block or interfere with access more severely for those users.

Web accessibility also depends on **user agents** (browsers, players, assistive technologies) and **authoring tools** (editors, CMS, IDEs, and agents that generate content). Standards for those are UAAG and ATAG. See [Essential Components](https://www.w3.org/WAI/fundamentals/components/).

## Perceivable

### Text alternatives for non-text content

Short equivalents for images, icons, buttons, and graphics; descriptions of charts and illustrations; labels for form controls. Text alternatives can be read aloud, enlarged, or shown on braille devices. They also label controls for keyboard and speech input.

- WCAG: [Guideline 1.1](https://www.w3.org/WAI/WCAG22/quickref/#text-alternatives)

### Captions and other alternatives for multimedia

Transcripts and captions for audio; audio descriptions of important visual detail; sign language interpretation. A well-written transcript is the base for captions and descriptions.

- WCAG: [Guideline 1.2](https://www.w3.org/WAI/WCAG22/quickref/#time-based-media)

### Content can be presented in different ways

Headings, lists, tables, and inputs marked up properly; sequence independent of presentation; browsers and AT can customize presentation. Enables reading aloud, enlargement, custom colors, outlines, and summaries.

- WCAG: [Guideline 1.3](https://www.w3.org/WAI/WCAG22/quickref/#adaptable)

### Content is easier to see and hear

Color is not the only cue; sufficient contrast; text can resize to 400% and accept spacing changes without loss; reflow in small viewports; avoid or replace images of text; users can pause or control audio.

- WCAG: [Guideline 1.4](https://www.w3.org/WAI/WCAG22/quickref/#distinguishable)

## Operable

### Functionality is available from a keyboard

Everything available by mouse is available by keyboard; focus is not trapped. Helps keyboard users, switch users, and speech-input users.

- WCAG: [Guideline 2.1](https://www.w3.org/WAI/WCAG22/quickref/#keyboard-accessible)

### Users have enough time

Stop, extend, or adjust time limits; pause moving content; postpone interruptions; re-authenticate without data loss.

- WCAG: [Guideline 2.2](https://www.w3.org/WAI/WCAG22/quickref/#enough-time)

### Content does not cause seizures and physical reactions

Avoid flashing at known-risk rates; warn and provide alternatives; allow turning off animation.

- WCAG: [Guideline 2.3](https://www.w3.org/WAI/WCAG22/quickref/#seizures-and-physical-reactions)

### Users can navigate, find content, and know where they are

Clear titles and headings; more than one way to find pages; location within a set; skip repeated blocks; visible focus in a meaningful order; link purpose is evident.

- WCAG: [Guideline 2.4](https://www.w3.org/WAI/WCAG22/quickref/#navigable)

### Users can use input modalities beyond keyboard

Alternatives to path-based or multipoint gestures; avoid accidental activation; visible label matches accessible name (voice); motion actuation has a UI alternative; targets large enough to hit.

- WCAG: [Guideline 2.5](https://www.w3.org/WAI/WCAG22/quickref/#input-modalities)

## Understandable

### Text is readable and understandable

Identify page language and language of parts; define unusual words; use the clearest language possible.

- WCAG: [Guideline 3.1](https://www.w3.org/WAI/WCAG22/quickref/#readable)

### Content appears and operates in predictable ways

Repeated navigation and components stay consistent; significant changes do not happen without consent.

- WCAG: [Guideline 3.2](https://www.w3.org/WAI/WCAG22/quickref/#predictable)

### Users are helped to avoid and correct mistakes

Instructions, error messages, and suggestions; context-sensitive help; review, correct, or reverse submissions.

- WCAG: [Guideline 3.3](https://www.w3.org/WAI/WCAG22/quickref/#input-assistance)

## Robust

### Content is compatible with current and future user tools

Markup can be reliably interpreted; custom controls expose name, role, and value.

- WCAG: [Guideline 4.1](https://www.w3.org/WAI/WCAG22/quickref/#compatible)

## Stories of web users

Official personas that illustrate these principles: [Stories of Web Users](https://www.w3.org/WAI/people-use-web/user-stories/).
