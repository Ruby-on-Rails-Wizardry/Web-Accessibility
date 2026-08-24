# Project TODO

Last inventoried 2026-08-24. Knowledge-tree graph: `data/tree.yml`. Pages: `source/learn/<id>.html.md`. Official library: `source/docs/`.

There is **no other TODO file**. Per-node checklists live in a `todo-box` at the bottom of each learn page. This file is the whole-project view.

The `/learn/` index already states the current gap: teaching pages (including one-rule leaves with bad/good examples) exist; **evaluation items are still to write**.

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
| Definitions | DHS 508 Training (`dhs.gov/508-training`), E103.4 defined terms, GSA glossary pointer |
| Profiles / agents | requirement profiles, reducing cognitive load |
| Orientation | which-name (508 vs WCAG vs ADA) |
| Bloom | **pointer only** → [Science-of-Math/Learning-for-Mastery](https://github.com/Science-of-Math/Learning-for-Mastery) (`~/Science-of-Math/Learning-for-Mastery`) |

Intentionally not snapshotted (live official tools): Quickref, full Understanding set, Techniques, full WCAG Rec, full ICT rule, BAD demo.

### Site

Middleman 4 site from the org template. Turbo + Stimulus. Knowledge tree, docs layouts, nav in `data/site.yml`. Save point: `8a7c057`.

### Knowledge tree (73 nodes, all have a page)

Tree ids match `source/learn/*.html.md` one-for-one.

| Layer | Kind | Count |
| --- | --- | --- |
| 0 Root | foundation | 1 (equal-worth) |
| 1 Worth and access | foundation | 2 |
| 2 How the web shuts people out | foundation | 3 |
| 3 Which bar | orientation | 3 |
| 4 Families / rules | pattern + rule | 51 |
| 5 Split rules | rule | 13 |

`kind: pattern` is a **family** (not one cop). Six families: decorative-vs-informative-image, headings, keyboard-access, form-errors, consistent-navigation, no-unexpected-change.

`kind: rule` is one requirement with **The rule**, Bad, Good, Not a pass, and Official (profile tags). Not one page per W3C technique ID.

**Split out of families (2026-08-24):** informative-image-alt, decorative-image-silent, functional-image-names-action, heading-elements, heading-order, keyboard-operable, no-keyboard-trap, error-identification, error-suggestion, consistent-nav-order, consistent-identification, no-change-on-focus, no-change-on-input.

Each node has a teaching page **and** an unfinished mastery box.

---

## Next — finish Learning for Mastery on every node

Rule leaves now exist. Same four checks on every page; draft one-liners are already in the `todo-box`.

For each node:

1. Confirm the one-line mastery criterion (Apply-level, not recall of a slogan).
2. Locator item (spot the miss in a short scenario or snippet).
3. Constructed item (fix or classify; stepped fields where the page already says so).
4. Isomorphic retest item.
5. Remove the `todo-box` when those four exist.

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

No locator/constructed **format** is coded yet (no YAML of items, no quiz UI). First items can stay as Markdown on the node. A shared item shape can wait until two or three nodes have working examples.

---

## Later — after mastery items exist on the spine (and then the rest)

Media sisters not given their own node (mentioned under captions): **1.2.1** audio-only/video-only, **1.2.3** / **1.2.5** audio description, **1.2.4** live captions.

Still not tree nodes: AAA criteria, 508 hardware / functional performance, COGA-only patterns. Technique **IDs** are indexed at [source/docs/wcag/techniques-index.html.md](source/docs/wcag/techniques-index.html.md) (`data/techniques.yml`); we do not make a learn page per ID.

- **Publish** — GitHub Pages from Actions on this repo: [https://ruby-on-rails-wizardry.github.io/Web-Accessibility/](https://ruby-on-rails-wizardry.github.io/Web-Accessibility/). Workflow: `.github/workflows/pages.yml`.
- **Do not commit `build/`** — it is gitignored; a local build may still sit on disk.

Out of scope unless asked: submodule of Learning-for-Mastery; republishing Bloom/WCAG copyrighted full texts.

---

## How to work this list

Name the **node id** and the **mastery criterion**. One node at a time. Agents: read `data/tree.yml` + that page + `source/docs/profiles/` / catalog only if the node is about bars.
