---
title: Reflow
description: At a 320-pixel-wide viewport, content stacks. Two-dimensional scrolling of a whole page to read a sentence fails.
node: reflow
rule: Reflow the layout so a 320-pixel-wide viewport does not need two-axis scrolling to read.
---

After [text can resize](/learn/resize-text/): the layout must **reflow** so a person can read at the equivalent of 320 CSS pixels wide (or 256 high for horizontal writing) without scrolling in two dimensions.

A fixed 1200px canvas shuts out people who zoom to 400% and people on a narrow viewport. Maps, data tables, and toolbars that need two dimensions are excepted. Next: [Text spacing](/learn/text-spacing/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```css
.page { width: 1200px; }
```

A fixed canvas forces sideways scroll to finish a sentence.

</div>

<div class="example example--good" markdown="1">

## Good

```css
.page { max-width: 40rem; }
.grid { display: flex; flex-wrap: wrap; }
```

The column stacks. Reading uses one scroll axis.

</div>

</div>

## Not a pass

`overflow-x: auto` on the whole page is not a reflow. A responsive nav that still leaves the article at 1200px fails. A data table that scrolls in two axes is excepted; a paragraph of body copy that requires the same scroll is not.

## Official

**1.4.10 Reflow** (AA). In `ada-title-ii` (2.1 AA) and `wcag-22-aa` (2.2 AA). Not in `section-508-web` (WCAG 2.0 AA). 2.1-only.

Understanding: [Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow). Sufficient CSS: [C32](https://www.w3.org/WAI/WCAG22/Techniques/css/C32), [C31](https://www.w3.org/WAI/WCAG22/Techniques/css/C31).
