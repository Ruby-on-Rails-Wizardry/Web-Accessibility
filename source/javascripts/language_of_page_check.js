// Language-of-page cop: lang on the root names the primary human language.
// Score <html>, not a fragment in <main>.

const TAG = /^[A-Za-z]{2,3}(-[A-Za-z0-9]+)*$/

export function languageOfPageCheck(root) {
  const html = htmlRoot(root)
  if (!html) return ["The page has no lang on the root."]

  const lang = (html.getAttribute("lang") || "").trim()
  if (!lang) return ["The page has no lang on the root."]
  if (!TAG.test(lang)) return [`“${lang}” is not a language tag.`]
  return []
}

function htmlRoot(root) {
  if (!root) return null
  if (root.nodeName === "HTML") return root
  if (root.nodeType === 9) return root.documentElement
  return root.ownerDocument?.documentElement || null
}
