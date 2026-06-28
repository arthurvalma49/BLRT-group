export interface Project {
  id: string;
  slug: string;
  title: { EN: string; RU: string; ET: string };
  year: number;
  companySlug: string;
  sectorId: string;
  description: { EN: string; RU: string; ET: string };
  image: string;
  tags: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "aframax-tanker-drydock-2025",
    title: {
      EN: "Aframax Tanker Special Survey & BWTS Retrofit",
      RU: "Специальное освидетельствование и модернизация BWTS танкера класса Aframax",
      ET: "Aframax-tankeri eriülevaatus ja BWTS-retrofit",
    },
    year: 2025,
    companySlug: "tallinn-shipyard",
    sectorId: "repair",
    description: {
      EN: "Full dry-docking of a 110,000 DWT Aframax tanker at Tallinn Shipyard's Dock 22. Scope included class special survey, BWTS installation, propeller shaft renewal, hull blasting and full epoxy coating. Completed 3 days ahead of schedule.",
      RU: "Полное докование танкера класса Aframax дедвейтом 110 000 тонн в сухом доке № 22 Таллинской верфи. Объём работ включал специальное освидетельствование класса, установку BWTS, замену гребного вала, очистку корпуса и нанесение полного эпоксидного покрытия. Завершено на 3 дня раньше срока.",
      ET: "Tallinna Laevatehase kuivdokis nr 22 teostati 110 000 DWT Aframax-tankeri täisdokeerimine. Tööde ulatus hõlmas klassi eriülevaatust, BWTS-i paigaldust, propellervõlli uuendust, kere puhastamist ja täielikku epoksükattimist. Valmis 3 päeva enne tähtaega.",
    },
    // shipyard dry dock construction
    image: "https://images.unsplash.com/photo-1718314786551-798f1398a7b1?w=800&q=75&auto=format&fit=crop",
    tags: ["Ship Repair", "Dry Docking", "BWTS", "Coating"],
    featured: true,
  },
  {
    id: "2",
    slug: "ro-ro-passenger-conversion-klaipeda",
    title: {
      EN: "Ro-Ro to Passenger Vessel Conversion",
      RU: "Конверсия судна типа Ro-Ro в пассажирское",
      ET: "Ro-Ro laeva konversioon reisilaevaks",
    },
    year: 2025,
    companySlug: "western-shiprepair",
    sectorId: "repair",
    description: {
      EN: "12-month conversion of a roll-on/roll-off ferry into a 1,200-passenger vessel at BLRT's Klaipėda yard. New passenger decks, accommodation blocks, fire safety systems and full SOLAS/MLC compliance package delivered.",
      RU: "12-месячная конверсия парома ро-ро в пассажирское судно на 1200 пассажиров на литовской верфи BLRT в Клайпеде. Новые пассажирские палубы, жилые блоки, системы противопожарной безопасности и полный пакет соответствия СОЛАС/КТМ.",
      ET: "12-kuuline rool-laeva konversioon 1200-kohalise reisilaevaks BLRT-i Klaipėda laevatehases. Uued reisikorteežid, majutusplokid, tuleohutuseeskirjad ja täielik SOLAS/MLK vastavuspakett.",
    },
    // container ship at port with cranes
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=75&auto=format&fit=crop",
    tags: ["Conversion", "Passenger Vessel", "SOLAS", "Ship Repair"],
    featured: true,
  },
  {
    id: "3",
    slug: "elme-metall-bridge-steel-supply",
    title: {
      EN: "Structural Steel Supply for Pärnu Bridge Reconstruction",
      RU: "Поставка конструкционной стали для реконструкции моста Пярну",
      ET: "Konstruktsiooniterase tarnimine Pärnu silla rekonstrueerimiseks",
    },
    year: 2024,
    companySlug: "elme-metall",
    sectorId: "materials",
    description: {
      EN: "Elme Metall supplied and processed over 1,800 tonnes of structural steel for the Pärnu river bridge reconstruction project, including laser-cut profiles, hot-rolled beams and fabricated plate assemblies to customer drawings.",
      RU: "Elme Metall поставила и обработала более 1800 тонн конструкционной стали для проекта реконструкции моста через реку Пярну, включая лазерно-резанные профили, горячекатаные балки и собранные пластинные конструкции по чертежам заказчика.",
      ET: "Elme Metall tarnis ja töödeldi üle 1800 tonni konstruktsiooniterast Pärnu jõe silla rekonstrueerimisprojekti jaoks, sealhulgas laserlõigatud profiilid, kuumvaltsitud talad ja kliendi jooniste järgi kokkupandud plaatassembleed.",
    },
    // shipping containers / steel structures
    image: "https://images.unsplash.com/photo-1568347877321-f8935c7dc5a3?w=800&q=75&auto=format&fit=crop",
    tags: ["Steel Supply", "Infrastructure", "Laser Cutting", "Construction"],
    featured: false,
  },
  {
    id: "4",
    slug: "elme-messer-gas-offshore-supply",
    title: {
      EN: "Industrial Gas Supply for Offshore Wind Farm Installation",
      RU: "Поставка промышленных газов для монтажа морской ветряной фермы",
      ET: "Tööstusgaaside tarnimine offshore-tuulepargi paigaldamiseks",
    },
    year: 2024,
    companySlug: "elme-messer-gaas",
    sectorId: "materials",
    description: {
      EN: "Elme Messer Gaas provided a sustained supply of oxygen, argon, CO₂ and acetylene to the construction vessels and shore base supporting a Baltic offshore wind farm installation campaign spanning eight months.",
      RU: "Elme Messer Gaas обеспечила постоянную поставку кислорода, аргона, CO₂ и ацетилена на строительные суда и береговую базу, поддерживающие восьмимесячную кампанию по установке морской ветряной фермы на Балтике.",
      ET: "Elme Messer Gaas tagas hapniku, argooni, CO₂ ja atsetüleeni pideva tarnimise ehituslaevadele ja rannikulaadimisbaasile, toetades kaheksat kuud kestnud Baltikumi offshore-tuulepargi paigaldamiskampaaniat.",
    },
    // aerial port / offshore perspective
    image: "https://images.unsplash.com/photo-1589211188318-737e59cdb411?w=800&q=75&auto=format&fit=crop",
    tags: ["Industrial Gas", "Offshore", "Wind Energy", "Logistics"],
    featured: false,
  },
  {
    id: "5",
    slug: "blrt-era-electrical-upgrade-shipyard",
    title: {
      EN: "Electrical System Modernisation — Tallinn Shipyard Quayside Grid",
      RU: "Модернизация электрической системы — причальная сеть Таллинской верфи",
      ET: "Elektrisüsteemi moderniseerimine — Tallinna Laevatehase kaiäärne võrk",
    },
    year: 2024,
    companySlug: "blrt-era",
    sectorId: "engineering",
    description: {
      EN: "BLRT ERA upgraded 2,300 m of quayside electrical infrastructure at Tallinn Shipyard, installing new 440V shore power connections, distribution boards and a remote monitoring system to support shore-power delivery to vessels at berth.",
      RU: "BLRT ERA модернизировала 2300 м причальной электрической инфраструктуры на Таллинской верфи, установив новые береговые подключения 440 В, распределительные щиты и систему дистанционного мониторинга для обеспечения подачи берегового питания на суда у причала.",
      ET: "BLRT ERA uuendas Tallinna Laevatehases 2300 m kaiäärset elektriinfrastruktuuri, paigaldades uued 440 V maaühendused, jaotuskilbid ja kaugseiresisteemi, et toetada laevade kai taga sadama elektriühendust.",
    },
    // port / industrial quayside
    image: "https://images.unsplash.com/photo-1516467716199-ed21929a932e?w=800&q=75&auto=format&fit=crop",
    tags: ["Electrical Engineering", "Shore Power", "Infrastructure", "Shipyard"],
    featured: false,
  },
  {
    id: "6",
    slug: "tehnomet-survey-fleet-inspection-programme",
    title: {
      EN: "Fleet-Wide Hull Inspection Programme — 42 Vessels",
      RU: "Программа инспекции корпусов всего флота — 42 судна",
      ET: "Laevastiku laiade kerede inspekteerimisprogramm — 42 laeva",
    },
    year: 2025,
    companySlug: "tehnomet-survey",
    sectorId: "inspection",
    description: {
      EN: "Tehnomet Survey executed a multi-port hull inspection programme for a European ferry operator, covering 42 vessels across 11 ports in five countries. All reports were submitted within 72 hours and accepted by DNV GL.",
      RU: "Tehnomet Survey провела многопортовую программу инспекции корпусов для европейского парома, охватывающую 42 судна в 11 портах в пяти странах. Все отчёты были представлены в течение 72 часов и приняты DNV GL.",
      ET: "Tehnomet Survey teostas Euroopa parvlaevafirma jaoks mitmesadama kerede inspekteerimisprogrammi, hõlmates 42 laeva 11 sadamas viies riigis. Kõik aruanded esitati 72 tunni jooksul ja DNV GL aktsepteeris need.",
    },
    // cargo ship at sea — inspection perspective
    image: "https://images.unsplash.com/photo-1552207802-77bcb0d13122?w=800&q=75&auto=format&fit=crop",
    tags: ["Hull Inspection", "UTM", "Fleet", "Classification"],
    featured: true,
  },
  {
    id: "7",
    slug: "vene-balti-sadam-cargo-terminal-expansion",
    title: {
      EN: "Vene-Balti Sadam Cargo Terminal Expansion",
      RU: "Расширение грузового терминала Vene-Balti Sadam",
      ET: "Vene-Balti Sadama kaubaterminal laienemine",
    },
    year: 2023,
    companySlug: "vene-balti-sadam",
    sectorId: "port",
    description: {
      EN: "Expansion of cargo handling capacity at Vene-Balti Sadam's Old City Harbour terminal in Tallinn with new quayside cranes, a 4,200 m² warehouse and upgraded vehicle processing area, increasing throughput by 35%.",
      RU: "Расширение грузообработки в терминале Старой гавани Vene-Balti Sadam в Таллине с новыми причальными кранами, складом площадью 4200 м² и модернизированным участком для обработки автомобилей с увеличением пропускной способности на 35%.",
      ET: "Vene-Balti Sadama Vanalinna sadama terminali kaubakäitlusvõimsuse laiendamine Tallinnas uute kaikraanadega, 4200 m² lao ja uuendatud sõidukite töötluspiirkonnaga, suurendades läbilaskevõimet 35%.",
    },
    // port / harbor at dusk
    image: "https://images.unsplash.com/photo-1671443290089-8e2ae54ac608?w=800&q=75&auto=format&fit=crop",
    tags: ["Port Services", "Terminal", "Cargo Handling", "Infrastructure"],
    featured: false,
  },
  {
    id: "8",
    slug: "western-baltic-shipbuilding-patrol-vessel",
    title: {
      EN: "Patrol Vessel Construction for Baltic Coast Guard",
      RU: "Строительство патрульного судна для береговой охраны Балтики",
      ET: "Patrulllaeva ehitus Baltikumi rannikuvalve jaoks",
    },
    year: 2024,
    companySlug: "western-baltic-shipbuilding",
    sectorId: "building",
    description: {
      EN: "Western Baltic Shipbuilding delivered a 42-metre aluminium patrol vessel for a Baltic state coast guard authority. The vessel features integrated surveillance systems, towing capability up to 150 T and ice-class 1C rating.",
      RU: "Western Baltic Shipbuilding поставила 42-метровое алюминиевое патрульное судно для береговой охраны прибалтийского государства. Судно оснащено интегрированными системами наблюдения, буксировочной тягой до 150 Т и ледовым классом 1C.",
      ET: "Western Baltic Shipbuilding tarnis Baltikumi riigi rannikuvalvele 42-meetrise alumiiniumist patrulllaeva. Laeval on integreeritud seiresüsteemid, pukseerimissuutlikkus kuni 150 T ja jääklass 1C.",
    },
    // cargo / maritime vessel
    image: "https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?w=800&q=75&auto=format&fit=crop",
    tags: ["Shipbuilding", "Patrol Vessel", "Aluminium", "Defence"],
    featured: false,
  },
];
