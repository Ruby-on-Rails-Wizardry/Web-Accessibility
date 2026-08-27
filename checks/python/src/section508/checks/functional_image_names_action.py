import re

from section508.dom import SPACE, attr, clone, has_attr, remove_matches, select

WEAK = re.compile(r"^(logo|icon|image|photo|picture|graphic)$", re.I)


def check(root):
    if not root:
        return []

    controls = [element for element in select(root, "a[href], button") if select(element, "img")]
    if not controls:
        return ["This section has no image that is a link or button."]

    for control in controls:
        image = select(control, "img")[0]
        extra = control_text_without_image(control)
        if extra:
            continue
        if not has_attr(image, "alt"):
            return ["This image control has no alt attribute."]
        alt = SPACE.sub(" ", attr(image, "alt") or "").strip()
        if not alt:
            return ["This image control has empty alt, so the link or button has no name."]
        if WEAK.match(alt):
            return [f"“{alt}” does not name the destination or the action."]
    return []


def control_text_without_image(control):
    copied = clone(control)
    remove_matches(copied, "img")
    return SPACE.sub(" ", copied.get_text()).strip()
