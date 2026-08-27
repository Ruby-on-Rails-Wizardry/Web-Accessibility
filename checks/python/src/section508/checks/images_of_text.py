import re

from section508.dom import attr, select

TEXT_SRC = re.compile(
    r"headline|banner-text|sale-title|heading-img|text-banner|hours-sign|promo-text|word-art|slogan|title-banner",
    re.I,
)
LOGO = re.compile(r"logo|wordmark|seal|brand-mark", re.I)


def check(root):
    if not root:
        return []

    for image in select(root, "img"):
        src = attr(image, "src") or ""
        alt = attr(image, "alt") or ""
        if LOGO.search(src) or LOGO.search(alt):
            continue
        if TEXT_SRC.search(src):
            return ["These words are an image of text, not real text."]
    return []
