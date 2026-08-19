---
title: Placeholder is not a label
description: Placeholder text disappears. It is not a visible label and it is a poor accessible name.
node: placeholder-not-label
---

`placeholder` is a hint. It goes away when the person types. Low contrast. Often missing from the name, or used *as* the name so there is no persistent [visible label](/learn/visible-label/).

## Contrast

```html
<!-- worse -->
<input type="email" placeholder="Email">

<!-- better -->
<label for="email">Email</label>
<input id="email" type="email" autocomplete="email">
```

A hint can stay: visible text under the field, or `aria-describedby`, not the only label.

Hooks: **1.3.1**, **3.3.2 Labels or Instructions**.

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can replace a placeholder-only field with a persistent visible label and explain what disappears.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
