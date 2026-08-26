// Decorative-image cop: ornament is silent. Missing alt is not empty alt.
// Non-empty alt on a decorative image is announced noise.

export function decorativeImageSilentCheck(root) {
  if (!root) return []

  if (typeof root.querySelectorAll !== "function") return []
  const images = [...root.querySelectorAll("img")]
  if (!images.length) return ["This section has no decorative image."]

  for (const image of images) {
    if (!image.hasAttribute("alt")) {
      return ["This decorative image is missing the alt attribute."]
    }
    const alt = image.getAttribute("alt")
    if (alt !== "") {
      const shown = alt.replace(/\s+/g, " ").trim() || "text"
      return [`“${shown}” will be announced. Decorative images need empty alt.`]
    }
  }
  return []
}
