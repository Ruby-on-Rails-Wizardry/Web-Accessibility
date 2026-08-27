from section508.dom import SPACE, attr, has_attr, select


def check(root):
    if not root:
        return []

    images = select(root, "img")
    if not images:
        return ["This section has no decorative image."]

    for image in images:
        if not has_attr(image, "alt"):
            return ["This decorative image is missing the alt attribute."]
        alt = attr(image, "alt")
        if alt != "":
            shown = SPACE.sub(" ", alt or "").strip() or "text"
            return [f"“{shown}” will be announced. Decorative images need empty alt."]
    return []
