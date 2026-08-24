---
title: Text spacing
description: User style sheets that open line, letter, and word spacing must not clip buttons or hide text.
node: text-spacing
rule: Do not clip content when the person increases line, letter, and word spacing.
---

After [reflow](/learn/reflow/): people with dyslexia or low vision often increase spacing. If the CSS assumes tight metrics, labels vanish and buttons lose their last word.

No loss of content or function when the user sets **all** of: line height 1.5× font size, paragraph spacing 2×, letter spacing 0.12×, word spacing 0.16×.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```css
.teaser { height: 3rem; overflow: hidden; }
```

Fixed height plus overflow hidden clips the last line once line-height opens up.

</div>

<div class="example example--good" markdown="1">

## Good

```css
.teaser { min-height: 3rem; overflow: visible; }
```

The box grows. Extra spacing does not hide the text.

</div>

</div>

## Not a pass

You do not have to *set* those spacing values yourself; you have to *allow* them. `line-clamp` or a fixed-height button whose label overflows is still a fail. Author-chosen tight tracking that the user can override is fine; author CSS that fights the override is not.

## Official

**1.4.12 Text Spacing** (AA). In `ada-title-ii` (2.1 AA) and `wcag-22-aa` (2.2 AA). Not in `section-508-web` (WCAG 2.0 AA). 2.1-only.

Understanding: [Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing). Sufficient [C36](https://www.w3.org/WAI/WCAG22/Techniques/css/C36).
