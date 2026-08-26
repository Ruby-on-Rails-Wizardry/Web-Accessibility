// Lists cop: related items are ul/ol/dl, not a stack of divs or paragraphs.
// role="list" without list items is not a pass. Headings and tables are other rules.

export function listsCheck(root) {
  if (!root) return []
  if (realList(root)) return []

  const fakes = fakeListItems(root)
  if (fakes.length < 2) return []

  const sample = fakes[0].textContent.replace(/\s+/g, " ").trim()
  if (sample) {
    return [`“${sample}” and the items next to it are not marked as a list.`]
  }
  return ["Related items are not marked as a list."]
}

function realList(root) {
  if (typeof root.querySelectorAll !== "function") return false

  const lists = [...root.querySelectorAll("ul, ol")]
  if (lists.some((list) => [...list.children].some((child) => child.tagName === "LI"))) return true

  return [...root.querySelectorAll("dl")].some((list) => list.querySelector("dt, dd"))
}

function fakeListItems(root) {
  if (typeof root.querySelectorAll !== "function") return []

  const items = [...root.querySelectorAll("div, p")].filter((element) => {
    if (element.closest("ul, ol, dl, li, dt, dd")) return false
    if (element.querySelector("ul, ol, dl, p, div, table, h1, h2, h3, h4, h5, h6")) return false
    return element.textContent.trim().length > 0
  })

  const byParent = new Map()
  items.forEach((element) => {
    const parent = element.parentElement
    if (!parent) return
    if (!byParent.has(parent)) byParent.set(parent, [])
    byParent.get(parent).push(element)
  })

  for (const group of byParent.values()) {
    if (group.length >= 2) return group
  }
  return []
}
