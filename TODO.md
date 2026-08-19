# Project TODO

Last inventoried 2026-08-18. Knowledge-tree graph: `data/tree.yml`. Pages: `source/learn/<id>.html.md`. Official library: `source/docs/`.

There is **no other TODO file**. Per-node checklists live in a `todo-box` at the bottom of each learn page. This file is the whole-project view.

The `/learn/` index already states the current gap: teaching pages exist; **evaluation items are still to write**.

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
| Profiles / agents | requirement profiles, reducing cognitive load |
| Orientation | which-name (508 vs WCAG vs ADA) |
| Bloom | **pointer only** → [Science-of-Math/Learning-for-Mastery](https://github.com/Science-of-Math/Learning-for-Mastery) (`~/Science-of-Math/Learning-for-Mastery`) |

Intentionally not snapshotted (live official tools): Quickref, full Understanding set, Techniques, full WCAG Rec, full ICT rule, BAD demo.

### Site

Middleman 4 site from the org template. Turbo + Stimulus. Knowledge tree, docs layouts, nav in `data/site.yml`. Save point: `8a7c057`.

### Knowledge tree (18 nodes, all have a page)

Tree ids match `source/learn/*.html.md` one-for-one.

| Layer | Kind | Nodes |
| --- | --- | --- |
| 0 Root | foundation | equal-worth |
| 1 Worth and access | foundation | not-identical-capacity, comparable-access |
| 2 How the web shuts people out | foundation | web-for-everyone, pour, who-is-shut-out |
| 3 Which bar | orientation | which-name, profiles, conformance |
| 4 First patterns | pattern | accessible-name, visible-label, placeholder-not-label, decorative-vs-informative-image, color-not-only-cue, headings, native-control, keyboard-access, visible-focus |

Each node has a short teaching page (why, contrast worse/better, official links) **and** an unfinished mastery box.

---

## Next — finish Learning for Mastery on existing nodes

Do this **before** adding new tree nodes. Same four checks on every page; draft one-liners are already on the page.

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

## Later — only after the 18 boxes close

- **More pattern nodes** (not in the tree yet): form labels/errors, contrast, reflow/text spacing, status messages, target size / dragging, accessible authentication. Add a `data/tree.yml` node **when** the page exists.
- **W3C Techniques good/bad index** — one Failure + one Sufficient per A/AA criterion, citing official URLs (RuboCop-shaped; we did not copy Techniques locally).
- **Publish** — `bundle exec rake publish` to GitHub Pages (`data/site.yml` already has `ruby-on-rails-wizardry.github.io/Web-Accessibility`). Confirm the Pages source before the first run.
- **Do not commit `build/`** — it is gitignored; a local build may still sit on disk.

Out of scope unless asked: submodule of Learning-for-Mastery; republishing Bloom/WCAG copyrighted full texts.

---

## How to work this list

Name the **node id** and the **mastery criterion**. One node at a time. Agents: read `data/tree.yml` + that page + `source/docs/profiles/` / catalog only if the node is about bars.
