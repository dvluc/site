/* ============================================================
   Interações do site — JavaScript puro, sem dependências.
   1. Alternância de idioma PT <-> EN (persistida em localStorage)
   2. Ano automático no rodapé
   3. Revelação suave das seções ao rolar (IntersectionObserver)
   ============================================================ */

(function () {
  "use strict";

  var root = document.documentElement;            // <html data-lang="...">
  var toggle = document.getElementById("langToggle");

  // Marca que o JS está ativo — sem isso, as seções .reveal nunca
  // ficam ocultas (degrada bem caso o script não carregue).
  root.classList.add("js");

  /* ---- 1. Idioma ---- */
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

  /* ---- 2. Ano no rodapé ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---- 3. Revelação ao rolar ---- */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(".reveal");

  if (reduced || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(function (el) { io.observe(el); });
})();
