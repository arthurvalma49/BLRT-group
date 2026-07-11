# Content Migration Inventory

**Context:** BLRT Grupp (client) owns all subsidiary websites listed in PROCUREMENT.md. This
inventory tracks migration of the client's approved service copy from those legacy sites into the
new unified site's per-service subpages (`/company/:slug/services/:serviceSlug`).

**Method:** Firecrawl scrape of each source page → verbatim service body (page chrome stripped:
breadcrumbs, language switcher, cookie/reCAPTCHA notices, CTA buttons, contact footers) →
`src/data/serviceContent.ts`, keyed `[companySlug][serviceSlug]`, rendered as Markdown by
`ServiceContent.tsx`. Verified facts in `businesses.ts` (heroDesc, aboutP*, techData, certificates,
contacts) are left untouched.

**Verbatim rule:** service body text is transferred word-for-word. Suspected source typos are kept
and flagged in the Notes column rather than silently corrected.

## Status legend
migrated · pending · dropped (page chrome / not a service) · n/a (no source page)

| Source site | Source page | Target company | Target service slug | Status | Notes |
|---|---|---|---|---|---|
| blrtyards.com | /activities-list/general-ship-repair | tallinn-shipyard, western-shiprepair, turku-repair-yard | ship-repair-and-dry-docking | migrated | Network-level copy shared across all 3 yards on source site |
| blrtyards.com | /activities-list/afloat-repairs | (same 3) | afloat-repairs-and-voyage-repair-services | migrated | |
| blrtyards.com | /activities-list/conversion-and-modernization | (same 3) | conversion-and-modernization | migrated | |
| blrtyards.com | /activities-list/retrofit | (same 3) | retrofit | migrated | |
| blrtyards.com | /activities-list/inspections | (same 3) | inspections | migrated | |
| blrtyards.com | /activities-list/design-engineering | (same 3) | design-and-engineering | migrated | Source copy is about Western Baltic Engineering (the group's design house) |
| tehnometsurvey.ee | /activities-list/non-destructive-testing-ndt | tehnomet-survey | non-destructive-testing-ndt | migrated | Prose; UT/MT/PT/VT/Thermography as subheadings |
| tehnometsurvey.ee | /activities-list/utm-and-steel-supervision | tehnomet-survey | ultrasonic-thickness-measurement-utm-and-steel-supervision | migrated | |
| wbs.lt | /activities-list/turn-key | western-baltic-shipbuilding | turn-key-vessel-construction | migrated | Source is a vessel-portfolio gallery → migrated as a spec table |
| wbs.lt | /activities-list/hulls | western-baltic-shipbuilding | hull-manufacturing | migrated | Spec table |
| wbs.lt | /activities-list/blocks | western-baltic-shipbuilding | steel-block-production | migrated | Block-type list; source has 4th activity "other-constructions" not on our site |
| wcl.lt | /activities-list/…ndt | western-central-laboratory | non-destructive-testing-ndt | migrated | |
| wcl.lt | /activities-list/destructive-testing-dt | western-central-laboratory | destructive-testing-dt | migrated | |
| wcl.lt | /activities-list/ultrasonic-thickness-measurement-utm | western-central-laboratory | ultrasonic-thickness-measurement-utm | migrated | Incl. CAP + Class-renewal subsections |
| wcl.lt | /activities-list/chemical-laboratory | western-central-laboratory | chemical-laboratory | migrated | |
| wcl.lt | /activities-list/control-of-welding-processes + /certification-of-welders | western-central-laboratory | control-of-welding-processes-and-welder-certification | migrated | Our slug combines two source pages |

| elmetks.ee | /activities-list/non-destructive-testing | elme-tks | non-destructive-testing | migrated | **Remapped:** service array rebuilt to match source's 6 services |
| elmetks.ee | /activities-list/destructive-testing | elme-tks | destructive-testing | migrated | was "metal-inspection-and-testing" |
| elmetks.ee | /activities-list/instrument-calibration | elme-tks | instrument-calibration | migrated | was "calibration-services" |
| elmetks.ee | /activities-list/chemical-analyses | elme-tks | chemical-analyses | migrated | |
| elmetks.ee | /activities-list/training-and-certification | elme-tks | training-and-certification | migrated | |
| elmetks.ee | /activities-list/occupational-health-and-safety-hazard-assessment | elme-tks | occupational-health-and-safety-hazard-assessment | migrated | |
| — | (invented, no source) | elme-tks | ~~weld-quality-control~~, ~~technical-control~~ | dropped | Removed; had no corresponding source service |

**Migrated so far: 7 companies (shipbuilding + inspection sectors), 34 service pages.** Rendering pipeline (`ServiceContent` + `react-markdown`) verified across prose, subheadings, tables and lists. Build/typecheck/lint green.

**Redirects note:** Elme TKS old slugs (metal-inspection-and-testing, weld-quality-control, calibration-services, technical-control) are retired — generate 301s at launch if any were published.

### Engineering sector — in progress
| moc.ee | offshore-oil-and-gas / subsea / infrastructure-and-industrial-equipment / renewable-energy | moc | (same 4) | migrated | **Remapped 5→4;** dropped invented "qhse-quality-assurance" |
| blrtrekato.ee | ship-repair / shipbuilding / oil-gas-and-renewable-energy | blrt-rekato | (same 3) | migrated | **Remapped 5→3;** dropped pipeline-manufacturing, profile-structure-fabrication, metal-processing |
| barselekter.com | products / services / solutions / green-ict-project | bars-elekter | products / services / solutions / green-ict-projects | migrated | **Remapped** to source's 4; Green ICT migrated EN-only (ET is WPML alt) |
| marinetechnology.lt | cable-handling / offshore-wind / subsea / industrial | marine-technology-lt | (same 4) | migrated | **Remapped** service names to source's 4 industries |

**Migrated total: 11 companies, 52 service pages.** Build/typecheck/lint green.

### Materials, port & services sectors — migrated (this pass)
Applied client decisions: (1) no-prose sites → migrate whatever exists, mirroring source structure; (2) Marketex Offshore = duplicate of MOC → skipped, entry flagged for removal.

| Source site | Target company | Target service slugs | Status | Notes |
|---|---|---|---|---|
| blrtera.ee | blrt-era | electrical-machine-repair-and-maintenance, switchboard-manufacturing-and-modification, automation-system-repair-and-adjustment, generator-and-drive-services | migrated | Source has **no per-service prose** — one flat 16-item `/services` bullet list. Split verbatim bullets across the 4 slugs. Two leftover bullets ("Installation of cable routes", "Cable works") folded into the machines slug. Typo kept: "voltage regulations (AVRs)". |
| masinaehitus.ee | blrt-masinaehitus | series-production-and-metal-structures, cnc-machining, welding-and-fabrication | migrated | Source organised by **equipment**: About-us → series-production; turning + vertical + horizontal milling pages → cnc-machining (3 `##` sections, spec tables); welding-equipment → welding-and-fabrication. Typos kept: "PHONENIX", "welding in acknowledged". Source EN says est. 2002 (RU says 2004 — not resolved; businesses.ts untouched). |
| elmemetall.eu | elme-metall | flat-products-prefabrication, prefabrication-of-structural-tube-and-merchant-sections, reinforcement-products-prefabrication, surface-treatment-and-hot-dip-galvanization | migrated | 4 spec pages, dense process/spec tables. In-cell `<br>` line-breaks rendered as " / " (renderer has no rehype-raw); `####` flattened to `###`; stray `2*1` asterisks markdown-escaped. Cyrillic chars in source dims and typos ("hot-deep", "ym") kept verbatim. |
| elmemesser.ee | elme-messer-gaas | gas-in-cylinders-and-packages, liquefied-gases, dry-ice, gas-equipment-and-supply-systems | migrated | 4 product pages. Source titles differ slightly (Bundles vs Packages; "Hardware" → gas-equipment). Deeper child pages (specialty/medical gases, dry-ice-blasting, supply modes) not pulled. Typos kept: "GEARED TO YOU REQUIREMENTS", "evaporisation". |
| elmetrans.ee | elme-trans | international-and-local-transport, equipment-rental, car-rental | migrated | Only transport-services has prose; equipment-rental & car-rental are category-index **lists only** (verbatim). |
| portvenebalti.ee | vene-balti-sadam | berths, tugs, floating-crane | migrated | Clean 1:1. Berths incl. full 22-berth table; tug (AGAR) & floating-crane (HERACLES) spec tables. Grammar quirks kept ("floating dock", "which are making"). |
| mereabi.ee | mereabi | supply, rent, service, products | migrated | Clean 1:1. Supply = 2-col IMPA category table (blank header, faithful to source). Trailing "fill out the form below" CTA dropped. Typos kept: "ropes with musings", "Stationary". |
| blrtvalukoda.ee | blrt-valukoda | grey-cast-iron-gjl, spheroidal-ductile-iron-gjs, heat-and-wear-resistant-castings | migrated (partial) | Source has **no prose** — only cast-iron grade lists (from About-us). heat+wear merged (source has two label lines, no body). **custom-casting-from-drawings: no source → NOT keyed; falls back to businesses.ts.** Source furnace counts conflict between pages — left to businesses.ts (unverified, not migrated). |
| elme.ee | elme | industrial-goods-supply, energy-supply, crane-maintenance, network-and-communication-services | migrated (partial) | Source has only 3 service pages for 5 slugs. Procurement→industrial-goods; Technical Maintenance→crane-maintenance (broader than cranes). Single "Network Services" page **split**: licences/sales → energy-supply, connection procedure → network-and-communication-services (no telecom copy exists — not fabricated). **marine-equipment-supply: no source → NOT keyed; falls back to businesses.ts.** |
| wsa.lt | western-ships-agency | port-agency, ship-supply, cargo-and-freight-forwarding, multipurpose-agency-services | migrated | Agency/Ships supply/Freight forwarding = clean matches. multipurpose-agency-services ← source "Port additional services" (no exact match; umbrella mapping). Source "Chartering" page has no target slug — not migrated. |
| wst.lt | western-stevedoring | dry-bulk-handling, break-bulk-and-general-cargo, liquid-cargo-handling, storage-and-warehousing, logistics-and-ancillary-services | migrated | break-bulk-and-general merges two source pages (both `##` sections). storage-and-warehousing pulled from About-us "Warehouses and open sites" (no dedicated page). logistics ← "Other services". Source "Heavy & oversized cargo" and "Ash terminal" have no target slug — not migrated. |

**Skipped / flagged:**
- **marketex.ee — Marketex Offshore: duplicate of MOC. Not migrated. RECOMMEND removing the `marketex-offshore` businesses.ts entry** (slugs offshore-steel-structures / aluminium-vessels / offshore-wind-foundations) — MOC (`moc`) is the canonical offshore-constructions page.

**Two slugs intentionally left to businesses.ts fallback** (no source content exists; not fabricated): `blrt-valukoda/custom-casting-from-drawings`, `elme/marine-equipment-supply`. If prose is wanted, it must be authored and client-approved.

**Grand total migrated: 22 companies, ~92 service pages.** Build, ESLint and a react-markdown render test (tables, escaped asterisks, no raw `<br>`) all green. All new copy verbatim; suspected source typos kept and flagged above per the verbatim rule.
