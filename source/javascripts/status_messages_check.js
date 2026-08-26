// Status-messages cop: a confirmation or progress line needs a live region.
// 2.1-only.

const MESSAGE = /saved|error|items in cart|loading|success|thank you|updated|complete/i

export function statusMessagesCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const messages = [...root.querySelectorAll("div, p, output, span")].filter((element) => {
    return MESSAGE.test(element.textContent || "")
  })
  if (!messages.length) return ["This section has no status message."]

  for (const element of messages) {
    const role = (element.getAttribute("role") || "").toLowerCase()
    const live = (element.getAttribute("aria-live") || "").toLowerCase()
    if (role === "status" || role === "alert" || live === "polite" || live === "assertive") continue
    return ["The status message is not a live region."]
  }
  return []
}
