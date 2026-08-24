---
title: Target size
description: Pointer targets need room — 24 by 24 CSS pixels, or enough spacing that a 24-pixel circle does not hit a neighbor.
node: target-size
rule: Give every pointer target a 24 by 24 CSS pixel hit area, or space it so a 24-pixel circle misses its neighbors.
---

Small, packed buttons miss people with tremor or large fingers. A 16-pixel icon flush against the next one is easy to miss and easy to hit by accident.

This is a WCAG 2.2 bar. Undersized targets may still pass if they have **spacing**, an **equivalent** larger control, they are **inline** in text, the **user agent** sized them, or the size is **essential**.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```css
.icon { width: 16px; height: 16px; margin: 0; }
```

16×16 icons flush against each other. A 24-pixel circle around each hit overlaps the next.

</div>

<div class="example example--good" markdown="1">

## Good

```css
.icon { width: 24px; height: 24px; }
```

Each target is 24 by 24 CSS pixels (or the same 16px with enough gap that 24px circles do not overlap).

</div>

</div>

## Not a pass

A 24px *drawing* on a 16px hit target still fails. Empty-looking space that belongs to the next control’s padding still overlaps. The inline exception is for links in a sentence, not a toolbar of icon buttons. AAA **2.5.5** is 44×44 — not this node.

## Official

**2.5.8 Target Size (Minimum)** (AA). WCAG 2.2 only — in `wcag-22-aa`, not `section-508-web` or `ada-title-ii`.

Sufficient [C42](https://www.w3.org/WAI/WCAG22/Techniques/css/C42). Understanding: [Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can enlarge or space a cluster of icon buttons to meet 2.5.8.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
