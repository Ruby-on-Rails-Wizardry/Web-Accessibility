---
title: Text spacing
description: User style sheets that open line, letter, and word spacing must not clip buttons or hide text.
node: text-spacing
---

WCAG **2.1**. People with dyslexia or low vision often increase spacing. If your CSS assumes tight metrics, labels vanish.

No loss of content or function when the user sets **all** of: line height 1.5× font size, paragraph spacing 2×, letter spacing 0.12×, word spacing 0.16×.

Official: [Understanding Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing). Sufficient [C36](https://www.w3.org/WAI/WCAG22/Techniques/css/C36).

## Contrast

```css
/* worse: fixed height + overflow hidden; extra line-height clips the last line */
.teaser { height: 3rem; overflow: hidden; }

/* better */
.teaser { min-height: 3rem; overflow: visible; }
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can find a fixed-height box that will clip under 1.4.12 spacing and free it.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
