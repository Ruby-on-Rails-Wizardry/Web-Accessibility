---
title: Captions for prerecorded video
description: If the video has speech or meaningful sound, synchronized captions are not optional decoration.
node: captions
rule: Provide synchronized captions for prerecorded video that has speech or meaningful sound.
---

[Perceivable](/learn/pour/): people who cannot hear the soundtrack still need the words and the meaningful sounds (a doorbell, an explosion that changes the plot). Auto-captions that are wrong are not a pass. Captions must be accurate and synchronized.

Live captions are **1.2.4**. Audio-only / video-only alternatives and audio description are **1.2.1 / 1.2.3 / 1.2.5**. Those are sister jobs, not this node.

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<video controls>
  <source src="safety.mp4" type="video/mp4">
</video>
```

A training video with spoken steps and no captions. The soundtrack is the only source of the steps.

</div>

<div class="example example--good" markdown="1">

## Good

```html
<video controls>
  <source src="safety.mp4" type="video/mp4">
  <track kind="captions" srclang="en" src="safety-en.vtt" label="English">
</video>
```

A captions track (or an equivalent player control) matches the dialogue and the meaningful non-speech sounds.

</div>

</div>

## Not a pass

Auto-captions that invent words fail. A transcript on another page is not synchronized captions. `kind="subtitles"` that omit meaningful non-speech sounds (the alarm, the knock) are not a full captions pass.

## Official

**1.2.2 Captions (Prerecorded)** (A). In `section-508-web` (WCAG 2.0 AA), `ada-title-ii` (2.1 AA), and `wcag-22-aa` (2.2 AA).

Sufficient [G87](https://www.w3.org/WAI/WCAG22/Techniques/general/G87), [G93](https://www.w3.org/WAI/WCAG22/Techniques/general/G93); Failure [F8](https://www.w3.org/WAI/WCAG22/Techniques/failures/F8). Understanding: [Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded).
