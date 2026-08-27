from section508.dom import select


def check(root):
    if not root:
        return []
    if not select(root, "[data-trap]"):
        return []
    return ["This component traps Tab with no keyboard way out."]
