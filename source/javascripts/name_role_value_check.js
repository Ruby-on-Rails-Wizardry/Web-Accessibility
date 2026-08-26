// Name-role-value cop for custom widgets only.
// Native button/link/input already expose name, role, and value — that is
// native-control. This cop scores tab/checkbox/switch-like widgets.

const STATE_FOR = {
  tab: "aria-selected",
  checkbox: "aria-checked",
  radio: "aria-checked",
  switch: "aria-checked",
  menuitemcheckbox: "aria-checked",
  slider: "aria-valuenow"
}

const CLASS_WIDGET = /\b(tab|tabs|switch|accordion|menu-item|menuitem)\b/i

export function nameRoleValueCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const widgets = findWidgets(root)
  if (!widgets.length) return []

  for (const widget of widgets) {
    const role = (widget.getAttribute("role") || "").toLowerCase()
    if (!role) {
      return [`“${hint(widget)}” has no role.`]
    }
    if (!hasName(widget, root)) {
      return [`“${hint(widget)}” has no name.`]
    }
    const state = STATE_FOR[role]
    if (state && !widget.hasAttribute(state)) {
      return [`“${hint(widget)}” has no ${state}.`]
    }
  }
  return []
}

function findWidgets(root) {
  return [...root.querySelectorAll("div, span, button, a, [role]")].filter((element) => {
    if (element.closest("button, a[href], label") && element.tagName !== "BUTTON" && element.tagName !== "A") {
      return false
    }
    const role = (element.getAttribute("role") || "").toLowerCase()
    if (Object.prototype.hasOwnProperty.call(STATE_FOR, role) || role === "menuitem") return true
    if (CLASS_WIDGET.test(element.getAttribute("class") || "") && !isNative(element)) return true
    if (!isNative(element) && (element.hasAttribute("aria-selected") || element.hasAttribute("aria-checked"))) {
      return true
    }
    return false
  })
}

function isNative(element) {
  return ["BUTTON", "A", "INPUT", "SELECT", "TEXTAREA", "SUMMARY"].includes(element.tagName)
}

function hasName(element, root) {
  const aria = (element.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim()
  if (aria) return true
  const ids = (element.getAttribute("aria-labelledby") || "").split(/\s+/).filter(Boolean)
  if (ids.some((id) => (root.querySelector(`#${cssEscape(id)}`)?.textContent || "").trim())) return true
  return element.textContent.replace(/\s+/g, " ").trim() !== ""
}

function hint(element) {
  return (
    element.textContent.replace(/\s+/g, " ").trim() ||
    element.getAttribute("aria-label") ||
    element.getAttribute("class") ||
    element.tagName.toLowerCase()
  )
}

function cssEscape(id) {
  return typeof CSS !== "undefined" && CSS.escape ? CSS.escape(id) : id.replace(/"/g, '\\"')
}
