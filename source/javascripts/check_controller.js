import { Controller } from "./stimulus.js"
import { headingOrderCheck } from "./heading_order_check.js"

const CHECKERS = {
  "heading-order": headingOrderCheck
}

export default class extends Controller {
  static targets = ["section", "choice", "results", "button"]
  static values = { catalog: Array }

  connect() {
    if (this.hasButtonTarget) this.buttonTarget.hidden = false
    this.shuffleChoices()
  }

  run(event) {
    event?.preventDefault()
    const root = this.sectionToCheck()
    if (!root) return
    this.paint(this.evaluate(root), root)
  }

  sectionToCheck() {
    if (!this.hasChoiceTarget) {
      return this.hasSectionTarget ? this.sectionTarget : null
    }

    const selected = this.choiceTargets.find((input) => input.checked)
    if (!selected) {
      this.paint({
        ok: false,
        failures: [],
        catalog: this.catalogValue,
        message: "Pick an example first."
      }, null)
      return null
    }

    return selected.closest(".practice-choice")?.querySelector("[data-check-target='section']") || null
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

  paint(result, root) {
    if (!this.hasResultsTarget) return

    this.clearChoiceMarks()
    this.resultsTarget.replaceChildren()
    this.resultsTarget.className = "check-results"
    this.resultsTarget.classList.add(result.ok ? "check-results--pass" : "check-results--fail")

    const status = document.createElement("p")
    status.className = "check-results__status"

    if (result.message) {
      status.textContent = result.message
      this.resultsTarget.append(status)
      this.resultsTarget.focus()
      return
    }

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

    this.resultsTarget.focus()
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
      const name = card.querySelector(".practice-choice__name")
      if (name) name.textContent = `Example ${String.fromCharCode(65 + index)}`
      parent.append(card)
    })
  }
}
