---
title: Headings are heading elements
description: Large type is not a heading. The outline is h1–h6 in the markup.
node: heading-elements
rule: Mark each section name with a heading element, not a styled paragraph or a bold span.
---

Sighted people scan large type. Screen-reader users jump a **heading list**. Styled `<p><strong>` or a `div` with a big font is not on that list.

One `h1` for the page topic is the usual pattern. Nested sections use `h2`, then `h3`. Skipping levels is a separate rule: [Do not skip heading levels](/learn/heading-order/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<p><strong>Shipping address</strong></p>
<p>123 Main Street</p>
```

Looks like a heading. It is not in the heading list.

<p><a href="bad/" data-turbo="false">Open this example alone</a> and check the heading list with tools. That page is supposed to fail.</p>

</div>

<div class="example example--good" markdown="1">

## Good

```html
<h2>Shipping address</h2>
<p>123 Main Street</p>
```

The section name is an `h2`. Tools and people can jump to it.

<p><a href="good/" data-turbo="false">Open this example alone</a> and check the heading list with the same tools.</p>

</div>

</div>

## Practice

<p><a href="pick/" data-turbo="false">Pick the example that follows the rule</a> — two live examples; feedback is immediate.</p>

<p><a href="fix/" data-turbo="false">Fix the missing heading element</a> — mark the section name with a heading, then <strong>Apply</strong>.</p>

**Check** on the live examples scores this rule. **Apply** on the fix page writes the example and scores it.

## Not a pass

`role="heading"` on a `div` can expose a heading, but you still have to set `aria-level` and keep the outline honest. Prefer the native element. A heading that is only there to make type large (no new section) is the reverse miss — use CSS.

## Official

Part of **1.3.1 Info and Relationships** (A). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Failure [F2](https://www.w3.org/WAI/WCAG22/Techniques/failures/F2); Sufficient [H42](https://www.w3.org/WAI/WCAG22/Techniques/html/H42). Understanding: [Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships).
