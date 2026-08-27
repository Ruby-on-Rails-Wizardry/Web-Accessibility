from section508.checks.visible_label import (
    SKIP_INPUT_TYPES,
    field_hint,
    has_associated_visible_label,
)
from section508.dom import attr, select, tag_name


def check(root):
    if not root:
        return []

    offenders = placeholder_only_controls(root)
    if not offenders:
        return []

    sample = field_hint(offenders[0])
    return [f"“{sample}” uses placeholder as the only label."]


def placeholder_only_controls(root):
    found = []
    for element in select(root, "input, select, textarea"):
        if tag_name(element) == "input":
            type_name = (attr(element, "type") or "text").lower()
            if type_name in SKIP_INPUT_TYPES:
                continue
        placeholder = (attr(element, "placeholder") or "").strip()
        if not placeholder:
            continue
        if not has_associated_visible_label(element, root):
            found.append(element)
    return found
