---
title: Repeated navigation stays in order
description: Blocks of links that repeat across pages keep the same relative order, unless the person changes them.
node: consistent-nav-order
rule: Keep repeated navigational regions in the same relative order on every page of the set.
---

People memorize where “Search” and “Permits” sit. Swapping the header on the next page forces them to re-learn the path. [Predictable](/learn/pour/) use depends on that order.

The same function keeping the same *name* is a sibling: [The same action keeps the same name](/learn/consistent-identification/).

Section 508 **excepts non-web documents** from **3.2.3** (E205.4). Web sites are in.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<!-- page A -->
<nav><a href="/">Home</a> <a href="/permits">Permits</a> <a href="/contact">Contact</a></nav>

<!-- page B -->
<nav><a href="/contact">Contact</a> <a href="/">Home</a> <a href="/permits">Permits</a></nav>
```

The same three links, a new order.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<!-- every page in the set -->
<nav><a href="/">Home</a> <a href="/permits">Permits</a> <a href="/contact">Contact</a></nav>
```

Same items, same relative order. Extra links may appear; they do not shuffle the ones that repeat.

</div>

</div>

## Not a pass

A “skip to main” link that is first on every page is consistent. A breadcrumb that grows is fine. The miss is rearranging the *repeated* block. A user-driven change (they hide a sidebar) is allowed.

## Official

**3.2.3 Consistent Navigation** (AA). In `section-508-web` (web, not 508 non-web), `ada-title-ii`, and `wcag-22-aa`.

Sufficient [G61](https://www.w3.org/WAI/WCAG22/Techniques/general/G61). Understanding: [Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation).
