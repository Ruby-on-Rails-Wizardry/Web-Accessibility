import { Controller } from "./stimulus.js"

export default class extends Controller {
  static targets = ["tab", "panel"]
  static values = { current: { type: String, default: "html" } }

  connect() {
    const uid = `t${Math.random().toString(36).slice(2, 9)}`
    this.tabTargets.forEach((tab) => {
      const id = tab.dataset.tabsIdParam
      tab.id = `${uid}-tab-${id}`
      tab.setAttribute("aria-controls", `${uid}-panel-${id}`)
    })
    this.panelTargets.forEach((panel) => {
      const id = panel.dataset.panel
      panel.id = `${uid}-panel-${id}`
      panel.setAttribute("role", "tabpanel")
      panel.setAttribute("aria-labelledby", `${uid}-tab-${id}`)
    })
    this.show(this.currentValue)
  }

  select(event) {
    const id = event.params.id
    if (id) this.show(id)
  }

  showError() {
    this.show("error")
  }

  keydown(event) {
    const tabs = this.tabTargets
    const index = tabs.indexOf(event.currentTarget)
    if (index < 0) return

    let next = index
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % tabs.length
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + tabs.length) % tabs.length
    else if (event.key === "Home") next = 0
    else if (event.key === "End") next = tabs.length - 1
    else return

    event.preventDefault()
    tabs[next].focus()
    this.show(tabs[next].dataset.tabsIdParam)
  }

  show(id) {
    if (!id) return
    this.currentValue = id
    this.tabTargets.forEach((tab) => {
      const on = tab.dataset.tabsIdParam === id
      tab.setAttribute("aria-selected", on ? "true" : "false")
      tab.tabIndex = on ? 0 : -1
    })
    this.panelTargets.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.panel === id)
    })
  }
}
