---
title: The document has a unique title
description: The title names this page, not the whole site. People use it to find the tab and the history entry.
node: page-title
rule: Give each view a unique document title that names that page, not only the site.
---

[Operable](/learn/pour/): you have to know which page you are on without reading the banner. Screen-reader users hear the `title` first. Tab switchers and history lists show only that string.

The HTML `title` (and the document title in non-HTML) is the name of **this** view. “Home | City of X” and “Pay a parking ticket | City of X” are different pages. Repeating only the site name on every view shuts people out of finding the tab they want.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<title>City of Springfield</title>
```

Every view uses the same title. Tabs and history cannot tell them apart.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<title>Pay a parking ticket — City of Springfield</title>
```

This view is named. The site name can still follow.

</div>

</div>

## Not a pass

A unique `<h1>` with a generic `title` still fails: the tab and the history entry never see the heading. Appending a session id or a timestamp makes the string unique without describing the page.

## Official

**2.4.2 Page Titled** (A). In `section-508-web` (WCAG 2.0 AA), `ada-title-ii` (2.1 AA), and `wcag-22-aa` (2.2 AA).

Failure [F25](https://www.w3.org/WAI/WCAG22/Techniques/failures/F25); Sufficient [H25](https://www.w3.org/WAI/WCAG22/Techniques/html/H25), [G88](https://www.w3.org/WAI/WCAG22/Techniques/general/G88). Understanding: [Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: Given two views that share a site name, the learner writes a title that distinguishes them.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
