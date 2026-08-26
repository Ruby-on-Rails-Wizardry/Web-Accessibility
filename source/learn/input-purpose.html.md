---
title: Identify input purpose
description: Personal fields (name, email, address) need an autocomplete token so a browser or password manager can fill them.
node: input-purpose
rule: Mark personal fields with an autocomplete token so a browser or password manager can fill them.

sc:
  - "1.3.5"
profiles:
  - ada-title-ii
  - wcag-22-aa
---

After a [visible label](/learn/visible-label/): when the field collects information **about the user** that is in [WCAG’s input-purpose list](https://www.w3.org/TR/WCAG22/#input-purposes), the purpose must be programmatically determinable. In HTML that is usually `autocomplete`.

People who cannot reliably type a long address still complete the form.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<label for="email">Email</label>
<input id="email" type="email">
```

The field is labeled, but nothing says it is the user’s email for autofill.

<p><a href="bad/" data-turbo="false">Open this example alone</a> and check it with tools. That page is supposed to fail.</p>

</div>

<div class="example example--good" markdown="1">

## Good

```html
<label for="email">Email</label>
<input id="email" type="email" autocomplete="email">
```

The token is on the list. A browser or password manager can fill it.

<p><a href="good/" data-turbo="false">Open this example alone</a> and check it with the same tools.</p>

</div>

</div>

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that follow the rule</a> — mark every card whose personal field has an autocomplete token. A correct pick collapses; a miss shows which rule failed.</p>

<p><a href="fix/" data-turbo="false">Fix the missing autocomplete token</a> — then <strong>Apply</strong>.</p>

**Check** on the live examples scores this rule. **Apply** on the fix page writes the example and scores it.

## Not a pass

`type="email"` without `autocomplete` is not enough. `autocomplete="off"` on a personal name, email, or address field fails this rule. Search boxes, one-time codes, and fields that are not about the current user are out of scope.

## Official

**1.3.5 Identify Input Purpose** (AA). In `ada-title-ii` (2.1 AA) and `wcag-22-aa` (2.2 AA). Not in `section-508-web` (WCAG 2.0 AA). 2.1-only.

Sufficient [H98](https://www.w3.org/WAI/WCAG22/Techniques/html/H98). Understanding: [Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose).
