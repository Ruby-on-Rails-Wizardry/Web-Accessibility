// Well-formedness of a fragment: opening and closing tags must match.
// The HTML parser will otherwise repair the markup and hide the miss.
// Uses XML parse so a mismatch is an error instead of a silent fix.

const VOID = "area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr"
const BOOLEAN =
  "allowfullscreen|async|autofocus|autoplay|checked|controls|default|defer|disabled|formnovalidate|hidden|inert|ismap|itemscope|loop|multiple|muted|nomodule|novalidate|open|playsinline|readonly|required|reversed|selected"

export function htmlWellFormed(html) {
  const wrapped = `<root>${xmlFriendly(html)}</root>`
  const doc = new DOMParser().parseFromString(wrapped, "application/xml")
  const message = parserErrorText(doc)
  if (!message) return []
  return [detailFromParser(message)]
}

function xmlFriendly(html) {
  const voidClosed = String(html).replace(new RegExp(`<(${VOID})(\\s[^>]*)?/?>`, "gi"), (match, tag, attrs) => {
    if (/\/>$/.test(match.trimEnd())) return match
    return `<${tag}${attrs || ""}/>`
  })
  return voidClosed.replace(new RegExp(`\\s(${BOOLEAN})(?=[\\s>/])`, "gi"), (_, name) => ` ${name}="${name}"`)
}

function parserErrorText(doc) {
  if (!doc) return "This HTML could not be read."
  if (doc.documentElement?.localName === "parsererror") {
    return doc.documentElement.textContent || ""
  }
  const nodes = doc.getElementsByTagName("parsererror")
  if (nodes.length) return nodes[0].textContent || ""
  return ""
}

function detailFromParser(message) {
  const mismatch = message.match(/mismatch:\s*([A-Za-z][\w:-]*)\s+line\s+\d+\s+and\s+([A-Za-z][\w:-]*)/i)
  if (mismatch) {
    return `An <${mismatch[1].toLowerCase()}> is closed with </${mismatch[2].toLowerCase()}>.`
  }
  if (/premature end of data|end tag|not finished|unclosed/i.test(message)) {
    return "A tag is opened and never closed."
  }
  return "Opening and closing tags do not match."
}
