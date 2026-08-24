---
title: Screen reader
description: Hear the heading list and names. Which readers are available on each platform, most common first.
---

Official overviews: [W3C — involving users in evaluation](https://www.w3.org/WAI/test-evaluate/involving-users/), [WAI — how people with disabilities use the web](https://www.w3.org/WAI/people-use-web/). Commonness follows [WebAIM Screen Reader User Survey #10](https://webaim.org/projects/screenreadersurvey10/) (2024) where that survey reports use.

A screen reader is assistive technology. It speaks or brailles the accessibility tree: headings, names, roles, live regions. Automated checkers ([axe](axe/), [WAVE](wave/)) and [DevTools](devtools/) do not replace it.

This site does not bundle a screen reader. Use one from your operating system or a vendor.

## By environment

Most common first. Built-in readers are listed even when they are not the usual *primary* reader.

### Windows

1. [NVDA](https://www.nvaccess.org/) — free. Most commonly *used* desktop reader in the WebAIM survey.
2. [JAWS](https://www.freedomscientific.com/products/software/jaws/) — commercial. Most common *primary* desktop reader in the survey.
3. [Narrator](https://support.microsoft.com/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109b59a) — included with Windows.
4. ZoomText / Fusion — magnification with speech (Freedom Scientific).
5. Dolphin SuperNova — commercial suite.

### macOS

1. [VoiceOver](https://support.apple.com/guide/voiceover/welcome/mac) — included with macOS.

### iPhone and iPad

1. [VoiceOver](https://support.apple.com/guide/iphone/turn-on-and-practice-voiceover-iph3e2e415f/ios) — included with iOS and iPadOS. Most common mobile reader in the WebAIM survey.

### Android

1. [TalkBack](https://support.google.com/accessibility/android/answer/6283677) — included with Android. Second most common mobile reader in the survey.

### Linux

1. [Orca](https://help.gnome.org/users/orca/stable/) — usual desktop reader on GNOME and similar environments.

### Chromebook

1. ChromeVox — included with ChromeOS.

## Try it on this site

Open a rule that has isolated examples, such as [Do not skip heading levels](/learn/heading-order/), then open the live bad or good page. Close **Edit**. Use the reader’s heading list (often **H**, or a headings dialog) or browse the page.

More leaves: [knowledge tree](/learn/).

## What it is not

A screen-reader pass is not a conformance claim by itself. Combine it with keyboard testing, the profile catalog, and [WCAG-EM](../../wcag-em/) when you need an audit.
