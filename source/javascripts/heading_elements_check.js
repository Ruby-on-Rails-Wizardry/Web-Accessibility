// Heading-elements cop: section names are heading elements, not a bold paragraph.
// A p or div whose only content is strong/b is the miss taught on the rule page.
// Skipping levels is a different rule and is not scored here.

export function headingElementsCheck(root) {
  if (!root) return []

  const fakes = fakeHeadings(root)
  if (!fakes.length) return []

  const sample = fakes[0].textContent.replace(/\s+/g, " ").trim()
  if (sample) {
    return [`“${sample}” is a bold paragraph, not a heading element.`]
  }
  return ["A section name is a bold paragraph, not a heading element."]
}

function fakeHeadings(root) {
  const scope = typeof root.querySelectorAll === "function" ? root : null
  if (!scope) return []

  return [...scope.querySelectorAll("p, div")].filter((element) => {
    if (element.querySelector("p, div, ul, ol, table, h1, h2, h3, h4, h5, h6")) return false
    const significant = [...element.childNodes].filter((node) => {
      return node.nodeType !== 3 || node.textContent.trim()
    })
    if (significant.length !== 1) return false
    const child = significant[0]
    return child.nodeType === 1 && /^(STRONG|B)$/.test(child.nodeName)
  })
}
