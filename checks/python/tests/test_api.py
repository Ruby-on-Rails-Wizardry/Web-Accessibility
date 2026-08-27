import pytest
from bs4 import BeautifulSoup

from section508 import assert_ok, check
from section508.document import parse


def test_accepts_html_string():
    result = check("<h1>Menu</h1><h4>Soup</h4>", rules=["heading-order"])
    assert result.ok is False
    assert result.failures[0].id == "heading-order"
    assert result.failures[0].title
    assert result.failures[0].details


def test_accepts_parsed_node():
    root = parse("<h1>Menu</h1><h2>Soup</h2>")
    result = check(root, rules=["heading-order"])
    assert result.ok is True
    assert result.failures == []


def test_filters_21_only_rules_out_of_section_508_web():
    html = '<button aria-label="Save file">Delete</button>'
    all_rules = check(html, rules=["label-in-name"])
    filtered = check(html, rules=["label-in-name"], profile="section-508-web")
    assert all_rules.ok is False
    assert filtered.ok is True


def test_assert_ok_raises_on_failure():
    with pytest.raises(AssertionError, match="heading-order"):
        assert_ok("<h1>Menu</h1><h4>Soup</h4>", rules=["heading-order"])
    assert_ok("<h1>Menu</h1><h2>Soup</h2>", rules=["heading-order"])


def test_beautifulsoup_tree():
    soup = BeautifulSoup("<h1>Menu</h1><h2>Soup</h2>", "html.parser")
    assert check(soup, rules=["heading-order"]).ok is True


class FakePage:
    def content(self):
        return "<h1>Menu</h1><h2>Soup</h2>"


class FakeDriver:
    page_source = "<h1>Menu</h1><h4>Soup</h4>"


class FakeResponse:
    text = "<h1>Menu</h1><h2>Soup</h2>"


def test_playwright_content():
    assert check(FakePage(), rules=["heading-order"]).ok is True


def test_selenium_page_source():
    assert check(FakeDriver(), rules=["heading-order"]).ok is False


def test_requests_text():
    assert check(FakeResponse(), rules=["heading-order"]).ok is True
