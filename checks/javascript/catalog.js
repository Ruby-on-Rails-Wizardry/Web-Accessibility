import { readFileSync } from "node:fs"
import { parse } from "yaml"

const catalog = parse(readFileSync(new URL("../catalog.yml", import.meta.url), "utf8"))

export const RULES = Object.fromEntries((catalog.rules || []).map((rule) => [rule.id, rule]))

export function ruleIds({ rules, profile } = {}) {
  let ids = Array.isArray(rules) && rules.length ? [...rules] : (catalog.rules || []).map((rule) => rule.id)
  if (profile) {
    ids = ids.filter((id) => (RULES[id]?.profiles || []).includes(profile))
  }
  return ids
}

export function decorate(result) {
  const failures = (result.failures || []).map((failure) => {
    const meta = RULES[failure.id] || {}
    return {
      id: failure.id,
      title: meta.title || failure.id,
      details: failure.details || []
    }
  })
  return { ok: failures.length === 0, failures }
}
