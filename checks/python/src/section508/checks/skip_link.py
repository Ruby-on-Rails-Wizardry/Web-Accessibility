import re

from section508.dom import SPACE, attr, attr_or, find_id, has_attr, select

SKIP = re.compile(r"skip", re.I)
HIDDEN_STYLE = re.compile(r"display:none", re.I)
VIS_HIDDEN = re.compile(r"visibility:hidden", re.I)


def check(root):
    if not root:
        return []

    focusable = focusable_controls(root)
    if not focusable:
        return ["There is no skip link."]

    first = focusable[0]
    href = attr(first, "href") or ""
    name = SPACE.sub(" ", f"{first.get_text() or ''} {attr_or(first, 'aria-label')}").strip()

    if not href.startswith("#") or len(href) < 2 or not SKIP.search(name):
        return ["The first control is not a skip link."]

    target_id = href[1:]
    target = find_id(root, target_id)
    if target is None:
        return ["The skip link does not point at an element in this section."]
    return []


def focusable_controls(root):
    found = []
    for element in select(
        root,
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
    ):
        if has_attr(element, "disabled"):
            continue
        if has_attr(element, "hidden"):
            continue
        if attr(element, "aria-hidden") == "true":
            continue
        style = (attr(element, "style") or "").replace(" ", "")
        if HIDDEN_STYLE.search(style) or VIS_HIDDEN.search(style):
            continue
        found.append(element)
    return found
