# BLRT Grupp Website — Content Completeness Audit
**Date:** 2026-06-29  
**Method:** All 24 BLRT websites listed in PROCUREMENT.md scraped and compared against `src/data/businesses.ts` and all page files.

---

## Overall Completeness Score: ~55–60%

| Category | Status |
|---|---|
| Company coverage (24 of 26 real entities) | **91.7%** — 2 entire companies missing |
| Per-company content depth (avg) | **~68%** — varies greatly |
| News / Projects / Jobs | **0%** — all placeholder |
| Group-level facts (countries, scale) | **~50%** — incorrect/understated |

---

## SECTION 1 — CRITICALLY MISSING COMPANIES

These two entities have their own procurement-listed websites but are **completely absent** from `businesses.ts` and all `sectorGroups`.

---

### 1A. Marine Technology LT — `marinetechnology.lt`

**What they do:** EPCI (Engineering, Procurement, Construction, Installation) for cable handling systems; offshore wind, subsea, oil & gas, and industrial cable reel manufacturing.

**Key facts:**
- Founded **1994 in Grimstad, Norway**
- Acquired by Western Shipyard Group in **2010**
- **100+ employees**
- **25,000 m²** workshop space
- Operates in **2 countries**
- Proprietary products: **Composite Reel** and **Modular Reel** (patented/developed)
- Industries: offshore wind energy, subsea, oil & gas, industrial manufacturing, cable handling
- Holds QHSE certifications for production, management and environmental protection

**Contact:**
- Address: Minijos St. 180, 93269 Klaipėda, Lithuania
- Phone: +370 682 42098
- Email: info@marinetechnology.lt

**Action needed:** Add as new `Business` entry. Suggest placing in "Engineering" sectorGroup (or create "Offshore & Renewables" sub-group with MOC, WTS, Marine Technology LT).

---

### 1B. Western Stevedoring — `wst.lt`

**What they do:** Maritime stevedoring — dry bulk, break bulk, general, liquid, heavy/oversized cargo handling and storage at the Port of Klaipėda.

**Key facts:**
- Founded **2003**
- Part of Western Shipyard Group (20 companies)
- Location: southern section of **ice-free Klaipėda Seaport**
- **5 specialized terminals**
- Annual cargo throughput: **2.5+ million tons** (currently 1.8M)
- **10 quays**, total length **2.5+ km**
- Internal railway: **6.5 km**, plus 2.5 km to Draugystė Railway Station
- **16 covered warehouses**, 50,000 m²
- **150,000 m²** open storage
- Max vessel: draft 13.4 m, length 230 m (Panamax)
- Cargo types: dry bulk, break bulk, liquid, heavy/oversized, general, ash
- Services: cargo handling (ship/rail/vehicle), storage, processing, railway shunting, containerization, customs brokerage, weighing
- Hydroelectric crane operational since 2022 (EU Green Deal compliance)
- ISO certified
- **150+ employees**

**Contact:**
- Address: Minijos Street 180, LT-93269, Klaipėda, Lithuania
- Admin: +370 605 342 94
- Dispatcher (24/7): +370 698 854 69

**Action needed:** Add as new `Business` entry in "Port & Marine Services" sectorGroup (alongside Vene-Balti Sadam, Mereabi, Western Ships Agency).

---

## SECTION 2 — FACTUAL ERROR IN CURRENT DATA

### BLRT Masinaehitus — founding year wrong
- **Our data (`businesses.ts`):** "established in 2002"
- **Their website:** "Established in 2004"
- **Fix:** Change `aboutP1` to reflect 2004 founding.

---

## SECTION 3 — PER-COMPANY CONTENT GAPS

### 3.1 BLRT Repair Yards — `blrtyards.com` (covers Tallinn Shipyard, Western Shiprepair, Turku Repair Yard)

**Missing from our site:**
- New floating dock currently under construction at Western Shiprepair Klaipėda facility (announced June 2026) — **major current development**
- ESL Shipping pusher-barge maintenance project (May 2026) — notable recent project reference
- Floating dock spec discrepancy: blrtyards.com lists "235 m × 45 m" and "235 m × 70 m × 7.1 m"; our data says "235 m × 44 m" — verify and correct
- One of Northern Europe's largest dry docks (Naantali/Turku): "265 m × 70 m × 7.1 m" — this Turku-specific spec is in our fullDesc but the current Turku Repair Yard profile lacks its own address (shows Tallinn's Kopli 103 instead of a Finnish address)

**Turku Repair Yard contact correction needed:**
- Currently shows Kopli 103, Tallinn as address — should be a Finnish address (Naantali or Turku). The Turku yard in Finland has no separate website in the procurement list; blrtyards.com is the umbrella. The address in `businesses.ts` must be corrected.

---

### 3.2 Western Shiprepair (Klaipėda)

**Missing from our site:**
- Address shown as Kopli 103, Tallinn (same as Tallinn Shipyard) — should be Klaipėda address or at minimum not Tallinn
- Yard-specific dock details not presented separately from the blrtyards.com overview

---

### 3.3 BLRT Rekato — `blrtrekato.ee`

**Missing from our site:**
- **100 specialists** (no staff count in our data)
- **45 tonnes/month** production capacity (not mentioned)
- **Renewable energy projects** as a service area (completely missing — website explicitly lists "Oil & Gas and Renewable Energy" as a division)
- Virtual facility tour and video content available on site (not referenced)

---

### 3.4 BLRT Valukoda — `blrtvalukoda.ee`

**Missing from our site:**
- **30 specialists** (no staff count in our data)
- **1,400 product names** in the range (not mentioned)
- Specific iron grades — full list missing:
  - Grey iron: GJL150, GJL200, GJL250, GJL300
  - Nodular iron: GJS400-15, GJS500-7, GJS500-14, GJS600-3, GJS600-10, GJS700-2, GJS800-2
  - Wear-resistant: **Ni-Hard cast iron**
  - Heat-resistant: chromium cast iron up to **30% chromium content**
- Full equipment list missing:
  - Mixer Omega Spartan units (10 t/h capacity each) ×2
  - Inductotherm induction furnaces (1.0 t, 1.0 t, 0.5 t)
  - Shot blasting machinery
  - Reclamation plant (8–10 t capacity)
  - Automated spray paint cabinet with conveyor system
- **Furnace size discrepancy:** Our data says "two 1,000 kg melting furnaces and one 500 kg furnace"; the about page says "two 500 kg and one 1,000 kg" — needs authoritative verification and correction
- **EU Cohesion Fund support + foundry expansion** — topping-out ceremony held **April 2026** (significant recent development, fits as news item)

---

### 3.5 BLRT ERA — `blrtera.ee`

**Missing from our site:**
- Virtual tour available on company website (not mentioned — a notable feature)
- Vacancies listed via parent BLRT.ee portal (not mentioned)

---

### 3.6 Bars Elekter — `barselekter.com`

**Missing from our site:**
- **Green ICT Projects** initiative/business line (website lists it as a separate activity category alongside Services, Products, Solutions — completely absent from our data)
- Alternative contact phone: +372 610 2408 (only mobile listed in our data)

---

### 3.7 Elme TKS — `elmetks.ee` *(currently lowest completeness at ~45%)*

**Missing certifications (all absent from our data):**
- ISO 14001:2015 (Environmental Management)
- ISO 45001:2018 (OHS)
- Industrial Radiography Permit
- Educational Activities License
- Electrical Measurement and Testing Accreditation
- Occupational Health and Safety Hazard Assessment Accreditation
- Destructive Testing Accreditation (EN ISO/IEC 17025)
- Non-destructive Testing Accreditation
- Calibration Laboratory Accreditation
- DNV Classification Society Approval (NDT)

