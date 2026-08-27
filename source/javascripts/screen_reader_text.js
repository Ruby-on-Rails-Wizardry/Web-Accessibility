// Approximate browse-mode speech for a fragment. Not NVDA, JAWS, or VoiceOver.
// Chrome stays outside <main>. Empty alt is silent. Missing alt is unlabeled.

const SKIP = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEMPLATE"])
const BUTTON_TYPES = new Set(["button", "submit", "reset", "image"])
const HIDE_INPUT = new Set(["hidden"])

export function screenReaderText(root) {
  if (!root) return ""

  const lines = []
  visit(root, lines, root)
  return lines.join("\n")
}

function visit(node, lines, scope) {
  if (node.nodeType === 3) {
    const text = collapse(node.textContent)
    if (text) lines.push(text)
    return
  }
  if (node.nodeType !== 1) return
  if (SKIP.has(node.tagName) || isHidden(node)) return
  if (handle(node, lines, scope)) return

  for (const child of node.childNodes) visit(child, lines, scope)
}

function handle(node, lines, scope) {
  const tag = node.tagName
  const role = (node.getAttribute("role") || "").toLowerCase()

  if (/^H[1-6]$/.test(tag)) {
    lines.push(`Heading ${tag.slice(1)}, ${visibleText(node) || "empty"}`)
    return true
  }

  if (tag === "IMG") {
    const image = imageLine(node)
    if (image) lines.push(image)
    return true
  }

  if (tag === "A") {
    if (!node.hasAttribute("href")) return false
    lines.push(`Link, ${controlName(node, scope) || "unlabeled"}`)
    return true
  }

  if (tag === "BUTTON" || role === "button") {
    lines.push(`Button, ${controlName(node, scope) || "unlabeled"}`)
    return true
  }

  if (tag === "SUMMARY") {
    lines.push(`Summary, ${controlName(node, scope) || "unlabeled"}`)
    return true
  }

  if (tag === "INPUT") {
    const type = (node.getAttribute("type") || "text").toLowerCase()
    if (HIDE_INPUT.has(type)) return true
    if (BUTTON_TYPES.has(type)) {
      lines.push(`Button, ${controlName(node, scope) || defaultButtonName(type)}`)
      return true
    }
    lines.push(`${inputRole(type)}, ${controlName(node, scope) || "unlabeled"}`)
    return true
  }

  if (tag === "SELECT") {
    lines.push(`Combo box, ${controlName(node, scope) || "unlabeled"}`)
    return true
  }

  if (tag === "TEXTAREA") {
    lines.push(`Edit, ${controlName(node, scope) || "unlabeled"}`)
    return true
  }

  if (tag === "UL" || tag === "OL") {
    const items = [...node.children].filter((child) => child.tagName === "LI")
    lines.push(`List, ${items.length} items`)
    items.forEach((item, index) => {
      const prefix = tag === "OL" ? `${index + 1}.` : "Bullet"
      const text = visibleText(item) || "empty"
      lines.push(`${prefix} ${text}`)
    })
    return true
  }

  if (tag === "DL") {
    const parts = [...node.querySelectorAll("dt, dd")]
    if (!parts.length) return false
    lines.push("Description list")
    parts.forEach((part) => {
      const kind = part.tagName === "DT" ? "Term" : "Definition"
      lines.push(`${kind}, ${visibleText(part) || "empty"}`)
    })
    return true
  }

  if (tag === "TABLE") {
    lines.push("Table")
    return false
  }

  if (tag === "TH") {
    lines.push(`Column header, ${visibleText(node) || "empty"}`)
    return true
  }

  if (tag === "TD") {
    const text = visibleText(node)
    if (text) lines.push(text)
    return true
  }

  if (tag === "CAPTION") {
    const text = visibleText(node)
    if (text) lines.push(`Caption, ${text}`)
    return true
  }

  if (tag === "LABEL") {
    const nested = node.querySelectorAll("input, select, textarea, button")
    if (nested.length) {
      nested.forEach((control) => visit(control, lines, scope))
      return true
    }
    if (node.getAttribute("for")) return true
    return false
  }

  if (role === "status" || role === "alert" || live(node)) {
    const text = visibleText(node)
    if (text) lines.push(`${role === "alert" ? "Alert" : "Status"}, ${text}`)
    return true
  }

  if (tag === "BR" || tag === "HR" || tag === "WBR") return true

  return false
}

