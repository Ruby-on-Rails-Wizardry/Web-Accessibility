---
title: Visible label is the programmatic name
description: The text the person sees next to the field must be the name the field has in the accessibility tree.
node: visible-label
---

A sighted person reads the label beside the box. A screen-reader user should hear **that same string** as the field’s [accessible name](/learn/accessible-name/).

Usual HTML: `for` / `id`, or a `<label>` that wraps the control. Prefer a [native](/learn/native-control/) `input` / `textarea` / `select`.

Hooks: **1.3.1 Info and Relationships**, **2.5.3 Label in Name**, **4.1.2**. This node is smaller than 1.3.1.

## Contrast

```html
<!-- worse -->
<label>Email</label>
<input type="email">

<!-- better -->
<label for="email">Email</label>
<input id="email" type="email" autocomplete="email">
```

Placeholder-only is a separate miss: [Placeholder is not a label](/learn/placeholder-not-label/).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: Given a three-field form, the learner associates a visible label with each control and can say why an unassociated `<label>` fails.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item (mentor steps: visible text, current name, edit the markup)
- [ ] Isomorphic retest item (different fields)
- [ ] Outcome checks (accessible name equals visible label) — not string-identical markup

</div>
