// Page-title cop: the document title names this view, not only the site.
// Score the real document (html/head), not a fragment in <main>.

const GENERIC = /^(home|welcome|untitled|document|new tab|city of [\w .'-]+)$/i

export function pageTitleCheck(root) {
  const doc = documentOf(root)
  if (!doc) return ["This document has no title."]

  const element = doc.querySelector("head > title") || doc.querySelector("title")
  if (!element) return ["This document has no title element."]

  const title = collapse(element.textContent || doc.title)
  if (!title) return ["The document title is empty."]
  if (GENERIC.test(title)) return [`“${title}” names the site, not this page.`]
  return []
}

function documentOf(root) {
  if (!root) return null
  if (root.nodeType === 9) return root
  if (root.nodeName === "HTML") return root.ownerDocument
  return root.ownerDocument || null
}

function collapse(value) {
  return String(value || "").replace(/\s+/g, " ").trim()
}
