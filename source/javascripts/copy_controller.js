import { Controller } from "./stimulus.js"

export default class extends Controller {
  static targets = ["source", "button"]
  static values = { copied: { type: String, default: "Copied" } }

  async copy() {
    const text = this.hasSourceTarget ? this.sourceTarget.innerText : this.element.innerText
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      return
    }
    if (!this.hasButtonTarget) return
    const original = this.buttonTarget.textContent
    this.buttonTarget.textContent = this.copiedValue
    window.setTimeout(() => {
      this.buttonTarget.textContent = original
    }, 1500)
  }
}
