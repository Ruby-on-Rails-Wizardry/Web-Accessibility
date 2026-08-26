// Error-suggestion cop: when the format is known, the text says how to fix it.
// “Invalid date.” is not a suggestion.

const WEAK = /^(invalid\.?|invalid date\.?|error\.?|required\.?|not valid\.?)$/i
const HINT = /like |use |example|yyyy|year-month|@ |format|must include|try |include an? /i

export function errorSuggestionCheck(root) {
  if (!root) return []

  const text = root.textContent.replace(/\s+/g, " ").trim()
  if (!text) return ["There is no suggestion in text."]
  if (WEAK.test(text) || !HINT.test(text)) {
    return ["The message does not suggest how to fix the error."]
  }
  return []
}
