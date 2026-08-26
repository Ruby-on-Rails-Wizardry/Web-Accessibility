# Keyboard can operate it

Published: `source/learn/keyboard-operable.html.md` → `/learn/keyboard-operable/`

Draft mastery: The learner can point at a mouse-only control and name the keyboard path that is missing.

The checker flags hover-only handlers and click on a non-focusable node. A `div` with `tabindex="0"` plus `onclick` still fails native-control / name-role-value; this cop treats it as reachable. Enter/Space activation is not simulated.

- [x] Confirm the one-line mastery criterion
- [x] Locator item — `/learn/keyboard-operable/pick/`
- [x] Constructed item — `/learn/keyboard-operable/fix/`
- [x] Isomorphic retest item
