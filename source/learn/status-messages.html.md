---
title: Status messages are announced
description: “3 items in cart” that appears without moving focus must still reach a screen reader.
node: status-messages
---

WCAG **2.1**. A confirmation, error, or progress line that sighted users see in place must be **programmatically available** so AT can present it **without** stealing focus.

Usual HTML: `role="status"` / `aria-live="polite"` for confirmations; `role="alert"` when the person must know immediately. Do not move focus unless the next task is on a new field.

Hooks: **4.1.3 Status Messages**. Official: [Understanding Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages). Sufficient [ARIA19](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA19), [ARIA22](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22).

## Contrast

```html
<!-- worse: a silent div appears -->
<div class="flash">Saved.</div>

<!-- better -->
<div class="flash" role="status">Saved.</div>
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can add an appropriate live region to a save confirmation that does not move focus.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
