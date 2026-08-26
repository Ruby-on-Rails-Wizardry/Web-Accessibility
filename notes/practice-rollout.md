# Practice / isolated-example rollout

Locator (pick) + constructed (fix) + isolated `{bad,good}` + in-house Check.

Last left off 2026-08-24 (`ecc19c0`): heading-elements copied the heading-order grain. Whole-project view: [../TODO.md](../TODO.md).

Per-rule leaves are this grain. Pattern families stay teaching hubs until a **combined** pick/fix exists for that group (slice 3). Suggested order after the prototype is deepened: heading family combined, then remaining HTML-snippet rules, then CSS/visual, then scenario.

---

## Where we left off

The sample that works:

```
rule page (The rule, Bad, Good, Not a pass, Official)
  ├── bad/   isolated live specimen   (example layout, Check scores <main>)
  ├── good/  isolated live specimen
  ├── pick/  locator item             (practice layout, score on select)
  └── fix/   constructed item         (practice layout, Apply then score)
```

Checkers take a DOM node and score only that node (and descendants). Failures name the rule and link to its page. Site chrome stays out of `<main>` so WAVE / axe / a heading list still see the specimen.

| id | Isolated pair | Pick pool | Pick shown | Fix | Checker |
| --- | --- | --- | --- | --- | --- |
| heading-order | Permits h1/h4 vs h1/h2 | 6 bad + 6 good in `data/heading_order_pick.yml` (no Permits) | **6** mixed; mark every card that follows the rule | draws from the bad pool | `heading_order_check.js` |
| heading-elements | Shipping `<p><strong>` vs `<h2>` | 6 + 6 in `data/heading_elements_pick.yml` (no Shipping) | **6** mixed; mark every card that follows the rule | draws from the bad pool | `heading_elements_check.js` |

Heading-order and heading-elements pick/fix now use the deeper grain (slices 1–2). Teaching pairs stay on the rule page and isolated live pages.

Isomorphic retest is still open on both nodes ([learn/heading-order.md](learn/heading-order.md), [learn/heading-elements.md](learn/heading-elements.md)). A larger evaluative pool *is* that retest, if the items are different surfaces from the teaching pair.

---

## Illustrative vs evaluative

Keep these as two jobs, not one snippet reused everywhere.

**Illustrative** (teaching):

- One labeled Bad and one labeled Good on the rule page.
- The same pair as isolated live pages (`source/learn/<rule>/{bad,good}.html.erb`).
- Banner says Good example / Bad example. Learner may Edit and Check. Tools scan `<main>`.
- Stable. Do not randomize. The Permits / Shipping pairs stay here.

A rule may add a second illustrative pair later if the first miss is not the only common miss (for heading-order: skip-from-h1 vs skip-inside-an-h2-section). Still labeled. Still not the test.

**Evaluative** (pick / fix):

- Unlabeled. Drawn from a pool in `data/<rule>_pick.yml` (and a fix pool, which may be the `bad` list or its own list).
- Several items per visit, mixed pass/fail, different surfaces from the teaching pair.
- Feedback from the checker, not from a Good/Bad label.

Do not put the teaching Permits pair in the pick/fix pools once those pools are large enough. If a pool is still small, it is fine for the teaching HTML to also appear there; mark the item `illustrative: true` so we can drop it from the draw later.

---

## Pick and fix: more than two

Two jobs. Do not make pick as heavy as fix.

### Pick — quick diagnostic

Today: `check_controller.js` `drawPair()` picks one bad and one good, shows two cards. Guessing is 50/50.

Target: show **four to six** unlabeled cards, mixed, at least two of each polarity. The learner marks **every card that follows the rule** (checkboxes, not a single A-or-B). Feedback is **on select**, not after a Check button.

- Select a card that follows the rule: mark it correct and collapse it (HTML / Rendered hide) so remaining cards have room.
- Select a miss: keep the card open and show the checker report on that card, with links to the rule(s). No modal. They can uncheck and keep going.
- When every good is selected and no miss is selected, the results strip says they got them all.

Do not label cards Good/Bad. Keep HTML + Rendered on each card until it collapses.

This is a locator: short feedback loop, cheap to retake. It is not the thorough constructed item.

Redrawing on each visit stays. The pool must be large enough that two visits are not the same set.

