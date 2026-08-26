---
title: The error is identified in text
description: The field that failed and what went wrong must be in text, not only a red outline.
node: error-identification
rule: When a field is in error, identify that field and describe the error in text.

sc:
  - "3.3.1"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
---

A red border is not an error message. People who do not see that red, and people who hear the page, need the **item** and the **problem** in text.

Color or an icon alone fails [color is not the only cue](/learn/color-not-only-cue/). Tie the message to the field (`aria-describedby`, or an error that includes the field’s name). Suggesting a fix is the next rule: [Suggest a fix when you know one](/learn/error-suggestion/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<label for="email">Email</label>
<input id="email" type="email" class="invalid">
```

A CSS class turns the box red. Nothing says which field failed or why.

<p><a href="bad/" data-turbo="false">Open this example alone</a> and check it with tools. That page is supposed to fail.</p>

</div>

<div class="example example--good" markdown="1">

## Good

```html
<label for="email">Email</label>
<input id="email" type="email"
       aria-invalid="true"
       aria-describedby="email-err">
<p id="email-err">Email is missing an @ sign.</p>
```

The field is marked invalid. The text names the problem.

<p><a href="good/" data-turbo="false">Open this example alone</a> and check it with the same tools.</p>

</div>

</div>

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that follow the rule</a> — mark every card that identifies the error in text. A correct pick collapses; a miss shows which rule failed.</p>

<p><a href="fix/" data-turbo="false">Fix the missing error text</a> — then <strong>Apply</strong>.</p>

**Check** on the live examples scores this rule. **Apply** on the fix page writes the example and scores it.

## Not a pass

A banner at the top that says “There were errors” without naming the fields fails this rule. `aria-invalid="true"` with no text still fails. A tooltip that appears only on hover is not a text description for everyone.

## Official

**3.3.1 Error Identification** (A). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Failure [F81](https://www.w3.org/WAI/WCAG22/Techniques/failures/F81) (color-only error); Sufficient [G83](https://www.w3.org/WAI/WCAG22/Techniques/general/G83), [G84](https://www.w3.org/WAI/WCAG22/Techniques/general/G84). Understanding: [Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification).
