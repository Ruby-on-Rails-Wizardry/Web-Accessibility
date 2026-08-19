---
title: Do not lock orientation
description: A page that only works in landscape fails a tablet bolted to a wheelchair in portrait — unless orientation is essential.
node: orientation
---

WCAG **2.1**. Content does not restrict itself to portrait **or** landscape unless that orientation is essential (a piano app, a check deposit that needs a specific camera aspect).

Official: [Understanding Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation). Sufficient [G214](https://www.w3.org/WAI/WCAG22/Techniques/general/G214).

## Contrast

```css
/* worse */
@media (orientation: portrait) {
  .app { display: none; }
}
.rotate-please { display: block; }

/* better: layout adapts; no lock */
.app { display: block; }
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can remove an orientation lock, or justify an essential exception.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