### Fix — thorough constructed item

Today: one specimen in the `.html.erb` body, always the illustrative miss.

Target: draw one (later: a short sequence) from a pool of failing specimens. Reset restores that draw, not a different item. After a pass, optional “another” draws the next miss — that is the isomorphic retest.

Apply still writes into `<main>` and scores that node. Do not copy parser-repaired HTML back into the textarea. Mismatched tags still fail Valid HTML and skip the other rules.

---

## Combined examples for a group of rules

A family (`kind: pattern`) or a tight pair of child rules can have **one specimen that can miss more than one cop**. The learner fixes what they notice. Whatever still fails is what to restudy — each failure already names the rule and links to its page.

This is not a substitute for per-rule pick/fix. Those stay the diagnostic and the drill. Combined is transfer: can they see both heading-elements and heading-order on the same outline?

**First group:** heading-elements + heading-order (the heading outline pair). Hang the combined leaves on [headings](../source/learn/headings.html.md) (`check_rules: heading-elements, heading-order`). Do not fold lists, tables, or link-purpose into that first specimen.

**Shape:**

- **Family pick** (still the quick diagnostic): cards mixed across “passes both,” “fails heading-elements,” “fails heading-order,” “fails both.” Mark every card that follows the whole group. A miss names the child rule that card failed.
- **Family fix** (the thorough one): one HTML blob that can contain a bold-as-heading *and* a skipped level (and later, only one of those). Apply scores every child checker. Leftover failures are the study list.

No isolated Bad/Good pages on the family. Those stay on the child rules. The family page stays the hub and grows Practice links to the combined leaves.

The Check catalog already accepts several `check_rules`. Combined work is mostly content + tree leaves, not a new scoring model.

Later groups, same idea: keyboard-access (operable + trap), form-errors (identification + suggestion), image alts (informative / decorative / functional), consistent-navigation, no-unexpected-change. Only after each child cop has its own checker.

---

## Tag good/bad with the rule set they meet

Profile names already live in prose under **Official** on each rule page. Examples do not inherit that as data, so a specimen cannot show which bar it is meant to pass or fail.

Put the tags in data, not only in sentences.

### On the rule (source of truth)

Frontmatter on `source/learn/<id>.html.md`, mirrored in `data/tree.yml` or a small `data/rules.yml` if tree.yml should stay a graph:

```yaml
sc:
  - "1.3.1"
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
```

Derive chips from [source/docs/wcag/success-criteria.html.md](../source/docs/wcag/success-criteria.html.md) (First / 508-W / ADA-II / 22-AA). Do not invent a second catalog.

A 2.1-only rule (`input-purpose`, `contrast-ui`, …) omits `section-508-web`. A 2.2-only rule (`target-size`, `accessible-authentication`, …) is `wcag-22-aa` only.

### On each example (page or pool item)

Inherit the rule’s SC and profiles unless the item is an explicit exception. Optional per-item override for mixed pools.

Isolated example frontmatter:

```yaml
of: heading-order
specimen: good   # or bad
sc: ["1.3.1"]
profiles:
  - section-508-web
  - ada-title-ii
  - wcag-22-aa
```

**Good** means: this specimen is meant to **meet** those profiles for those criteria.

**Bad** means: this specimen is meant to **fail** those profiles for those criteria.

Show the chips on the specimen / practice banner and on the rule Official block. **Never inside `<main>`** — tools must still see only the specimen.

On a 2.2-only good example, the chip set is the teaching: this meets `wcag-22-aa` and is out of scope for `section-508-web` / `ada-title-ii`.

---

## Iterative slices

Work these in order. Stop after a slice and verify in the browser (pick, fix, isolated pair, rule page) before the next.

### Slice 0 — data and chrome (no new rules)

- [x] Decide the YAML/frontmatter shape above; implement one helper that both the rule page and the example banner can call.
- [x] Render profile + SC chips outside `<main>` on specimen/practice banners, and next to **The rule** on the learn page (Official prose stays until chips replace it). Quote SC ids in YAML (`"1.3.1"`) so they do not become floats.
- [x] Update [quality-control.md](quality-control.md) §11a and §18: examples carry profile tags; chips are not in `<main>`; pick is still two cards until slice 1.

