// Label-in-name cop: visible text of the control must appear in the accessible name.

export function labelInNameCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const controls = [...root.querySelectorAll("button, a[href], input, select, textarea")]
  for (const control of controls) {
    const visible = visibleText(control, root)
    if (!visible) continue
    const name = accessibleName(control, root)
    if (!name.toLowerCase().includes(visible.toLowerCase())) {
      return [`The visible text “${visible}” is not in the accessible name “${name}”.`]
    }
  }
  return []
}

function visibleText(control, root) {
  if (control.tagName === "BUTTON" || control.tagName === "A") {
    return control.textContent.replace(/\s+/g, " ").trim()
  }
  const id = control.getAttribute("id")
  if (id) {
    const label = root.querySelector(`label[for="${cssEscape(id)}"]`)
    if (label) return label.textContent.replace(/\s+/g, " ").trim()
  }
  const wrap = control.closest("label")
  if (!wrap) return ""
  const clone = wrap.cloneNode(true)
  clone.querySelectorAll("input, select, textarea, button").forEach((node) => node.remove())
  return clone.textContent.replace(/\s+/g, " ").trim()
}

function accessibleName(control, root) {
  if (control.hasAttribute("aria-label")) {
    return control.getAttribute("aria-label").replace(/\s+/g, " ").trim()
  }
  const labelledby = control.getAttribute("aria-labelledby")
  if (labelledby) {
    const text = labelledby.split(/\s+/).map((id) => root.querySelector(`#${cssEscape(id)}`)?.textContent || "").join(" ")
    return text.replace(/\s+/g, " ").trim()
  }
  if (control.tagName === "BUTTON" || control.tagName === "A") {
    return control.textContent.replace(/\s+/g, " ").trim()
  }
  return visibleText(control, root)
}

function cssEscape(id) {
  return typeof CSS !== "undefined" && CSS.escape ? CSS.escape(id) : id.replace(/"/g, '\\"')
}
