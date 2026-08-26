// Keyboard-operable cop: hover-only or click-only on a non-focusable node
// fails. Native controls already take Tab, Enter, and Space.

const NATIVE = new Set(["BUTTON", "A", "INPUT", "SELECT", "TEXTAREA", "SUMMARY"])

export function keyboardOperableCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const hoverOnly = [...root.querySelectorAll("[onmouseover], [onmouseenter], [onmousemove]")]
  for (const element of hoverOnly) {
    if (!isKeyboardReachable(element)) {
      return [`“${hint(element)}” works on hover only.`]
    }
  }

  const clicks = [...root.querySelectorAll("[onclick]")]
  for (const element of clicks) {
    if (NATIVE.has(element.tagName) && (element.tagName !== "A" || element.hasAttribute("href"))) continue
    if (!isFocusable(element)) {
      return [`“${hint(element)}” is not reachable from the keyboard.`]
    }
  }

  const natives = root.querySelectorAll("button, a[href], input, select, textarea, summary")
  if (!hoverOnly.length && !clicks.length && !natives.length) {
    return ["This section has no keyboard-operable control."]
  }
  return []
}

function isKeyboardReachable(element) {
  if (isFocusable(element)) return true
  return !!element.querySelector("button, a[href], input, select, textarea, summary, [tabindex]:not([tabindex='-1'])")
}

function isFocusable(element) {
  if (NATIVE.has(element.tagName) && (element.tagName !== "A" || element.hasAttribute("href"))) return true
  const tabindex = element.getAttribute("tabindex")
  return tabindex != null && Number(tabindex) >= 0
}

function hint(element) {
  return (element.textContent || element.getAttribute("class") || element.tagName.toLowerCase()).replace(/\s+/g, " ").trim()
}
