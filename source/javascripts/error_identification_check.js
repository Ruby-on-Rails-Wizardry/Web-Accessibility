// Error-identification cop: a field in error is identified in text, not only
// a CSS class or aria-invalid without a message.

export function errorIdentificationCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const fields = [...root.querySelectorAll("input, select, textarea")]
  if (!fields.length) return ["This section has no field in error."]

  for (const field of fields) {
    if (!isInError(field)) continue
    if (!errorText(field, root)) {
      return ["The error is not identified in text."]
    }
  }

  if (!fields.some(isInError)) {
    return ["The error is not identified in text."]
  }
  return []
}

function isInError(field) {
  return field.getAttribute("aria-invalid") === "true" || field.classList.contains("invalid")
}

function errorText(field, root) {
  const ids = (field.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean)
  const fromIds = ids.map((id) => root.querySelector(`#${cssEscape(id)}`)?.textContent || "").join(" ")
  if (fromIds.replace(/\s+/g, " ").trim()) return true
  const named = [...root.querySelectorAll("p, div, span, strong")].some((node) => {
    return /error|missing|invalid|required|must /i.test(node.textContent)
  })
  return named
}

function cssEscape(id) {
  return typeof CSS !== "undefined" && CSS.escape ? CSS.escape(id) : id.replace(/"/g, '\\"')
}
