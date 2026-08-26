---
title: Changing a value does not navigate
description: Changing a setting must not rebuild the page or send the person away unless you warned them first.
node: no-change-on-input
rule: Changing a control’s value does not cause a change of context unless the person was warned before using it.

sc:
  - "3.2.2"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
---

Selecting a radio, ticking a checkbox, or picking from a list is not a request to leave the page. Automatic submit-and-navigate on the first change fails people who explore with the keyboard or who pick the wrong option while looking.

A submit button (or an equivalent, announced warning before the control) is the usual fix. Focus-triggered navigation is the sibling: [Focus does not change context](/learn/no-change-on-focus/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<select onchange="location = this.value">
  <option value="/en">English</option>
  <option value="/es">Español</option>
</select>
```

Changing the select immediately navigates.

<p><a href="bad/" data-turbo="false">Open this example alone</a> and check it with tools. That page is supposed to fail. The live handler is inert so changing the select does not leave the lesson.</p>

</div>

<div class="example example--good" markdown="1">

## Good

```html
<form action="/locale" method="get">
  <label for="locale">Language</label>
  <select id="locale" name="locale">
    <option value="en">English</option>
    <option value="es">Español</option>
  </select>
  <button type="submit">Change language</button>
</form>
```

The person asks for the change. Context changes on that request.

<p><a href="good/" data-turbo="false">Open this example alone</a> and check it with the same tools.</p>

</div>

</div>

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that follow the rule</a> — mark every card where changing a value does not navigate. A correct pick collapses; a miss shows which rule failed.</p>

<p><a href="fix/" data-turbo="false">Fix the input navigation</a> — then <strong>Apply</strong>.</p>

**Check** on the live examples scores this rule. **Apply** on the fix page writes the example and scores it.

## Not a pass

Updating a live region or revealing more fields on the same page is usually not a change of context. Submitting the whole form and loading a new page *without* a button, the moment a radio is chosen, is. A warning in a `title` tooltip that they will never see does not count as “instructed before.”

## Official

**3.2.2 On Input** (A). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Failure [F36](https://www.w3.org/WAI/WCAG22/Techniques/failures/F36), [F37](https://www.w3.org/WAI/WCAG22/Techniques/failures/F37); Sufficient [G80](https://www.w3.org/WAI/WCAG22/Techniques/general/G80), [G13](https://www.w3.org/WAI/WCAG22/Techniques/general/G13). Understanding: [On Input](https://www.w3.org/WAI/WCAG22/Understanding/on-input).
