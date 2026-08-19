---
title: The document has a unique title
description: The title names this page, not the whole site. People use it to find the tab and the history entry.
node: page-title
---

[Operable](/learn/pour/): you have to know which page you are on without reading the banner.

The HTML `title` (and the document title in non-HTML) is the name of **this** view. “Home | City of X” and “Pay a parking ticket | City of X” are different pages. Repeating only the site name on every view fails the job.

Hooks: **2.4.2 Page Titled**. Official pair: Failure [F25](https://www.w3.org/WAI/WCAG22/Techniques/failures/F25); Sufficient [H25](https://www.w3.org/WAI/WCAG22/Techniques/html/H25), [G88](https://www.w3.org/WAI/WCAG22/Techniques/general/G88).

## Contrast

```html
<!-- worse: same title on every page -->
<title>City of Springfield</title>

<!-- better -->
<title>Pay a parking ticket — City of Springfield</title>
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: Given two views that share a site name, the learner writes a title that distinguishes them.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
