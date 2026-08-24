---
title: Do not skip heading levels
description: After an h2, the next nested heading is an h3. Do not jump to h4 for looks.
node: heading-order
rule: Nest headings in order. Do not skip a level to get a smaller font.
---

After [heading elements](/learn/heading-elements/) exist: the outline is a tree. `h1` then `h4` because `h4` is the size you wanted hides a level. Screen-reader users who walk the list hear a gap and cannot tell what the section belongs to.

Change the size with CSS. Keep the level honest.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<h1>Permits</h1>
<h4>Residential</h4>
<h4>Commercial</h4>
```

`h4` because it looked smaller. The outline skips `h2` and `h3`.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<h1>Permits</h1>
<h2>Residential</h2>
<h2>Commercial</h2>
```

Same visual size via CSS if you need it. The levels match the sections.

</div>

</div>

## Not a pass

Starting the main content at `h2` because the site name in the header is `h1` is a common pattern and is fine. The miss is a jump *inside* the content (`h2` then `h4` with no `h3` parent). Empty headings used as spacers also fail.

## Official

Part of **1.3.1 Info and Relationships** (A). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Sufficient [G141](https://www.w3.org/WAI/WCAG22/Techniques/general/G141) (organizing a page using headings). Understanding: [Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: Given a heading list that skips a level, the learner restores a nested outline without changing the meaning.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
