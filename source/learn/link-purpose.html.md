---
title: Link purpose in context
description: The link text (plus its immediate context) must say where it goes. “Click here” does not.
node: link-purpose
rule: Write link text that names the destination or action, by itself or with its immediate context.
---

[Operable](/learn/pour/): a list of links, or a screen-reader “links” rotor, has to make sense. “Click here” and “Read more” with no unique name shut out anyone who is not staring at the surrounding paragraph.

The [accessible name](/learn/accessible-name/) of the link should describe the destination or action. Nearby heading or list item can supply context (**2.4.4** is “in context”). AAA **2.4.9** is link-only (no relying on context). This node is AA 2.4.4.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<p>Parking rules are on the permits page. <a href="/permits">Click here</a>.</p>
```

The name is “Click here”. A links list cannot tell this from any other “here”.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<p><a href="/permits">Parking permit rules</a></p>
```

The name states the destination. Context is not required to know where it goes.

</div>

</div>

## Not a pass

“Click here” in a sentence that never names the destination still fails. A `title` tooltip is not reliable context. Identical “Read more” names whose only distinction is a nearby picture (no heading, no enclosing sentence that names the target) fail.

## Official

**2.4.4 Link Purpose (In Context)** (A). In `section-508-web` (WCAG 2.0 AA), `ada-title-ii` (2.1 AA), and `wcag-22-aa` (2.2 AA).

Failure [F89](https://www.w3.org/WAI/WCAG22/Techniques/failures/F89); Sufficient [H30](https://www.w3.org/WAI/WCAG22/Techniques/html/H30), [G91](https://www.w3.org/WAI/WCAG22/Techniques/general/G91). Understanding: [Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can rewrite a “click here” so the link name states the destination.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
