/* ============================================================
   Page /test — relecture et validation des questions
   Chaque question/flashcard validée est enregistrée dans les
   cookies (clé séparée de la progression d'apprentissage).
   ============================================================ */

(function () {
  "use strict";

  const MODULES = (window.MODULES || []).slice();

  const missing = window.DATA_ERRORS || [];
  if (MODULES.length === 0 || missing.length > 0) {
    const warn = document.createElement("div");
    warn.className = "panel data-error";
    warn.innerHTML =
      "<h2>⚠️ Fichiers de données introuvables</h2>" +
      (missing.length ? "<ul>" + missing.map(f => "<li><code>" + f + "</code></li>").join("") + "</ul>" : "") +
      "<p>Vérifiez que le dossier <code>data/</code> est bien uploadé à la racine du site.</p>";
    document.querySelector("main").prepend(warn);
    if (MODULES.length === 0) return;
  }

  // ---------- Stockage de la validation (cookies + localStorage) ----------
  const VALIDATE_KEY = "bm_apprentissage_validation";

  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + encodeURIComponent(value) +
      ";expires=" + d.toUTCString() + ";path=/;SameSite=Lax";
  }

  function getCookie(name) {
    const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return m ? decodeURIComponent(m[1]) : null;
  }

  function loadValidation() {
    let raw = getCookie(VALIDATE_KEY);
    if (!raw) {
      try { raw = localStorage.getItem(VALIDATE_KEY); } catch (e) { /* ignore */ }
    }
    if (raw) {
      try { return new Set(JSON.parse(raw)); } catch (e) { /* données corrompues */ }
    }
    return new Set();
  }

  function saveValidation() {
    const raw = JSON.stringify(Array.from(validated));
    setCookie(VALIDATE_KEY, raw, 365);
    try { localStorage.setItem(VALIDATE_KEY, raw); } catch (e) { /* ignore */ }
  }

  let validated = loadValidation();

  // ---------- État des filtres ----------
  let theme = "all";
  let onlyPending = false;

  const TOTAL = MODULES.reduce((s, m) => s + m.questions.length + m.flashcards.length, 0);

  function countValidated(moduleId) {
    let total = 0, ok = 0;
    MODULES.forEach(m => {
      if (moduleId !== "all" && m.id !== moduleId) return;
      m.questions.concat(m.flashcards).forEach(x => {
        total++;
        if (validated.has(x.id)) ok++;
      });
    });
    return { ok, total };
  }

  // ---------- Rendu ----------
  function renderThemes() {
    const box = document.getElementById("test-themes");
    box.innerHTML = "";
    const mkChip = (id, emoji, label) => {
      const c = countValidated(id);
      const btn = document.createElement("button");
      btn.className = "theme-chip" + (theme === id ? " selected" : "");
      btn.innerHTML = "<span class='chip-emoji'>" + emoji + "</span>" +
        "<span class='chip-label'>" + label + "</span>" +
        "<span class='chip-count'>" + c.ok + " / " + c.total + " ✓</span>";
      btn.addEventListener("click", () => { theme = id; render(); });
      box.appendChild(btn);
    };
    mkChip("all", "🗂️", "Tout afficher");
    MODULES.forEach(m => mkChip(m.id, m.emoji, m.titre));
  }

  function renderStats() {
    const c = countValidated("all");
    const pct = c.total ? Math.round(c.ok / c.total * 100) : 0;
    document.getElementById("stat-validated").textContent = c.ok + " / " + c.total;
    document.getElementById("stat-pct").textContent = pct + " %";
    document.getElementById("validate-fill").style.width = pct + "%";
  }

  function toggleValidation(id) {
    if (validated.has(id)) validated.delete(id);
    else validated.add(id);
    saveValidation();
    render();
  }

  function mkValidateButton(id) {
    const btn = document.createElement("button");
    btn.className = "btn-validate";
    btn.textContent = validated.has(id) ? "✓ Validée — cliquer pour annuler" : "Marquer comme validée";
    btn.addEventListener("click", () => toggleValidation(id));
    return btn;
  }

  function renderList() {
    const wrap = document.getElementById("test-list");
    wrap.innerHTML = "";

    MODULES.forEach(m => {
      if (theme !== "all" && m.id !== theme) return;

      const visibleQ = m.questions.filter(q => !onlyPending || !validated.has(q.id));
      const visibleF = m.flashcards.filter(f => !onlyPending || !validated.has(f.id));
      if (!visibleQ.length && !visibleF.length) return;

      const header = document.createElement("h3");
      header.className = "module-header";
      header.textContent = m.emoji + " " + m.titre;
      wrap.appendChild(header);

      if (visibleQ.length) {
        const st = document.createElement("p");
        st.className = "section-title";
        st.textContent = "Questions de quiz";
        wrap.appendChild(st);
      }

      visibleQ.forEach(q => {
        const item = document.createElement("article");
        item.className = "test-item" + (validated.has(q.id) ? " validated" : "");

        const head = document.createElement("div");
        head.className = "test-item-head";
        head.innerHTML = "<span class='test-id'>" + q.id + "</span>" +
          "<span class='pill pill-theme'>" + q.theme + "</span>";
        item.appendChild(head);

        const question = document.createElement("p");
        question.className = "test-question";
        question.textContent = q.question;
        item.appendChild(question);

        const opts = document.createElement("div");
        opts.className = "test-options";
        q.options.forEach((o, i) => {
          const d = document.createElement("div");
          d.className = "test-option" + (i === q.answer ? " is-answer" : "");
          d.textContent = (i === q.answer ? "✅ " : "▫️ ") + o;
          opts.appendChild(d);
        });
        item.appendChild(opts);

        const expl = document.createElement("p");
        expl.className = "test-explication";
        expl.textContent = "💡 " + q.explication;
        item.appendChild(expl);

        item.appendChild(mkValidateButton(q.id));
        wrap.appendChild(item);
      });

      if (visibleF.length) {
        const st = document.createElement("p");
        st.className = "section-title";
        st.textContent = "Flashcards";
        wrap.appendChild(st);
      }

      visibleF.forEach(f => {
        const item = document.createElement("article");
        item.className = "test-item" + (validated.has(f.id) ? " validated" : "");

        const head = document.createElement("div");
        head.className = "test-item-head";
        head.innerHTML = "<span class='test-id'>" + f.id + "</span>" +
          "<span class='pill'>🃏 flashcard</span>";
        item.appendChild(head);

        const recto = document.createElement("p");
        recto.className = "test-question";
        recto.textContent = f.recto;
        item.appendChild(recto);

        const verso = document.createElement("p");
        verso.className = "test-verso";
        verso.textContent = "↪️ " + f.verso;
        item.appendChild(verso);

        item.appendChild(mkValidateButton(f.id));
        wrap.appendChild(item);
      });
    });

    if (!wrap.children.length) {
      const done = document.createElement("div");
      done.className = "panel center";
      done.innerHTML = "<div class='hero-emoji'>🎉</div><h2>Tout est vérifié !</h2><p>Aucun élément restant à valider pour ce filtre.</p>";
      wrap.appendChild(done);
    }
  }

  function render() {
    renderThemes();
    renderStats();
    renderList();
  }

  document.getElementById("only-pending").addEventListener("change", e => {
    onlyPending = e.target.checked;
    render();
  });

  document.getElementById("btn-reset-validation").addEventListener("click", () => {
    if (confirm("Effacer toute la progression de relecture ? (la progression d'apprentissage n'est pas touchée)")) {
      validated = new Set();
      saveValidation();
      render();
    }
  });

  render();
})();
