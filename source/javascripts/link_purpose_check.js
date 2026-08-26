// Link-purpose cop: the link name must say where it goes. Generic
// “click here” / “read more” fails even if nearby text has the destination.

const WEAK = /^(click here|here|read more|more|learn more|click|link|this link)$/i

export function linkPurposeCheck(root) {
  if (!root) return []
  if (typeof root.querySelectorAll !== "function") return []

  const links = [...root.querySelectorAll("a[href]")]
  if (!links.length) return ["This section has no link."]

  for (const link of links) {
    const name = link.textContent.replace(/\s+/g, " ").trim()
    if (!name) return ["This link has no text name."]
    if (WEAK.test(name)) {
      return [`“${name}” does not name the destination.`]
    }
  }
  return []
}
