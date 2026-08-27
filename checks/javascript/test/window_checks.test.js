import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { JSDOM } from "jsdom"
import { pageTitleCheck } from "../../../source/javascripts/page_title_check.js"
import { languageOfPageCheck } from "../../../source/javascripts/language_of_page_check.js"
import { noKeyboardTrapCheck } from "../../../source/javascripts/no_keyboard_trap_check.js"

function htmlRoot(source) {
  return new JSDOM(source).window.document.documentElement
}

describe("page-title", () => {
  it("fails a site-only title", () => {
    const root = htmlRoot("<!DOCTYPE html><html><head><title>City of Springfield</title></head><body></body></html>")
    assert.ok(pageTitleCheck(root).length)
  })

  it("passes a view-named title", () => {
    const root = htmlRoot("<!DOCTYPE html><html><head><title>Pay a parking ticket — City of Springfield</title></head><body></body></html>")
    assert.deepEqual(pageTitleCheck(root), [])
  })
})

describe("language-of-page", () => {
  it("fails a missing lang", () => {
    const root = htmlRoot("<!DOCTYPE html><html><head><title>Permisos</title></head><body></body></html>")
    assert.ok(languageOfPageCheck(root).length)
  })

  it("passes lang on html", () => {
    const root = htmlRoot('<!DOCTYPE html><html lang="es"><head><title>Permisos</title></head><body></body></html>')
    assert.deepEqual(languageOfPageCheck(root), [])
  })
})

describe("no-keyboard-trap", () => {
  it("fails data-trap", () => {
    const root = htmlRoot('<!DOCTYPE html><html><body><div data-trap="true"><input></div></body></html>')
    assert.ok(noKeyboardTrapCheck(root).length)
  })

  it("passes a dialog without a trap", () => {
    const root = htmlRoot('<!DOCTYPE html><html><body><div role="dialog"><button>Close</button></div></body></html>')
    assert.deepEqual(noKeyboardTrapCheck(root), [])
  })
})
