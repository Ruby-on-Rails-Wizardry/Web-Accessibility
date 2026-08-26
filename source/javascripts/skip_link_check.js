// Skip-link cop: the first focusable control in the specimen jumps to unique
// content that exists in this node. Do not use id="main" here — the page
// already has that id on the real <main>.

export function skipLinkCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const focusable = focusableControls(root)
  if (!focusable.length) return ["There is no skip link."]

  const first = focusable[0]
  const href = first.getAttribute("href") || ""
  const name = `${first.textContent || ""} ${first.getAttribute("aria-label") || ""}`.replace(/\s+/g, " ").trim()

  if (!href.startsWith("#") || href.length < 2 || !/skip/i.test(name)) {
    return ["The first control is not a skip link."]
  }

  const id = href.slice(1)
  const target = root.id === id ? root : root.querySelector(`#${cssEscape(id)}`)
  if (!target) return ["The skip link does not point at an element in this section."]
  return []
}

function focusableControls(root) {
  return [...root.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter((element) => {
    if (element.disabled || element.hasAttribute("disabled")) return false
    if (element.hidden || element.hasAttribute("hidden")) return false
    if (element.getAttribute("aria-hidden") === "true") return false
    const style = (element.getAttribute("style") || "").replace(/\s+/g, "")
    if (/display:none/i.test(style) || /visibility:hidden/i.test(style)) return false
    return true
  })
}

function cssEscape(id) {
  return typeof CSS !== "undefined" && CSS.escape ? CSS.escape(id) : id.replace(/"/g, '\\"')
}
