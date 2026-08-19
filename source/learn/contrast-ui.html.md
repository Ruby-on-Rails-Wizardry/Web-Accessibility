---
title: Non-text contrast
description: The border or icon that tells you “this is a field” or “this is the selected tab” needs 3:1 against adjacent colors.
node: contrast-ui
---

WCAG **2.1** (in ADA Title II and `wcag-22-aa`; not in Section 508’s 2.0 bar).

[Text contrast](/learn/contrast-text/) is 4.5:1 for words. This node is **3:1** for:

- Visual information needed to identify a control (an input’s border)
- States you must see (focus, selected, checked) when you restyle them
- Parts of a graphic required to understand it

Inactive components and essential photographic presentation are excepted.

Hooks: **1.4.11 Non-text Contrast**. Official: [Understanding Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast). Sufficient examples include [G195](https://www.w3.org/WAI/WCAG22/Techniques/general/G195) (related focus) and [G207](https://www.w3.org/WAI/WCAG22/Techniques/general/G207).

## Contrast

```css
/* worse: 1px #eee border on #fff — the field is almost invisible */
input { border: 1px solid #eee; }

/* better: a 3:1 edge */
input { border: 1px solid #767676; }
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can point at a washed-out control border or icon and restore a 3:1 edge.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
