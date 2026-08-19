---
title: Focus must be visible
description: When the keyboard is on a control, a person looking at the page can see that.
node: visible-focus
---

If you can [Tab to it](/learn/keyboard-access/) but cannot see where you are, Operable still fails for anyone watching the screen.

Do not remove the outline unless you replace it with something at least as clear. WCAG 2.2 also has focus appearance and not-obscured criteria (later nodes).

Hook: **2.4.7 Focus Visible**.

## Contrast

```css
/* worse */
:focus { outline: none; }

/* better — keep a clear focus, or replace it */
:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
```

This site’s chrome already uses `:focus-visible` on purpose.

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can restore a visible focus indicator and refuse `outline: none` without a replacement.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item (edit CSS or markup)
- [ ] Isomorphic retest item
- [ ] Later: 2.4.11 / 2.4.13 as their own nodes

</div>
