# Internal notes (not published)

Lab facts, host status, and author reminders. **Not** the site.

Middleman only builds `source/`. Nothing in this folder is in `middleman build` or GitHub Pages.

Mirror the published path when a note is about a specific page:

| Published | Internal |
| --- | --- |
| `source/docs/evaluation/testing-tools/axe.html.md` | `notes/docs/evaluation/testing-tools/axe.md` |
| `source/learn/<id>.html.md` (mastery still to write) | `notes/learn/<id>.md` — index: [learn/README.md](learn/README.md) |

Do not put host names, “we have not installed X,” or TODO-for-agents on publishable pages. Those belong here. Publishable `source/` is for the learner using the site.
