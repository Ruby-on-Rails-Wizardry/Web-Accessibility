import { JSDOM } from "jsdom"
import { check as checkNode, CHECKS } from "../../source/javascripts/section508.js"
import { decorate, ruleIds } from "./catalog.js"

export { CHECKS }

export function parse(html) {
  const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="root">${html}</div></body></html>`)
  return dom.window.document.getElementById("root")
}

export function check(source, options = {}) {
  const root = typeof source === "string" ? parse(source) : source
  const ids = ruleIds(options)
  const result = checkNode(root, { rules: ids })
  return decorate(result)
}
