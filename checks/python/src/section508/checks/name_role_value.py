import re

from section508.dom import SPACE, attr, class_string, closest, find_id, has_attr, select, tag_name

STATE_FOR = {
    "tab": "aria-selected",
    "checkbox": "aria-checked",
    "radio": "aria-checked",
    "switch": "aria-checked",
    "menuitemcheckbox": "aria-checked",
    "slider": "aria-valuenow",
}

CLASS_WIDGET = re.compile(r"\b(tab|tabs|switch|accordion|menu-item|menuitem)\b", re.I)


def check(root):
    if not root:
        return []

    widgets = find_widgets(root)
    if not widgets:
        return []

    for widget in widgets:
        role = (attr(widget, "role") or "").lower()
        if not role:
            return [f"“{hint(widget)}” has no role."]
        if not has_name(widget, root):
            return [f"“{hint(widget)}” has no name."]
        state = STATE_FOR.get(role)
        if state and not has_attr(widget, state):
            return [f"“{hint(widget)}” has no {state}."]
    return []


def find_widgets(root):
    found = []
    for element in select(root, "div, span, button, a, [role]"):
        if closest(element, "button, a[href], label") and tag_name(element) not in {"button", "a"}:
            continue
        role = (attr(element, "role") or "").lower()
        if role in STATE_FOR or role == "menuitem":
            found.append(element)
            continue
        if CLASS_WIDGET.search(class_string(element)) and not is_native(element):
            found.append(element)
            continue
        if not is_native(element) and (has_attr(element, "aria-selected") or has_attr(element, "aria-checked")):
            found.append(element)
    return found


def is_native(element) -> bool:
    return tag_name(element) in {"button", "a", "input", "select", "textarea", "summary"}


def has_name(element, root) -> bool:
    aria = SPACE.sub(" ", attr(element, "aria-label") or "").strip()
    if aria:
        return True
    ids = [ref for ref in (attr(element, "aria-labelledby") or "").split() if ref]
    if any((find_id(root, ref).get_text() if find_id(root, ref) is not None else "").strip() for ref in ids):
        return True
    return SPACE.sub(" ", element.get_text()).strip() != ""


def hint(element) -> str:
    return (
        SPACE.sub(" ", element.get_text()).strip()
        or attr(element, "aria-label")
        or class_string(element)
        or tag_name(element)
    )
