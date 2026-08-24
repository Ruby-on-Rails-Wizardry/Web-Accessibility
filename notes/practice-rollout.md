# Practice / isolated-example rollout

Locator (pick) + constructed (fix) + isolated `{bad,good}` + in-house Check. First built on **heading-order**. Walk remaining **rule** nodes one at a time. Families (`kind: pattern`) are not this grain.

Suggested order: headings family first (HTML already on the page), then other rules that already have snippets (`visible-label`, `native-control`, `lists`, …). Spine foundations later.

| Status | id | Title |
| --- | --- | --- |
| done | heading-order | Do not skip heading levels |
| done | heading-elements | Headings are heading elements |
| | data-tables | Data tables have headers |
| | lists | Lists are lists |
| | meaningful-sequence | Meaningful sequence |
| | link-purpose | Link purpose in context |
| | native-control | Native control before a custom widget |
| | visible-label | Visible label is the programmatic name |
| | placeholder-not-label | Placeholder is not a label |
| | accessible-name | Accessible name |
| | name-role-value | Name, role, and value |
| | label-in-name | Visible label is in the name |
| | input-purpose | Identify input purpose |
| | informative-image-alt | Informative image needs a text alternative |
| | decorative-image-silent | Decorative image is silent |
| | functional-image-names-action | Functional image names the action |
| | images-of-text | Prefer real text to an image of text |
| | color-not-only-cue | Color is not the only cue |
| | contrast-text | Text contrast |
| | contrast-ui | Non-text contrast |
| | sensory-characteristics | Not only shape, size, or sound |
| | keyboard-operable | Keyboard can operate it |
| | no-keyboard-trap | No keyboard trap |
| | visible-focus | Focus must be visible |
| | focus-not-obscured | Focus is not hidden behind chrome |
| | focus-order | Focus order matches meaning |
| | character-key-shortcuts | Single-key shortcuts can be turned off |
| | error-identification | The error is identified in text |
| | error-suggestion | Suggest a fix when you know one |
| | error-prevention | Review before an irreversible submit |
| | redundant-entry | Do not ask for the same data twice |
| | accessible-authentication | Accessible authentication |
| | consistent-nav-order | Repeated navigation stays in order |
| | consistent-identification | The same action keeps the same name |
| | consistent-help | Help stays in the same place |
| | no-change-on-focus | Focus does not change context |
| | no-change-on-input | Changing a value does not navigate |
| | skip-link | Skip past repeated blocks |
| | multiple-ways | More than one way to find a page |
| | page-title | The document has a unique title |
| | language-of-page | The page language is declared |
| | language-of-parts | Language of parts |
| | captions | Captions for prerecorded video |
| | audio-control | Audio does not play unchecked |
| | resize-text | Text can resize |
| | reflow | Reflow |
| | text-spacing | Text spacing |
| | target-size | Target size |
| | pointer-gestures | No path-only gesture |
| | pointer-cancellation | Pointer cancellation |
| | dragging | Dragging has a simple alternative |
| | motion-actuation | Motion is not the only input |
| | pause-stop-hide | Pause, stop, or hide movement |
| | timing-adjustable | Time limits can be extended |
| | three-flashes | Nothing flashes more than three times |
| | status-messages | Status messages are announced |
| | orientation | Do not lock orientation |
| | content-on-hover | Content on hover or focus |

58 rules. Pattern families (headings, keyboard-access, form-errors, consistent-navigation, no-unexpected-change, decorative-vs-informative-image) stay teaching hubs, not this grain.
