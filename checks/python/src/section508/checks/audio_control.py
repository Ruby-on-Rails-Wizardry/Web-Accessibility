import re

from section508.dom import attr_or, has_attr, select

PAUSE = re.compile(r"pause|stop|mute", re.I)


def check(root):
    if not root:
        return []

    media = select(root, "audio, video")
    if not media:
        return ["This section has no audio."]

    for element in media:
        if not has_attr(element, "autoplay"):
            continue
        if has_attr(element, "controls"):
            continue
        if select(root, "button, [aria-label]"):
            pause = any(
                PAUSE.search(f"{node.get_text() or ''} {attr_or(node, 'aria-label')}")
                for node in select(root, "button, [aria-label]")
            )
            if pause:
                continue
        return ["Audio starts on its own and has no pause control."]
    return []
