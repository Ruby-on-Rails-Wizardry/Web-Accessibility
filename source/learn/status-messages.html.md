---
title: Status messages are announced
description: “3 items in cart” that appears without moving focus must still reach a screen reader.
node: status-messages
rule: Make status messages programmatically available without moving focus.
---

A confirmation, error, or progress line that sighted users see in place is silent to a screen reader unless the page exposes it. “Saved.” that appears at the top of the form never gets spoken if nothing is a live region and focus did not move.

Usual HTML: `role="status"` / `aria-live="polite"` for confirmations; `role="alert"` when the person must know immediately. Do not move focus unless the next task is on a new field. Field errors that name the problem are [Error identification](/learn/error-identification/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<div class="flash">Saved.</div>
```

A silent div appears. Assistive technology is not told.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<div class="flash" role="status">Saved.</div>
```

The same message is a status region. It is announced without stealing focus.

</div>

</div>

## Not a pass

Moving focus to the toast “so the reader will hear it” is not this pattern — that is a change of context. `role="status"` on a node that is `aria-hidden` or `display: none` at the moment the text appears stays silent. A live region that also contains a ticking clock or unrelated updates buries the message. A visual-only snackbar still fails.

## Official

**4.1.3 Status Messages** (AA). WCAG 2.1 only — in `ada-title-ii` and `wcag-22-aa`, not `section-508-web`.

Sufficient [ARIA19](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA19), [ARIA22](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22). Understanding: [Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can add an appropriate live region to a save confirmation that does not move focus.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
