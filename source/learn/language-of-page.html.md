---
title: The page language is declared
description: Assistive technology needs to know which human language to speak. That is a lang on the root, not a guess from the words.
node: language-of-page
---

[Understandable](/learn/pour/): the words have to be spoken and hyphenated as that language.

Set `lang` on `html` to a valid BCP 47 tag (`en`, `es`, `en-GB`). A missing `lang` is a miss even if the text is obviously English to a sighted reader.

A passage in another language is the next node: [Language of parts](/learn/language-of-parts/).

Hooks: **3.1.1 Language of Page**. Official pair: Sufficient [H57](https://www.w3.org/WAI/WCAG22/Techniques/html/H57). Understanding: [Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page).

## Contrast

```html
<!-- worse -->
<html>
  <head><title>Permisos de estacionamiento</title></head>

<!-- better -->
<html lang="es">
  <head><title>Permisos de estacionamiento</title></head>
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can add a correct `lang` on the root and say why a missing one fails.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
