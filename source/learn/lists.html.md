---
title: Lists are lists
description: A sequence of related items is a list in the markup, not a stack of divs that only look like bullets.
node: lists
---

[Perceivable](/learn/pour/) / [1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships): the relationship “these items belong together, in this order or as a set” has to be in the structure, not only in CSS.

Use `ul`, `ol`, or `dl`. Screen readers announce the list and the count. Styled `div`s do not.

[Headings](/learn/headings/) name sections. Lists name collections. [Data tables](/learn/data-tables/) name two-dimensional data.

Hooks: **1.3.1 Info and Relationships**. Official pair: Failure [F2](https://www.w3.org/WAI/WCAG22/Techniques/failures/F2); Sufficient [H48](https://www.w3.org/WAI/WCAG22/Techniques/html/H48).

## Contrast

```html
<!-- worse -->
<div class="bullet">Milk</div>
<div class="bullet">Eggs</div>

<!-- better -->
<ul>
  <li>Milk</li>
  <li>Eggs</li>
</ul>
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can turn a stack of styled divs into a list and say what a screen reader gains.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
