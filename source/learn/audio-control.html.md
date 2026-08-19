---
title: Audio does not play unchecked
description: Sound that starts on its own for more than three seconds must be stoppable, or it drowns out a screen reader.
node: audio-control
---

A screen-reader user hears speech. Background audio that starts automatically competes with that speech.

If audio plays automatically for **more than three seconds**, there must be a way to pause, stop, or independently control the volume (**1.4.2**). This criterion also applies to content you are **not** relying on for conformance (non-interference).

Official pair: Failure [F23](https://www.w3.org/WAI/WCAG22/Techniques/failures/F23), [F93](https://www.w3.org/WAI/WCAG22/Techniques/failures/F93); Sufficient [G60](https://www.w3.org/WAI/WCAG22/Techniques/general/G60). Understanding: [Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control).

## Contrast

```html
<!-- worse -->
<audio src="bed.mp3" autoplay></audio>

<!-- better: user starts it, or it stops within 3 seconds, or a visible pause is immediate -->
<audio src="bed.mp3" controls></audio>
```

<div class="todo-box" markdown="1">

## Still to write (Learning for Mastery)

Draft mastery: The learner can remove autoplay or add an immediate pause for looping background audio.

- [ ] Confirm the one-line mastery criterion
- [ ] Locator item
- [ ] Constructed item
- [ ] Isomorphic retest item

</div>
