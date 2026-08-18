# Bloom’s Taxonomy of Educational Objectives

> **Local study guide.** This is not a reprint of the 1956 handbook or the 2001 revision.
>
> **Primary sources (copyrighted; buy or borrow):**
> - Bloom, B. S., Engelhart, M. D., Furst, E. J., Hill, W. H., & Krathwohl, D. R. (1956). *Taxonomy of educational objectives: The classification of educational goals. Handbook I: Cognitive domain.* New York: David McKay / Longmans, Green.
> - Krathwohl, D. R., Bloom, B. S., & Masia, B. B. (1964). *Taxonomy of educational objectives. Handbook II: Affective domain.* New York: David McKay.
> - Anderson, L. W., & Krathwohl, D. R. (Eds.). (2001). *A taxonomy for learning, teaching, and assessing: A revision of Bloom’s taxonomy of educational objectives.* New York: Longman.
> - Krathwohl, D. R. (2002). A revision of Bloom’s taxonomy: An overview. *Theory Into Practice, 41*(4), 212–218. https://doi.org/10.1207/s15430421tip4104_2
>
> **Open teaching summaries used for structure (with credit):**
> - University of Waterloo, Centre for Teaching Excellence. *Bloom’s Taxonomy.* CC BY-NC 4.0. https://uwaterloo.ca/centre-for-teaching-excellence/catalogs/tip-sheets/blooms-taxonomy
> - Vanderbilt CFT / Armstrong (often cited): https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/
> - Internet Archive lend of Handbook I: https://archive.org/details/taxonomyofeducat0000bloo_o9o7

The 1956 book is a **classification of intended learning outcomes**, written so test items and objectives could be compared across institutions. Bloom chaired a committee of college examiners that started the work after a 1948 meeting. It is not a theory of how the brain works, and it is not a required sequence for every lesson.

Three **domains** were planned. Only the first two were published as Bloom handbooks:

| Domain | Official handbook | Focus |
| --- | --- | --- |
| Cognitive | Handbook I (Bloom et al., 1956) | Intellectual skills, knowledge |
| Affective | Handbook II (Krathwohl, Bloom, & Masia, 1964) | Attitudes, values, interest |
| Psychomotor | Not a Bloom handbook. Common later taxonomies: Simpson (1972), Harrow (1972), Dave (1970) | Movement and skilled performance |

Within each published domain the levels are **hierarchical**: each level assumes the ones below it (Waterloo CTE; Krathwohl 2002).

---

## Cognitive domain — original (1956)

Six **noun** categories. After Knowledge, Bloom’s committee treated the rest as “skills and abilities,” with Knowledge as the precondition.

| Level | What the learner is doing | Typical verbs (teaching-center lists, not from the handbook verbatim) |
| --- | --- | --- |
| **1. Knowledge** | Recall or recognize facts, terms, classifications, methods, theories in a form close to how they were learned | define, identify, list, name, recall, recognize, state |
| **2. Comprehension** | Grasp meaning: translate, interpret, extrapolate | classify, describe, explain, paraphrase, summarize |
| **3. Application** | Use an abstraction in a new concrete situation | apply, compute, demonstrate, implement, use |
| **4. Analysis** | Break into parts; see hierarchy and relations | analyze, compare, contrast, differentiate, organize |
| **5. Synthesis** | Put elements together into a new whole (plan, design, proposed set of operations) | assemble, compose, construct, design, formulate |
| **6. Evaluation** | Judge value against internal or external criteria | appraise, argue, critique, judge, justify |

Bloom himself cited Handbook I in the 1968 *Learning for Mastery* reference list as: Bloom, B. S. (Ed.), *Taxonomy of educational objectives: Handbook I, cognitive domain.* New York: David McKay, 1956.

### How this maps onto this repo’s work

| Taxonomy level | Accessibility example |
| --- | --- |
| Knowledge | Name the four POUR principles; recall that 508 E205.4 is WCAG 2.0 AA |
| Comprehension | Explain why 2.4.11 is not in a 508-web claim |
| Application | Add a visible label and `autocomplete` to a new form field |
| Analysis | Sort a page’s failures by profile vs extra vs COGA-only |
| Synthesis | Design a component so the profile’s form-surface criteria are met by default |
| Evaluation | Decide whether a page conforms, or whether an exception/undue-burden argument is even in scope |

---

## Cognitive domain — revision (Anderson & Krathwohl, 2001)

