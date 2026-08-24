---
title: axe DevTools
description: Deque browser extension. Automated WCAG checks in DevTools. How to install and scan.
---

Official product: [axe DevTools extension](https://www.deque.com/axe/devtools/extension/). Help: [Deque Docs — axe DevTools Extension](https://docs.deque.com/devtools-for-web/4/en/devtools-extension/).

axe runs **automated** rules on the page in the current tab. It is a first pass, not a conformance claim. The **free** extension is enough for this site. Pro (guided tests, export, saving) is optional.

## Install

The Chrome Web Store listing works in **Google Chrome** and in **Chromium**.

1. Open Chrome or Chromium.
2. Open [axe DevTools — Chrome Web Store](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd).
3. **Add to Chrome** (Chromium shows the same control).
4. Confirm the permission prompt.

Official install page (Chrome, Edge, limited Firefox): [Deque — extension for Chrome](https://www.deque.com/axe/devtools/extension/chrome/).

After it is added, DevTools gains an **axe DevTools** panel.

## Scan a page

1. Open the page under test.
2. On this site’s isolated examples, close **Edit** so the editor is not in the page.
3. Open DevTools (**F12** or **Ctrl+Shift+I**).
4. Open the **axe DevTools** tab.
5. **Scan ALL of my page**.

Each issue cites a success criterion. Use this library’s catalog and the knowledge-tree node, not a score.

## Try it on this site

[Do not skip heading levels](/learn/heading-order/) has live bad and good pages. Close **Edit**, then scan. Other leaves: [knowledge tree](/learn/).

## What it will not catch

Meaningful names, “is this the same task,” keyboard traps that need a person, and anything a rule cannot see. Use [DevTools Accessibility](devtools/) for the tree, a [screen reader](screen-reader/) for what is spoken, and [WCAG-EM](../../wcag-em/) for an audit.
