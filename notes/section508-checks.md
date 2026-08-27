# In-house checker libraries

Started 2026-08-27. Contract: [../checks/README.md](../checks/README.md). Whole-project: [../TODO.md](../TODO.md).

The practice pages already had 30 fragment cops in `source/javascripts/*_check.js`. Nothing ran them in CI. Goal: the same cops in JavaScript, Ruby, and Python so another app can score HTML the way the pick/fix pages do.

## Decisions

- Stay in this repo (`checks/`). Do not publish npm / gem / PyPI until another project actually imports them.
- Shared catalog only (`checks/catalog.yml`). Each language implements the cops. No JS bridge from Ruby or Python.
- JS in the browser stays under `source/javascripts/` (Middleman serves that). `section508.js` is the barrel the Stimulus controller uses. Node tests live in `checks/javascript` and parse strings with jsdom.
- Fixtures are the existing pick pools (`data/*_pick.yml`). Bad must fail; good must pass. Combined headings uses both child cops.
- Adapters duck-type test objects (Capybara `html`, Rails `body`, Playwright `content()`, Selenium `page_source`). Do not add Playwright/Capybara as hard dependencies of the libraries.
- These cops score markup the curriculum teaches. They are not axe. Lab install notes stay out of `source/`.

## Checker bug the fixtures caught

`language-of-parts` treated any `[lang]` whose ancestor had no `lang` as a switch (`here !== ""`). Wrapped fragments and live `<main>` both have no lang, so `<p lang="en">Musée d'Orsay</p>` passed. A switch now counts only when an ancestor also has `lang` and the values differ.

## Ruby library (2026-08-27)

`checks/ruby` mirrors the 30 JS cops on Nokogiri. `Section508.check` takes a string, a Nokogiri node, or a duck-typed page (`html` / `body` / `native`). Profile filter intersects with `rules:` the same way Node `catalog.js` does.

Nokogiri 1.19 has `matches?` but not DOM `closest`; the adapter walks ancestors. Strings are wrapped in a fragment root the way jsdom wraps `#root`.

```bash
cd checks/ruby
bundle config set --local path vendor/bundle
bundle install
bundle exec rspec
```

`bundle exec rspec`: 381 examples, 0 failures (Ruby 4.0.6). JS fixture suite stays the pass/fail source of truth.

## Python library (2026-08-27)

`checks/python` mirrors the 30 JS cops on BeautifulSoup (`html.parser`). `section508.check` takes a string, a BeautifulSoup tree, or a duck-typed page (`content()`, `page_source`, `text`). Profile filter intersects with `rules` the same way Node `catalog.js` does. Fragments wrap in a `#root` div like jsdom.

```bash
cd checks/python
python3 -m venv .venv
.venv/bin/pip install -e ".[test]"
.venv/bin/python -m pytest
```

`.venv/bin/python -m pytest`: 380 passed (Python 3.14.7). JS fixture suite stays the pass/fail source of truth.

## Run

```bash
bundle exec rake test
```

Host: Node 24 via mise, Ruby 4, Python 3.14. npm cache on this laptop must be `NPM_CONFIG_CACHE=$HOME/.npm` (global `.npmrc` still points at `/cache/npm`).
