// i18n.js — lightweight language & theme switcher
(function () {
  const STORAGE_KEY = "aghde-lang";
  const THEME_KEY = "aghde-theme";

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
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
      btn.setAttribute(
        "title",
        theme === "dark" ? "Przełącz na tryb jasny" : "Przełącz na tryb ciemny"
      );
    });
  }

  function toggleTheme() {
    const next = getTheme() === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  // Apply theme immediately to prevent flash
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
