import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { parse } from "../index.js"
import { screenReaderText } from "../../../source/javascripts/screen_reader_text.js"

function speak(html) {
  return screenReaderText(parse(html))
}

describe("screenReaderText", () => {
  it("announces heading levels", () => {
    const text = speak("<h1>Lunch menu</h1><h4>Starters</h4>")
    assert.match(text, /Heading 1, Lunch menu/)
    assert.match(text, /Heading 4, Starters/)
  })

  it("does not call a bold paragraph a heading", () => {
    const text = speak("<p><strong>Store hours</strong></p><p>Open daily 9 to 6</p>")
    assert.equal(text.includes("Heading"), false)
    assert.match(text, /Store hours/)
    assert.match(text, /Open daily 9 to 6/)
  })

  it("keeps empty alt silent and missing alt unlabeled", () => {
    assert.equal(speak('<img alt="">'), "")
    assert.match(speak("<img>"), /Image, unlabeled/)
    assert.match(speak('<img alt="Map of the two park trails">'), /Image, Map of the two park trails/)
  })

  it("names links and native lists", () => {
    assert.match(speak('<a href="/hours">Hours</a>'), /Link, Hours/)
    const list = speak("<ul><li>Flour</li><li>Water</li></ul>")
    assert.match(list, /List, 2 items/)
    assert.match(list, /Bullet Flour/)
    assert.equal(speak("<div>Flour</div><div>Water</div>").includes("List"), false)
  })

  it("uses the associated visible label as the field name", () => {
    const text = speak('<label for="name-ok">Name</label><input id="name-ok" type="text">')
    assert.match(text, /Edit, Name/)
  })
})
