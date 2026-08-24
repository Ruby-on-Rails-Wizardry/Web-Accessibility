---
title: Do not lock orientation
description: A page that only works in landscape fails a tablet bolted to a wheelchair in portrait — unless orientation is essential.
node: orientation
rule: Do not restrict a page to portrait or landscape unless that orientation is essential.
---

A tablet bolted to a wheelchair stays in one orientation. Content that only works in landscape (or only in portrait) shuts that person out.

Content does not restrict itself to portrait **or** landscape unless that orientation is essential (a piano app, a check deposit that needs a specific camera aspect). Layout that stacks at a narrow viewport is [Reflow](/learn/reflow/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```css
@media (orientation: portrait) {
  .app { display: none; }
}
.rotate-please { display: block; }
```

Portrait is blocked. A “please rotate” overlay is the only UI.

</div>

<div class="example example--good" markdown="1">

## Good

```css
.app { display: block; }
```

Layout adapts. There is no orientation lock.

</div>

</div>

## Not a pass

A rotate-device overlay that hides the app in one orientation is still a lock. `transform: rotate(90deg)` as a “fix” does not make portrait usable. Claiming a form is “essential landscape” because the mockup was wide does not meet the exception. `manifest` `orientation` that forces one way fails the same as the CSS.

## Official

**1.3.4 Orientation** (AA). WCAG 2.1 only — in `ada-title-ii` and `wcag-22-aa`, not `section-508-web`.

Sufficient [G214](https://www.w3.org/WAI/WCAG22/Techniques/general/G214). Understanding: [Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can remove an orientation lock, or justify an essential exception.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
