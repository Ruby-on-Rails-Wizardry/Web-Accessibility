---
title: Authoring Tool Accessibility Guidelines (ATAG) 2.0
description: ATAG 2.0 for IDEs, CMS, and agents that generate content.
---

> **Local copy for agent and developer use.** This is not the official specification.
>
> **Source:** [ATAG Overview](https://www.w3.org/WAI/standards-guidelines/atag/) — W3C WAI
>
> **Normative:** [ATAG 2.0](https://www.w3.org/TR/ATAG20/) — W3C Recommendation, 24 September 2015
>
> **Implementing ATAG 2.0** (informative): https://www.w3.org/TR/IMPLEMENTING-ATAG20/
>
> **Status:** Recommendation. ATAG 2.0 references **WCAG 2.0**. W3C encourages using the latest WCAG 2 for the content the tool produces. Updating ATAG is being explored in the [ATAG Community Group](https://www.w3.org/community/atag/).
>
> Copyright © World Wide Web Consortium. https://www.w3.org/copyright/document-license-2023/
>
> This software or document includes material copied from or derived from [ATAG Overview](https://www.w3.org/WAI/standards-guidelines/atag/).

Authoring tools are software and services that **authors** (developers, designers, writers) use to produce web content. ATAG explains how to:

1. make the **authoring tool itself** accessible, so people with disabilities can create content, **and**
2. **help authors create more accessible content** — enable, support, and promote production of content that conforms to WCAG.

That second part is the official model for **agents that generate UI, copy, or tests**. The agent is an authoring tool.

## Who ATAG is for

Developers of:

- WYSIWYG HTML editors
- CMS, LMS, courseware, aggregators, no-code website builders
- document converters (word processors with Save as HTML or EPUB)
- multimedia authoring tools
- sites that let users add content (blogs, wikis, photo sharing, forums, social)
- other tools in the [ATAG glossary definition](https://www.w3.org/TR/ATAG20/#def-Authoring-Tool)

Also used by people choosing tools, and by buyers asking a vendor to improve accessibility.

Section 508 has its own authoring-tool chapter ([504](https://www.access-board.gov/ict/#504-authoring-tools)). Use both when the tool is federal ICT.

## Structure

**Part A** — make the authoring tool user interface accessible.

**Part B** — support production of accessible content.

Layers: principles → guidelines → testable success criteria at A / AA / AAA.

Short summary: [ATAG at a Glance](https://www.w3.org/WAI/standards-guidelines/atag/glance/).

## Why this matters for agents

Part B is the cognitive-load reducer. A good authoring tool (or agent) should:

- generate content that can meet the active WCAG profile by default
- **prompt** for missing alternatives (alt text, names, captions) instead of silently omitting them
- check and **repair** accessibility problems, with explanations tied to a success criterion
- document how to produce accessible content
- not require the author to memorize 50+ criteria

That is the opposite of dumping the full WCAG Recommendation into every prompt. See [../agents/reducing-cognitive-load.md](../agents/reducing-cognitive-load/).

## Official tools and topical guides

- [ATAG Report Tool](https://www.w3.org/WAI/atag/report-tool/)
- [Authoring Tools List](https://www.w3.org/WAI/tools-list/authoring/)
- [Standards to Make Your LMS Accessible](https://www.w3.org/WAI/standards-guidelines/atag/education/)
- [No-code website tools](https://www.w3.org/WAI/standards-guidelines/atag/no-code/)
- [Social media platforms](https://www.w3.org/WAI/standards-guidelines/atag/social-media/)

Authorized translation: [ATAG 2.0, Chinese Simplified](https://www.w3.org/Translations/ATAG20-zh/).
