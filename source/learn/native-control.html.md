---
title: Native control before a custom widget
description: A real button, link, or input already has a name, a role, and keyboard behavior. A div with a click handler does not.
node: native-control
---

`<button>`, `<a href>`, `<input>`, `<select>` come with [POUR](/learn/pour/) pieces you would otherwise rebuild: role, focus, Enter/Space, an [accessible name](/learn/accessible-name/) from the content.

A custom widget is a later, harder branch (ARIA, focus management). Do not start there.

Hook: **4.1.2**; ATAG / authoring tools should default to native patterns — [ATAG](/docs/authoring-tools/atag/).

## Contrast

```html
<!-- worse -->
<div class="btn" onclick="save()">Save</div>

<!-- better -->
<button type="button">Save</button>
```

Use a link when it **goes** somewhere (`href`). Use a button when it **does** something on this page.

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can replace a clickable `div` with `button` or `a href` and say which one fits.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
