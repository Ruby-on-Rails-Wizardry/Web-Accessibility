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

Practice-grain pickup below is unchanged. Default next: **B then C**.

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

**A. Parked slice-4 exceptions** (need a decision before implementing):

| id | Blocker | Options to decide |
| --- | --- | --- |
| no-keyboard-trap | A live trap would trap the tester | `data-` convention the checker flags; static `onkeydown` text without `preventDefault`; or skip live specimens |
| page-title | Cop is `<title>` in `<head>` | Banner: specimen is the whole document; or keep as scenario/prose |
| language-of-page | Cop is `lang` on `<html>` | Same whole-document exception |
| consistent-nav-order | Needs two views | Two navs on one specimen (same trick as consistent-identification); or scenario pick |
| captions | Needs a media asset | Tiny silent `<video>` + track; or scenario pick without a file |

**B. Family combined** (no decision needed; children already have checkers):

- form-errors → error-identification + error-suggestion
- decorative-vs-informative-image → informative / decorative / functional
- no-unexpected-change → no-change-on-focus + no-change-on-input

Same shape as headings: pick/fix on the **family** hub, `check_rules` lists the children, no isolated Bad/Good on the hub. Keyboard-access still waits on no-keyboard-trap. Consistent-navigation waits on consistent-nav-order.

**C. Slice 5** — CSS/visual, computed style: contrast-text first, then contrast-ui, visible-focus, … See the slice 5 table in [practice-rollout.md](practice-rollout.md).

Default if nobody is here to choose: **B then C**, leave A until asked.

## Gotchas worth remembering

- Checkers query the preview section, not the whole card (pick checkboxes used to match `querySelector('input')`).
- Pick cards are a `div`; the checkbox has its own `label` so rule links do not toggle the card.
- Unique `id`s across pick-form goods so six cards do not clash.
- `void` elements must self-close for XML well-formedness; boolean attrs now get `attr="attr"`.
- YAML tree insert: keep existing `children` (visible-label under accessible-name, error-suggestion under error-identification, …). Load with `aliases: true`. Do not dump the whole tree (destroys aliases).
- Do not put a flashing specimen on three-flashes (slice 6).
- Parked: Screen Reader sees pane (not a real screen reader; not in `<main>`).
