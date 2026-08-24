---
title: Text contrast
description: >-
  Body text needs 4.5:1 against its background (3:1 if large). Color that
  only looks stylish in a dark office still fails.
node: contrast-text
rule: >-
  Keep normal text at least 4.5:1 against its background (3:1 if large).
---

After [color is not the only cue](/learn/color-not-only-cue/): the words still have to be **readable**. Light gray on white shuts out people with low vision and anyone reading in glare.

UI chrome (input borders, icons) is the next node: [Non-text contrast](/learn/contrast-ui/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```css
.fine-print { color: #aaa; background: #fff; }
```

Light gray on white is well under 4.5:1. Body copy is lost.

</div>

<div class="example example--good" markdown="1">

## Good

```css
.fine-print { color: #222; background: #fff; }
```

Near-black on white meets the minimum for normal text.

</div>

</div>

## Not a pass

A logo or “incidental” exception does not cover paragraph copy. Placeholder-only hints often fail this ratio even when the field has a label. Large-text 3:1 is only for 18pt / 14pt bold and up — not a slightly bigger caption.

## Official

**1.4.3 Contrast (Minimum)** (AA). In `section-508-web` (WCAG 2.0 AA), `ada-title-ii` (2.1 AA), and `wcag-22-aa` (2.2 AA).

Failure [F24](https://www.w3.org/WAI/WCAG22/Techniques/failures/F24), [F83](https://www.w3.org/WAI/WCAG22/Techniques/failures/F83); Sufficient [G18](https://www.w3.org/WAI/WCAG22/Techniques/general/G18), [G145](https://www.w3.org/WAI/WCAG22/Techniques/general/G145). Understanding: [Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: Given two hex colors, the learner can say pass/fail for 1.4.3 and fix the pair.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
