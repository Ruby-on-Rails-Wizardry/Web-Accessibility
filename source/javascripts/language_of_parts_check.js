// Language-of-parts cop: a phrase not in the surrounding language needs lang
// on the element that contains it.

export function languageOfPartsCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const marked = langNodes(root)
  const switched = marked.some((element) => {
    const ancestor = element.parentElement?.closest("[lang]")
    if (!ancestor) return false
    const around = ancestor.getAttribute("lang") || ""
    const here = element.getAttribute("lang") || ""
    return here && around && here !== around
  })

  if (switched) return []
  return ["A phrase in another language is not marked with lang."]
}

function langNodes(root) {
  const list = []
  if (root.nodeType === 1 && root.hasAttribute("lang")) list.push(root)
  list.push(...root.querySelectorAll("[lang]"))
  return list
}
