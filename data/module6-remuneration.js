/* ============================================================
   Module 6 — La rémunération et les aides à l'embauche
   Source : Activité 6 (SMIC de référence : 1 801,84 €)
   ============================================================ */

window.MODULES = window.MODULES || [];

window.MODULES.push({
  id: "m6",
  emoji: "💰",
  titre: "Rémunération et aides à l'embauche",
  sousTitre: "% du SMIC, grilles de branche, aides employeur",

  questions: [
    {
      id: "m6q1",
      theme: "Principes",
      question: "De quoi dépend la rémunération d'un apprenti ?",
      options: ["De son âge et de son année de formation, selon la grille légale ou de branche", "Uniquement du diplôme préparé", "De la taille de l'entreprise", "Du bon vouloir de l'employeur"],
      answer: 0,
      explication: "Le salaire est un pourcentage du SMIC déterminé par l'âge et l'année de formation. La grille d'une convention collective (coiffure, BTP…) s'applique si elle est plus favorable que la grille légale."
    },
    {
      id: "m6q2",
      theme: "Principes",
      question: "Quelle grille s'applique si l'entreprise n'a pas de convention collective ?",
      options: ["La grille légale", "Aucune : salaire libre", "La grille du BTP par défaut", "Le SMIC complet"],
      answer: 0,
      explication: "Sans convention collective, c'est la grille légale qui s'applique (ex. : 18-20 ans en 2ᵉ année = 51 % du SMIC)."
    },
    {
      id: "m6q3",
      theme: "Calculs de salaire",
      question: "Emma, 17 ans, 1ʳᵉ année de CAP coiffure (grille coiffure : 29 % du SMIC). Quel est son salaire mensuel ?",
      options: ["522,53 €", "918,94 €", "1 081,10 €", "291,84 €"],
      answer: 0,
      explication: "29 % × 1 801,84 € = 522,53 € par mois."
    },
    {
      id: "m6q4",
      theme: "Calculs de salaire",
      question: "Florent, 19 ans, 2ᵉ année de Bac Pro BTP (grille BTP 18-20 ans : 60 % du SMIC). Quel est son salaire mensuel ?",
      options: ["1 081,10 €", "918,94 €", "522,53 €", "1 441,47 €"],
      answer: 0,
      explication: "60 % × 1 801,84 € = 1 081,10 € par mois."
    },
    {
      id: "m6q5",
      theme: "Calculs de salaire",
      question: "Clara, 22 ans, 2ᵉ année de BP coiffure (grille coiffure 21-25 ans : 80 % du SMIC). Quel est son salaire mensuel ?",
      options: ["1 441,47 €", "1 081,10 €", "918,94 €", "1 801,84 €"],
      answer: 0,
      explication: "80 % × 1 801,84 € = 1 441,47 € par mois."
    },
    {
      id: "m6q6",
      theme: "Calculs de salaire",
      question: "Lucas, 20 ans, 2ᵉ année de CAP dans un secteur sans convention collective (grille légale : 51 %). Quel est son salaire mensuel ?",
      options: ["918,94 €", "1 081,10 €", "522,53 €", "1 441,47 €"],
      answer: 0,
      explication: "Grille légale 18-20 ans, 2ᵉ année = 51 % × 1 801,84 € = 918,94 € par mois."
    },
    {
      id: "m6q7",
      theme: "Aides à l'embauche",
      question: "Quelle aide reçoit l'entreprise qui embauche un apprenti préparant un diplôme de niveau Bac ou inférieur ?",
      options: ["L'aide unique à l'embauche : 5 000 €", "L'aide exceptionnelle : 8 000 €", "Aucune aide", "Une exonération totale de salaire"],
      answer: 0,
      explication: "Pour un diplôme ≤ Bac, l'employeur bénéficie de l'aide unique à l'embauche de 5 000 € (versée la 1ʳᵉ année)."
    },
    {
      id: "m6q8",
      theme: "Aides à l'embauche",
      question: "Vincent prépare un BTS (Bac+2) dans une entreprise de moins de 250 salariés. Quelle aide pour l'employeur ?",
      options: ["L'aide exceptionnelle : 5 000 €", "Aucune : le diplôme est trop élevé", "L'aide unique : 6 000 €", "Une prime régionale uniquement"],
      answer: 0,
      explication: "Au-delà du Bac, c'est l'aide exceptionnelle qui s'applique : 5 000 € pour une entreprise de moins de 250 salariés."
    },
    {
      id: "m6q9",
      theme: "Aides à l'embauche",
      question: "Sophie, en Bac Pro, est en situation de handicap. Quel est le montant de l'aide pour l'employeur ?",
      options: ["6 000 € (aide unique + majoration handicap)", "5 000 €", "7 500 €", "750 €"],
      answer: 0,
      explication: "L'aide unique (diplôme ≤ Bac) est majorée en cas de handicap : 6 000 € au total."
    },
    {
      id: "m6q10",
      theme: "Aides à l'embauche",
      question: "Sur quelle période l'aide à l'embauche de 5 000 € est-elle versée ?",
      options: ["La 1ʳᵉ année du contrat, soit 416,67 € par mois", "Sur toute la durée du contrat", "En une seule fois à la signature", "À la fin du contrat"],
      answer: 0,
      explication: "L'aide est versée la 1ʳᵉ année : 5 000 € ÷ 12 = 416,67 € par mois."
    },
    {
      id: "m6q11",
      theme: "Calculs de salaire",
      question: "Apprenti BTP de 21 ans en 1ʳᵉ année de Bac Pro (grille BTP 21-25 ans : 55 %). Quel salaire mensuel ?",
      options: ["991,01 €", "1 171,20 €", "1 441,47 €", "900,92 €"],
      answer: 0,
      explication: "55 % × 1 801,84 € = 991,01 € par mois (soit 11 892,12 € par an)."
    },
    {
      id: "m6q12",
      theme: "Calculs de salaire",
      question: "Le même apprenti BTP (21-25 ans) passe en 3ᵉ année : quel pourcentage du SMIC ?",
      options: ["80 % du SMIC, soit 1 441,47 €", "65 % du SMIC, soit 1 171,20 €", "55 % du SMIC, soit 991,01 €", "100 % du SMIC"],
      answer: 0,
      explication: "Grille BTP 21-25 ans : 55 % en 1ʳᵉ année, 65 % en 2ᵉ année, 80 % en 3ᵉ année (= 1 441,47 €/mois, 17 297,64 €/an)."
    },
    {
      id: "m6q13",
      theme: "Principes",
      question: "Le salaire d'un apprenti augmente-t-il pendant le contrat ?",
      options: ["Oui, à chaque année de formation (et selon les tranches d'âge)", "Non, il est fixe", "Seulement si l'employeur le décide", "Uniquement à la majorité"],
      answer: 0,
      explication: "Le pourcentage du SMIC progresse avec l'année de formation et l'âge (ex. BTP 21-25 ans : 55 % → 65 % → 80 %)."
    }
  ],

  flashcards: [
    { id: "m6f1", recto: "Comment se calcule le salaire d'un apprenti ?", verso: "% du SMIC (1 801,84 €) selon l'âge et l'année de formation. La grille de branche (coiffure, BTP…) s'applique si elle est plus favorable que la grille légale." },
    { id: "m6f2", recto: "Exemples de la grille coiffure ?", verso: "CAP, < 18 ans, 1ʳᵉ année : 29 % (522,53 €) · BP, 21-25 ans, 2ᵉ année : 80 % (1 441,47 €)." },
    { id: "m6f3", recto: "Exemples de la grille BTP (21-25 ans) ?", verso: "1ʳᵉ année : 55 % (991,01 €) · 2ᵉ année : 65 % (1 171,20 €) · 3ᵉ année : 80 % (1 441,47 €)." },
    { id: "m6f4", recto: "Grille légale : 18-20 ans, 2ᵉ année ?", verso: "51 % du SMIC = 918,94 € (s'applique en l'absence de convention collective)." },
    { id: "m6f5", recto: "Aide unique à l'embauche : conditions et montant ?", verso: "Diplôme ≤ Bac → 5 000 €, versés la 1ʳᵉ année (416,67 €/mois)." },
    { id: "m6f6", recto: "Aide exceptionnelle : conditions et montant ?", verso: "Diplôme > Bac (ex. BTS) → 5 000 € si l'entreprise a moins de 250 salariés." },
    { id: "m6f7", recto: "Aide en cas de handicap de l'apprenti ?", verso: "Majoration de l'aide : 6 000 € au lieu de 5 000 € (ex. Sophie en Bac Pro)." }
  ],

  fiches: [
    {
      titre: "💰 Le principe de la rémunération",
      couleur: "peach",
      contenu: [
        { sous: "La formule", texte: "Salaire = % du SMIC (1 801,84 €) × selon l'âge et l'année de formation." },
        { sous: "Quelle grille ?", texte: "La grille de la convention collective (coiffure, BTP…) si elle existe et est plus favorable ; sinon la grille légale." },
        { sous: "Progression", texte: "Le pourcentage augmente à chaque année de formation et par tranche d'âge (< 18, 18-20, 21-25, 26+)." }
      ]
    },
    {
      titre: "🧮 Les 4 calculs de l'Activité 6",
      couleur: "mint",
      table: {
        entetes: ["Apprenti", "Situation", "Grille", "%", "Salaire/mois"],
        lignes: [
          ["Emma, 17 ans", "1ʳᵉ année CAP coiffure", "Coiffure", "29 %", "522,53 €"],
          ["Florent, 19 ans", "2ᵉ année Bac Pro BTP", "BTP", "60 %", "1 081,10 €"],
          ["Clara, 22 ans", "2ᵉ année BP coiffure", "Coiffure", "80 %", "1 441,47 €"],
          ["Lucas, 20 ans", "2ᵉ année CAP (sans convention)", "Légale", "51 %", "918,94 €"]
        ]
      }
    },
    {
      titre: "🎁 Les aides à l'embauche",
      couleur: "sky",
      contenu: [
        { sous: "Aide unique (diplôme ≤ Bac)", texte: "5 000 €, versée la 1ʳᵉ année du contrat (416,67 €/mois)." },
        { sous: "Aide exceptionnelle (diplôme > Bac)", texte: "5 000 € pour les entreprises de moins de 250 salariés (ex. BTS)." },
        { sous: "Majoration handicap", texte: "6 000 € au total pour un apprenti en situation de handicap." },
        { sous: "Qui verse ?", texte: "L'ASP (Agence de Services et de Paiement), via le portail Sylaé." }
      ]
    },
    {
      titre: "📈 Exemple complet : apprenti BTP 21 ans, Bac Pro 3 ans",
      couleur: "lilac",
      table: {
        entetes: ["Année", "% SMIC", "Salaire/mois", "Coût annuel"],
        lignes: [
          ["1ʳᵉ année", "55 %", "991,01 €", "11 892,12 €"],
          ["2ᵉ année", "65 %", "1 171,20 €", "14 054,40 €"],
          ["3ᵉ année", "80 %", "1 441,47 €", "17 297,64 €"]
        ]
      }
    }
  ]
});
