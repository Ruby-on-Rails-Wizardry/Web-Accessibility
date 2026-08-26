// Visible-label cop: each text field has an associated visible label
// (for/id or a wrapping label with text). aria-label alone is not this pass.
// Placeholder-only is a different rule and is not scored here as a special case;
// a field with only a placeholder still has no associated visible label.

const SKIP_INPUT_TYPES = new Set(["hidden", "submit", "button", "reset", "image"])

export function visibleLabelCheck(root) {
  if (!root) return []

  const controls = unlabeledControls(root)
  if (!controls.length) return []

  const sample = fieldHint(controls[0])
  return [`“${sample}” has no associated visible label.`]
}

function unlabeledControls(root) {
  if (typeof root.querySelectorAll !== "function") return []

  return [...root.querySelectorAll("input, select, textarea")].filter((element) => {
    if (element.tagName === "INPUT") {
      const type = (element.getAttribute("type") || "text").toLowerCase()
      if (SKIP_INPUT_TYPES.has(type)) return false
    }
    return !hasAssociatedVisibleLabel(element, root)
  })
}

export function hasAssociatedVisibleLabel(control, root) {
  const wrap = control.closest("label")
  if (wrap && labelText(wrap, control)) return true

  const id = control.getAttribute("id")
  if (!id) return false

  const escaped = typeof CSS !== "undefined" && CSS.escape ? CSS.escape(id) : id.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
  const label = root.querySelector(`label[for="${escaped}"]`)
  return !!(label && label.textContent.replace(/\s+/g, " ").trim())
}

function labelText(label, control) {
  const clone = label.cloneNode(true)
  clone.querySelectorAll("input, select, textarea, button").forEach((node) => node.remove())
  return clone.textContent.replace(/\s+/g, " ").trim()
}

export function fieldHint(control) {
  const type = (control.getAttribute("type") || control.tagName.toLowerCase()).replace(/\s+/g, " ")
  const name = (control.getAttribute("name") || control.getAttribute("id") || type).trim()
  return name || "this field"
}
