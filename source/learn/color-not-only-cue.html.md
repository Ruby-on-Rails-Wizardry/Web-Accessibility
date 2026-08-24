---
title: Color is not the only cue
description: Do not use color as the only way to tell things apart.
node: color-not-only-cue
rule: If color carries meaning, also provide a non-color cue (text, a mark, a pattern).
---

A form that marks errors only by turning the box red shuts out people who do not see that red, and anyone using a display that flattens it.

That is an **offered service** problem ([comparable access](/learn/comparable-access/)). It is not an [essential-ability](/learn/not-identical-capacity/) limit. A job whose *essence* is unaided red/green discrimination is a different question.

Enough **contrast** is a child of this node: [Text contrast](/learn/contrast-text/). Instructions that rely only on shape or position: [Not only shape, size, or sound](/learn/sensory-characteristics/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<input type="email" class="invalid">
<!-- required fields are “the ones with red borders” -->
```

Required and error are color only. No text, no mark.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<label for="email">Email (required)</label>
<input id="email" type="email" aria-invalid="true"
       aria-describedby="email-err">
<p id="email-err">Enter an email like name@example.gov.</p>
```

“Required” and the error are in text. Color may still be used.

</div>

</div>

## Not a pass

An icon that is itself only a red circle, with no text alternative, is still color (or shape) only. A legend that says “red means error” does not help someone who does not see that red.

## Official

**1.4.1 Use of Color** (A). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Understanding: [Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can add a non-color cue to a color-only distinction and refuse to treat that as “color work is impossible.”

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item (edit a snippet or a message)
- [ ] Isomorphic retest item

</div>
