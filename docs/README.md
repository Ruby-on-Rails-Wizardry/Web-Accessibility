# Local documentation library

The library now lives under **[source/docs/](../source/docs/)** as Middleman pages (`*.html.md`). Same markdown, plus YAML frontmatter for the static site.

| Old path | New path |
| --- | --- |
| `docs/README.md` | [source/docs/index.html.md](../source/docs/index.html.md) |
| `docs/profiles/requirement-profiles.md` | [source/docs/profiles/requirement-profiles.html.md](../source/docs/profiles/requirement-profiles.html.md) |
| `docs/wcag/success-criteria.md` | [source/docs/wcag/success-criteria.html.md](../source/docs/wcag/success-criteria.html.md) |
| `docs/SOURCES.md` | [source/docs/SOURCES.html.md](../source/docs/SOURCES.html.md) |

Serve the site with `bundle exec middleman serve` (http://localhost:4567).
