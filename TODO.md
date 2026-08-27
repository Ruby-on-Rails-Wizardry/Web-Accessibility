# Project TODO

Last inventoried 2026-08-27. Knowledge-tree graph: `data/tree.yml`. Pages: `source/learn/<id>.html.md`. Official library: `source/docs/`. Internal (not published): `notes/`.

Per-node mastery checklists live in unpublished [notes/learn/](notes/learn/). Isolated-example and practice rollout: [notes/practice-rollout.md](notes/practice-rollout.md). This file is the whole-project view. Do not put “Still to write” on published pages.

---

## Done

### Official library (`source/docs/`)

Study guides with source blocks. Not the dated official specs.

| Area | Pages |
| --- | --- |
| WCAG | overview, at-a-glance, principles, documents, success-criteria catalog, what’s new 2.1 / 2.2, Understanding intro, conformance, WCAG2ICT |
| Section 508 | revised standards, applicability, laws and policies |
| ADA Title II | web and mobile rule |
| Cognitive | overview, Content Usable |
| Evaluation / ATAG | WCAG-EM, ATAG |
| Testing tools | index, DevTools, axe (install), WAVE, ANDI, screen reader (`source/docs/evaluation/testing-tools/`) |
| Definitions | DHS 508 Training (`dhs.gov/508-training`), E103.4 defined terms, GSA glossary pointer |
| Profiles / agents | requirement profiles, reducing cognitive load |
| Orientation | which-name (508 vs WCAG vs ADA) |
| Bloom | **pointer only** → [Science-of-Math/Learning-for-Mastery](https://github.com/Science-of-Math/Learning-for-Mastery) (`~/Science-of-Math/Learning-for-Mastery`) |

Intentionally not snapshotted (live official tools): Quickref, full Understanding set, Techniques, full WCAG Rec, full ICT rule, BAD demo.

### Site

Middleman 4 site from the org template. Turbo + Stimulus. Knowledge tree, docs layouts, nav in `data/site.yml`. Save point: `8a7c057`.

### Knowledge tree (81 nodes, all have a page)

Study nodes live at `source/learn/<id>.html.md`. Isolated examples live at `source/learn/<rule>/{bad,good}.html.erb`.

| Layer | Kind | Count |
| --- | --- | --- |
| 0 Root | foundation | 1 (equal-worth) |
| 1 Worth and access | foundation | 2 |
| 2 How the web shuts people out | foundation | 3 |
| 3 Which bar | orientation | 3 |
| 4 Families / rules | pattern + rule | 51 |
| 5 Split rules | rule | 13 |
| 6 Isolated examples | example | 4 (`heading-order` and `heading-elements` bad / good) |
| 6 Practice | practice | 4 (`heading-order` and `heading-elements` pick / fix) |

`kind: pattern` is a **family** (not one cop). Six families: decorative-vs-informative-image, headings, keyboard-access, form-errors, consistent-navigation, no-unexpected-change.

`kind: rule` is one requirement with **The rule**, Bad, Good, Not a pass, and Official (profile tags). Not one page per W3C technique ID.

`kind: example` is a **live specimen**: same site header as the rest of the site; no extra headings in `<main>`, so a heading list / WAVE / axe still sees only that markup. Edit on the page (Stimulus `specimen`) lets the learner change the HTML and apply it, then check again. Teaching pairs exist for `heading-order` and `heading-elements`. Other HTML-example rules can grow the same `{bad,good}` leaves later. Example nodes do not get a mastery checklist.

`kind: practice` is a **locator or constructed item** with an in-house **Check** (Stimulus `check`). Prototype: `heading-order` and `heading-elements` pick (choose the example that follows the rule) and fix (restore the markup). Check scores only the rules listed on that page. Failures name the rule and link to its page. Practice nodes do not get a mastery checklist — they *are* the items. Pick still shows two cards; that is the next grain change.

**Split out of families (2026-08-24):** informative-image-alt, decorative-image-silent, functional-image-names-action, heading-elements, heading-order, keyboard-operable, no-keyboard-trap, error-identification, error-suggestion, consistent-nav-order, consistent-identification, no-change-on-focus, no-change-on-input.

Each study node has a teaching page. Mastery items still to write: [notes/learn/](notes/learn/).

---

## Next — tests and mirrored checkers (JS, Ruby, Python)

The in-house cops live in `source/javascripts/*_check.js` and run on practice pages. There was no automated test suite. Mirror them as libraries so the same grain can score HTML in tests.

Contract: [checks/README.md](checks/README.md). Catalog: [checks/catalog.yml](checks/catalog.yml). Pickup notes: [notes/section508-checks.md](notes/section508-checks.md).

| Track | What |
| --- | --- |
| Tests for work so far | **done** — pick-pool fixtures (`data/*_pick.yml`). JS 375, Ruby 381, Python 380. Combined `headings_pick.yml` runs both heading cops. |
| JavaScript library | **done** for fragment cops. Browser: `source/javascripts/section508.js`. Node: `checks/javascript` (jsdom). Works with node:test, Vitest, Jest, Mocha, Playwright (HTML string or in-page). |
| Ruby library | **done** for fragment cops. `checks/ruby` — HTML strings, Nokogiri, Capybara `page`, Rails `response.body`. RSpec `meet_section508`, Minitest `assert_section508`. |
| Python library | **done** for fragment cops. `checks/python` — HTML strings, BeautifulSoup, Playwright `page.content()`, Selenium `page_source`, Requests `text`. `section508.assert_ok`. |
| Keep separate | One checker file per rule per language. Catalog is `checks/catalog.yml`. No JS-from-Ruby bridge. Site Stimulus controller stays UI-only. |

Run: `bundle exec rake test` (JS + Ruby + Python). CI: `.github/workflows/test.yml`. Not a replacement for axe / WAVE / keyboard / screen reader.

Later: publish as real packages (npm / gem / PyPI) only if another repo needs them. CSS/visual cops (slice 5) need computed style, so Playwright in-page checks, not HTML strings alone.

---

## Next — finish the practice grain, then CSS and scenario

Left off **2026-08-27**. Pickup: [notes/pickup.md](notes/pickup.md). Detail: [notes/practice-rollout.md](notes/practice-rollout.md).

Slices 0–3 are done. Slice 4 fragment-shaped HTML cops have isolated `{bad,good}` + pick + fix. Whole-document cops use **Open example in a new window**: page-title, language-of-page, no-keyboard-trap. Family combined pick/fix: headings, form-errors, no-unexpected-change, keyboard-access. Still open: consistent-nav-order (two views), captions (media), decorative-vs-informative-image combined (cops assume one image class per fragment).

| Slice | What |
| --- | --- |
| 0 | Data shape: SC + profiles on a rule; chips outside `<main>` — **done** |
| 1 | Prove it on heading-order: multi-select pick, fix pool, keep Permits as the teaching specimen — **done** |
| 2 | Copy that grain onto heading-elements — **done** |
| 3 | Combined heading-family pick/fix (`heading-elements` + `heading-order`) — **done** |
| 4 | HTML-snippet rules — **fragment-shaped done**; window leftovers and image-family combined in [notes/pickup.md](notes/pickup.md) |
| 5 | CSS / visual rules (contrast, focus, target size) — **next grain** |
| 6 | Scenario / prose rules (login puzzles, multi-page nav, motion) — may stay text items, not live `<main>` specimens |
| 7 | Foundations and orientation keep teaching Bad/Good; locator/constructed stay in [notes/learn/](notes/learn/), not this leaf set |

Optional before slice 5: family combined for **decorative-vs-informative-image** after the child cops can classify mixed images on one fragment. Pattern families still do not get isolated Bad/Good pages.

---

## Next — combined all-rule check

A learner grain that scores **one** specimen against every implemented fragment cop (transfer, not a substitute for per-rule pick/fix). Not built.

What *is* built: the **site** itself is scored with the cops that fail when a miss is present (plus document title, `lang`, skip link). Specimen, practice, and window pages are skipped — those are meant to fail. Chrome presence is asserted too (Open-in-new-window hosts, Check on isolated examples, trap stays off the host).

```
bundle exec rake test:site
```

CI: `.github/workflows/test.yml` job `site`. This is not a screenshot / visual-regression suite. Style work is still verified in a browser: interact, then confirm the right controls are visible (and hidden ones stay hidden) at desktop and compact widths. Playwright snapshots check the accessibility tree, not CSS `visibility`. Slice 5 (computed style) is the grain that will need a real layout engine.

---

## Next — finish Learning for Mastery on every node

Rule leaves now exist. Same four checks on every study node; draft one-liners are in [notes/learn/](notes/learn/). For **rule** nodes, locator/constructed/retest *are* pick/fix (slices above). This list is the spine and the remaining study nodes that are not that grain.

For each node:

1. Confirm the one-line mastery criterion (Apply-level, not recall of a slogan).
2. Locator item (spot the miss in a short scenario or snippet).
3. Constructed item (fix or classify; stepped fields where the page already says so).
4. Isomorphic retest item.
5. Tick the checks in `notes/learn/<id>.md` when those four exist.

Suggested order: walk the spine, not the file list — **equal-worth → comparable-access → pour → accessible-name → visible-label** (and the other layer-4 leaves in parallel once POUR is solid).

| id | Draft mastery (from the page; confirm, don’t invent a new bar) |
| --- | --- |
| equal-worth | Name shut-out as the problem, not “we’ll get to it later.” |
| not-identical-capacity | Offered service vs essential-ability job; refuse “not practical” as a first move on a form. |
| comparable-access | Name “the same task”; reject an unnecessary side door. |
| web-for-everyone | Restate universality; point at one unnecessary assumption. |
| pour | Name the POUR letter that failed and who cannot complete the task. |
| who-is-shut-out | Name at least one person who cannot complete the task. |
| which-name | Given context, name the usual bar; refuse treating 508 / WCAG / ADA as synonyms. |
| profiles | Pick a profile name and which catalog column to filter. |
| conformance | Refuse a page-level claim when a step in the process fails. |
| accessible-name | Say what the accessible name is (or that there is none). |
| visible-label | Associate a visible label; say why an unassociated `<label>` fails. |
| placeholder-not-label | Replace placeholder-only with a persistent label. |
| decorative-vs-informative-image | Classify decorative / informative / functional; matching `alt`. |
| color-not-only-cue | Add a non-color cue; refuse “color work is impossible.” |
| headings | Restore a sensible heading hierarchy from bold paragraphs. |
| native-control | Replace a clickable `div` with `button` or `a href`. |
| keyboard-access | Point at a mouse-only control or remove a trap. |
| visible-focus | Restore a visible focus indicator; refuse `outline: none` without a replacement. |

Locator/constructed format for rules: [notes/practice-rollout.md](notes/practice-rollout.md).

---

## Later — Screen reader sees

**Done (approximate).** Pick, fix, and isolated examples show **Screen Reader** after Rendered (outside `<main>`). Heading list and names, not NVDA/JAWS/VoiceOver. Wide: HTML beside Rendered / Screen Reader. Compact: Error / HTML / Rendered / Screen Reader tabs.

---

## Later — built-in browser tools on the knowledge tree

Library pointer exists: [source/docs/evaluation/testing-tools/devtools.html.md](source/docs/evaluation/testing-tools/devtools.html.md). A deeper **learn-tree** section (how to read the Accessibility Tree as a skill, with practice on specimens) is still unwritten. Nothing to install.

---

## Later — after mastery items exist on the spine (and then the rest)

Media sisters not given their own node (mentioned under captions): **1.2.1** audio-only/video-only, **1.2.3** / **1.2.5** audio description, **1.2.4** live captions.

Still not tree nodes: AAA criteria, 508 hardware / functional performance, COGA-only patterns. Technique **IDs** are indexed at [source/docs/wcag/techniques-index.html.md](source/docs/wcag/techniques-index.html.md) (`data/techniques.yml`); we do not make a learn page per ID.

Isolated `{bad,good}` leaves for other rules that already have HTML snippets — same `example` layout as heading-order. Tracked in the slice list above, not here.

- **Publish** — GitHub Pages from Actions on this repo: [https://ruby-on-rails-wizardry.github.io/Web-Accessibility/](https://ruby-on-rails-wizardry.github.io/Web-Accessibility/). Workflow: `.github/workflows/pages.yml`.
- **Do not commit `build/`** — it is gitignored; a local build may still sit on disk.

Out of scope unless asked: submodule of Learning-for-Mastery; republishing Bloom/WCAG copyrighted full texts.

---

## How to work this list

Name the **node id** and the **mastery criterion**. One node at a time. Agents: read `data/tree.yml` + that page + `source/docs/profiles/` / catalog only if the node is about bars.
