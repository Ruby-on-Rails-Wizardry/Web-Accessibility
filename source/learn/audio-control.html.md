---
title: Audio does not play unchecked
description: Sound that starts on its own for more than three seconds must be stoppable, or it drowns out a screen reader.
node: audio-control
rule: Do not autoplay audio for more than three seconds unless the person can pause, stop, or turn it down independently.

sc:
  - "1.4.2"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
---

A screen-reader user hears speech. Background audio that starts automatically competes with that speech and shuts that person out of the page.

If audio plays automatically for **more than three seconds**, there must be a way to pause, stop, or independently control the volume. This criterion also applies to content you are **not** relying on for conformance (non-interference). Moving visuals are a sibling: [Pause, stop, or hide movement](/learn/pause-stop-hide/).

<div class="examples" markdown="1">

<div class="example example--bad" markdown="1">

## Bad

```html
<audio src="bed.mp3" autoplay></audio>
```

The bed track starts on load. There is no pause. It talks over the screen reader.

<p><a href="bad/" data-turbo="false">Open this example alone</a> and check it with tools. That page is supposed to fail. The file is not present, so nothing plays.</p>

</div>

<div class="example example--good" markdown="1">

## Good

```html
<audio src="bed.mp3" controls></audio>
```

The person starts it, or it stops within three seconds, or a visible pause is immediate.

<p><a href="good/" data-turbo="false">Open this example alone</a> and check it with the same tools.</p>

</div>

</div>

## Practice

<p><a href="pick/" data-turbo="false">Pick the examples that follow the rule</a> — mark every card whose audio does not start unchecked, or has an immediate pause. A correct pick collapses; a miss shows which rule failed.</p>

<p><a href="fix/" data-turbo="false">Fix the autoplaying audio</a> — then <strong>Apply</strong>.</p>

**Check** on the live examples scores this rule. **Apply** on the fix page writes the example and scores it.

## Not a pass

A volume control that cannot mute, or that only ducks the page while leaving the bed track loud, still fails. A pause buried in a settings menu is not an immediate control. Browser mute is not a mechanism the content provides.

## Official

**1.4.2 Audio Control** (A). In `section-508-web` (WCAG 2.0 AA), `ada-title-ii` (2.1 AA), and `wcag-22-aa` (2.2 AA).

Failure [F23](https://www.w3.org/WAI/WCAG22/Techniques/failures/F23), [F93](https://www.w3.org/WAI/WCAG22/Techniques/failures/F93); Sufficient [G60](https://www.w3.org/WAI/WCAG22/Techniques/general/G60). Understanding: [Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control).
