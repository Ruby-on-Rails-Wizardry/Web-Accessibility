import { Controller } from "./stimulus.js"

export default class extends Controller {
  static targets = ["stage", "toggle", "listing"]
  static values = { open: { type: Boolean, default: false } }

  connect() {
    this.original = this.normalize(this.stageTarget.innerHTML)
    if (this.hasToggleTarget) this.toggleTarget.hidden = false
    if (this.openValue) this.open({ focus: false })
  }

  disconnect() {
    this.removePanel()
  }

  toggle() {
    if (this.panel) this.close()
    else this.open()
  }

  open({ focus = true } = {}) {
    if (this.panel) {
      if (focus) this.source?.focus()
      return
    }

    const panel = this.buildPanel()
    const source = panel.querySelector("textarea")
    source.value = this.normalize(this.stageTarget.innerHTML)
    this.hostForEditor().before(panel)
    this.hideListing()
    this.showHtmlTab()
    this.panel = panel
    this.source = source
    this.toggleTarget.setAttribute("aria-expanded", "true")
    this.toggleTarget.setAttribute("aria-controls", "specimen-editor")
    this.toggleTarget.textContent = "Close editor"
    if (focus) source.focus()
  }

  close() {
    this.removePanel()
    this.showListing()
    this.toggleTarget.setAttribute("aria-expanded", "false")
    this.toggleTarget.removeAttribute("aria-controls")
    this.toggleTarget.textContent = "Edit"
    this.toggleTarget.focus()
  }

  apply() {
    if (!this.source) return
    this.stageTarget.innerHTML = this.source.value
    this.stageTarget.querySelectorAll("script").forEach((node) => node.remove())
    this.syncListing()
  }

  reset() {
    this.stageTarget.innerHTML = this.original
    if (this.source) this.source.value = this.original
    this.syncListing()
  }

  keydown(event) {
    if (event.key === "Escape") {
      event.preventDefault()
      this.close()
      return
    }
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      event.preventDefault()
      this.apply()
    }
  }

  removePanel() {
    this.panel?.remove()
    this.panel = null
    this.source = null
  }

  buildPanel() {
    const panel = document.createElement("div")
    panel.id = "specimen-editor"
    panel.className = "specimen-editor"

    const inner = document.createElement("div")
    inner.className = "specimen-editor__inner"

    const source = document.createElement("textarea")
    source.id = "specimen-source"
    source.setAttribute("data-check-target", "source")
    source.setAttribute("aria-label", "HTML")
    source.rows = 8
    source.spellcheck = false
    source.setAttribute("autocapitalize", "off")
    source.setAttribute("autocomplete", "off")
    source.addEventListener("keydown", (event) => this.keydown(event))

    const actions = document.createElement("p")
    actions.className = "specimen-editor__actions"

    const apply = document.createElement("button")
    apply.type = "button"
    apply.className = "button button--small"
    apply.textContent = "Apply"
    apply.addEventListener("click", () => this.apply())

    const reset = document.createElement("button")
    reset.type = "button"
    reset.className = "button button--small button--ghost"
    reset.textContent = "Reset"
    reset.addEventListener("click", () => this.reset())

    const hint = document.createElement("p")
    hint.className = "specimen-editor__hint"
    hint.textContent = "Close Edit before you scan so the editor is not in the page."

    actions.append(apply, reset)
    inner.append(source, actions, hint)
    panel.append(inner)
    return panel
  }

  showHtmlTab() {
    const tab = this.element.querySelector('[data-tabs-id-param="html"]')
    if (tab) tab.click()
  }

  hostForEditor() {
    return this.hasListingTarget ? this.listingTarget.closest("pre") || this.listingTarget : this.stageTarget
  }

  hideListing() {
    const block = this.hostForEditor()
    if (this.hasListingTarget) block.hidden = true
  }

  showListing() {
    const block = this.hostForEditor()
    if (this.hasListingTarget) block.hidden = false
    this.syncListing()
  }

  syncListing() {
    if (!this.hasListingTarget) return
    this.listingTarget.textContent = this.normalize(this.stageTarget.innerHTML)
  }

  normalize(html) {
    return html.replace(/^\s+|\s+$/g, "").replace(/\n[ \t]+\n/g, "\n\n").replace(/\n[ \t]+/g, "\n")
  }
}
