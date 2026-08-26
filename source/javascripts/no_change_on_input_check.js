// On-input cop: changing a value must not navigate unless the person asks.
// Navigation stays in the onchange/oninput attribute text, wrapped so the
// example does not actually leave the page.

const NAVIGATE = /location\s*=|window\.open|document\.location|href\s*=|this\.submit|form\.submit/i

export function noChangeOnInputCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const controls = [...root.querySelectorAll("select, input, textarea, [onchange], [oninput]")]
  for (const control of controls) {
    const handler = `${control.getAttribute("onchange") || ""} ${control.getAttribute("oninput") || ""}`
    if (NAVIGATE.test(handler)) {
      return ["Changing this value would change context."]
    }
  }
  return []
}
