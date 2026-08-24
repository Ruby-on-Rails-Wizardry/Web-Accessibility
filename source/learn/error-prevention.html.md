---
title: Review before an irreversible submit
description: Legal, financial, or data-destroying submits need a chance to check, confirm, or reverse.
node: error-prevention
rule: Give a review, confirm, or reverse step before a legal, financial, or data-destroying submit.
---

After [errors are identified](/learn/form-errors/): some mistakes cannot be a shrug. A single click that deletes an account or sends a payment shuts out people who mis-hit, who cannot proof the form at speed, and who need a second look.

At least one of: reversible, checked for input errors with a chance to correct, or a confirmation step that reviews the data.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

“Delete my account” is a single click with no confirm and no undo.

The action commits at once. There is no chance to check or reverse.

</div>

<div class="example example--good" markdown="1">

## Good

A review page (“You are about to delete account 123. Type DELETE to confirm”) or a time-limited undo.

The person sees what will happen and can stop or reverse it.

</div>

</div>

## Not a pass

A newsletter signup is usually out of scope; a wire transfer, a tax filing, or deleting stored data is in. A `title` tooltip that says “are you sure?” is not a confirmation step. Checking format on one field without a review of the whole commitment still fails when the submit is legal or financial.

## Official

**3.3.4 Error Prevention (Legal, Financial, Data)** (AA). In `section-508-web` (WCAG 2.0 AA), `ada-title-ii` (2.1 AA), and `wcag-22-aa` (2.2 AA).

Sufficient [G98](https://www.w3.org/WAI/WCAG22/Techniques/general/G98), [G99](https://www.w3.org/WAI/WCAG22/Techniques/general/G99), [G155](https://www.w3.org/WAI/WCAG22/Techniques/general/G155). Understanding: [Error Prevention (Legal, Financial, Data)](https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can say whether a flow is in 3.3.4’s scope and add a review or confirm step.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
