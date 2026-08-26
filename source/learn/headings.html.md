---
title: Headings name the structure
description: Real heading elements, in order, so people and tools can jump the outline. Two rules live under this family.
node: headings
sc:
  - "1.3.1"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
---

This is a **family**, not one cop. Sighted people scan large type. Screen-reader users jump a **heading list**. That only works if the large type is a heading in the markup, and the outline does not skip around for looks.

- [Headings are heading elements](/learn/heading-elements/) — `<h1>`–`<h6>`, not a styled paragraph.
- [Do not skip heading levels](/learn/heading-order/) — `h1` then `h2`, not `h1` then `h4`.

Sisters that are not headings: [Lists are lists](/learn/lists/), [Data tables have headers](/learn/data-tables/), [Meaningful sequence](/learn/meaningful-sequence/), [Link purpose in context](/learn/link-purpose/).

Hook: part of **1.3.1** — this family is only headings, not tables or lists.

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that follow both heading rules</a> — mark every card that uses heading elements and nests in order. A miss names the child rule.</p>

<p><a href="fix/" data-turbo="false">Fix the heading outline</a> — restore heading elements and nested levels, then <strong>Apply</strong>. What still fails is what to restudy.</p>
