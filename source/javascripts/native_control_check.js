// Native-control cop: a clickable job uses button, a[href], or an input.
// A div/span with onclick or role=button is the custom-widget miss.
// An <a> with no href is not a link.

export function nativeControlCheck(root) {
  if (!root) return []

  const fakes = fakeControls(root)
  if (!fakes.length) return []

  const sample = fakes[0].textContent.replace(/\s+/g, " ").trim() || fakes[0].tagName.toLowerCase()
  return [`“${sample}” is not a native button, link, or input.`]
}

function fakeControls(root) {
  if (typeof root.querySelectorAll !== "function") return []

  return [...root.querySelectorAll("div, span, a")].filter((element) => {
    if (element.querySelector("button, a[href], input, select, textarea")) return false
    if (element.closest("button, a[href], label")) return false
    if (element.tagName === "A") {
      const href = element.getAttribute("href")
      return href == null || href.trim() === ""
    }
    if (element.hasAttribute("onclick")) return true
    return (element.getAttribute("role") || "").toLowerCase() === "button"
  })
}
