---
title: Functional image names the action
description: When the image is the control, the alt names the destination or the action — not “logo” or “icon”.
node: functional-image-names-action
rule: If an image is the only name of a link or button, its alt text names the destination or the action.
sc:
  - "1.1.1"
  - "4.1.2"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
---

[Classify first](/learn/decorative-vs-informative-image/). **Functional** means the image *is* the control: a linked logo, a search icon with no visible word, a print button that is only a pictogram. The [accessible name](/learn/accessible-name/) comes from `alt` (or from the button’s text if you also show a word).

“Logo”, “icon”, or “image” does not say where the link goes or what the button does.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<a href="/">
  <img src="city.svg" alt="logo">
</a>
<button type="submit">
  <img src="search.svg" alt="icon">
</button>
```

The link is named “logo”. The button is named “icon”.

<p><a href="bad/" data-turbo="false">Open this example alone</a> and check it with tools. That page is supposed to fail.</p>

</div>

<div class="example example--good" markdown="1">

## Good

```html
<a href="/">
  <img src="city.svg" alt="City of Springfield home">
</a>
<button type="submit">
  <img src="search.svg" alt="Search">
</button>
```

The name matches the destination or the action. A visible word on the button is even better; then the image can be silent.

<p><a href="good/" data-turbo="false">Open this example alone</a> and check it with the same tools.</p>

</div>

</div>

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that follow the rule</a> — mark every card whose image control names the destination or action. A correct pick collapses; a miss shows which rule failed.</p>

<p><a href="fix/" data-turbo="false">Fix the unnamed image control</a> — name the destination or action, then <strong>Apply</strong>.</p>

**Check** on the live examples scores this rule. **Apply** on the fix page writes the example and scores it.

## Not a pass

`alt=""` on a linked image with no other text is a nameless link. If the logo sits next to the visible words “City of Springfield” in the same link, empty `alt` on the image is correct — the link already has a name.

## Official

**1.1.1 Non-text Content** (A); **4.1.2** for the control’s name. In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Sufficient [H37](https://www.w3.org/WAI/WCAG22/Techniques/html/H37), [H30](https://www.w3.org/WAI/WCAG22/Techniques/html/H30) (text alternative for a linked image). Understanding: [Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content).
