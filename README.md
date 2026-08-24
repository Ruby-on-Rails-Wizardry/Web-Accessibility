# Web Accessibility

A local, agent-friendly library of **official** Section 508, WCAG, ADA, and related accessibility documentation — now also a **Middleman** static site. The point of this repo is to make it cheaper — in attention, not just time — for a developer working with an agent to hit the right bar for a given project.

Accessibility work fails more often from **too many overlapping standards** than from missing a single checkbox. A federal contract wants Revised 508 (WCAG 2.0 AA plus ICT chapters). A state or city site is under the ADA Title II web rule (WCAG 2.1 AA). A team that wants current best practice aims at WCAG 2.2 AA. Those are different checklists that share most of the same criteria. This library keeps the official texts nearby and maps them into **requirement profiles** so an agent can load only what that job needs.

The site is generated from [Ruby-on-Rails-Wizardry/middleman-template](https://github.com/Ruby-on-Rails-Wizardry/middleman-template). Turbo Drive handles in-site navigation; Stimulus controllers add small bits of behavior (mobile nav, on-page contents, one-open disclosure).

Start here:

| If you need… | Open (site) | Open (files) |
| --- | --- | --- |
| Which bar applies to this project | [/docs/profiles/](source/docs/profiles/index.html.md) | [source/docs/profiles/requirement-profiles.html.md](source/docs/profiles/requirement-profiles.html.md) |
| How to work with an agent | [/docs/agents/](source/docs/agents/index.html.md) | [source/docs/agents/reducing-cognitive-load.html.md](source/docs/agents/reducing-cognitive-load.html.md) |
| Definitions and 508 training | [/docs/definitions/](source/docs/definitions/index.html.md) | [DHS 508 Training](source/docs/definitions/dhs-508-training.html.md) · [defined terms](source/docs/definitions/defined-terms.html.md) |
| Knowledge tree (what to study next) | [/learn/](source/learn/index.html.erb) | [source/learn/](source/learn/) + [data/tree.yml](data/tree.yml) |
| The document library | [/docs/](source/docs/index.html.md) | [source/docs/](source/docs/) |
| Official source URLs and license notes | [/docs/SOURCES/](source/docs/SOURCES.html.md) | [source/docs/SOURCES.html.md](source/docs/SOURCES.html.md) |
| Testing tools (axe, WAVE, ANDI, DevTools) | [/docs/evaluation/testing-tools/](source/docs/evaluation/testing-tools/index.html.md) | [source/docs/evaluation/testing-tools/](source/docs/evaluation/testing-tools/) |
| Bloom taxonomy + *Learning for Mastery* | [Science-of-Math/Learning-for-Mastery](https://github.com/Science-of-Math/Learning-for-Mastery) | [local pointer](source/docs/learning/index.html.md) |
| What is left to write | [TODO.md](TODO.md) | [TODO.md](TODO.md) |

## Develop

```bash
bundle install
bundle exec middleman serve
```

Open http://localhost:4567.

```bash
bundle exec middleman build    # ./build (gitignored)
```

## Publish

Live site: [https://ruby-on-rails-wizardry.github.io/Web-Accessibility/](https://ruby-on-rails-wizardry.github.io/Web-Accessibility/)

Push `master` to GitHub. The **Deploy GitHub Pages** workflow builds Middleman and deploys this repo as a [project site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-a-site) (URL is `org.github.io/repo`). Relative links and assets are on so the `/Web-Accessibility/` prefix works. Manual rebuild: Actions → Deploy GitHub Pages → Run workflow.

The org splash is a separate repo, [ruby-on-rails-wizardry.github.io](https://github.com/Ruby-on-Rails-Wizardry/ruby-on-rails-wizardry.github.io). This library stays the source of truth; Pages is the generated site, not a second content tree.

Local fallback (writes a `gh-pages` branch; the live site is Actions, not that branch):

```bash
bundle exec rake publish
```

## What this is

- **Local markdown copies** of official W3C, U.S. Access Board, GSA Section508.gov, and DOJ ADA.gov material, each with a source URL, document status, and license notice. Site pages live under `source/docs/` as `*.html.md`.
- A **success-criteria catalog** tagged by WCAG version, level (A / AA / AAA), and legal profile (508 web, 508 non-web, ADA Title II, WCAG 2.2 AA).
- Guidance for **authoring tools and agents** (ATAG 2.0): tools that generate content should help authors produce accessible content, not dump the whole standard on them.

## What this is not

- These files are **not** the official specifications. When a claim, contract, or audit is at stake, follow the dated official URL in each file.
- This is not legal advice. Profiles describe published technical requirements; counsel and your agency 508 program decide applicability.
- Meeting WCAG success criteria is necessary for a conformance claim. It is not always sufficient for real-world use, especially for people with cognitive and learning disabilities. See [source/docs/cognitive/](source/docs/cognitive/).

## Official standards at a glance

| Profile | Technical bar | Who it binds (typical) |
| --- | --- | --- |
| Revised Section 508 | WCAG 2.0 Level A + AA, plus ICT hardware / software / authoring / support chapters | U.S. federal agencies and ICT they develop, procure, maintain, or use |
| ADA Title II web & mobile rule | WCAG 2.1 Level AA | U.S. state and local governments (and contractors providing their services) |
| Current WCAG practice | WCAG 2.2 Level AA (also ISO/IEC 40500:2025) | Organizations that want the latest WCAG 2 line; content that meets 2.2 also meets 2.1 and 2.0 |
| Enhanced / AAA | Selected Level AAA criteria | Optional; W3C does not recommend requiring AAA for entire sites |

W3C encourages using the latest WCAG 2 version. Content that conforms to WCAG 2.2 also conforms to 2.1 and 2.0 (with the 4.1.1 Parsing note). See [source/docs/wcag/overview.html.md](source/docs/wcag/overview.html.md).

## How to use this with an agent

1. Name the **profile** in the first prompt (`section-508-web`, `ada-title-ii`, `wcag-22-aa`, …).
2. Point the agent at [source/docs/profiles/requirement-profiles.html.md](source/docs/profiles/requirement-profiles.html.md) and [source/docs/wcag/success-criteria.html.md](source/docs/wcag/success-criteria.html.md).
3. Ask it to work **one surface at a time** (a form, a nav, a modal) and report only criteria that apply to that surface.
4. Treat automated checks as a first pass. Keyboard, screen-reader, and user testing remain required. See [source/docs/evaluation/wcag-em.html.md](source/docs/evaluation/wcag-em.html.md).

Details: [source/docs/agents/reducing-cognitive-load.html.md](source/docs/agents/reducing-cognitive-load.html.md).

## Customize the site

| File | What to change |
|------|----------------|
| `data/site.yml` | Title, tagline, nav, footer, accent color, repo URL. Header wordmark is always `org` + `mark.jpg` (Skool icon), linking to `pages_url`. |
| `source/docs/` | Markdown documentation (`docs` layout) |
| `source/javascripts/*_controller.js` | Stimulus controllers (auto-registered) |
| `source/stylesheets/site.css.scss` | Theme (`--accent` and other CSS variables) |

## Remotes

| Remote | URL |
|--------|-----|
| github | `git@github.com:Ruby-on-Rails-Wizardry/Web-Accessibility.git` |
| gitlab | `git@gitlab.com:ruby-on-rails-wizardry/Web-Accessibility.git` |
| ami | `git@ami:Ruby-on-Rails-Wizardry/Web-Accessibility.git` |

```bash
git push github && git push gitlab && git push ami
```
