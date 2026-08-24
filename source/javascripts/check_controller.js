import { Controller } from "./stimulus.js"
import { headingOrderCheck } from "./heading_order_check.js"

const CHECKERS = {
  "heading-order": headingOrderCheck
}

export default class extends Controller {
  static targets = ["section", "choice", "results", "button", "source"]
  static values = { catalog: Array }

  connect() {
    if (this.hasButtonTarget) this.buttonTarget.hidden = false
    if (this.hasSectionTarget) this.original = this.normalize(this.sectionTarget.innerHTML)
    if (this.hasSourceTarget && this.original) this.sourceTarget.value = this.original
    this.shuffleChoices()
  }

  run(event) {
    const chosen = event?.target && this.choiceTargets.includes(event.target) ? event.target : null
    const root = chosen ? this.sectionForChoice(chosen) : this.sectionToCheck()
    if (!root) return
    this.paint(this.evaluate(root), root, { moveFocus: !chosen })
  }

  applyAndCheck() {
    const root = this.applySource()
    if (!root) return
    this.paint(this.evaluate(root), root)
  }

  reset() {
    if (!this.hasSectionTarget || this.original == null) return
    this.sectionTarget.innerHTML = this.original
    if (this.hasSourceTarget) this.sourceTarget.value = this.original
    this.paint(this.evaluate(this.sectionTarget), this.sectionTarget)
  }

  keydown(event) {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
      event.preventDefault()
      this.applyAndCheck()
    }
  }

  applySource() {
    if (!this.hasSourceTarget || !this.hasSectionTarget) return null
    this.sectionTarget.innerHTML = this.sourceTarget.value
    this.sectionTarget.querySelectorAll("script").forEach((node) => node.remove())
    this.sourceTarget.value = this.normalize(this.sectionTarget.innerHTML)
    return this.sectionTarget
  }

  normalize(html) {
    return html.replace(/^\s+|\s+$/g, "").replace(/\n[ \t]+\n/g, "\n\n").replace(/\n[ \t]+/g, "\n")
  }

  sectionForChoice(input) {
    return input.closest(".practice-choice")?.querySelector("[data-check-target='section']") || null
  }

  sectionToCheck() {
    if (this.hasChoiceTarget) {
      const selected = this.choiceTargets.find((input) => input.checked)
      return selected ? this.sectionForChoice(selected) : null
    }

    return this.hasSectionTarget ? this.sectionTarget : null
  }

  evaluate(root) {
    const catalog = Array.isArray(this.catalogValue) ? this.catalogValue : []
    const failures = []

    catalog.forEach((rule) => {
      const checker = CHECKERS[rule.id]
      if (typeof checker !== "function") return
      const details = checker(root)
      if (details.length) failures.push({ ...rule, details })
    })

    return { ok: failures.length === 0, failures, catalog }
  }

  paint(result, root, { moveFocus = true } = {}) {
    if (!this.hasResultsTarget) return

    this.clearChoiceMarks()
    this.resultsTarget.replaceChildren()
    this.resultsTarget.className = "check-results"
    this.resultsTarget.classList.add(result.ok ? "check-results--pass" : "check-results--fail")

    const status = document.createElement("p")
    status.className = "check-results__status"

    if (result.ok) {
      status.append("Correct. This section follows ")
      status.append(this.ruleListPhrase(result.catalog))
      status.append(".")
      this.resultsTarget.append(status)
      this.markChoice(root, true)
    } else {
      status.textContent = "This section does not follow:"
      const list = document.createElement("ul")
      result.failures.forEach((failure) => {
        const item = document.createElement("li")
        item.append(this.ruleLink(failure))
        if (failure.details?.length) {
          item.append(" — ")
          item.append(failure.details.join(" "))
        }
        list.append(item)
      })
      this.resultsTarget.append(status, list)
      this.markChoice(root, false)
    }

    if (moveFocus) this.resultsTarget.focus()
  }

  ruleListPhrase(catalog) {
    if (!catalog.length) return document.createTextNode("the rule")
    if (catalog.length === 1) return this.ruleLink(catalog[0])

    const wrap = document.createElement("span")
    catalog.forEach((rule, index) => {
      if (index > 0) wrap.append(index === catalog.length - 1 ? " and " : ", ")
      wrap.append(this.ruleLink(rule))
    })
    return wrap
  }

  ruleLink(rule) {
    const link = document.createElement("a")
    link.href = rule.path
    link.textContent = rule.title
    link.setAttribute("data-turbo", "false")
    return link
  }

  markChoice(root, ok) {
    const card = root?.closest?.(".practice-choice")
    if (!card) return
    card.classList.add(ok ? "is-pass" : "is-fail")
  }

  clearChoiceMarks() {
    this.element.querySelectorAll(".practice-choice.is-pass, .practice-choice.is-fail").forEach((card) => {
      card.classList.remove("is-pass", "is-fail")
    })
  }

  shuffleChoices() {
    if (this.choiceTargets.length < 2) return
    const cards = this.choiceTargets.map((input) => input.closest(".practice-choice")).filter(Boolean)
    const parent = cards[0]?.parentElement
    if (!parent) return

    for (let index = cards.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(Math.random() * (index + 1))
      const current = cards[index]
      cards[index] = cards[swap]
      cards[swap] = current
    }

    cards.forEach((card, index) => {
      const label = `Example ${String.fromCharCode(65 + index)}`
      const name = card.querySelector(".practice-choice__name")
      const input = card.querySelector("input")
      if (name) name.textContent = label
      if (input) input.setAttribute("aria-label", label)
      parent.append(card)
    })
  }
}
