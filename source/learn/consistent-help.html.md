---
title: Help stays in the same place
description: If help appears on multiple pages in a set, it stays in the same relative order.
node: consistent-help
rule: Keep help in the same relative order on every page of a set that offers it.
---

People who need help should not have to hunt a new corner on each step. If you offer contact details, a contact mechanism, self-help, or a chat bot on several pages of a set, that mechanism occurs in the **same relative order** (unless the person changes the view).

This is a WCAG **2.2** rule. It is not in Section 508’s WCAG 2.0 bar or ADA Title II’s 2.1 bar. It sits under [Consistent navigation and names](/learn/consistent-navigation/). Catalog: [2.2 additions](/docs/wcag/whats-new-2.2/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

Chat is bottom-right on step 1 of an appointment flow and hidden in the footer on step 2.

The same help mechanism moves. People who memorized step 1 have to hunt on step 2.

</div>

<div class="example example--good" markdown="1">

## Good

The same chat control, in the same relative place, on every step that offers help.

Help is where it was. People can find it without a new search.

</div>

</div>

## Not a pass

A “Contact” link in the header on one page and the same words inside a footer accordion on the next still fails — the relative order changed. Omitting help on a page is not a fail; this rule applies when the mechanism is repeated.

## Official

**3.2.6 Consistent Help** (A). WCAG 2.2 only: in `wcag-22-aa` (2.2 AA). Not in `section-508-web` (WCAG 2.0 AA) or `ada-title-ii` (2.1 AA).

Understanding: [Consistent Help](https://www.w3.org/WAI/WCAG22/Understanding/consistent-help).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: Given a three-step flow, the learner can say whether help is consistently placed, and which profile requires this criterion.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
