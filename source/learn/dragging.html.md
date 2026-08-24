---
title: Dragging has a simple alternative
description: Anything that requires hold-and-drag also needs a tap, click, or button path.
node: dragging
rule: Give every drag action a tap, click, or button alternative.
---

[Pointer gestures](/learn/pointer-gestures/) are multipoint or path-shaped. This node is **drag**: press, move, release. People with tremor cannot do that reliably.

Provide a single-pointer way that is **not** a drag (up/down buttons, a select, a tap to pick then tap to drop), unless dragging is essential or the user agent owns it. This is a WCAG 2.2 bar.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

A kanban card can only change columns by dragging.

Hold, move, release is the only pointer path. Tremor or a simple pointer cannot finish the move.

</div>

<div class="example example--good" markdown="1">

## Good

Each card also has “Move to…” with a list of columns.

A click or tap completes the same action. Drag may remain as an extra.

</div>

</div>

## Not a pass

Arrow keys without a click/tap path still fail this rule — keyboard is [2.1.1](/learn/keyboard-operable/). A drag that snaps to a column after a long-press is still a drag. “Tap to pick, then drag to drop” is not a non-drag alternative.

## Official

**2.5.7 Dragging Movements** (AA). WCAG 2.2 only — in `wcag-22-aa`, not `section-508-web` or `ada-title-ii`.

Sufficient [G219](https://www.w3.org/WAI/WCAG22/Techniques/general/G219). Understanding: [Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can add a non-drag control for a reorder or move action.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
