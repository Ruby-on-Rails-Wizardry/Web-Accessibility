import { Controller } from "./stimulus.js"
import { headingOrderCheck } from "./heading_order_check.js"
import { headingElementsCheck } from "./heading_elements_check.js"
import { listsCheck } from "./lists_check.js"
import { dataTablesCheck } from "./data_tables_check.js"
import { nativeControlCheck } from "./native_control_check.js"
import { visibleLabelCheck } from "./visible_label_check.js"
import { htmlWellFormed } from "./html_wellformed.js"

const CHECKERS = {
  "heading-order": headingOrderCheck,
  "heading-elements": headingElementsCheck,
  lists: listsCheck,
  "data-tables": dataTablesCheck,
  "native-control": nativeControlCheck,
  "visible-label": visibleLabelCheck
}

const PICK_DRAW = 6

export default class extends Controller {
  static targets = ["section", "choice", "results", "button", "source", "pool", "cardTemplate", "another"]
  static values = { catalog: Array }

  connect() {
    if (this.hasButtonTarget) this.buttonTarget.hidden = false

    if (this.hasCardTemplateTarget) {
      this.drawSet()
      this.shuffleChoices()
      return
    }

    if (this.hasSourceTarget) {
      this.drawFix()
      if (this.hasAnotherTarget && this.poolList("bad").length > 1) this.anotherTarget.hidden = false
      return
    }

    if (this.hasSectionTarget) this.original = this.normalize(this.sectionTarget.innerHTML)
  }

  drawSet() {
    if (!this.hasCardTemplateTarget) return

    const grid = this.element.querySelector(".practice-choices__grid")
    if (!grid) return

    const badPool = this.poolList("bad")
    const goodPool = this.poolList("good")
    if (!badPool.length || !goodPool.length) return

    const total = Math.min(PICK_DRAW, badPool.length + goodPool.length)
    const minBad = Math.max(1, total - goodPool.length)
    const maxBad = Math.min(badPool.length, Math.max(minBad, total - 1))
    const twoEach = badPool.length >= 2 && goodPool.length >= 2 && total >= 4
    const low = twoEach ? Math.max(2, total - goodPool.length) : minBad
    const high = twoEach ? Math.min(badPool.length, total - 2) : maxBad
    const badCount = low + Math.floor(Math.random() * (Math.max(high, low) - low + 1))
    const goodCount = total - badCount

    const cards = [
      ...this.sample(badPool, badCount),
      ...this.sample(goodPool, goodCount)
    ].map((html) => this.buildCard(html))

    grid.replaceChildren(...cards)
  }

  drawFix({ exclude } = {}) {
    const html = this.pickOne(this.poolList("bad"), exclude)
    if (!this.hasSectionTarget || !this.hasSourceTarget) return

    if (html) {
      this.sourceTarget.value = html
      this.sectionTarget.innerHTML = html
    }

    this.original = this.normalize(this.sectionTarget.innerHTML)
    if (!html) this.sourceTarget.value = this.original
  }

  buildCard(html) {
    const card = this.cardTemplateTarget.content.querySelector(".practice-choice").cloneNode(true)
    const code = card.querySelector(".practice-choice__source code")
    const preview = card.querySelector(".practice-preview")
    if (code) code.textContent = html
    if (preview) preview.innerHTML = html
    return card
  }

  poolData() {
    if (!this.hasPoolTarget) return null
    try {
      return JSON.parse(this.poolTarget.textContent)
    } catch {
      return null
    }
  }

  poolList(key) {
    const list = this.poolData()?.[key]
    return Array.isArray(list) ? list.filter((item) => item && String(item).trim()) : []
  }

  sample(list, count) {
    const items = [...list]
    const picked = []
    while (items.length && picked.length < count) {
      const index = Math.floor(Math.random() * items.length)
      picked.push(items.splice(index, 1)[0])
    }
    return picked
  }

  pickOne(list, exclude) {
    const skip = exclude == null ? "" : this.normalize(exclude)
    const items = list.filter((item) => this.normalize(item) !== skip)
    const pool = items.length ? items : list
    if (!pool.length) return null
    return pool[Math.floor(Math.random() * pool.length)]
  }

