---
title: Focus order matches meaning
description: Tab should visit controls in the order that makes sense — usually the visual order — not the order leftover from a CSS grid accident.
node: focus-order
---

After [keyboard can reach it](/learn/keyboard-access/): the **sequence** has to match the meaning of the page.

Positive `tabindex` values (`tabindex="5"`) and DOM order that disagrees with the visual flow are the usual misses. Prefer source order. `tabindex="0"` puts a custom widget in the tab order; `tabindex="-1"` is for scripted focus, not a new tab stop.

Related: [Meaningful sequence](/learn/meaningful-sequence/) is reading order. This node is Tab order among controls.

Hooks: **2.4.3 Focus Order**. Official pair: Failure [F44](https://www.w3.org/WAI/WCAG22/Techniques/failures/F44), [F85](https://www.w3.org/WAI/WCAG22/Techniques/failures/F85); Sufficient [G59](https://www.w3.org/WAI/WCAG22/Techniques/general/G59), [H4](https://www.w3.org/WAI/WCAG22/Techniques/html/H4). Understanding: [Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order).

## Contrast

```html
<!-- worse: visual order is Name, Email, Submit; tabindex jumps -->
<input tabindex="3" id="name">
<input tabindex="1" id="email">
<button tabindex="2">Send</button>

<!-- better: DOM order is the order -->
<label for="name">Name</label>
<input id="name">
<label for="email">Email</label>
<input id="email">
<button>Send</button>
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can remove positive tabindex values so Tab follows the visual form.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
