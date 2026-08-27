from section508.dom import SPACE, attr, select, tag_name, text_of


def check(root):
    if not root:
        return []

    for element in select(root, "[ontouchstart], [onmousedown]"):
        handler = f"{attr(element, 'ontouchstart') or ''} {attr(element, 'onmousedown') or ''}"
        if SPACE.sub("", handler):
            return [f"“{hint(element)}” completes on the down-event."]
    return []


def hint(element) -> str:
    return SPACE.sub(" ", text_of(element) or tag_name(element)).strip()
