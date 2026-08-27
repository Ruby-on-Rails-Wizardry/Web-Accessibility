import assert from "node:assert/strict"
import { readdirSync, readFileSync } from "node:fs"
import { describe, it } from "node:test"
import { parse } from "yaml"
import { check } from "../index.js"

const dataDir = new URL("../../../data/", import.meta.url)

function rulesFor(slug) {
  if (slug === "headings") return ["heading-elements", "heading-order"]
  return [slug.replaceAll("_", "-")]
}

function snippets(list) {
  return (list || []).map((item) => String(item).trim()).filter(Boolean)
}

for (const file of readdirSync(dataDir).filter((name) => name.endsWith("_pick.yml")).sort()) {
  const slug = file.replace(/_pick\.yml$/, "")
  const rules = rulesFor(slug)
  const pool = parse(readFileSync(new URL(file, dataDir), "utf8")) || {}
  const bad = snippets(pool.bad)
  const good = snippets(pool.good)

  describe(slug, () => {
    bad.forEach((html, index) => {
      it(`bad ${index} fails ${rules.join(", ")}`, () => {
        const result = check(html, { rules })
        assert.equal(result.ok, false, JSON.stringify(result.failures, null, 2))
      })
    })

    good.forEach((html, index) => {
      it(`good ${index} passes ${rules.join(", ")}`, () => {
        const result = check(html, { rules })
        assert.equal(result.ok, true, JSON.stringify(result.failures, null, 2))
      })
    })
  })
}
