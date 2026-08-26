---
title: Focus order matches meaning
description: Tab should visit controls in the order that makes sense — usually the visual order — not the order leftover from a CSS grid accident.
node: focus-order
rule: Put keyboard focus in an order that matches the meaning of the page.

sc:
  - "2.4.3"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
---

After [keyboard can reach it](/learn/keyboard-access/): the **sequence** has to match the meaning of the page. Tab that jumps Email → Submit → Name shuts out keyboard users who follow the visual form.

Positive `tabindex` values (`tabindex="5"`) and DOM order that disagrees with the visual flow are the usual misses. Prefer source order. `tabindex="0"` puts a custom widget in the tab order; `tabindex="-1"` is for scripted focus, not a new tab stop. Related: [Meaningful sequence](/learn/meaningful-sequence/) is reading order.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<input tabindex="3" id="name">
<input tabindex="1" id="email">
<button tabindex="2">Send</button>
```

Visual order is Name, Email, Submit. Tab jumps Email → Send → Name.

<p><a href="bad/" data-turbo="false">Open this example alone</a> and check it with tools. That page is supposed to fail.</p>

</div>

<div class="example example--good" markdown="1">

## Good

```html
<label for="name">Name</label>
<input id="name">
<label for="email">Email</label>
<input id="email">
<button>Send</button>
```

DOM order is the order. Tab follows the form.

<p><a href="good/" data-turbo="false">Open this example alone</a> and check it with the same tools.</p>

</div>

</div>

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that follow the rule</a> — mark every card whose Tab order follows the DOM. A correct pick collapses; a miss shows which rule failed.</p>

<p><a href="fix/" data-turbo="false">Fix the tabindex order</a> — then <strong>Apply</strong>.</p>

**Check** on the live examples scores this rule. **Apply** on the fix page writes the example and scores it.

## Not a pass

`tabindex="0"` on a custom widget is not this failure; `tabindex="1"` (and up) is. A CSS grid that paints left-to-right while the DOM is right-to-left still fails if Tab disagrees with meaning.

## Official

**2.4.3 Focus Order** (A). In `section-508-web` (WCAG 2.0 AA), `ada-title-ii` (2.1 AA), and `wcag-22-aa` (2.2 AA).

Failure [F44](https://www.w3.org/WAI/WCAG22/Techniques/failures/F44), [F85](https://www.w3.org/WAI/WCAG22/Techniques/failures/F85); Sufficient [G59](https://www.w3.org/WAI/WCAG22/Techniques/general/G59), [H4](https://www.w3.org/WAI/WCAG22/Techniques/html/H4). Understanding: [Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order).