Frontmatter on the rule (`sc`, `profiles`). Isolated examples and practice inherit via `of:`. Helper: `helpers/scope_helpers.rb`. Partial: `source/_rule_scope.html.erb`. First tagged rules: heading-order, heading-elements (1.3.1; all three web profiles).

### Slice 1 — prove the grain on heading-order

- [x] Keep Permits as the illustrative pair (rule page + `bad/` + `good/`).
- [x] Grow / split the pool: evaluative items stay unlabeled; Permits is not in `data/heading_order_pick.yml`.
- [x] Pick shows 4–6 mixed cards; mark **every card that follows the rule**. Correct picks collapse; misses show the rule report on the card.
- [x] Fix draws from the bad pool, not a hard-coded Permits body. **Another example** draws a different miss.
- [x] Tags already inherit from slice 0.
- [x] Tick isomorphic retest in [learn/heading-order.md](learn/heading-order.md).

### Slice 2 — copy onto heading-elements

- [x] Same grain as slice 1. Shipping stays the illustrative pair (not in the pick/fix pool).
- [x] Same SC/profiles as heading-order (still 1.3.1).

### Slice 3 — combined heading family

- [x] Combined pick + fix on [headings](../source/learn/headings.html.md) scoring `heading-elements` and `heading-order` together.
- [x] Failures name the child rule(s) still missed and link there.
- [x] Do not add family isolated Bad/Good pages.

### Slice 4 — HTML-snippet rules, one cop at a time

For each id: illustrative pair on the rule page (already there) → isolated `{bad,good}` → checker → pick pool (≥4 bad, ≥4 good) → fix pool → tags → tree children → QC spot-check.

Combined family items for other patterns wait until those children have checkers.

Do not copy a rule’s specimen walkthrough onto tool pages; link the rule.

| Status | id | Title | Notes |
| --- | --- | --- | --- |
| done (thin) | heading-order | Do not skip heading levels | Slice 1 deepens this |
| done | heading-elements | Headings are heading elements | Slice 2 |
| done | lists | Lists are lists | same grain as heading-order |
| done | data-tables | Data tables have headers | same grain as heading-order |
| done | native-control | Native control before a custom widget | same grain as heading-order |
| done | visible-label | Visible label is the programmatic name | same grain as heading-order |
| done | placeholder-not-label | Placeholder is not a label | same grain as heading-order |
| done | informative-image-alt | Informative image needs a text alternative | same grain |
| done | decorative-image-silent | Decorative image is silent | same grain |
| done | functional-image-names-action | Functional image names the action | same grain |
| done | link-purpose | Link purpose in context | same grain |
| | accessible-name | Accessible name | |
| | name-role-value | Name, role, and value | overlap with native-control; keep this cop smaller |
| | label-in-name | Visible label is in the name | 2.1-only (`ada-title-ii`, `wcag-22-aa`) |
| | input-purpose | Identify input purpose | 2.1-only |
| | language-of-parts | Language of parts | |
| | error-identification | The error is identified in text | |
| | error-suggestion | Suggest a fix when you know one | |
| | keyboard-operable | Keyboard can operate it | |
| | no-keyboard-trap | No keyboard trap | interactive; checker must not trap the tester |
| | focus-order | Focus order matches meaning | |
| | color-not-only-cue | Color is not the only cue | |
| | images-of-text | Prefer real text to an image of text | |
| | meaningful-sequence | Meaningful sequence | CSS order vs DOM |
| | skip-link | Skip past repeated blocks | skip target is in `<main>` or the specimen *is* the page |
| | pointer-cancellation | Pointer cancellation | 2.1-only |
| | status-messages | Status messages are announced | 2.1-only |
| | no-change-on-focus | Focus does not change context | |
| | no-change-on-input | Changing a value does not navigate | |
| | consistent-identification | The same action keeps the same name | may need two named controls, not two pages |
| | audio-control | Audio does not play unchecked | no autoplay in the teaching specimen |

Awkward live specimens (still HTML, but the cop is not a fragment in `<main>`):

| Status | id | Title | Why it waits |
| --- | --- | --- | --- |
| | page-title | The document has a unique title | cop is `<title>` in `<head>` |
| | language-of-page | The page language is declared | cop is `lang` on `<html>` |
| | consistent-nav-order | Repeated navigation stays in order | needs two views |
| | captions | Captions for prerecorded video | media asset |

