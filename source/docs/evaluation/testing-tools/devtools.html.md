---
title: DevTools Accessibility
description: Chrome and Chromium built-in accessibility tree. Nothing to install.
---

Official reference: [Chrome DevTools accessibility features](https://developer.chrome.com/docs/devtools/accessibility/reference).

Chrome and Chromium include this. There is no extension to add.

## Open it

1. Open the page under test. On this site’s isolated examples, close **Edit**.
2. Open DevTools: **F12**, or **Ctrl+Shift+I**.
3. **Elements**. Select a node.
4. Open the **Accessibility** pane (right-hand sidebar; or Command Menu **Ctrl+Shift+P** → “Show Accessibility”).

For the whole tree: Command Menu → **Show Accessibility Tree**. That view is the heading list, names, and roles the browser exposes.

## What it is for

- Heading outline.
- Accessible name, role, and value on a control (labels, buttons, images).

You read the tree. It will not print a WCAG fail list. For a pass/fail scan, use [axe DevTools](axe/).

## Try it on this site

[Do not skip heading levels](/learn/heading-order/) has live bad and good pages. Other leaves: [knowledge tree](/learn/).
