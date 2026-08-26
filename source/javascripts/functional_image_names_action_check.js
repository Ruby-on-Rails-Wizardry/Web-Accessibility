// Functional-image cop: when the image is the control, alt names the
// destination or action — not “logo” or “icon”. Empty alt on a lone link
// is a nameless control.

const WEAK = /^(logo|icon|image|photo|picture|graphic)$/i

export function functionalImageNamesActionCheck(root) {
  if (!root) return []
  if (typeof root.querySelectorAll !== "function") return []

  const controls = [...root.querySelectorAll("a[href], button")].filter((element) => {
    return element.querySelector("img")
  })
  if (!controls.length) return ["This section has no image that is a link or button."]

  for (const control of controls) {
    const image = control.querySelector("img")
    const extra = controlTextWithoutImage(control)
    if (extra) continue

    if (!image.hasAttribute("alt")) {
      return ["This image control has no alt attribute."]
    }
    const alt = image.getAttribute("alt").replace(/\s+/g, " ").trim()
    if (!alt) return ["This image control has empty alt, so the link or button has no name."]
    if (WEAK.test(alt)) {
      return [`“${alt}” does not name the destination or the action.`]
    }
  }
  return []
}

function controlTextWithoutImage(control) {
  const clone = control.cloneNode(true)
  clone.querySelectorAll("img").forEach((node) => node.remove())
  return clone.textContent.replace(/\s+/g, " ").trim()
}
