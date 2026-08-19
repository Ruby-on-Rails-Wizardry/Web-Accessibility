import { Controller } from "./stimulus.js"

export default class extends Controller {
  static targets = ["menu", "button"]

  toggle() {
    const open = !this.element.classList.contains("is-open")
    this.element.classList.toggle("is-open", open)
    if (this.hasButtonTarget) {
      this.buttonTarget.setAttribute("aria-expanded", String(open))
    }
  }

  close() {
    this.element.classList.remove("is-open")
    if (this.hasButtonTarget) {
      this.buttonTarget.setAttribute("aria-expanded", "false")
    }
  }
}
