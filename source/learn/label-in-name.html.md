---
title: Visible label is in the name
description: If the button says “Search”, the accessible name must contain “Search” — not only “Submit query”.
node: label-in-name
---

WCAG **2.1**. Speech-input users say the word they see. If the visible label is not in the [accessible name](/learn/accessible-name/), the command misses.

After [visible label](/learn/visible-label/): the name **contains** that visible text (start with it when you can).

Hooks: **2.5.3 Label in Name**. Official pair: Failure [F96](https://www.w3.org/WAI/WCAG22/Techniques/failures/F96); Sufficient [G208](https://www.w3.org/WAI/WCAG22/Techniques/general/G208), [G211](https://www.w3.org/WAI/WCAG22/Techniques/general/G211). Understanding: [Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name).

## Contrast

```html
<!-- worse: visible “Search”, name is “Submit” -->
<button aria-label="Submit">Search</button>

<!-- better -->
<button>Search</button>
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can find a control whose visible text is missing from the name and fix it.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
