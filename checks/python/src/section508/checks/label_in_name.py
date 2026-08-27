from section508.dom import (
    SPACE,
    attr,
    clone,
    closest,
    find_id,
    has_attr,
    label_for,
    remove_matches,
    select,
    tag_name,
)


def check(root):
    if not root:
        return []

    for control in select(root, "button, a[href], input, select, textarea"):
        visible = visible_text(control, root)
        if not visible:
            continue
        name = accessible_name(control, root)
        if visible.lower() not in name.lower():
            return [f"The visible text “{visible}” is not in the accessible name “{name}”."]
    return []


def visible_text(control, root) -> str:
    if tag_name(control) in {"button", "a"}:
        return SPACE.sub(" ", control.get_text()).strip()
    control_id = attr(control, "id")
    if control_id:
        label = label_for(root, control_id)
        if label:
            return SPACE.sub(" ", label.get_text()).strip()
    wrap = closest(control, "label")
    if not wrap:
        return ""
    copied = clone(wrap)
    remove_matches(copied, "input, select, textarea, button")
    return SPACE.sub(" ", copied.get_text()).strip()


def accessible_name(control, root) -> str:
    if has_attr(control, "aria-label"):
        return SPACE.sub(" ", attr(control, "aria-label") or "").strip()
    labelledby = attr(control, "aria-labelledby")
    if labelledby:
        parts = []
        for ref in labelledby.split():
            node = find_id(root, ref)
            parts.append(node.get_text() if node is not None else "")
        return SPACE.sub(" ", " ".join(parts)).strip()
    if tag_name(control) in {"button", "a"}:
        return SPACE.sub(" ", control.get_text()).strip()
    return visible_text(control, root)
