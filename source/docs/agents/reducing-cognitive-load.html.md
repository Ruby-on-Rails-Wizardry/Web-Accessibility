---
title: Reducing developer cognitive load with agents
description: How to work this library with an agent without holding 80+ criteria in
  your head.
---

Project-authored working method. Official hooks: [ATAG 2.0 Part B](https://www.w3.org/TR/ATAG20/) (help authors produce accessible content), [WCAG 2 documents](https://www.w3.org/WAI/standards-guidelines/wcag/docs/) (load Understanding/Techniques, not the whole Recommendation), [Content Usable](https://www.w3.org/TR/coga-usable/) (one task, visible next step, no redundant entry — for the *developer* as well as the end user).

The problem this repo exists to solve: a developer asked to “make it 508 / WCAG / ADA compliant” is handed three names, four WCAG editions, three levels, plus hardware chapters, plus cognitive notes that are not even in the standard. Holding that graph in working memory while writing a form is how criteria get missed.

An agent should carry the graph. The developer should name a **profile**, a **surface**, and accept or reject concrete diffs.

## 1. Name the profile first

Do not say “make it accessible.” Say:

> Profile: `wcag-22-aa`. Surface: the login form in `app/views/sessions/new.html.erb`. Use `source/docs/profiles/requirement-profiles.html.md` and filter `source/docs/wcag/success-criteria.html.md`.

Profiles: [../profiles/requirement-profiles.md](../profiles/requirement-profiles/).

If the project has mixed obligations (federal vendor + public state site), pick the **stricter union** and label extras so a 508 report is not polluted with 2.2-only findings.

## 2. Load a thin slice, not the library

| Developer is doing | Agent reads |
| --- | --- |
| Choosing the bar | `source/docs/profiles/requirement-profiles.html.md` only |
| Implementing a surface | Catalog rows for that surface + those Understanding URLs |
| Writing a conformance note | `source/docs/wcag/conformance.html.md` + profile card |
| Building an authoring tool / generator | `source/docs/authoring-tools/atag.html.md` + 508 §504 |
| After AA passes, improving usability | `source/docs/cognitive/coga-usable.html.md` (advisory) |

Do **not** paste WCAG 2.2, all Understanding docs, and the ICT rule into one context window. That recreates the overload this library is meant to prevent.

W3C already designed this layering: Quick Reference → Understanding → Techniques. The agent should follow it. Local: [../wcag/documents.md](../wcag/documents/).

## 3. Work one surface at a time

From the catalog’s surface filters:

| Surface | Ask the agent to check |
| --- | --- |
| Images | 1.1.1, 1.4.5, 1.4.11 |
| Media | 1.2.1–1.2.5, 1.4.2 |
| Structure | 1.3.1, 1.3.2, 2.4.1, 2.4.2, 2.4.6 |
| Contrast / reflow | 1.4.1, 1.4.3, 1.4.4, 1.4.10–1.4.13 |
| Keyboard / focus | 2.1.1, 2.1.2, 2.1.4, 2.4.3, 2.4.7, 2.4.11 |
| Pointer | 2.5.1, 2.5.2, 2.5.7, 2.5.8 |
| Forms | 1.3.1, 1.3.5, 2.4.6, 2.5.3, 3.2.2, 3.3.1–3.3.4, 3.3.7 |
| Auth | 3.3.8 plus the form set |
| Live regions / AJAX | 4.1.2, 4.1.3, 2.2.1, 2.2.2 |
| Custom widgets | 4.1.2, 2.1.1, 2.4.3, 2.4.7, 1.3.1 |

Then stop. Do not “also glance at AAA” unless the profile is AAA.

## 4. Require structured findings

Ask the agent to report **only** applicable criteria, in this shape:

```markdown
### 1.3.1 Info and Relationships (A) — wcag-22-aa
- Status: fail | pass | not applicable
- Evidence: [file:line or DOM]
- Why it matters: [one sentence from Understanding]
- Fix: [concrete markup]
- Official: https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships
```

Rules for the agent:

- **Not applicable** is a valid result (WCAG: if there is no content the criterion applies to, it is satisfied).
- Do not invent failures for criteria outside the profile.
- Do not claim the **page** conforms because one component looks fine ([conformance is per full page and complete process](../wcag/conformance/)).
- Cite the official Understanding URL, not only this repo.

## 5. Generate accessibly by default (ATAG Part B)

When the agent writes HTML, ERB, or docs, it should behave like an authoring tool:

1. **Default to conforming patterns** (native `<button>`, real headings, associated `<label>`, visible focus, 24×24 targets if 2.2 AA).
2. **Prompt** when it cannot meet a criterion (no image description provided → ask; do not emit empty `alt=""` on informative images).
3. **Check** the diff against the surface’s criteria before presenting it.
4. **Explain** in the criterion’s language, not in generic “best practice” language.

That is ATAG 2.0 Part B applied to a coding agent. Local: [../authoring-tools/atag.md](../authoring-tools/atag/).

## 6. Separate claim, extra, and usability

Keep three buckets so the developer is not negotiating AAA in a 508 report:

| Bucket | Goes in |
| --- | --- |
| Profile requirements | The conformance / 508 / Title II artifact |
| Higher WCAG version or AAA extras | “Beyond the required profile” |
| Content Usable / COGA patterns | Usability notes; not a WCAG fail |

Example: under `section-508-web`, a missing `autocomplete` on an email field is **not** a 508 fail (1.3.5 is 2.1). Under `ada-title-ii` or `wcag-22-aa`, it is.

## 7. Do not let the agent be the auditor

WCAG-EM and GSA both require expertise in AT and how people with disabilities use the product. Agents can:

- scaffold a WCAG-EM scope and sample
- run or interpret automated rules (axe, ACT)
- draft remediations
- keep the criterion list honest

They cannot:

- complete keyboard or screen-reader testing
- decide undue burden / fundamental alteration / 508 exceptions
- issue a conformance claim

Local: [../evaluation/wcag-em.md](../evaluation/wcag-em/).

## 8. Prompt patterns that stay small

**Implement**

> You are implementing under profile `ada-title-ii`. Read `source/docs/profiles/requirement-profiles.html.md` and only the **ADA-II = Y** rows in `source/docs/wcag/success-criteria.html.md` that apply to forms. Change only the password-reset flow. For each change, cite the criterion id and Understanding URL.

**Review**

> Review this diff against `wcag-22-aa`. List fails, passes, and not-applicable for the *pointer* and *keyboard/focus* surfaces only. Do not mention AAA.

**Gap between profiles**

> We must ship `section-508-web` next month and want a path to `wcag-22-aa`. Using the catalog, list only the 2.1 and 2.2 A/AA criteria we will still fail if we stop at 508. Group them by surface.

**Authoring-tool behavior**

> When you generate views, follow ATAG Part B: never omit alt on informative images; if I did not provide text, ask. Associate every input with a visible label. Do not use click handlers on `<div>` when a button will do.

## 9. What “done” looks like for a surface

1. Profile named and recorded (README, ticket, or ACR/VPAT scope).
2. Applicable criteria listed (short; from the catalog).
3. Automated check run; remaining items are human-testable.
4. Keyboard pass; one screen-reader pass on the happy path.
5. Process check if the surface is a step (WCAG CR 3 / GSA sequence rule).
6. Optional: one Content Usable pass (clear purpose, undo, no re-entry).

If that list still feels like too much, the unit of work is too big. Shrink the surface.

## Related: Bloom (separate repo)

Outcome language and “teach until the bar is met” live in [Science-of-Math/Learning-for-Mastery](https://github.com/Science-of-Math/Learning-for-Mastery). Local clone: `~/Science-of-Math/Learning-for-Mastery`. Pointer: [../learning/README.md](../learning/).

When pitching a task, say the taxonomy level (Remember vs Apply vs Evaluate). When a first pass fails, treat it as formative: prescribe the next surface, do not sort the developer on a curve. Do **not** copy those notes back into this repo.
