from section508.dom import children_tags, closest, norm_text, select, tag_name


def check(root):
    if not root:
        return []
    if real_list(root):
        return []

    fakes = fake_list_items(root)
    if len(fakes) < 2:
        return []

    sample = norm_text(fakes[0])
    if sample:
        return [f"“{sample}” and the items next to it are not marked as a list."]
    return ["Related items are not marked as a list."]


def real_list(root):
    for lst in select(root, "ul, ol"):
        if any(tag_name(child) == "li" for child in children_tags(lst)):
            return True
    return any(select(lst, "dt, dd") for lst in select(root, "dl"))


def fake_list_items(root):
    items = []
    for element in select(root, "div, p"):
        if closest(element, "ul, ol, dl, li, dt, dd"):
            continue
        if select(element, "ul, ol, dl, p, div, table, h1, h2, h3, h4, h5, h6"):
            continue
        if not norm_text(element):
            continue
        items.append(element)

    by_parent = {}
    for element in items:
        parent = element.parent
        if parent is None:
            continue
        by_parent.setdefault(id(parent), []).append(element)

    for group in by_parent.values():
        if len(group) >= 2:
            return group
    return []
