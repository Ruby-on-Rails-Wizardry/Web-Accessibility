---
title: Focus does not change context
description: Putting focus on a control must not open a new window, move focus, or rebuild the page.
node: no-change-on-focus
rule: Focusing a control does not cause a change of context.
---

[Predictable](/learn/pour/): Tab landing on a field must not yank the person to a new page, spawn a window, or move focus somewhere else. A change of **context** is a new window, a new view, a new focus, or a complete rebuild of content.

A new panel that appears *without* moving focus is often fine. Navigating when the person **activates** the control is fine. Changing a value is the sibling: [Changing a value does not navigate](/learn/no-change-on-input/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<select onfocus="location = '/locale/' + this.value">
  <option value="en">English</option>
</select>
```

Tabbing to the select navigates. The person never chose to leave.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<label for="locale">Language</label>
<select id="locale" name="locale">
  <option value="en">English</option>
</select>
<button type="submit">Change language</button>
```

Focus can rest on the control. Context changes when they submit.

</div>

</div>

## Not a pass

`onfocus="this.select()"` inside the same field is not a change of context. Opening a new window on focus is. A skip link that *moves* focus to `main` is requested by the person who activated it — that is not this miss.

## Official

**3.2.1 On Focus** (A). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Failure [F55](https://www.w3.org/WAI/WCAG22/Techniques/failures/F55); Sufficient [G107](https://www.w3.org/WAI/WCAG22/Techniques/general/G107). Understanding: [On Focus](https://www.w3.org/WAI/WCAG22/Understanding/on-focus).

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can remove a focus-triggered navigation and leave an explicit activation instead.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