**Missing services (completely absent from our data):**
- **Chemical Analyses** service
- **Training and Certification** service
- **Occupational Health and Safety Hazard Assessment** service

**Missing contact:**
- Phone: +372 610 2408 (our data has no phone for Elme TKS)

---

### 3.8 Elme Trans — `elmetrans.ee`

**Missing from our site:**
- Named key contacts with direct phones:
  - Ilja Šustrov (Sales Manager, Equipment Rental): +372 5683 6297
  - Raul Urbalu (Sales Specialist, Equipment Rental): +372 5672 2290
  - Juri Samoshenkov (Project Manager, Equipment Rental): +372 515 6767
  - Dmitri Butakov (Project Manager, Equipment Rental): +372 5558 6492
  - Vadim Kolenchenko (International Transport): +372 5302 1726
  - Julia Sizova (Local Transport): +372 514 5329

---

### 3.9 Elme Metall — `elmemetall.eu`

**Missing from our site:**
- **E-Shop portal**: shop.elmemetall.eu (online ordering — notable customer-facing feature)
- **Stainless steel products** listed as a product category on their site (our data only covers hot-rolled, structural, and cut parts)
- Sales volume figure "195 million euros" is present in our `aboutP1` ✓

---

### 3.10 Elme Messer Gaas — `elmemesser.ee`

**Missing from our site:**
- **Multiple sales locations** across Estonia: Tallinn, Narva, Pärnu, Viljandi, Võru, Tartu (our data implies only Tallinn HQ)
- **ZeCarb program** — carbon neutrality initiative (completely missing)
- Magazine **"Gases for Life"** (published content, not mentioned)
- Additional gas types: **xenon, neon, krypton** (our product listing is incomplete)
- Additional industries served (not in our data): electronics, glass & minerals, pulp & paper, rubber & plastics, construction, water treatment
- **MegaPack C4** with **Duplex 300/200 bar technology** (mentioned in our data only generically as "MEGAPACK C4 bundles")

---

### 3.11 Mereabi — `mereabi.ee`

