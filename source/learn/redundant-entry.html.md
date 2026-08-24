---
title: Do not ask for the same data twice
description: In one process, previously entered information is auto-filled or offered for selection — not retyped from memory.
node: redundant-entry
rule: Do not make the person retype information they already entered in the same process.
---

After [errors are identified](/learn/form-errors/): people should not retype a shipping address they just entered as billing, unless security or a real change of data requires it.

Re-entry from memory shuts out people with memory, motor, or attention limits. Auto-fill or a choice (“use the address I just entered”) is the usual fix.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

Step 2 of checkout blanks every field that step 1 already collected.

The person must remember and retype the same address.

</div>

<div class="example example--good" markdown="1">

## Good

Same-process fields are pre-filled or offered as “use the address I just entered.”

Previously entered data is available without another transcription.

</div>

</div>

## Not a pass

A new session or a different process can ask again. Forcing a retype “for security” when the data is already in the same checkout, and no exception applies, fails. Auto-fill that the person cannot edit when the data might have changed is the wrong fix; offer or pre-fill, then let them correct.

## Official

**3.3.7 Redundant Entry** (A). In `wcag-22-aa` (2.2 AA) only. Not in `section-508-web` (WCAG 2.0 AA) or `ada-title-ii` (2.1 AA). 2.2-only.

Understanding: [Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry). Sufficient [G221](https://www.w3.org/WAI/WCAG22/Techniques/general/G221).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can point at a repeated field in one process and say how to auto-populate or offer it.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
