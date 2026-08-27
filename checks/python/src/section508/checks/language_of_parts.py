from section508.dom import attr, closest, inclusive_select


def check(root):
    if not root:
        return []

    marked = inclusive_select(root, "[lang]")
    switched = False
    for element in marked:
        parent = element.parent
        ancestor = closest(parent, "[lang]") if parent is not None else None
        if ancestor is None:
            continue
        around = attr(ancestor, "lang") or ""
        here = attr(element, "lang") or ""
        if here and around and here != around:
            switched = True
            break

    if switched:
        return []
    return ["A phrase in another language is not marked with lang."]