Do those after the fragment-shaped HTML rules, or with a documented exception (banner explains the specimen is the whole document).

### Slice 5 — CSS / visual rules

Checker has to look at computed style, not only tags. Same leaf set, different cop.

| Status | id | Title | Profiles |
| --- | --- | --- | --- |
| | contrast-text | Text contrast | all three |
| | contrast-ui | Non-text contrast | 2.1+ |
| | visible-focus | Focus must be visible | all three |
| | focus-not-obscured | Focus is not hidden behind chrome | 2.2 only |
| | target-size | Target size | 2.2 only |
| | text-spacing | Text spacing | 2.1+ |
| | resize-text | Text can resize | all three |
| | reflow | Reflow | 2.1+ |

### Slice 6 — scenario / prose rules

Bad/Good on the rule page is often a sentence, not a snippet. Live `<main>` specimens may be the wrong grain. Prefer a locator/constructed item that still uses the practice layout (pick among short scenarios, or a fix that is a short rewrite) when a DOM checker cannot score it.

| Status | id | Title | Profiles |
| --- | --- | --- | --- |
| | sensory-characteristics | Not only shape, size, or sound | all three |
| | character-key-shortcuts | Single-key shortcuts can be turned off | 2.1+ |
| | error-prevention | Review before an irreversible submit | all three |
| | redundant-entry | Do not ask for the same data twice | 2.2 only |
| | accessible-authentication | Accessible authentication | 2.2 only |
| | consistent-help | Help stays in the same place | 2.2 only |
| | multiple-ways | More than one way to find a page | all three (508 web only) |
| | pause-stop-hide | Pause, stop, or hide movement | all three |
| | timing-adjustable | Time limits can be extended | all three |
| | three-flashes | Nothing flashes more than three times | all three; do not put a flashing specimen on the page |
| | orientation | Do not lock orientation | 2.1+ |
| | content-on-hover | Content on hover or focus | 2.1+ |
| | pointer-gestures | No path-only gesture | 2.1+ |
| | dragging | Dragging has a simple alternative | 2.2 only |
| | motion-actuation | Motion is not the only input | 2.1+ |

### Slice 7 — not this leaf set

Pattern families stay teaching hubs for isolated Bad/Good. Combined pick/fix (slice 3, then later families) is the family-level item. Do not copy a child rule’s specimen walkthrough onto the hub.

Foundations and orientation keep Bad/Good as teaching. Their locator/constructed items stay in [learn/](learn/) as text until we have a reason to build live specimens: equal-worth, not-identical-capacity, comparable-access, web-for-everyone, pour, who-is-shut-out, which-name, profiles, conformance.

---

## Per-rule build checklist

When a slice says “do this cop,” finish this list on that id before starting the next.

1. Confirm the one-line mastery criterion in `notes/learn/<id>.md`.
2. Illustrative Bad/Good on the rule page (already there for almost every rule).
3. Isolated `{bad,good}` pages, `example` layout, no extra headings in `<main>`.
4. Frontmatter / YAML: `sc`, `profiles`. Chips on Official and on the banners.
5. Checker module; register in `check_controller.js`. Scores only the given node.
6. Evaluative pool: at least four bad and four good, different surfaces from the teaching pair.
7. Pick page shows 4–6 mixed cards.
8. Fix page draws from the failing pool.
9. Tree: add `*-bad`, `*-good`, `*-pick`, `*-fix` children; link them from the rule page Practice section.
10. Tick locator / constructed / isomorphic in `notes/learn/<id>.md`.
11. Browser-check: rule page, both specimens (Check + a heading-list or axe pass/fail as appropriate), pick, fix, mobile width.

---

## Later — Screen reader sees

Pick and fix already show **HTML** and **Rendered**. A third pane that approximates what a screen reader would announce (heading list, accessible names) is deferred. It is not a real screen reader; say so when we build it. Do not put that chrome in `<main>`.

---

## Counts

58 rule nodes in the original table. Pattern families (6) stay hubs. 2 rules have the thin prototype. Slices 3–5 are the remaining 56, in three grains so we do not force a heading-order-shaped specimen onto a login-puzzle rule.
