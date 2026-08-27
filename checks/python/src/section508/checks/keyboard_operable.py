from section508.dom import (
    SPACE,
    attr,
    class_string,
    has_attr,
    parse_number,
    select,
    tag_name,
    text_of,
)

NATIVE = {"button", "a", "input", "select", "textarea", "summary"}


def check(root):
    if not root:
        return []

    hover_only = select(root, "[onmouseover], [onmouseenter], [onmousemove]")
    for element in hover_only:
        if not is_keyboard_reachable(element):
            return [f"“{hint(element)}” works on hover only."]

    clicks = select(root, "[onclick]")
    for element in clicks:
        if tag_name(element) in NATIVE and (tag_name(element) != "a" or has_attr(element, "href")):
            continue
        if not is_focusable(element):
            return [f"“{hint(element)}” is not reachable from the keyboard."]

    natives = select(root, "button, a[href], input, select, textarea, summary")
    if not hover_only and not clicks and not natives:
        return ["This section has no keyboard-operable control."]
    return []


def is_keyboard_reachable(element) -> bool:
    if is_focusable(element):
        return True
    return bool(
        select(
            element,
            "button, a[href], input, select, textarea, summary, [tabindex]:not([tabindex='-1'])",
        )
    )


def is_focusable(element) -> bool:
    if tag_name(element) in NATIVE and (tag_name(element) != "a" or has_attr(element, "href")):
        return True
    tabindex = attr(element, "tabindex")
    number = parse_number(tabindex) if tabindex is not None else None
    return tabindex is not None and number is not None and number >= 0


def hint(element) -> str:
    return SPACE.sub(" ", text_of(element) or class_string(element) or tag_name(element)).strip()
