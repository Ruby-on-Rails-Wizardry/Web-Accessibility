---
title: Prefer real text to an image of text
description: If the words are the content, they should be text in the page — not a PNG of a headline — unless a particular presentation is essential.
node: images-of-text
---

After [decorative vs informative](/learn/decorative-vs-informative-image/): even a perfect `alt` is a poorer substitute when the “image” is just a styled sentence. Real text can reflow, restyle, and translate.

Logos (including wordmarks) are the usual essential exception.

Hooks: **1.4.5 Images of Text**. Official pair: Failure-adjacent [F3](https://www.w3.org/WAI/WCAG22/Techniques/failures/F3) (information only in a CSS background image); Sufficient [C22](https://www.w3.org/WAI/WCAG22/Techniques/css/C22), [G140](https://www.w3.org/WAI/WCAG22/Techniques/general/G140). Understanding: [Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text).

## Contrast

```html
<!-- worse -->
<img src="headline-summer-sale.png" alt="Summer sale, 40% off">

<!-- better -->
<h1>Summer sale, 40% off</h1>
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can replace an image-of-text headline with real text, or justify a logo exception.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
