---
title: Suggest a fix when you know one
description: If you can tell the person how to correct the error, say so — unless that would jeopardize security.
node: error-suggestion
rule: When you know how to correct an input error, provide a suggestion in text.
---

After [the error is identified](/learn/error-identification/): **3.3.3** asks for a usable correction when you already know one. “Invalid” is not a suggestion. “Use name@example.gov” is.

Do not suggest a value that would leak whether an account exists, or that would help guess a password. Security is an explicit exception.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<p id="date-err">Invalid date.</p>
```

The field is identified, but the person is not told the format you will accept.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<p id="date-err">Use a date like 2026-04-26 (year-month-day).</p>
```

The suggestion is the format (or an example, or the nearest valid value) in text.

</div>

</div>

## Not a pass

A suggestion that appears only in a `title` tooltip, or only after a hover, is not provided as text for everyone. “Please correct the errors below” with no per-field hint fails when you knew the format. Login “incorrect email or password” may stay vague on purpose — that is the security exception, not a model for a date field.

## Official

**3.3.3 Error Suggestion** (AA). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Sufficient [G177](https://www.w3.org/WAI/WCAG22/Techniques/general/G177). Understanding: [Error Suggestion](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion).
