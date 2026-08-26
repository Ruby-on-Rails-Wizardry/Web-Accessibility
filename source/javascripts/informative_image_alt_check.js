// Informative-image cop: the image has a text alternative that carries the fact,
// not a missing alt, empty alt, filename, or format word.

const WEAK = /^(image|photo|picture|graphic|chart|icon|logo)$/i
const FILENAME = /\.(png|jpe?g|gif|svg|webp)$/i

export function informativeImageAltCheck(root) {
  if (!root) return []

  const images = queryImages(root)
  if (!images.length) return ["This section has no image with a text alternative."]

  for (const image of images) {
    if (!image.hasAttribute("alt")) {
      return ["This image has no alt attribute."]
    }
    const alt = image.getAttribute("alt").replace(/\s+/g, " ").trim()
    if (!alt) return ["This informative image has empty alt text."]
    if (WEAK.test(alt) || FILENAME.test(alt)) {
      return [`“${alt}” names the file or format, not the information.`]
    }
  }
  return []
}

function queryImages(root) {
  if (typeof root.querySelectorAll !== "function") return []
  return [...root.querySelectorAll("img")]
}
