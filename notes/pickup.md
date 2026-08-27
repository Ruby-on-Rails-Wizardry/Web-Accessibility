# Pickup — 2026-08-27

Resume here. Do not re-inventory the grain. Contract: [practice-rollout.md](practice-rollout.md). Whole-project: [../TODO.md](../TODO.md).

## Today — checker libraries (shipped)

Mirror the 30 fragment cops as test libraries. Contract: [../checks/README.md](../checks/README.md). Detail: [section508-checks.md](section508-checks.md).

- Tests: pick-pool fixtures (`data/*_pick.yml`) against each cop. `bundle exec rake test` (JS + Ruby + Python). CI: `.github/workflows/test.yml`.
- JS: `source/javascripts/section508.js` (browser) + `checks/javascript` (jsdom / node:test).
- Ruby: `checks/ruby` for HTML strings, Nokogiri, RSpec, Rails `response`.
- Python: `checks/python` for HTML strings, pytest, Playwright, Selenium.
- Fixed `language-of-parts`: a lang switch only counts when an ancestor also has `lang`.

Did not publish the local `saving work in progres` commit (Playwright dumps + `heading-elements-fix-mobile.png`). Those stay gitignored.

Family combined pick/fix now exists for headings, form-errors, no-unexpected-change, and keyboard-access. Image-family combined waits: the three image cops assume one class per fragment.

Site self-check: `bundle exec rake test:site` (build + in-house cops on non-specimen pages + chrome presence). CI job `site` in `.github/workflows/test.yml`.

Default next: **C** (slice 5), or remaining A leftovers.

---

# Pickup — 2026-08-26 night

Resume here. Do not re-inventory the grain. Contract: [practice-rollout.md](practice-rollout.md). Whole-project: [../TODO.md](../TODO.md).

## State

- Branch: `master` at **`0aedfd6`** (sequence + pointer-cancellation).
- Remotes: pushed **github**, **gitlab**, **gluttony**. GitHub Pages deploys on `master`.
- Working tree leftover (do not commit): `.playwright-mcp/`, `heading-elements-fix-mobile.png`.
- Local preview: `bundle exec middleman serve` → http://127.0.0.1:4567 (restart after helper/layout/tree changes).

## Grain (do not reopen)

Rule page (The rule, Bad, Good, Not a pass, Official) → isolated `{bad,good}` → pick → fix. Pick: 4–6 mixed cards; mark **every** card that follows the rule; goods collapse; misses show the checker report on the card. Fix: draw from the bad pool; Apply writes `<main>` and scores that node; **Another example** draws a different miss. Chips inherit `sc` / `profiles` via `of:` and never go in `<main>`. Checkers in `source/javascripts/<id>_check.js`, registered in `check_controller.js`. Quote SC ids in YAML (`"1.3.1"`). 2.1-only omits `section-508-web`. 2.2-only is `wcag-22-aa` only. Say **accessibility**, not a11y. Lab voice stays in `notes/`.

Name-role-value stays smaller than native-control (custom widgets, not every clickable div). Skip-link specimens must not nest `<main>` or reuse page `id="main"`.

## What shipped 2026-08-26 (this wrap)

`6278bcf` label-in-name, input-purpose, language-of-parts, error-identification, error-suggestion.

`02cb6c5` accessible-name, name-role-value, images-of-text.

`3ebd733` skip-link, color-not-only-cue, keyboard-operable.

`48eb5cc` focus-order, no-change-on-focus, no-change-on-input, audio-control, status-messages, consistent-identification. Also: `html_wellformed.js` quotes HTML boolean attributes for XML parse.

`0aedfd6` meaningful-sequence, pointer-cancellation.

Earlier the same grain: lists, data-tables, native-control, visible-label, placeholder-not-label, image alts, link-purpose, heading family combined.

## Tomorrow — pick one track (need a call on A)

**A. Whole-document examples** (open in a new window):

Cops that cannot live as a fragment in `<main>` get a host example plus **Open example in a new window**. The window is the real document (`<title>`, `lang` on `<html>`, or a live trap). Close that tab to leave. Layout: `source/layouts/window.erb`. Path: `/learn/<id>/bad/window/` (and `good`).

| id | Status |
| --- | --- |
| page-title | host + window (bad/good) |
| language-of-page | host + window (bad/good) |
| no-keyboard-trap | host + window; live Tab trap only in the window |
| consistent-nav-order | still open: two windows (two views) |
| captions | still open: window with a tiny silent `<video>` + track |

**B. Family combined**

- headings — done
- form-errors — done
- no-unexpected-change — done
- keyboard-access — done (trap cop uses `data-trap`; pick/fix do not run a live trap)
- decorative-vs-informative-image — still open: cops assume one image class per fragment
- consistent-navigation — waits on consistent-nav-order

**C. Slice 5** — CSS/visual, computed style: contrast-text first, then contrast-ui, visible-focus, … See the slice 5 table in [practice-rollout.md](practice-rollout.md).

Default if nobody is here to choose: **C**, then remaining A leftovers.

## Gotchas worth remembering

- Checkers query the preview section, not the whole card (pick checkboxes used to match `querySelector('input')`).
- Pick cards are a `div`; the checkbox has its own `label` so rule links do not toggle the card.
- Unique `id`s across pick-form goods so six cards do not clash.
- `void` elements must self-close for XML well-formedness; boolean attrs now get `attr="attr"`.
- YAML tree insert: keep existing `children` (visible-label under accessible-name, error-suggestion under error-identification, …). Load with `aliases: true`. Do not dump the whole tree (destroys aliases).
- Do not put a flashing specimen on three-flashes (slice 6).
- Screen Reader pane is after Rendered on pick / fix / isolated examples (not a real screen reader; not in `<main>`). Compact widths use Error / HTML / Rendered / Screen Reader tabs.
