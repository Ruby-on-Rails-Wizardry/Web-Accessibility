---
title: Data tables have headers
description: A grid of data is a table with th, not a layout of nested divs, and not a table with no headers.
node: data-tables
---

When the meaning is “this cell belongs to this column and this row,” that relationship has to be programmatically available (**1.3.1**).

- Data: `<table>`, `<th scope="col">` / `scope="row">`, a `<caption>` when the table needs a name.
- Layout: do **not** use a table to position a form or a two-column article. CSS layout does that.

Official pair: Failure [F91](https://www.w3.org/WAI/WCAG22/Techniques/failures/F91) (headers not programmatically determined), [F46](https://www.w3.org/WAI/WCAG22/Techniques/failures/F46) (layout tables that do not make sense linearized); Sufficient [H51](https://www.w3.org/WAI/WCAG22/Techniques/html/H51), [H63](https://www.w3.org/WAI/WCAG22/Techniques/html/H63).

## Contrast

```html
<!-- worse: no headers -->
<table>
  <tr><td>Q1</td><td>12</td></tr>
  <tr><td>Q2</td><td>15</td></tr>
</table>

<!-- better -->
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

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: Given a grid of figures, the learner marks column and row headers (or refuses a layout table).

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
