/* HansOn master theme engine — shared verbatim with custom.hansonthecut.com
 * (THEME-AND-BRANDING-SPEC-2026-11-15 §6/§7), so the resume speaks the
 * exact same color language as the rest of the hansonthecut family.
 *
 * One continuous spectrum: 0 = light, 0.5 = neutral grey, 1 = dark.
 * Every token interpolates between its light and dark endpoint values in
 * OKLCH. Background/surface tokens travel the full range linearly with
 * the slider; foreground tokens (text, accent, focus) hold their
 * light-endpoint values past the middle and flip to their dark-endpoint
 * values across ~54–64%, so text-primary on surface keeps WCAG AA
 * contrast (>= 4.5:1) at every stop — the spec's contrast law.
 *
 * State persists in localStorage ("hanson-theme"). "System" follows
 * prefers-color-scheme live until the visitor drags the slider.
 * First-visit default is dark (1.0), the brand default.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "hanson-theme";

  // [light, dark, group] — "bg" interpolates linearly with the slider,
  // "fg" rides the flip curve.
  var TOKENS = {
    "--bg": ["#f2f2f3", "#0a0a0b", "bg"],
    "--surface": ["#ffffff", "#131315", "bg"],
    "--surface-raised": ["#e9e9eb", "#1d1d20", "bg"],
    "--surface-sunken": ["#efefef", "#0e0e10", "bg"],
    "--border": ["#d8d8db", "#2a2a2e", "bg"],
    "--border-strong": ["#b9b9be", "#3d3d43", "bg"],
    "--track-a": ["#d8d8db", "#2a2a2e", "bg"],
    "--track-b": ["#b9b9be", "#3d3d43", "bg"],
    "--track-c": ["#8e8e96", "#6e6e76", "bg"],
    "--track-d": ["#5c5c63", "#a7a7ae", "bg"],
    "--text-primary": ["#111113", "#f5f5f4", "fg"],
    "--text-secondary": ["#5c5c63", "#a7a7ae", "fg"],
    "--text-faint": ["#8e8e96", "#6e6e76", "fg"],
    "--accent": ["#111113", "#f5f5f4", "fg"],
    "--text-on-accent": ["#ffffff", "#111113", "fg"],
    "--focus": ["#2563eb", "#7dd3fc", "fg"]
  };
  var SHADOW_ALPHA = [0.12, 0.45]; // [light, dark] — --shadow rgba() alpha

  // ---- OKLCH conversion (Björn Ottosson's OKLab) ----
  function hexToSrgb(hex) {
    var n = parseInt(hex.slice(1), 16);
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
  }
  function toLinear(c) {
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }
  function toSrgb(c) {
    return c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  }
  function rgbToOklch(r, g, b) {
    r = toLinear(r); g = toLinear(g); b = toLinear(b);
    var l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
    var m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
    var s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
    var L = 0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s;
    var A = 1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s;
    var B = 0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s;
    var C = Math.sqrt(A * A + B * B);
    var H = C < 1e-6 ? 0 : (Math.atan2(B, A) * 180) / Math.PI;
    return [L, C, H < 0 ? H + 360 : H];
  }
  function oklchToRgb(L, C, H) {
    var hr = (H * Math.PI) / 180;
    var A = C * Math.cos(hr), B = C * Math.sin(hr);
    var l = L + 0.3963377774 * A + 0.2158037573 * B;
    var m = L - 0.1055613458 * A - 0.0638541728 * B;
    var s = L - 0.0894841775 * A - 1.2914855480 * B;
    l = l * l * l; m = m * m * m; s = s * s * s;
    var r = +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
    var g = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
    var b = -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s;
    return [toSrgb(r), toSrgb(g), toSrgb(b)];
  }
  function clamp01(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function rgbToHex(r, g, b) {
    function h(c) {
      var v = Math.round(clamp01(c) * 255).toString(16);
      return v.length === 1 ? "0" + v : v;
    }
    return "#" + h(r) + h(g) + h(b);
  }
  function mixHex(light, dark, u) {
    if (u <= 0) return light;
    if (u >= 1) return dark;
    var a = rgbToOklch.apply(null, hexToSrgb(light));
    var b = rgbToOklch.apply(null, hexToSrgb(dark));
    var L = a[0] + (b[0] - a[0]) * u;
    var C = a[1] + (b[1] - a[1]) * u;
    var H;
    if (a[1] < 1e-4) H = b[2];
    else if (b[1] < 1e-4) H = a[2];
    else {
      var dh = b[2] - a[2];
      if (dh > 180) dh -= 360;
      if (dh < -180) dh += 360;
      H = a[2] + dh * u;
    }
    return rgbToHex.apply(null, oklchToRgb(L, C, H));
  }

  // Foreground flip curve: foregrounds stay at their light endpoints
  // until just past the middle, then cross to their dark endpoints
  // across a narrow smoothstepped window centered on ~54% — the spec's
  // measured handoff point. Backgrounds cross mid-grey at 50%.
  function flipU(t) {
    var u = clamp01((t - 0.515) / 0.05);
    return u * u * (3 - 2 * u);
  }

  function computeTokens(t) {
    var out = {};
    var fu = flipU(t);
    for (var name in TOKENS) {
      var spec = TOKENS[name];
      out[name] = mixHex(spec[0], spec[1], spec[2] === "fg" ? fu : t);
    }
    var alpha = SHADOW_ALPHA[0] + (SHADOW_ALPHA[1] - SHADOW_ALPHA[0]) * t;
    out["--shadow"] = "0 8px 30px rgba(0, 0, 0, " + alpha.toFixed(3) + ")";
    return out;
  }

  // Which endpoint family the foregrounds currently match — drives the
  // header icon swap (moon for the dark side, sun for the light side).
  function side(t) {
    return flipU(t) >= 0.5 ? "dark" : "light";
  }

  function applyTo(root, t) {
    var vals = computeTokens(t);
    for (var name in vals) root.style.setProperty(name, vals[name]);
    var sd = side(t);
    if (root.dataset) root.dataset.themeSide = sd;
    root.style.setProperty("color-scheme", sd);
  }

  // ---- Persisted state ----
  function defaultState() {
    return { mode: "custom", t: 1 };
  }
  function readState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      var parsed = JSON.parse(raw);
      if (parsed && parsed.mode === "system") return { mode: "system", t: 1 };
      if (parsed && typeof parsed.t === "number") {
        return { mode: "custom", t: clamp01(parsed.t) };
      }
      // Legacy resume-site shape {t, preset} — migrate silently.
      if (parsed && typeof parsed.t === "number" && typeof parsed.preset === "string") {
        if (parsed.preset === "system") return { mode: "system", t: 1 };
        return { mode: "custom", t: clamp01(parsed.t) };
      }
    } catch (e) { /* storage unavailable — fall through to default */ }
    return defaultState();
  }
  function writeState(state) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) { /* storage unavailable — theme still applies live */ }
  }

  var state = null;
  var media = null;

  function osDark() {
    return !!(media && media.matches);
  }
  function effectiveT(s) {
    s = s || state || defaultState();
    return s.mode === "system" ? (osDark() ? 1 : 0) : s.t;
  }
  function emit() {
    try {
      window.dispatchEvent(new window.CustomEvent("hanson-theme-change"));
    } catch (e) { /* non-browser — ignore */ }
  }
  function applyCurrent() {
    if (typeof document !== "undefined" && document.documentElement) {
      applyTo(document.documentElement, effectiveT());
    }
  }
  function setCustom(t) {
    state = { mode: "custom", t: clamp01(t) };
    writeState(state);
    applyCurrent();
    emit();
  }
  function setSystem() {
    state = { mode: "system", t: 1 };
    writeState(state);
    applyCurrent();
    emit();
  }
  function getState() {
    return state || defaultState();
  }

  function boot() {
    if (typeof window === "undefined") return;
    if (!media && window.matchMedia) {
      media = window.matchMedia("(prefers-color-scheme: dark)");
      var onOsChange = function () {
        if (state && state.mode === "system") {
          applyCurrent();
          emit();
        }
      };
      if (media.addEventListener) media.addEventListener("change", onOsChange);
      else if (media.addListener) media.addListener(onOsChange);
    }
    state = readState();
    applyCurrent();
  }

  var api = {
    STORAGE_KEY: STORAGE_KEY,
    TOKENS: TOKENS,
    computeTokens: computeTokens,
    flipU: flipU,
    side: side,
    applyTo: applyTo,
    readState: readState,
    effectiveT: effectiveT,
    getState: getState,
    setCustom: setCustom,
    setSystem: setSystem,
    boot: boot
  };
  if (typeof window !== "undefined") window.HansonTheme = api;

  // Loaded synchronously in <head>: apply the saved theme before first
  // paint so the page never flashes the wrong end of the spectrum.
  boot();
})();
