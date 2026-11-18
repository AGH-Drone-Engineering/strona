// i18n.js — lightweight language switcher
(function () {
  const STORAGE_KEY = "aghde-lang";

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || "pl";
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
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

    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.addEventListener("click", toggleLang);
    });
  });
})();
