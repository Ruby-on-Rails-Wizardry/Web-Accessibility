from section508.dom import children_tags, closest, select, tag_name


def check(root):
    if not root:
        return []

    tables = select(root, "table")
    if tables:
        bare = next((table for table in tables if not select(table, "th")), None)
        if not bare:
            return []
        return ["This table has no header cells (th)."]

    if looks_like_grid(root):
        return ["This grid of figures is not a data table with headers."]
    return []


def looks_like_grid(root):
    rows = []
    for element in select(root, "div"):
        if closest(element, "table, ul, ol, dl"):
            continue
        cells = [
            child
            for child in children_tags(element)
            if tag_name(child) in {"div", "span", "p"} and not select(child, "div, table")
        ]
        if len(cells) >= 2:
            rows.append(element)
    return len(rows) >= 2
