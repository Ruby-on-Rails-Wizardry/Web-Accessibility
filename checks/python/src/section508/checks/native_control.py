from section508.dom import attr, closest, has_attr, norm_text, select, tag_name


def check(root):
    if not root:
        return []

    fakes = fake_controls(root)
    if not fakes:
        return []

    sample = norm_text(fakes[0]) or tag_name(fakes[0])
    return [f"“{sample}” is not a native button, link, or input."]


def fake_controls(root):
    fakes = []
    for element in select(root, "div, span, a"):
        if select(element, "button, a[href], input, select, textarea"):
            continue
        if closest(element, "button, a[href], label"):
            continue
        if tag_name(element) == "a":
            href = attr(element, "href")
            if href is None or not href.strip():
                fakes.append(element)
            continue
        if has_attr(element, "onclick"):
            fakes.append(element)
            continue
        if attr(element, "role") and attr(element, "role").lower() == "button":
            fakes.append(element)
    return fakes