function imageLine(node) {
  if (!node.hasAttribute("alt")) return "Image, unlabeled"
  const alt = collapse(node.getAttribute("alt"))
  if (!alt) return ""
  return `Image, ${alt}`
}

function inputRole(type) {
  if (type === "checkbox") return "Checkbox"
  if (type === "radio") return "Radio button"
  if (type === "search") return "Search"
  if (type === "email" || type === "tel" || type === "url" || type === "password") return "Edit"
  if (type === "number") return "Spin button"
  if (type === "file") return "File upload"
  return "Edit"
}

function defaultButtonName(type) {
  if (type === "submit") return "Submit"
  if (type === "reset") return "Reset"
  return "unlabeled"
}

function controlName(node, scope) {
  const aria = collapse(node.getAttribute("aria-label"))
  if (aria) return aria

  const ids = (node.getAttribute("aria-labelledby") || "").split(/\s+/).filter(Boolean)
  if (ids.length) {
    const text = collapse(ids.map((id) => scope.querySelector(`#${cssEscape(id)}`)?.textContent || "").join(" "))
    if (text) return text
  }

  if (node.tagName === "IMG") {
    return node.hasAttribute("alt") ? collapse(node.getAttribute("alt")) : ""
  }

  if (node.tagName === "INPUT") {
    const type = (node.getAttribute("type") || "text").toLowerCase()
    if (type === "image") return collapse(node.getAttribute("alt"))
    if (BUTTON_TYPES.has(type)) return collapse(node.getAttribute("value")) || defaultButtonName(type)
    return associatedLabel(node, scope) || collapse(node.getAttribute("title")) || collapse(node.getAttribute("placeholder"))
  }

  if (node.tagName === "SELECT" || node.tagName === "TEXTAREA") {
    return associatedLabel(node, scope) || collapse(node.getAttribute("title")) || collapse(node.getAttribute("placeholder"))
  }

  const image = node.querySelector?.("img")
  const fromImage = image && image.hasAttribute("alt") ? collapse(image.getAttribute("alt")) : ""
  return visibleText(node) || fromImage
}

function associatedLabel(control, scope) {
  const wrap = control.closest("label")
  if (wrap) {
    const text = labelText(wrap, control)
    if (text) return text
  }
  const id = control.getAttribute("id")
  if (!id) return ""
  const label = scope.querySelector(`label[for="${cssEscape(id)}"]`)
  return label ? collapse(label.textContent) : ""
}

function labelText(label, control) {
  const clone = label.cloneNode(true)
  clone.querySelectorAll("input, select, textarea, button").forEach((node) => node.remove())
  return collapse(clone.textContent)
}

function visibleText(node) {
  const clone = node.cloneNode(true)
  clone.querySelectorAll("script, style").forEach((child) => child.remove())
  return collapse(clone.textContent)
}

function isHidden(node) {
  if (node.hidden || node.hasAttribute("hidden") || node.hasAttribute("inert")) return true
  if (node.getAttribute("aria-hidden") === "true") return true
  const style = (node.getAttribute("style") || "").replace(/\s+/g, "")
  return /display:none/i.test(style) || /visibility:hidden/i.test(style)
}

function live(node) {
  const value = (node.getAttribute("aria-live") || "").toLowerCase()
  return value === "polite" || value === "assertive"
}

function collapse(value) {
  return String(value || "").replace(/\s+/g, " ").trim()
}

function cssEscape(id) {
  return typeof CSS !== "undefined" && CSS.escape ? CSS.escape(id) : String(id).replace(/"/g, '\\"')
}
