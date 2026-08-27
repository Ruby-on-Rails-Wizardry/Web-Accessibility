// Score the built site with in-house cops that fail when a miss is present
// (or that always apply to the document). Skip specimen, practice, and
// window pages — those are meant to fail. Also assert chrome that must exist.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs"
import { dirname, join, relative } from "node:path"
import { fileURLToPath } from "node:url"
import { JSDOM } from "jsdom"
import { check } from "../../source/javascripts/section508.js"

const here = dirname(fileURLToPath(import.meta.url))
const buildDir = process.env.BUILD_DIR || join(here, "../../build")

const SITE_RULES = [
  "page-title",
  "language-of-page",
  "heading-order",
  "heading-elements",
  "skip-link",
  "link-purpose",
  "keyboard-operable",
  "no-keyboard-trap",
  "no-change-on-focus",
  "no-change-on-input",
  "native-control",
  "focus-order",
  "placeholder-not-label",
  "meaningful-sequence",
  "pointer-cancellation",
  "accessible-name"
]

const SKIP_PAGE = /\/learn\/[^/]+\/(bad|good|pick|fix)(?:\/|$)/

function htmlFiles(dir, found = []) {
  if (!existsSync(dir)) return found
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    const stat = statSync(path)
    if (stat.isDirectory()) htmlFiles(path, found)
    else if (name.endsWith(".html")) found.push(path)
  }
  return found
}

function urlPath(file) {
  return `/${relative(buildDir, file).replaceAll("\\", "/")}`
}

function isSpecimen(url) {
  return SKIP_PAGE.test(`${url}/`) || url.includes("/window/")
}

function load(file) {
  return new JSDOM(readFileSync(file, "utf8"), { url: `https://example.invalid${urlPath(file)}` })
}

function failList(result) {
  return (result.failures || []).map((failure) => {
    const details = (failure.details || []).join(" ")
    return details ? `${failure.id}: ${details}` : failure.id
  })
}

const errors = []

function report(url, message) {
  errors.push(`${url} — ${message}`)
}

if (!existsSync(buildDir)) {
  console.error(`Build directory not found: ${buildDir}`)
  process.exit(1)
}

for (const file of htmlFiles(buildDir)) {
  const url = urlPath(file).replace(/\/index\.html$/, "/")
  if (isSpecimen(url)) continue

  const dom = load(file)
  const { document } = dom.window
  const result = check(document.documentElement, { rules: SITE_RULES })
  if (!result.ok) {
    failList(result).forEach((line) => report(url, line))
  }
}

function readPage(url) {
  const file = join(buildDir, url.replace(/^\//, ""), "index.html")
  if (!existsSync(file)) {
    report(`/${url}/`, "missing from the build")
    return ""
  }
  return readFileSync(file, "utf8")
}

const windowHosts = [
  "learn/page-title/bad",
  "learn/page-title/good",
  "learn/language-of-page/bad",
  "learn/language-of-page/good",
  "learn/no-keyboard-trap/bad",
  "learn/no-keyboard-trap/good"
]

for (const path of windowHosts) {
  const html = readPage(path)
  if (!html) continue
  if (!html.includes("Open example in a new window")) {
    report(`/${path}/`, "missing Open example in a new window")
  }
  if (html.includes("specimen-banner__check") || html.includes("specimen-banner__edit")) {
    report(`/${path}/`, "host window page still has Check or Edit")
  }
}

const isolated = readPage("learn/heading-order/bad")
if (isolated) {
  if (!isolated.includes("specimen-banner__check")) {
    report("/learn/heading-order/bad/", "missing Check")
  }
  if (isolated.includes("Open example in a new window")) {
    report("/learn/heading-order/bad/", "should not open in a new window")
  }
  if (!isolated.includes('data-panel="html"') || !isolated.includes("<h1>Permits</h1>")) {
    report("/learn/heading-order/bad/", "missing the example HTML")
  }
}

const windowPage = readPage("learn/page-title/bad/window")
if (windowPage) {
  if (!windowPage.includes("Close this example")) {
    report("/learn/page-title/bad/window/", "missing Close this example")
  }
  if (!windowPage.includes(">Check</button>")) {
    report("/learn/page-title/bad/window/", "missing Check")
  }
  if (!windowPage.includes("data-check-document-value=\"true\"")) {
    report("/learn/page-title/bad/window/", "Check is not scoring the document")
  }
  if (!/<title>\s*City of Springfield\s*<\/title>/i.test(windowPage)) {
    report("/learn/page-title/bad/window/", "tab title is not the specimen")
  }
}

const langGood = readPage("learn/language-of-page/good/window")
if (langGood && !/<html[^>]*\slang="es"/i.test(langGood)) {
  report("/learn/language-of-page/good/window/", "html lang is not es")
}

const langBad = readPage("learn/language-of-page/bad/window")
if (langBad && /<html[^>]*\slang=/i.test(langBad)) {
  report("/learn/language-of-page/bad/window/", "bad window should not set lang on html")
}

const trapHost = readPage("learn/no-keyboard-trap/bad")
if (trapHost && trapHost.includes("data-trap")) {
  report("/learn/no-keyboard-trap/bad/", "live trap leaked onto the host")
}

const trapWindow = readPage("learn/no-keyboard-trap/bad/window")
if (trapWindow && !trapWindow.includes("data-trap")) {
  report("/learn/no-keyboard-trap/bad/window/", "missing data-trap on the live trap")
}

if (errors.length) {
  console.error(`${errors.length} site check failure(s):`)
  errors.forEach((line) => console.error(`  ${line}`))
  process.exit(1)
}

console.log("Site checks passed.")
