---
title: Single-key shortcuts can be turned off
description: A shortcut that is only a letter will fire while someone is dictating. Offer off, remap, or active-only-on-focus.
node: character-key-shortcuts
rule: Provide a way to turn off, remap, or focus-scope any shortcut that is only a letter, number, or punctuation.
---

After [keyboard can reach it](/learn/keyboard-access/): if you implement a shortcut that is **only** a letter, number, or punctuation (no Ctrl/Alt/⌘), speech-input users will trigger it while talking.

At least one of: a way to **turn it off**, a way to **remap** to include a non-printable modifier, or the shortcut is **only active when that component has focus**.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

Pressing `S` anywhere in the app sends the current item. A voice user saying “subject” deletes mail.

The printable key is always live. Dictation fires it.

</div>

<div class="example example--good" markdown="1">

## Good

The shortcut is `Ctrl+S`, or there is a setting to disable single-letter shortcuts, or `S` only works when the list itself is focused.

Speech no longer collides with a document-wide letter key.

</div>

</div>

## Not a pass

Documenting the shortcut in a help page is not a way to turn it off. `accesskey` that still fires a printable key without a modifier fails the same way. A shortcut that is only active while that widget has focus can pass; a document-wide `D` for delete cannot.

## Official

**2.1.4 Character Key Shortcuts** (A). In `ada-title-ii` (2.1 AA) and `wcag-22-aa` (2.2 AA). Not in `section-508-web` (WCAG 2.0 AA). 2.1-only.

Understanding: [Character Key Shortcuts](https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts). Sufficient [G217](https://www.w3.org/WAI/WCAG22/Techniques/general/G217).
