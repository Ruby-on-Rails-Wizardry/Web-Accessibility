---
title: Content on hover or focus
description: A tooltip that appears on hover must be dismissible, hoverable, and persistent — not a disappearing box that covers the thing you were reading.
node: content-on-hover
---

WCAG **2.1**. Extra content triggered by hover or keyboard focus (tooltips, submenus, custom titles) must be:

1. **Dismissible** without moving pointer or focus (usually Escape), unless it is an error and does not obscure.
2. **Hoverable** — the pointer can move onto the new content without it vanishing.
3. **Persistent** until hover/focus is removed, the user dismisses it, or it is no longer valid.

Browser-native `title` tooltips are a user-agent exception (and a poor tooltip). Prefer visible text.

Official pair: Failure [F95](https://www.w3.org/WAI/WCAG22/Techniques/failures/F95); Sufficient [SCR39](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR39). Understanding: [Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus).

## Contrast

**Worse:** A hover definition appears, covers the next word, and disappears when you try to move the pointer onto it. There is no Escape.

**Better:** The same definition stays while hovered or focused, can be pointed at, and Escape closes it.

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can list the three 1.4.13 conditions and point at a tooltip that fails one of them.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
