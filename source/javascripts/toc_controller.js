import { Controller } from "./stimulus.js"

export default class extends Controller {
  static targets = ["list"]
  static values = {
    root: String,
    levels: { type: String, default: "h2, h3" }
  }

  connect() {
    if (!this.hasListTarget) return
    const root = this.hasRootValue
      ? document.querySelector(this.rootValue)
      : this.element
    if (!root) return

    this.listTarget.replaceChildren()
    root.querySelectorAll(this.levelsValue).forEach((heading) => {
      if (heading.closest(".toc, .tree-nav, .example, .todo-box")) return
      if (!heading.id) {
        heading.id = heading.textContent.trim().toLowerCase().replace(/[^\w]+/g, "-").replace(/^-|-$/g, "")
      }
      const li = document.createElement("li")
      li.className = `toc-${heading.tagName.toLowerCase()}`
      const a = document.createElement("a")
      a.href = `#${heading.id}`
      a.textContent = heading.textContent
      li.appendChild(a)
      this.listTarget.appendChild(li)
    })
  }
}
