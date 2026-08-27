import { Controller } from "./stimulus.js"
import { screenReaderText } from "./screen_reader_text.js"

export default class extends Controller {
  static targets = ["root", "output"]

  connect() {
    this.update()
    if (!this.hasRootTarget) return

    this.observer = new MutationObserver(() => this.update())
    this.observer.observe(this.rootTarget, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true
    })
  }

  disconnect() {
    this.observer?.disconnect()
  }

  update() {
    if (!this.hasOutputTarget || !this.hasRootTarget) return
    this.outputTarget.textContent = screenReaderText(this.rootTarget) || "(nothing announced)"
  }
}
