---
title: Pointer cancellation
description: Down-event must not complete the action. Let the person abort by sliding off, or undo.
node: pointer-cancellation
---

WCAG **2.1**. Accidental touches happen. If `mousedown` / `touchstart` already submitted or deleted, there is no recovery.

At least one of: the **down-event** does not run the action; completion is on **up** and there is abort/undo; the up-event **reverses** the down-event; or down-event completion is **essential**.

Hooks: **2.5.2 Pointer Cancellation**. Official: [Understanding Pointer Cancellation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation). Sufficient [G210](https://www.w3.org/WAI/WCAG22/Techniques/general/G210), [G212](https://www.w3.org/WAI/WCAG22/Techniques/general/G212).

## Contrast

**Worse:** `touchstart` on “End call” hangs up immediately.

**Better:** The action runs on `click` / `mouseup`. Sliding off the button before release cancels.

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can move an action from mousedown to click and say why.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
