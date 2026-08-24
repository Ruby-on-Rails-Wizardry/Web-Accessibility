---
title: Decorative image is silent
description: Ornament, or an image that repeats nearby text, must not be announced.
node: decorative-image-silent
rule: Give a decorative image empty alt text so assistive technology skips it.
---

[Classify first](/learn/decorative-vs-informative-image/). **Decorative** means the picture adds no information: a swirl, a stock photo that only restates the heading, a spacer. Those must be silent. `alt=""` (and not the only content of a link).

A “helpful” `alt="decorative swirl"` is noise. Every image in a list of cards that repeats the card title is the same miss.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<h2>Permits</h2>
<img src="swirl.svg" alt="decorative swirl">
<p>Apply for a parking permit.</p>
```

The reader hears “decorative swirl” between the heading and the task.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<h2>Permits</h2>
<img src="swirl.svg" alt="">
<p>Apply for a parking permit.</p>
```

Empty `alt` keeps the ornament off the accessibility tree.

</div>

</div>

## Not a pass

Omitting the `alt` attribute is not the same as `alt=""`. A missing attribute is often announced as the file name. A linked logo is [functional](/learn/functional-image-names-action/), not decorative — empty `alt` on a lone link leaves a nameless control.

## Official

**1.1.1 Non-text Content** (A). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Sufficient [H67](https://www.w3.org/WAI/WCAG22/Techniques/html/H67) (empty `alt` when the image is not announced). Understanding: [Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: Given an ornamental image, the learner sets `alt=""` and says why a missing attribute fails.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
