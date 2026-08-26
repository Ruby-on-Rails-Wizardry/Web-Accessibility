// Images-of-text cop: words that are the content should be real text.
// A correct alt on a PNG headline still fails. Logos are the usual exception.

const TEXT_SRC = /headline|banner-text|sale-title|heading-img|text-banner|hours-sign|promo-text|word-art|slogan|title-banner/i
const LOGO = /logo|wordmark|seal|brand-mark/i

export function imagesOfTextCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const images = [...root.querySelectorAll("img")]
  for (const image of images) {
    const src = image.getAttribute("src") || ""
    const alt = image.getAttribute("alt") || ""
    if (LOGO.test(src) || LOGO.test(alt)) continue
    if (TEXT_SRC.test(src)) {
      return ["These words are an image of text, not real text."]
    }
  }
  return []
}