Krathwohl (2002) summarizes the changes:

1. Category names became **verbs** (active performance, not possession of a noun).
2. **Synthesis** was dropped as a named top category. **Create** sits at the top. **Evaluate** moved down one step.
3. The taxonomy became a **two-dimensional table**: *Knowledge* dimension × *Cognitive process* dimension.

### Process dimension (the “new pyramid”)

| 1956 | 2001 |
| --- | --- |
| Knowledge | **Remember** |
| Comprehension | **Understand** |
| Application | **Apply** |
| Analysis | **Analyze** |
| Evaluation | **Evaluate** |
| Synthesis | **Create** |

### Knowledge dimension (2001)

Krathwohl (2002) and the 2001 book distinguish four kinds of knowledge the process verbs act *on*:

| Kind | Meaning |
| --- | --- |
| Factual | Discrete bits: terminology, specific details |
| Conceptual | Classifications, principles, theories, models |
| Procedural | How to do something; methods, techniques, criteria for using them |
| Metacognitive | Knowledge of cognition, including strategic and self-knowledge |

A single objective is a cell: e.g. *Remember + factual* (“list the six WCAG 2.2 AA additions”) vs *Apply + procedural* (“implement 3.3.8 so a password manager can fill the field”).

Waterloo CTE notes that in this version learners are expected to move from Remember toward Create.

---

## Affective domain (Krathwohl, Bloom, & Masia, 1964)

Hierarchy of internalization of values (Waterloo CTE examples are CC BY-NC; the category names are the handbook’s):

| Level | Focus |
| --- | --- |
| Receiving | Attend; listen; notice |
| Responding | Participate; comply; volunteer a response |
| Valuing | Attach worth; prefer; commit |
| Organization | Compare values; build a coherent system |
| Characterization | Act consistently from an internalized value set |

Relevant here when the goal is not “the developer can recite 2.4.7” but “the team treats inaccessible markup as unfinished work.”

---

## Psychomotor domain (not Bloom’s handbook)

Harrow (1972), *A taxonomy of the psychomotor domain* (David McKay), is the version Waterloo CTE uses:

Reflex → Basic fundamental movements → Perceptual abilities → Physical abilities → Skilled movements → Non-discursive communication.

Simpson (1972) is the other common list (perception, set, guided response, mechanism, complex overt response, adaptation, origination). Use these only for motor-skill outcomes; do not treat them as Bloom 1956.

---

## Practice notes (from Waterloo CTE, CC BY-NC 4.0)

When writing outcomes, pick a **verb that names the expected performance**, then match the assessment to that verb. A multiple-choice item can check Remember. It cannot honestly check Create.

Waterloo’s cognitive examples (literature course):

| Level (2001) | Sample outcome | Sample assessment |
| --- | --- | --- |
| Remember | Remember names and relationships of characters | Multiple-choice memory test |
| Understand | Explain the main ideas of a play | One-page plot summary |
| Apply | Apply themes in another context | Advice column to a character |
| Analyze | Analyze roles and relationships | Paper comparing antagonist and protagonist |
| Evaluate | Evaluate a character’s decisions with textual evidence | Supported judgment of an action |
| Create | Create a new piece using similar plot devices | Short story in a new setting |

Citation format they request: *Bloom’s Taxonomy. Centre for Teaching Excellence, University of Waterloo.* License: https://creativecommons.org/licenses/by-nc/4.0/

---

## Related Bloom publications

| Year | Work | Role |
| --- | --- | --- |
| 1956 | *Taxonomy… Handbook I* | Cognitive classification |
| 1964 | *Stability and Change in Human Characteristics* | Cited in *Learning for Mastery* on whether aptitude is fixed |
| 1964 | *Taxonomy… Handbook II* | Affective classification |
| 1968 | “Learning for Mastery” | Instructional strategy; see [learning-for-mastery.md](learning-for-mastery.md) |
| 1971 | “Mastery learning” in Block (Ed.), *Mastery learning: Theory and practice* | Shorter name; same line of work |
| 1976 | *Human Characteristics and School Learning* | Later synthesis |
| 2001 | Anderson & Krathwohl revision | Two-dimensional cognitive taxonomy |

## What this file is not

- A substitute for Handbook I’s category definitions, illustrative objectives, or test-item examples.
- A claim that every accessibility task must climb the whole pyramid.
- A WCAG, 508, or ADA requirement.
