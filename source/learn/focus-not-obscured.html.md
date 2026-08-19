---
title: Focus is not hidden behind chrome
description: A sticky header or cookie banner must not cover the thing that just received keyboard focus.
node: focus-not-obscured
---

WCAG **2.2** AA (**2.4.11**). After [focus is visible](/learn/visible-focus/): the focused control cannot be **entirely** hidden by author-created content (sticky footers, chat widgets, cookie bars).

AAA **2.4.12** asks that **no part** is hidden. This node is the AA minimum.

Not in 508 or ADA Title II as written.

Official: [Understanding Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum). Sufficient [C43](https://www.w3.org/WAI/WCAG22/Techniques/css/C43).

## Contrast

```css
/* worse: sticky footer covers the last links when they receive focus */
.cookie { position: sticky; bottom: 0; height: 80px; }

/* better: scroll-margin or padding so focused items clear the bar */
:focus { scroll-margin-bottom: 6rem; }
main { padding-bottom: 6rem; }
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can point at a sticky bar that covers focused links and free them.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
