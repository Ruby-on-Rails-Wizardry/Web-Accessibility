# Page quality control

From the isolated-examples / testing-tools work (2026-08-24). Publishable `source/` is for the **learner**. Lab facts stay in `notes/`.

## Criteria

Apply when the page type has that job. A hub is not a specimen; a specimen is not a cop page.

### All published pages

1. **Do not orphan.** From any page the learner can reach Home, the knowledge tree, and the library without the back button. Header counts. Leaves also need a parent/section trail, not only global nav.
2. **Easy navigation.** Site title is **Web Accessibility** → Home. Org is the icon on the right (`aria-label` / `title` “Ruby on Rails Wizardry”). Sidebar: where you are (docs) or tree trace (learn), then On this page when that layout is used.
3. **Learner voice.** No host names, “on this machine,” “not installed here,” or author TODO. Those go in `notes/`. “Still to write (Learning for Mastery)” is unpublished (`notes/learn/`), not on the live page.
4. **Say accessibility**, not `a11y`, and no ally/enemy framing.
5. **Skip to content** present (site layout and example layout).

### Learn nodes (`learn` layout)

6. Tree id in frontmatter matches `data/tree.yml`. Trace / before / next / library in the sidebar.
7. `kind: rule` has The rule, Bad, Good on the page (or points at child rules if it is a family).
8. Isolated examples, if any, are linked from the rule page body. Sidebar: **Where you are**, previous/next on the tree, and a **Testing tools** link. Do not orphan a leaf.

### Isolated examples (`example` layout)

9. `<main>` is only the specimen. No extra headings in main.
10. Editor is **not** in the DOM until Edit; filled from `<main>`; removed on close.
11. Sidebar: abbreviated **Where you are** (knowledge tree → rule → this example), the other example, a single **Testing tools** link (not a list of tools). No heading elements in that chrome (tools must still see only the specimen).
12. Site header present. The strip above the red line is what this page is and how to check it, plus **Edit** and **Check** in the top-right of that strip — not a dump of nav links. Banner is not a heading. “Close Edit before you scan” lives in the editor panel, not the closed banner. **Check** scores `<main>` (apply first if the editor is open).

### Practice (`practice` layout)

18. **Pick:** two unlabeled-as-good/bad live examples; each card shows the HTML and how it renders. Choosing a card scores it immediately (no Check button). Check still scores the chosen rendered section.
19. **Fix:** `<main>` is the specimen. The editor is always on the page, labeled **HTML** / **Rendered** like pick. **Apply** writes into `<main>` and scores that node. No Close editor / Check in the banner. Do not tell the learner that the checker is scoped.
20. Check results live outside `<main>`. Chrome uses no heading elements. Failures list rules with links. This prototype catalogs **heading-order** only. In-house checkers take a DOM node and do not walk outside it.
21. Sidebar: Where you are (tree → rule → this page), both examples, both practice leaves, Testing tools. Do not orphan.

### Library / docs (`docs` layout)

13. Nested pages show **Where you are** (Library → … → this page). The `/docs/` index has no trail (it is the root).
14. Official source or product URL on the page (indexes may be maps only).
15. Tool pages link to rules to try; they do not copy a specimen’s bad/good markup.

### Tool pages specifically

16. Install/use for a **user** on Chrome/Chromium/Firefox/OS as relevant.
17. “Close Edit before scanning” where isolated examples apply.

---

## Page list

Counts: home 1, 404 1, learn index 1, learn nodes 73, isolated examples 2, practice 2, docs 43. Tree nodes 77 (73 study + 2 examples + 2 practice).

### Site chrome

| Page | Path |
| --- | --- |
| Home | `/` (`source/index.html.erb`) |
| Not found | `/404.html` (`source/404.html.erb`) |

### Knowledge tree

| Page | Path |
| --- | --- |
| Knowledge tree | `/learn/` |

Study nodes: `/learn/<id>/` from `source/learn/<id>.html.md` for every `data/tree.yml` id except examples and practice leaves.

Isolated examples:

| Page | Path |
| --- | --- |
| Bad example — skipped heading levels | `/learn/heading-order/bad/` |
| Good example — nested heading levels | `/learn/heading-order/good/` |
| Pick the example that follows the rule | `/learn/heading-order/pick/` |
| Fix the skipped headings | `/learn/heading-order/fix/` |

### Library

| Page | Path |
| --- | --- |
| Local documentation library | `/docs/` |
| Evaluation | `/docs/evaluation/` |
| WCAG-EM | `/docs/evaluation/wcag-em/` |
| Testing tools | `/docs/evaluation/testing-tools/` |
| DevTools Accessibility | `/docs/evaluation/testing-tools/devtools/` |
| axe DevTools | `/docs/evaluation/testing-tools/axe/` |
| WAVE | `/docs/evaluation/testing-tools/wave/` |
| ANDI | `/docs/evaluation/testing-tools/andi/` |
| Screen reader | `/docs/evaluation/testing-tools/screen-reader/` |
| plus remaining `source/docs/**/*.html.md` (profiles, WCAG, 508, ADA, cognitive, definitions, agents, authoring-tools, which-name, SOURCES, LICENSE-NOTES, learning pointer) | |

Full docs files: every `source/docs/**/*.html.md` (43 files). Full learn files: every `source/learn/*.html.md` (73) plus `index.html.erb` and `heading-order/{bad,good,pick,fix}.html.erb`.

---

## Audit (2026-08-24)

Layout guarantees (do not re-check per file unless the layout changes):

| Type | 1 orphan | 2 nav chrome | 5 skip | 6–8 tree | 9–12 specimen | 13 crumbs |
| --- | --- | --- | --- | --- | --- | --- |
| Home / 404 | header + explicit links | yes | yes | n/a | n/a | n/a |
| Learn index | header | yes | yes | no node (map only) | n/a | n/a |
| Learn node | tree-nav | yes | yes | yes | n/a | n/a |
| Isolated example | banner + header | yes | yes | parent rule | yes | n/a |
| Practice | banner + header | yes | yes | parent rule | n/a (18–21) | n/a |
| Docs nested | Where you are | yes | yes | n/a | n/a | yes |
| Docs `/docs/` | header | yes | yes | n/a | n/a | none (root) |

Spot-checks and content:

| Check | Result |
| --- | --- |
| Tree ids vs `source/learn/<id>.html.md` | 73/73 study nodes have a page. Examples are `heading-order/{bad,good}.html.erb`. |
| Lab voice in `source/` | Cleared from testing-tools pages. Remaining “Project-authored” on profiles/agents/LICENSE-NOTES is source-status, not host lab. |
| `a11y` in `source/` | None. |
| Tool pages copy Permits/`h4` walkthrough | Removed; they link [heading-order](/learn/heading-order/). |
| Example pages → Testing tools | Added on the specimen banner; rule page Check with tools links the hub. |
| 404 | Source lists Home, tree, and library (was docs only). `middleman serve` still shows Middleman’s own 404; the custom page is in `middleman build` / GitHub Pages. |

Re-audit when adding a layout, a new example pair, or a new docs section.
