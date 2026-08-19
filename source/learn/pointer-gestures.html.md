---
title: No path-only gesture
description: Pinch, swipe-along-a-path, and two-finger gestures need a single-pointer alternative (buttons, taps).
node: pointer-gestures
---

WCAG **2.1**. Multipoint or **path-based** gestures (draw this shape, pinch to zoom with no buttons) lock out people who cannot make that path.

Provide a [single pointer](https://www.w3.org/TR/WCAG22/#dfn-single-pointer) way that is not path-based, unless the path **is** the thing (handwriting the signature as the task).

Sisters: [Dragging](/learn/dragging/), [Pointer cancellation](/learn/pointer-cancellation/).

Hooks: **2.5.1 Pointer Gestures**. Official: [Understanding Pointer Gestures](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures). Sufficient [G215](https://www.w3.org/WAI/WCAG22/Techniques/general/G215), [G216](https://www.w3.org/WAI/WCAG22/Techniques/general/G216).

## Contrast

**Worse:** A map that can only zoom by pinch.

**Better:** The same map with `+` / `−` buttons (pinch may remain).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can add a single-pointer control for a pinch- or swipe-only action.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
