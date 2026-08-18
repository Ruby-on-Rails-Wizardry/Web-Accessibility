# Revised Section 508 Standards (ICT Refresh)

> **Local copy of a U.S. government publication.** Works of the U.S. government are generally in the public domain (17 U.S.C. § 105).
>
> **Sources:**
> - [Revised 508 Standards and 255 Guidelines](https://www.access-board.gov/ict/) — U.S. Access Board
> - [About the ICT Accessibility 508 Standards and 255 Guidelines](https://www.access-board.gov/ict/about/)
> - Official PDF: https://www.access-board.gov/files/ict/ict-final-rule.pdf
>
> **Status:** Final rule 18 January 2017 (82 FR 5790); effective **18 January 2018**. Correction 22 January 2018 restored TTY provisions. Binding on federal agencies as incorporated into the FAR.

## What Section 508 is

Section 508 of the Rehabilitation Act (29 U.S.C. § 794d) requires federal agencies to give employees and members of the public with disabilities access to information and data **comparable** to the access available to others, when the agency develops, procures, maintains, or uses ICT.

Examples named by the Access Board: computers, telecommunications equipment, multifunction office machines, software, websites, information kiosks and transaction machines, and electronic documents.

The Access Board writes the technical standards. GSA runs the government-wide program at [Section508.gov](https://www.section508.gov/). Technical assistance: 202-272-0080, 508@access-board.gov.

Section **255** of the Communications Act is a companion set of guidelines for telecommunications and customer-premises equipment (phones, routers, set-top boxes, interconnected VoIP, related software).

## The 2017 refresh

The original 508 Standards were issued 21 December 2000. The 2017 refresh:

- reorganized the standards around current ICT
- **harmonized with WCAG 2.0** (and with European ICT work)
- applied the same web criteria to **non-web** electronic content and software, with limited exceptions

Original 508 vs WCAG 2.0 mapping: https://www.access-board.gov/ict/wcag2ict.html

## The WCAG incorporation (the part developers live in)

### E205.4 Accessibility Standard

From the official standards text (https://www.access-board.gov/ict/#E205-content):

> Electronic content shall conform to Level A and Level AA Success Criteria and Conformance Requirements in WCAG 2.0 (incorporated by reference, see 702.10.1).
>
> **EXCEPTION:** Non-Web documents shall not be required to conform to the following four WCAG 2.0 Success Criteria: **2.4.1 Bypass Blocks**, **2.4.5 Multiple Ways**, **3.2.3 Consistent Navigation**, and **3.2.4 Consistent Identification**.

### E205.4.1 Word substitution for non-web documents

> For non-Web documents, wherever the term “Web page” or “page” appears in WCAG 2.0 Level A and AA Success Criteria and Conformance Requirements, the term “document” shall be substituted for the terms “Web page” and “page”. In addition, in Success Criterion in 1.4.2, the phrase “in a document” shall be substituted for the phrase “on a Web page”.

**Legal baseline is WCAG 2.0 AA, not 2.1 or 2.2.** Agencies and vendors often *choose* 2.1 or 2.2 AA because those versions are backwards compatible. That is best practice, not the text of E205.4.

GSA: a page that fails even one of the 38 applicable WCAG 2.0 A/AA criteria does not conform. See [applicability-conformance.md](applicability-conformance.md).

## Chapters developers should know

| Chapter / section | Applies to |
| --- | --- |
| E201 / Chapter 2 scoping | Which ICT must be accessible |
| E204 + Chapter 3 | Functional performance criteria (when technical specs cannot be applied) |
| E205 | Electronic content (web and documents) |
| E206 + Chapter 4 / 5 hardware | Hardware |
| E207 | Software (including applying WCAG to non-web software) |
| Chapter 5 §504 | **Authoring tools** (CMS, IDEs, document converters) |
| Chapter 6 | Support documentation and services |
| Chapter 7 | Referenced standards (including WCAG 2.0) |

Authoring tools are in scope: not only word processors, but tools that produce web pages or applications, and IDEs. That is the 508 hook for **agents that generate UI**. Pair with [../authoring-tools/atag.md](../authoring-tools/atag.md).

## What 508 is not

- It is not ADA Title II (state/local web rule uses **WCAG 2.1 AA**).
- It is not a private-sector website statute. Private vendors are bound when they **sell or build ICT for a federal agency**, and separately may have ADA Title III exposure (which does not formally adopt a WCAG edition the way 508 and the Title II rule do).
- It is not only “websites.” Documents, software, kiosks, and hardware have their own chapters.

## Related official pages

- Full standards: https://www.access-board.gov/ict/
- About: https://www.access-board.gov/ict/about/
- Functional performance mapping: https://www.access-board.gov/ict/wcagtofpc.html
- ICT Testing Baseline: https://ictbaseline.access-board.gov/
- Timeline / TEITAC history: see the About page (committee 2006–2008; drafts 2010–2015; final 2017).
