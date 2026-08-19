---
title: Single-key shortcuts can be turned off
description: A shortcut that is only a letter will fire while someone is dictating. Offer off, remap, or active-only-on-focus.
node: character-key-shortcuts
---

WCAG **2.1**. If you implement a shortcut that is **only** a letter, number, or punctuation (no Ctrl/Alt/⌘), speech-input users will trigger it while talking.

At least one of: a way to **turn it off**, a way to **remap** to include a non-printable modifier, or the shortcut is **only active when that component has focus**.

Hooks: **2.1.4 Character Key Shortcuts**. Official: [Understanding Character Key Shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts). Sufficient [G217](https://www.w3.org/WAI/WCAG22/Techniques/general/G217).

## Contrast

**Worse:** Pressing `S` anywhere in the app sends the current item. A voice user saying “subject” deletes mail.

**Better:** The shortcut is `Ctrl+S`, or there is a setting to disable single-letter shortcuts, or `S` only works when the list itself is focused.

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can name why a document-wide `D` shortcut fails 2.1.4 and pick a compliant fix.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
