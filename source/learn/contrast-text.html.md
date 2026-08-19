---
title: Text contrast
description: Body text needs 4.5:1 against its background (3:1 if large). Color that only looks stylish in a dark office still fails.
node: contrast-text
---

After [color is not the only cue](/learn/color-not-only-cue/): the text still has to be **readable**.

- Normal text: contrast ratio at least **4.5:1**.
- Large text (18pt / 14pt bold and up): **3:1**.
- Incidental / disabled / logotypes have exceptions. Do not hide behind “incidental” for body copy.

UI chrome (input borders, icons) is the next node: [Non-text contrast](/learn/contrast-ui/).

Hooks: **1.4.3 Contrast (Minimum)**. Official pair: Failure [F24](https://www.w3.org/WAI/WCAG22/Techniques/failures/F24), [F83](https://www.w3.org/WAI/WCAG22/Techniques/failures/F83); Sufficient [G18](https://www.w3.org/WAI/WCAG22/Techniques/general/G18), [G145](https://www.w3.org/WAI/WCAG22/Techniques/general/G145). Understanding: [Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum).

## Contrast

```css
/* worse: light gray on white, well under 4.5:1 */
.fine-print { color: #aaa; background: #fff; }

/* better: near-black on white */
.fine-print { color: #222; background: #fff; }
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: Given two hex colors, the learner can say pass/fail for 1.4.3 and fix the pair.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
