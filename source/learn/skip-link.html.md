---
title: Skip past repeated blocks
description: A keyboard user must not tab through the same header on every page before reaching the main content.
node: skip-link
rule: Provide a way to skip repeated chrome and land in the unique content.

sc:
  - "2.4.1"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
---

[Operable](/learn/pour/): there has to be a way to **bypass** blocks that repeat (nav, chrome) and land in the unique content. Without it, keyboard users tab through the same header on every page.

Usual web pattern: a skip link as the first focusable control, pointing at `id` on `<main>`. Landmarks and a heading structure also help; this node is the bypass itself. Next: [More than one way to find a page](/learn/multiple-ways/) and [Consistent navigation and names](/learn/consistent-navigation/).

Non-web documents are **excepted** from 2.4.1 under Section 508 E205.4. Web content is not.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<header>…dozens of links…</header>
<main>Article</main>
```

The first Tab lands in a long header. There is no bypass.

<p><a href="bad/" data-turbo="false">Open this example alone</a> and check it with tools. That page is supposed to fail.</p>

</div>

<div class="example example--good" markdown="1">

## Good

```html
<a href="#main">Skip to main content</a>
<header>…</header>
<main id="main">Article</main>
```

The first control jumps to `main`. The header is still there for people who want it.

<p><a href="good/" data-turbo="false">Open this example alone</a> and check it with the same tools. The live example uses a unique target id inside the specimen, not the page <code>main</code>.</p>

</div>

</div>

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that follow the rule</a> — mark every card whose first control skips to unique content. A correct pick collapses; a miss shows which rule failed.</p>

<p><a href="fix/" data-turbo="false">Fix the missing skip link</a> — then <strong>Apply</strong>.</p>

**Check** on the live examples scores this rule. **Apply** on the fix page writes the example and scores it.

## Not a pass

`href="#main"` with no matching `id` goes nowhere. A skip link with `display: none` never receives focus. A skip that is not the first focusable control still leaves people to tab the chrome first.

## Official

**2.4.1 Bypass Blocks** (A). In `section-508-web` (WCAG 2.0 AA; web only — non-web documents excepted under E205.4), `ada-title-ii` (2.1 AA), and `wcag-22-aa` (2.2 AA).

Sufficient [G1](https://www.w3.org/WAI/WCAG22/Techniques/general/G1). Understanding: [Bypass Blocks](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks).
