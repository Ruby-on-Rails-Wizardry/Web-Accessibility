// Color-not-only-cue cop: a field marked invalid/required must also have a
// non-color cue (text, *, describedby). A red class alone fails.

export function colorNotOnlyCueCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const marked = [...root.querySelectorAll('.invalid, .error, .required, [aria-invalid="true"]')]
  if (!marked.length) return ["Color is the only cue."]

  for (const element of marked) {
    if (!hasNonColorCue(element, root)) {
      return ["Color is the only cue for this meaning."]
    }
  }
  return []
}

function hasNonColorCue(element, root) {
  const described = describedText(element, root)
  const label = labelText(element, root)
  const blob = `${element.textContent || ""} ${label} ${described}`
  return /\*|required|error|invalid|missing|must /i.test(blob)
}

function describedText(element, root) {
  const ids = (element.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean)
  return ids.map((id) => root.querySelector(`#${cssEscape(id)}`)?.textContent || "").join(" ")
}

function labelText(element, root) {
  const wrap = element.closest("label")
  if (wrap) return wrap.textContent
  const id = element.getAttribute("id")
  if (!id) return ""
  return root.querySelector(`label[for="${cssEscape(id)}"]`)?.textContent || ""
}

function cssEscape(id) {
  return typeof CSS !== "undefined" && CSS.escape ? CSS.escape(id) : id.replace(/"/g, '\\"')
}
