import re

from section508.dom import SPACE, attr, has_attr, select

WEAK = re.compile(r"^(image|photo|picture|graphic|chart|icon|logo)$", re.I)
FILENAME = re.compile(r"\.(png|jpe?g|gif|svg|webp)$", re.I)


def check(root):
    if not root:
        return []

    images = select(root, "img")
    if not images:
        return ["This section has no image with a text alternative."]

    for image in images:
        if not has_attr(image, "alt"):
            return ["This image has no alt attribute."]
        alt = SPACE.sub(" ", attr(image, "alt") or "").strip()
        if not alt:
            return ["This informative image has empty alt text."]
        if WEAK.match(alt) or FILENAME.search(alt):
            return [f"“{alt}” names the file or format, not the information."]
    return []
