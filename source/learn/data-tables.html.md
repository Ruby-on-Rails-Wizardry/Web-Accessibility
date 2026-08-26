---
title: Data tables have headers
description: A grid of data is a table with th, not a layout of nested divs, and not a table with no headers.
node: data-tables
rule: Mark column and row headers on a data table so each cell can be tied to those headers.
sc:
  - "1.3.1"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
---

When the meaning is “this cell belongs to this column and this row,” that relationship has to be programmatically available. A grid of `div`s, or a `<table>` of only `td`, shuts out people who cannot see the visual alignment.

Use `<table>`, `<th scope="col">` / `scope="row">`, and a `<caption>` when the table needs a name. Do **not** use a table to position a form or a two-column article — CSS layout does that. Sister structure: [Lists are lists](/learn/lists/), [Headings name the structure](/learn/headings/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<table>
  <tr><td>Q1</td><td>12</td></tr>
  <tr><td>Q2</td><td>15</td></tr>
</table>
```

Numbers sit in cells. Nothing names the column or the row.

<p><a href="bad/" data-turbo="false">Open this example alone</a> and check it with tools. That page is supposed to fail.</p>

</div>

<div class="example example--good" markdown="1">

## Good

```html
<table>
  <caption>Tickets sold</caption>
  <thead>
    <tr><th scope="col">Quarter</th><th scope="col">Sold</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">Q1</th><td>12</td></tr>
    <tr><th scope="row">Q2</th><td>15</td></tr>
  </tbody>
</table>
```

Each figure has a column header and a row header. The caption names the grid.

<p><a href="good/" data-turbo="false">Open this example alone</a> and check it with the same tools.</p>

</div>

</div>

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that follow the rule</a> — mark every card that uses header cells on a data table. A correct pick collapses; a miss shows which rule failed.</p>

<p><a href="fix/" data-turbo="false">Fix the missing table headers</a> — mark column and row headers, then <strong>Apply</strong>.</p>

**Check** on the live examples scores this rule. **Apply** on the fix page writes the example and scores it.

## Not a pass

The first row of `td` that only *looks* like headers is not a header. Bold or larger type in a cell does not make it `th`. A CSS grid that lines up like a table still has no programmatic headers.

## Official

**1.3.1 Info and Relationships** (A). In `section-508-web` (WCAG 2.0 AA), `ada-title-ii` (2.1 AA), and `wcag-22-aa` (2.2 AA).

Failure [F91](https://www.w3.org/WAI/WCAG22/Techniques/failures/F91) (headers not programmatically determined), [F46](https://www.w3.org/WAI/WCAG22/Techniques/failures/F46) (layout tables that do not make sense linearized); Sufficient [H51](https://www.w3.org/WAI/WCAG22/Techniques/html/H51), [H63](https://www.w3.org/WAI/WCAG22/Techniques/html/H63). Understanding: [Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships).
