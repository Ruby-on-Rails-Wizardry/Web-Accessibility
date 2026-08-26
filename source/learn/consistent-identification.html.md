---
title: The same action keeps the same name
description: Controls that do the same thing are identified the same way, every time they appear.
node: consistent-identification
rule: Identify the same function with the same accessible name (and the same visible label) wherever it appears.

sc:
  - "3.2.4"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
---

Calling the action “Print” on one view and “Download PDF” on the next, when both produce the same document, forces people to re-learn which control is which. Icons that mean search on one page and filter on another are the same miss.

Order of the header is the sibling: [Repeated navigation stays in order](/learn/consistent-nav-order/).

Section 508 **excepts non-web documents** from **3.2.4** (E205.4). Web sites are in.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<!-- list view -->
<button type="button">Print</button>

<!-- detail view, same job -->
<button type="button">Download PDF</button>
```

Two names for one function.

<p><a href="bad/" data-turbo="false">Open this example alone</a> and check it with tools. That page is supposed to fail. The live example puts both names on one page so the checker can compare them.</p>

</div>

<div class="example example--good" markdown="1">

## Good

```html
<button type="button">Print</button>
<!-- every view that offers this function -->
```

The same accessible name, the same visible label. An icon, if you use one, means that same action everywhere.

<p><a href="good/" data-turbo="false">Open this example alone</a> and check it with the same tools. The live example shows the control twice, as two views would.</p>

</div>

</div>

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that follow the rule</a> — mark every card where the same action keeps the same name. A correct pick collapses; a miss shows which rule failed.</p>

<p><a href="fix/" data-turbo="false">Fix the inconsistent names</a> — then <strong>Apply</strong>.</p>

**Check** on the live examples scores this rule. **Apply** on the fix page writes the example and scores it.

## Not a pass

A different name is required when the function is actually different (“Email this page” vs “Print”). The miss is the same job, two identifications. `aria-label` that disagrees with the visible word is also a [label-in-name](/learn/label-in-name/) miss.

## Official

**3.2.4 Consistent Identification** (AA). In `section-508-web` (web, not 508 non-web), `ada-title-ii`, and `wcag-22-aa`.

Sufficient [G197](https://www.w3.org/WAI/WCAG22/Techniques/general/G197). Understanding: [Consistent Identification](https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification).
