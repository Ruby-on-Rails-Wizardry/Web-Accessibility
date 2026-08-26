// Accessible-name cop: every control has a programmatic name.
// A clickable div with visible text still has no name until it is a control.

const WIDGET_ROLES = new Set([
  "button",
  "link",
  "checkbox",
  "radio",
  "tab",
  "menuitem",
  "switch",
  "combobox",
  "slider",
  "searchbox",
  "textbox"
])

export function accessibleNameCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const controls = findControls(root)
  if (!controls.length) return ["This section has no control to name."]

  for (const control of controls) {
    if (!hasName(control, root)) {
      return [`“${hint(control)}” has no programmatic name.`]
    }
  }
  return []
}

function findControls(root) {
  const natives = [...root.querySelectorAll("button, a[href], input, select, textarea, summary")].filter((element) => {
    if (element.tagName !== "INPUT") return true
    return (element.getAttribute("type") || "text").toLowerCase() !== "hidden"
  })

  const fakes = [...root.querySelectorAll("div, span, a, img")].filter((element) => {
    if (natives.includes(element)) return false
    if (element.closest("button, a[href], label, summary")) return false
    if (element.querySelector("button, a[href], input, select, textarea")) return false
    if (element.hasAttribute("onclick")) return true
    const role = (element.getAttribute("role") || "").toLowerCase()
    if (WIDGET_ROLES.has(role)) return true
    const tabindex = element.getAttribute("tabindex")
    return tabindex != null && Number(tabindex) >= 0
  })

  return [...natives, ...fakes]
}

function hasName(control, root) {
  const aria = (control.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim()
  if (aria) return true

  const ids = (control.getAttribute("aria-labelledby") || "").split(/\s+/).filter(Boolean)
  if (ids.length) {
    const text = ids.map((id) => root.querySelector(`#${cssEscape(id)}`)?.textContent || "").join(" ")
    if (text.replace(/\s+/g, " ").trim()) return true
  }

  if (control.tagName === "IMG") return (control.getAttribute("alt") || "").trim() !== ""

  if (control.tagName === "INPUT") {
    const type = (control.getAttribute("type") || "text").toLowerCase()
    if (["submit", "button", "reset"].includes(type)) {
      if ((control.getAttribute("value") || "").trim()) return true
      return type === "submit" || type === "reset"
    }
    if (type === "image") return (control.getAttribute("alt") || "").trim() !== ""
    return hasLabel(control, root) || (control.getAttribute("title") || "").trim() !== ""
  }

  if (control.tagName === "SELECT" || control.tagName === "TEXTAREA") {
    return hasLabel(control, root) || (control.getAttribute("title") || "").trim() !== ""
  }

  const role = (control.getAttribute("role") || "").toLowerCase()
  const nativeNamed = control.tagName === "BUTTON" || control.tagName === "A" || control.tagName === "SUMMARY"
  if (!nativeNamed && !WIDGET_ROLES.has(role)) return false

  if (ownText(control)) return true
  const image = control.querySelector("img")
  return !!(image && (image.getAttribute("alt") || "").trim())
}

function hasLabel(control, root) {
  const wrap = control.closest("label")
  if (wrap && labelText(wrap, control)) return true
  const id = control.getAttribute("id")
  if (!id) return false
  const label = root.querySelector(`label[for="${cssEscape(id)}"]`)
  return !!(label && label.textContent.replace(/\s+/g, " ").trim())
}

function labelText(wrap, control) {
  const clone = wrap.cloneNode(true)
  clone.querySelectorAll("input, select, textarea, button").forEach((node) => {
    if (node === control || clone.contains(node)) node.remove()
  })
  return clone.textContent.replace(/\s+/g, " ").trim()
}

function ownText(element) {
  const clone = element.cloneNode(true)
  clone.querySelectorAll("script, style").forEach((node) => node.remove())
  return clone.textContent.replace(/\s+/g, " ").trim()
}

function hint(control) {
  return (
    ownText(control) ||
    control.getAttribute("aria-label") ||
    control.getAttribute("id") ||
    control.getAttribute("name") ||
    control.tagName.toLowerCase()
  ).toString().replace(/\s+/g, " ").trim()
}

function cssEscape(id) {
  return typeof CSS !== "undefined" && CSS.escape ? CSS.escape(id) : id.replace(/"/g, '\\"')
}
