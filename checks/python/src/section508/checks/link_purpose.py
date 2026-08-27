import re

from section508.dom import SPACE, select

WEAK = re.compile(
    r"^(click here|here|read more|more|learn more|click|link|this link)$",
    re.I,
)


def check(root):
    if not root:
        return []

    links = select(root, "a[href]")
    if not links:
        return ["This section has no link."]

    for link in links:
        name = SPACE.sub(" ", link.get_text()).strip()
        if not name:
            return ["This link has no text name."]
        if WEAK.match(name):
            return [f"“{name}” does not name the destination."]
    return []
