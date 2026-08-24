---
title: Accessible authentication
description: Login must not require the person to recall, transcribe, or solve a puzzle if a password manager or paste cannot do the work.
node: accessible-authentication
rule: Do not require recalling or transcribing a secret if paste or a password manager cannot do the work.
---

After [errors are identified](/learn/form-errors/): a cognitive function test (remember a password, type a one-time code by hand, solve a CAPTCHA-like recall task) is not allowed **unless** there is another method, or a **mechanism** that helps (password manager, copy-and-paste).

People who cannot hold a password in working memory, and people who use managers, are shut out when paste is blocked. Object-recognition and personal-content puzzles are allowed at AA and banned at AAA **3.3.9**.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

“Type the 3rd, 7th, and 11th characters of your password.”

A password manager cannot fill that. The person must recall and transcribe.

</div>

<div class="example example--good" markdown="1">

## Good

A normal password field that accepts paste, or a magic link, or WebAuthn.

The secret is entered by a mechanism, not by a recall puzzle.

</div>

</div>

## Not a pass

Blocking `paste` on the password field fails this rule even if the field looks ordinary. A second, unpasteable transcription of the same password is the same miss. An object-recognition CAPTCHA can pass **3.3.8** AA; it is not this node’s preferred login, and **3.3.9** (AAA) bans it.

## Official

**3.3.8 Accessible Authentication (Minimum)** (AA). In `wcag-22-aa` (2.2 AA) only. Not in `section-508-web` (WCAG 2.0 AA) or `ada-title-ii` (2.1 AA). 2.2-only.

Understanding: [Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum). Sufficient [G218](https://www.w3.org/WAI/WCAG22/Techniques/general/G218).
