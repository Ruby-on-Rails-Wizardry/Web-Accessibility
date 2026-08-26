// Meaningful-sequence cop: CSS that reorders source away from reading order.

const REORDER_CLASS = /\b(pull-up|pull-left|visually-first|css-order)\b/i
const REORDER_STYLE = /(?:^|;)\s*order\s*:\s*(?!0\s*(?:;|$))/i
const REVERSE = /flex-direction\s*:\s*(row|column)-reverse/i

export function meaningfulSequenceCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const nodes = [root, ...root.querySelectorAll("*")]
  for (const element of nodes) {
    const className = element.getAttribute("class") || ""
    const style = element.getAttribute("style") || ""
    if (REORDER_CLASS.test(className) || REORDER_STYLE.test(style) || REVERSE.test(style)) {
      return ["CSS reorders this content away from the DOM sequence."]
    }
  }
  return []
}
