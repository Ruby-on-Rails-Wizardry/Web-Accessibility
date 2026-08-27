from section508.dom import is_tag, norm_text, select, significant_children, tag_name


def check(root):
    if not root:
        return []

    fakes = fake_headings(root)
    if not fakes:
        return []

    sample = norm_text(fakes[0])
    if sample:
        return [f"“{sample}” is a bold paragraph, not a heading element."]
    return ["A section name is a bold paragraph, not a heading element."]


def fake_headings(root):
    fakes = []
    for element in select(root, "p, div"):
        if select(element, "p, div, ul, ol, table, h1, h2, h3, h4, h5, h6"):
            continue
        significant = significant_children(element)
        if len(significant) != 1:
            continue
        child = significant[0]
        if is_tag(child) and tag_name(child) in {"strong", "b"}:
            fakes.append(element)
    return fakes
