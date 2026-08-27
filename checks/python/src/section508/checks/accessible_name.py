from section508.dom import (
    SPACE,
    attr,
    attr_or,
    clone,
    closest,
    find_id,
    has_attr,
    label_for,
    parse_number,
    remove_matches,
    select,
    tag_name,
)

WIDGET_ROLES = {
    "button",
    "link",
    "checkbox",
    "radio",
    "tab",
    "menuitem",
    "switch",
    "combobox",
    "slider",
    "searchbox",
    "textbox",
}


def check(root):
    if not root:
        return []

    controls = find_controls(root)
    if not controls:
        return ["This section has no control to name."]

    for control in controls:
        if not has_name(control, root):
            return [f"“{hint(control)}” has no programmatic name."]
    return []


def find_controls(root):
    natives = []
    for element in select(root, "button, a[href], input, select, textarea, summary"):
        if tag_name(element) != "input":
            natives.append(element)
            continue
        if (attr(element, "type") or "text").lower() != "hidden":
            natives.append(element)

    native_ids = {id(element) for element in natives}
    fakes = []
    for element in select(root, "div, span, a, img"):
        if id(element) in native_ids:
            continue
        if closest(element, "button, a[href], label, summary"):
            continue
        if select(element, "button, a[href], input, select, textarea"):
            continue
        if has_attr(element, "onclick"):
            fakes.append(element)
            continue
        role = (attr(element, "role") or "").lower()
        if role in WIDGET_ROLES:
            fakes.append(element)
            continue
        tabindex = attr(element, "tabindex")
        number = parse_number(tabindex) if tabindex is not None else None
        if tabindex is not None and number is not None and number >= 0:
            fakes.append(element)
    return natives + fakes


def has_name(control, root) -> bool:
    aria = SPACE.sub(" ", attr(control, "aria-label") or "").strip()
    if aria:
        return True

    ids = [ref for ref in (attr(control, "aria-labelledby") or "").split() if ref]
    if ids:
        text = " ".join(find_id(root, ref).get_text() if find_id(root, ref) is not None else "" for ref in ids)
        if SPACE.sub(" ", text).strip():
            return True

    if tag_name(control) == "img":
        return (attr(control, "alt") or "").strip() != ""

    if tag_name(control) == "input":
        type_name = (attr(control, "type") or "text").lower()
        if type_name in {"submit", "button", "reset"}:
            if (attr(control, "value") or "").strip():
                return True
            return type_name in {"submit", "reset"}
        if type_name == "image":
            return (attr(control, "alt") or "").strip() != ""
        return has_label(control, root) or (attr(control, "title") or "").strip() != ""

    if tag_name(control) in {"select", "textarea"}:
        return has_label(control, root) or (attr(control, "title") or "").strip() != ""

    role = (attr(control, "role") or "").lower()
    native_named = tag_name(control) in {"button", "a", "summary"}
    if not native_named and role not in WIDGET_ROLES:
        return False

    if own_text(control):
        return True
    images = select(control, "img")
    return bool(images and (attr(images[0], "alt") or "").strip())


def has_label(control, root) -> bool:
    wrap = closest(control, "label")
    if wrap and label_text(wrap, control):
        return True
    control_id = attr(control, "id")
    if not control_id:
        return False
    label = label_for(root, control_id)
    return bool(label and SPACE.sub(" ", label.get_text()).strip())


def label_text(wrap, control):
    copied = clone(wrap)
    remove_matches(copied, "input, select, textarea, button")
    return SPACE.sub(" ", copied.get_text()).strip()


def own_text(element) -> str:
    copied = clone(element)
    remove_matches(copied, "script, style")
    return SPACE.sub(" ", copied.get_text()).strip()


def hint(control) -> str:
    return SPACE.sub(
        " ",
        (
            own_text(control)
            or attr_or(control, "aria-label")
            or attr_or(control, "id")
            or attr_or(control, "name")
            or tag_name(control)
        ),
    ).strip()
