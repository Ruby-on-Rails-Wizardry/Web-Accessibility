# ADA Title II: web content and mobile apps

> **Local copy of a U.S. government publication.** Works of the U.S. government are generally in the public domain.
>
> **Sources:**
> - [Fact Sheet: New Rule on the Accessibility of Web Content and Mobile Apps Provided by State and Local Governments](https://www.ada.gov/resources/2024-03-08-web-rule/) — ADA.gov (8 April 2024; updated for the 2026 IFR)
> - Final rule: https://www.federalregister.gov/documents/2024/04/24/2024-07758/nondiscrimination-on-the-basis-of-disability-accessibility-of-web-information-and-services-of-state
> - Rule PDF: https://www.ada.gov/assets/pdfs/web-rule.pdf
> - Interim Final Rule extending dates (20 April 2026): https://www.federalregister.gov/documents/2026/04/20/2026-07663/extension-of-compliance-dates-for-nondiscrimination-on-the-basis-of-disability-accessibility-of-web
> - IFR PDF: https://www.ada.gov/assets/pdfs/2026-ifr.pdf
>
> **Status:** The fact sheet is informal DOJ guidance, not the regulation. Binding text is in 28 C.F.R. Part 35 as amended. First-steps page: https://www.ada.gov/resources/web-rule-first-steps/

## Who it binds

Title II of the ADA requires **state and local governments** to make services, programs, and activities accessible, including those offered online and through mobile apps. The rule applies to:

- state and local governments and their agencies/departments
- special purpose districts
- Amtrak and other commuter authorities
- contractors that provide public services for those entities

Examples from the fact sheet: benefits offices, public schools and universities, police, courts, elections offices, public hospitals, parks, libraries, transit agencies.

This is **not** Section 508 (federal ICT) and **not** ADA Title III (private public accommodations). Title III still has no WCAG edition written into the regulation the way this rule does.

## Technical standard

**WCAG 2.1 Level AA** is the technical standard for covered web content and mobile apps.

“Web content” includes text, images, sound, videos, and documents available on the web. Mobile apps are software downloaded to run on phones and tablets.

A government must meet the standard for content **it** provides or makes available, including content a vendor provides for it (a county park-hours page built by a design firm; a city parking app run by a private company).

### Equivalent facilitation

Entities may use a different design if they can prove it provides the **same or more** accessibility and usability than WCAG 2.1 AA (for example a future WCAG 3.0 that meets that test). WCAG 2.2 AA is backwards compatible with 2.1 AA, so meeting 2.2 AA is a common way to exceed the floor. That is a project choice; the rule’s cited edition is 2.1.

DOJ cites the 5 June 2018 Recommendation: https://www.w3.org/TR/2018/REC-WCAG21-20180605/

## Compliance dates (after the April 2026 IFR)

| Entity | Date |
| --- | --- |
| Total population **50,000 or more** | **26 April 2027** |
| Total population **under 50,000**, and **special district governments** | **26 April 2028** |

Population is generally 2020 Census total population of the government. City departments (police, library) use the city’s population. Independent school districts use Small Area Income and Poverty Estimates; city/county districts use the parent government’s population.

After the date, entities must **continue** to meet WCAG 2.1 AA.

## Exceptions (content that need not meet WCAG 2.1 AA)

Exceptions are narrow. **Effective communication, reasonable modifications, and equal opportunity still apply** — you may have to provide the content another way on request.

### 1. Archived web content

All four must be true:

1. Created before the compliance date (or reproduces pre-date physical media)
2. Kept only for reference, research, or recordkeeping
3. Kept in a special archive area
4. Not changed since it was archived

City council minutes created **after** the date do not become archived just because they sit in an `/archive` folder. Editing a file and re-posting it breaks the exception.

### 2. Preexisting conventional electronic documents

Word-processing, presentation, PDF, or spreadsheet files that were on the site or app **before** the compliance date — **unless** they are still used to apply for, access, or participate in a service (a 2020 PDF license application still in use must meet WCAG 2.1 AA). Updating a pre-date document also takes it out of the exception.

### 3. Third-party content (not posted under contract)

A member of the public posting on a town message board is excepted. The **platform**, vendor-posted content, and third-party widgets the government embeds (calendars, maps, payments) are **not**.

### 4. Individualized password-protected documents

Must be (a) word/presentation/PDF/spreadsheet, (b) about a specific person, property, or account, and (c) password-protected. An HTML bill in a portal is not excepted. A PDF rate-increase notice to all customers is not excepted.

### 5. Preexisting social media posts

Posts made **before** the compliance date. New posts are in scope.

## Other limits

- **Fundamental alteration / undue burden** still exist, case by case.
- **Conforming alternate versions** are allowed only when a technical or legal limitation prevents making the primary content accessible. A separate “accessible site” is not the default.
- **Minimal impact:** a failure so small it does not change access (DOJ’s example: contrast 4.45:1 vs required 4.5:1) may not violate the rule — the entity has to **prove** that. A form that “eventually works” but takes much longer or needs a helper **does** violate.

If someone still cannot use conforming 2.1 AA content, the entity is not required to change that content further, but must still provide effective communication / a reasonable modification (another way to buy the fair ticket).

## First steps (official)

https://www.ada.gov/resources/web-rule-first-steps/

Help: [ADA Information Line](https://www.ada.gov/infoline); [ADA National Network](https://adata.org/) 800-949-4232.

## Agent profile

Use `ada-title-ii` in [../profiles/requirement-profiles.md](../profiles/requirement-profiles.md): all WCAG 2.1 A + AA criteria (including the 12 added in 2.1). The six WCAG 2.2 A/AA criteria are **not** required by this rule; they are recommended extra.
