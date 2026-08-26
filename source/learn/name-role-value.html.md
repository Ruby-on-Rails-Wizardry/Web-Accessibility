---
title: Name, role, and value
description: A custom widget must expose what it is, what it is called, and what state it is in — or you should have used a native control.
node: name-role-value
rule: Expose name, role, and value for every custom widget, or use a native control.

sc:
  - "4.1.2"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
---

After [native control first](/learn/native-control/): if you still build a `div` that acts like a tab, checkbox, or menu, **4.1.2** requires that name, role, and value (and changes to them) can be programmatically determined and set. Without that, a screen reader cannot tell what the control is or what state it is in.

Prefer the native element. If you cannot, follow [ARIA APG](https://www.w3.org/WAI/ARIA/apg/) for that pattern — do not invent a role. The [accessible name](/learn/accessible-name/) is one of the three; keyboard behavior is [Keyboard can operate it](/learn/keyboard-operable/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<div class="tab selected" onclick="showPanel(2)">Billing</div>
```

A clickable `div`. No role, no selected state, no name unless the tool guesses from the text.

<p><a href="bad/" data-turbo="false">Open this example alone</a> and check it with tools. That page is supposed to fail.</p>

</div>

<div class="example example--good" markdown="1">

## Good

```html
<button type="button" role="tab" aria-selected="true" aria-controls="billing">Billing</button>
```

Role, name, and selected state are exposed (or use a native control and skip the tab pattern). If a native `button` plus a heading structure will do, use that. `role="tab"` is for an actual tablist.

<p><a href="good/" data-turbo="false">Open this example alone</a> and check it with the same tools.</p>

</div>

</div>

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that follow the rule</a> — mark every card that exposes name, role, and state, or uses a native control. A correct pick collapses; a miss shows which rule failed.</p>

<p><a href="fix/" data-turbo="false">Fix the nameless widget</a> — then <strong>Apply</strong>.</p>

**Check** on the live examples scores this rule. **Apply** on the fix page writes the example and scores it.

## Not a pass

`tabindex="0"` plus `onclick` still misses unless role, name, and state are exposed and updated. `role="button"` with no accessible name fails. `aria-selected` (or `aria-checked`, `aria-expanded`) that does not change when the UI changes still fails. Inventing a role is not a pass.

## Official

**4.1.2 Name, Role, Value** (A). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Failure [F15](https://www.w3.org/WAI/WCAG22/Techniques/failures/F15), [F79](https://www.w3.org/WAI/WCAG22/Techniques/failures/F79); Sufficient [ARIA4](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA4), [ARIA5](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA5), [G108](https://www.w3.org/WAI/WCAG22/Techniques/general/G108). Understanding: [Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value).
