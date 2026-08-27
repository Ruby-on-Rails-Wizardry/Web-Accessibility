import re

from section508.dom import attr, select

NAVIGATE = re.compile(
    r"location\s*=|window\.open|document\.location|href\s*=|this\.submit|form\.submit",
    re.I,
)


def check(root):
    if not root:
        return []

    for control in select(root, "select, input, textarea, [onchange], [oninput]"):
        handler = f"{attr(control, 'onchange') or ''} {attr(control, 'oninput') or ''}"
        if NAVIGATE.search(handler):
            return ["Changing this value would change context."]
    return []
