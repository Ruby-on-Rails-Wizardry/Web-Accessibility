---
title: Meaningful sequence
description: The order in the DOM is the order people hear and Tab through. CSS position is not a reading order.
node: meaningful-sequence
---

If the visual order is “heading, then paragraph, then button,” the source order must be that sequence. Absolute positioning that puts the “first” heading after the paragraph in the file fails people who linearize the page.

Related: [Focus order](/learn/focus-order/) is the Tab sequence through controls. This node is the reading order of the content as a whole.

Hooks: **1.3.2 Meaningful Sequence**. Official pair: Failure [F1](https://www.w3.org/WAI/WCAG22/Techniques/failures/F1), [F49](https://www.w3.org/WAI/WCAG22/Techniques/failures/F49); Sufficient [G57](https://www.w3.org/WAI/WCAG22/Techniques/general/G57).

## Contrast

```html
<!-- worse: CSS pulls the heading visually first; DOM is the reverse -->
<p class="body">Apply by Friday.</p>
<h2 class="pull-up">Permits</h2>

<!-- better: DOM matches the intended reading order -->
<h2>Permits</h2>
<p>Apply by Friday.</p>
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can point at a CSS-reordered block and restore a DOM order that matches the meaning.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
