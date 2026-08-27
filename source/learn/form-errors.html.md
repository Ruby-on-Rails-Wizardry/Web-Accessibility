---
title: Errors are identified in text
description: >-
  A red border is not an error message. Two rules live under this family:
  name the error, then suggest a fix.
node: form-errors
sc:
  - "3.3.1"
  - "3.3.3"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
---

This is a **family**, not one cop. After a [visible label](/learn/visible-label/): when the person submits and something is wrong, they have to **find** the error and **know** what to do.

- [The error is identified in text](/learn/error-identification/) — which field, what failed (**3.3.1**).
- [Suggest a fix when you know one](/learn/error-suggestion/) — a usable correction (**3.3.3**).

Color or an icon alone also fails [color is not the only cue](/learn/color-not-only-cue/). Move focus or use a [status message](/learn/status-messages/) so AT hears it.

Then: [Review before an irreversible submit](/learn/error-prevention/), [Do not ask for the same data twice](/learn/redundant-entry/), [Accessible authentication](/learn/accessible-authentication/).

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that identify the error and suggest a fix</a> — mark every card that names the error in text and says how to fix it. A miss names the child rule.</p>

<p><a href="fix/" data-turbo="false">Fix the error messages</a> — identify the error in text and say how to fix it, then <strong>Apply</strong>. What still fails is what to restudy.</p>
