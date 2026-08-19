---
title: Link purpose in context
description: The link text (plus its immediate context) must say where it goes. “Click here” does not.
node: link-purpose
---

[Operable](/learn/pour/): a list of links, or a screen-reader “links” rotor, has to make sense.

The [accessible name](/learn/accessible-name/) of the link should describe the destination or action. Nearby heading or list item can supply context (**2.4.4** is “in context”). “Click here” / “Read more” with no unique name fails.

AAA **2.4.9** is link-only (no relying on context). This node is AA 2.4.4.

Hooks: **2.4.4 Link Purpose (In Context)**. Official pair: Failure [F89](https://www.w3.org/WAI/WCAG22/Techniques/failures/F89); Sufficient [H30](https://www.w3.org/WAI/WCAG22/Techniques/html/H30), [G91](https://www.w3.org/WAI/WCAG22/Techniques/general/G91).

## Contrast

```html
<!-- worse -->
<p>Parking rules are on the permits page. <a href="/permits">Click here</a>.</p>

<!-- better -->
<p><a href="/permits">Parking permit rules</a></p>
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can rewrite a “click here” so the link name states the destination.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
