/* ============================================================
   Interações do site — sem dependências.
   1. Alternância de idioma PT <-> EN (persistida em localStorage)
   2. Ano automático no rodapé
   ============================================================ */

(function () {
  "use strict";

  var root = document.documentElement;          // <html data-lang="...">
  var toggle = document.getElementById("langToggle");

  // Recupera idioma salvo (ou usa o do navegador como dica inicial).
  var saved = localStorage.getItem("lang");
  if (saved === "pt" || saved === "en") {
    setLang(saved);
  } else if ((navigator.language || "").slice(0, 2) === "en") {
    setLang("en");
  }

  function setLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "en" ? "en" : "pt-BR");
    localStorage.setItem("lang", lang);
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setLang(root.getAttribute("data-lang") === "en" ? "pt" : "en");
    });
  }

  // Ano corrente no rodapé.
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
