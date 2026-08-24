---
title: No path-only gesture
description: Pinch, swipe-along-a-path, and two-finger gestures need a single-pointer alternative (buttons, taps).
node: pointer-gestures
rule: Provide a single-pointer, non-path alternative for every pinch, swipe-along-a-path, or multipoint gesture.
---

A map that zooms only by pinch, or a control that only works if you draw a shape, locks out people who cannot make that path — tremor, one-handed use, some assistive pointers.

Provide a [single pointer](https://www.w3.org/TR/WCAG22/#dfn-single-pointer) way that is not path-based, unless the path **is** the thing (handwriting the signature as the task). Sisters: [Dragging](/learn/dragging/), [Pointer cancellation](/learn/pointer-cancellation/), [Motion is not the only input](/learn/motion-actuation/). Keyboard is a separate rule: [Keyboard can operate it](/learn/keyboard-operable/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

A map that can only zoom by pinch.

No button, tap, or other single-pointer path. People who cannot pinch cannot zoom.

</div>

<div class="example example--good" markdown="1">

## Good

The same map with `+` / `−` buttons (pinch may remain).

A single tap on a control does the job. The path-based gesture is optional.

</div>

</div>

## Not a pass

A keyboard shortcut without a single-pointer control still fails this rule — **2.5.1** is about the pointer, not [2.1.1](/learn/keyboard-operable/). Help text that says “use two fingers” is not an alternative. Drag-to-reorder is [its own node](/learn/dragging/).

## Official

**2.5.1 Pointer Gestures** (A). WCAG 2.1 only — in `ada-title-ii` and `wcag-22-aa`, not `section-508-web`.

Sufficient [G215](https://www.w3.org/WAI/WCAG22/Techniques/general/G215), [G216](https://www.w3.org/WAI/WCAG22/Techniques/general/G216). Understanding: [Pointer Gestures](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can add a single-pointer control for a pinch- or swipe-only action.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
