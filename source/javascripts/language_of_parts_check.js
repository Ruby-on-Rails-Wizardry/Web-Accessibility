// Language-of-parts cop: a phrase not in the surrounding language needs lang
// on the element that contains it.

export function languageOfPartsCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const marked = [...root.querySelectorAll("[lang]")]
  const switched = marked.some((element) => {
    const ancestor = element.parentElement?.closest("[lang]")
    const around = ancestor?.getAttribute("lang") || ""
    const here = element.getAttribute("lang") || ""
    return here && here !== around
  })

  if (switched) return []
  return ["A phrase in another language is not marked with lang."]
}
