// i18n.js — lightweight language & theme switcher
(function () {
  const STORAGE_KEY = "aghde-lang";
  const THEME_KEY = "aghde-theme";

  const ICON_MOON = `<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>`;

  const ICON_SUN = `<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="4" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
  </svg>`;

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || "pl";
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function getTheme() {
    return localStorage.getItem(THEME_KEY) || "light";
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Swap toggle button SVG icon
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.innerHTML = isDark ? ICON_SUN : ICON_MOON;
      btn.setAttribute(
        "title",
        isDark ? "Przełącz na tryb jasny" : "Przełącz na tryb ciemny"
      );
    });

    // Swap club logo between light and dark variant
    document.querySelectorAll('img[src*="images/logo"]').forEach((img) => {
      img.src = isDark ? "images/logo-dark.png?v=5" : "images/logo.png?v=5";
    });
  }

  function toggleTheme() {
    const next = getTheme() === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  if (localStorage.getItem(THEME_KEY) === "dark") {
    document.documentElement.classList.add("dark");
  }

  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    document.documentElement.lang = lang;

    const pageId = document.body.dataset.page;
    const titleKey = `title.${pageId}`;
    if (t[titleKey]) document.title = t[titleKey];

    const metaKey = `meta.description.${pageId}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && t[metaKey]) metaDesc.setAttribute("content", t[metaKey]);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.textContent = t["lang.toggle"];
    });

    document.documentElement.classList.remove("i18n-loading");
  }

  function toggleLang() {
    const current = getLang();
    const next = current === "pl" ? "en" : "pl";
    setLang(next);
    applyTranslations(next);
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyTranslations(getLang());
    applyTheme(getTheme());

    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.addEventListener("click", toggleLang);
    });
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.addEventListener("click", toggleTheme);
    });
  });
})();
