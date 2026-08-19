---
title: Language of parts
description: A phrase in another language needs its own lang, or it will be pronounced as the page language.
node: language-of-parts
---

After [the page language](/learn/language-of-page/) is set, a word or passage that is **not** in that language needs `lang` on the element that contains it.

Hooks: **3.1.2 Language of Parts**. Official pair: Sufficient [H58](https://www.w3.org/WAI/WCAG22/Techniques/html/H58). Understanding: [Language of Parts](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts).

## Contrast

```html
<!-- worse: French spoken as English -->
<p lang="en">The museum is called Musée d'Orsay.</p>

<!-- better -->
<p lang="en">The museum is called <span lang="fr">Musée d'Orsay</span>.</p>
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: Given a page in one language with a quoted phrase in another, the learner wraps the phrase and sets `lang`.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
