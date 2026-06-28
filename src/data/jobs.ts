export type JobType = "full-time" | "part-time" | "contract";

export interface Job {
  id: string;
  title: { EN: string; RU: string; ET: string };
  companySlug: string;
  companyName: string;
  location: string;
  type: JobType;
  description: { EN: string; RU: string; ET: string };
  requirements: { EN: string[]; RU: string[]; ET: string[] };
  postedDate: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: {
      EN: "Senior Ship Repair Engineer",
      RU: "Старший инженер по судоремонту",
      ET: "Vanemlaevahoolduseinsener",
    },
    companySlug: "tallinn-shipyard",
    companyName: "Tallinn Shipyard",
    location: "Tallinn, Estonia",
    type: "full-time",
    description: {
      EN: "We are looking for an experienced Ship Repair Engineer to lead complex drydock projects at our Kopli yard. You will manage multi-discipline scopes including steel, piping, electrical and coating works, coordinate with classification surveyors and maintain direct client relationships.",
      RU: "Мы ищем опытного инженера по судоремонту для руководства сложными проектами в сухом доке на нашем предприятии в Копли. Вы будете управлять многодисциплинарными объёмами работ, включая сталь, трубопроводы, электрику и покраску, координировать работу с классификационными сюрвейерами и поддерживать прямые отношения с клиентами.",
      ET: "Otsime kogenud laevaremondiisenenerit, kes juhiks keerukaid kuivdoki projekte meie Kopli tehases. Juhid mitmete erialade töid, sealhulgas teras, torustik, elekter ja katted, koordineerite klassifikatsioonikontrolöridega ja hoidate otseseid kliendisuhteid.",
    },
    requirements: {
      EN: [
        "5+ years of ship repair or shipbuilding experience",
        "Degree in Naval Architecture, Marine Engineering or equivalent",
        "Familiarity with classification society rules (DNV, BV, LR, ABS)",
        "Proven project management skills and ability to manage tight schedules",
        "Proficiency in English; Estonian or Russian an advantage",
      ],
      RU: [
        "5+ лет опыта в судоремонте или судостроении",
        "Степень по морской архитектуре, морской инженерии или эквивалент",
        "Знание правил классификационных обществ (DNV, BV, LR, ABS)",
        "Подтверждённые навыки управления проектами и умение работать в жёстких сроках",
        "Знание английского языка; эстонский или русский — преимущество",
      ],
      ET: [
        "5+ aastat laevaremondi või laevaehituse kogemust",
        "Kraad laevaarhitektuuris, mereinseneritöös või samaväärne",
        "Tundmine klassifikatsiooniühingute eeskirjadega (DNV, BV, LR, ABS)",
        "Tõestatud projektijuhtimisoskused ja võime töötada tiheda ajakavaga",
        "Inglise keele oskus; eesti või vene keel on eeliseks",
      ],
    },
    postedDate: "2026-06-01",
  },
  {
    id: "2",
    title: {
      EN: "NDT Level II Inspector — UT & MT",
      RU: "Инспектор НК II уровня — УЗК и МПД",
      ET: "NDT II taseme inspektor — UT ja MT",
    },
    companySlug: "tehnomet-survey",
    companyName: "Tehnomet Survey",
    location: "Tallinn, Estonia (worldwide deployment)",
    type: "full-time",
    description: {
      EN: "Tehnomet Survey is expanding its inspection team and looking for certified NDT inspectors for ship hull and weld inspections. The role involves worldwide travel to vessels in port, working closely with classification society surveyors and producing detailed inspection reports.",
      RU: "Tehnomet Survey расширяет команду инспекторов и ищет сертифицированных специалистов по НК для инспекций корпусов и сварных швов судов. Работа предполагает поездки по всему миру на суда в портах, тесное взаимодействие с сюрвейерами классификационных обществ и составление подробных отчётов.",
      ET: "Tehnomet Survey laiendab oma inspekteerimismeeskonda ja otsib sertifitseeritud NDT inspektoreid laevakorpuse ja keevisõmbluste inspekteerimiseks. Töö hõlmab ülemaailmseid reise sadamates olevate laevade juurde, tihedat koostööd klassifikatsiooniühingute kontrolöridega ja detailsete inspekteerimisaruannete koostamist.",
    },
    requirements: {
      EN: [
        "PCN or CSWIP Level 2 certification in UT and MT (minimum)",
        "Experience with ship hull inspection and UTM",
        "Valid medical certificate (ENG1 or equivalent)",
        "Willingness to travel worldwide at short notice",
        "Good written English for report preparation",
      ],
      RU: [
        "Сертификация PCN или CSWIP 2-го уровня по УЗК и МПД (минимум)",
        "Опыт инспекции корпуса судна и УЗТ",
        "Действующее медицинское свидетельство (ENG1 или аналог)",
        "Готовность к командировкам по всему миру в короткие сроки",
        "Хорошее знание письменного английского для подготовки отчётов",
      ],
      ET: [
        "PCN või CSWIP 2. taseme sertifikaat UT ja MT (miinimum)",
        "Kogemus laevakorpuse inspekteerimisel ja UTM-il",
        "Kehtiv meditsiiniline tunnistus (ENG1 või samaväärne)",
        "Valmisolek ülemaailmseks reisimiseks lühikese etteteatamisega",
        "Hea kirjalik inglise keel aruannete koostamiseks",
      ],
    },
    postedDate: "2026-05-20",
  },
  {
    id: "3",
    title: {
      EN: "Steel Sales Manager — Baltic Region",
      RU: "Менеджер по продажам стали — Балтийский регион",
      ET: "Terase müügijuht — Baltikumi piirkond",
    },
    companySlug: "elme-metall",
    companyName: "Elme Metall",
    location: "Tallinn, Estonia",
    type: "full-time",
    description: {
      EN: "Elme Metall is seeking an ambitious Sales Manager to grow our steel distribution business across the Baltic states. You will develop new client relationships in the construction, manufacturing and shipbuilding sectors and manage a portfolio of key accounts.",
      RU: "Elme Metall ищет амбициозного менеджера по продажам для развития бизнеса по дистрибуции стали в странах Балтии. Вы будете развивать новые клиентские отношения в строительном, производственном и судостроительном секторах и управлять портфелем ключевых клиентов.",
      ET: "Elme Metall otsib ambitsioonikalt müügijuhti, kes arendaks meie terase levitamise äri Baltikumi riikides. Arendate uusi kliendisuhteid ehitus-, tootmis- ja laevaehitussektori valdkondades ning haldab oluliste klientide portfelli.",
    },
    requirements: {
      EN: [
        "3+ years B2B sales experience, preferably in steel, construction or maritime",
        "Established network in the Baltic construction or industrial sector",
        "Results-driven with a track record of meeting sales targets",
        "Fluency in Estonian and English; Russian is a strong advantage",
        "Willingness to travel within the Baltic states regularly",
      ],
      RU: [
        "3+ года опыта в B2B продажах, предпочтительно в стали, строительстве или морской сфере",
        "Установленные связи в балтийском строительном или промышленном секторе",
        "Ориентированность на результат с опытом достижения планов продаж",
        "Свободное владение эстонским и английским; русский — значительное преимущество",
        "Готовность регулярно ездить в командировки по странам Балтии",
      ],
      ET: [
        "3+ aastat B2B müügikogemust, eelistatult terases, ehituses või merenduses",
        "Väljakujunenud võrgustik Baltikumi ehitus- või tööstussektoris",
        "Tulemustele orienteeritud müügieesmärkide täitmise kogemusega",
        "Eesti ja inglise keele oskus; vene keel on suur eeliseks",
        "Valmisolek regulaarseks reisimiseks Baltikumi riikides",
      ],
    },
    postedDate: "2026-05-10",
  },
  {
    id: "4",
    title: {
      EN: "Electrical Engineer — Marine & Industrial Projects",
      RU: "Электротехник — морские и промышленные проекты",
      ET: "Elektriinsener — mere- ja tööstusprojektid",
    },
    companySlug: "blrt-era",
    companyName: "BLRT ERA",
    location: "Tallinn, Estonia",
    type: "full-time",
    description: {
      EN: "BLRT ERA is looking for an Electrical Engineer to join our growing project team. You will design and deliver electrical and automation solutions for ship repair and industrial clients, working on projects ranging from shore power upgrades to full electrical system replacements.",
      RU: "BLRT ERA ищет электротехника для присоединения к нашей растущей команде проектов. Вы будете проектировать и реализовывать электрические и автоматизационные решения для клиентов в области судоремонта и промышленности, работая над проектами от модернизации берегового питания до полной замены электрических систем.",
      ET: "BLRT ERA otsib elektriinseneri meie kasvavasse projektimeeskonda. Projekteerite ja tarnite elektrilisi ja automaatikalahendusi laevaremondi ja tööstuse klientidele, töötades projektidel alates sadama elektriühenduse uuendamisest kuni täieliku elektrisüsteemi vahetamiseni.",
    },
    requirements: {
      EN: [
        "Degree in Electrical Engineering or equivalent",
        "2+ years experience in marine, industrial or energy sector electrical projects",
        "Familiarity with IEC standards and classification society electrical rules",
        "CAD/design software skills (AutoCAD or EPLAN preferred)",
        "Team player with strong communication skills in Estonian and English",
      ],
      RU: [
        "Степень в электротехнике или эквивалент",
        "2+ года опыта в электрических проектах в морском, промышленном или энергетическом секторе",
        "Знание стандартов МЭК и правил классификационных обществ по электрике",
        "Навыки работы с CAD/проектным программным обеспечением (AutoCAD или EPLAN предпочтительно)",
        "Командный игрок с хорошими коммуникативными навыками на эстонском и английском",
      ],
      ET: [
        "Elektrotehnika kraad või samaväärne",
        "2+ aastat kogemust mere-, tööstus- või energiasektori elektriprojektides",
        "IEC standardite ja klassifikatsiooniühingute elektrireeglite tundmine",
        "CAD/projekteerimise tarkvaraoskused (AutoCAD või EPLAN eelistatud)",
        "Meeskonnamängija, kellel on tugevad suhtlusoskused eesti ja inglise keeles",
      ],
    },
    postedDate: "2026-04-25",
  },
  {
    id: "5",
    title: {
      EN: "Port Operations Coordinator",
      RU: "Координатор портовых операций",
      ET: "Sadamaoperatsioonide koordinaator",
    },
    companySlug: "vene-balti-sadam",
    companyName: "Vene-Balti Sadam",
    location: "Tallinn, Estonia",
    type: "full-time",
    description: {
      EN: "Vene-Balti Sadam is looking for an Operations Coordinator to manage day-to-day vessel scheduling, cargo handling and client communication at our Tallinn terminal. The role requires close coordination with stevedores, vessel agents and the harbour master.",
      RU: "Vene-Balti Sadam ищет координатора операций для управления ежедневным расписанием судов, обработкой грузов и коммуникацией с клиентами в нашем таллинском терминале. Роль требует тесной координации со стивидорами, судовыми агентами и портовыми капитанами.",
      ET: "Vene-Balti Sadam otsib operatsioonide koordinaatorit, kes haldaks igapäevast laevade ajakava, kaubakäitlust ja kliendisuhtlust meie Tallinna terminalis. Roll nõuab tihedat koordineerimist stiverdoritega, laevade agentidega ja sadamakaptaniga.",
    },
    requirements: {
      EN: [
        "Experience in port operations, logistics or maritime administration",
        "Ability to work shift patterns including evenings and weekends",
        "Strong communication skills and ability to manage multiple stakeholders",
        "Proficiency in Estonian and English; Russian is an asset",
        "Familiarity with port management software (desirable)",
      ],
      RU: [
        "Опыт в портовых операциях, логистике или морском администрировании",
        "Готовность работать посменно, включая вечера и выходные дни",
        "Сильные коммуникативные навыки и умение управлять множеством заинтересованных сторон",
        "Знание эстонского и английского языков; русский — преимущество",
        "Знакомство с программным обеспечением для управления портом (желательно)",
      ],
      ET: [
        "Kogemus sadamaoperatsioonides, logistikas või mereadministratsioonis",
        "Võimalus töötada vahetustega, sealhulgas õhtuti ja nädalavahetustel",
        "Tugevad suhtlusoskused ja võime hallata mitut sidusrühma",
        "Eesti ja inglise keele oskus; vene keel on eeliseks",
        "Sadama haldustarkvara tundmine (soovitav)",
      ],
    },
    postedDate: "2026-06-05",
  },
];
