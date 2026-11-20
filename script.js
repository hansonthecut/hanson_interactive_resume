/* ============================================================
   FRANK HANSON — Resume engine
   Theme math lives in theme.js (window.HansonTheme, the HansOn
   master spectrum engine shared with the main sites). This file
   wires the control surface, scroll effects, audio, and the form.
   ============================================================ */

(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reducedMotion) document.documentElement.classList.add("fx-on");

  /* ---------- Theme control (icon-only: moon / sun) ---------- */
  var engine = window.HansonTheme;
  var control = document.getElementById("theme-control");
  var toggle = document.getElementById("theme-toggle");
  var panel = document.getElementById("theme-panel");
  var slider = document.getElementById("theme-slider");
  var presetBtns = control ? control.querySelectorAll(".theme-presets button") : [];

  function syncThemeUI() {
    if (!engine) return;
    var s = engine.getState();
    var eff = engine.effectiveT(s);
    if (slider) slider.value = Math.round(eff * 1000);
    presetBtns.forEach(function (btn) {
      var name = btn.dataset.preset;
      var active = false;
      if (name === "system") active = s.mode === "system";
      else if (s.mode === "custom") {
        if (name === "light") active = eff === 0;
        else if (name === "grey") active = eff === 0.5;
        else if (name === "dark") active = eff === 1;
      }
      btn.dataset.active = active ? "true" : "false";
    });
  }

  if (control && toggle && panel && engine) {
    syncThemeUI();
    window.addEventListener("hanson-theme-change", syncThemeUI);

    toggle.addEventListener("click", function () {
      var open = panel.hidden;
      panel.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("mousedown", function (e) {
      if (!panel.hidden && !control.contains(e.target)) {
        panel.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !panel.hidden) {
        panel.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    if (slider) {
      slider.addEventListener("input", function () {
        engine.setCustom(Number(slider.value) / 1000);
      });
    }
    presetBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var name = btn.dataset.preset;
        if (name === "system") engine.setSystem();
        else if (name === "light") engine.setCustom(0);
        else if (name === "grey") engine.setCustom(0.5);
        else engine.setCustom(1);
      });
    });
  }

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var siteNav = document.getElementById("site-nav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var open = siteNav.classList.toggle("open");
      navToggle.classList.toggle("active", open);
      navToggle.setAttribute("aria-expanded", String(open));
    });
    siteNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        siteNav.classList.remove("open");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Scroll effects: hero leave-parallax + mega-word drift ---------- */
  var hero = document.querySelector(".hero[data-fx='leave']");
  var drifters = Array.prototype.slice.call(document.querySelectorAll("[data-drift]"));
  var ticking = false;

  function updateFX() {
    ticking = false;
    var vh = window.innerHeight;
    if (hero) {
      var r = hero.getBoundingClientRect();
      var p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)));
      hero.style.setProperty("--p", p.toFixed(4));
    }
    drifters.forEach(function (el) {
      var parent = el.parentElement;
      if (!parent) return;
      var pr = parent.getBoundingClientRect();
      if (pr.bottom < -200 || pr.top > vh + 200) return;
      var speed = parseFloat(el.getAttribute("data-drift")) || 0;
      var centerOffset = (pr.top + pr.height / 2 - vh / 2) * speed;
      el.style.transform = "translateY(" + centerOffset.toFixed(1) + "px)";
    });
  }
  function requestFX() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateFX);
    }
  }
  if (!reducedMotion && (hero || drifters.length)) {
    window.addEventListener("scroll", requestFX, { passive: true });
    window.addEventListener("resize", requestFX);
    updateFX();
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Audio — strictly opt-in via the Sound toggle ---------- */
  var soundToggle = document.getElementById("sound-toggle");
  var introAudio = document.getElementById("intro-audio");
  var cinematicAudio = document.getElementById("cinematic-audio");
  if (soundToggle && introAudio && cinematicAudio) {
    var soundOn = false;
    var cinematicTimer = null;
    var onIcon = soundToggle.querySelector(".sound-on-icon");
    var offIcon = soundToggle.querySelector(".sound-off-icon");

    introAudio.addEventListener("ended", function () {
      if (!soundOn) return;
      cinematicTimer = setTimeout(function () {
        if (soundOn) {
          cinematicAudio.volume = 0.5;
          cinematicAudio.play().catch(function () { /* playback blocked — stay silent */ });
        }
      }, 3000);
    });

    soundToggle.addEventListener("click", function () {
      soundOn = !soundOn;
      soundToggle.setAttribute("aria-pressed", String(soundOn));
      soundToggle.setAttribute("aria-label", soundOn ? "Turn sound off" : "Turn sound on");
      if (onIcon) onIcon.style.display = soundOn ? "block" : "none";
      if (offIcon) offIcon.style.display = soundOn ? "none" : "block";
      if (soundOn) {
        introAudio.volume = 0.7;
        introAudio.play().catch(function () { /* playback blocked — stay silent */ });
      } else {
        if (cinematicTimer) clearTimeout(cinematicTimer);
        introAudio.pause();
        cinematicAudio.pause();
      }
    });
  }

  /* ---------- Contact form — Formspree AJAX submit ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    var status = document.getElementById("contact-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.textContent = "Sending…";
      status.className = "contact-status";
      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          status.textContent = "Thank you — your inquiry is on its way. Frank replies personally to every serious opportunity.";
          status.className = "contact-status success";
          if (window.gtag) gtag("event", "form_submit", { form_id: "resume-contact" });
        } else {
          status.textContent = "Something went wrong sending that. You can also reach Frank directly at fiifi93@gmail.com.";
          status.className = "contact-status error";
        }
      }).catch(function () {
        status.textContent = "Something went wrong sending that. You can also reach Frank directly at fiifi93@gmail.com.";
        status.className = "contact-status error";
      });
    });
  }

  /* ---------- Analytics — outbound link clicks ---------- */
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[href]");
    if (!a || !window.gtag) return;
    var href = a.getAttribute("href");
    if (/^(https?:)?\/\//.test(href) && !href.includes("hansonthecut.github.io") && !href.includes("resume.hansonthecut.com")) {
      gtag("event", "outbound_click", { link_url: href, link_text: (a.textContent || "").trim().slice(0, 60) });
    } else if (href.indexOf("mailto:") === 0) {
      gtag("event", "email_click", { link_url: href });
    }
  });
})();
