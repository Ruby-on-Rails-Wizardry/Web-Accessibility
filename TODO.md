# Project TODO

Last inventoried 2026-08-26. Knowledge-tree graph: `data/tree.yml`. Pages: `source/learn/<id>.html.md`. Official library: `source/docs/`. Internal (not published): `notes/`.

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

## Next — deepen the example/practice grain, then roll it out

Left off 2026-08-24 at `ecc19c0`: the heading family has the full leaf set (rule page with Bad/Good, isolated live specimens, pick, fix, in-house Check). That is the sample. It is still thin as a *test*.

What exists today:

| Piece | heading-order | heading-elements | Other rules |
| --- | --- | --- | --- |
| Rule page Bad / Good snippet | yes (Permits) | yes (Shipping) | almost every rule page has a pair; most are snippets only |
| Isolated live `{bad,good}` | yes | yes | none |
| Pick | 6 mixed cards; mark every card that follows the rule | same | none |
| Fix | draws from the bad pool; **Another example** | same | none |
| Checker | `heading_order_check.js` | `heading_elements_check.js` | none |
| Profile / SC tags on examples | chips on rule + banners | same | none |
| Isomorphic retest | pick redraw + fix **Another example** | same | — |

Three changes to prove on **heading-order** (then copy to heading-elements) before rolling the grain to other rules:

1. **Separate illustrative from evaluative.** The labeled Bad/Good on the rule page and the isolated live pages are teaching specimens. Pick and fix draw from a larger unlabeled pool and must not be only the same Permits / Shipping pair.
2. **Pick and fix need more than two items.** Pick is a **quick diagnostic**: mark every card that follows the rule (4–6 mixed cards). Fix is the thorough constructed item, drawn from a pool.
3. **Tag good/bad with the rule set they meet.** Machine-readable success-criterion ids and profile names (`section-508-web`, `ada-title-ii`, `wcag-22-aa`) on the rule and on each example. Show chips on the rule Official block and on specimen banners (outside `<main>`). A good heading-order specimen meets 1.3.1 in all three profiles; a good target-size specimen meets 2.5.8 in `wcag-22-aa` only.
4. **Combined examples for a group.** After child rules have checkers, a family-level pick/fix can miss more than one cop on the same specimen. Leftover failures name the child rules to restudy. First group: heading-elements + heading-order, hung on `headings`.

Work one slice at a time. Detail and the remaining-rule list: [notes/practice-rollout.md](notes/practice-rollout.md).

| Slice | What |
| --- | --- |
| 0 | Data shape: SC + profiles on a rule; chips outside `<main>` — **done** |
| 1 | Prove it on heading-order: multi-select pick (every card that follows the rule), fix pool, keep Permits as the teaching specimen — **done** |
| 2 | Copy that grain onto heading-elements — **done** |
| 3 | Combined heading-family pick/fix (`heading-elements` + `heading-order`); failures name the child rule to restudy — **done** |
| 4 | Roll HTML-snippet rules, one cop at a time (next up: lists, data-tables, native-control, visible-label, …) |
| 5 | CSS / visual rules (contrast, focus, target size) |
| 6 | Scenario / prose rules (login puzzles, multi-page nav, motion) — may stay text items, not live `<main>` specimens |
| 7 | Foundations and orientation keep teaching Bad/Good; locator/constructed stay in [notes/learn/](notes/learn/), not this leaf set |

Pattern families do not get isolated Bad/Good pages. Combined pick/fix on the hub is the family-level item; per-rule leaves stay on the children.

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

Pick and fix already show HTML and Rendered. A third pane that approximates what a screen reader would announce (heading list, names) is deferred. Not a real screen reader. Notes: [notes/practice-rollout.md](notes/practice-rollout.md).

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
