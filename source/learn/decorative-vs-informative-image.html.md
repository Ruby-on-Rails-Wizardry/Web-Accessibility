---
title: Decorative vs informative image
description: If the image adds information, it needs a text alternative. If it does not, it must be silent.
node: decorative-vs-informative-image
---

[Perceivable](/learn/pour/): the information in the picture has to be available without seeing the picture.

- **Informative** — the image says something the nearby text does not. Give an equivalent short `alt` (or a longer pattern if needed).
- **Decorative** — it repeats the text or is only ornament. `alt=""` (and not inside a lone link).
- **Functional** — the image *is* the control (a linked logo). The `alt` names the destination or the action, not “logo.”

This node is smaller than all of **1.1.1**. Meaningful wording of `alt` is a later, harder item (rubric).

## Contrast

```html
<!-- worse: empty alt on an informative chart -->
<img src="revenue.png">

<!-- better -->
<img src="revenue.png" alt="Revenue rose from 2 million to 3 million between 2024 and 2025">

<!-- worse: noisy decoration -->
<img src="swirl.svg" alt="decorative swirl">

<!-- better -->
<img src="swirl.svg" alt="">
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: Given an image in context, the learner can classify decorative vs informative vs functional and supply a silent or naming `alt` that matches.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item (classify, then write or empty the alt)
- [ ] Isomorphic retest item
- [ ] Rubric for “more meaningful” alt (later)

</div>
