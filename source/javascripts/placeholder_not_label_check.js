// Placeholder-not-label cop: placeholder must not be the only label.
// A persistent associated visible label may still have a placeholder hint.

import { fieldHint, hasAssociatedVisibleLabel } from "./visible_label_check.js"

const SKIP_INPUT_TYPES = new Set(["hidden", "submit", "button", "reset", "image"])

export function placeholderNotLabelCheck(root) {
  if (!root) return []

  const offenders = placeholderOnlyControls(root)
  if (!offenders.length) return []

  const sample = fieldHint(offenders[0])
  return [`“${sample}” uses placeholder as the only label.`]
}

function placeholderOnlyControls(root) {
  if (typeof root.querySelectorAll !== "function") return []

  return [...root.querySelectorAll("input, select, textarea")].filter((element) => {
    if (element.tagName === "INPUT") {
      const type = (element.getAttribute("type") || "text").toLowerCase()
      if (SKIP_INPUT_TYPES.has(type)) return false
    }
    const placeholder = (element.getAttribute("placeholder") || "").trim()
    if (!placeholder) return false
    return !hasAssociatedVisibleLabel(element, root)
  })
}
