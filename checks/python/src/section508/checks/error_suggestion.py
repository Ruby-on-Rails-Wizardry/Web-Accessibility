import re

from section508.dom import SPACE, text_of

WEAK = re.compile(r"^(invalid\.?|invalid date\.?|error\.?|required\.?|not valid\.?)$", re.I)
HINT = re.compile(r"like |use |example|yyyy|year-month|@ |format|must include|try |include an? ", re.I)


def check(root):
    if not root:
        return []

    text = SPACE.sub(" ", text_of(root)).strip()
    if not text:
        return ["There is no suggestion in text."]
    if WEAK.match(text) or not HINT.search(text):
        return ["The message does not suggest how to fix the error."]
    return []
