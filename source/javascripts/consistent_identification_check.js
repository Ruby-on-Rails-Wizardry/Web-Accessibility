// Consistent-identification cop: the same function keeps the same name.
// A specimen holds two controls that are meant to be the same job.

const GROUPS = [
  [/print/i, /download pdf/i, /save pdf/i, /export pdf/i],
  [/search/i, /\bfind\b/i],
  [/log ?in/i, /sign in/i],
  [/submit/i, /send form/i]
]

export function consistentIdentificationCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const names = [...root.querySelectorAll("button, a[href]")].map((element) => {
    return (element.getAttribute("aria-label") || element.textContent || "").replace(/\s+/g, " ").trim()
  }).filter(Boolean)

  if (names.length < 2) return ["This section has only one named control."]

  for (const group of GROUPS) {
    const hits = names.filter((name) => group.some((pattern) => pattern.test(name)))
    const unique = [...new Set(hits.map((name) => name.toLowerCase()))]
    if (unique.length > 1) {
      return [`“${hits[0]}” and “${hits[1]}” name the same action differently.`]
    }
  }
  return []
}
