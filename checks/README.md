# Section 508 / WCAG checkers

In-house cops used on the practice pages, mirrored so the same rules can run
in a browser, in JavaScript tests, in Ruby (RSpec / Rails / HTML strings),
and in Python (pytest / Playwright / Selenium / HTML strings).

These are **not** the official specifications and not a substitute for axe,
WAVE, ANDI, a keyboard pass, or a screen reader. They score the grain taught
on this site: one rule (or a listed set) against one HTML fragment.

## Layout

| Path | Role |
| --- | --- |
| `catalog.yml` | Rule ids, titles, SC, profiles. Quote SC ids. |
| `javascript/` | Node entry (`jsdom`) plus tests. Browser entry is `source/javascripts/section508.js`. |
| `ruby/` | `Section508.check` for strings, Nokogiri, Capybara `page`, Rails responses. |
| `python/` | `section508.check` for strings, BeautifulSoup, Playwright, Selenium. |

Each language keeps its own DOM adapter. Checker logic stays in that
language — do not call JS from Ruby or Python.

The Stimulus `check` controller on the site is UI only. It calls the JS
checkers and paints the report. Do not put page chrome inside a checker.

## API (same shape in every language)

```
check(source, rules=None, profile=None) -> Result
Result.ok        # true when nothing failed
Result.failures  # [{ id, title, details: [str] }, ...]
```

- `source` is an HTML string, a DOM node, or a test-page object (see adapters).
- `rules` is a list of catalog ids. Omit to run every implemented cop.
- `profile` (`section-508-web`, `ada-title-ii`, `wcag-22-aa`) keeps only
  rules tagged with that profile. Combined with `rules`, it is the intersection.
- A checker takes **one node** (and descendants). It does not walk the rest
  of the page. Empty `details` means that rule passed.

Fixture tests load `data/<id>_pick.yml`. Bad snippets must fail that rule;
good snippets must pass. `headings_pick.yml` runs `heading-elements` and
`heading-order` together.

## Run

From the repo root:

```bash
bundle exec rake test
```

Or one language:

```bash
# JavaScript (node:test + jsdom)
cd checks/javascript && npm test

# Ruby (RSpec + Nokogiri)
cd checks/ruby && bundle exec rspec

# Python (pytest + BeautifulSoup)
cd checks/python && python -m pytest
```

## Adapters

**JavaScript.** In the browser, pass an Element. In Node, pass a string
(parsed with jsdom) or a node. Playwright: take `innerHTML` of the node
and pass the string, or `page.evaluate` the browser module. Vitest / Jest /
Mocha: jsdom or happy-dom is enough for these fragment cops.

**Ruby.** `Section508.check(html)`, `Section508.check(nokogiri_node)`,
`Section508.check(page)` (Capybara), `Section508.check(response)` (Rails
`get` / `integration` — uses `body`). RSpec: `expect(html).to meet_section508("heading-order")`.
Minitest: `assert_section508 html, rules: ["heading-order"]`.

**Python.** `section508.check(html)`, a BeautifulSoup tree, a Playwright
`page` (`.content()`), a Selenium driver (`.page_source`), or a Requests
response (`.text`). Pytest: `section508.assert_ok(html, rules=["heading-order"])`.

## Adding a rule

1. Teach it on `source/learn/<id>/` with frontmatter `sc` / `profiles`.
2. Write `source/javascripts/<id>_check.js` (`(root) => string[]`).
3. Register it in `source/javascripts/section508.js`.
4. Add the row to `catalog.yml` (quote SC ids).
5. Port the cop to `checks/ruby/lib/section508/checks/` and
   `checks/python/src/section508/checks/`.
6. Add `data/<id>_pick.yml` and confirm `rake test` on all three languages.
