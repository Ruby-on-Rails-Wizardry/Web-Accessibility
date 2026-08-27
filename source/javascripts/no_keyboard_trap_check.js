// Keyboard-trap cop: a widget that takes Tab must also give it back.
// Live traps belong in a new window so they cannot trap this site.
// data-trap marks the miss for Check without needing to Tab into it.

export function noKeyboardTrapCheck(root) {
  if (!root || typeof root.querySelector !== "function") return []

  const trap = root.querySelector("[data-trap]")
  if (!trap) return []
  return ["This component traps Tab with no keyboard way out."]
}
