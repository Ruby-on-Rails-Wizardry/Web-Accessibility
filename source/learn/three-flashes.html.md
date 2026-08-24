---
title: Nothing flashes more than three times
description: Flashing at certain rates can cause seizures. Do not ship it. This also applies to content you are not “relying on.”
node: three-flashes
rule: Do not flash content more than three times in any one-second period unless it is below the flash thresholds.
---

Flashing at certain rates can cause seizures. People with photosensitive epilepsy are shut out — and at risk — if a banner, hero, or ad strobes.

**2.3.1** (Level A): content does not flash more than three times in any one-second period, or the flash is below the general flash and red flash thresholds. This is a **non-interference** criterion. A decorative hero that strobes still fails the page. Do not put a live flashing demo on this site. Looping motion without a pause is [Pause, stop, or hide](/learn/pause-stop-hide/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

An advertising banner strobes several times a second.

More than three flashes in one second. The page is unsafe even if the rest of it is still.

</div>

<div class="example example--good" markdown="1">

## Good

No flashing, or a static frame.

Nothing strobes. A still (or motion below the flash thresholds) can stay.

</div>

</div>

## Not a pass

“It is only decorative” does not except it — non-interference still applies. A small corner video that flashes still counts unless it is below the general flash and red flash thresholds. Slowing a loop so it *looks* calmer, while it still flashes four times in some one-second window, still fails. Blinking that lasts more than five seconds is also [2.2.2](/learn/pause-stop-hide/), but that pause control does not make an unsafe flash pass **2.3.1**.

## Official

**2.3.1 Three Flashes or Below Threshold** (A). In `section-508-web`, `ada-title-ii`, and `wcag-22-aa`.

Sufficient [G19](https://www.w3.org/WAI/WCAG22/Techniques/general/G19), [G176](https://www.w3.org/WAI/WCAG22/Techniques/general/G176). Understanding: [Three Flashes or Below Threshold](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold).
