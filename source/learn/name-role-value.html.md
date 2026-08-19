---
title: Name, role, and value
description: A custom widget must expose what it is, what it is called, and what state it is in — or you should have used a native control.
node: name-role-value
---

After [native control first](/learn/native-control/): if you still build a `div` that acts like a tab, checkbox, or menu, **4.1.2** requires that name, role, and value (and changes to them) can be programmatically determined and set.

Prefer the native element. If you cannot, follow [ARIA APG](https://www.w3.org/WAI/ARIA/apg/) for that pattern — do not invent a role.

Official pair: Failure [F15](https://www.w3.org/WAI/WCAG22/Techniques/failures/F15), [F79](https://www.w3.org/WAI/WCAG22/Techniques/failures/F79); Sufficient [ARIA4](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA4), [ARIA5](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA5), [G108](https://www.w3.org/WAI/WCAG22/Techniques/general/G108). Understanding: [Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value).

## Contrast

```html
<!-- worse -->
<div class="tab selected" onclick="showPanel(2)">Billing</div>

<!-- better: native, or a real tab pattern -->
<button type="button" role="tab" aria-selected="true" aria-controls="billing">Billing</button>
```

(If a native `button` plus a heading structure will do, use that. Role=`tab` is for an actual tablist.)

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can replace a clickable div with a native control, or add role, name, and state to a custom widget.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
