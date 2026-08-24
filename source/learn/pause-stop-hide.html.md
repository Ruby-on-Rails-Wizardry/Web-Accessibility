---
title: Pause, stop, or hide movement
description: Anything that moves, blinks, or scrolls for more than five seconds needs a way to stop it.
node: pause-stop-hide
rule: If content moves, blinks, or auto-updates for more than five seconds, provide a way to pause, stop, or hide it.
---

Moving content seizes attention and can make reading impossible. People with attention, vestibular, or reading differences cannot use the rest of the page while a carousel or ticker keeps going.

If animation, blinking, scrolling, or auto-updating lasts **more than five seconds**, the person must be able to pause, stop, or hide it — unless that movement is **essential**. This is also a **non-interference** criterion: it applies even to content you are not relying on for a claim. Autoplaying sound is a sibling: [Audio does not play unchecked](/learn/audio-control/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

A carousel auto-advances forever with no pause.

Slides keep changing. There is no control to stop the motion.

</div>

<div class="example example--good" markdown="1">

## Good

A visible Pause, or it does not auto-advance.

The person can freeze the content (or it never moved on its own).

</div>

</div>

## Not a pass

Pause only on hover still fails keyboard and touch. A control hidden in a settings screen is not available. Five seconds of motion that then loops without a pause still lasts more than five seconds. Flashing that can cause seizures is [a separate, stricter rule](/learn/three-flashes/).

## Official

**2.2.2 Pause, Stop, Hide** (A). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Failure [F16](https://www.w3.org/WAI/WCAG22/Techniques/failures/F16); Sufficient [G4](https://www.w3.org/WAI/WCAG22/Techniques/general/G4), [G11](https://www.w3.org/WAI/WCAG22/Techniques/general/G11). Understanding: [Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide).
