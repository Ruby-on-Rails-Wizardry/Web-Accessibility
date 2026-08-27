import re

from section508.dom import SPACE, attr, select

GROUPS = [
    [re.compile(r"print", re.I), re.compile(r"download pdf", re.I), re.compile(r"save pdf", re.I), re.compile(r"export pdf", re.I)],
    [re.compile(r"search", re.I), re.compile(r"\bfind\b", re.I)],
    [re.compile(r"log ?in", re.I), re.compile(r"sign in", re.I)],
    [re.compile(r"submit", re.I), re.compile(r"send form", re.I)],
]


def check(root):
    if not root:
        return []

    names = []
    for element in select(root, "button, a[href]"):
        name = SPACE.sub(" ", attr(element, "aria-label") or element.get_text() or "").strip()
        if name:
            names.append(name)

    if len(names) < 2:
        return ["This section has only one named control."]

    for group in GROUPS:
        hits = [name for name in names if any(pattern.search(name) for pattern in group)]
        unique = list(dict.fromkeys(name.lower() for name in hits))
        if len(unique) > 1:
            return [f"“{hits[0]}” and “{hits[1]}” name the same action differently."]
    return []
