---
title: Accessible authentication
description: Login must not require the person to recall, transcribe, or solve a puzzle if a password manager or paste cannot do the work.
node: accessible-authentication
---

WCAG **2.2** AA (**3.3.8**). Not in 508 or ADA Title II as written.

A cognitive function test (remember a password, type a one-time code by hand, solve a CAPTCHA-like recall task) is not allowed **unless** there is another method, or a **mechanism** that helps (password manager, copy-and-paste). Object-recognition and personal-content puzzles are allowed at AA and banned at AAA **3.3.9**.

Do not block `paste`. Do not force a second, unpasteable transcription of the password.

Official: [Understanding Accessible Authentication (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum). Sufficient [G218](https://www.w3.org/WAI/WCAG22/Techniques/general/G218).

## Contrast

**Worse:** “Type the 3rd, 7th, and 11th characters of your password” (a password manager cannot fill that).

**Better:** A normal password field that accepts paste, or a magic link, or WebAuthn.

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can reject a transcription puzzle and name a 3.3.8-compliant alternative.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
