---
title: Accessible name
description: What assistive technology calls this control — the programmatic name.
node: accessible-name
rule: Every control has a programmatic name. If there is none, the tool cannot tell the person what they landed on.

sc:
  - "4.1.2"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
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

<p><a href="bad/" data-turbo="false">Open this example alone</a> and check it with tools. That page is supposed to fail.</p>

</div>

<div class="example example--good" markdown="1">

## Good

```html
<button type="submit">Send</button>
```

The name is “Send”, from the content of the native control.

<p><a href="good/" data-turbo="false">Open this example alone</a> and check it with the same tools.</p>

</div>

</div>

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that follow the rule</a> — mark every card whose control has a programmatic name. A correct pick collapses; a miss shows which rule failed.</p>

<p><a href="fix/" data-turbo="false">Fix the nameless control</a> — then <strong>Apply</strong>.</p>

**Check** on the live examples scores this rule. **Apply** on the fix page writes the example and scores it.

## Not a pass

An `aria-label` that says something different from the visible word is a name, but it fails [label in name](/learn/label-in-name/). A `div` with `tabindex="0"` and no name is still nameless.

This node is the idea. It is not the whole of **4.1.2**.

## Official

**4.1.2 Name, Role, Value** (A); **2.5.3 Label in Name** (AA, 2.1). In `section-508-web` (4.1.2), `ada-title-ii`, and `wcag-22-aa`.

Understanding: [Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value).
