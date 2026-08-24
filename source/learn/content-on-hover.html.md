---
title: Content on hover or focus
description: A tooltip that appears on hover must be dismissible, hoverable, and persistent — not a disappearing box that covers the thing you were reading.
node: content-on-hover
rule: Extra content on hover or focus must be dismissible, hoverable, and persistent.
---

A hover definition that covers the next word and vanishes when you move toward it shuts out magnification users, people with tremor, and keyboard users who need the extra content to stay.

Extra content triggered by hover or keyboard focus (tooltips, submenus, custom titles) must be **dismissible** without moving pointer or focus (usually Escape), unless it is an error and does not obscure; **hoverable** — the pointer can move onto the new content without it vanishing; and **persistent** until hover/focus is removed, the user dismisses it, or it is no longer valid. Browser-native `title` tooltips are a user-agent exception (and a poor tooltip). Prefer visible text.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

A hover definition appears, covers the next word, and disappears when you try to move the pointer onto it. There is no Escape.

The extra content cannot be reached, cannot be dismissed from the keyboard, and blocks what was being read.

</div>

<div class="example example--good" markdown="1">

## Good

The same definition stays while hovered or focused, can be pointed at, and Escape closes it.

Dismissible, hoverable, and persistent. The pointer can move onto the new content.

</div>

</div>

## Not a pass

A timeout of a few seconds is not persistent. Dismissing only by moving the pointer off the trigger fails dismissible. `title` as the “accessible tooltip” is the user-agent exception and still a poor tooltip — it does not meet hoverable or dismissible for a custom overlay. Covering the trigger itself so the person cannot see what they hovered is a miss even if Escape works.

## Official

**1.4.13 Content on Hover or Focus** (AA). WCAG 2.1 only — in `ada-title-ii` and `wcag-22-aa`, not `section-508-web`.

Failure [F95](https://www.w3.org/WAI/WCAG22/Techniques/failures/F95); Sufficient [SCR39](https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR39). Understanding: [Content on Hover or Focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus).
