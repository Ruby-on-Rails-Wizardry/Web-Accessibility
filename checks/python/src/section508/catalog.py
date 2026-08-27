from functools import cache
from pathlib import Path

import yaml

CATALOG_PATH = Path(__file__).resolve().parents[3] / "catalog.yml"


@cache
def load_catalog() -> dict:
    with CATALOG_PATH.open(encoding="utf-8") as handle:
        return yaml.safe_load(handle) or {}


def rules() -> list[dict]:
    return list(load_catalog().get("rules") or [])


def rules_by_id() -> dict[str, dict]:
    return {rule["id"]: rule for rule in rules() if "id" in rule}


def rule_ids(*, rules=None, profile=None) -> list[str]:
    catalog = rules_by_id()
    if rules:
        ids = list(rules)
    else:
        ids = list(catalog.keys())
    if profile:
        ids = [
            rule_id
            for rule_id in ids
            if profile in ((catalog.get(rule_id) or {}).get("profiles") or [])
        ]
    return ids
