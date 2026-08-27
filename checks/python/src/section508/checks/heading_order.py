from section508.dom import inclusive_select, tag_name

HEADING_SELECTOR = "h1, h2, h3, h4, h5, h6"


def check(root):
    headings = inclusive_select(root, HEADING_SELECTOR)
    details = []
    if not headings:
        return details

    previous = heading_level(headings[0])
    for heading in headings[1:]:
        level = heading_level(heading)
        if level > previous + 1:
            details.append(f"This section goes from h{previous} to h{level}.")
        previous = level
    return details


def heading_level(node):
    name = tag_name(node)
    try:
        return int(name[1:])
    except (TypeError, ValueError):
        return 0
