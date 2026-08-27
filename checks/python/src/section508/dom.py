"""Small BeautifulSoup helpers that mirror the JS fragment-cop DOM calls."""

from __future__ import annotations

import copy
import math
import re

import soupsieve
from bs4 import NavigableString, Tag

SPACE = re.compile(r"\s+")


def is_tag(node) -> bool:
    return isinstance(node, Tag)


def tag_name(node) -> str:
    if not is_tag(node) or not node.name:
        return ""
    return str(node.name).lower()


def select(root, selector: str) -> list[Tag]:
    if root is None or not hasattr(root, "select"):
        return []
    try:
        return list(root.select(selector))
    except (ValueError, NotImplementedError, soupsieve.SelectorSyntaxError):
        return []


def matches(node, selector: str) -> bool:
    if not is_tag(node) or tag_name(node) in {"", "[document]"}:
        return False
    try:
        return bool(soupsieve.match(selector, node))
    except (ValueError, NotImplementedError, soupsieve.SelectorSyntaxError):
        return False


def inclusive_select(root, selector: str) -> list[Tag]:
    found = []
    if matches(root, selector):
        found.append(root)
    found.extend(select(root, selector))
    return found


def closest(node, selector: str) -> Tag | None:
    current = node if is_tag(node) else None
    while current is not None and is_tag(current) and tag_name(current) != "[document]":
        if matches(current, selector):
            return current
        current = current.parent
    return None


def has_attr(node, name: str) -> bool:
    return is_tag(node) and node.has_attr(name)


def attr(node, name: str):
    """Like getAttribute: None if missing, else a string (possibly empty)."""
    if not has_attr(node, name):
        return None
    value = node.get(name)
    if value is None or value is True:
        return ""
    if isinstance(value, list):
        return " ".join(str(item) for item in value)
    return str(value)


def attr_or(node, name: str, default: str = "") -> str:
    value = attr(node, name)
    return default if value is None else value


def text_of(node) -> str:
    if node is None:
        return ""
    if isinstance(node, NavigableString):
        return str(node)
    if is_tag(node):
        return node.get_text()
    return str(node)


def norm_text(node) -> str:
    return SPACE.sub(" ", text_of(node)).strip()


def class_string(node) -> str:
    return attr_or(node, "class")


def has_class(node, name: str) -> bool:
    return name in class_string(node).split()


def children_tags(node) -> list[Tag]:
    if not is_tag(node):
        return []
    return [child for child in node.children if is_tag(child)]


def significant_children(node) -> list:
    if not is_tag(node):
        return []
    out = []
    for child in node.children:
        if isinstance(child, NavigableString):
            if str(child).strip():
                out.append(child)
        elif is_tag(child):
            out.append(child)
    return out


def clone(node: Tag) -> Tag:
    return copy.copy(node)


def remove_matches(node: Tag, selector: str) -> None:
    for child in list(select(node, selector)):
        child.decompose()


def find_id(root, id_value: str) -> Tag | None:
    if not id_value:
        return None
    if is_tag(root) and attr(root, "id") == id_value:
        return root
    if root is None or not hasattr(root, "find"):
        return None
    return root.find(id=id_value)


def label_for(root, id_value: str) -> Tag | None:
    if not id_value or root is None or not hasattr(root, "find"):
        return None
    return root.find("label", attrs={"for": id_value})


def parse_number(value) -> float | None:
    if value is None:
        return None
    try:
        number = float(value)
    except (TypeError, ValueError):
        return None
    if not math.isfinite(number):
        return None
    return number
