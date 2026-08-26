---
title: Prefer real text to an image of text
description: If the words are the content, they should be text in the page — not a PNG of a headline — unless a particular presentation is essential.
node: images-of-text
rule: Use real text for words that are the content, not an image of those words, unless that presentation is essential.

sc:
  - "1.4.5"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
---

After [decorative vs informative](/learn/decorative-vs-informative-image/): even a perfect `alt` is a poorer substitute when the “image” is just a styled sentence. Real text can reflow, restyle, and translate. An image of a headline shuts out people who need a different size, spacing, or font.

Logos (including wordmarks) are the usual essential exception.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<img src="headline-summer-sale.png" alt="Summer sale, 40% off">
```

The headline is a picture. The `alt` restates it, but the words cannot reflow or restyle.

<p><a href="bad/" data-turbo="false">Open this example alone</a> and check it with tools. That page is supposed to fail.</p>

</div>

<div class="example example--good" markdown="1">

## Good

```html
<h1>Summer sale, 40% off</h1>
```

The words are text. CSS can still make them large.

<p><a href="good/" data-turbo="false">Open this example alone</a> and check it with the same tools.</p>

</div>

</div>

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that follow the rule</a> — mark every card whose words are real text (a logo is the usual exception). A correct pick collapses; a miss shows which rule failed.</p>

<p><a href="fix/" data-turbo="false">Fix the image of text</a> — then <strong>Apply</strong>.</p>

**Check** on the live examples scores this rule. **Apply** on the fix page writes the example and scores it.

## Not a pass

A correct `alt` on a PNG headline still fails this rule — that is [informative image alt](/learn/informative-image-alt/), not real text. Calling a marketing banner a “logo” does not make the presentation essential. A CSS background that is the only copy of the words fails the same way.

## Official

**1.4.5 Images of Text** (AA). In `section-508-web` (WCAG 2.0 AA), `ada-title-ii` (2.1 AA), and `wcag-22-aa` (2.2 AA).

Failure-adjacent [F3](https://www.w3.org/WAI/WCAG22/Techniques/failures/F3) (information only in a CSS background image); Sufficient [C22](https://www.w3.org/WAI/WCAG22/Techniques/css/C22), [G140](https://www.w3.org/WAI/WCAG22/Techniques/general/G140). Understanding: [Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text).
