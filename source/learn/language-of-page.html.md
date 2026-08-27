---
title: The page language is declared
description: Assistive technology needs to know which human language to speak. That is a lang on the root, not a guess from the words.
node: language-of-page
rule: Set lang on the root to the primary human language of the page.
sc:
  - "3.1.1"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
---

[Understandable](/learn/pour/): the words have to be spoken and hyphenated as that language. A missing `lang` shuts out screen-reader users whose synthesizer stays in the wrong voice even when the text is obviously Spanish or English to a sighted reader.

Set `lang` on `html` to a valid BCP 47 tag (`en`, `es`, `en-GB`). A passage in another language is the next node: [Language of parts](/learn/language-of-parts/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<html>
  <head><title>Permisos de estacionamiento</title></head>
```

No language on the root. The title does not count as a declaration.

<p><a href="bad/" data-turbo="false">Open this example</a>, then <strong>Open example in a new window</strong> to check <code>lang</code> on <code>html</code>. That window is supposed to fail.</p>

</div>

<div class="example example--good" markdown="1">

## Good

```html
<html lang="es">
  <head><title>Permisos de estacionamiento</title></head>
```

The page is Spanish. Speech and hyphenation can follow.

<p><a href="good/" data-turbo="false">Open this example</a>, then <strong>Open example in a new window</strong> and check <code>lang</code> on <code>html</code>.</p>

</div>

</div>

## Not a pass

`lang="en"` on a Spanish page is a wrong declaration, not a pass. `lang="english"` is not a BCP 47 tag. Setting `lang` only on `body`, or only `xml:lang` in HTML5, leaves the root unmarked.

## Official

**3.1.1 Language of Page** (A). In `section-508-web` (WCAG 2.0 AA), `ada-title-ii` (2.1 AA), and `wcag-22-aa` (2.2 AA).

Sufficient [H57](https://www.w3.org/WAI/WCAG22/Techniques/html/H57). Understanding: [Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page).
