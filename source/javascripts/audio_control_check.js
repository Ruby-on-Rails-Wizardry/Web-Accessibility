// Audio-control cop: autoplay media longer than a moment needs an immediate
// pause. Missing src still counts — do not put a real autoplaying file here.

export function audioControlCheck(root) {
  if (!root || typeof root.querySelectorAll !== "function") return []

  const media = [...root.querySelectorAll("audio, video")]
  if (!media.length) return ["This section has no audio."]

  for (const element of media) {
    if (!element.hasAttribute("autoplay")) continue
    if (element.hasAttribute("controls")) continue
    if (root.querySelector("button, [aria-label]")) {
      const pause = [...root.querySelectorAll("button, [aria-label]")].some((node) =>
        /pause|stop|mute/i.test(`${node.textContent || ""} ${node.getAttribute("aria-label") || ""}`)
      )
      if (pause) continue
    }
    return ["Audio starts on its own and has no pause control."]
  }
  return []
}
