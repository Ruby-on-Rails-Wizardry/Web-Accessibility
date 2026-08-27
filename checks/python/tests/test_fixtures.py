from pathlib import Path

import pytest
import yaml

from section508 import check

DATA_DIR = Path(__file__).resolve().parents[3] / "data"


def rules_for(slug: str) -> list[str]:
    if slug == "headings":
        return ["heading-elements", "heading-order"]
    return [slug.replace("_", "-")]


def snippets(items) -> list[str]:
    return [str(item).strip() for item in (items or []) if item and str(item).strip()]


def _cases():
    rows = []
    for path in sorted(DATA_DIR.glob("*_pick.yml")):
        slug = path.name.removesuffix("_pick.yml")
        rules = rules_for(slug)
        pool = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
        for index, html in enumerate(snippets(pool.get("bad"))):
            rows.append((f"{slug} bad {index}", rules, False, html))
        for index, html in enumerate(snippets(pool.get("good"))):
            rows.append((f"{slug} good {index}", rules, True, html))
    return rows


CASES = _cases()


@pytest.mark.parametrize(
    "label,rules,should_pass,html",
    CASES,
    ids=[row[0] for row in CASES],
)
def test_pick_snippet(label, rules, should_pass, html):
    result = check(html, rules=rules)
    if should_pass:
        assert result.ok, result.report()
    else:
        assert not result.ok, f"expected a failure for {label}"
