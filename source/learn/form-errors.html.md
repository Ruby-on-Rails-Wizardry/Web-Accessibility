---
title: Errors are identified in text
description: A red border is not an error message. The field that failed and what went wrong must be in text, and a suggestion when you know one.
node: form-errors
---

After a [visible label](/learn/visible-label/): when the person submits and something is wrong, they have to **find** the error and **know** what to do.

- **3.3.1 Error Identification** — the item in error is identified and described in text.
- **3.3.3 Error Suggestion** — if you know a fix, offer it (unless it would jeopardize security).

Color or an icon alone fails [color is not the only cue](/learn/color-not-only-cue/). Move focus or use a [status message](/learn/status-messages/) so AT hears it.

Official pair: Failure [F105](https://www.w3.org/WAI/WCAG22/Techniques/failures/F105); Sufficient [G83](https://www.w3.org/WAI/WCAG22/Techniques/general/G83), [G84](https://www.w3.org/WAI/WCAG22/Techniques/general/G84), [G177](https://www.w3.org/WAI/WCAG22/Techniques/general/G177). Understanding: [Error Identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification), [Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion).

## Contrast

```html
<!-- worse: only a red outline -->
<input type="email" class="invalid" aria-invalid="true">

<!-- better -->
<label for="email">Email</label>
<input id="email" type="email" aria-invalid="true" aria-describedby="email-err">
<p id="email-err">Enter an email like name@example.gov.</p>
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can replace a color-only validation state with a text error tied to the field.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
