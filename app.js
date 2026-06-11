/* ============================================================
   Quiz Apprentissage — logique de l'application (v2 modulaire)
   Principes appliqués (synthèse du cours) :
   - Pratique de récupération : se tester plutôt que relire
   - Feedback immédiat et bienveillant sur l'erreur
   - Répétition espacée / boîtes de Leitner : les questions
     ratées reviennent plus souvent
   - Sessions courtes (apprentissage distribué)
   - Thématiques choisissables ou mode « tout mélanger »
   ============================================================ */

(function () {
  "use strict";

  const MODULES = (window.MODULES || []).slice();
  const ALL_QUESTIONS = MODULES.flatMap(m => m.questions);
  const ALL_FLASHCARDS = MODULES.flatMap(m => m.flashcards);

  function questionsFor(themeId) {
    if (themeId === "all") return ALL_QUESTIONS;
    const m = MODULES.find(m => m.id === themeId);
    return m ? m.questions : [];
  }

  function flashcardsFor(themeId) {
    if (themeId === "all") return ALL_FLASHCARDS;
    const m = MODULES.find(m => m.id === themeId);
    return m ? m.flashcards : [];
  }

  // ---------- Stockage (cookies, avec secours localStorage) ----------
  const STORE_KEY = "bm_apprentissage_progress";
  const OLD_KEY = "bm_financement_progress"; // reprise de la progression v1

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

  function loadProgress() {
    let raw = getCookie(STORE_KEY);
    if (!raw) {
      try { raw = localStorage.getItem(STORE_KEY); } catch (e) { /* file:// ou navigation privée */ }
    }
    if (!raw) {
      // Migration depuis la v1 : les ids q1/f1 deviennent m3q1/m3f1
      let old = getCookie(OLD_KEY);
      if (!old) { try { old = localStorage.getItem(OLD_KEY); } catch (e) { /* ignore */ } }
      if (old) {
        try {
          const p = JSON.parse(old);
          const items = {};
          Object.keys(p.items || {}).forEach(k => { items["m3" + k] = p.items[k]; });
          return { items, totalOk: p.totalOk || 0, totalKo: p.totalKo || 0, bestStreak: p.bestStreak || 0 };
        } catch (e) { /* données corrompues */ }
      }
    }
    if (raw) {
      try { return JSON.parse(raw); } catch (e) { /* données corrompues : repartir à zéro */ }
    }
    return { items: {}, totalOk: 0, totalKo: 0, bestStreak: 0 };
  }

  function saveProgress() {
    const raw = JSON.stringify(progress);
    setCookie(STORE_KEY, raw, 365);
    try { localStorage.setItem(STORE_KEY, raw); } catch (e) { /* ignore */ }
  }

  let progress = loadProgress();

  // ---------- Système de Leitner ----------
  // Boîte 1 = à travailler (revient très souvent) … Boîte 5 = maîtrisé (revient rarement)
  const BOX_WEIGHTS = { 1: 10, 2: 5, 3: 2.5, 4: 1.2, 5: 0.5 };
  const NEW_WEIGHT = 7; // les questions jamais vues passent en priorité haute

  function getItem(id) {
    return progress.items[id] || null;
  }

  function itemWeight(id) {
    const it = getItem(id);
    if (!it) return NEW_WEIGHT;
    return BOX_WEIGHTS[it.b] || NEW_WEIGHT;
  }

  function recordResult(id, ok) {
    let it = progress.items[id];
    if (!it) it = progress.items[id] = { b: 1, ok: 0, ko: 0 };
    if (ok) {
      it.ok++;
      it.b = Math.min(5, it.b + 1);
      progress.totalOk++;
    } else {
      it.ko++;
      it.b = 1; // une erreur ramène en boîte 1 : la question reviendra vite
      progress.totalKo++;
    }
    saveProgress();
  }

  // Tirage aléatoire pondéré, sans remise
  function weightedSample(pool, count) {
    const candidates = pool.slice();
    const picked = [];
    while (picked.length < count && candidates.length > 0) {
      const total = candidates.reduce((s, q) => s + itemWeight(q.id), 0);
      let r = Math.random() * total;
      let idx = 0;
      for (let i = 0; i < candidates.length; i++) {
        r -= itemWeight(candidates[i].id);
        if (r <= 0) { idx = i; break; }
      }
      picked.push(candidates.splice(idx, 1)[0]);
    }
    return picked;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function masteryOf(id) {
    const it = getItem(id);
    if (!it) return 0;
    return (it.b - 1) / 4; // boîte 1 → 0 %, boîte 5 → 100 %
  }

  function moduleMastery(m) {
    const items = m.questions.concat(m.flashcards);
    if (!items.length) return 0;
    return items.reduce((s, x) => s + masteryOf(x.id), 0) / items.length;
  }

  // ---------- Sélecteur de thématique (chips) ----------
  function renderThemeChips(containerId, current, onSelect, countOf) {
    const box = document.getElementById(containerId);
    box.innerHTML = "";

    const mkChip = (id, emoji, label, count) => {
      const btn = document.createElement("button");
      btn.className = "theme-chip" + (current === id ? " selected" : "");
      btn.innerHTML = "<span class='chip-emoji'>" + emoji + "</span>" +
        "<span class='chip-label'>" + label + "</span>" +
        "<span class='chip-count'>" + count + "</span>";
      btn.addEventListener("click", () => onSelect(id));
      box.appendChild(btn);
    };

    mkChip("all", "🎲", "Tout mélanger", countOf("all"));
    MODULES.forEach(m => mkChip(m.id, m.emoji, m.titre, countOf(m.id)));
  }

  // ---------- Navigation entre les modes ----------
  const screens = document.querySelectorAll(".screen");
  const tabs = document.querySelectorAll(".tab");

  function show(screenId) {
    screens.forEach(s => s.classList.toggle("active", s.id === screenId));
    tabs.forEach(t => t.classList.toggle("active", t.dataset.screen === screenId));
    if (screenId === "screen-progress") renderProgress();
    if (screenId === "screen-fiches") renderFiches();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  tabs.forEach(t => t.addEventListener("click", () => show(t.dataset.screen)));

  // ---------- Mode Quiz ----------
  const QUIZ_LENGTH = 10;
  let quizTheme = "all";
  let quizSession = null;

  const elQuizHome = document.getElementById("quiz-home");
  const elQuizPlay = document.getElementById("quiz-play");
  const elQuizEnd = document.getElementById("quiz-end");

  function renderQuizThemes() {
    renderThemeChips("quiz-themes", quizTheme, id => {
      quizTheme = id;
      renderQuizThemes();
    }, id => questionsFor(id).length + " questions");
  }

  document.getElementById("btn-start-quiz").addEventListener("click", startQuiz);
  document.getElementById("btn-quiz-next").addEventListener("click", nextQuizQuestion);
  document.getElementById("btn-quiz-replay").addEventListener("click", startQuiz);
  document.getElementById("btn-quiz-home").addEventListener("click", () => {
    elQuizEnd.hidden = true;
    elQuizHome.hidden = false;
  });

  function startQuiz() {
    const pool = questionsFor(quizTheme);
    if (!pool.length) return;
    quizSession = {
      questions: weightedSample(pool, Math.min(QUIZ_LENGTH, pool.length)),
      index: 0,
      score: 0,
      streak: 0
    };
    elQuizHome.hidden = true;
    elQuizEnd.hidden = true;
    elQuizPlay.hidden = false;
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const q = quizSession.questions[quizSession.index];
    document.getElementById("quiz-counter").textContent =
      "Question " + (quizSession.index + 1) + " / " + quizSession.questions.length;
    document.getElementById("quiz-theme").textContent = q.theme;
    document.getElementById("quiz-score").textContent = "⭐ " + quizSession.score;
    document.getElementById("quiz-progressbar-fill").style.width =
      (quizSession.index / quizSession.questions.length * 100) + "%";
    document.getElementById("quiz-question").textContent = q.question;

    const feedback = document.getElementById("quiz-feedback");
    feedback.hidden = true;
    feedback.className = "feedback";
    document.getElementById("btn-quiz-next").hidden = true;

    // Mélange des réponses (la bonne est toujours options[answer] dans les données)
    const order = shuffle(q.options.map((_, i) => i));
    const box = document.getElementById("quiz-options");
    box.innerHTML = "";
    order.forEach(optIdx => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.textContent = q.options[optIdx];
      btn.addEventListener("click", () => answerQuiz(btn, optIdx === q.answer, q));
      box.appendChild(btn);
    });
  }

  function answerQuiz(btn, correct, q) {
    document.querySelectorAll("#quiz-options .option").forEach(b => {
      b.disabled = true;
      if (b.textContent === q.options[q.answer]) b.classList.add("correct");
    });
    if (!correct) btn.classList.add("wrong");

    recordResult(q.id, correct);

    const feedback = document.getElementById("quiz-feedback");
    if (correct) {
      quizSession.score++;
      quizSession.streak++;
      progress.bestStreak = Math.max(progress.bestStreak, quizSession.streak);
      saveProgress();
      feedback.className = "feedback good";
      feedback.innerHTML = "<strong>" + cheer() + "</strong> " + q.explication;
    } else {
      quizSession.streak = 0;
      feedback.className = "feedback bad";
      feedback.innerHTML = "<strong>Pas tout à fait… et c'est en se trompant qu'on apprend ! 💪</strong> " + q.explication;
    }
    feedback.hidden = false;
    document.getElementById("quiz-score").textContent = "⭐ " + quizSession.score;
    document.getElementById("btn-quiz-next").hidden = false;
    document.getElementById("btn-quiz-next").focus();
  }

  function cheer() {
    const c = ["Bravo ! 🎉", "Exact ! ✨", "Bien joué ! 👏", "Parfait ! 🌟", "Oui ! 🚀"];
    return c[Math.floor(Math.random() * c.length)];
  }

  function nextQuizQuestion() {
    quizSession.index++;
    if (quizSession.index < quizSession.questions.length) {
      renderQuizQuestion();
    } else {
      endQuiz();
    }
  }

  function endQuiz() {
    elQuizPlay.hidden = true;
    elQuizEnd.hidden = false;
    const s = quizSession.score, n = quizSession.questions.length;
    const pct = Math.round(s / n * 100);
    document.getElementById("quiz-end-score").textContent = s + " / " + n;
    let msg, emoji;
    if (pct === 100) { emoji = "🏆"; msg = "Sans faute, ce thème n'a plus de secret pour vous !"; }
    else if (pct >= 70) { emoji = "🌟"; msg = "Très belle session ! Les questions ratées reviendront bientôt pour s'ancrer."; }
    else if (pct >= 40) { emoji = "💪"; msg = "Bon entraînement ! L'erreur est un levier de progression : ces questions reviendront plus souvent."; }
    else { emoji = "🌱"; msg = "C'est en se testant qu'on mémorise. Relisez les fiches de ce thème puis relancez un quiz court !"; }
    document.getElementById("quiz-end-emoji").textContent = emoji;
    document.getElementById("quiz-end-msg").textContent = msg;
  }

  // ---------- Mode Flashcards ----------
  const FLASH_LENGTH = 8;
  let flashTheme = "all";
  let flashSession = null;

  const elFlashHome = document.getElementById("flash-home");
  const elFlashPlay = document.getElementById("flash-play");
  const elFlashEnd = document.getElementById("flash-end");
  const elCard = document.getElementById("flashcard");

  function renderFlashThemes() {
    renderThemeChips("flash-themes", flashTheme, id => {
      flashTheme = id;
      renderFlashThemes();
    }, id => flashcardsFor(id).length + " cartes");
  }

  document.getElementById("btn-start-flash").addEventListener("click", startFlash);
  document.getElementById("btn-flash-ko").addEventListener("click", () => answerFlash(false));
  document.getElementById("btn-flash-ok").addEventListener("click", () => answerFlash(true));
  document.getElementById("btn-flash-replay").addEventListener("click", startFlash);
  document.getElementById("btn-flash-home").addEventListener("click", () => {
    elFlashEnd.hidden = true;
    elFlashHome.hidden = false;
  });
  elCard.addEventListener("click", () => elCard.classList.toggle("flipped"));

  function startFlash() {
    const pool = flashcardsFor(flashTheme);
    if (!pool.length) return;
    flashSession = {
      cards: weightedSample(pool, Math.min(FLASH_LENGTH, pool.length)),
      index: 0,
      known: 0
    };
    elFlashHome.hidden = true;
    elFlashEnd.hidden = true;
    elFlashPlay.hidden = false;
    renderFlashcard();
  }

  function renderFlashcard() {
    const c = flashSession.cards[flashSession.index];
    elCard.classList.remove("flipped");
    document.getElementById("flash-counter").textContent =
      "Carte " + (flashSession.index + 1) + " / " + flashSession.cards.length;
    const it = getItem(c.id);
    document.getElementById("flash-box").textContent =
      it ? "Boîte " + it.b + " / 5" : "Nouvelle carte";
    document.getElementById("flash-recto").textContent = c.recto;
    document.getElementById("flash-verso").textContent = c.verso;
  }

  function answerFlash(known) {
    const c = flashSession.cards[flashSession.index];
    recordResult(c.id, known);
    if (known) flashSession.known++;
    flashSession.index++;
    if (flashSession.index < flashSession.cards.length) {
      renderFlashcard();
    } else {
      elFlashPlay.hidden = true;
      elFlashEnd.hidden = false;
      document.getElementById("flash-end-score").textContent =
        flashSession.known + " / " + flashSession.cards.length + " cartes connues";
      document.getElementById("flash-end-msg").textContent =
        flashSession.known === flashSession.cards.length
          ? "Toutes connues ! Les cartes montent de boîte et reviendront plus tard. 🏆"
          : "Les cartes « à revoir » retournent en boîte 1 et reviendront plus souvent : c'est le principe des boîtes de Leitner. 📦";
    }
  }

  // ---------- Mode Fiches ----------
  let ficheTheme = "all";

  function renderFicheThemes() {
    renderThemeChips("fiches-themes", ficheTheme, id => {
      ficheTheme = id;
      renderFicheThemes();
      renderFiches();
    }, id => {
      if (id === "all") return MODULES.reduce((s, m) => s + m.fiches.length, 0) + " fiches";
      const m = MODULES.find(m => m.id === id);
      return (m ? m.fiches.length : 0) + " fiches";
    });
  }

  function renderFiches() {
    const wrap = document.getElementById("fiches-list");
    wrap.innerHTML = "";
    MODULES.forEach(m => {
      if (ficheTheme !== "all" && m.id !== ficheTheme) return;
      if (ficheTheme === "all") {
        const header = document.createElement("h3");
        header.className = "module-header";
        header.textContent = m.emoji + " " + m.titre;
        wrap.appendChild(header);
      }
      m.fiches.forEach(f => {
        const card = document.createElement("article");
        card.className = "fiche fiche-" + f.couleur;
        let html = "<h3>" + f.titre + "</h3>";
        if (f.contenu) {
          f.contenu.forEach(c => {
            html += "<div class='fiche-bloc'><h4>" + c.sous + "</h4><p>" + c.texte + "</p></div>";
          });
        }
        if (f.table) {
          html += "<div class='table-scroll'><table><thead><tr>";
          f.table.entetes.forEach(e => html += "<th>" + e + "</th>");
          html += "</tr></thead><tbody>";
          f.table.lignes.forEach(l => {
            html += "<tr>";
            l.forEach(cell => html += "<td>" + cell + "</td>");
            html += "</tr>";
          });
          html += "</tbody></table></div>";
        }
        card.innerHTML = html;
        wrap.appendChild(card);
      });
    });
  }

  // ---------- Progression ----------
  function renderProgress() {
    const all = ALL_QUESTIONS.concat(ALL_FLASHCARDS);
    const seen = all.filter(x => getItem(x.id));
    const mastery = all.reduce((s, x) => s + masteryOf(x.id), 0) / all.length;

    document.getElementById("stat-mastery").textContent = Math.round(mastery * 100) + " %";
    document.getElementById("stat-seen").textContent = seen.length + " / " + all.length;
    const total = progress.totalOk + progress.totalKo;
    document.getElementById("stat-rate").textContent =
      total ? Math.round(progress.totalOk / total * 100) + " %" : "—";
    document.getElementById("stat-streak").textContent = progress.bestStreak;
    document.getElementById("mastery-fill").style.width = Math.round(mastery * 100) + "%";

    // Maîtrise par thématique
    const modEl = document.getElementById("modules-mastery");
    modEl.innerHTML = "";
    MODULES.forEach(m => {
      const pct = Math.round(moduleMastery(m) * 100);
      const row = document.createElement("div");
      row.className = "box-row";
      row.innerHTML =
        "<span class='box-label'>" + m.emoji + " " + m.titre + "</span>" +
        "<span class='box-bar'><span class='box-bar-fill module-fill' style='width:" + pct + "%'></span></span>" +
        "<span class='box-count'>" + pct + " %</span>";
      modEl.appendChild(row);
    });

    // Répartition par boîte de Leitner
    const counts = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    all.forEach(x => {
      const it = getItem(x.id);
      counts[it ? it.b : 0]++;
    });
    const labels = { 0: "Jamais vues", 1: "📦 Boîte 1 · à travailler", 2: "📦 Boîte 2", 3: "📦 Boîte 3", 4: "📦 Boîte 4", 5: "🏆 Boîte 5 · maîtrisé" };
    const boxesEl = document.getElementById("boxes-chart");
    boxesEl.innerHTML = "";
    [1, 2, 3, 4, 5, 0].forEach(b => {
      const row = document.createElement("div");
      row.className = "box-row";
      const pct = all.length ? counts[b] / all.length * 100 : 0;
      row.innerHTML =
        "<span class='box-label'>" + labels[b] + "</span>" +
        "<span class='box-bar'><span class='box-bar-fill box-b" + b + "' style='width:" + pct + "%'></span></span>" +
        "<span class='box-count'>" + counts[b] + "</span>";
      boxesEl.appendChild(row);
    });
  }

  document.getElementById("btn-reset").addEventListener("click", () => {
    if (confirm("Effacer toute la progression enregistrée ?")) {
      progress = { items: {}, totalOk: 0, totalKo: 0, bestStreak: 0 };
      saveProgress();
      renderProgress();
    }
  });

  // ---------- Démarrage ----------
  renderQuizThemes();
  renderFlashThemes();
  renderFicheThemes();
  show("screen-quiz");
})();