**Missing from our site:**
- **"Over 50 years"** explicitly stated on their site (our data correctly says "since 1975")
- Specific brands/manufacturers they represent (website encodes this but doesn't list plainly)

---

### 3.12 Marketex Marine — `marketexmarine.net`

**Missing from our site:**
- **Akva Arctic offshore operations** as a specific capability (mentioned on site, absent from our services)
- Explicit mention of prefabrication shop and hull assembly shop as facilities

---

### 3.13 Marketex Offshore Constructions (MOC) — `moc.ee`

**Missing from our site:**
- **20,550 m²** workshop area (completely absent from our data — we have no facility size)
- **350,000 man-hours** welding capacity annually (completely absent)
- **20 m crane hook lift** (not in our data)
- **Subsea structures** as a service area (website mentions subsea; our data doesn't)
- Phone: **+372 610 2535** (our data has no phone for MOC)

**Note:** The site has two entries for Marketex-related offshore work: `marketex-offshore` (as a general category) and `moc` (as the specific operating entity). These overlap and should potentially be consolidated with correct MOC data.

---

### 3.14 Western Technological Solutions — `techsolutions.lt` *(~40% completeness — most underpopulated non-missing company)*

**Missing from our site:**
- Tank capacity range: up to **6 m internal diameter, 34 m height**
- Heavy lifting: **500+ ton single-piece capacity**
- Track record: **250+ large-scale stainless steel structures** delivered
- Client credential: **"10+ from EU Top 30 Engineering Companies trust us"**
- Workshop: **3,240 m²** + **7,000 m²** outdoor assembly space
- Proximity advantage: **"70 m between workshop gate and sea pier"** (key logistics USP)
- Specific product lines entirely missing:
  - Pressurized heating buffer tanks
  - Atmospheric thermal energy storage tanks (50–500 m³)
  - Pressurized/atmospheric chilled water storage tanks
  - Stainless steel scrubbers
  - **Flue gas treatment systems**
  - **CO₂ capture absorbers** (carbon capture)
  - **Water and wastewater treatment systems**
  - Duplex stainless steel bridges
- Company legal name: **Vakarų technologiniai sprendimai, UAB**
- Phone: **+370 68 515 464** (our data has no phone)
- SAP Ariba Network ID: AN11090198629

---

### 3.15 Western Baltic Engineering — `wbe.lt`

**Missing from our site:**
- Specific vessel types designed (our data is vague; site specifies): fishing trawlers, passenger vessels, RO-PAX, LNG bunkering vessels, MPV vessels, dredgers, special purpose/offshore vessels, workboats
- **Corporate Social Responsibility** programs with published SR reports and policies (completely absent)
- LinkedIn: linkedin.com/company/western-baltic-engineering
- Phone: +372 610 2408 (no phone in our data)

---

### 3.16 Western Ships Agency — `wsa.lt`

**Missing from our site:**
- **ShipServ** platform presence (professional maritime marketplace registration — relevant to B2B credibility)
- **2023 SR Report** and SR Policy available as downloads (CSR commitment)

---

### 3.17 Vene-Balti Sadam — `portvenebalti.ee`

**Missing from our site:**
- **VBS Price List 2026** (publicly available document — should be referenced or linked)
- **VBS Rules 2026** (port regulations document — important for vessel operators)
- **Port Map** and **Territory Map (2025)** available
- Weather information service via the port website

---

### 3.18 Western Shipyard Group (WSY) — `wsy.lt` *(group-level info not on our site)*

**Missing from our site:**
- WSY group employs **2,000+ people** with **3,000+ work positions** (our site shows no WSY group stats)
- WSY is described as **"one of the largest marine engineering corporations in Lithuania for already five decades"**
- **Largest electro-hydraulic crane in the Baltic States** (operational September 2022)
- Port services, logistics & stevedoring listed as a formal WSY service area (connects to the missing Western Stevedoring company)
- WSY group phone: **+370 46 483 600** (Klaipėda group office)
- WSY group address: Minijos St. 180, 93269 Klaipėda, Lithuania

---

## SECTION 4 — GROUP-LEVEL / CROSS-SITE GAPS

### 4.1 Country count is wrong everywhere on the site

**Current site shows:** 5 countries (EE · LV · LT · FI) in stats and Home page  
**Procurement doc states:** "Estonia, Lithuania, Latvia, Finland, Poland, Ukraine and Brazil" = **7 countries**  
**Fix:** Update country stat from 5 to 7 and update the country tags display.

### 4.2 Company count understated

**Current site shows:** "24 companies across 6 sectors"  
**Procurement doc states:** "more than 50 companies"  
**Reality:** Our site represents 22 of those 50+ companies (not all need dedicated pages, but the headline "50+" is the true BLRT scale claim)  
**Fix:** The stat on the Home/About page should say "50+" companies rather than "24".

### 4.3 All news content is placeholder

All 3 news items in `src/data/news.ts` are marked `[Placeholder]`. Real events that could be immediate news entries based on website content:
- **June 2026**: Western Shiprepair begins construction of new floating dock in Klaipėda
- **May 2026**: ESL Shipping pusher-barge maintenance completed at Tallinn Shipyard
- **April 2026**: BLRT Valukoda topping-out ceremony for EU Cohesion Fund-supported foundry expansion

### 4.4 All projects content is placeholder

All 6 project entries in `src/data/projects.ts` are marked `[Placeholder]`. No real case studies exist.

### 4.5 All jobs content is placeholder

All 3 job entries in `src/data/jobs.ts` are marked `[Placeholder]`.

### 4.6 Activities page scope too narrow

`/activities` covers only NDT and UTM methods — content drawn from the Tehnomet Survey / WCL inspection companies. The page title "Activities" implies group-wide scope but only represents the Inspection sector. Shipbuilding, ship repair, steel processing, engineering, port services — all missing from this page.

### 4.7 No group history / timeline section

The About page has a "Our Story" section driven by translation keys (`storyP1`, `storyP2`, `storyP3`) but no visual timeline. The 1912 founding is mentioned but no milestones are shown. A timeline showing 1912 → 1946 (WBS roots) → 1994 (Marine Technology) → 1996 (BLRT ERA joins group) → 1998 (Tehnomet Survey) → 1999 (Elme Messer Gaas JV) → 2000 (Vene-Balti Sadam, BLRT Rekato) → 2001 (Elme Metall, Elme TKS) → 2002 (Elme Trans, Western Ships Agency) → 2003 (WCL, WBE, Western Stevedoring) → 2010 (Marine Technology joins) → 2017 (Mereabi acquired) would significantly strengthen the About page.

### 4.8 No dedicated BLRT Grupp main-site content page

`blrt.ee` (the main BLRT Grupp site) returned HTTP 403, meaning it blocks scrapers. However, the group headquarters page likely contains leadership, governance, annual reports, and press releases not represented on our site. A "Group" or "Investor" section is absent.

### 4.9 Klaipėda group presence not visible in Contacts

The Contacts page only shows Kopli 103, Tallinn. BLRT/WSY has a significant Klaipėda presence (Minijos St. 180) covering 8+ companies. A second contact block for the Klaipėda hub is missing.

### 4.10 No CSR / Social Responsibility section

Multiple subsidiaries (WBE, WSA, WST, WBS) publish SR reports and policies. The Sustainability page on our site covers ship repair environmental initiatives well but lacks the group-wide CSR angle represented across the subsidiary sites.

---

## SECTION 5 — CONTACT DATA ERRORS AND GAPS

| Company | Issue |
|---|---|
| Western Shiprepair | Address shows Kopli 103, Tallinn — should be Klaipėda |
| Turku Repair Yard | Address shows Kopli 103, Tallinn — should be Finnish address |
| Elme TKS | No phone listed (website: +372 610 2408) |
| MOC | No phone listed (website: +372 610 2535) |
| Western Tech Solutions | No phone listed (website: +370 68 515 464) |
| Western Baltic Engineering | No phone listed (website: +372 610 2408) |
| Western Stevedoring | **Company entirely missing** |
| Marine Technology LT | **Company entirely missing** |
| Elme Messer Gaas | Missing sales locations outside Tallinn |

---

## SUMMARY DEFICIT TABLE

| Area | Gap Severity | Notes |
|---|---|---|
| Marine Technology LT (marinetechnology.lt) | 🔴 Critical — company absent | Cable reels, offshore, EPCI, 100+ staff |
| Western Stevedoring (wst.lt) | 🔴 Critical — company absent | 2.5M tons/year port ops, Klaipėda |
| Country count (5 vs 7) | 🔴 Critical — factual error | Missing Poland, Ukraine, Brazil |
| Company count (24 vs 50+) | 🔴 Critical — factual error | Scale massively understated |
| All news/projects/jobs placeholders | 🔴 Critical — zero real content | Needs real entries from client |
| BLRT Masinaehitus founding year (2002 vs 2004) | 🟠 High — factual error | Fix in businesses.ts |
| Western Technological Solutions — missing specs | 🟠 High — major gaps | 250+ structures, tank specs, USPs |
| MOC — missing workshop/capacity data | 🟠 High | 20,550 m², 350k man-hours |
| BLRT Valukoda — missing grades/equipment/staff | 🟠 High | 30 staff, 1,400 products, specific grades |
| BLRT Rekato — missing staff/capacity/renewables | 🟠 High | 100 staff, 45t/month, renewable energy |
| Elme TKS — missing 3 services + certifications | 🟠 High | Chemical analyses, training, OHS |
| Western Stevedoring contact (Klaipėda hub) | 🟠 High | No Klaipėda contact on Contacts page |
| BLRT Valukoda furnace spec discrepancy | 🟡 Medium — verify | 2×1000kg+1×500kg vs 2×500kg+1×1000kg |
| Elme Messer Gaas — sales locations, ZeCarb | 🟡 Medium | 6 Estonia locations, carbon program |
| Western Baltic Engineering — vessel types, CSR | 🟡 Medium | More specific design portfolio |
| Bars Elekter — Green ICT Projects missing | 🟡 Medium | Entire business line absent |
| Contact address errors (Shiprepair, Turku) | 🟡 Medium — factual error | Wrong country/city shown |
| Missing phones (Elme TKS, MOC, WTS, WBE) | 🟡 Medium | 4 companies have no phone |
| Activities page — only covers inspection | 🟡 Medium — scope issue | Should cover all 6 sectors |
| No group timeline on About | 🟡 Medium | 1912–2026 milestones missing |
| No Klaipėda contact block | 🟡 Medium | Major office invisible |
| Marine Technology LT EPCI / reel products | 🟡 Medium (part of missing company) | |
| Elme TKS phone missing | 🟡 Medium | +372 610 2408 not shown |
| BLRT Yards — new floating dock news | 🟡 Medium | June 2026 development missing |
| Elme Metall e-shop | 🟡 Medium | shop.elmemetall.eu not referenced |
| Vene-Balti port documents | 🟡 Medium | Price list, rules, maps not referenced |
| Elme Trans named contacts | 🟡 Medium | 6 named staff members missing |
| WSY group stats | 🟡 Medium | 2,000+ employees, 21 companies |
| Mereabi "50+ years" explicit claim | 🟡 Low | Minor phrasing gap |
| WBS / WBE CSR reports | 🟡 Low | Downloadable docs not referenced |
| ShipServ registration (Western Ships Agency) | 🟡 Low | Professional marketplace not mentioned |

---

*End of audit. All data sourced from direct website scraping on 2026-06-29.*

---

## SECTION 6 — SUSTAINABILITY · ABOUT US · CONTACTS: DEEP AUDIT

**Method:** All 24 BLRT websites scraped by 24 parallel agents on 2026-06-29. Each agent fetched `/about/`, `/sustainability/`, `/contacts/`, `/responsibility/`, `/csr/`, `/social-responsibility/`, and related path variants, then extracted structured data. A synthesis agent compared findings against the current React site (`About.tsx`, `Sustainability.tsx`, `Contacts.tsx`, `businesses.ts`). Total tool calls: 493. Total tokens: 691k.

**Summary stats:** 7 sites have a dedicated sustainability/SR page · 18 sites name at least one leader · 7 sites host or reference downloadable SR reports · 42 new named contacts found across all sites · 7 critical deficits · 15 high · 18 medium · 10 low.

---

### 6A — ABOUT US DEFICITS

#### 6A-1 🔴 CRITICAL — Company count stat is wrong
- **Source:** blrt.ee (BLRT Grupp HQ)
- **Finding:** The HQ site states "more than 50 companies" operating in 7 countries. Current React site shows **"24"** on the About page stat card.
- **Current site:** `About.tsx` stat array: `{ v: "24", l: t("blrt.about.stat.companies") }`
- **Fix:** Change the stat value from `"24"` to `"50+"` in `About.tsx` and in `Home.tsx` if it also appears there.

#### 6A-2 🔴 CRITICAL — Countries count stat is wrong
- **Source:** blrt.ee (BLRT Grupp HQ)
- **Finding:** BLRT Grupp operates in **7 countries**: Estonia, Latvia, Lithuania, Poland, Ukraine, Finland and Brazil. Current React site shows **"5"**.
- **Current site:** `About.tsx` stat array: `{ v: "5", l: t("blrt.about.stat.countries") }`. Home page band also reads "EE · LV · LT · FI".
- **Fix:** Change stat to `"7"` and update country list copy to add Poland (PL), Ukraine (UA) and Brazil (BR).

#### 6A-3 🟠 HIGH — No Mission / Vision / Strategy section
- **Source:** blrt.ee (BLRT Grupp HQ)
- **Finding:** The HQ publishes explicit, branded statements:
  - **Vision:** "BLRT Grupp is the largest industrial holding in the countries of the Baltic region"
  - **Mission:** "We contribute to the development of our clients' businesses by providing services, manufacturing industrial products and supplying materials"
  - **Strategy:** Target markets (marine transport, renewable energy, engineering, offshore oil & gas, fish farming); commitment to organisational/technological development; being an attractive employer
- **Current site:** No labelled Mission/Vision/Strategy block anywhere. About page has only "Our Story" paragraphs.
- **Fix:** Add a dedicated Mission / Vision / Strategy section to `About.tsx` using the three statements above.

#### 6A-4 🟠 HIGH — Employee count entirely absent
- **Source:** blrt.ee (BLRT Grupp HQ)
- **Finding:** The HQ site prominently states **"4,000 employees"** on both the homepage and the About page.
- **Current site:** No employee count stat card or mention in story text.
- **Fix:** Add `{ v: "4,000+", l: "Employees" }` as a fourth stat card in `About.tsx`, or embed the figure in `blrt.about.storyP1` translation text.

#### 6A-5 🟠 HIGH — Group values not surfaced on About page
- **Source:** blrt.ee (BLRT Grupp HQ)
- **Finding:** The HQ site lists four named core values with sub-text:
  1. **Focus on People** — Recognition and Respect
  2. **Reliability** — Responsibility and Competence
  3. **Efficiency** — Spend Minimum, Reach Maximum
  4. **Development** — Growth and Progress
- **Current site:** `/our-values` route exists in `App.tsx` but the About page has no values teaser or link to it.
- **Fix:** Add a brief values teaser section to `About.tsx` listing the four value names with their sub-headings, linking to `/our-values`.

#### 6A-6 🟠 HIGH — No leadership / management board section
- **Source:** blrt.ee (BLRT Grupp HQ) + elmemetall.eu + blrtvalukoda.ee news
- **Finding:** The following BLRT Grupp-level people are publicly named across scraped sites:
  - **Algerd Andruškevičius** — Member of the Management Board, BLRT Grupp (quoted in Valukoda news re €14M foundry expansion; named on Elme Metall contacts page with +372 511 2272)
  - **Kristina Uustalu** — Office Manager, BLRT Grupp HQ (+372 610 2408, blrt@blrt.ee)
  - **Karina Kond** — Director of Communication (+372 610 2403, karina.kond@blrt.ee)
  - **Inga Stern** — Communications Specialist (+372 610 2593, inga.stern@blrt.ee)
  - **Aleksandr Kobrissov** — Communications Specialist (a.kobrisov@blrt.ee)
- **Current site:** No management board or HQ leadership section on the About page whatsoever.
- **Fix:** Add a "Leadership" section to `About.tsx` naming at minimum Algerd Andruškevičius (Board Member) and Karina Kond (Communications Director). Move these people to the correct page — they should not appear on `Contacts.tsx` as the four current names there belong to Tehnomet Survey, not BLRT Grupp HQ.

#### 6A-7 🟡 MEDIUM — Awards and recognition missing
- **Source:** blrt.ee (BLRT Grupp HQ)
- **Finding:** Awards received:
  - Estonian Ministry of Culture **"Friend of Culture"** title in 2014, 2018, 2023, 2024, and 2025
  - **Shippax RoRo Award 2026** (announced 08.05.2026) for BLRT Grupp Shipyard
- **Current site:** No awards or recognition section.
- **Fix:** Add an awards block to the About page bottom section listing these five "Friend of Culture" years and the 2026 Shippax award.

#### 6A-8 🟡 MEDIUM — Original company name and 2001 rebrand not mentioned
- **Source:** blrt.ee + elmetks.ee (their About Us page covers BLRT Grupp history in detail)
- **Finding:** Founded **12 June 1912** as the **Russo-Baltic Shipbuilding Yard** on the Kopli peninsula, Tallinn. ~10,000 workers involved in construction. First ship launched 1915. The name **BLRT Grupp** was adopted in **2001**. elmetks.ee's About page contains the richest narrative about the group's early history including the wartime period.
- **Current site:** Stat card shows "1912" correctly, but story paragraphs never mention the original name or the 2001 rebrand.
- **Fix:** Update `blrt.about.storyP1` translation to mention the Russo-Baltic Shipbuilding Yard founding and the 2001 BLRT Grupp name adoption.

#### 6A-9 🟡 MEDIUM — Code of Conduct not linked
- **Source:** blrt.ee (BLRT Grupp HQ) + wbs.lt
- **Finding:** A publicly downloadable BLRT Grupp Code of Conduct PDF exists at: `https://blrt.ee/wp-content/uploads/2023/02/blrt-grupp-code-of-conduct-en_2020.pdf`
- **Current site:** No governance section or Code of Conduct link on the About page.
- **Fix:** Add a governance/ethics sub-section or footer note on the About page linking this PDF.

#### 6A-10 🟡 MEDIUM — BLRT Valukoda founding year mismatch (additional note)
- **Source:** blrtvalukoda.ee news article
- **Finding:** A news article on blrtvalukoda.ee calls BLRT Grupp "Estonia's sole large-scale foundry operator (established **1958**)" — implying the foundry itself traces to 1958, though BLRT Valukoda OÜ as a legal entity is more recent. The existing audit (Section 2) flagged "2002 vs 2004" for Masinaehitus; the 1958 foundry date refers to the physical site, not the subsidiary company, and need not be changed.
- **Current site:** Not a change needed, but worth knowing for copy.

#### 6A-11 🟢 LOW — WSY Group founding (1966) absent from group narrative
- **Source:** wsy.lt
- **Finding:** Western Shipyard Group was founded in **1966** and now comprises 21 companies — described as one of the largest marine engineering corporations in Lithuania for five decades.
- **Current site:** About page covers BLRT Grupp-level history only.
- **Fix (optional):** Consider adding the WSY 1966 founding to a group timeline or sector history note.

---

### 6B — SUSTAINABILITY DEFICITS

#### 6B-1 🔴 CRITICAL — Page scope is ship repair only; group CSR entirely absent
- **Source:** blrt.ee (BLRT Grupp HQ)
- **Finding:** BLRT Grupp HQ has a dedicated Social Responsibility page covering four pillars:
  1. **Sport sponsorship** — Estonian male and female basketball teams; Lithuanian BC Neptūnas; Estonian men's tennis
  2. **Education partnerships** — TalTech, Estonian Maritime Academy, Lithuanian Maritime Academy, University of Klaipėda
  3. **Culture support** — Sudalinna Theater, Saaremaa Opera Days, Days of the Sea festival
  4. **BLRT Fond scholarship** — Annual €2,000 scholarships for engineering/maritime students via the Estonian National Culture Foundation (apply at https://ankeet.erkf.ee)
- **Current site:** The entire Sustainability page is scoped to BLRT Repair Yards (Tallinn Shipyard / Klaipėda yard): blasting chambers, all-weather sheds, water/waste management, rotor sail vessels. Zero CSR or social responsibility content.
- **Fix:** Restructure the Sustainability page intro to frame it as group-wide. Add a Group Social Responsibility section covering sport, education, culture, and the BLRT Fond scholarship.

#### 6B-2 🔴 CRITICAL — Downloadable SR reports exist but are not linked
- **Source:** wbs.lt, wsa.lt, wbe.lt, wcl.lt, wst.lt, marinetechnology.lt, wsy.lt
- **Finding:** Multiple Western Shipyard Group subsidiaries host or reference downloadable Corporate SR documents:
  - **WSY Corporate SR Report 2025:** `https://wbs.lt/wp-content/uploads/2025/07/wsy_srr_2025.pdf`
  - **WSY Corporate SR Policy:** `https://wbs.lt/wp-content/uploads/2021/09/corporate_sr_policy.pdf`
  - **WSA SR Report 2023:** `https://wsa.lt/wp-content/uploads/2024/06/wsy_srr_2023.pdf`
  - **BLRT Grupp Code of Conduct:** `https://blrt.ee/wp-content/uploads/2023/02/blrt-grupp-code-of-conduct-en_2020.pdf`
- **Current site:** The Sustainability page CTA says "sustainability report" but the button links to `/contacts` — no actual report.
- **Fix:** Add a "Downloads" or "Reports" section to the Sustainability page with direct PDF links to the WSY SR Report 2025, SR Policy, and BLRT Grupp Code of Conduct.

#### 6B-3 🔴 CRITICAL — Bars Elekter EU-grant shore power programme missing
- **Source:** barselekter.com (`/en/green-ict-project/`)
- **Finding:** Bars Elekter received two **Norway Grants / Enterprise Estonia Green ICT Programme** grants (~€218,772 total) to develop shore power technology, explicitly targeting EU "Fit for 55" CO₂ reduction goals. Completed projects include:
  - M/S SILJA EUROPA and M/S VICTORIA I shore connections (December 2022)
  - M/S Isabelle shore connection (April 2024)
  - Won Klaipėda State Seaport Authority shore power tender
- **Current site:** Sustainability page mentions "Shore Power Connection" as a shipowner service but doesn't reference the Bars Elekter Green ICT EU-funded R&D programme.
- **Fix:** Add a "Group Green Initiatives" subsection featuring Bars Elekter's Norway Grants shore power programme, the Tallink Grupp vessel connections completed, and the EU "Fit for 55" objective.

#### 6B-4 🟠 HIGH — BLRT Valukoda EU Cohesion Fund CO₂ reduction not represented
- **Source:** blrtvalukoda.ee
- **Finding:** BLRT Valukoda secured **EU Cohesion Fund support of €860,845.50** for "Resource Efficiency Investments" including: new induction melting furnace (5–7% electricity savings), automated continuous sand mixer (waste reduction), waste heat recovery system (replacing natural gas). Documented **CO₂ reduction target: from 3.44 → 3.20 tonnes CO₂ equivalent per tonne of output**.
- **Current site:** No mention of foundry environmental investment or CO₂ targets anywhere on the Sustainability page.
- **Fix:** Add a "Subsidiary Environmental Investments" section referencing Valukoda's EU Cohesion Fund project and the specific CO₂ reduction target.

#### 6B-5 🟠 HIGH — Western Technological Solutions decarbonisation products absent
- **Source:** techsolutions.lt
- **Finding:** WTS manufactures **Carbon Capture Systems** (stainless steel absorbers and quenchers separating CO₂ from industrial emissions) and **Flue Gas Treatment equipment** (scrubbers, electrostatic precipitators) for European decarbonisation projects. Their mission explicitly states "driving industrial decarbonization."
- **Current site:** The Sustainability page "green solutions" section focuses on ship repair-centric shipowner services only. No mention of WTS products that enable industrial decarbonisation by customers.
- **Fix:** Add a "Decarbonisation Products" capability block: BLRT Grupp subsidiary WTS manufactures CO₂ capture absorbers and flue gas treatment systems for industrial customers across Europe.

#### 6B-6 🟡 MEDIUM — Group industry memberships absent
- **Source:** blrt.ee (BLRT Grupp HQ)
- **Finding:** BLRT Grupp is a member of:
  - **Estonian Wind Power Association**
  - **Lithuanian Cluster of Liquefied Natural Gas**
- **Current site:** No mention of group industry memberships or trade associations.
- **Fix:** Add a "Group Memberships" note or industry engagement section listing these two memberships on the Sustainability page.

#### 6B-7 🟡 MEDIUM — Western Stevedoring hydroelectric crane (EU Green Deal) not mentioned
- **Source:** wst.lt
- **Finding:** Western Stevedoring deployed a **hydroelectric crane** in 2022 at Klaipėda Port — described as among the first in the port — as part of EU Green Deal compliance, improving loading efficiency.
- **Current site:** Not mentioned anywhere.
- **Fix:** Include in group environmental initiatives: "2022 — Western Stevedoring deployed one of Klaipėda Port's first hydroelectric cranes as part of EU Green Deal commitments."

#### 6B-8 🟡 MEDIUM — WCL environmental testing accreditation not shown
- **Source:** wcl.lt
- **Finding:** Western Central Laboratory holds **Environmental Protection Agency Permit No. 1AT-293** (Lithuania) authorising air pollution and water quality testing and analysis. This is active environmental protection work, not merely policy.
- **Current site:** No mention of WCL's environmental testing mandate.
- **Fix:** Reference WCL's Environmental Protection Agency accreditation in a group certifications or environmental services note.

#### 6B-9 🟡 MEDIUM — RINA and NATO AQAP 2110 certifications not in group cert block
- **Source:** wbs.lt, wbe.lt, wcl.lt, blrtera.ee (RINA); wsy.lt subsidiaries (AQAP)
- **Finding:** RINA (Registro Italiano Navale) is held by BLRT ERA, Tehnomet Survey, and several WSY companies. NATO AQAP 2110 Edition D Version 1 is held by WBS, WBE, WCL, and Western Shiprepair. OHSAS 18001:2007 is held across six WSY companies.
- **Current site:** Sustainability page cert block shows: ISO 9001, ISO 14001, ISO 45001, Lloyd's Register, DNV, Bureau Veritas, ABS — no RINA, no AQAP.
- **Fix:** Add RINA and AQAP 2110 to the certifications block on the Sustainability page.

#### 6B-10 🟡 MEDIUM — Vene-Balti Sadam KIK-funded pollution upgrade not mentioned
- **Source:** portvenebalti.ee
- **Finding:** Vene-Balti Sadam (the BLRT Grupp port authority at Kopli 103) upgraded its **pollution control equipment** with funding from the **KIK Marine Environment Programme** (approved February 2024) and developed new pollution incident response scenarios.
- **Current site:** Not mentioned anywhere on the Sustainability page.
- **Fix:** Add a brief note: "2024 — Vene-Balti Sadam (Kopli 103 port) completed KIK-funded marine pollution control upgrade."

---

### 6C — CONTACTS DEFICITS

#### 6C-1 🔴 CRITICAL — Wrong phone number for BLRT Grupp HQ
- **Source:** blrt.ee (BLRT Grupp HQ)
- **Finding:** BLRT Grupp HQ main number is **+372 610 2408** (Office Manager Kristina Uustalu). Current Contacts page shows **+372 610 2997**, which is **Tehnomet Survey OÜ's** number — a completely different subsidiary.
- **Current site:** `Contacts.tsx` contactItems array: `value: "+372 610 2997"`.
- **Fix:** Replace with `+372 610 2408` in `Contacts.tsx`. The number `+372 610 2997` belongs only to Tehnomet Survey's `BusinessPage`.

#### 6C-2 🔴 CRITICAL — Wrong registration code
- **Source:** blrt.ee (BLRT Grupp HQ)
- **Finding:** BLRT Grupp AS registration code is **10068499**. Current Contacts page shows **10910683**, which is Tehnomet Survey OÜ's registration code.
- **Current site:** `Contacts.tsx` contactItems: `{ label: "Reg. code", value: "10910683" }`.
- **Fix:** Change to `10068499` in `Contacts.tsx`.

#### 6C-3 🔴 CRITICAL — Klaipėda / Lithuania hub address entirely absent
- **Source:** wsy.lt and 8+ subsidiaries
- **Finding:** The Western Shipyard Group Klaipėda headquarters serves 8+ BLRT Grupp subsidiaries (WSY, WBS, WBE, WTS, WCL, WST, Marine Technology, BLRT ERA Lithuania, Mereabi Lithuania, Western Ships Agency Lithuania). Address: **Minijos st. 180, LT-93269 Klaipėda, Lithuania**. General contact: info@wsy.lt, +370 46 483 600.
- **Current site:** Only Kopli 103, Tallinn appears on the group Contacts page. No Klaipėda address shown.
- **Fix:** Add Minijos st. 180, LT-93269 Klaipėda as a second office block on `Contacts.tsx`, labelled "Klaipėda / Lithuania Hub".

#### 6C-4 🔴 CRITICAL — All four "key contacts" belong to Tehnomet Survey, not BLRT Grupp HQ
- **Source:** tehnometsurvey.ee + blrt.ee
- **Finding:** The current four key contacts on the Contacts page (Renat Hassanov, Ivan Pshenychnyi, Diana Tulus, Pavel Magazov) are all Tehnomet Survey OÜ staff, confirmed by the tehnometsurvey.ee scrape. They should not appear as the BLRT Grupp HQ contact panel.
  - Actual BLRT Grupp HQ contacts to show instead:
    - **Kristina Uustalu** — Office Manager (+372 610 2408, blrt@blrt.ee)
    - **Karina Kond** — Director of Communication (+372 610 2403, karina.kond@blrt.ee)
    - **Inga Stern** — Communications Specialist (+372 610 2593, inga.stern@blrt.ee)
    - **Algerd Andruškevičius** — Board Member (+372 511 2272, per Elme Metall contacts)
- **Current site:** `Contacts.tsx` `personnel` array hardcodes the four Tehnomet Survey staff.
- **Fix:** Replace the four personnel cards with the actual BLRT Grupp HQ staff listed above. Move the Tehnomet Survey people to that company's BusinessPage contact section.

#### 6C-5 🟠 HIGH — General HQ email needs verification
- **Source:** blrt.ee (BLRT Grupp HQ)
- **Finding:** The HQ contacts page lists **blrt@blrt.ee** (Office Manager Kristina Uustalu) as the primary general contact. Also: **invoices@blrt.ee** for procurement. Current site shows **info@blrt.ee** which doesn't appear on the HQ contacts page.
- **Current site:** `Contacts.tsx` contactItems: `value: "info@blrt.ee"`.
- **Fix:** Update primary email to `blrt@blrt.ee`. Add `invoices@blrt.ee` for procurement enquiries.

#### 6C-6 🟠 HIGH — No social media links anywhere on site
- **Source:** blrt.ee (BLRT Grupp HQ) + blrtyards.com + barselekter.com + masinaehitus.ee + wsa.lt + wbe.lt
- **Finding:** BLRT Grupp HQ has active **Facebook** and **LinkedIn** profiles:
  - Facebook: `https://www.facebook.com/blrtgrupp`
  - LinkedIn: `https://www.linkedin.com/company/blrt-grupp`
  - BLRT Repair Yards also: LinkedIn `https://www.linkedin.com/company/blrt-yards/`, YouTube `https://www.youtube.com/@blrtrepairyards/`
  - Western Ships Agency LinkedIn: `https://www.linkedin.com/company/western-ships-agency/`
  - WBE LinkedIn: `https://www.linkedin.com/company/western-baltic-engineering`
  - BLRT Masinaehitus LinkedIn: `https://www.linkedin.com/company/blrt-masinaehitus/`
- **Current site:** Zero social media links on the Contacts page or site footer.
- **Fix:** Add Facebook and LinkedIn links to the `Contacts.tsx` info panel and/or to the site footer component.

#### 6C-7 🟠 HIGH — Turku Repair Yard (Finland) shows wrong address
- **Source:** blrtyards.com
- **Finding:** The Finnish yard is **Turun Korjaustelakka Oy** at **Navirentie, 21100 Naantali, Finland** (P.O. Box 212). Managing Director: Antti Simula (+358 400 669 713, antti.simula@turunkorjaustelakka.fi).
- **Current site:** `businesses.ts` Turku Repair Yard contact shows `"Kopli 103, 11712 Tallinn, Estonia"` — the Estonian HQ, wrong country entirely.
- **Fix:** In `businesses.ts`, update `turku-repair-yard` contact address to `"Navirentie, 21100 Naantali, Finland"` and phone to `+358 400 669 713`. Email: `antti.simula@turunkorjaustelakka.fi`.

#### 6C-8 🟠 HIGH — Western Shiprepair (Klaipėda) shows wrong address
- **Source:** blrtyards.com
- **Finding:** Western Shiprepair is at **Minijos str. 180, LT-93269 Klaipėda, Lithuania**. Phone: **+370 46 483 764**.
- **Current site:** `businesses.ts` Western Shiprepair contact shows `"Kopli 103, 11712 Tallinn, Estonia"` — wrong country and city.
- **Fix:** Update `western-shiprepair` address to `"Minijos str. 180, LT-93269 Klaipėda, Lithuania"` and phone to `+370 46 483 764`.

#### 6C-9 🟠 HIGH — BLRT Repair Yards key people not in any BusinessPage
- **Source:** blrtyards.com
- **Finding:** The following named staff appear on blrtyards.com:
  - **Andrejus Babachinas** — CEO, BLRT Repair Yards (+370 46 483 764)
  - **Sergei Kravtsenko** — Managing Director, Tallinn Shipyard (+372 610 2252, sergei.kravtsenko@blrtyards.com)
  - **Antti Simula** — Managing Director, Turku (+358 400 669 713)
  - **Gabrielius Jasas** — Head of Sales & Marketing (+370 61 494 651, gabrielius.jasas@blrtyards.com)
  - **Irina Kostina** — Marketing & Communication Manager (+372 5302 3753, irina.kostina@blrtyards.com)
  - **Viktor Vassiljev** — Head of Conversion & Modernization (+372 5343 6322)
  - Full international agent network: Greece, BeNeLux, Cyprus, Monaco/Italy, Germany, Norway, Denmark, Southeast Asia
- **Current site:** All three BLRT Repair Yards BusinessPages list only generic phone/email — no named contacts.
- **Fix:** Add CEO Andrejus Babachinas, MD Tallinn Sergei Kravtsenko, and Head of Sales Gabrielius Jasas as named contacts on the Tallinn Shipyard BusinessPage (which represents the BLRT Repair Yards umbrella).

#### 6C-10 🟡 MEDIUM — BLRT ERA Lithuania branch missing
- **Source:** blrtera.ee
- **Finding:** BLRT ERA operates a **Klaipėda branch** at Minijos g. 180, LT-93269 Klaipėda with named contacts:
  - Tatjana Danevskaja (Administration, +370 68735291, t.danevskaja@blrtera.lt)
  - Andrius Muzikevičius (Business Development & Sales, +370 627 44128)
  - Šarūnas Stankevičius (Sales Manager, +370 681 07497)
- **Current site:** BLRT ERA BusinessPage lists only the Tallinn HQ (Kopli 103). No Lithuania branch address or contacts.
- **Fix:** Add a Lithuania branch note to the BLRT ERA BusinessPage with the Klaipėda address and the three named contacts.

#### 6C-11 🟡 MEDIUM — WBE named contacts and correct email missing
- **Source:** wbe.lt
- **Finding:** WBE publishes full named contacts:
  - **Marius Arkušauskas** — Director
  - **Andrius Sutnikas** — Chief Business Development Officer (+370 686 376 81)
  - **Loreta Gedraitienė** — Sales Manager (+370 660 397 76)
  - **Esmeralda Arkesteijn-van Voorst** — Sales Manager Netherlands
  - Email: info@wbe.lt; sales@wbe.lt
- **Current site:** WBE BusinessPage has no phone, no named contacts, and uses email `wbe@wsy.lt` (a redirect, not the canonical address).
- **Fix:** Add Director Marius Arkušauskas, CBDO Andrius Sutnikas, and phone info. Update email to `info@wbe.lt`.

#### 6C-12 🟡 MEDIUM — WCL named contacts missing
- **Source:** wcl.lt
- **Finding:** WCL publishes:
  - **Rosvaldas Janušaitis** — Director (r.janusaitis@wcl.lt, +370 614 315 22)
  - **Arūnas Toliušis** — Head of Sales (a.toliusis@wcl.lt, +370 650 408 04)
  - **Raimondas Gaudiešius** — Marketing Manager (+370 685 162 26)
  - **Jurgis Bražinskas** — Development & Innovation Engineer (+370 614 423 38)
- **Current site:** WCL BusinessPage has phone and email but no named contacts.
- **Fix:** Add Director Rosvaldas Janušaitis and Head of Sales Arūnas Toliušis to the WCL BusinessPage.

#### 6C-13 🟡 MEDIUM — MOC phone and named contacts missing
- **Source:** moc.ee
- **Finding:**
  - Main phone: **+372 610 2535**
  - **Nadezda Vassiljeva** — Sales Director (moc.sales@blrt.ee)
  - **Dmitri Osmjorkin** — Sales Manager (+372 5673 3414, moc.osmjorkin@blrt.ee)
  - **Darja Pefferly** — Secretary (moc.info@blrt.ee)
- **Current site:** MOC BusinessPage has email `moc@blrt.ee` only — no phone, no named contacts.
- **Fix:** Add phone `+372 610 2535` and Sales Director Nadezda Vassiljeva to the MOC BusinessPage in `businesses.ts`.

#### 6C-14 🟡 MEDIUM — WTS phone and named contacts missing
- **Source:** techsolutions.lt
- **Finding:**
  - Main phone: **+370 68 515 464**
  - **Laurynas Trilikauskas** — CCO (+370 685 993 36, l.trilikauskas@techsolutions.lt)
  - **Renata Labutienė** — Sales Manager (+370 610 482 81)
  - **Steponas Šmitas** — Sales Manager (+370 685 15464)
- **Current site:** WTS BusinessPage has email `info@techsolutions.lt` only — no phone, no named contacts.
- **Fix:** Add phone `+370 68 515 464` and CCO Laurynas Trilikauskas to the WTS BusinessPage.

#### 6C-15 🟡 MEDIUM — Marine Technology named contacts missing (company also absent)
- **Source:** marinetechnology.lt
- **Finding:** Marine Technology publishes:
  - **Arūnas Kačinskis** — Director (a.kacinskis@marinetechnology.lt)
  - **Artūr Jakovlev** — Head of Sales (a.jakovlev@marinetechnology.lt)
  - **Mantas Atutis** — Head of Project Management (m.atutis@marinetechnology.lt)
  - Phone: +370 682 42098; Address: Minijos st. 180, 93269 Klaipėda
- **Current site:** Marine Technology is entirely absent from `businesses.ts` and `sectorGroups` (see Section 1A of this audit).
- **Fix:** When adding Marine Technology as a Business entry (per Section 1A), include Director Arūnas Kačinskis and Head of Sales Artūr Jakovlev as named contacts.

#### 6C-16 🟡 MEDIUM — Marketex Marine named contacts missing
- **Source:** marketexmarine.net
- **Finding:**
  - **Fjodor Kvich** — Chairman (+372 505 2516, fjodor.kvich@marketexmarine.net)
  - **Dmitri Gornostajev** — Board Member / Marketing & Sales (+372 524 7518, dmitri.gornostajev@marketexmarine.net)
  - **Irina Bukatsjova** — Secretary (+372 610 2553, irina.bukatsjova@marketexmarine.net)
- **Current site:** Marketex Marine BusinessPage: phone (+372 610 2553), email (info@marketexmarine.net) — no named contacts.
- **Fix:** Add Chairman Fjodor Kvich and Board Member Dmitri Gornostajev as named contacts.

#### 6C-17 🟡 MEDIUM — BLRT ERA named contacts missing
- **Source:** blrtera.ee
- **Finding:**
  - **Oleg Pljusnin** — Board Member (+372 610 2307, o.pljusnin@blrtera.ee)
  - **Andrei Miklin** — Head of Sales (+372 56047847, a.miklin@blrtera.ee)
- **Current site:** BLRT ERA BusinessPage: address, phone, email — no named contacts.
- **Fix:** Add Board Member Oleg Pljusnin and Head of Sales Andrei Miklin.

#### 6C-18 🟡 MEDIUM — Mereabi named contacts and Lithuania branch missing
- **Source:** mereabi.ee
- **Finding:**
  - **Marina Skljarova** — Board Member (+372 5307 3883)
  - **Irina Perevezentseva** — Executive Assistant (+372 5322 9489)
  - **Irina Laskova** — Director Lithuania (+370 630 05 991)
  - **Uljana Prosvetova** — Sales Manager Estonia (+372 534 59 753)
  - Lithuania branch: Minijos 180, Klaipėda, info@mereabi.lt
- **Current site:** Mereabi BusinessPage: phone (+372 660 2320), email (info@mereabi.ee) — no named contacts, no Lithuania branch.
- **Fix:** Add Board Member Marina Skljarova and Lithuania Director Irina Laskova. Add Lithuania branch address.

#### 6C-19 🟡 MEDIUM — Elme Metall leadership directory not represented
- **Source:** elmemetall.eu
- **Finding:** Elme Metall publishes a full leadership directory on their contacts page:
  - **Georgiy Grigoryan** — Chairman (+372 610 2801)
  - **Algerd Andruskevitsus** — Board Member (+372 511 2272) — same person as BLRT Grupp board member
  - **Igor Novoselov** — Board Member (+372 610 2801)
  - **Aleksandr Timarov** — Board Member (+372 506 9047)
  - **Maksim Malanjins** — Commercial Director (+371 2322 9596)
  - **Andrus Uus** — Production Director (+372 506 8601)
- **Current site:** Elme Metall BusinessPage: address (Maardu — correct), phone (+372 610 2554), email — no named contacts.
- **Fix:** Add Chairman Georgiy Grigoryan and Commercial Director Maksim Malanjins as named contacts.

#### 6C-20 🟡 MEDIUM — Elme Trans Latvia and Lithuania branches not represented
- **Source:** elmetrans.ee
- **Finding:** Elme Trans operates branches in 4 countries with named contacts:
  - Latvia Director: **Ricards Vaitonis** (+371 29602961), address: Katlakalna iela 9, LV-1073 Riga
  - Lithuania: **Zygimantas Kristutis** (Head of Rental, +370 655 79634), Klaipėda branch: Minijos g. 180
  - Lithuania Transport: **Mantas Kromelis** (+370 690 49150)
  - Estonia Rental: **Ilja Sustrov**, **Vadim Kolenchenko** (International), **Julia Sizova** (Local)
- **Current site:** Elme Trans BusinessPage shows only Kopli 103, Tallinn — no website link, no email, no Latvia/Lithuania addresses or contacts.
- **Fix:** Add website (https://elmetrans.ee/en/), email (info@elmetrans.ee), Latvia Director Ricards Vaitonis, and Lithuania contact Zygimantas Kristutis to the BusinessPage.

#### 6C-21 🟡 MEDIUM — Vene-Balti Sadam named contacts missing
- **Source:** portvenebalti.ee
- **Finding:**
  - **Marek Rauk** — Board Member / Harbourmaster (+372 610 2205, marek.rauk@portvenebalti.ee)
  - Port dispatcher 24/7: +372 5341 9708 / dispatcher@portvenebalti.ee
- **Current site:** VBS BusinessPage: phone (+372 610 2753), email (info@portvenebalti.ee) — no named contacts, no 24/7 dispatcher line.
- **Fix:** Add Marek Rauk (Harbourmaster) and the 24/7 dispatcher number to the VBS BusinessPage.

#### 6C-22 🟡 MEDIUM — BLRT Rekato email outdated
- **Source:** blrtrekato.ee
- **Finding:** BLRT Rekato canonical email per their own website is **info@blrtrekato.ee**. Invoices: arved@blrtrekato.ee.
- **Current site:** BLRT Rekato BusinessPage email: `rekato@blrt.ee` — an older forwarding address.
- **Fix:** Update to `info@blrtrekato.ee` in `businesses.ts`.

#### 6C-23 🟢 LOW — BLRT Masinaehitus named contacts and LinkedIn absent
- **Source:** masinaehitus.ee
- **Finding:**
  - **Priit Lind** — Board Member (priit.lind@masinaehitus.ee)
  - **Veronika Demeskevits** — Sales Manager (+372 528 6511)
  - **Yurii Pchelintsev** — Sales Manager (+372 5895 8170)
  - LinkedIn: https://www.linkedin.com/company/blrt-masinaehitus/
- **Current site:** BLRT Masinaehitus BusinessPage: phone, email — no named contacts, no LinkedIn.
- **Fix:** Add Board Member Priit Lind and one Sales Manager. Add LinkedIn link.

#### 6C-24 🟢 LOW — Western Baltic Shipbuilding named contacts absent
- **Source:** wbs.lt
- **Finding:**
  - **Ilja Andrusenko** — Marketing and Sales (+370 610 424 38)
  - **Dmitrij Martynov** — Project Management (+370 688 963 83)
  - **Šarūnas Pocius** — Logistics (+370 625 954 40)
- **Current site:** WBS BusinessPage: address, phone, email — no named contacts.
- **Fix:** Add Ilja Andrusenko (Sales) and Dmitrij Martynov (Project Management) as named contacts.

#### 6C-25 🟢 LOW — Western Ships Agency Estonia branch and LinkedIn missing
- **Source:** wsa.lt
- **Finding:**
  - Estonia branch: Kopli 103, Tallinn; +372 5621 0888
  - LinkedIn: https://www.linkedin.com/company/western-ships-agency/
  - Lithuania entity reg: Vakarų Laivų Agentai UAB (242089370); Estonia entity: Western Ships Agency OÜ (12917229)
- **Current site:** WSA BusinessPage: Klaipėda address, phone, email — no Estonia branch, no LinkedIn.
- **Fix:** Add Estonia branch (Kopli 103, +372 5621 0888) and LinkedIn link to WSA BusinessPage.

#### 6C-26 🟢 LOW — BLRT Valukoda Managing Director unnamed
- **Source:** blrtvalukoda.ee
- **Finding:** **Paul Gross** is publicly identified as Managing Director (Juhataja).
- **Current site:** BLRT Valukoda BusinessPage: phone, email — no named contacts.
- **Fix:** Add Paul Gross as Managing Director.

---

### 6D — SECTION 6 PRIORITY SUMMARY TABLE

| # | Area | Issue | Severity |
|---|---|---|---|
| 6C-1 | Contacts | HQ phone is Tehnomet Survey's number — completely wrong | 🔴 Critical |
| 6C-2 | Contacts | Reg. code is Tehnomet Survey's code — completely wrong | 🔴 Critical |
| 6C-3 | Contacts | Klaipėda / Lithuania hub address missing from Contacts page | 🔴 Critical |
| 6C-4 | Contacts | All 4 named contacts are Tehnomet Survey staff, not BLRT Grupp HQ | 🔴 Critical |
| 6A-1 | About | Companies stat "24" should be "50+" | 🔴 Critical |
| 6A-2 | About | Countries stat "5" should be "7" (missing PL, UA, BR) | 🔴 Critical |
| 6B-1 | Sustainability | Entire page scoped to ship repair only; group CSR (sport/education/culture/scholarships) absent | 🔴 Critical |
| 6B-2 | Sustainability | Downloadable SR reports and Code of Conduct exist but are not linked | 🔴 Critical |
| 6B-3 | Sustainability | Bars Elekter EU-grant shore power programme (Norway Grants / Fit for 55) not mentioned | 🔴 Critical |
| 6A-3 | About | No Mission / Vision / Strategy section | 🟠 High |
| 6A-4 | About | Employee count (4,000+) entirely absent | 🟠 High |
| 6A-5 | About | Four group values not surfaced on About page | 🟠 High |
| 6A-6 | About | No leadership / management board section | 🟠 High |
| 6C-5 | Contacts | HQ email needs verification — blrt@blrt.ee vs info@blrt.ee | 🟠 High |
| 6C-6 | Contacts | No social media links anywhere (Facebook, LinkedIn, YouTube) | 🟠 High |
| 6C-7 | Contacts | Turku Repair Yard shows Tallinn address instead of Naantali, Finland | 🟠 High |
| 6C-8 | Contacts | Western Shiprepair shows Tallinn address instead of Klaipėda | 🟠 High |
| 6C-9 | Contacts | BLRT Repair Yards CEO, MDs, Head of Sales not in any BusinessPage | 🟠 High |
| 6B-4 | Sustainability | Valukoda EU Cohesion Fund CO₂ reduction project not represented | 🟠 High |
| 6B-5 | Sustainability | WTS carbon capture and flue gas treatment products not mentioned | 🟠 High |
| 6A-7 | About | Awards (Friend of Culture × 5, Shippax RoRo 2026) missing | 🟡 Medium |
| 6A-8 | About | Original company name (Russo-Baltic Shipbuilding Yard) and 2001 rebrand not in story | 🟡 Medium |
| 6A-9 | About | Code of Conduct PDF not linked | 🟡 Medium |
| 6B-6 | Sustainability | Group industry memberships (Wind Power Assoc., LNG Cluster) absent | 🟡 Medium |
| 6B-7 | Sustainability | Western Stevedoring hydroelectric crane (2022, EU Green Deal) not mentioned | 🟡 Medium |
| 6B-8 | Sustainability | WCL Environmental Protection Agency accreditation not shown | 🟡 Medium |
| 6B-9 | Sustainability | RINA and NATO AQAP 2110 missing from group cert block | 🟡 Medium |
| 6B-10 | Sustainability | VBS KIK-funded pollution upgrade (2024) not mentioned | 🟡 Medium |
| 6C-10–21 | Contacts | Named contacts missing across 12 company BusinessPages | 🟡 Medium |
| 6C-22 | Contacts | BLRT Rekato email outdated (rekato@blrt.ee → info@blrtrekato.ee) | 🟡 Medium |
| 6C-23–26 | Contacts | Additional named contacts and LinkedIn links (4 companies) | 🟢 Low |
| 6A-11 | About | WSY 1966 founding not in group narrative | 🟢 Low |

---

*Section 6 added 2026-06-29. Data sourced from live scraping of all 24 BLRT websites by 25 parallel agents (24 scrapers + 1 synthesiser). 691k tokens consumed, 493 tool calls.*
