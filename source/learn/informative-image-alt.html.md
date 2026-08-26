---
title: Informative image needs a text alternative
description: If the image adds information, that information must exist as text.
node: informative-image-alt
rule: Give every informative image a short text alternative that says the same thing the picture says.
sc:
  - "1.1.1"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
---

[Classify first](/learn/decorative-vs-informative-image/). **Informative** means the image says something the nearby text does not. A chart, a photo of a completed form, a diagram of a route — without `alt`, that information is gone for anyone who does not see the file.

Empty `alt` or a missing `alt` is the usual miss. A filename (`alt="revenue.png"`) is not an equivalent.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<img src="revenue.png">
```

No alternative. A screen reader may speak the file name, or nothing useful.

<p><a href="bad/" data-turbo="false">Open this example alone</a> and check it with tools. That page is supposed to fail.</p>

</div>

<div class="example example--good" markdown="1">

## Good

```html
<img src="revenue.png"
     alt="Revenue rose from 2 million to 3 million between 2024 and 2025">
```

The `alt` carries the fact the chart shows. Nearby text does not already say it.

<p><a href="good/" data-turbo="false">Open this example alone</a> and check it with the same tools.</p>

</div>

</div>

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that follow the rule</a> — mark every card whose alt text carries the information. A correct pick collapses; a miss shows which rule failed.</p>

<p><a href="fix/" data-turbo="false">Fix the missing text alternative</a> — write alt that says what the picture says, then <strong>Apply</strong>.</p>

**Check** on the live examples scores this rule. **Apply** on the fix page writes the example and scores it.

## Not a pass

`alt="chart"` or `alt="image"` names the format, not the information. If the same sentence is already in the caption, the image may be [decorative](/learn/decorative-image-silent/) instead — do not duplicate, and do not leave it blank when it is the only source of the fact.

## Official

**1.1.1 Non-text Content** (A). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Failure [F65](https://www.w3.org/WAI/WCAG22/Techniques/failures/F65) (no `alt`); Sufficient [H37](https://www.w3.org/WAI/WCAG22/Techniques/html/H37). Understanding: [Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content).
