from bs4 import BeautifulSoup, Tag

ROOT_ID = "root"


def parse(html: str) -> Tag:
    """Parse a fragment the way the Node wrapper does (container div)."""
    soup = BeautifulSoup(
        f'<!DOCTYPE html><html><body><div id="{ROOT_ID}">{html}</div></body></html>',
        "html.parser",
    )
    root = soup.find(id=ROOT_ID)
    return root if root is not None else soup


def _looks_like_document(html: str) -> bool:
    head = html.lstrip()[:20].lower()
    return head.startswith("<!doctype") or head.startswith("<html")


def parse_html(html: str) -> Tag:
    if _looks_like_document(html):
        return BeautifulSoup(html, "html.parser")
    return parse(html)


def to_root(source) -> Tag:
    if isinstance(source, str):
        return parse_html(source)
    if isinstance(source, (BeautifulSoup, Tag)):
        return source
    content = getattr(source, "content", None)
    if callable(content):
        html = content()
        if not isinstance(html, str):
            html = str(html)
        return parse_html(html)
    page_source = getattr(source, "page_source", None)
    if isinstance(page_source, str):
        return parse_html(page_source)
    text = getattr(source, "text", None)
    if isinstance(text, str):
        return parse_html(text)
    raise TypeError(f"Cannot score accessibility of {type(source)!r}")
