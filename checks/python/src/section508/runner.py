from section508.catalog import rule_ids, rules_by_id
from section508.checks import CHECKS
from section508.document import to_root
from section508.result import Failure, Result


def check(source, rules=None, profile=None) -> Result:
    root = to_root(source)
    ids = rule_ids(rules=rules, profile=profile)
    meta = rules_by_id()
    failures = []
    for rule_id in ids:
        checker = CHECKS.get(rule_id)
        if not callable(checker):
            continue
        details = checker(root) or []
        if details:
            rule = meta.get(rule_id) or {}
            failures.append(
                Failure(
                    id=rule_id,
                    title=rule.get("title") or rule_id,
                    details=list(details),
                )
            )
    return Result(ok=not failures, failures=failures)


def assert_ok(source, rules=None, profile=None) -> None:
    result = check(source, rules=rules, profile=profile)
    if not result.ok:
        raise AssertionError(result.report())
