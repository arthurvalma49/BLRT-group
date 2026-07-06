export type Lang = "EN" | "RU" | "ET" | "LT" | "LV" | "FI" | "PL";

const translations = {
  // Nav
  "nav.home": { EN: "Home", RU: "Главная", ET: "Avaleht" },
  "nav.about": { EN: "About Us", RU: "О нас", ET: "Meist" },
  "nav.group": { EN: "BLRT Group", RU: "BLRT Grupp", ET: "BLRT Grupp" },
  "nav.activities": { EN: "Activities", RU: "Деятельность", ET: "Tegevused" },
  "nav.contacts": { EN: "Contacts", RU: "Контакты", ET: "Kontaktid" },
  "nav.requestSurvey": { EN: "Request a Survey", RU: "Заказать обследование", ET: "Telli ülevaatus" },

  // Home hero
  "home.badge": { EN: "Marine Inspection · Since 1998", RU: "Морская инспекция · С 1998 года", ET: "Mereinspektsioon · Alates 1998" },
  "home.heroTitle1": { EN: "Independent ship hull", RU: "Независимая инспекция", ET: "Sõltumatu laevakere" },
  "home.heroTitle2": { EN: "inspection, ", RU: "корпусов судов, ", ET: "inspektsioon, " },
  "home.heroTitle3": { EN: "worldwide.", RU: "по всему миру.", ET: "üle maailma." },
  "home.heroDesc": {
    EN: "Non-destructive testing, ultrasonic thickness measurement and steel renewal supervision for fleet operators. Certified technicians mobilised to any port within 24 hours.",
    RU: "Неразрушающий контроль, ультразвуковая толщинометрия и надзор за заменой стали для операторов флота. Сертифицированные специалисты выезжают в любой порт в течение 24 часов.",
    ET: "Mittepurustav kontroll, ultraheli paksuse mõõtmine ja terase uuendamise järelevalve laevastike operaatoritele. Sertifitseeritud tehnikud mobiliseeritakse igasse sadamasse 24 tunni jooksul.",
  },
  "home.viewActivities": { EN: "View Activities", RU: "Наши услуги", ET: "Vaata tegevusi" },

  // Stats
  "home.stat.vessels": { EN: "Vessels inspected per year", RU: "Судов обследовано в год", ET: "Inspekteeritud laevu aastas" },
  "home.stat.mobilisation": { EN: "Mobilisation availability", RU: "Готовность к мобилизации", ET: "Mobilisatsiooni valmidus" },
  "home.stat.experience": { EN: "Years of experience", RU: "Лет опыта", ET: "Aastat kogemust" },
  "home.stat.coverage": { EN: "Operational coverage", RU: "Операционное покрытие", ET: "Tegevuspiirkond" },
  "home.stat.worldwide": { EN: "Worldwide", RU: "Весь мир", ET: "Üle maailma" },

  // Home about preview
  "home.aboutLabel": { EN: "About Us", RU: "О нас", ET: "Meist" },
  "home.aboutTitle": { EN: "Trusted partner in marine vessel inspection", RU: "Надёжный партнёр в инспекции морских судов", ET: "Usaldusväärne partner laevade inspekteerimisel" },
  "home.aboutP1": {
    EN: "Tehnomet Survey is an actively developing service company operating in the field of ship repair and inspection of hull structures of marine vessels. Founded in 1998, we are part of the BLRT Grupp and operate worldwide.",
    RU: "Tehnomet Survey — активно развивающаяся сервисная компания, работающая в области судоремонта и инспекции корпусных конструкций морских судов. Основана в 1998 году, входит в состав BLRT Grupp и работает по всему миру.",
    ET: "Tehnomet Survey on aktiivselt arenev teenusettevõte, mis tegutseb laevaremondi ja merelaevade kerekonstruktsioonide inspekteerimise valdkonnas. Asutatud 1998. aastal, kuulume BLRT Gruppi ja tegutseme üle kogu maailma.",
  },
  "home.aboutP2": {
    EN: "Our technicians hold all necessary documents to be mobilised on short notice and arrive on a spot as per client's request — wherever the vessel is located.",
    RU: "Наши специалисты имеют все необходимые документы для оперативной мобилизации и прибытия на место по запросу клиента — где бы ни находилось судно.",
    ET: "Meie tehnikutel on kõik vajalikud dokumendid, et lühikese etteteatamisega mobiliseerida ja saabuda kohale vastavalt kliendi soovile — sõltumata laeva asukohast.",
  },
  "home.readMore": { EN: "Read More", RU: "Подробнее", ET: "Loe rohkem" },

  // Home activities preview
  "home.activitiesLabel": { EN: "Activities", RU: "Деятельность", ET: "Tegevused" },
  "home.activitiesTitle": { EN: "Our Core Services", RU: "Основные услуги", ET: "Meie põhiteenused" },
  "home.ndt.title": { EN: "Non-Destructive Testing (NDT)", RU: "Неразрушающий контроль (НК)", ET: "Mittepurustav kontroll (NDT)" },
  "home.ndt.desc": {
    EN: "Hull and weld inspection without interrupting vessel operations. UT, MT, PT, VT, RT and ET methods performed by certified technicians.",
    RU: "Инспекция корпуса и сварных швов без прерывания эксплуатации судна. Методы УЗК, МПД, ПВК, ВИК, РК и ВТК выполняются сертифицированными специалистами.",
    ET: "Kere ja keevisõmbluste kontroll laeva tegevust katkestamata. UT, MT, PT, VT, RT ja ET meetodid sertifitseeritud tehnikute poolt.",
  },
  "home.utm.title": { EN: "UTM & Steel Supervision", RU: "УЗТ и надзор за сталью", ET: "UTM ja terase järelevalve" },
  "home.utm.desc": {
    EN: "Ultrasonic thickness measurement, corrosion monitoring, structural integrity assessment and class survey support.",
    RU: "Ультразвуковая толщинометрия, мониторинг коррозии, оценка структурной целостности и поддержка классификационных освидетельствований.",
    ET: "Ultraheli paksuse mõõtmine, korrosiooni jälgimine, konstruktsiooni terviklikkuse hindamine ja klassifikatsiooniühingute ülevaatuste tugi.",
  },

  // Class societies strip
  "class.accepted": { EN: "Accepted by all major classification societies", RU: "Признано всеми ведущими классификационными обществами", ET: "Tunnustatud kõigi suuremate klassifikatsiooniühingute poolt" },

  // About page
  "about.label": { EN: "About Us", RU: "О нас", ET: "Meist" },
  "about.heroTitle": { EN: "A quarter century of marine inspection expertise.", RU: "Четверть века экспертизы в морской инспекции.", ET: "Veerand sajandit mereinspektsiooni kogemust." },
  "about.ourStory": { EN: "Our Story", RU: "Наша история", ET: "Meie lugu" },
  "about.storyP1": {
    EN: "Tehnomet Survey is an actively developing service company, operating in the field of ship repair and inspection of hull structures of marine vessels, founded in 1998. We operate worldwide.",
    RU: "Tehnomet Survey — активно развивающаяся сервисная компания, работающая в области судоремонта и инспекции корпусных конструкций морских судов, основанная в 1998 году. Мы работаем по всему миру.",
    ET: "Tehnomet Survey on aktiivselt arenev teenusettevõte, mis tegutseb laevaremondi ja merelaevade kerekonstruktsioonide inspekteerimise valdkonnas, asutatud 1998. aastal. Tegutseme üle kogu maailma.",
  },
  "about.storyP2": {
    EN: "Our technicians have all the necessary documents to be mobilized on a short notice and arrive on a spot as per client's request, wherever vessel is located. Over more than two decades we have built lasting relationships with ship owners, fleet operators, port agents and procurement managers across Europe, the Middle East and Asia-Pacific.",
    RU: "Наши специалисты имеют все необходимые документы для оперативной мобилизации и прибытия на место по запросу клиента, где бы ни находилось судно. За более чем два десятилетия мы построили прочные отношения с судовладельцами, операторами флота, портовыми агентами и менеджерами по закупкам в Европе, на Ближнем Востоке и в Азиатско-Тихоокеанском регионе.",
    ET: "Meie tehnikutel on kõik vajalikud dokumendid, et lühikese etteteatamisega mobiliseerida ja saabuda kohale vastavalt kliendi soovile, sõltumata laeva asukohast. Üle kahe aastakümne oleme loonud püsivad suhted laevaomanike, laevastike operaatorite, sadamaagentide ja hankejuhtidega Euroopas, Lähis-Idas ja Aasias-Vaikse ookeani piirkonnas.",
  },
  "about.storyP3": {
    EN: "We perform our work in close cooperation with all major classification societies, ensuring every report and certificate we produce is accepted globally. Independence and technical rigour are at the core of how we operate.",
    RU: "Мы выполняем нашу работу в тесном сотрудничестве со всеми ведущими классификационными обществами, обеспечивая глобальное признание каждого отчёта и сертификата. Независимость и техническая строгость — основа нашей работы.",
    ET: "Töötame tihedas koostöös kõigi suuremate klassifikatsiooniühingutega, tagades iga aruande ja sertifikaadi rahvusvahelise tunnustuse. Sõltumatus ja tehniline täpsus on meie tegevuse alustaladeks.",
  },
  "about.stat.vessels": { EN: "Vessels per year", RU: "Судов в год", ET: "Laevu aastas" },
  "about.stat.availability": { EN: "Availability", RU: "Доступность", ET: "Saadavus" },
  "about.stat.experience": { EN: "Years experience", RU: "Лет опыта", ET: "Aastat kogemust" },
  "about.stat.coverage": { EN: "Coverage", RU: "Покрытие", ET: "Tegevuspiirkond" },
  "about.stat.worldwide": { EN: "Worldwide", RU: "Весь мир", ET: "Üle maailma" },
  "about.parentLabel": { EN: "Parent Company", RU: "Материнская компания", ET: "Emaettevõte" },
  "about.parentTitle": { EN: "Part of BLRT Grupp", RU: "Часть BLRT Grupp", ET: "Osa BLRT Grupist" },
  "about.parentP1": {
    EN: "Tehnomet Survey is part of BLRT Grupp, one of the largest industrial holding companies in the Baltic region with deep roots in shipbuilding, ship repair and maritime services.",
    RU: "Tehnomet Survey входит в состав BLRT Grupp — одного из крупнейших промышленных холдингов Балтийского региона с глубокими корнями в судостроении, судоремонте и морских услугах.",
    ET: "Tehnomet Survey kuulub BLRT Gruppi, ühte suurimasse Balti piirkonna tööstusvaldusettevõttesse, millel on sügavad juured laevaehituses, laevaremondis ja meretranspordi teenustes.",
  },
  "about.parentP2": {
    EN: "Through BLRT Grupp we have access to extensive shipyard infrastructure, engineering expertise and a network of maritime specialists — strengths we bring to every inspection contract.",
    RU: "Через BLRT Grupp мы имеем доступ к обширной инфраструктуре верфей, инженерному опыту и сети морских специалистов — преимущества, которые мы привносим в каждый инспекционный контракт.",
    ET: "BLRT Grupi kaudu on meil juurdepääs ulatuslikule laevatehase infrastruktuurile, inseneriteadmistele ja merespetsialistide võrgustikule — tugevused, mida toome igasse inspekteerimislepingusse.",
  },
  "about.card.shipyard": { EN: "Shipyard heritage", RU: "Наследие верфей", ET: "Laevatehase pärand" },
  "about.card.industrial": { EN: "Industrial scale", RU: "Промышленный масштаб", ET: "Tööstuslik mastaap" },
  "about.card.baltic": { EN: "Baltic region leader", RU: "Лидер Балтийского региона", ET: "Balti piirkonna liider" },
  "about.card.decades": { EN: "Decades of trust", RU: "Десятилетия доверия", ET: "Aastakümnete usaldus" },
  "about.ctaTitle": { EN: "Need an inspection arranged?", RU: "Нужно организовать инспекцию?", ET: "Vajad inspekteerimist?" },
  "about.ctaDesc": { EN: "Talk to our team — response within hours, mobilisation within 24h.", RU: "Свяжитесь с нашей командой — ответ в течение нескольких часов, мобилизация в течение 24 часов.", ET: "Võta meiega ühendust — vastame tundide jooksul, mobiliseerume 24 tunniga." },

  // Activities page
  "activities.label": { EN: "Activities", RU: "Деятельность", ET: "Tegevused" },
  "activities.heroTitle": { EN: "Inspection services for the modern fleet.", RU: "Инспекционные услуги для современного флота.", ET: "Inspektsiooniteenused kaasaegsele laevastikule." },
  "activities.ndt.label": { EN: "Non-Destructive Testing (NDT)", RU: "Неразрушающий контроль (НК)", ET: "Mittepurustav kontroll (NDT)" },
  "activities.ndt.intro": {
    EN: "Inspection of hull structures and welds without interrupting vessel operations. Our certified technicians detect surface and sub-surface defects to confirm structural integrity, with reports accepted by all major classification societies.",
    RU: "Инспекция корпусных конструкций и сварных швов без прерывания эксплуатации судна. Наши сертифицированные специалисты выявляют поверхностные и подповерхностные дефекты для подтверждения структурной целостности, с отчётами, признанными всеми ведущими классификационными обществами.",
    ET: "Kerekonstruktsioonide ja keevisõmbluste kontroll laeva tegevust katkestamata. Meie sertifitseeritud tehnikud tuvastavad pinna- ja pinnaalused defektid konstruktsiooni terviklikkuse kinnitamiseks, aruanded on tunnustatud kõigi suuremate klassifikatsiooniühingute poolt.",
  },
  "activities.utm.label": { EN: "UTM & Steel Supervision", RU: "УЗТ и надзор за сталью", ET: "UTM ja terase järelevalve" },
  "activities.utm.intro": {
    EN: "Ultrasonic thickness measurement, corrosion monitoring and structural integrity assessment in support of class surveys and steel renewal works. We deliver actionable thickness mappings and engineering documentation.",
    RU: "Ультразвуковая толщинометрия, мониторинг коррозии и оценка структурной целостности в поддержку классификационных освидетельствований и работ по замене стали. Мы предоставляем детальные карты толщин и инженерную документацию.",
    ET: "Ultraheli paksuse mõõtmine, korrosiooni jälgimine ja konstruktsiooni terviklikkuse hindamine klassifikatsiooniühingute ülevaatuste ja terase uuendamise tööde toetamiseks. Pakume detailseid paksuskaarte ja inseneridokumentatsiooni.",
  },

  // NDT methods
  "activities.ut.title": { EN: "Ultrasonic Testing", RU: "Ультразвуковой контроль", ET: "Ultrahelikontroll" },
  "activities.ut.desc": { EN: "Detects internal flaws and weld defects using high-frequency sound waves.", RU: "Обнаружение внутренних дефектов и дефектов сварных швов с помощью высокочастотных звуковых волн.", ET: "Tuvastab sisemisi defekte ja keevisõmbluste vigu kõrgsageduslike helilainete abil." },
  "activities.ut.full": {
    EN: "Ultrasonic Testing (UT) uses high-frequency sound waves to detect internal flaws in welds and hull structures. The technique can identify cracks, inclusions, porosity and lack of fusion without damaging the material. Our technicians are certified to perform UT in accordance with international standards and classification society requirements.",
    RU: "Ультразвуковой контроль (УЗК) использует высокочастотные звуковые волны для обнаружения внутренних дефектов в сварных швах и конструкциях корпуса. Метод позволяет выявлять трещины, включения, пористость и непровары без повреждения материала. Наши специалисты сертифицированы для проведения УЗК в соответствии с международными стандартами и требованиями классификационных обществ.",
    ET: "Ultrahelikontroll (UT) kasutab kõrgsageduslikke helilaineid keevisõmbluste ja kerekonstruktsioonide sisemiste defektide tuvastamiseks. Meetod võimaldab tuvastada pragusid, lisandeid, poorsust ja sulamise puudumist materjali kahjustamata. Meie tehnikud on sertifitseeritud UT teostamiseks vastavalt rahvusvahelistele standarditele ja klassifikatsiooniühingute nõuetele.",
  },
  "activities.mt.title": { EN: "Magnetic Particle", RU: "Магнитопорошковый контроль", ET: "Magnetpulberkontroll" },
  "activities.mt.desc": { EN: "Reveals surface and near-surface discontinuities in ferromagnetic materials.", RU: "Выявление поверхностных и приповерхностных несплошностей в ферромагнитных материалах.", ET: "Toob esile pinna ja pinnalähedased katkestused ferromagnetilistes materjalides." },
  "activities.mt.full": {
    EN: "Magnetic Particle Testing (MT) is used to detect surface and near-surface discontinuities in ferromagnetic materials such as steel. A magnetic field is applied to the test area, and ferromagnetic particles are distributed over the surface. Discontinuities cause the particles to gather, forming visible indications. This method is widely used in shipbuilding for weld inspection.",
    RU: "Магнитопорошковый контроль (МПД) применяется для обнаружения поверхностных и приповерхностных несплошностей в ферромагнитных материалах, таких как сталь. На испытуемый участок подаётся магнитное поле, и ферромагнитные частицы распределяются по поверхности. Несплошности вызывают скопление частиц, образуя видимые индикации. Этот метод широко применяется в судостроении для контроля сварных швов.",
    ET: "Magnetpulberkontrolli (MT) kasutatakse pinna ja pinnalähedaste katkestuste tuvastamiseks ferromagnetilistes materjalides nagu teras. Katsealale rakendatakse magnetväli ja ferromagnetilised osakesed jaotatakse pinnale. Katkestused põhjustavad osakeste kogunemist, moodustades nähtavad märgid. Seda meetodit kasutatakse laevaehituses laialdaselt keevisõmbluste kontrolliks.",
  },
  "activities.pt.title": { EN: "Penetrant Testing", RU: "Капиллярный контроль", ET: "Penetrantkontroll" },
  "activities.pt.desc": { EN: "Identifies surface-breaking defects using capillary action of dye penetrants.", RU: "Выявление поверхностных дефектов с помощью капиллярного действия проникающих жидкостей.", ET: "Tuvastab pinnale avanevaid defekte värviliste penetrantide kapillaartoime abil." },
  "activities.pt.full": {
    EN: "Penetrant Testing (PT) uses the capillary action of dye penetrants to reveal surface-breaking defects. A liquid penetrant is applied to the surface, allowed to seep into any cracks or discontinuities, then excess is removed and a developer is applied to draw out the penetrant from defects, making them visible. This method is effective on both ferromagnetic and non-ferromagnetic materials.",
    RU: "Капиллярный контроль (ПВК) использует капиллярное действие проникающих жидкостей для выявления поверхностных дефектов. Проникающая жидкость наносится на поверхность, проникает в трещины и несплошности, затем избыток удаляется и наносится проявитель, который вытягивает пенетрант из дефектов, делая их видимыми. Этот метод эффективен как для ферромагнитных, так и для неферромагнитных материалов.",
    ET: "Penetrantkontroll (PT) kasutab värviliste penetrantide kapillaartoimet pinnale avanevate defektide tuvastamiseks. Vedel penetrant kantakse pinnale, lastakse imenduda pragudesse ja katkestustesse, seejärel eemaldatakse liig ja kantakse arendaja, mis tõmbab penetrandi defektidest välja, muutes need nähtavaks. See meetod on efektiivne nii ferromagnetilistele kui ka mitteferromagnetilistele materjalidele.",
  },
  "activities.vt.title": { EN: "Visual Inspection", RU: "Визуальный контроль", ET: "Visuaalkontroll" },
  "activities.vt.desc": { EN: "Systematic visual examination of welds, structures and coatings.", RU: "Систематический визуальный осмотр сварных швов, конструкций и покрытий.", ET: "Keevisõmbluste, konstruktsioonide ja katete süstemaatiline visuaalne kontroll." },
  "activities.vt.full": {
    EN: "Visual Testing (VT) is the most fundamental and widely used NDT method. It involves systematic visual examination of welds, structures and coatings using direct observation, aided by tools such as magnifying lenses, borescopes and cameras. VT is the first line of inspection and is essential for identifying surface defects, misalignment, and coating degradation.",
    RU: "Визуальный контроль (ВИК) — наиболее фундаментальный и широко применяемый метод НК. Включает систематический визуальный осмотр сварных швов, конструкций и покрытий с использованием прямого наблюдения, а также инструментов — увеличительных линз, бороскопов и камер. ВИК — первая линия инспекции, необходимая для выявления поверхностных дефектов, несоосности и деградации покрытий.",
    ET: "Visuaalkontroll (VT) on kõige põhilisem ja laialdasemalt kasutatav NDT meetod. See hõlmab keevisõmbluste, konstruktsioonide ja katete süstemaatilist visuaalset kontrolli otsese vaatluse abil, kasutades selliseid tööriistu nagu suurendusklaasid, boreskoobid ja kaamerad. VT on esimene kontrolljoon ja oluline pinnadefektide, valeasendi ja kattekihi degradatsiooni tuvastamiseks.",
  },
  "activities.rt.title": { EN: "Radiographic Testing", RU: "Радиографический контроль", ET: "Radiograafiline kontroll" },
  "activities.rt.desc": { EN: "X-ray and gamma-ray imaging for full volumetric weld inspection.", RU: "Рентгеновский и гамма-контроль для полной объёмной инспекции сварных швов.", ET: "Röntgen- ja gammakiirguse pildistamine täielikuks mahuliseks keevisõmbluse kontrolliks." },
  "activities.rt.full": {
    EN: "Radiographic Testing (RT) uses X-rays or gamma rays to produce images of the internal structure of welds and materials. The radiation passes through the test piece and creates an image on film or a digital detector, revealing internal defects such as porosity, slag inclusions, cracks and lack of fusion. RT provides a permanent record of inspection results.",
    RU: "Радиографический контроль (РК) использует рентгеновское или гамма-излучение для получения изображений внутренней структуры сварных швов и материалов. Излучение проходит через испытуемый объект и создаёт изображение на плёнке или цифровом детекторе, выявляя внутренние дефекты — пористость, шлаковые включения, трещины и непровары. РК обеспечивает постоянную запись результатов инспекции.",
    ET: "Radiograafiline kontroll (RT) kasutab röntgen- või gammakiirgust keevisõmbluste ja materjalide sisemise struktuuri kujutiste tegemiseks. Kiirgus läbib katsekeha ja tekitab kujutise filmile või digitaalsele detektorile, paljastades sisemisi defekte nagu poorsus, räbu lisandid, praod ja sulamise puudumine. RT pakub püsivat ülevaatuse tulemuste salvestust.",
  },
  "activities.et.title": { EN: "Eddy Current", RU: "Вихретоковый контроль", ET: "Pööriskontroll" },
  "activities.et.desc": { EN: "Electromagnetic detection of surface and sub-surface flaws in conductive materials.", RU: "Электромагнитное обнаружение поверхностных и подповерхностных дефектов в проводящих материалах.", ET: "Pinna- ja pinnaaluste defektide elektromagnetiline tuvastamine juhtivates materjalides." },
  "activities.et.full": {
    EN: "Eddy Current Testing (ET) uses electromagnetic induction to detect surface and near-surface flaws in conductive materials. An alternating current coil is placed near the test surface, inducing eddy currents in the material. Defects disrupt these currents, which is detected by the instrument. ET is particularly effective for detecting cracks in heat exchanger tubes and non-ferromagnetic materials.",
    RU: "Вихретоковый контроль (ВТК) использует электромагнитную индукцию для обнаружения поверхностных и приповерхностных дефектов в проводящих материалах. Катушка переменного тока размещается вблизи поверхности, индуцируя вихревые токи в материале. Дефекты нарушают эти токи, что фиксируется прибором. ВТК особенно эффективен для обнаружения трещин в трубах теплообменников и неферромагнитных материалах.",
    ET: "Pööriskontroll (ET) kasutab elektromagnetilist induktsiooni pinna ja pinnalähedaste defektide tuvastamiseks juhtivates materjalides. Vahelduvvoolu pool paigutatakse katsepinna lähedale, indutseerides materjalis pöörisvoole. Defektid häirivad neid voole, mida instrument tuvastab. ET on eriti efektiivne soojusvahetite torudes ja mitteferromagnetilistes materjalides pragude tuvastamisel.",
  },

  // UTM methods - updated
  "activities.utm.utmTitle": { EN: "Ultrasonic Thickness Measurements (UTM)", RU: "Ультразвуковые измерения толщины (УЗТ)", ET: "Ultraheli paksuse mõõtmised (UTM)" },
  "activities.utm.utmDesc": { EN: "Residual thickness measurement of hull structures carried out by the most popular method of UTM, in accordance with classification society rules.", RU: "Измерение остаточной толщины конструкций корпуса наиболее популярным методом УЗТ, в соответствии с правилами классификационных обществ.", ET: "Kerekonstruktsioonide jääkpaksuse mõõtmine UTM-i populaarseimal meetodil vastavalt klassifikatsiooniühingute reeglitele." },
  "activities.utm.utmFull": {
    EN: "Pursuant to classification society rules, all vessels are subject to periodical survey of the hull's technical condition. Each survey includes inspection for deformations, cracks and structural breaches, as well as mandatory residual thickness measurement of hull structures. Survey results are compared against the applicable normative values. The customer receives a clear report of required and recommended work on board. Residual hull thickness is measured by UTM.\n\nOur technicians hold qualifications in shipbuilding and ship repair and carry all certifications required to operate worldwide. Surveys can be arranged pre-docking or during dockage at short notice. Reporting documentation is submitted to the customer immediately upon completion.",
    RU: "В соответствии с международными правилами классификационных обществ, все суда подлежат периодическому освидетельствованию в связи с техническим состоянием корпуса. В ходе освидетельствования корпус проверяется на деформации, трещины или нарушения конструкции, а также проводится обязательное измерение остаточной толщины конструкций корпуса. Результаты освидетельствования и измерений сравниваются с соответствующим нормативным значением. На основании полученных результатов заказчик получает полную картину необходимых/рекомендованных работ на борту. Измерение остаточной толщины конструкций корпуса проводится наиболее популярным методом УЗТ.\n\nНаши специалисты — высококвалифицированные эксперты с всесторонней подготовкой. Большинство из них имеют высшее образование в области судостроения и судоремонта. Мы имеем все необходимые документы и сертификаты для работы по всему миру. Инспекция и освидетельствование могут быть проведены по предпочтению заказчика — предстапельная инспекция или непосредственно в доке в кратчайшие сроки. Отчётная документация подготавливается соответствующим образом и всегда передаётся заказчику сразу после завершения освидетельствования.",
    ET: "Vastavalt klassifikatsiooniühingute rahvusvahelistele reeglitele kuuluvad kõik laevad perioodilisele ülevaatusele seoses kere tehnilise seisukorraga. Ülevaatuse käigus kontrollitakse keret deformatsioonide, pragude või konstruktsiooniliste rikete osas ning teostatakse kerekonstruktsioonide jääkpaksuse kohustuslik mõõtmine. Ülevaatuse ja mõõtmiste tulemusi võrreldakse vastava normväärtusega. Saadud tulemuste põhjal saab klient täieliku ülevaate pardal vajalikest/soovitatavatest töödest. Kerekonstruktsioonide jääkpaksuse mõõtmine teostatakse populaarseima UTM meetodi abil.\n\nMeie tehnikud on tippspetsialistid põhjaliku väljaõppega. Enamikul neist on kõrgharidus laevaehituse ja laevaremondi alal. Meil on kõik vajalikud dokumendid ja sertifikaadid, et tegutseda üle kogu maailma. Inspekteerimine ja ülevaatus saab toimuda vastavalt kliendi eelistusele — kas eelnev inspekteerimine või otse dokis lühikese etteteatamisega. Aruandlusdokumentatsioon koostatakse vastavalt ja edastatakse kliendile alati kohe pärast ülevaatuse lõppu.",
  },
  "activities.utm.repairTitle": { EN: "Repair Sketches & Steel Replacement Calculation", RU: "Ремонтные эскизы и расчёт замены стали", ET: "Remondieskiisid ja terase asendamise arvutus" },
  "activities.utm.repairDesc": { EN: "Repair sketches, suggestions and weight calculation of metal to be replaced based on ship repair technologies.", RU: "Ремонтные эскизы, предложения и расчёт массы заменяемого металла на основе технологий судоремонта.", ET: "Remondieskiisid, ettepanekud ja asendatava metalli kaalu arvutus laevaremondi tehnoloogiate alusel." },
  "activities.utm.repairFull": {
    EN: "Beyond standard inspection reports, trained technicians can provide repair sketches and weight calculations of structures to be replaced, referenced to the specific requirements of ship repair technologies. An advance survey combined with accurate weight calculations helps owners prepare dock specifications, budget accurately, and avoid cost surprises.",
    RU: "Соответствующая подготовка наших специалистов позволяет нам, помимо отчётов о фактическом состоянии судна, предоставлять клиенту ремонтные эскизы и предложения, а также рассчитывать массу заменяемого металла с учётом особенностей судоремонтных технологий. Предварительно проведённое освидетельствование судна и корректный расчёт масс заменяемых конструкций позволяют нашим заказчикам лучше подготовиться к доковым работам, учесть все аспекты при бюджетировании и избежать непредвиденных расходов.",
    ET: "Tehnikute asjakohane väljaõpe võimaldab meil lisaks aruannetele laeva tegeliku seisukorra kohta pakkuda kliendile remondieskiise ja ettepanekuid ning arvutada asendatava metalli kaalu laevaremondi tehnoloogiate eripäradele tuginedes. Laeva eelnev ülevaatus ja asendatavate konstruktsioonide kaalude korrektne arvutus võimaldavad meie klientidel paremini ette valmistada dokitööd, arvestada kõiki aspekte eelarvestamisel ja vältida ootamatusi.",
  },
  "activities.utm.pittingTitle": { EN: "Pitting Corrosion Detection & Measurement", RU: "Обнаружение и измерение питтинговой коррозии", ET: "Punktkorrosiooni tuvastamine ja mõõtmine" },
  "activities.utm.pittingDesc": { EN: "Expert detection and measurement of pitting corrosion in ballast and cargo tanks with detailed reporting.", RU: "Экспертное обнаружение и измерение питтинговой коррозии в балластных и грузовых танках с подробной отчётностью.", ET: "Punktkorrosiooni asjatundlik tuvastamine ja mõõtmine ballast- ja lastitankides koos detailse aruandlusega." },
  "activities.utm.pittingFull": {
    EN: "Pitting corrosion or pitting wear of metal can develop on any ship structure. This issue is most common for ballast and cargo tanks. Pitting corrosion undetected and without measures taken on time can lead to costly repairs, lengthy downtime of the vessel and to environmental hazards. Our technicians have a considerable expertise in pitting corrosion research. Upon completion of inspection, they will provide a detailed report on location of the problem areas, their depth and extensiveness, together with appropriate repair suggestions based on requirements and tolerances of classification societies and IACS rules.",
    RU: "Питтинговая коррозия или питтинговый износ металла может развиваться на любой судовой конструкции. Эта проблема наиболее характерна для балластных и грузовых танков. Необнаруженная питтинговая коррозия без своевременно принятых мер может привести к дорогостоящему ремонту, длительному простою судна и экологическим рискам. Наши специалисты обладают значительным опытом в исследовании питтинговой коррозии. По завершении инспекции они предоставят подробный отчёт о расположении проблемных зон, их глубине и распространённости, а также соответствующие предложения по ремонту на основе требований и допусков классификационных обществ и правил МАКО.",
    ET: "Punktkorrosioon ehk metalli punktkulumine võib areneda igal laevakonstruktsioonil. See probleem on kõige levinum ballast- ja lastitankides. Avastamata punktkorrosioon ilma õigeaegsete meetmeteta võib viia kallite remontide, pikkade laeva seisuaegade ja keskkonnaohtudeni. Meie tehnikutel on märkimisväärne kogemus punktkorrosiooni uurimisel. Pärast ülevaatuse lõppu esitavad nad detailse aruande probleemsete piirkondade asukoha, sügavuse ja ulatuse kohta koos asjakohaste remondiettepanekutega vastavalt klassifikatsiooniühingute ja IACS reeglite nõuetele ja lubatud kõrvalekalletele.",
  },
  "activities.utm.anchorTitle": { EN: "Anchor Chains Calibration", RU: "Калибровка якорных цепей", ET: "Ankrukettide kalibreerimine" },
  "activities.utm.anchorDesc": { EN: "Calibration of anchor chains to ensure total wear is within normal range per classification society requirements.", RU: "Калибровка якорных цепей для проверки допустимого износа в соответствии с требованиями классификационных обществ.", ET: "Ankrukettide kalibreerimine tagamaks, et kogu kulumine on klassifikatsiooniühingute nõuete kohaselt normide piires." },
  "activities.utm.anchorFull": {
    EN: "Starting from the second special survey of the vessel (10 years from the date of construction), the classification society representative may also request calibration of the anchor chain to ensure the total wear is within a normal range. Our UTM teams can perform this job both during the preliminary inspection or during dockage and prepare appropriate reports along with replacement suggestions for all parties concerned.",
    RU: "Начиная со второго специального освидетельствования судна (10 лет с даты постройки), представитель классификационного общества может также потребовать калибровку якорной цепи для проверки того, что общий износ находится в допустимых пределах. Наши команды УЗТ могут выполнить эту работу как во время предварительной инспекции, так и во время стоянки в доке, и подготовить соответствующие отчёты вместе с предложениями по замене для всех заинтересованных сторон.",
    ET: "Alates laeva teisest erilisest ülevaatusest (10 aastat ehitamise kuupäevast) võib klassifikatsiooniühingu esindaja nõuda ka ankruketi kalibreerimist tagamaks, et kogu kulumine on normide piires. Meie UTM meeskonnad saavad seda tööd teostada nii eelneva inspekteerimise kui dokis viibimise ajal ning koostada asjakohased aruanded koos asendamissoovitustega kõigile asjaosalistele.",
  },

  "activities.readMore": { EN: "Read More", RU: "Подробнее", ET: "Loe rohkem" },
  "activities.readLess": { EN: "Show Less", RU: "Свернуть", ET: "Näita vähem" },

  "activities.whyLabel": { EN: "Our Commitment", RU: "Почему мы", ET: "Miks meid valida" },
  "activities.whyTitle": { EN: "Built for fleet operators who can't afford guesswork", RU: "Создано для операторов флота, которым нельзя ошибаться", ET: "Loodud laevastike operaatoritele, kes ei saa endale lubada oletusi" },
  "activities.why.mobilisation": { EN: "24/7 Mobilisation", RU: "Мобилизация 24/7", ET: "24/7 mobilisatsioon" },
  "activities.why.mobilisationDesc": { EN: "On-call technicians ready to deploy to any port worldwide within 24 hours of your request.", RU: "Дежурные специалисты готовы выехать в любой порт мира в течение 24 часов после вашего запроса.", ET: "Valves olevad tehnikud on valmis sõitma igasse maailma sadamasse 24 tunni jooksul pärast teie taotlust." },
  "activities.why.classSocieties": { EN: "All Major Class Societies", RU: "Все ведущие классификационные общества", ET: "Kõik suuremad klassifikatsiooniühingud" },
  "activities.why.classSocietiesDesc": { EN: "Reports and surveys accepted by LR, DNV, BV, ABS, ClassNK, RINA and CCS.", RU: "Отчёты и освидетельствования принимаются LR, DNV, BV, ABS, ClassNK, RINA и CCS.", ET: "Aruanded ja ülevaatused on tunnustatud LR, DNV, BV, ABS, ClassNK, RINA ja CCS poolt." },
  "activities.why.certified": { EN: "Certified Technicians", RU: "Сертифицированные специалисты", ET: "Sertifitseeritud tehnikud" },
  "activities.why.certifiedDesc": { EN: "All inspectors hold internationally recognised qualifications and class society approvals.", RU: "Все инспекторы имеют международно признанные квалификации и допуски классификационных обществ.", ET: "Kõigil inspektoritel on rahvusvaheliselt tunnustatud kvalifikatsioonid ja klassifikatsiooniühingute heakskiidud." },

  // Contacts page
  "contacts.label": { EN: "Contacts", RU: "Контакты", ET: "Kontaktid" },
  "contacts.heroTitle": { EN: "Get in touch with BLRT Grupp.", RU: "Свяжитесь с BLRT Grupp.", ET: "Võta ühendust BLRT Grupiga." },
  "contacts.heroDesc": { EN: "Our head office is at Kopli 103, Tallinn. Reach out by phone or email. We respond within hours.", RU: "Наш головной офис находится по адресу Копли 103, Таллин. Свяжитесь с нами по телефону или электронной почте — мы отвечаем в течение нескольких часов.", ET: "Meie peakontor asub Kopli 103, Tallinn. Võtke ühendust telefoni või e-posti teel — vastame tundide jooksul." },
  "contacts.available": { EN: "Available 24/7", RU: "Доступны 24/7", ET: "Saadaval 24/7" },
  "contacts.companyName": { EN: "BLRT Grupp AS", RU: "BLRT Grupp AS", ET: "BLRT Grupp AS" },
  "contacts.companyDesc": { EN: "Baltic Industrial Holding", RU: "Балтийский промышленный холдинг", ET: "Balti tööstusvaldusettevõte" },
  "contacts.phone": { EN: "Phone", RU: "Телефон", ET: "Telefon" },
  "contacts.email": { EN: "Email", RU: "Эл. почта", ET: "E-post" },
  "contacts.address": { EN: "Address", RU: "Адрес", ET: "Aadress" },
  "contacts.hours": { EN: "Hours", RU: "Часы работы", ET: "Tööaeg" },
  "contacts.hoursValue": { EN: "24 / 7 · Worldwide", RU: "24 / 7 · Весь мир", ET: "24 / 7 · Üle maailma" },
  "contacts.formTitle": { EN: "Send us your request", RU: "Отправьте нам запрос", ET: "Saada meile oma päring" },
  "contacts.formDesc": { EN: "All fields help us respond faster with the right information.", RU: "Все поля помогают нам быстрее ответить с нужной информацией.", ET: "Kõik väljad aitavad meil kiiremini õige teabega vastata." },
  "contacts.firstName": { EN: "First Name", RU: "Имя", ET: "Eesnimi" },
  "contacts.lastName": { EN: "Last Name", RU: "Фамилия", ET: "Perekonnanimi" },
  "contacts.company": { EN: "Company", RU: "Компания", ET: "Ettevõte" },
  "contacts.emailField": { EN: "Email", RU: "Эл. почта", ET: "E-post" },
  "contacts.phoneField": { EN: "Phone", RU: "Телефон", ET: "Telefon" },
  "contacts.serviceRequired": { EN: "Service Required", RU: "Требуемая услуга", ET: "Vajalik teenus" },
  "contacts.selectService": { EN: "Select a service…", RU: "Выберите услугу…", ET: "Vali teenus…" },
  "contacts.vesselField": { EN: "Vessel Name & Current Port", RU: "Название судна и текущий порт", ET: "Laeva nimi ja praegune sadam" },
  "contacts.detailsLabel": { EN: "Details & Urgency", RU: "Детали и срочность", ET: "Üksikasjad ja kiireloomulisus" },
  "contacts.detailsPlaceholder": { EN: "Type of inspection, vessel type, timing, ETA at port…", RU: "Тип инспекции, тип судна, сроки, ETA в порт…", ET: "Inspekteerimise tüüp, laeva tüüp, ajakava, ETA sadamas…" },
  "contacts.sendRequest": { EN: "Send Request", RU: "Отправить запрос", ET: "Saada päring" },
  "contacts.sending": { EN: "Sending…", RU: "Отправка…", ET: "Saatmine…" },
  "contacts.toastTitle": { EN: "Request received", RU: "Запрос получен", ET: "Päring vastu võetud" },
  "contacts.toastDesc": { EN: "Thank you. Our team will contact you within a few hours.", RU: "Спасибо. Наша команда свяжется с вами в течение нескольких часов.", ET: "Aitäh. Meie meeskond võtab teiega ühendust mõne tunni jooksul." },
  "contacts.service.ndt": { EN: "Non-Destructive Testing (NDT)", RU: "Неразрушающий контроль (НК)", ET: "Mittepurustav kontroll (NDT)" },
  "contacts.service.utm": { EN: "Ultrasonic Thickness Measurement (UTM)", RU: "Ультразвуковая толщинометрия (УЗТ)", ET: "Ultraheli paksuse mõõtmine (UTM)" },
  "contacts.service.steel": { EN: "Steel Renewal Supervision", RU: "Надзор за заменой стали", ET: "Terase uuendamise järelevalve" },
  "contacts.service.class": { EN: "Class Survey Support", RU: "Поддержка классификационных освидетельствований", ET: "Klassifikatsiooniühingu ülevaatuse tugi" },
  "contacts.service.repair": { EN: "Repair Specification", RU: "Ремонтные спецификации", ET: "Remondispetsifikatsioon" },
  "contacts.service.other": { EN: "Other / Multiple", RU: "Другое / Несколько", ET: "Muu / Mitu" },

  // Our Values
  "nav.values": { EN: "Our Values", RU: "Наши ценности", ET: "Meie väärtused" },
  "values.label": { EN: "Our Values", RU: "Наши ценности", ET: "Meie väärtused" },
  "values.heroTitle": { EN: "What we stand for.", RU: "Наши принципы.", ET: "Mille eest me seisame." },
  "values.people.title": { EN: "Focus on People", RU: "Внимание к людям", ET: "Inimeste fookus" },
  "values.people.subtitle": { EN: "Recognition and Respect", RU: "Признание и уважение", ET: "Tunnustus ja austus" },
  "values.people.1": { EN: "We see and appreciate each person", RU: "Мы видим и ценим каждого человека", ET: "Me näeme ja hindame iga inimest" },
  "values.people.2": { EN: "We trust colleagues and partners", RU: "Мы доверяем коллегам и партнёрам", ET: "Me usaldame kolleege ja partnereid" },
  "values.people.3": { EN: "We listen to each other", RU: "Мы слышим и слушаем друг друга", ET: "Me kuulame üksteist" },
  "values.people.4": { EN: "We support each other", RU: "Мы поддерживаем друг друга", ET: "Me toetame üksteist" },
  "values.reliability.title": { EN: "Reliability", RU: "Надёжность", ET: "Usaldusväärsus" },
  "values.reliability.subtitle": { EN: "Responsibility and Competence", RU: "Ответственность и компетентность", ET: "Vastutus ja pädevus" },
  "values.reliability.1": { EN: "We fulfil our commitments", RU: "Мы выполняем свои обязательства", ET: "Me täidame oma kohustusi" },
  "values.reliability.2": { EN: "We are responsible for our actions", RU: "Мы несём ответственность за свои действия", ET: "Me vastutame oma tegude eest" },
  "values.reliability.3": { EN: "We meet expectations", RU: "Мы оправдываем ожидания", ET: "Me täidame ootusi" },
  "values.efficiency.title": { EN: "Efficiency", RU: "Эффективность", ET: "Tõhusus" },
  "values.efficiency.subtitle": { EN: "Spend Minimum – Reach Maximum", RU: "Минимум затрат – максимум результата", ET: "Kuluta minimaalselt – saavuta maksimaalselt" },
  "values.efficiency.1": { EN: "We plan our work", RU: "Мы планируем нашу работу", ET: "Me planeerime oma tööd" },
  "values.efficiency.2": { EN: "We conserve the resources entrusted to us", RU: "Мы бережём доверенные нам ресурсы", ET: "Me hoiame meile usaldatud ressursse" },
  "values.efficiency.3": { EN: "We improve processes", RU: "Мы совершенствуем процессы", ET: "Me parendame protsesse" },
  "values.development.title": { EN: "Development", RU: "Развитие", ET: "Areng" },
  "values.development.subtitle": { EN: "Growth and Progress", RU: "Рост и прогресс", ET: "Kasv ja edasiminek" },
  "values.development.1": { EN: "We contribute to the development of our employees", RU: "Мы способствуем развитию наших сотрудников", ET: "Me panustame oma töötajate arengusse" },
  "values.development.2": { EN: "We are open to finding the best solutions", RU: "Мы открыты к поиску лучших решений", ET: "Me oleme avatud parimate lahenduste leidmisele" },
  "values.development.3": { EN: "We modernize technologies", RU: "Мы модернизируем технологии", ET: "Me moderniseerime tehnoloogiaid" },
  "values.development.4": { EN: "We can change the future", RU: "Мы можем изменить будущее", ET: "Me saame muuta tulevikku" },
  "values.development.5": { EN: "We take care of the environment", RU: "Мы заботимся об окружающей среде", ET: "Me hoolime keskkonnast" },

  // Footer
  "footer.tagline": { EN: "Be Aware. Be Confident. Be Safe. Marine vessel inspection trusted by ship owners worldwide since 1998.", RU: "Осведомлённость. Уверенность. Безопасность. Инспекция морских судов, которой доверяют судовладельцы по всему миру с 1998 года.", ET: "Ole teadlik. Ole kindel. Ole turvaline. Laevade inspekteerimine, mida usaldavad laevaomanikud üle maailma alates 1998. aastast." },
  "footer.pages": { EN: "Pages", RU: "Страницы", ET: "Lehed" },
  "footer.services": { EN: "Services", RU: "Услуги", ET: "Teenused" },
  "footer.contact": { EN: "Contact", RU: "Контакты", ET: "Kontakt" },
  "footer.rights": { EN: "All rights reserved.", RU: "Все права защищены.", ET: "Kõik õigused kaitstud." },
  "footer.motto": { EN: "Be Aware · Be Confident · Be Safe", RU: "Осведомлённость · Уверенность · Безопасность", ET: "Ole teadlik · Ole kindel · Ole turvaline" },
  "footer.service.ndt": { EN: "Non-Destructive Testing (NDT)", RU: "Неразрушающий контроль (НК)", ET: "Mittepurustav kontroll (NDT)" },
  "footer.service.utm": { EN: "Ultrasonic Thickness Measurement", RU: "Ультразвуковая толщинометрия", ET: "Ultraheli paksuse mõõtmine" },
  "footer.service.steel": { EN: "Steel Renewal Supervision", RU: "Надзор за заменой стали", ET: "Terase uuendamise järelevalve" },
  "footer.service.class": { EN: "Class Surveys (IACS)", RU: "Классификационные освидетельствования (МАКО)", ET: "Klassifikatsiooniülevaatused (IACS)" },
  "footer.service.repair": { EN: "Repair Specifications", RU: "Ремонтные спецификации", ET: "Remondispetsifikatsioonid" },

  // BLRT Grupp branding
  "nav.companies": { EN: "Companies", RU: "Компании", ET: "Ettevõtted" },

  // BLRT Home page
  "blrt.badge": { EN: "Industrial Group · Since 1912", RU: "Промышленная группа · С 1912 года", ET: "Tööstusgrupp · Alates 1912" },
  "blrt.heroTitle1": { EN: "Baltic industry,", RU: "Балтийская промышленность,", ET: "Balti tööstus," },
  "blrt.heroTitle2": { EN: "built to endure.", RU: "созданная на века.", ET: "loodud kestma." },
  "blrt.heroDesc": {
    EN: "50+ companies. 6 industrial sectors. Over a century of shipbuilding and maritime engineering across Estonia, Latvia, Lithuania, Finland, Poland, Ukraine and Brazil.",
    RU: "Более 50 компаний. 6 промышленных секторов. Более века инженерного совершенства в Эстонии, Латвии, Литве, Финляндии, Польше, Украине и Бразилии.",
    ET: "50+ ettevõtet. 6 tööstussektorit. Üle sajandi insenerivõimekust Eestis, Lätis, Leedus, Soomes, Poolas, Ukrainas ja Brasiilias.",
  },
  "blrt.exploreCompanies": { EN: "Explore Companies", RU: "Наши компании", ET: "Tutvu ettevõtetega" },
  "blrt.contactUs": { EN: "Contact Us", RU: "Связаться", ET: "Võta ühendust" },
  "blrt.stat.companies": { EN: "Companies", RU: "Компаний", ET: "Ettevõtet" },
  "blrt.stat.countries": { EN: "Countries", RU: "Стран", ET: "Riiki" },
  "blrt.stat.sectors": { EN: "Sectors", RU: "Секторов", ET: "Sektorit" },
  "blrt.stat.founded": { EN: "Founded", RU: "Основана", ET: "Asutatud" },
  "blrt.readMore": { EN: "Read more", RU: "Подробнее", ET: "Loe edasi" },
  "blrt.showLess": { EN: "Show less", RU: "Свернуть", ET: "Peida" },
  "blrt.companiesLabel": { EN: "Our Group", RU: "Наша группа", ET: "Meie grupp" },
  "blrt.companiesTitle": { EN: "50+ companies across 6 sectors", RU: "Более 50 компаний в 6 секторах", ET: "50+ ettevõtet 6 sektoris" },
  "blrt.aboutLabel": { EN: "About BLRT Grupp", RU: "О BLRT Grupp", ET: "BLRT Grupist" },
  "blrt.aboutTitle": { EN: "Over a century of Baltic industrial operations", RU: "Столетие балтийского промышленного лидерства", ET: "Sajand Balti tööstusjuhtimist" },
  "blrt.aboutP1": {
    EN: "BLRT Grupp is one of the largest industrial holding companies in the Baltic region, with roots stretching back to 1912. From shipbuilding and ship repair to marine inspection, engineering and materials, we operate more than 50 companies across Estonia, Latvia, Lithuania, Finland, Poland, Ukraine and Brazil.",
    RU: "BLRT Grupp является одним из крупнейших промышленных холдингов Балтийского региона с историей, уходящей корнями в 1912 год. От судостроения и судоремонта до морской инспекции, инжиниринга и материалов — мы управляем более чем 50 компаниями в Эстонии, Латвии, Литве, Финляндии, Польше, Украине и Бразилии.",
    ET: "BLRT Grupp on üks suurimaid tööstushoiuettevõtteid Balti piirkonnas, mille juured ulatuvad 1912. aastasse. Laevaehitusest ja laevaremondist kuni mereinspektsiooni, inseneeria ja materjalideni — tegutseme enam kui 50 ettevõttega Eestis, Lätis, Leedus, Soomes, Poolas, Ukrainas ja Brasiilias.",
  },
  "blrt.aboutP2": {
    EN: "Our companies share engineering expertise, shipyard infrastructure and a network of maritime specialists across the Baltic Sea region.",
    RU: "Наши компании объединяют инженерный опыт, инфраструктуру верфей и единую цель: строить и поддерживать промышленный хребет региона Балтийского моря.",
    ET: "Meie ettevõtted jagavad insenerivõimekust, laevatehase infrastruktuuri ja ühist eesmärki: ehitada ja hooldada Läänemere piirkonna tööstusliku selgroog.",
  },
  "blrt.learnMore": { EN: "Learn More", RU: "Подробнее", ET: "Loe rohkem" },

  // BLRT About page
  "blrt.about.label": { EN: "About BLRT Grupp", RU: "О BLRT Grupp", ET: "BLRT Grupist" },
  "blrt.about.heroTitle": { EN: "Building the Baltic. Since 1912.", RU: "Строим Балтику. С 1912 года.", ET: "Ehitame Baltikumi. Alates 1912." },
  "blrt.about.ourStory": { EN: "Our Story", RU: "Наша история", ET: "Meie lugu" },
  "blrt.about.storyP1": {
    EN: "BLRT Grupp traces its origins to 12 June 1912, when the Russo-Baltic Shipbuilding Yard was founded on the Kopli peninsula in Tallinn — then one of the largest industrial facilities in the Russian Empire. Through a century of transformation, spanning two world wars, Soviet industrialisation, Estonian independence and Baltic integration into the European Union, the group evolved into the diversified industrial holding it is today. The name BLRT Grupp was adopted in 2001.",
    RU: "История BLRT Grupp восходит к 12 июня 1912 года, когда на полуострове Копли в Таллинне был основан Русско-Балтийский судостроительный завод — одно из крупнейших промышленных предприятий Российской империи. Пережив век преобразований — две мировые войны, советскую индустриализацию, восстановление независимости Эстонии и интеграцию Балтии в Европейский союз, — группа превратилась в диверсифицированный промышленный холдинг. Название BLRT Grupp было принято в 2001 году.",
    ET: "BLRT Grupi ajalugu ulatub 12. juunini 1912, mil Tallinna Kopli poolsaarele asutati Vene-Balti laevaehitustehas — tol ajal üks suurimaid tööstusettevõtteid Vene impeeriumis. Läbi sajandi muutuste — kahe maailmasõja, Nõukogude industrialiseerimise, Eesti iseseisvuse taastamise ja Balti riikide Euroopa Liitu integreerumise — arenes grupp tänapäeva mitmekesiseks tööstusvaldusettevõtteks. Nimi BLRT Grupp võeti kasutusele 2001. aastal.",
  },
  "blrt.about.storyP2": {
    EN: "Today, BLRT Grupp operates more than 50 companies across Estonia, Latvia, Lithuania, Finland, Poland, Ukraine and Brazil, employing over 4,000 people. Our core competencies remain maritime: ship repair, shipbuilding and marine services. The group has grown to encompass engineering, materials, logistics, industrial gas production, stevedoring and offshore fabrication.",
    RU: "Сегодня BLRT Grupp управляет более чем 50 компаниями в Эстонии, Латвии, Литве, Финляндии, Польше, Украине и Бразилии, насчитывая свыше 4 000 сотрудников. Наши основные компетенции по-прежнему связаны с морской отраслью — судоремонтом, судостроением и морскими услугами, — однако группа расширилась до инжиниринга, материалов, логистики, производства промышленных газов, стивидорных операций и офшорного производства.",
    ET: "Täna tegutseb BLRT Grupp rohkem kui 50 ettevõttega Eestis, Lätis, Leedus, Soomes, Poolas, Ukrainas ja Brasiilias, andes tööd üle 4 000 inimesele. Meie põhipädevused on endiselt merinduses — laevaremondis, laevaehituses ja merendusteenustes — kuid grupp on laienenud inseneeriasse, materjalidesse, logistikasse, tööstuslike gaaside tootmisse, sadamateenustesse ja offshore-konstruktsioonide valmistamisse.",
  },
  "blrt.about.storyP3": {
    EN: "Headquartered at Kopli, Tallinn (the historic heart of Estonian maritime industry), BLRT Grupp continues to grow through strategic partnerships and organic development. Commitment to Baltic industrial tradition and engineering quality unites every company in the group.",
    RU: "Базируясь в Копли, Таллинне — историческом сердце эстонской морской промышленности — BLRT Grupp продолжает расти благодаря стратегическим партнёрствам и органическому развитию. Наша приверженность балтийской промышленной традиции и инженерному качеству объединяет все компании группы.",
    ET: "Koplis, Tallinnas asuv BLRT Grupp — Eesti merinduse ajalooline süda — jätkab kasvu strateegiliste partnerluste ja orgaanilise arengu kaudu. Meie pühendumus Balti tööstustraditsioonile ja insenerikvaliteedile ühendab kõiki grupi ettevõtteid.",
  },
  "blrt.about.stat.companies": { EN: "Companies", RU: "Компаний", ET: "Ettevõtet" },
  "blrt.about.stat.countries": { EN: "Countries", RU: "Стран", ET: "Riiki" },
  "blrt.about.stat.founded": { EN: "Est.", RU: "Основана", ET: "Asutatud" },
  "blrt.about.stat.sectors": { EN: "Sectors", RU: "Секторов", ET: "Sektorit" },
  "blrt.about.ctaTitle": { EN: "Need a BLRT Grupp company for your project?", RU: "Хотите сотрудничать с BLRT Grupp?", ET: "Huvitatud koostööst BLRT Grupiga?" },
  "blrt.about.ctaDesc": { EN: "Browse our companies or reach out to our head office directly.", RU: "Ознакомьтесь с нашими компаниями или свяжитесь с головным офисом напрямую.", ET: "Sirvi meie ettevõtteid või võta otse ühendust meie peakontoriga." },
  "blrt.about.ctaBrowse": { EN: "Browse Companies", RU: "Смотреть компании", ET: "Vaata ettevõtteid" },

  // Footer (BLRT rebrand)
  "footer.blrtTagline": {
    EN: "One industrial group. 50+ companies. A century of Baltic maritime and engineering tradition.",
    RU: "Одна промышленная группа. Более 50 компаний. Столетие балтийской морской и инженерной традиции.",
    ET: "Üks tööstusgrupp. 50+ ettevõtet. Sajand Balti merenduse ja inseneritraditsiooni.",
  },
  "footer.companies": { EN: "Companies", RU: "Компании", ET: "Ettevõtted" },
  "footer.blrtMotto": { EN: "Baltic Industry · Built to Endure", RU: "Балтийская промышленность · Создана на века", ET: "Balti tööstus · Loodud kestma" },

  // Navigation — new pages
  "nav.news":           { EN: "News",           RU: "Новости",             ET: "Uudised"           },
  "nav.careers":        { EN: "Careers",         RU: "Карьера",             ET: "Karjäär"           },
  "nav.projects":       { EN: "Projects",        RU: "Проекты",             ET: "Projektid"         },
  "nav.sustainability": { EN: "Sustainability",  RU: "Устойчивое развитие", ET: "Jätkusuutlikkus"  },

  // News page
  "news.hero.title":      { EN: "News & Press",          RU: "Новости и пресса",          ET: "Uudised ja press"         },
  "news.hero.sub":        { EN: "Latest updates from BLRT Grupp and its companies.", RU: "Последние обновления от BLRT Grupp и её компаний.", ET: "Viimased uudised BLRT Grupist ja selle ettevõtetest." },
  "news.filter.all":      { EN: "All",                   RU: "Все",                        ET: "Kõik"                     },
  "news.filter.press":    { EN: "Press Release",         RU: "Пресс-релиз",               ET: "Pressiteade"              },
  "news.filter.company":  { EN: "Company News",          RU: "Новости компании",           ET: "Ettevõtte uudis"          },
  "news.filter.project":  { EN: "Project",               RU: "Проект",                     ET: "Projekt"                  },
  "news.readmore":        { EN: "Read more",             RU: "Подробнее",                  ET: "Loe edasi"                },
  "news.empty":           { EN: "No news in this category yet.", RU: "В этой категории пока нет новостей.", ET: "Selles kategoorias pole veel uudiseid." },

  // Projects page
  "projects.hero.title":   { EN: "Projects",             RU: "Проекты",                   ET: "Projektid"                },
  "projects.hero.sub":     { EN: "Selected works across our six sectors.", RU: "Избранные работы в наших шести секторах.", ET: "Valitud tööd meie kuues sektoris." },
  "projects.featured":     { EN: "Featured Project",     RU: "Избранный проект",           ET: "Esimene projekt"          },
  "projects.filter.all":   { EN: "All Sectors",          RU: "Все секторы",                ET: "Kõik sektorid"            },
  "projects.viewall":      { EN: "Show more projects",   RU: "Показать больше проектов",   ET: "Kuva rohkem projekte"     },
  "projects.empty":        { EN: "No projects in this sector yet.", RU: "В этом секторе пока нет проектов.", ET: "Selles sektoris pole veel projekte." },

  // Careers page
  "careers.hero.title":          { EN: "Careers at BLRT Grupp", RU: "Карьера в BLRT Grupp", ET: "Karjäär BLRT Grupis"         },
  "careers.hero.sub":            { EN: "Join one of the Baltic region's largest industrial groups.", RU: "Присоединяйтесь к одному из крупнейших промышленных конгломератов Балтийского региона.", ET: "Liitu ühe Baltikumi suurima tööstuskontserniga." },
  "careers.why.title":           { EN: "Why work with us?",     RU: "Почему мы?",             ET: "Miks töötada meiega?"        },
  "careers.why.growth":          { EN: "Growth & Development",  RU: "Рост и развитие",        ET: "Kasv ja areng"               },
  "careers.why.growth.desc":     { EN: "Structured career paths, funded training programmes and cross-company development opportunities across 50+ companies.", RU: "Структурированные карьерные пути, финансируемые программы обучения и возможности развития в более чем 50 компаниях.", ET: "Struktureeritud karjääriteed, rahastatavad koolitusprogrammid ja ristettevõtete arenemisvõimalused 50+ ettevõttes." },
  "careers.why.stability":       { EN: "Stability & Scale",     RU: "Стабильность и масштаб", ET: "Stabiilsus ja mastaap"       },
  "careers.why.stability.desc":  { EN: "Over 110 years of continuous industrial operations. A group built to endure economic cycles, with deep roots in the Baltic region.", RU: "Более 110 лет непрерывных промышленных операций. Группа, созданная для устойчивости к экономическим циклам, с глубокими корнями в Балтийском регионе.", ET: "Üle 110 aasta pidevat tööstustegevust. Grupp, mis on loodud taluma majandustsükleid, sügavate juurtega Baltikumi piirkonnas." },
  "careers.why.innovation":      { EN: "Innovation & Impact",   RU: "Инновации и результат",  ET: "Innovatsioon ja mõju"        },
  "careers.why.innovation.desc": { EN: "Work on real projects with global reach — from vessel conversions to offshore energy supply to bridge steel fabrication.", RU: "Работайте над реальными проектами с глобальным охватом — от конверсии судов до снабжения морской энергией и производства мостовой стали.", ET: "Töötage reaalsetel projektidel ülemaailmse ulatusega — alates laevade konversioonist kuni offshore-energiatarneteni ja sillaosade tootmiseni." },
  "careers.positions":           { EN: "Open Positions",        RU: "Открытые вакансии",      ET: "Avatud ametikohad"           },
  "careers.filter.all":          { EN: "All Companies",         RU: "Все компании",            ET: "Kõik ettevõtted"             },
  "careers.empty":               { EN: "No open positions at this company right now.", RU: "В данный момент в этой компании нет открытых вакансий.", ET: "Selles ettevõttes pole praegu avatud ametikohti." },
  "careers.apply":               { EN: "Apply by email",        RU: "Подать заявку по e-mail", ET: "Kandideeri e-posti teel"     },
  "careers.fallback.title":      { EN: "Don't see your role?",  RU: "Не нашли подходящую вакансию?", ET: "Ei leia sobivat ametikohta?" },
  "careers.fallback.desc":       { EN: "We're always interested in talented people. Send your CV and motivation letter to", RU: "Мы всегда заинтересованы в талантливых людях. Отправьте резюме и мотивационное письмо на", ET: "Oleme alati huvitatud andekastest inimestest. Saatke oma CV ja motivatsioonikiri aadressile" },

  // Sustainability page
  "sustainability.hero.title":        { EN: "Green Deal",              RU: "Зелёная сделка",          ET: "Rohelepe"                     },
  "sustainability.hero.sub":          { EN: "How BLRT Grupp yards lead the way in green ship repair and sustainable maritime operations.", RU: "Как верфи BLRT Grupp задают стандарты экологичного судоремонта и устойчивых морских операций.", ET: "Kuidas BLRT Grupi dokid juhivad teed rohelises laevaremondis ja säästvates mereoperatsioonides." },
  "sustainability.pillar.environment":{ EN: "Zero Emissions",          RU: "Нулевые выбросы",         ET: "Nullheitmed"                  },
  "sustainability.pillar.people":     { EN: "Wind Power",              RU: "Ветровая энергия",        ET: "Tuuleenergia"                 },
  "sustainability.pillar.community":  { EN: "Circular Economy",        RU: "Циклическая экономика",   ET: "Ringmajandus"                 },
  "sustainability.env.title":         { EN: "Eliminating emissions at the source", RU: "Устранение выбросов в источнике", ET: "Heitmete kõrvaldamine allikas" },
  "sustainability.env.desc":          { EN: "Air-cleaning systems in shot blasting chambers eliminate solid particle emissions. Dust-free Blastrac grit blasting achieves Sa3 surface quality. Our 2,150 m² enclosed sheds enable weather-protected vessel treatment while automated weather monitoring prevents atmospheric pollution.", RU: "Системы очистки воздуха в камерах дробеструйной обработки устраняют выбросы твёрдых частиц. Пылесвязывающая дробеструйная обработка Blastrac обеспечивает качество поверхности Sa3. Наши крытые ангары площадью 2 150 м² позволяют обрабатывать суда под укрытием, а автоматический мониторинг погоды предотвращает загрязнение атмосферы.", ET: "Õhupuhastussüsteemid laskekambrites kõrvaldavad tahkete osakeste heited. Blastrac tolmuvaba liivapritsimisega saavutatakse Sa3 pinnakvaliteet. Meie 2 150 m² suletud angaarid võimaldavad katuse all laevade töötlemist, samas kui automaatne ilmajälgimine hoiab ära atmosfääri saastumise." },
  "sustainability.people.title":      { EN: "Leading green propulsion technology", RU: "Лидерство в зелёных технологиях движения", ET: "Roheliste jõuseadmete tehnoloogia eestvedamine" },
  "sustainability.people.desc":       { EN: "Partner with Norsepower to test rotor sail wind propulsion using the Magnus Effect. Installed the world's first rotor sail on the Viking Grace ferry. We offer DACS air lubrication, graphene and silicone hull coatings, solar panels and hybrid battery systems to cut vessel emissions and fuel costs.", RU: "Сотрудничаем с Norsepower по испытанию роторных парусов на эффекте Магнуса. Установили первый в мире роторный парус на пароме Viking Grace. Предлагаем системы воздушной смазки DACS, графеновые и силиконовые покрытия корпуса, солнечные панели и гибридные аккумуляторные системы.", ET: "Teeme koostööd Norsepower'iga rootorsõugi tuulejõu tehnoloogia testimiseks (Magnuse efekt). Paigaldasime maailma esimese rootorsõugi Viking Grace parvlaevale. Pakume DACS õhumäärimissüsteeme, grafeeni- ja silikoonikatted kere jaoks, päikesepaneele ja hübriid-akusüsteeme." },
  "sustainability.community.title":   { EN: "Responsible resource management", RU: "Ответственное управление ресурсами", ET: "Vastutustundlik ressursside haldamine" },
  "sustainability.community.desc":    { EN: "Wash water is collected and reused. New-generation containment booms and emergency spill stations protect waterways around all docks. We operate the MC4000 autonomous water surface cleaning robot — the first of its kind integrated into global shipyard operations — and segregate metal, paper, plastic and hazardous waste per EU regulations.", RU: "Промывочная вода собирается и повторно используется. Боновые заграждения нового поколения и аварийные посты защищают водоёмы вокруг всех доков. Мы используем автономного робота-уборщика MC4000 — первого в мире, интегрированного в работу верфи, — и сортируем отходы согласно нормам ЕС.", ET: "Pesuvesi kogutakse ja taaskasutatakse. Uusima põlvkonna tõkkeujukid ja hädaabiposid kaitsevad kõigi dokide ümbruses asuvaid veekogusid. Kasutame MC4000 autonoomset veepuhastusvahendina — maailmas esimest oma tüüpi, mis on integreeritud laevatehasesse — ning sorteerime jäätmed vastavalt EL-i eeskirjadele." },
  "sustainability.certs.title":       { EN: "Standards & Certifications", RU: "Стандарты и сертификаты", ET: "Standardid ja sertifikaadid" },
  "sustainability.report.title":      { EN: "Green Solutions for Shipowners", RU: "Зелёные решения для судовладельцев", ET: "Rohelised lahendused laevaomanikele" },
  "sustainability.report.desc":       { EN: "From exhaust gas scrubbers and ballast water treatment to shore power connections and wind-assisted propulsion — we install the full range of environmental upgrades your vessels need to meet today's regulations and tomorrow's standards.", RU: "От скрубберов для очистки выхлопных газов и систем обработки балластной воды до береговых источников питания и систем ветровой тяги — мы устанавливаем весь спектр экологических технологий, необходимых вашим судам.", ET: "Heitgaaside puhastussüsteemidest ja ballastvee töötlemisest kuni kaldaelektri ühenduste ja tuulejõuga liikumisabisüsteemideni — paigaldame kogu keskkonnatehnoloogiate valiku, mida teie laevad vajavad täna kehtivate eeskirjade täitmiseks." },

  // Sustainability — yard initiatives
  "sustainability.deal.label":         { EN: "Green Deal in Ship Repair",         RU: "Зелёная сделка в судоремонте",            ET: "Rohelepe laevaremondis"                    },
  "sustainability.deal.title":         { EN: "Sustainable operations at every stage", RU: "Устойчивые операции на каждом этапе",  ET: "Säästvad operatsioonid igal etapil"        },
  "sustainability.deal.sub":           { EN: "Environmental concerns are now integral to everything we do. Across blasting, coating, energy use and waste handling, BLRT Grupp yards have invested systematically in reducing their environmental footprint.", RU: "Забота об окружающей среде стала неотъемлемой частью всего, что мы делаем. Верфи BLRT Grupp последовательно инвестируют в снижение своего воздействия на всех этапах.", ET: "Keskkonnaalased küsimused on lahutamatu osa kõigest, mida teeme. BLRT Grupi dokid on süstemaatiliselt investeerinud oma jalajälje vähendamisse kõigil etappidel." },
  "sustainability.yard.blasting.title":{ EN: "Emissions-Free Blasting",           RU: "Дробеструйная обработка без выбросов",    ET: "Heiteteta liivapritsimise"                 },
  "sustainability.yard.blasting.desc": { EN: "Shot blasting chambers with air-cleaning systems eliminate solid particle emissions entirely. Blastrac 900 VMB dust-free grit blasting achieves Sa3 surface quality. Hammelmann Dock Boy water jetting with integrated vacuum technology provides an additional zero-dust surface preparation method.", RU: "Камеры дробеструйной обработки с системами очистки воздуха полностью исключают выбросы твёрдых частиц. Пылесвязывающая обработка Blastrac 900 VMB обеспечивает качество поверхности Sa3. Водоструйная обработка Hammelmann Dock Boy предлагает дополнительный метод без пыли.", ET: "Liivapritsimiskambrid õhupuhastussüsteemidega kõrvaldavad täielikult tahkete osakeste heited. Blastrac 900 VMB tolmuvaba liivapritsimisega saavutatakse Sa3 pinnakvaliteet. Hammelmann Dock Boy veejoaseadmed pakuvad lisaks tolmuvaba ettevalmistusmeetodit." },
  "sustainability.yard.sheds.title":   { EN: "All-Weather Treatment Sheds",       RU: "Крытые ангары для обработки",            ET: "Ilmastikukindlad töötlemisangaarid"        },
  "sustainability.yard.sheds.desc":    { EN: "Our 2,150 m² enclosed sheds enable full vessel surface preparation and coating regardless of weather. 9–12 hatch covers for 95 m vessels (up to 5 for 150 m vessels) are processed simultaneously. Automated weather monitoring halts operations when conditions risk atmospheric pollution.", RU: "Крытые ангары площадью 2 150 м² обеспечивают полную подготовку поверхности и нанесение покрытий независимо от погоды. Одновременно обрабатываются 9–12 крышек люков для судов 95 м (до 5 для судов 150 м). Автоматизированный мониторинг погоды приостанавливает работы при угрозе загрязнения.", ET: "Meie 2 150 m² suletud angaarid võimaldavad täielikku laeva pinnaeettevalmistust ja katmist sõltumata ilmastikust. Samaaegselt töödeldakse 9–12 luugikaant 95 m laevadele (kuni 5 korraga 150 m laevadele). Automaatne ilmajälgimine peatab töö, kui tingimused kujutavad atmosfäärile ohtu." },
  "sustainability.yard.energy.title":  { EN: "Energy Efficiency",                 RU: "Энергоэффективность",                     ET: "Energiatõhusus"                            },
  "sustainability.yard.energy.desc":   { EN: "Diesel forklifts have been replaced with gas and battery-powered alternatives across all yards. Shore power connections are available for every docked vessel, eliminating the need to run onboard generators in port. Energy-efficient lighting, heating and ventilation systems are installed throughout all facilities.", RU: "Дизельные погрузчики на всех верфях заменены газовыми и аккумуляторными альтернативами. Береговое электроснабжение доступно для каждого судна, исключая работу судовых генераторов в порту. На всех объектах установлены энергоэффективные системы освещения, отопления и вентиляции.", ET: "Diiselkärud kõigis dokides on asendatud gaasi- ja akupõhiste alternatiividega. Kaldaelektri ühendused on saadaval iga dokeeritud laeva jaoks, kõrvaldades vajaduse käivitada pardageneraatoreid sadamas. Kõikidesse rajatistesse on paigaldatud energiatõhusad süsteemid." },
  "sustainability.yard.water.title":   { EN: "Water Conservation",                RU: "Бережное использование воды",             ET: "Veesääst"                                  },
  "sustainability.yard.water.desc":    { EN: "All washing water is collected and reused in yard operations. New-generation containment booms and emergency spill stations protect waterways at every berth. The MC4000 — the world's first autonomous water surface cleaning robot integrated into shipyard operations — continuously removes contaminants from dock water.", RU: "Вся промывочная вода собирается и повторно используется. Боновые заграждения нового поколения и аварийные посты защищают водоёмы у каждого причала. MC4000 — первый в мире автономный робот-уборщик, интегрированный в работу верфи, — непрерывно очищает воду дока.", ET: "Kogu pesuvesi kogutakse ja taaskasutatakse dokioperatsioonides. Uusima põlvkonna tõkkeujukid ja hädaabiposid kaitsevad veekogusid iga kai juures. MC4000 — maailma esimene autonoomne veepuhastusrobot laevatehastes — eemaldab pidevalt saasteaineid dokiveest." },
  "sustainability.yard.waste.title":   { EN: "Waste & Materials",                 RU: "Отходы и материалы",                     ET: "Jäätmed ja materjalid"                     },
  "sustainability.yard.waste.desc":    { EN: "Metal, paper, plastic and hazardous waste is segregated and disposed of in full compliance with EU regulations. Recycling agreements with certified local facilities cover steel, aluminium, copper and plastics. All coatings comply with IMO and EU requirements, with preference for low-emission and recyclable materials.", RU: "Металлические, бумажные, пластиковые и опасные отходы сортируются и утилизируются согласно нормам ЕС. Соглашения с сертифицированными местными предприятиями охватывают сталь, алюминий, медь и пластик. Все покрытия соответствуют требованиям ИМО и ЕС.", ET: "Metall-, paber-, plast- ja ohtlikud jäätmed sorteeritakse ja kõrvaldatakse täielikus vastavuses EL-i eeskirjadega. Ringlussevõttu käsitlevad lepingud hõlmavad terast, alumiiniumi, vaske ja plastikut. Kõik katted vastavad IMO ja EL-i nõuetele." },
  "sustainability.yard.wind.title":    { EN: "Wind Propulsion Research",          RU: "Исследование ветровой тяги",              ET: "Tuulejõu uuringud"                         },
  "sustainability.yard.wind.desc":     { EN: "Partnering with Norsepower at our Naantali facility to test rotor sail wind propulsion. Rotor sails use the Magnus Effect — spinning cylinders that generate lift as wind passes over them — to supplement engine power and reduce fuel consumption in commercial shipping.", RU: "Сотрудничество с Norsepower на предприятии в Наантали для испытания роторных парусов. Роторные паруса используют эффект Магнуса — вращающиеся цилиндры, создающие подъёмную силу, — для снижения расхода топлива в коммерческом судоходстве.", ET: "Koostöö Norsepower'iga Naantali rajatises rootorsõugi tuulejõu testimiseks. Rootorsõugid kasutavad Magnuse efekti — pöörlevaid silindrid, mis tekitavad tõstejõudu — kütusekulude vähendamiseks kaubanduslaevanduses." },

  // Sustainability — shipowner solutions
  "sustainability.solutions.label":    { EN: "For Shipowners",                    RU: "Для судовладельцев",                      ET: "Laevaomanikele"                            },
  "sustainability.solutions.title":    { EN: "Green solutions for your fleet",    RU: "Зелёные решения для вашего флота",        ET: "Rohelised lahendused teie laevastikule"    },
  "sustainability.solutions.sub":      { EN: "Beyond our own yard practices, BLRT Grupp installs a full range of environmental technologies — helping shipowners reduce operating costs, meet international regulations and strengthen sustainability credentials.", RU: "Помимо собственных практик верфи, BLRT Grupp устанавливает полный спектр экологических технологий, помогая судовладельцам снижать операционные расходы и соответствовать международным нормам.", ET: "Lisaks oma doki tavadele paigaldab BLRT Grupp kogu hulga keskkonnatehnoloogiaid, aidates laevaomanikel vähendada tegevuskulusid ja täita rahvusvahelisi eeskirju." },
  "sustainability.sol.scrubber.title": { EN: "Exhaust Gas Scrubbers",            RU: "Скрубберы для очистки газов",             ET: "Heitgaaside puhastussüsteemid"             },
  "sustainability.sol.scrubber.desc":  { EN: "Installation and integration of exhaust gas cleaning systems across vessel types. Reduces SOx emissions to meet IMO 2020 sulphur cap requirements, improves air quality and delivers long-term fuel cost savings.", RU: "Установка и интеграция систем очистки выхлопных газов для различных типов судов. Снижает выбросы SOx для соответствия требованиям ИМО 2020, улучшает качество воздуха и обеспечивает долгосрочную экономию.", ET: "Heitgaaside puhastussüsteemide paigaldamine erinevat tüüpi laevadele. Vähendab SOx-heitmeid IMO 2020 nõuete täitmiseks, parandab õhukvaliteeti ja tagab pikaajalise kütusekokkuhoiu." },
  "sustainability.sol.shore.title":    { EN: "Shore Power Connection",           RU: "Береговое электроснабжение",              ET: "Kaldaelektri ühendus"                      },
  "sustainability.sol.shore.desc":     { EN: "Cold ironing connects docked vessels to the onshore electrical grid, eliminating the need to run fuel-burning engines in port. Reduces air and noise pollution, cuts engine operating hours and ensures full regulatory compliance during port stays.", RU: "Береговое электроснабжение подключает суда к наземной электросети, исключая работу двигателей в порту. Снижает загрязнение воздуха и шум, сокращает наработку двигателей.", ET: "Kaldaelektri ühendus ühendab dokeeritud laevad kaldaelektrivõrguga, kõrvaldades vajaduse käivitada kütusel töötavaid mootorid sadamas. Vähendab õhu- ja mürasaastet ning kärpib mootori tööaega." },
  "sustainability.sol.bwts.title":     { EN: "Ballast Water Treatment",          RU: "Очистка балластных вод",                  ET: "Ballastvee töötlemine"                     },
  "sustainability.sol.bwts.desc":      { EN: "Ballast Water Treatment Systems (BWTS) remove or neutralise aquatic organisms before discharge, preventing invasive species from spreading between ocean regions. Ensures compliance with the IMO Ballast Water Management Convention.", RU: "Системы очистки балластных вод удаляют или нейтрализуют водные организмы перед сбросом, предотвращая распространение инвазивных видов. Обеспечивает соответствие Конвенции ИМО об управлении балластными водами.", ET: "Ballastvee töötlemissüsteemid eemaldavad või neutraliseerivad veeorganisme enne väljajuhtimist, takistades invasiivsete liikide levimist. Tagab vastavuse IMO konventsioonile." },
  "sustainability.sol.rotor.title":    { EN: "Wind-Assisted Propulsion",         RU: "Ветровая тяга",                           ET: "Tuuleabiga propulsioon"                     },
  "sustainability.sol.rotor.desc":     { EN: "Rotor sail installations use the Magnus Effect to generate propulsive force from wind, cutting fuel consumption and emissions. BLRT yards installed the world's first rotor sail on the Viking Grace passenger ferry — a proven milestone in commercial wind propulsion.", RU: "Роторные паруса используют эффект Магнуса для создания движущей силы от ветра, снижая расход топлива и выбросы. Верфи BLRT установили первый в мире роторный парус на паром Viking Grace — подтверждённый рубеж в коммерческой ветровой тяге.", ET: "Rootorsõugi paigaldised kasutavad Magnuse efekti tuulest tõukejõu saamiseks, vähendades kütusekulusid ja heiteid. BLRT dokid paigaldasid maailma esimese rootorsõugi Viking Grace parvlaevale." },
  "sustainability.sol.decarb.title":   { EN: "Decarbonization Package",          RU: "Пакет декарбонизации",                    ET: "Dekarboniseerimispakett"                   },
  "sustainability.sol.decarb.desc":    { EN: "A full suite of technologies to cut a vessel's carbon footprint: DACS air lubrication systems, graphene-based and silicone hull coatings, energy-saving propeller coatings, solar panel installations, hybrid-ready battery systems and optimised propellers with integrated power management.", RU: "Полный набор технологий для снижения углеродного следа: системы воздушной смазки DACS, графеновые и силиконовые покрытия корпуса, покрытия гребных винтов, солнечные панели, гибридные аккумуляторные системы и оптимизированные гребные винты.", ET: "Täielik tehnoloogliate komplekt laeva süsiniku jalajälje vähendamiseks: DACS õhumäärimissüsteemid, grafeenipõhised ja silikoonikatte kere jaoks, energiasäästlikud propellerikatted, päikesepaneelid, hübriidvalmis akusüsteemid ja optimeeritud propellerid." },

  // Home page — new sections
  "home.news.title":    { EN: "Latest News",         RU: "Последние новости",    ET: "Viimased uudised"     },
  "home.news.viewall":  { EN: "View all news",       RU: "Все новости",          ET: "Kõik uudised"         },
  "home.projects.title":{ EN: "Featured Projects",   RU: "Избранные проекты",    ET: "Esindusprojektid"     },
  "home.projects.viewall":{ EN: "See all projects",  RU: "Все проекты",          ET: "Kõik projektid"       },
  "home.careers.title": { EN: "Join BLRT Grupp",     RU: "Присоединяйтесь к BLRT Grupp", ET: "Liitu BLRT Grupiga" },
  "home.careers.sub":   { EN: "We are always looking for talented engineers, technicians and business professionals to grow with us.", RU: "Мы всегда ищем талантливых инженеров, техников и бизнес-профессионалов для совместного роста.", ET: "Otsime alati andekaid insenere, tehnikuid ja äriprofessionaale, kes kasvaksid koos meiega." },
  "home.careers.cta":   { EN: "View Open Positions", RU: "Открытые вакансии",    ET: "Vaata ametikohti"     },

  // About page — new section
  "about.certs.title":  { EN: "Standards & Certifications", RU: "Стандарты и сертификаты", ET: "Standardid ja sertifikaadid" },

  // Business page — new sections
  "business.projects.title": { EN: "Projects",        RU: "Проекты",              ET: "Projektid"            },
  "business.certs.title":    { EN: "Certifications",  RU: "Сертификаты",          ET: "Sertifikaadid"        },
  "business.techdata.title": { EN: "Technical Data",  RU: "Технические данные",   ET: "Tehnilised andmed"    },
  "business.products.title": { EN: "Products",        RU: "Продукты",             ET: "Tooted"               },

  // Contacts — map
  "contacts.map.title":      { EN: "Our Location",    RU: "Наше расположение",    ET: "Meie asukoht"         },

  // Home — sustainability teaser
  "home.sustain.label":      { EN: "Sustainability",  RU: "Устойчивое развитие",  ET: "Jätkusuutlikkus"      },
  "home.sustain.title":      { EN: "Green ship repair, cleaner seas", RU: "Экологичный судоремонт — чистые моря", ET: "Roheline laevaremont, puhtamad mered" },
  "home.sustain.desc":       { EN: "BLRT Grupp installed the world's first rotor sail on a passenger vessel and leads Baltic maritime decarbonisation — from zero-discharge dock operations to a full suite of green technologies for your fleet.", RU: "BLRT Grupp установила первый в мире роторный парус на пассажирском судне и возглавляет декарбонизацию балтийского судоходства — от доков с нулевым сбросом до полного спектра зелёных технологий для вашего флота.", ET: "BLRT Grupp paigaldas maailma esimese rootorsõugi reisiparvlaevale ja juhib Balti merenduse dekarboniseerimist — nullheitmetega dokioperatsioonidest täieliku roheliste tehnoloogiate valikuni teie laevastikule." },
  "home.sustain.cta":        { EN: "Our sustainability approach", RU: "Наш подход к устойчивому развитию", ET: "Meie jätkusuutlikkuse lähenemine" },
} as const;

export type TranslationKey = keyof typeof translations;

export default translations;
