// Focus-order cop: positive tabindex values reorder Tab away from the DOM.

export function focusOrderCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const positive = [...root.querySelectorAll("[tabindex]")].filter((element) => {
    const value = Number(element.getAttribute("tabindex"))
    return Number.isFinite(value) && value > 0
  })
  if (positive.length) {
    return ["Positive tabindex values reorder Tab away from the DOM."]
  }
  return []
}
