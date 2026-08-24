---
title: Pointer cancellation
description: Down-event must not complete the action. Let the person abort by sliding off, or undo.
node: pointer-cancellation
rule: Do not complete an action on the down-event. Finish on up, with a way to abort or undo.
---

Accidental touches happen. If `mousedown` / `touchstart` already submitted or deleted, there is no recovery — especially for tremor, motor difference, or a mis-aimed tap.

At least one of: the **down-event** does not run the action; completion is on **up** and there is abort/undo; the up-event **reverses** the down-event; or down-event completion is **essential**. After [path-only gestures](/learn/pointer-gestures/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<button type="button" ontouchstart="endCall()">End call</button>
```

`touchstart` hangs up immediately. There is no chance to slide off.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<button type="button" onclick="endCall()">End call</button>
```

The action runs on `click` / `mouseup`. Sliding off the button before release cancels.

</div>

</div>

## Not a pass

`mouseup` that still fires after the pointer has left the control is not an abort. An Undo buried three menus deep after an immediate delete on `touchstart` is not recovery. Native `click` already uses the up-event — do not replace it with `mousedown` for “snappier” UI.

## Official

**2.5.2 Pointer Cancellation** (A). WCAG 2.1 only — in `ada-title-ii` and `wcag-22-aa`, not `section-508-web`.

Sufficient [G210](https://www.w3.org/WAI/WCAG22/Techniques/general/G210), [G212](https://www.w3.org/WAI/WCAG22/Techniques/general/G212). Understanding: [Pointer Cancellation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation).
