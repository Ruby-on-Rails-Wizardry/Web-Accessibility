---
title: Headings name the structure
description: Real heading elements, in order, so people and tools can jump the outline. Bold text is not a heading.
node: headings
---

Sighted people scan large type. Screen-reader users jump a **heading list**. That only works if the large type is `<h1>`–`<h6>`, not a styled `<div>` or `<p><strong>`.

Do not skip levels for looks (`h1` then `h4`). One `h1` for the page topic is the usual pattern.

Hook: part of **1.3.1** — this node is only headings, not tables or lists.

## Contrast

```html
<!-- worse -->
<p><strong>Shipping address</strong></p>

<!-- better -->
<h2>Shipping address</h2>
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: Given a page outline made of bold paragraphs, the learner can restore a sensible heading hierarchy.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item (edit the snippet)
- [ ] Isomorphic retest item

</div>
