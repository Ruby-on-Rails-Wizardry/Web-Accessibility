# Agent guide — Web Accessibility

This is a **Middleman 4** static documentation site generated from
[Ruby-on-Rails-Wizardry/middleman-template](https://github.com/Ruby-on-Rails-Wizardry/middleman-template).
The content is a local library of official Section 508, WCAG, ADA, and related texts, mapped into **requirement profiles**.

## Stack

- Middleman 4, ERB layouts, Markdown pages (`*.html.md`)
- Hotwire: **Turbo Drive** + **Stimulus** (vendored ESM, no React, no TypeScript)
- Chrome and nav come from `data/site.yml`

## Local

```bash
bundle install
bundle exec middleman serve    # http://localhost:4567
bundle exec middleman build    # ./build
```

Live: [https://ruby-on-rails-wizardry.github.io/Web-Accessibility/](https://ruby-on-rails-wizardry.github.io/Web-Accessibility/) (GitHub Actions on push to `master`).

## Library (read these, do not reinvent them)

| Need | File |
| --- | --- |
| Which bar | `source/docs/profiles/requirement-profiles.html.md` |
| Full SC catalog | `source/docs/wcag/success-criteria.html.md` |
| Technique ID index | `source/docs/wcag/techniques-index.html.md` + `data/techniques.yml` |
| Definitions / training | `source/docs/definitions/` — DHS 508 Training, E103.4, GSA glossary |
| Testing tools | `source/docs/evaluation/testing-tools/` — DevTools, axe install, WAVE, ANDI, screen reader |
| Agent workflow | `source/docs/agents/reducing-cognitive-load.html.md` |
| Sources / licenses | `source/docs/SOURCES.html.md` |
| Knowledge tree | `data/tree.yml` + `source/learn/` |
| Whole-project TODO | `TODO.md` |
| Internal notes (not published) | `notes/` — mirror the published path; lab/host facts, not learner copy |

When implementing accessibility work **in another project**, name a profile (`section-508-web`, `ada-title-ii`, `wcag-22-aa`) and a surface, then filter the catalog. Do not paste the whole library into one prompt.

## Conventions

1. Put site identity (title, nav, footer, accent) in **`data/site.yml`**, not in the layout. The header **site title** (`title`) is the first control, linking Home (`/`). Primary nav follows (do not also list Home). The Skool wizard portrait (`mark.jpg`) sits on the **right**, linking `pages_url`, with `aria-label` and `title` “Ruby on Rails Wizardry” (icon only; empty `alt` on the image).
2. Prefer **Markdown** under `source/docs/` for the official-docs library (`docs` layout). Knowledge-tree nodes live under **`source/learn/`** (`learn` layout). The graph is **`data/tree.yml`** (ids, prereqs, children, spine, library links). `kind: pattern` is a family; `kind: rule` is one cop (frontmatter `rule:`, Bad and Good on the same page). `kind: example` is a live specimen under a rule (`source/learn/<rule>/bad.html.erb` and `good.html.erb`, `example` layout). Same site header as the rest of the site; no extra headings in `<main>`, so a heading list still sees only that markup. The `specimen` Stimulus controller adds Edit. The editor is created on demand from the live HTML in `<main>` and removed from the DOM when closed, so tools do not see a textarea unless you are editing. Add a node when you add a page. Use ERB for chrome and interactive demos. Publishable pages are for the **learner**. Host names, “not installed here,” and other lab notes go in **`notes/`** (not built). Do not copy a rule’s specimen walkthrough onto every tool page; link the rule instead.
3. Every library page keeps its **source block** (official URL, status, license) after the frontmatter.
4. New Stimulus controller: `source/javascripts/name_controller.js`. `site.js.erb` registers it as `name` (`copy_code` → `copy-code`).
5. Import Stimulus from `./stimulus.js`. Do not add a JS bundler unless the site already has one.
6. Refresh vendored Hotwire with `bin/vendor-hotwire` (pins live in that script).
7. Keep diffs small. Match existing SCSS (CSS variables on `:root`) instead of introducing Tailwind or another kit.
8. Remotes: `github` canonical, `gitlab` backup, `ami` LAN. Do **not** run `bin/setup-remotes` unless remotes are missing — it removes `origin`.

This site **applies** Learning for Mastery (knowledge tree, study-next, no grades). The Bloom *source* study guides stay in Science-of-Math/Learning-for-Mastery; do not copy those papers back here.

## Do not

- Introduce React, Vue, or TypeScript
- Hard-code the site title in `layouts/layout.erb`
- Commit `build/`
- Treat local copies as the official specifications
- Copy the Bloom / *Learning for Mastery* source papers from Science-of-Math/Learning-for-Mastery into this repo
- Write `a11y`, or ally/enemy framing, in product voice — say **accessibility**, or the specific name (WCAG, Section 508, ADA, this pattern)
- Put lab/host voice (“on this machine”, “we have not installed”) on a published page — that belongs in `notes/`
