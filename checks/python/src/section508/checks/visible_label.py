from section508.dom import (
    SPACE,
    attr,
    attr_or,
    clone,
    closest,
    label_for,
    remove_matches,
    select,
    tag_name,
)

SKIP_INPUT_TYPES = {"hidden", "submit", "button", "reset", "image"}


def check(root):
    if not root:
        return []

    controls = unlabeled_controls(root)
    if not controls:
        return []

    sample = field_hint(controls[0])
    return [f"“{sample}” has no associated visible label."]


def unlabeled_controls(root):
    found = []
    for element in select(root, "input, select, textarea"):
        if tag_name(element) == "input":
            type_name = (attr(element, "type") or "text").lower()
            if type_name in SKIP_INPUT_TYPES:
                continue
        if not has_associated_visible_label(element, root):
            found.append(element)
    return found


def has_associated_visible_label(control, root) -> bool:
    wrap = closest(control, "label")
    if wrap and _label_text(wrap, control):
        return True

    control_id = attr(control, "id")
    if not control_id:
        return False

    label = label_for(root, control_id)
    return bool(label and SPACE.sub(" ", label.get_text()).strip())


def _label_text(label, control):
    copied = clone(label)
    remove_matches(copied, "input, select, textarea, button")
    return SPACE.sub(" ", copied.get_text()).strip()


def field_hint(control) -> str:
    type_name = SPACE.sub(" ", attr(control, "type") or tag_name(control))
    name = (attr_or(control, "name") or attr_or(control, "id") or type_name).strip()
    return name or "this field"
