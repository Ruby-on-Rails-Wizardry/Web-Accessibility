import re

from section508.dom import attr, select

NAVIGATE = re.compile(r"location\s*=|window\.open|document\.location|href\s*=", re.I)


def check(root):
    if not root:
        return []

    for control in select(root, "select, input, textarea, button, a, [tabindex], [onfocus]"):
        handler = attr(control, "onfocus") or ""
        if NAVIGATE.search(handler):
            return ["Focus on this control would change context."]
    return []
