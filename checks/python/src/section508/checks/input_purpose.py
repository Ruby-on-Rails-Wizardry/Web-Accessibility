import re

from section508.dom import attr, attr_or, select

PERSONAL_TYPES = {"email": "email", "tel": "tel"}
PERSONAL_NAME = re.compile(
    r"^(email|name|given-name|family-name|tel|phone|address|street-address)$",
    re.I,
)
TOKENS = re.compile(
    r"^(name|honorific-prefix|given-name|additional-name|family-name|honorific-suffix|"
    r"nickname|username|new-password|current-password|organization-title|organization|"
    r"street-address|address-line1|address-line2|address-line3|address-level4|"
    r"address-level3|address-level2|address-level1|country|country-name|postal-code|"
    r"cc-name|cc-given-name|cc-additional-name|cc-family-name|cc-number|cc-exp|"
    r"cc-exp-month|cc-exp-year|cc-csc|cc-type|transaction-currency|transaction-amount|"
    r"language|bday|bday-day|bday-month|bday-year|sex|url|photo|tel|tel-country-code|"
    r"tel-national|tel-area-code|tel-local|tel-local-prefix|tel-local-suffix|"
    r"tel-extension|impp|email)$",
    re.I,
)
PERSONAL_KEY = re.compile(r"email|name|tel|phone|address", re.I)


def check(root):
    if not root:
        return []

    fields = [field for field in select(root, "input, textarea, select") if is_personal(field)]
    if not fields:
        return ["This section has no personal name, email, or address field."]

    for field in fields:
        token = (attr(field, "autocomplete") or "").strip().split()
        token = token[-1] if token else ""
        if not token or token.lower() in {"off", "on"}:
            return [f"“{hint(field)}” needs an autocomplete token."]
        if not TOKENS.match(token):
            return [f"“{token}” is not a recognized input-purpose token."]
    return []


def is_personal(field) -> bool:
    type_name = (attr(field, "type") or "text").lower()
    if type_name in PERSONAL_TYPES:
        return True
    key = f"{attr_or(field, 'name')} {attr_or(field, 'id')} {attr_or(field, 'autocomplete')}"
    return bool(
        PERSONAL_NAME.match(attr_or(field, "name"))
        or PERSONAL_NAME.match(attr_or(field, "id"))
        or PERSONAL_KEY.search(key)
    )


def hint(field) -> str:
    return (attr_or(field, "id") or attr_or(field, "name") or attr_or(field, "type") or "this field").strip()
