import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { check, parse } from "../index.js"

describe("check API", () => {
  it("accepts an HTML string", () => {
    const result = check("<h1>Menu</h1><h4>Soup</h4>", { rules: ["heading-order"] })
    assert.equal(result.ok, false)
    assert.equal(result.failures[0].id, "heading-order")
    assert.ok(result.failures[0].title)
    assert.ok(result.failures[0].details.length)
  })

  it("accepts a DOM node", () => {
    const root = parse("<h1>Menu</h1><h2>Soup</h2>")
    const result = check(root, { rules: ["heading-order"] })
    assert.equal(result.ok, true)
    assert.deepEqual(result.failures, [])
  })

  it("filters 2.1-only rules out of section-508-web", () => {
    const html = "<button aria-label=\"Save file\">Delete</button>"
    const all = check(html, { rules: ["label-in-name"] })
    const filtered = check(html, { rules: ["label-in-name"], profile: "section-508-web" })
    assert.equal(all.ok, false)
    assert.equal(filtered.ok, true)
  })
})
