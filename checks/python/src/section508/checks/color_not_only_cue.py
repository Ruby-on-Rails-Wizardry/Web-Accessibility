import re

from section508.dom import attr, closest, find_id, label_for, select, text_of

CUE = re.compile(r"\*|required|error|invalid|missing|must ", re.I)


def check(root):
    if not root:
        return []

    marked = select(root, '.invalid, .error, .required, [aria-invalid="true"]')
    if not marked:
        return ["Color is the only cue."]

    for element in marked:
        if not has_non_color_cue(element, root):
            return ["Color is the only cue for this meaning."]
    return []


def has_non_color_cue(element, root) -> bool:
    blob = f"{text_of(element) or ''} {label_text(element, root)} {described_text(element, root)}"
    return bool(CUE.search(blob))


def described_text(element, root) -> str:
    ids = [ref for ref in (attr(element, "aria-describedby") or "").split() if ref]
    return " ".join(find_id(root, ref).get_text() if find_id(root, ref) is not None else "" for ref in ids)


def label_text(element, root) -> str:
    wrap = closest(element, "label")
    if wrap:
        return wrap.get_text()
    element_id = attr(element, "id")
    if not element_id:
        return ""
    label = label_for(root, element_id)
    return label.get_text() if label is not None else ""
