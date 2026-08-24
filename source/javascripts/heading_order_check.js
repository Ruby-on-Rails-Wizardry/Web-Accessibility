// Heading-order cop: do not skip a level inside the given node.
// The rest of the page is ignored. The node itself is included if it is a heading.
// Starting at h2 is allowed. Going back up (h3 then h2) is allowed.
// Empty headings are a different miss and are not scored here.

const HEADING_SELECTOR = "h1, h2, h3, h4, h5, h6"

export function headingsIn(root) {
  if (!root) return []

  const list = []
  if (root.nodeType === 1 && root.matches(HEADING_SELECTOR)) list.push(root)
  if (typeof root.querySelectorAll === "function") {
    list.push(...root.querySelectorAll(HEADING_SELECTOR))
  }
  return list
}

export function headingOrderCheck(root) {
  const headings = headingsIn(root)
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
