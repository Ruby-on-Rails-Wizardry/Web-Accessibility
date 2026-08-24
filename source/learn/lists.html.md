---
title: Lists are lists
description: A sequence of related items is a list in the markup, not a stack of divs that only look like bullets.
node: lists
rule: Mark related items as a list in the markup, not as styled divs that only look like bullets.
---

[Perceivable](/learn/pour/): the relationship “these items belong together, in this order or as a set” has to be in the structure, not only in CSS. Screen-reader users hear the list and the count. Styled `div`s give them a flat stack.

Use `ul`, `ol`, or `dl`. [Headings](/learn/headings/) name sections. Lists name collections. [Data tables](/learn/data-tables/) name two-dimensional data.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<div class="bullet">Milk</div>
<div class="bullet">Eggs</div>
```

Looks like a list. Nothing exposes a list or an item count.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<ul>
  <li>Milk</li>
  <li>Eggs</li>
</ul>
```

It is a list. Tools can announce two items and move by item.

</div>

</div>

## Not a pass

CSS `::before` bullets on `div`s still fail. `role="list"` on a wrapper whose children are not list items does not expose a list. Line breaks between phrases are not a list.

## Official

**1.3.1 Info and Relationships** (A). In `section-508-web` (WCAG 2.0 AA), `ada-title-ii` (2.1 AA), and `wcag-22-aa` (2.2 AA).

Failure [F2](https://www.w3.org/WAI/WCAG22/Techniques/failures/F2); Sufficient [H48](https://www.w3.org/WAI/WCAG22/Techniques/html/H48). Understanding: [Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships).