  run(event) {
    const chosen = event?.target && this.choiceTargets.includes(event.target) ? event.target : null
    const root = chosen ? this.sectionForChoice(chosen) : this.sectionToCheck()
    if (!root) return
    this.paint(this.evaluate(root), root, { moveFocus: !chosen })
  }

  choiceChange(event) {
    const input = event?.target
    if (!input || !this.choiceTargets.includes(input)) return
    this.scoreChoice(input)
    this.updateSetStatus()
  }

  scoreChoice(input) {
    const card = input.closest(".practice-choice")
    const root = this.sectionForChoice(input)
    const report = card?.querySelector(".practice-choice__report")
    const status = card?.querySelector(".practice-choice__status")
    const grid = this.element.querySelector(".practice-choices__grid")
    const done = this.element.querySelector(".practice-choices__done")
    if (!card || !root) return

    card.classList.remove("is-pass", "is-fail", "is-compact")
    if (status) status.textContent = ""
    if (report) {
      report.replaceChildren()
      report.hidden = true
    }

    if (!input.checked) {
      if (grid && card.parentElement !== grid) grid.append(card)
      return
    }

    const result = this.evaluate(root)
    if (result.ok) {
      card.classList.add("is-pass", "is-compact")
      if (status) status.textContent = "Follows the rule."
      if (done) done.append(card)
      return
    }

    card.classList.add("is-fail")
    if (!report) return
    report.hidden = false
    const lead = document.createElement("p")
    lead.textContent = "This example does not follow:"
    const list = document.createElement("ul")
    result.failures.forEach((failure) => {
      const item = document.createElement("li")
      item.append(this.ruleName(failure))
      if (failure.details?.length) {
        item.append(" — ")
        item.append(failure.details.join(" "))
      }
      list.append(item)
    })
    report.append(lead, list)
  }

  updateSetStatus() {
    if (!this.hasResultsTarget || !this.hasChoiceTarget) return

    const cards = this.choiceTargets.map((input) => {
      const root = this.sectionForChoice(input)
      return { selected: input.checked, follows: this.evaluate(root).ok }
    })
    const complete = cards.length > 0 && cards.every((card) => card.selected === card.follows)

    this.resultsTarget.replaceChildren()
    this.resultsTarget.className = "check-results"
    if (!complete) return

    const catalog = Array.isArray(this.catalogValue) ? this.catalogValue : []
    this.resultsTarget.classList.add("check-results--pass")
    const status = document.createElement("p")
    status.className = "check-results__status"
    status.append("You marked every example that follows ")
    status.append(this.ruleListPhrase(catalog))
    status.append(".")
    this.resultsTarget.append(status)
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

  another() {
    this.drawFix({ exclude: this.original })
    if (this.hasResultsTarget) {
      this.resultsTarget.replaceChildren()
      this.resultsTarget.className = "check-results"
    }
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
    return this.sectionTarget
  }

  normalize(html) {
    return String(html).replace(/^\s+|\s+$/g, "").replace(/\n[ \t]+\n/g, "\n\n").replace(/\n[ \t]+/g, "\n")
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

    if (this.hasSourceTarget) {
      const details = htmlWellFormed(this.sourceTarget.value)
      if (details.length) {
        failures.push({
          id: "valid-html",
          title: "Valid HTML",
          path: null,
          details
        })
        return { ok: false, failures, catalog }
      }
    }

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
      const invalid = result.failures.some((failure) => failure.id === "valid-html")
      status.textContent = invalid ? "This HTML is not valid:" : "This section does not follow:"
      const list = document.createElement("ul")
      result.failures.forEach((failure) => {
        const item = document.createElement("li")
        if (failure.id === "valid-html" && failure.details?.length) {
          item.append(failure.details.join(" "))
        } else {
          item.append(this.ruleName(failure))
          if (failure.details?.length) {
            item.append(" — ")
            item.append(failure.details.join(" "))
          }
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

  ruleName(rule) {
    if (!rule.path) return document.createTextNode(rule.title)
    return this.ruleLink(rule)
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
