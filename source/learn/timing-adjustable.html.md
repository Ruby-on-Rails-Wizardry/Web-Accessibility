---
title: Time limits can be extended
description: A session timeout that dumps the form is a miss unless the person can turn it off, adjust it, or extend it.
node: timing-adjustable
rule: Let people turn off, adjust, or extend a time limit unless the limit is essential.
---

People read and type at different speeds. A benefits form that expires at ten minutes with no warning wipes work for anyone who needs more time — screen-reader users, people with cognitive or motor differences, anyone filling the form slowly.

If a time limit is not **essential** (a real-time auction, a live event), they must be able to turn it off, adjust it, or extend it (with enough warning). Limits longer than 20 hours are excepted. Movement that seizes attention is a different clock: [Pause, stop, or hide](/learn/pause-stop-hide/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

A benefits form expires at 10 minutes with no warning and wipes the fields.

The session dies. There is no extend path and no saved draft.

</div>

<div class="example example--good" markdown="1">

## Good

A warning at least 20 seconds before expiry, with a simple “Need more time?” that extends the session.

One activation extends the limit. The data stays.

</div>

</div>

## Not a pass

A warning that lasts five seconds and requires a multi-step dialog (or a CAPTCHA) is not a simple extend. Extending the session but wiping the form still fails. Calling a generic login timeout “essential” does not make it an auction. Auto-logout with no warning fails even if the person can log back in to an empty form.

## Official

**2.2.1 Timing Adjustable** (A). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Failure [F40](https://www.w3.org/WAI/WCAG22/Techniques/failures/F40), [F41](https://www.w3.org/WAI/WCAG22/Techniques/failures/F41); Sufficient [G133](https://www.w3.org/WAI/WCAG22/Techniques/general/G133), [G198](https://www.w3.org/WAI/WCAG22/Techniques/general/G198). Understanding: [Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can add an extend-time path to a session timeout, or say when a live auction is excepted.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
