---
title: Target size
description: Pointer targets need room — 24 by 24 CSS pixels, or enough spacing that a 24-pixel circle does not hit a neighbor.
node: target-size
---

WCAG **2.2** AA (**2.5.8**). Not in 508 or ADA Title II. AAA **2.5.5** is 44×44.

Small, packed buttons miss people with tremor or large fingers. Undersized targets may still pass if they have **spacing**, an **equivalent** larger control, they are **inline** in text, the **user agent** sized them, or the size is **essential**.

Official: [Understanding Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum). Sufficient [C42](https://www.w3.org/WAI/WCAG22/Techniques/css/C42).

## Contrast

```css
/* worse: 16×16 icons flush against each other */
.icon { width: 16px; height: 16px; margin: 0; }

/* better: 24×24, or the same 16px with enough gap that 24px circles do not overlap */
.icon { width: 24px; height: 24px; }
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can enlarge or space a cluster of icon buttons to meet 2.5.8.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
