---
title: No keyboard trap
description: Focus can move to a component and it can move on. Tab is not a one-way door.
node: no-keyboard-trap
rule: If the keyboard can move focus into a component, it can also move focus out using the keyboard.
---

After [the control can be operated](/learn/keyboard-operable/): a custom widget that eats Tab (or traps the arrow keys) and never gives focus back fails **2.1.2**. The person cannot reach the rest of the page.

A modal may hold focus *while it is open* if Escape (or a clearly documented key) closes it and returns focus. A widget that only lets go when you click outside is a trap.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<div class="editor" tabindex="0" data-trap="true">
  <!-- Tab cycles inside forever; no Escape -->
</div>
```

Keyboard focus enters and cannot leave.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<div role="dialog" aria-modal="true" aria-labelledby="dlg-title">
  <h2 id="dlg-title">Edit date</h2>
  <!-- Tab cycles the dialog. Escape or the Close button returns focus. -->
  <button type="button">Close</button>
</div>
```

A documented way out (Escape and a visible close). Focus returns to the control that opened it.

</div>

</div>

## Not a pass

A note in help text (“press Ctrl+Alt+F4 to exit”) is not enough unless that method is also standard and discoverable. A trap that you can leave with the mouse still fails this rule.

Do not put a live keyboard trap on this site as a demo.

## Official

**2.1.2 No Keyboard Trap** (A). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Failure [F10](https://www.w3.org/WAI/WCAG22/Techniques/failures/F10); Sufficient [G21](https://www.w3.org/WAI/WCAG22/Techniques/general/G21). Understanding: [No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap).
