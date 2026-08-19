import { Controller } from "./stimulus.js"

export default class extends Controller {
  static targets = ["item"]

  toggle(event) {
    const opened = event.target
    if (!opened || !opened.open) return
    this.itemTargets.forEach((item) => {
      if (item !== opened) item.open = false
    })
  }
}
