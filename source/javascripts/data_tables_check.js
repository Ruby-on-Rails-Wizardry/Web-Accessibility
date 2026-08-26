// Data-tables cop: a grid of figures is a table with th, not only td, and not
// a stack of divs that only line up. Caption is recommended, not scored here.
// Layout tables are out of scope for this specimen checker.

export function dataTablesCheck(root) {
  if (!root) return []

  const tables = queryAll(root, "table")
  if (tables.length) {
    const bare = tables.find((table) => !table.querySelector("th"))
    if (!bare) return []
    return ["This table has no header cells (th)."]
  }

  if (looksLikeGrid(root)) {
    return ["This grid of figures is not a data table with headers."]
  }

  return []
}

function looksLikeGrid(root) {
  const rows = queryAll(root, "div").filter((element) => {
    if (element.closest("table, ul, ol, dl")) return false
    const cells = [...element.children].filter((child) => {
      return /^(DIV|SPAN|P)$/.test(child.tagName) && !child.querySelector("div, table")
    })
    return cells.length >= 2
  })
  return rows.length >= 2
}

function queryAll(root, selector) {
  if (typeof root.querySelectorAll !== "function") return []
  return [...root.querySelectorAll(selector)]
}
