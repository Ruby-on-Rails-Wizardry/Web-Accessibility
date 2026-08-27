import re

from section508.dom import SPACE, attr, find_id, has_class, select

ERROR_WORDS = re.compile(r"error|missing|invalid|required|must ", re.I)


def check(root):
    if not root:
        return []

    fields = select(root, "input, select, textarea")
    if not fields:
        return ["This section has no field in error."]

    for field in fields:
        if not is_in_error(field):
            continue
        if not error_text(field, root):
            return ["The error is not identified in text."]

    if not any(is_in_error(field) for field in fields):
        return ["The error is not identified in text."]
    return []


def is_in_error(field) -> bool:
    return attr(field, "aria-invalid") == "true" or has_class(field, "invalid")


def error_text(field, root) -> bool:
    ids = [ref for ref in (attr(field, "aria-describedby") or "").split() if ref]
    from_ids = " ".join(find_id(root, ref).get_text() if find_id(root, ref) is not None else "" for ref in ids)
    if SPACE.sub(" ", from_ids).strip():
        return True
    return any(ERROR_WORDS.search(node.get_text() or "") for node in select(root, "p, div, span, strong"))
