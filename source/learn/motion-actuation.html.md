---
title: Motion is not the only input
description: Shake-to-undo and tilt-to-steer need a button (or other control), and a way to turn motion off.
node: motion-actuation
rule: Do not use device or user motion as the only input, and let people turn motion actuation off.
---

A phone on a wheelchair mount cannot be shaken. Tremor must not fire the action. After [path-only gestures](/learn/pointer-gestures/).

Functionality operated by **device or user motion** also needs a user-interface control, and responding to motion can be disabled — except an accessibility-supported interface or an essential motion (the pedometer *is* the step).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

“Shake to undo” with no other undo.

A mounted device, or someone who cannot shake without also tapping the screen, has no path.

</div>

<div class="example example--good" markdown="1">

## Good

An Undo button, and a setting that ignores shake.

The function is on a control. Motion can stay as an extra, and it can be turned off.

</div>

</div>

## Not a pass

A button that still requires a confirming shake fails this rule. Motion on by default with the off switch buried, and no UI control for the function itself, still fails. Calling a game “essential motion” when a button could steer does not make the exception.

## Official

**2.5.4 Motion Actuation** (A). WCAG 2.1 only — in `ada-title-ii` and `wcag-22-aa`, not `section-508-web`.

Sufficient [G213](https://www.w3.org/WAI/WCAG22/Techniques/general/G213). Understanding: [Motion Actuation](https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can add a non-motion control for a shake or tilt action.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
