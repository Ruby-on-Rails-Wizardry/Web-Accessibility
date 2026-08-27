---
title: No unexpected change of context
description: Focusing a field or changing a value must not yank the person to a new page unless they asked. Two rules live under this family.
node: no-unexpected-change
sc:
  - "3.2.1"
  - "3.2.2"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
---

This is a **family**, not one cop. [Predictable](/learn/pour/): a change of **context** (new window, new focus, complete rebuild of content) happens on request, not as a surprise.

- [Focus does not change context](/learn/no-change-on-focus/) — **3.2.1**.
- [Changing a value does not navigate](/learn/no-change-on-input/) — **3.2.2**.

A new panel that appears is often fine. An automatic submit-and-navigate on the first radio is not.

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that do not change context</a> — mark every card that stays put on focus and when a value changes. A miss names the child rule.</p>

<p><a href="fix/" data-turbo="false">Fix the unexpected change</a> — stop focus and input from navigating, then <strong>Apply</strong>. What still fails is what to restudy.</p>
