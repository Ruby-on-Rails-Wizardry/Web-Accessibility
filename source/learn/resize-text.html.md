---
title: Text can resize
description: People enlarge text to 200%. The page must not clip or overlap so the words are lost.
node: resize-text
rule: Let text enlarge to 200% without clipping or overlapping that hides the words.
---

[Perceivable](/learn/pour/): zooming text is not a theme. People with low vision enlarge the words. A fixed-height card with `overflow: hidden` cuts the last lines; overlapping columns hide controls.

Reflow at 400% / 320 CSS pixels is a later 2.1 criterion: [Reflow](/learn/reflow/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```css
.card { height: 80px; overflow: hidden; font-size: 16px; }
```

A fixed-height box clips the text once it is enlarged.

</div>

<div class="example example--good" markdown="1">

## Good

```css
.card { min-height: 80px; overflow: visible; }
```

Height follows the text. Nothing is cut off at 200%.

</div>

</div>

## Not a pass

Browser page zoom that still clips a box fails this rule. Images of text do not resize with the words. Horizontal scrolling to read a line is a [reflow](/learn/reflow/) miss; this node is loss of content or function at 200% without assistive technology.

## Official

**1.4.4 Resize Text** (AA). In `section-508-web` (WCAG 2.0 AA), `ada-title-ii` (2.1 AA), and `wcag-22-aa` (2.2 AA).

Failure [F69](https://www.w3.org/WAI/WCAG22/Techniques/failures/F69), [F80](https://www.w3.org/WAI/WCAG22/Techniques/failures/F80); Sufficient [G142](https://www.w3.org/WAI/WCAG22/Techniques/general/G142), [G179](https://www.w3.org/WAI/WCAG22/Techniques/general/G179). Understanding: [Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can point at a clipped box at 200% zoom and free the height.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
