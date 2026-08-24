---
title: Non-text contrast
description: >-
  The border or icon that tells you “this is a field” or “this is the
  selected tab” needs 3:1 against adjacent colors.
node: contrast-ui
rule: >-
  Give controls, states, and needed graphics a 3:1 contrast edge against
  adjacent colors.
---

[Text contrast](/learn/contrast-text/) is 4.5:1 for words. This node is **3:1** for the border that says “this is a field,” the icon that is the only name of a button, and restyled focus, selected, or checked states.

A washed-out input edge shuts out people with low vision who cannot find the box. Inactive components and essential photographic presentation are excepted.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```css
input { border: 1px solid #eee; }
```

A 1px `#eee` border on white makes the field almost invisible.

</div>

<div class="example example--good" markdown="1">

## Good

```css
input { border: 1px solid #767676; }
```

The edge meets 3:1 against the adjacent background.

</div>

</div>

## Not a pass

Passing text contrast on the label does not save a washed-out field border. A 1px `#eee` focus ring on white still fails even if `outline` exists. A custom checkbox whose checked mark is only a pale tint fails this rule; disabled controls are the exception, not unreadably faint active ones.

## Official

**1.4.11 Non-text Contrast** (AA). In `ada-title-ii` (2.1 AA) and `wcag-22-aa` (2.2 AA). Not in `section-508-web` (WCAG 2.0 AA). 2.1-only.

Understanding: [Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast). Sufficient examples include [G195](https://www.w3.org/WAI/WCAG22/Techniques/general/G195) (related focus) and [G207](https://www.w3.org/WAI/WCAG22/Techniques/general/G207).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can point at a washed-out control border or icon and restore a 3:1 edge.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
