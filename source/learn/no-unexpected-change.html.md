---
title: No unexpected change of context
description: Focusing a field or changing a value must not yank the person to a new page or rebuild the form unless they asked.
node: no-unexpected-change
---

[Predictable](/learn/pour/): a change of **context** (new window, new focus, complete rebuild of content) happens on request, not as a surprise.

- **3.2.1 On Focus** — putting focus on a control does not change context.
- **3.2.2 On Input** — changing a setting does not change context unless you warned before.

A new panel that appears is often fine. An automatic submit-and-navigate on the first radio is not.

Official pair: Failure [F36](https://www.w3.org/WAI/WCAG22/Techniques/failures/F36), [F37](https://www.w3.org/WAI/WCAG22/Techniques/failures/F37); Sufficient [G107](https://www.w3.org/WAI/WCAG22/Techniques/general/G107), [G80](https://www.w3.org/WAI/WCAG22/Techniques/general/G80). Understanding: [On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus), [On Input](https://www.w3.org/WAI/WCAG22/Understanding/on-input).

## Contrast

```html
<!-- worse: changing the select immediately navigates -->
<select onchange="location = this.value">
  <option value="/en">English</option>
  <option value="/es">Español</option>
</select>

<!-- better: a submit the person activates -->
<form action="/locale" method="get">
  <label for="locale">Language</label>
  <select id="locale" name="locale">…</select>
  <button type="submit">Change language</button>
</form>
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can replace an onchange navigation with an explicit submit (or equivalent request).

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
