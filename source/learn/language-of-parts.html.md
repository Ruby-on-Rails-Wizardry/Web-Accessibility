---
title: Language of parts
description: A phrase in another language needs its own lang, or it will be pronounced as the page language.
node: language-of-parts
rule: Mark a phrase that is not in the page language with lang on the element that contains it.

sc:
  - "3.1.2"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
---

After [the page language](/learn/language-of-page/) is set, a word or passage that is **not** in that language is still spoken as the page language unless you mark it. Screen-reader users hear mangled names and quotes.

Wrap the other-language run and set `lang` there. Proper names and words that have become part of the page language do not need a mark.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<p lang="en">The museum is called Musée d'Orsay.</p>
```

The French name is spoken as English.

<p><a href="bad/" data-turbo="false">Open this example alone</a> and check it with tools. That page is supposed to fail.</p>

</div>

<div class="example example--good" markdown="1">

## Good

```html
<p lang="en">The museum is called <span lang="fr">Musée d'Orsay</span>.</p>
```

The name is marked French. The rest stays English.

<p><a href="good/" data-turbo="false">Open this example alone</a> and check it with the same tools.</p>

</div>

</div>

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that follow the rule</a> — mark every card that sets lang on the other-language phrase. A correct pick collapses; a miss shows which rule failed.</p>

<p><a href="fix/" data-turbo="false">Fix the unmarked phrase</a> — then <strong>Apply</strong>.</p>

**Check** on the live examples scores this rule. **Apply** on the fix page writes the example and scores it.

## Not a pass

`lang` on the whole paragraph when only a phrase is foreign re-voices the English too. A translation widget, or a comment in the source, is not a programmatic language change.

## Official

**3.1.2 Language of Parts** (AA). In `section-508-web` (WCAG 2.0 AA), `ada-title-ii` (2.1 AA), and `wcag-22-aa` (2.2 AA).

Sufficient [H58](https://www.w3.org/WAI/WCAG22/Techniques/html/H58). Understanding: [Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts).
