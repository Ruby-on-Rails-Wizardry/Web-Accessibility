// Heading-order cop: do not skip a level inside the section.
// Starting at h2 is allowed. Going back up (h3 then h2) is allowed.
// Empty headings are a different miss and are not scored here.

export function headingOrderCheck(root) {
  if (!root) return []

  const headings = [...root.querySelectorAll("h1, h2, h3, h4, h5, h6")]
  const details = []
  if (headings.length === 0) return details

  let previous = headingLevel(headings[0])
  for (let index = 1; index < headings.length; index += 1) {
    const level = headingLevel(headings[index])
    if (level > previous + 1) {
      details.push(`This section goes from h${previous} to h${level}.`)
    }
    previous = level
  }

  return details
}

function headingLevel(node) {
  return Number(node.tagName.slice(1))
}
