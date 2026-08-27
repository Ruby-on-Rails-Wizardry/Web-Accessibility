from section508.dom import attr, parse_number, select


def check(root):
    if not root:
        return []

    positive = []
    for element in select(root, "[tabindex]"):
        value = parse_number(attr(element, "tabindex"))
        if value is not None and value > 0:
            positive.append(element)
    if positive:
        return ["Positive tabindex values reorder Tab away from the DOM."]
    return []
