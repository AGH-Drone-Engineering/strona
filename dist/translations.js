const translations = {
  pl: {
    // Meta / Title
    "meta.description.index":
      "AGH Drone Engineering - Studenckie Koło Naukowe AGH UST. Budujemy drony automatyczne: autonomia z kontrolą operatora.",
    "meta.description.about": "O nas - AGH Drone Engineering",
    "meta.description.projects": "Projekty i Konstrukcje - AGH Drone Engineering",
    "title.index": "AGH Drone Engineering",
    "title.about": "O nas - AGH Drone Engineering",
    "title.projects": "Projekty - AGH Drone Engineering",

    // Nav
    "nav.home": "Strona główna",
    "nav.projects": "Projekty",
    "nav.about": "O nas",
    "nav.wiki": "Baza wiedzy (Dla członków)",
    "nav.join": "Kontakt",

    // Hero
    "hero.badge": "STUDENCKIE KOŁO NAUKOWE AGH UST",
    "hero.title.1": "AGH Drone",
    "hero.title.2": "Engineering",
    "hero.subtitle":
      "Budujemy drony automatyczne: autonomia z kontrolą operatora. Realizujemy projekty badawcze i startujemy w zawodach robotyki powietrznej na całym świecie.",
    "hero.cta": "Zobacz nasze projekty",
    "hero.vcard": "Dodaj do kontaktów",

    // Stats bar
    "stats.grants.label": "Pozyskanych grantów (MNiSW, IDUB, ORLEN)",
    "stats.awards.label": "Nagrody na zawodach w Polsce i na świecie",
    "stats.payload.label": "Udźwigu drona załogowego TSO",
    "stats.rpm.label": "Obr./min na stanowisku odrzutowym GTM160",

    // Sectors
    "sectors.heading": "Nasza Działalność",
    "sectors.autonomy.title": "Autonomia i Roje Dronów",
    "sectors.autonomy.desc":
      "Rozpoznawanie obrazu (YOLO, AprilTag, Optical Flow), obliczenia na pokładzie (Raspberry Pi CM5), komunikacja LoRa w roju oraz kooperacja wielu jednostek.",
    "sectors.hardware.title": "Konstrukcje i Własne PCB",
    "sectors.hardware.desc":
      "Od oktokopterów X8, omnikopterów 6DoF, skrzydeł VTOL i dronów wodnych po autorską płytkę CM5 Drone Board oraz stanowisko silników odrzutowych.",
    "sectors.science.title": "Nauka, Granty i Warsztaty",
    "sectors.science.desc":
      "Badania w tunelach aerodynamicznych, publikacje naukowe, konferencje międzynarodowe (m.in. SGEM Vienna, ZEA) oraz warsztaty dla studentów.",

    // Featured projects on index
    "home.projects.heading": "Nasze Konstrukcje i Projekty",
    "home.projects.subheading":
      "Od ciężkich oktokopterów X8 i autonomicznych rojów 5\" po napęd odrzutowy, omnikoptery i drony załogowe.",
    "home.projects.all": "Zobacz wszystkie projekty i specyfikacje",

    // Timeline / Awards
    "timeline.heading": "Zawody i Wyniki (2018–2026)",
    "timeline.subheading":
      "Regularnie stajemy na podium krajowych i międzynarodowych zawodów bezzałogowych oraz konferencji naukowych.",

    // Member zone banner
    "members.badge": "STREFA CZŁONKA KOŁA",
    "members.title": "Baza wiedzy i zadania AGH Drone Engineering",
    "members.desc":
      "Należysz do koła? W wewnętrznej bazie wiedzy znajdziesz instrukcje budowy drona krok po kroku (ArduPilot, MAVLink, ROS 2, Wizja, PCB, Mechanika) oraz panel ze swoimi taskami z GitHuba.",
    "members.cta": "Przejdź do Bazy Wiedzy (aghdrone.pages.dev)",

    // Projects page
    "projects.hero.title.1": "Nasze",
    "projects.hero.title.2": "Projekty i Konstrukcje",
    "projects.hero.subtitle":
      "Przegląd platform latających, nawodnych, lądowo-powietrznych, autorskiej elektroniki pokładowej oraz stanowisk badawczych rozwijanych w AGH Drone Engineering.",
    "projects.click.hint": "Kliknij na dowolne zdjęcie, aby otworzyć podgląd w pełnym rozmiarze.",

    // Project 1: Octa X8
    "proj.octa.tag": "PLATFORMA BAZOWA X8 · WYMIENNE MODUŁY",
    "proj.octa.title": "Octocopter X8: „Woda i Ogień”, „HydroLab” i Moduł Audio",
    "proj.octa.desc":
      "Ciężka platforma wielowirnikowa w układzie koncentrycznym X8 z autopilotem Cube Orange (ArduPilot) oraz komputerem pokładowym Raspberry Pi CM5. Jedna baza lotna współpracuje z wymiennymi modułami zadaniowymi: kierunkowymi mikrofonami w osiach X/Y wskazującymi źródło dźwięku, modułem wizyjnym AI (YOLO na CM5), mobilnym laboratorium HydroLab (pomiar pH, przewodności i temperatury wody) oraz kartą sieciową dalekiego zasięgu.",

    // Project 2: IARC Swarm
    "proj.iarc.tag": "RÓJ AUTONOMICZNY · IARC USA 2025 & 2026",
    "proj.iarc.title": "Rój Dronów 5\": Autonomiczne Wykrywanie Min PFM-1",
    "proj.iarc.desc":
      "Cztery autonomiczne drony 5-calowe współpracujące przy wykrywaniu replik min PFM-1 podczas zawodów International Aerial Robotics Competition (IARC) w USA. Każdy dron wykonuje obliczenia na pokładzie (Raspberry Pi CM5 + kamera z migawką globalną, YOLO i AprilTag), komunikuje się w roju własnym protokołem LoRa (pozycje, znaleziska, zadania), omija przeszkody i współtworzy mapę terenu sterowaną z telefonu operatora.",

    // Project 3: CM5IO PCB
    "proj.pcb.tag": "AUTORSKA ELEKTRONIKA POKŁADOWA · REV. 1.0 (01.2026)",
    "proj.pcb.title": "CM5 Drone Board – Płytka Nośna pod Raspberry Pi CM5",
    "proj.pcb.desc":
      "Zaprojektowana w pełni w kole dedykowana płytka nośna pod komputer pokładowy Raspberry Pi Compute Module 5. Wyposażona w wysokowydajną przetwornicę AP64501 (5 V, do 5 A), bezpośrednie zasilanie z akumulatora drona do 40 V, interfejsy szybkiej komunikacji PCIe 2.0 x1 oraz USB 3.0, a także moduł rozszerzeń z ESP32-S3, LoRa SX1262 i sprzętowym killswitchem.",

    // Project 4: Omnikopter
    "proj.omni.tag": "INSPEKCJA TURBIN WIATROWYCH · 6DoF & TUNEL AERODYNAMICZNY",
    "proj.omni.title": "Omnikopter: Monitoring Wizyjny Łopat Turbin podczas Pracy",
    "proj.omni.desc":
      "Platforma wielowirnikowa sterująca pozycją i orientacją niezależnie od siebie (kaskada regulatorów z modelem wiatru). Omnikopter leci w ustalonej orientacji z kamerą stale skierowaną na łopatę turbiny i koryguje podmuchy bez przechylania się, wykrywając erozję krawędzi natarcia, mikropęknięcia i delaminację. Projekt obejmuje symulacje Matlab/Simulink, PX4/Gazebo i CFD, stanowisko badań napędów, testy w tunelu aerodynamicznym oraz 4 artykuły naukowe i 5 konferencji.",

    // Project 5: Salamandra & GTM160
    "proj.jet.tag": "NAPĘD ODRZUTOWY · GRANT MNiSW (62 186 ZŁ) & STANOWISKO GTM160",
    "proj.jet.title": "Projekt „Salamandra” & Stanowisko Silników Odrzutowych GTM160",
    "proj.jet.desc":
      "Budowa mobilnej hamowni do mikrosilników odrzutowych z pomiarem temperatur T2, T3 i EGT pod modularny płatowiec odrzutowy oraz badania na stanowisku dwóch silników GTM160 (LAB w pełni opomiarowany oraz GLASS w obudowie ze szkła borokrzemowego): ciąg maksymalny 160 N, 117 000 obr./min wirnika, temperatura gazów wylotowych 750°C, moduł ESDL JETPOL i analiza telemetrii w czasie rzeczywistym przez WiFi/USB.",

    // Project 6: TSO The Small One
    "proj.tso.tag": "DRON ZAŁOGOWY · MISJE ZDALNE I AUTONOMICZNE",
    "proj.tso.title": "TSO: The Small One – Załogowa Platforma Wielowirnikowa",
    "proj.tso.desc":
      "Wielkogabarytowy dron załogowy z napędem elektrycznym przeznaczony do misji zdalnych i autonomicznych. Charakteryzuje się udźwigiem do 100 kg, czasem pracy do 1 godziny oraz nowatorskimi manetkami sterującymi. Przeznaczony do transportu ciężkich ładunków w rejony niebezpieczne oraz ewakuacji i transportu personelu w trudno dostępne miejsca.",

    // Project 7: Skrzydło VTOL
    "proj.vtol.tag": "PŁATOWIEC Z PIONOWYM STARTEM · DETEKCJA AI",
    "proj.vtol.title": "Skrzydło VTOL – Laminowany Płatowiec Rozpoznawczy",
    "proj.vtol.desc":
      "Płatowiec z pionowym startem i lądowaniem (VTOL) zaprojektowany i zalaminowany w pełni w Kole. Wyposażony w pokładową jednostkę obliczeniową realizującą detekcję dowolnych klas obiektów z kamer RGB w czasie rzeczywistym. Przeznaczony do patrolowania granic i rozległego terenu, misji rozpoznawczych oraz lokalizacji i neutralizowania innych UAV.",

    // Project 8: AI Racer
    "proj.racer.tag": "NAWIGACJA BEZ GPS · OPTICAL FLOW & SIECI NEURONOWE",
    "proj.racer.title": "AI Racer – Autonomiczny Lot Między Przeszkodami",
    "proj.racer.desc":
      "System autonomicznej nawigacji drona wyścigowego określający pozycję z użyciem Optical Flow oraz głębokich sieci neuronowych (przetwarzanie na pokładzie lub w chmurze). Umożliwia szybki lot między bramkami i przeszkodami w zamkniętych pomieszczeniach, patrolowanie terenu bez zasięgu radiowego oraz misje zwiadowcze w strefach pozbawionych sygnału GPS.",

    // Project 9: Dron wodny
    "proj.water.tag": "JEDNOSTKA NAWODNA USV · MONITORING ŚRODOWISKOWY",
    "proj.water.title": "Dron Wodny: Monitorowanie Jakości Wody i Mapowanie Głębokości",
    "proj.water.desc":
      "Bezzałogowy katamaran pomiarowy do badania jakości wody w jeziorach, stawach i rzekach oraz mapowania batymetrycznego (0–10 m). Wykorzystuje termistor, elektrody szklane i platynowe, rozpraszanie światła oraz fluorescencję do precyzyjnego pomiaru temperatury (±0,1°C), pH (±0,1), przewodności (1–2000 μS/cm), mętności (0–1000 NTU), tlenu rozpuszczonego (0–20 mg/L), chlorofilu i sinic.",

    // Project 10: Dron-Czołg
    "proj.tank.tag": "HYBRYDA LĄDOWO-POWIETRZNA · GRANT REKTORA",
    "proj.tank.title": "Dron Jezdno-Lotny „Czołg” (Transformacja UAV ↔ UGV)",
    "proj.tank.desc":
      "Bezzałogowa platforma o zmiennej konfiguracji do dostarczania zasobów w trudnym terenie. Mechanizm transformacji z przekładnią redukcyjną pozwala na zmianę trybu pracy między czterowirnikowym dronem latającym a pojazdem gąsienicowym pokonującym gruzowiska i obszary leśne.",

    // Project 11: Nauka poza zawodami & Warsztaty
    "proj.edu.tag": "KONFERENCJE · PUBLIKACJE · GRANTY · WARSZTATY",
    "proj.edu.title": "Nauka poza Zawodami & Warsztaty Elektroniki i Dronów",
    "proj.edu.desc":
      "Prezentujemy wyniki badań na międzynarodowych konferencjach (m.in. w ZEA, SGEM Vienna, SICE FES, sesjach Barbórkowej i Hutniczej), publikujemy artykuły naukowe (systemy zrzutu, SLAM satelitarny), realizujemy granty badawcze (MNiSW 238 tys. zł, Salamandra 62 tys. zł, ORLEN Turbogrant 50 tys. zł, IDUB, Granty Rektora) oraz prowadzimy warsztaty lutowania, projektowania PCB, druku 3D i budowy dronów.",

    // Contact
    "contact.title.1": "Dołącz do",
    "contact.title.2": "AGH Drone Engineering",
    "contact.subtitle":
      "Elektronika, oprogramowanie, mechanika i loty testowe. Napisz do nas lub śledź nasze media społecznościowe!",
    "contact.cta": "Napisz do nas: drone@agh.edu.pl",

    // Footer
    "footer.expansion": "AGH Drone Engineering",
    "footer.faculty": "Studenckie Koło Naukowe AGH UST w Krakowie.",
    "footer.contact": "Kontakt",
    "footer.wiki": "Baza wiedzy dla członków koła →",
    "footer.rights": "© 2026 AGH Drone Engineering. Wszelkie prawa zastrzeżone.",

    // About page
    "about.title.1": "Pasja do",
    "about.title.2": "latania i technologii",
    "about.p1":
      "AGH Drone Engineering to studenckie koło naukowe zrzeszające osoby z pasją do bezzałogowych statków powietrznych, robotyki mobilnej, sztucznej inteligencji i elektroniki.",
    "about.p2":
      "Budujemy drony automatyczne łączące autonomię z kontrolą operatora – od rojów dronów 5-calowych i ciężkich oktokopterów X8, przez własne płytki PCB, omnikoptery i napęd odrzutowy, aż po drony wodne i załogowe.",
    "about.board.heading": "Zarząd Koła",
    "about.board.chairman": "Przewodniczący",
    "about.board.member": "Członek zarządu",
    "about.supervisor.heading": "Opiekun Naukowy Koła",
    "about.supervisor.role":
      "Opiekun Naukowy SKN AGH Drone Engineering · Wydział Inżynierii Mechanicznej i Robotyki AGH",
    "about.supervisor.desc":
      "Wspiera działalność naukową, konstrukcyjną i warsztatową koła, pomaga we wdrażaniu projektów badawczych i grantowych oraz reprezentowaniu AGH na krajowych i międzynarodowych zawodach robotyki powietrznej.",

    // Language toggle
    "lang.toggle": "EN",
  },

  en: {
    // Meta / Title
    "meta.description.index":
      "AGH Drone Engineering - AGH UST Student Scientific Club. Building autonomous UAVs with operator control.",
    "meta.description.about": "About us - AGH Drone Engineering",
    "meta.description.projects": "Projects & Platforms - AGH Drone Engineering",
    "title.index": "AGH Drone Engineering",
    "title.about": "About us - AGH Drone Engineering",
    "title.projects": "Projects - AGH Drone Engineering",

    // Nav
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About us",
    "nav.wiki": "Knowledge Base (Members)",
    "nav.join": "Contact",

    // Hero
    "hero.badge": "STUDENT SCIENTIFIC CLUB AT AGH UST",
    "hero.title.1": "AGH Drone",
    "hero.title.2": "Engineering",
    "hero.subtitle":
      "We build automated drones combining onboard autonomy with operator control. We run R&D projects and compete in aerial robotics competitions worldwide.",
    "hero.cta": "Explore our projects",
    "hero.vcard": "Add to contacts",

    // Stats bar
    "stats.grants.label": "In research grants (Ministry, IDUB, ORLEN)",
    "stats.awards.label": "Competition awards in Poland & worldwide",
    "stats.payload.label": "Payload capacity of TSO manned drone",
    "stats.rpm.label": "RPM on our GTM160 turbojet test bench",

    // Sectors
    "sectors.heading": "Our Activities",
    "sectors.autonomy.title": "Autonomy & Drone Swarms",
    "sectors.autonomy.desc":
      "Computer vision (YOLO, AprilTag, Optical Flow), onboard computing (Raspberry Pi CM5), custom LoRa swarm communication, and multi-agent cooperation.",
    "sectors.hardware.title": "Platforms & Custom PCBs",
    "sectors.hardware.desc":
      "From X8 octocopters, 6DoF omnicopters, VTOL wings, and water drones to our custom CM5 Drone Board and GTM160 turbojet test bench.",
    "sectors.science.title": "Research, Grants & Workshops",
    "sectors.science.desc":
      "Wind tunnel testing, scientific publications, international conferences (UAE, SGEM Vienna), and hands-on electronics & UAV workshops.",

    // Featured projects on index
    "home.projects.heading": "Our Platforms & Projects",
    "home.projects.subheading":
      "From heavy X8 octocopters and autonomous 5\" swarms to jet propulsion, omnicopters, and manned multirotors.",
    "home.projects.all": "View all projects & specifications",

    // Timeline / Awards
    "timeline.heading": "Competitions & Results (2018–2026)",
    "timeline.subheading":
      "Consistently reaching the podium at national and international UAV competitions and scientific conferences.",

    // Member zone banner
    "members.badge": "CLUB MEMBER ZONE",
    "members.title": "AGH Drone Engineering Knowledge Base & Tasks",
    "members.desc":
      "Already a club member? Access our internal knowledge base for step-by-step drone building guides (ArduPilot, MAVLink, ROS 2, Vision, PCB, Mechanics) and your GitHub tasks panel.",
    "members.cta": "Open Knowledge Base (aghdrone.pages.dev)",

    // Projects page
    "projects.hero.title.1": "Our",
    "projects.hero.title.2": "Projects & Platforms",
    "projects.hero.subtitle":
      "Overview of aerial, surface, and hybrid platforms, custom flight electronics, and research test benches developed at AGH Drone Engineering.",
    "projects.click.hint": "Click on any photo to open a full-size preview.",

    // Project 1: Octa X8
    "proj.octa.tag": "X8 BASE PLATFORM · MODULAR PAYLOADS",
    "proj.octa.title": "Octocopter X8: 'Fire & Water', 'HydroLab' & Audio Array",
    "proj.octa.desc":
      "Heavy coaxial X8 multirotor platform powered by Cube Orange (ArduPilot) and a Raspberry Pi CM5 mission computer. A single flight base supports swappable mission modules: an X/Y directional microphone array for acoustic source localization, an AI vision module (YOLO on CM5), the HydroLab mobile water-quality lab (pH, conductivity, temperature), and long-range ground-station networking.",

    // Project 2: IARC Swarm
    "proj.iarc.tag": "AUTONOMOUS SWARM · IARC USA 2025 & 2026",
    "proj.iarc.title": "5\" Drone Swarm: Autonomous PFM-1 Mine Detection",
    "proj.iarc.desc":
      "Four autonomous 5-inch quadcopters cooperating to detect PFM-1 mine replicas at the International Aerial Robotics Competition (IARC) in the USA. Each drone runs onboard vision (Raspberry Pi CM5 + global shutter camera, YOLO & AprilTag), communicates via a custom LoRa swarm protocol (positions, detections, task allocation), avoids obstacles, and builds a shared object map controlled via a smartphone module.",

    // Project 3: CM5IO PCB
    "proj.pcb.tag": "CUSTOM FLIGHT ELECTRONICS · REV. 1.0 (01.2026)",
    "proj.pcb.title": "CM5 Drone Board – Raspberry Pi CM5 Carrier PCB",
    "proj.pcb.desc":
      "Designed entirely in-house, our carrier board for the Raspberry Pi Compute Module 5 features an AP64501 buck converter (5 V, up to 5 A), direct battery input up to 40 V, high-speed PCIe 2.0 x1 and USB 3.0 interfaces, and an expansion module with ESP32-S3, SX1262 LoRa, and hardware killswitch.",

    // Project 4: Omnikopter
    "proj.omni.tag": "WIND TURBINE INSPECTION · 6DoF & WIND TUNNEL",
    "proj.omni.title": "Omnicopter: Visual Inspection of Operating Wind Turbine Blades",
    "proj.omni.desc":
      "Multirotor platform controlling position and orientation independently (cascaded controllers with wind modeling). The omnicopter flies at a fixed attitude with its camera locked onto the turbine blade, compensating for wind gusts without tilting to detect leading-edge erosion, micro-cracks, and delamination. Validated in Matlab/Simulink, PX4/Gazebo, CFD, wind tunnels, and published across 4 papers and 5 conferences.",

    // Project 5: Salamandra & GTM160
    "proj.jet.tag": "JET PROPULSION · MINISTRY GRANT & GTM160 TEST BENCH",
    "proj.jet.title": "Project 'Salamandra' & GTM160 Turbojet Test Bench",
    "proj.jet.desc":
      "Mobile micro-turbojet test bench measuring T2, T3, and EGT temperatures for a modular jet-powered airframe, alongside a dual GTM160 turbojet research station (fully instrumented LAB engine and borosilicate-glass GLASS engine): 160 N max thrust, 117,000 RPM, 750°C EGT, ESDL JETPOL telemetry module, and real-time WiFi/USB analysis.",

    // Project 6: TSO The Small One
    "proj.tso.tag": "MANNED MULTIROTOR · REMOTE & AUTONOMOUS MISSIONS",
    "proj.tso.title": "TSO: The Small One – Manned Electric Multirotor",
    "proj.tso.desc":
      "Large-scale electric manned drone designed for both remote/autonomous and piloted missions. Features up to 100 kg payload capacity, up to 1 hour endurance, and custom control throttles for heavy cargo delivery into hazardous zones and personnel transport into hard-to-reach areas.",

    // Project 7: Skrzydło VTOL
    "proj.vtol.tag": "VERTICAL TAKEOFF FIXED-WING · ONBOARD AI",
    "proj.vtol.title": "VTOL Wing – Composite Reconnaissance Aircraft",
    "proj.vtol.desc":
      "Vertical takeoff and landing (VTOL) flying wing designed and laminated entirely in the club. Equipped with an onboard computer running real-time multi-class RGB object detection for border and terrain patrol, reconnaissance missions, and UAV localization and neutralization.",

    // Project 8: AI Racer
    "proj.racer.tag": "GPS-DENIED NAVIGATION · OPTICAL FLOW & NEURAL NETS",
    "proj.racer.title": "AI Racer – Autonomous Obstacle & Gate Navigation",
    "proj.racer.desc":
      "Autonomous racing drone estimating pose via Optical Flow and deep neural networks (onboard or cloud inference). Enables high-speed indoor flight through gates and obstacles, radio-silent terrain patrol, and reconnaissance in GPS-denied environments.",

    // Project 9: Dron wodny
    "proj.water.tag": "UNMANNED SURFACE VESSEL · ENVIRONMENTAL MONITORING",
    "proj.water.title": "Water Drone: Water Quality Monitoring & Bathymetry",
    "proj.water.desc":
      "Unmanned catamaran for monitoring water quality in lakes, ponds, and rivers plus depth mapping (0–10 m). Uses thermistors, glass/platinum electrodes, light scattering, and fluorescence to measure temperature (±0.1°C), pH (±0.1), conductivity (1–2000 μS/cm), turbidity (0–1000 NTU), dissolved oxygen (0–20 mg/L), chlorophyll, and cyanobacteria.",

    // Project 10: Dron-Czołg
    "proj.tank.tag": "HYBRID AERIAL-GROUND PLATFORM · RECTOR'S GRANT",
    "proj.tank.title": "Hybrid Drone-Tank (UAV ↔ UGV Transformation)",
    "proj.tank.desc":
      "Variable-configuration unmanned platform for delivering supplies in rough terrain. A servo-driven reduction gear transforms the vehicle between quadcopter flight mode and tracked ground locomotion.",

    // Project 11: Nauka poza zawodami & Warsztaty
    "proj.edu.tag": "CONFERENCES · PUBLICATIONS · GRANTS · WORKSHOPS",
    "proj.edu.title": "Research Beyond Competitions & Engineering Workshops",
    "proj.edu.desc":
      "Presenting research at international conferences (UAE, SGEM Vienna, SICE FES), publishing papers (payload drop systems, satellite SLAM), executing major grants (MNiSW 238k PLN, Salamandra 62k PLN, ORLEN Turbogrant 50k PLN, IDUB, Rector's Grants), and running student workshops on soldering, PCB design, 3D printing, and drone building.",

    // Contact
    "contact.title.1": "Join",
    "contact.title.2": "AGH Drone Engineering",
    "contact.subtitle":
      "Electronics, software, mechanics, and test flights. Send us an email or follow our social media!",
    "contact.cta": "Email us: drone@agh.edu.pl",

    // Footer
    "footer.expansion": "AGH Drone Engineering",
    "footer.faculty": "Student Scientific Club at AGH UST in Kraków.",
    "footer.contact": "Contact",
    "footer.wiki": "Knowledge Base for Club Members →",
    "footer.rights": "© 2026 AGH Drone Engineering. All rights reserved.",

    // About page
    "about.title.1": "Passion for",
    "about.title.2": "flight & technology",
    "about.p1":
      "AGH Drone Engineering is a student scientific club bringing together enthusiasts of unmanned aerial vehicles, mobile robotics, artificial intelligence, and electronics.",
    "about.p2":
      "We build automated drones combining autonomy with operator control – from 5-inch autonomous swarms and heavy X8 octocopters to custom flight PCBs, omnicopters, turbojet propulsion, water drones, and manned multirotors.",
    "about.board.heading": "Club Board",
    "about.board.chairman": "Chairman",
    "about.board.member": "Board Member",
    "about.supervisor.heading": "Faculty Advisor",
    "about.supervisor.role":
      "Faculty Advisor of SKN AGH Drone Engineering · Faculty of Mechanical Engineering and Robotics, AGH UST",
    "about.supervisor.desc":
      "Supports the scientific, engineering, and workshop activities of the club, mentoring research grants and helping the team represent AGH UST at national and international aerial robotics competitions.",

    // Language toggle
    "lang.toggle": "PL",
  },
};
