# Making Content Usable for People with Cognitive and Learning Disabilities

> **Local copy for agent and developer use.** This is not the official specification.
>
> **Source:** [Making Content Usable for People with Cognitive and Learning Disabilities](https://www.w3.org/TR/coga-usable/) — W3C Working Group Note, 29 April 2021
>
> **Dated:** https://www.w3.org/TR/2021/NOTE-coga-usable-20210429/
>
> **Status:** Informative Working Group Note. **Not** a W3C standard. Does not add WCAG success criteria.
>
> Copyright © 2021 World Wide Web Consortium. https://www.w3.org/copyright/document-license-2023/
>
> This software or document includes material copied from or derived from [Making Content Usable for People with Cognitive and Learning Disabilities](https://www.w3.org/TR/coga-usable/).

Content Usable is for people who make web pages and web applications. It gives advice on making content usable for people with cognitive and learning disabilities. It was published by the Cognitive and Learning Disabilities Accessibility Task Force (COGA) of APA and AG WG.

The short pattern list also appears as [Cognitive Accessibility Guidance](https://www.w3.org/WAI/WCAG2/supplemental/#cognitiveaccessibilityguidance). Use that for a checklist; use the Note for personas, user stories, and “how it helps.”

## How the Note is organized

High-level **objectives**, each with:

- user needs and user stories
- design patterns (what to do)
- personas / scenarios
- (in the full Note) testing and inclusion guidance

## Objectives and design patterns

From the official Design Guide table of contents (https://www.w3.org/TR/coga-usable/design_guide.html).

### Objective 1 — Help users understand what things are and how to use them

- Make the purpose of your page clear
- Use a familiar hierarchy and design
- Use a consistent visual design
- Make each step clear
- Clearly identify controls and their use
- Make the relationship clear between controls and the content they affect
- Use icons that help the user

### Objective 2 — Help users find what they need

- Make it easy to find the most important tasks and features of the site
- Make the site hierarchy easy to understand and navigate
- Use a clear and understandable page structure
- Make it easy to find the most important actions and information on the page
- Break media into chunks
- Provide search

### Objective 3 — Use clear and understandable content

- Use clear words
- Use a simple tense and voice
- Avoid double negatives or nested clauses
- Use literal language
- Keep text succinct
- Use clear, unambiguous formatting and punctuation
- Include symbols and letters necessary to decipher the words
- Provide a summary of long documents and media
- Separate each instruction
- Use white spacing
- Ensure foreground content is not obscured by background
- Explain implied content
- Provide alternatives for numerical concepts

### Objective 4 — Help users avoid mistakes and know how to correct them

- Ensure controls and content do not move unexpectedly
- Let users go back
- Notify users of fees and charges at the start of a task
- Design forms to prevent mistakes
- Make it easy to undo form errors
- Use clear visible labels
- Use clear step-by-step instructions
- Accept different input formats
- Avoid data loss and timeouts
- Provide feedback
- Help the user stay safe
- Use familiar metrics and units

The Note continues with further objectives (help users maintain focus; ensure processes do not rely on memory; provide help and support; support adaptation and personalization). Read them in the official Note rather than trusting a partial extract:

- User stories: https://www.w3.org/TR/coga-usable/#user_needs
- Design guide: https://www.w3.org/TR/coga-usable/design_guide.html
- Introduction: https://www.w3.org/TR/coga-usable/introduction.html

## How this relates to WCAG 2.2

Several 2.2 criteria grew out of the same user needs:

| Content Usable theme | Related WCAG 2.2 criterion |
| --- | --- |
| Find help in the same place | 3.2.6 Consistent Help (A) |
| Do not retype the same information | 3.3.7 Redundant Entry (A) |
| Do not force recall / transcription to log in | 3.3.8 Accessible Authentication (AA) |
| Enough time; no surprise data loss | 2.2.1, 2.2.6 (AAA) |
| Clear labels and error repair | 3.3.1–3.3.4 |
| Predictable layout | 3.2.3, 3.2.4 |

Meeting those criteria is necessary for a 2.2 AA claim. Following the rest of the patterns is how you reduce real cognitive load for users — and, separately, how you should design **agent workflows** for developers (one task, visible next step, no re-entry of the same context). See [../agents/reducing-cognitive-load.md](../agents/reducing-cognitive-load.md).
