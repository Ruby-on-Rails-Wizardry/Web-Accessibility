---
title: Placeholder is not a label
description: Placeholder text disappears. It is not a visible label and it is a poor accessible name.
node: placeholder-not-label
rule: Do not use placeholder as the only label for a field.
---

`placeholder` is a hint. It goes away when the person types. Low contrast. Often missing from the name, or used *as* the name so there is no persistent [visible label](/learn/visible-label/).

A hint can stay: visible text under the field, or `aria-describedby`, not the only label.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<input type="email" placeholder="Email">
```

The hint is the only name. It disappears when the person types.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<label for="email">Email</label>
<input id="email" type="email" autocomplete="email">
```

The label stays. The name is “Email”.

</div>

</div>

## Not a pass

A `placeholder` plus a visually-hidden label still fails this node if nothing visible remains next to the field. Placeholder as a format hint *in addition to* a visible label is allowed.

## Official

**1.3.1 Info and Relationships** (A); **3.3.2 Labels or Instructions** (A). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Understanding: [Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions).
