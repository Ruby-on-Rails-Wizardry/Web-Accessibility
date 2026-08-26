// Pointer-cancellation cop: the action must not run on down-event.
// 2.1-only. Handlers stay inert (undefined function) so a tap does not act.

export function pointerCancellationCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const down = [...root.querySelectorAll("[ontouchstart], [onmousedown]")]
  for (const element of down) {
    const handler = `${element.getAttribute("ontouchstart") || ""} ${element.getAttribute("onmousedown") || ""}`
    if (handler.replace(/\s+/g, "").length) {
      return [`“${hint(element)}” completes on the down-event.`]
    }
  }
  return []
}

function hint(element) {
  return (element.textContent || element.tagName.toLowerCase()).replace(/\s+/g, " ").trim()
}
