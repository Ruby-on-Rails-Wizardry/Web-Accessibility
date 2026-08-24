---
title: Meaningful sequence
description: The order in the DOM is the order people hear and Tab through. CSS position is not a reading order.
node: meaningful-sequence
rule: Keep the DOM in the same order as the intended reading order.
---

If the visual order is “heading, then paragraph, then button,” the source order must be that sequence. Absolute positioning that puts the “first” heading after the paragraph in the file fails people who linearize the page — screen-reader users, and anyone who gets CSS late or not at all.

[Focus order](/learn/focus-order/) is the Tab sequence through controls. This node is the reading order of the content as a whole. It sits with [headings](/learn/headings/) as structure you can follow without the layout.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<p class="body">Apply by Friday.</p>
<h2 class="pull-up">Permits</h2>
```

CSS pulls the heading visually first. The DOM is the reverse.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<h2>Permits</h2>
<p>Apply by Friday.</p>
```

The source order is the meaning. Layout can still style it.

</div>

</div>

## Not a pass

`tabindex` that fixes Tab order leaves the reading order wrong — that is a [focus order](/learn/focus-order/) patch, not this rule. CSS `order` or a sticky column that is last in the file still linearizes last.

## Official

**1.3.2 Meaningful Sequence** (A). In `section-508-web` (WCAG 2.0 AA), `ada-title-ii` (2.1 AA), and `wcag-22-aa` (2.2 AA).

Failure [F1](https://www.w3.org/WAI/WCAG22/Techniques/failures/F1), [F49](https://www.w3.org/WAI/WCAG22/Techniques/failures/F49); Sufficient [G57](https://www.w3.org/WAI/WCAG22/Techniques/general/G57). Understanding: [Meaningful Sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence).
