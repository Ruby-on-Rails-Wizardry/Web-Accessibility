---
title: Text can resize
description: People enlarge text to 200%. The page must not clip or overlap so the words are lost.
node: resize-text
---

[Perceivable](/learn/pour/): zooming text is not a “nice theme.” **1.4.4** requires that text can be resized up to **200%** without assistive technology and without loss of content or function.

Reflow at 400% / 320 CSS pixels is a later 2.1 criterion: [Reflow](/learn/reflow/).

Official pair: Failure [F69](https://www.w3.org/WAI/WCAG22/Techniques/failures/F69), [F80](https://www.w3.org/WAI/WCAG22/Techniques/failures/F80); Sufficient [G142](https://www.w3.org/WAI/WCAG22/Techniques/general/G142), [G179](https://www.w3.org/WAI/WCAG22/Techniques/general/G179). Understanding: [Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text).

## Contrast

```css
/* worse: fixed-height box clips enlarged text */
.card { height: 80px; overflow: hidden; font-size: 16px; }

/* better: height follows the text */
.card { min-height: 80px; overflow: visible; }
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can point at a clipped box at 200% zoom and free the height.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
