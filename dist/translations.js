const translations = {
  pl: {
    // Meta / Title
    "meta.description.index": "AGH Drone Engineering - Koło Naukowe AGH UST",
    "meta.description.about": "O nas - AGH Drone Engineering",
    "meta.description.projects": "Nasze Projekty - AGH Drone Engineering",
    "title.index": "AGH Drone Engineering",
    "title.about": "O nas - AGH Drone Engineering",
    "title.projects": "Projekty - AGH Drone Engineering",

    // Nav
    "nav.home": "Strona główna",
    "nav.projects": "Projekty",
    "nav.about": "O nas",
    "nav.join": "Kontakt",

    // Hero
    "hero.title.1": "AGH Drone",
    "hero.title.2": "Engineering",
    "hero.subtitle":
      "Koło naukowe AGH UST zajmujące się projektowaniem, budową i programowaniem autonomicznych bezzałogowych statków powietrznych oraz robotów mobilnych.",
    "hero.cta": "Nasze projekty",
    "hero.vcard": "Dodaj do kontaktów",

    // Sectors
    "sectors.heading": "Nasza Działalność",
    "sectors.autonomy.title": "Autonomia i AI",
    "sectors.autonomy.desc":
      "Algorytmy nawigacji, wizja komputerowa (YOLO, OpenCV), ROS 2 oraz autonomiczne misje i roje dronów.",
    "sectors.hardware.title": "Konstrukcje i Elektronika",
    "sectors.hardware.desc":
      "Projektowanie i budowa wielowirnikowców, hybryd lądowo-powietrznych, dedykowanych płytek PCB oraz systemów embedded.",
    "sectors.contests.title": "Zawody Międzynarodowe",
    "sectors.contests.desc":
      "Reprezentujemy AGH na zawodach w Polsce i na świecie – m.in. Droniada GZM, IMAV (Strasburg), IARC (USA), Dual-Tech AGH i Robocomp.",

    // Featured projects on index
    "home.projects.heading": "Wybrane Projekty",
    "home.projects.subheading":
      "Poznaj konstrukcje, elektronikę i systemy autonomiczne budowane w naszym kole.",
    "home.projects.all": "Zobacz wszystkie projekty",

    // Projects page
    "projects.hero.title.1": "Nasze",
    "projects.hero.title.2": "Projekty i Konstrukcje",
    "projects.hero.subtitle":
      "Od autonomicznych rojów dronów 5-calowych i ciężkich oktokopterów koaksjalnych X8, przez hybrydy jezdno-lotne i autorskie płytki PCB, aż po napęd odrzutowy.",
    "projects.tab.all": "Wszystkie",
    "projects.tab.uav": "Platformy BSP",
    "projects.tab.ai": "Autonomia i Roje",
    "projects.tab.hw": "Elektronika i Napędy",
    "projects.tab.edu": "Szkolenia",

    // Project 1: Octa X8
    "proj.octa.tag": "Platformy BSP · Grant Rektora 2026",
    "proj.octa.title": "Oktokoptery koaksjalne X8: „Woda i Ogień” & „HydroLab”",
    "proj.octa.desc":
      "Bliźniacze ciężkie platformy wielowirnikowe w układzie koaksjalnym X8 (8 silników T-Motor MN4006, śmigła 15\", MTOM 4,9 kg, czas lotu do 35 min, Cube Orange+ z ArduPilotem i Raspberry Pi CM5). Wariant „Woda i Ogień” (Octa1) realizuje detekcję wizyjną YOLO, lokalizację źródła dźwięku i zrzut ładunku ratowniczego (II miejsce na Droniadzie GZM 2026). Wariant „HydroLab” (Octa2) to mobilne laboratorium do badania jakości wody in situ (pH, EC, temperatura) przez most radiowy ESP-NOW.",

    // Project 2: IARC Swarm
    "proj.iarc.tag": "Autonomia i Roje · MNiSW FERS N215",
    "proj.iarc.title": "Rój Autonomicznych Dronów 5\" (IARC Mission 10)",
    "proj.iarc.desc":
      "Rój czterech autonomicznych dronów 5-calowych zbudowany na międzynarodowe zawody International Aerial Robotics Competition (IARC) w USA. Każdy dron posiada komputer pokładowy Raspberry Pi CM5, kamerę global shutter FRAMOS IMX900 oraz algorytmy wizyjne do autonomicznego przeszukiwania terenu korytarzami, koordynacji roju i detekcji obiektów (replik min PFM-1 oraz znaczników AprilTag).",

    // Project 3: Dron-Czołg
    "proj.tank.tag": "Hybryda UAV/UGV · Grant Rektora",
    "proj.tank.title": "Dron Jezdno-Lotny „Czołg” (Platforma Lądowo-Powietrzna)",
    "proj.tank.desc":
      "Bezzałogowy system o zmiennej konfiguracji przeznaczony do wsparcia misji ratowniczych w trudno dostępnym terenie. Autorski mechanizm transformacji z przekładnią redukcyjną umożliwia płynne przełączanie pomiędzy trybem lotnym (quadcopter) a trybem naziemnym wykorzystującym napęd gąsienicowy współosiowo zintegrowany z modułami silników.",

    // Project 4: CM5IO PCB
    "proj.pcb.tag": "Elektronika Pokładowa · Autorskie PCB",
    "proj.pcb.title": "Komputer Misji CM5IO Drone Board + ESP32-S3 / LoRa",
    "proj.pcb.desc":
      "Zaprojektowana w kole autorska płytka nośna pod komputer Raspberry Pi Compute Module 5 (CM5) wraz z modułem rozszerzeń wyposażonym w mikrokontroler ESP32-S3, transceiver dalekiego zasięgu LoRa SX1262, zintegrowaną przetwornicę zasilania (do 40 V) oraz sprzętowy układ bezpieczeństwa (killswitch) kontrolera lotu. Łączna masa obu płytek wynosi poniżej 57 g.",

    // Project 5: Salamandra
    "proj.jet.tag": "Napędy Odrzutowe · Grant Ministerialny",
    "proj.jet.title": "Projekt „Salamandra” – Hamownia i Napęd Odrzutowy",
    "proj.jet.desc":
      "Projekt badawczo-konstrukcyjny obejmujący opracowanie mobilnej hamowni pomiarowej pod mikrosilniki odrzutowe z akwizycją ciągu, temperatur spalin (EGT) i parametrów paliwowych w czasie rzeczywistym, stanowiącej bazę do rozwoju szybkich platform bezzałogowych z napędem odrzutowym.",

    // Project 6: Omnicopter & Tethered UAV
    "proj.omni.tag": "Badania i Inspekcja · Grant IDUB & Grant Rektora",
    "proj.omni.title": "Omnicopter 6DoF & BSP na Uwięzi",
    "proj.omni.desc":
      "Dwa specjalistyczne projekty inspekcyjno-obserwacyjne: wielowirnikowiec typu Omnicopter zdolny do generowania wektora ciągu w dowolnym kierunku (6 stopni swobody) do precyzyjnych inspekcji turbin wiatrowych, oraz Bezzałogowy Statek Powietrzny na uwięzi zasilany przewodowo z ziemi do długotrwałego zawisu i retransmisji łączności.",

    // Project 7: Akademia BSP / TurboGRANT
    "proj.edu.tag": "Szkolenia i Warsztaty · TurboGRANT ORLEN",
    "proj.edu.title": "Akademia BSP & Kurs Projektowania PCB",
    "proj.edu.desc":
      "Cykl otwartych warsztatów inżynierskich realizowany przy wsparciu Fundacji ORLEN im. I. Łukasiewicza. Prowadzimy praktyczne szkolenia z elektroniki i lutowania, programowania mikrokontrolerów (STM32/ESP32), projektowania własnych płytek PCB w KiCadzie, modelowania CAD/druku 3D oraz konfiguracji ArduPilota i komunikacji MAVLink.",

    // Contact
    "contact.title.1": "Chcesz latać i tworzyć",
    "contact.title.2": "z nami?",
    "contact.subtitle":
      "Szukamy pasjonatów robotyki, sztucznej inteligencji, elektroniki, mechaniki i awiacji. Skontaktuj się z nami lub śledź nasze media społecznościowe!",
    "contact.cta": "Napisz do nas: drone@agh.edu.pl",

    // Footer
    "footer.expansion": "AGH Drone Engineering",
    "footer.faculty": "Koło Naukowe AGH UST w Krakowie.",
    "footer.contact": "Kontakt",
    "footer.rights": "© 2026 AGH Drone Engineering. Wszelkie prawa zastrzeżone.",

    // About page
    "about.title.1": "Pasja do",
    "about.title.2": "latania i technologii",
    "about.p1":
      "AGH Drone Engineering to studenckie koło naukowe zrzeszające osoby z pasją do bezzałogowych statków powietrznych, robotyki mobilnej, sztucznej inteligencji i elektroniki.",
    "about.p2":
      "Budujemy autorskie platformy latające – od lekkich rojów dronów 5-calowych, przez ciężkie oktokoptery koaksjalne X8 i hybrydy jezdno-lotne, aż po dedykowaną elektronikę pokładową i napęd odrzutowy.",
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
    "meta.description.index": "AGH Drone Engineering - AGH UST Scientific Club",
    "meta.description.about": "About us - AGH Drone Engineering",
    "meta.description.projects": "Our Projects - AGH Drone Engineering",
    "title.index": "AGH Drone Engineering",
    "title.about": "About us - AGH Drone Engineering",
    "title.projects": "Projects - AGH Drone Engineering",

    // Nav
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About us",
    "nav.join": "Contact",

    // Hero
    "hero.title.1": "AGH Drone",
    "hero.title.2": "Engineering",
    "hero.subtitle":
      "AGH UST student scientific club focused on designing, building, and programming autonomous unmanned aerial vehicles and mobile robots.",
    "hero.cta": "Our projects",
    "hero.vcard": "Add to contacts",

    // Sectors
    "sectors.heading": "Our Activities",
    "sectors.autonomy.title": "Autonomy & AI",
    "sectors.autonomy.desc":
      "Navigation algorithms, computer vision (YOLO, OpenCV), ROS 2, autonomous missions, and drone swarms.",
    "sectors.hardware.title": "Hardware & Airframes",
    "sectors.hardware.desc":
      "Designing and building multirotors, hybrid aerial-ground vehicles, custom PCBs, and embedded flight systems.",
    "sectors.contests.title": "International Competitions",
    "sectors.contests.desc":
      "Representing AGH UST at national and international UAV competitions including Droniada GZM, IMAV (Strasbourg), IARC (USA), Dual-Tech AGH, and Robocomp.",

    // Featured projects on index
    "home.projects.heading": "Featured Projects",
    "home.projects.subheading":
      "Explore the aerial platforms, custom electronics, and autonomous systems built by our team.",
    "home.projects.all": "View all projects",

    // Projects page
    "projects.hero.title.1": "Our",
    "projects.hero.title.2": "Projects & Platforms",
    "projects.hero.subtitle":
      "From autonomous 5-inch drone swarms and heavy X8 coaxial octocopters to hybrid aerial-ground vehicles, custom flight PCBs, and micro-jet propulsion.",
    "projects.tab.all": "All",
    "projects.tab.uav": "UAV Platforms",
    "projects.tab.ai": "Autonomy & Swarms",
    "projects.tab.hw": "Electronics & Propulsion",
    "projects.tab.edu": "Workshops",

    // Project 1: Octa X8
    "proj.octa.tag": "UAV Platforms · Rector's Grant 2026",
    "proj.octa.title": "Coaxial X8 Octocopters: 'Fire & Water' & 'HydroLab'",
    "proj.octa.desc":
      "Twin heavy coaxial X8 multirotor platforms (8× T-Motor MN4006 motors, 15\" folding props, 4.9 kg MTOM, up to 35 min flight time, Cube Orange+ with ArduPilot and Raspberry Pi CM5). 'Fire & Water' (Octa1) performs onboard YOLO object detection, acoustic source localization, and rescue payload drop (2nd place at Droniada GZM 2026). 'HydroLab' (Octa2) is a mobile water-quality lab (pH, EC, temperature) with a wireless ESP-NOW sensor probe.",

    // Project 2: IARC Swarm
    "proj.iarc.tag": "Autonomy & Swarms · MNiSW FERS N215",
    "proj.iarc.title": "Autonomous 5\" Drone Swarm (IARC Mission 10)",
    "proj.iarc.desc":
      "A swarm of four autonomous 5-inch quadcopters developed for the International Aerial Robotics Competition (IARC) in the USA. Each drone carries a Raspberry Pi CM5 mission computer, a FRAMOS IMX900 global shutter camera, and custom vision algorithms for corridor search, swarm coordination, and PFM-1 mine / AprilTag detection.",

    // Project 3: Dron-Czołg
    "proj.tank.tag": "Hybrid UAV/UGV · Rector's Grant",
    "proj.tank.title": "Hybrid Aerial-Ground Drone-Tank (UAV/UGV)",
    "proj.tank.desc":
      "Variable-configuration unmanned system designed to support rescue operations in hard-to-reach terrain. A custom servo-driven reduction gear mechanism transforms the platform between quadcopter flight mode and tracked ground vehicle mode with motors coaxially integrated inside the track wheels.",

    // Project 4: CM5IO PCB
    "proj.pcb.tag": "Flight Electronics · Custom PCB",
    "proj.pcb.title": "CM5IO Drone Board Mission Computer + ESP32-S3 / LoRa",
    "proj.pcb.desc":
      "In-house designed carrier board for the Raspberry Pi Compute Module 5 (CM5) paired with an expansion module featuring an ESP32-S3 MCU, SX1262 LoRa long-range radio, integrated buck converter (up to 40 V input), and a hardware flight-controller killswitch. Combined weight under 57 g.",

    // Project 5: Salamandra
    "proj.jet.tag": "Jet Propulsion · Ministry Grant",
    "proj.jet.title": "Project 'Salamandra' – Micro-Jet Test Bench & Propulsion",
    "proj.jet.desc":
      "R&D project focused on building a mobile test bench for micro-turbojet engines with real-time thrust, exhaust gas temperature (EGT), and fuel telemetry, serving as the foundation for high-speed jet-powered UAV platforms.",

    // Project 6: Omnicopter & Tethered UAV
    "proj.omni.tag": "Research & Inspection · IDUB & Rector's Grants",
    "proj.omni.title": "6DoF Omnicopter & Tethered UAV System",
    "proj.omni.desc":
      "Two specialized inspection and surveillance systems: a 6-degree-of-freedom Omnicopter capable of generating thrust in any spatial orientation for wind turbine inspections, and a ground-powered Tethered UAV for multi-hour hover missions and radio relay.",

    // Project 7: Akademia BSP / TurboGRANT
    "proj.edu.tag": "Education & Workshops · ORLEN TurboGRANT",
    "proj.edu.title": "UAV Academy & Custom PCB Design Course",
    "proj.edu.desc":
      "Hands-on engineering workshop series supported by the ORLEN Ignacy Łukasiewicz Foundation. We teach practical soldering, STM32/ESP32 microcontroller programming, custom PCB design in KiCad, 3D CAD modeling, and ArduPilot / MAVLink configuration.",

    // Contact
    "contact.title.1": "Want to build and fly",
    "contact.title.2": "with us?",
    "contact.subtitle":
      "We are looking for enthusiasts of robotics, artificial intelligence, electronics, mechanics, and aviation. Get in touch or follow our social media!",
    "contact.cta": "Email us: drone@agh.edu.pl",

    // Footer
    "footer.expansion": "AGH Drone Engineering",
    "footer.faculty": "Student Scientific Club at AGH UST in Kraków.",
    "footer.contact": "Contact",
    "footer.rights": "© 2026 AGH Drone Engineering. All rights reserved.",

    // About page
    "about.title.1": "Passion for",
    "about.title.2": "flight & technology",
    "about.p1":
      "AGH Drone Engineering is a student scientific club bringing together enthusiasts of unmanned aerial vehicles, mobile robotics, artificial intelligence, and electronics.",
    "about.p2":
      "We build custom aerial platforms – from 5-inch autonomous drone swarms, heavy X8 coaxial octocopters, and hybrid aerial-ground vehicles to custom flight electronics and micro-jet propulsion systems.",
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
