---
title: Visible label is in the name
description: If the button says “Search”, the accessible name must contain “Search” — not only “Submit query”.
node: label-in-name
rule: Put the visible label text inside the accessible name.
---

Speech-input users say the word they see. If the visible label is not in the [accessible name](/learn/accessible-name/), the command misses.

After [visible label](/learn/visible-label/): the name **contains** that visible text (start with it when you can).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<button aria-label="Submit">Search</button>
```

The person sees “Search”. The name is “Submit”. Saying “Search” does nothing.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<button>Search</button>
```

Visible text is the name. The spoken command matches.

</div>

</div>

## Not a pass

Extra words in the name are allowed if the visible string is still there (“Search this site”). `aria-label` that *replaces* the visible text fails. Matching case-insensitively is enough; matching a symbol-only visible label to a spelled-out name is not.

## Official

**2.5.3 Label in Name** (A). In `ada-title-ii` (2.1 AA) and `wcag-22-aa` (2.2 AA). Not in `section-508-web` (WCAG 2.0 AA). 2.1-only.

Failure [F96](https://www.w3.org/WAI/WCAG22/Techniques/failures/F96); Sufficient [G208](https://www.w3.org/WAI/WCAG22/Techniques/general/G208), [G211](https://www.w3.org/WAI/WCAG22/Techniques/general/G211). Understanding: [Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name).
