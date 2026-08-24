---
title: Native control before a custom widget
description: A real button, link, or input already has a name, a role, and keyboard behavior. A div with a click handler does not.
node: native-control
rule: Use the native element that matches the job before you build a custom widget.
---

`<button>`, `<a href>`, `<input>`, `<select>` come with [POUR](/learn/pour/) pieces you would otherwise rebuild: role, focus, Enter/Space, an [accessible name](/learn/accessible-name/) from the content.

A custom widget is a later, harder branch ([Name, role, and value](/learn/name-role-value/)). Do not start there. Use a link when it **goes** somewhere (`href`). Use a button when it **does** something on this page.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<div class="btn" onclick="save()">Save</div>
<span onclick="location='/permits'">Permits</span>
```

Clickable `div` / `span`. No role, no keyboard, no name unless you rebuild all three.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<button type="button">Save</button>
<a href="/permits">Permits</a>
```

A button does a thing. A link goes somewhere. Both already work from the keyboard.

</div>

</div>

## Not a pass

`<a>` with no `href` is not a link. `<button>` styled to look like a link is still a button — use it when it does not navigate. `role="button"` on a `div` is the custom-widget branch, not this pass.

## Official

**4.1.2 Name, Role, Value** (A); **2.1.1 Keyboard**. In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Authoring tools should default to native patterns — [ATAG](/docs/authoring-tools/atag/).
