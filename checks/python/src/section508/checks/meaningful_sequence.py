import re

from section508.dom import attr_or, class_string, inclusive_select

REORDER_CLASS = re.compile(r"\b(pull-up|pull-left|visually-first|css-order)\b", re.I)
REORDER_STYLE = re.compile(r"(?:^|;)\s*order\s*:\s*(?!0\s*(?:;|$))", re.I)
REVERSE = re.compile(r"flex-direction\s*:\s*(row|column)-reverse", re.I)


def check(root):
    if not root:
        return []

    nodes = inclusive_select(root, "*")
    for element in nodes:
        class_name = class_string(element)
        style = attr_or(element, "style")
        if REORDER_CLASS.search(class_name) or REORDER_STYLE.search(style) or REVERSE.search(style):
            return ["CSS reorders this content away from the DOM sequence."]
    return []
