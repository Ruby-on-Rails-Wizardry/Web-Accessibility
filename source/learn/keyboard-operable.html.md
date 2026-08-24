---
title: Keyboard can operate it
description: If a pointer can do it, Tab and the usual keys can do it. No mouse-only control.
node: keyboard-operable
rule: Every action available by pointer is also available from the keyboard.
---

Some people do not use a mouse. A date picker that opens only on hover, a `div` that reacts only to `click`, a drag that has no keyboard equivalent — those shut out keyboard (and many switch and speech) users.

Native [controls](/learn/native-control/) already take Enter, Space, and Tab. Custom widgets have to match that. Leaving is a separate rule: [No keyboard trap](/learn/no-keyboard-trap/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<div class="datepicker" onmouseover="openCal()">
  Choose a date
</div>
```

Hover opens it. There is no focusable control and no keyboard path.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<label for="date">Date</label>
<input id="date" type="date">
```

A native date field (or a button that opens the calendar, arrows that move the day, Enter that chooses).

</div>

</div>

## Not a pass

`tabindex="0"` on a `div` with an `onclick` still misses unless Enter and Space activate it and a [role](/learn/name-role-value/) is exposed. A control that works with Tab but not with the keys that native controls use is still a miss. Path-only pointer gestures are [their own family](/learn/pointer-gestures/).

## Official

**2.1.1 Keyboard** (A). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Failure [F54](https://www.w3.org/WAI/WCAG22/Techniques/failures/F54); Sufficient [G202](https://www.w3.org/WAI/WCAG22/Techniques/general/G202). Understanding: [Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard).
