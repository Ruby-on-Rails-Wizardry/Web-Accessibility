// On-focus cop: focusing a control must not navigate or rebuild the page.
// Specimens keep the miss in the onfocus attribute text so Check can score
// it, but wrap navigation in void() so tabbing the example does not leave.

const NAVIGATE = /location\s*=|window\.open|document\.location|href\s*=/i

export function noChangeOnFocusCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const controls = [...root.querySelectorAll("select, input, textarea, button, a, [tabindex], [onfocus]")]
  for (const control of controls) {
    const handler = control.getAttribute("onfocus") || ""
    if (NAVIGATE.test(handler)) {
      return ["Focus on this control would change context."]
    }
  }
  return []
}
