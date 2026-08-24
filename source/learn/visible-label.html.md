---
title: Visible label is the programmatic name
description: The text the person sees next to the field must be the name the field has in the accessibility tree.
node: visible-label
rule: Associate a visible label with each control so the accessible name is that same string.
---

A sighted person reads the label beside the box. A screen-reader user should hear **that same string** as the field’s [accessible name](/learn/accessible-name/).

Usual HTML: `for` / `id`, or a `<label>` that wraps the control. Prefer a [native](/learn/native-control/) `input` / `textarea` / `select`. Placeholder-only is a separate miss: [Placeholder is not a label](/learn/placeholder-not-label/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<label>Email</label>
<input type="email">
```

The `<label>` is not associated. The field has no name from that text.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<label for="email">Email</label>
<input id="email" type="email" autocomplete="email">
```

`for` / `id` ties the visible word to the control. The name is “Email”.

</div>

</div>

## Not a pass

A `<label>` in the DOM with no `for` and no wrapping still fails. `aria-label` with no visible text fails this node (there is a name, but not a visible label). This node is smaller than all of **1.3.1**.

## Official

**1.3.1 Info and Relationships** (A); **3.3.2 Labels or Instructions** (A); **4.1.2**. In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Understanding: [Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships), [Labels or Instructions](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions).
