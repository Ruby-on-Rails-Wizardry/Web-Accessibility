---
title: Defined terms
description: Binding 508 vocabulary (Access Board E103.4), GSA program terms, and the WCAG glossary.
---

> **Local copy of U.S. government publications, plus a pointer to the W3C glossary.** Works of the U.S. government are generally in the public domain (17 U.S.C. § 105). W3C glossary entries are **not** copied here; use the official URL.
>
> Sources:
> - [E103.4 Defined Terms](https://www.access-board.gov/ict/#E103-defined-terms) — Revised 508 Standards, U.S. Access Board
> - [Glossary of Section 508 Terms](https://www.section508.gov/tools/glossary/) — GSA Section508.gov
> - [Commonly Used Acronyms and Abbreviations](https://www.section508.gov/tools/acronyms-abbreviations/) — GSA (reviewed/updated June 2025)
> - [WCAG 2.2 Glossary](https://www.w3.org/TR/WCAG22/#glossary) — W3C Recommendation, 12 December 2024
>
> **Status:** E103.4 is **normative** in the Revised 508 Standards (final rule 18 January 2017; effective 18 January 2018). The GSA glossary is program language, not a substitute for E103.4. WCAG glossary terms are normative *in WCAG*.
>
> Training that uses this vocabulary: [DHS Section 508 Training](dhs-508-training/) ([dhs.gov/508-training](https://www.dhs.gov/508-training)).

This page is a **thin working set** of terms that show up in this library. It is not a republication of the GSA glossary or the WCAG Rec glossary. For a term that is not here, open the official list.

Authority when lists disagree: **E103.4** for a 508 argument; **WCAG glossary** for a success criterion; **GSA** for testing and procurement talk.

## Access Board E103.4 (508)

Quoted from [E103.4 Defined Terms](https://www.access-board.gov/ict/#E103-defined-terms). These are the meanings “for the purpose of the Revised 508 Standards.”

### ICT (Information and Communication Technology)

> Information technology and other equipment, systems, technologies, or processes, for which the principal function is the creation, manipulation, storage, display, receipt, or transmission of electronic data and information, as well as any associated content. Examples of ICT include, but are not limited to: computers and peripheral equipment; information kiosks and transaction machines; telecommunications equipment; customer premises equipment; multifunction office machines; software; applications; Web sites; videos; and, electronic documents.

### Assistive Technology (AT)

> Any item, piece of equipment, or product system, whether acquired commercially, modified, or customized, that is used to increase, maintain, or improve functional capabilities of individuals with disabilities.

### Authoring Tool

> Any software, or collection of software components, that can be used by authors, alone or collaboratively, to create or modify content for use by others, including other authors.

That is the 508 hook for **IDEs, CMS, document converters, and coding agents**. Pair with [ATAG](../authoring-tools/atag/) and Chapter 5 §504.

### Software Tools

> Software for which the primary function is the development of other software. Software tools usually come in the form of an Integrated Development Environment (IDE) and are a suite of related products and utilities.

### Content

> Electronic information and data, as well as the encoding that defines its structure, presentation, and interactions.

### Document

> Logically distinct assembly of content (such as a file, set of files, or streamed media) that: functions as a single entity rather than a collection; is not part of software; and does not include its own software to retrieve and present content for users. Examples of documents include, but are not limited to, letters, email messages, spreadsheets, presentations, podcasts, images, and movies.

### Web page

> A non-embedded resource obtained from a single Universal Resource Identifier (URI) using HyperText Transfer Protocol (HTTP) plus any other resources that are provided for the rendering, retrieval, and presentation of content.

### Public Facing

> Content made available by an agency to members of the general public. Examples include, but are not limited to, an agency Web site, blog post, or social media pages.

Non-public official communications still in 508 scope are listed in [E205.3](https://www.access-board.gov/ict/#E205.3) (emergency notices, forms, training materials, intranet pages, …).

### Name

> Text by which software can identify a component to the user. A name may be hidden and only exposed by assistive technology, whereas a label is presented to all users. In many cases, the label and the name are the same. Name is unrelated to the name attribute in HTML.

### Label

> Text, or a component with a text alternative, that is presented to a user to identify content. A label is presented to all users, whereas a name may be hidden and only exposed by assistive technology. In many cases, the name and the label are the same.

### Programmatically Determinable

> Ability to be determined by software from author-supplied data that is provided in a way that different user agents, including assistive technologies, can extract and present the information to users in different modalities.

### Audio Description

> Narration added to the soundtrack to describe important visual details that cannot be understood from the main soundtrack alone. … Audio description is also called “video description” and “descriptive narration”.

### Closed Functionality

> Characteristics that limit functionality or prevent a user from attaching or installing assistive technology. Examples of ICT with closed functionality are self-service machines, information kiosks, set-top boxes, fax machines, calculators, and computers that are locked down so that users may not adjust settings due to a policy such as Desktop Core Configuration.

### Agency

> Any agency or department of the United States as defined in 44 U.S.C. 3502, and the United States Postal Service.

### Alteration

> A change to existing ICT that affects interoperability, the user interface, or access to information or data.

### Also defined in E103.4

Hardware and telecom terms used less often in this web-focused library, still binding when those chapters apply: Application, Existing ICT, Hardware, Information Technology, Keyboard, Menu, Non-Web Document, Non-Web Software, Operable Part, Platform Accessibility Services, Platform Software, Real-Time Text (RTT), Revised 508 Standards, Software, Telecommunications, Terminal, Text, TTY, Variable Message Signs (VMS), Voice over Internet Protocol (VoIP).

Full list: https://www.access-board.gov/ict/#E103-defined-terms

## GSA program and testing terms

Paraphrased from the [Glossary of Section 508 Terms](https://www.section508.gov/tools/glossary/). These are how federal 508 programs talk; they are **not** E103.4.

### Accessibility Conformance Report (ACR)

A document that explains the extent to which a product conforms to accessibility standards such as WCAG or the Section 508 technical standards. A common way to complete an ACR is the ITI [Voluntary Product Accessibility Template (VPAT®)](https://www.section508.gov/sell/vpat), though agencies also use other formats.

### VPAT®

ITI’s template for evaluating a product against accessibility standards. Vendors use it to produce an ACR. VPAT is a trademark of the Information Technology Industry Council.

### ANDI

[Accessible Name and Description Inspector](https://www.ssa.gov/accessibility/andi/help/install.html), developed by the Social Security Administration. Manual inspection tool used in version 5 of DHS Trusted Tester. Library note: [testing tools — ANDI](/docs/evaluation/testing-tools/andi/).

### Trusted Tester Process

A manual test approach developed by DHS that aligns with the ICT Testing Baseline and aims at repeatable Section 508 conformance results. DHS trains and certifies testers. Agencies that adopt the process accept results only from **certified** Trusted Testers. See [DHS 508 Training](dhs-508-training/) and [dhs.gov/trusted-tester](https://www.dhs.gov/trusted-tester).

### ICT Testing Baseline

Minimum tests and evaluation guidance that a Section 508 conformance test process should include. **Not** a step-by-step method and **not** a tool. Trusted Tester is one process that implements the Baseline. Official portfolio: https://ictbaseline.access-board.gov/

The Access Board: the Baseline for Web is mapped to **Section 508 / WCAG 2.0**, even though some Understanding articles it cites are the current WCAG 2.2 versions.

### Accessibility Requirements Tool (ART)

GSA web application that walks which Revised 508 requirements apply to an ICT acquisition: https://www.section508.gov/art/

## WCAG glossary (not copied)

Success criteria use defined terms. Those definitions live in the Recommendation:

- WCAG 2.2: https://www.w3.org/TR/WCAG22/#glossary
- Dated: https://www.w3.org/TR/2024/REC-WCAG22-20241212/#glossary

Do **not** paste the WCAG Rec glossary into a prompt. Open the official entry for the term in the criterion you are applying.

508 electronic content incorporates **WCAG 2.0** A + AA. ADA Title II web/mobile uses **WCAG 2.1** AA. Terms added only in 2.1 or 2.2 apply only when that edition is the bar.

## Acronyms used in this library

From GSA’s [acronyms list](https://www.section508.gov/tools/acronyms-abbreviations/) plus the names already used in these pages:

| Short | Full |
| --- | --- |
| ACR | Accessibility Conformance Report |
| ADA | Americans with Disabilities Act |
| ANDI | Accessible Name and Description Inspector |
| ART | Accessibility Requirements Tool |
| AT | Assistive Technology |
| ATAG | Authoring Tool Accessibility Guidelines |
| COR | Contracting Officer’s Representative |
| DHS | Department of Homeland Security |
| FAR | Federal Acquisition Regulation |
| ICT | Information and Communication Technology |
| ITI | Information Technology Industry Council |
| SCRT | Section 508 Compliance Reporting Tool |
| USAB | U.S. Access Board |
| VPAT | Voluntary Product Accessibility Template |
| WAI | Web Accessibility Initiative |
| WCAG | Web Content Accessibility Guidelines |

## Related in this library

- [DHS Section 508 Training](dhs-508-training/)
- [Which name to use](../which-name/)
- [Revised 508 Standards](../section-508/revised-standards/)
- [WCAG documents](../wcag/documents/) — standard vs Understanding vs Techniques
