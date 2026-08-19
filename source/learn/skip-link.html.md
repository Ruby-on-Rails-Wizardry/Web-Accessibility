---
title: Skip past repeated blocks
description: A keyboard user must not tab through the same header on every page before reaching the main content.
node: skip-link
---

[Operable](/learn/pour/): there has to be a way to **bypass** blocks that repeat (nav, chrome) and land in the unique content.

Usual web pattern: a skip link as the first focusable control, pointing at `id` on `<main>`. Landmarks and a heading structure also help; this node is the bypass itself.

Non-web documents are **excepted** from 2.4.1 under Section 508 E205.4. Web content is not.

Hooks: **2.4.1 Bypass Blocks**. Official pair: Sufficient [G1](https://www.w3.org/WAI/WCAG22/Techniques/general/G1). Understanding: [Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks).

## Contrast

```html
<!-- worse: first Tab lands in a 40-link header with no skip -->
<header>…dozens of links…</header>
<main>Article</main>

<!-- better -->
<a href="#main">Skip to main content</a>
<header>…</header>
<main id="main">Article</main>
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can add a working skip link to a page with a long header, or point at a missing one.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
