---
title: Reflow
description: At a 320-pixel-wide viewport, content stacks. Two-dimensional scrolling of a whole page to read a sentence fails.
node: reflow
---

WCAG **2.1** (ADA Title II and `wcag-22-aa`; not 508’s 2.0 bar).

After [text can resize](/learn/resize-text/): the layout must **reflow** so a person can read at the equivalent of 320 CSS pixels wide (or 256 high for horizontal writing) without scrolling in two dimensions — except for things that need two dimensions (maps, data tables, toolbars).

Official: [Understanding Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow). Sufficient CSS: [C32](https://www.w3.org/WAI/WCAG22/Techniques/css/C32), [C31](https://www.w3.org/WAI/WCAG22/Techniques/css/C31).

## Contrast

```css
/* worse: fixed 1200px canvas; mobile and 400% zoom force sideways scroll to read */
.page { width: 1200px; }

/* better */
.page { max-width: 40rem; }
.grid { display: flex; flex-wrap: wrap; }
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can name a page that requires two-axis scrolling to read a line, and say whether a map is excepted.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
