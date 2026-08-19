---
title: Captions for prerecorded video
description: If the video has speech or meaningful sound, synchronized captions are not optional decoration.
node: captions
---

[Perceivable](/learn/pour/): people who cannot hear the soundtrack still need the words and the meaningful sounds (a doorbell, an explosion that changes the plot).

- **1.2.2 Captions (Prerecorded)** — AA for recorded video with audio. This node.
- **1.2.4 Captions (Live)** — live. Same idea, harder operations.
- **1.2.1 / 1.2.3 / 1.2.5** — audio-only / video-only alternatives and audio description. Sister jobs; not this node.

Auto-captions that are wrong are not a pass. Captions must be accurate and synchronized.

Official pair: Sufficient [G87](https://www.w3.org/WAI/WCAG22/Techniques/general/G87), [G93](https://www.w3.org/WAI/WCAG22/Techniques/general/G93); Failure [F8](https://www.w3.org/WAI/WCAG22/Techniques/failures/F8). Understanding: [Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded).

## Contrast

**Worse:** A training video with spoken steps and no captions (or auto-captions that invent words).

**Better:** A `track kind="captions"` (or an equivalent player control) that matches the dialogue and the meaningful non-speech sounds.

```html
<video controls>
  <source src="safety.mp4" type="video/mp4">
  <track kind="captions" srclang="en" src="safety-en.vtt" label="English">
</video>
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: Given a prerecorded talking-head video, the learner can say whether captions are required and what a pass looks like.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
