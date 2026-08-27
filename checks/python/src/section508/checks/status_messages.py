import re

from section508.dom import attr, select

MESSAGE = re.compile(r"saved|error|items in cart|loading|success|thank you|updated|complete", re.I)


def check(root):
    if not root:
        return []

    messages = [element for element in select(root, "div, p, output, span") if MESSAGE.search(element.get_text() or "")]
    if not messages:
        return ["This section has no status message."]

    for element in messages:
        role = (attr(element, "role") or "").lower()
        live = (attr(element, "aria-live") or "").lower()
        if role in {"status", "alert"} or live in {"polite", "assertive"}:
            continue
        return ["The status message is not a live region."]
    return []
