---
title: Focus is not hidden behind chrome
description: A sticky header or cookie banner must not cover the thing that just received keyboard focus.
node: focus-not-obscured
rule: Do not let author-created chrome entirely hide the control that has keyboard focus.
---

After [focus is visible](/learn/visible-focus/): the focused control cannot be **entirely** hidden by author-created content (sticky footers, chat widgets, cookie bars).

Keyboard users who Tab into a link under a sticky bar cannot see where they are. AAA **2.4.12** asks that **no part** is hidden. This node is the AA minimum.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```css
.cookie { position: sticky; bottom: 0; height: 80px; }
```

The sticky footer covers the last links when they receive focus.

</div>

<div class="example example--good" markdown="1">

## Good

```css
:focus { scroll-margin-bottom: 6rem; }
main { padding-bottom: 6rem; }
```

Focused items clear the bar. The control stays on screen.

</div>

</div>

## Not a pass

A visible focus ring that is fully covered still fails this node; [Focus Visible](/learn/visible-focus/) is a different check. User-opened content (a dropdown the person opened) is not this failure. Partially covering the control can pass AA and still fail AAA **2.4.12**.

## Official

**2.4.11 Focus Not Obscured (Minimum)** (AA). In `wcag-22-aa` (2.2 AA) only. Not in `section-508-web` (WCAG 2.0 AA) or `ada-title-ii` (2.1 AA). 2.2-only.

Understanding: [Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum). Sufficient [C43](https://www.w3.org/WAI/WCAG22/Techniques/css/C43).
