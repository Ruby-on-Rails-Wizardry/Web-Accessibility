---
title: Accessible name
description: What assistive technology calls this control — the programmatic name. Not the same thing as visible ink until we associate them.
node: accessible-name
---

A button, link, or field has a **programmatic name**: the string a screen reader or other tool uses when it speaks or lists the control.

If there is no name, [Robust](/learn/pour/) fails: the tool cannot tell the person what they landed on. If the name disagrees with the visible text, they hear one thing and see another.

This node is the idea. [Visible label is the programmatic name](/learn/visible-label/) is the usual web pattern for forms.

Hooks (do not treat as the whole of 4.1.2): WCAG **4.1.2 Name, Role, Value**; **2.5.3 Label in Name**.

## Contrast

**Worse:** `<div onclick="submit()">Send</div>` — no name, not a button.

**Better:** `<button type="submit">Send</button>` — the name is “Send”.

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: Given markup, the learner can say what the accessible name is (or that there is none).

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item (step: what is the name now)
- [ ] Isomorphic retest item
- [ ] Another independent snippet for retest

</div>
