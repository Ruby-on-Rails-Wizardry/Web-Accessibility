# Web Accessibility

A local, agent-friendly library of **official** Section 508, WCAG, ADA, and related accessibility documentation. The point of this repo is to make it cheaper — in attention, not just time — for a developer working with an agent to hit the right bar for a given project.

Accessibility work fails more often from **too many overlapping standards** than from missing a single checkbox. A federal contract wants Revised 508 (WCAG 2.0 AA plus ICT chapters). A state or city site is under the ADA Title II web rule (WCAG 2.1 AA). A team that wants current best practice aims at WCAG 2.2 AA. Those are different checklists that share most of the same criteria. This library keeps the official texts nearby and maps them into **requirement profiles** so an agent can load only what that job needs.

Start here:

| If you need… | Open |
| --- | --- |
| Which bar applies to this project | [docs/profiles/requirement-profiles.md](docs/profiles/requirement-profiles.md) |
| How to work with an agent without holding 80+ criteria in your head | [docs/agents/reducing-cognitive-load.md](docs/agents/reducing-cognitive-load.md) |
| The local document library | [docs/README.md](docs/README.md) |
| Official source URLs and license notes | [docs/SOURCES.md](docs/SOURCES.md) |

## What this is

- **Local markdown copies** of official W3C, U.S. Access Board, GSA Section508.gov, and DOJ ADA.gov material, each with a source URL, document status, and license notice.
- A **success-criteria catalog** tagged by WCAG version, level (A / AA / AAA), and legal profile (508 web, 508 non-web, ADA Title II, WCAG 2.2 AA).
- Guidance for **authoring tools and agents** (ATAG 2.0): tools that generate content should help authors produce accessible content, not dump the whole standard on them.

## What this is not

- These files are **not** the official specifications. When a claim, contract, or audit is at stake, follow the dated official URL in each file.
- This is not legal advice. Profiles describe published technical requirements; counsel and your agency 508 program decide applicability.
- Meeting WCAG success criteria is necessary for a conformance claim. It is not always sufficient for real-world use, especially for people with cognitive and learning disabilities. See [docs/cognitive/](docs/cognitive/).

## Official standards at a glance

| Profile | Technical bar | Who it binds (typical) |
| --- | --- | --- |
| Revised Section 508 | WCAG 2.0 Level A + AA, plus ICT hardware / software / authoring / support chapters | U.S. federal agencies and ICT they develop, procure, maintain, or use |
| ADA Title II web & mobile rule | WCAG 2.1 Level AA | U.S. state and local governments (and contractors providing their services) |
| Current WCAG practice | WCAG 2.2 Level AA (also ISO/IEC 40500:2025) | Organizations that want the latest WCAG 2 line; content that meets 2.2 also meets 2.1 and 2.0 |
| Enhanced / AAA | Selected Level AAA criteria | Optional; W3C does not recommend requiring AAA for entire sites |

W3C encourages using the latest WCAG 2 version. Content that conforms to WCAG 2.2 also conforms to 2.1 and 2.0 (with the 4.1.1 Parsing note). See [docs/wcag/overview.md](docs/wcag/overview.md).

## How to use this with an agent

1. Name the **profile** in the first prompt (`section-508-web`, `ada-title-ii`, `wcag-22-aa`, …).
2. Point the agent at [docs/profiles/requirement-profiles.md](docs/profiles/requirement-profiles.md) and [docs/wcag/success-criteria.md](docs/wcag/success-criteria.md).
3. Ask it to work **one surface at a time** (a form, a nav, a modal) and report only criteria that apply to that surface.
4. Treat automated checks as a first pass. Keyboard, screen-reader, and user testing remain required. See [docs/evaluation/wcag-em.md](docs/evaluation/wcag-em.md).

Details: [docs/agents/reducing-cognitive-load.md](docs/agents/reducing-cognitive-load.md).
