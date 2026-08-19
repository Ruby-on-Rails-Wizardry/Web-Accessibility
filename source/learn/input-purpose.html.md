---
title: Identify input purpose
description: Personal fields (name, email, address) need an autocomplete token so a browser or password manager can fill them.
node: input-purpose
---

WCAG **2.1** (ADA Title II and `wcag-22-aa`; not 508’s 2.0 bar).

When the field collects information **about the user** that is in [WCAG’s input-purpose list](https://www.w3.org/TR/WCAG22/#input-purposes), the purpose must be programmatically determinable. In HTML that is usually `autocomplete`.

This is how people who cannot reliably type a long address still complete the form.

Hooks: **1.3.5 Identify Input Purpose**. Official pair: Sufficient [H98](https://www.w3.org/WAI/WCAG22/Techniques/html/H98). Understanding: [Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose).

## Contrast

```html
<!-- worse -->
<label for="email">Email</label>
<input id="email" type="email">

<!-- better -->
<label for="email">Email</label>
<input id="email" type="email" autocomplete="email">
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can add the correct `autocomplete` token to a personal name/email/address field.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
