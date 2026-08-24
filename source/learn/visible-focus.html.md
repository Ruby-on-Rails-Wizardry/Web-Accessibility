---
title: Focus must be visible
description: When the keyboard is on a control, a person looking at the page can see that.
node: visible-focus
rule: Do not remove the focus indicator unless you replace it with something at least as clear.
---

If you can [Tab to it](/learn/keyboard-operable/) but cannot see where you are, Operable still fails for anyone watching the screen.

This site’s chrome already uses `:focus-visible` on purpose. A later rule: [Focus is not hidden behind chrome](/learn/focus-not-obscured/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```css
:focus { outline: none; }
```

No visible focus. Keyboard users cannot tell which control is active.

</div>

<div class="example example--good" markdown="1">

## Good

```css
:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
```

A clear ring (or an equivalent) when the keyboard is in use.

</div>

</div>

## Not a pass

`outline: none` plus a change that only a mouse hover would show still fails. A 1px `#eee` ring on white fails [non-text contrast](/learn/contrast-ui/) even if an outline exists. WCAG 2.2 also has focus appearance (**2.4.13**, AAA) — not this node.

## Official

**2.4.7 Focus Visible** (AA). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Understanding: [Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible).
