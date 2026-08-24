---
title: Accessible name
description: What assistive technology calls this control — the programmatic name.
node: accessible-name
rule: Every control has a programmatic name. If there is none, the tool cannot tell the person what they landed on.
---

A button, link, or field has a **programmatic name**: the string a screen reader or other tool uses when it speaks or lists the control.

If there is no name, [Robust](/learn/pour/) fails. If the name disagrees with the visible text, they hear one thing and see another. [Visible label is the programmatic name](/learn/visible-label/) is the usual web pattern for forms.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<div onclick="submit()">Send</div>
```

Not a button. No name.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<button type="submit">Send</button>
```

The name is “Send”, from the content of the native control.

</div>

</div>

## Not a pass

An `aria-label` that says something different from the visible word is a name, but it fails [label in name](/learn/label-in-name/). A `div` with `tabindex="0"` and no name is still nameless.

This node is the idea. It is not the whole of **4.1.2**.

## Official

**4.1.2 Name, Role, Value** (A); **2.5.3 Label in Name** (AA, 2.1). In `section-508-web` (4.1.2), `ada-title-ii`, and `wcag-22-aa`.

Understanding: [Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: Given markup, the learner can say what the accessible name is (or that there is none).

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item (step: what is the name now)
- [ ] Isomorphic retest item
- [ ] Another independent snippet for retest

</div>
