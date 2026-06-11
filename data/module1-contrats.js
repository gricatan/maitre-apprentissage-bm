/* ============================================================
   Module 1 — Apprentissage, professionnalisation ou stage ?
   Sources : Activité 1 + support BM 2025 (principes, diplômes,
   histoire de l'apprentissage)
   ============================================================ */

window.MODULES = window.MODULES || [];

window.MODULES.push({
  id: "m1",
  emoji: "📝",
  titre: "Apprentissage, pro ou stage ?",
  sousTitre: "Différencier les contrats et situer l'apprentissage",

  questions: [
    {
      id: "m1q1",
      theme: "Types de contrats",
      question: "Qui signe le contrat d'apprentissage ?",
      options: ["L'employeur, l'apprenti et le centre de formation", "L'employeur uniquement", "L'établissement scolaire, l'entreprise et l'étudiant", "L'apprenti et le CFA uniquement"],
      answer: 0,
      explication: "Le contrat d'apprentissage est un contrat de travail signé entre l'employeur, l'apprenti et le centre de formation."
    },
    {
      id: "m1q2",
      theme: "Types de contrats",
      question: "Quel document encadre un stage en entreprise ?",
      options: ["Une convention signée entre l'établissement scolaire, l'entreprise et l'étudiant", "Un contrat de travail", "Un Cerfa déposé auprès de l'OPCO", "Une simple lettre d'engagement"],
      answer: 0,
      explication: "Le stage n'est pas un contrat de travail : c'est une convention tripartite école / entreprise / étudiant."
    },
    {
      id: "m1q3",
      theme: "Statuts",
      question: "Quel est le statut d'un stagiaire ?",
      options: ["Étudiant", "Salarié", "Demandeur d'emploi", "Travailleur indépendant"],
      answer: 0,
      explication: "Le stagiaire conserve son statut d'étudiant, contrairement à l'apprenti et au salarié en contrat de professionnalisation qui sont salariés."
    },
    {
      id: "m1q4",
      theme: "Statuts",
      question: "Quel est le statut d'un apprenti ?",
      options: ["Salarié", "Étudiant", "Stagiaire de la formation professionnelle", "Bénévole"],
      answer: 0,
      explication: "L'apprenti signe un contrat de travail : il a le statut de salarié, avec les droits et obligations qui en découlent."
    },
    {
      id: "m1q5",
      theme: "Types de contrats",
      question: "Quel est l'objectif du contrat de professionnalisation ?",
      options: ["Le retour à l'emploi ou l'acquisition d'une qualification reconnue par une branche", "La découverte du monde professionnel sans diplôme", "Uniquement l'obtention d'un diplôme du supérieur", "Le remplacement d'un salarié absent"],
      answer: 0,
      explication: "Le contrat de professionnalisation vise le retour à l'emploi ou l'acquisition d'un diplôme, d'un CQP ou d'une qualification reconnue dans une branche."
    },
    {
      id: "m1q6",
      theme: "Durées",
      question: "Quelle est la durée d'un contrat d'apprentissage ?",
      options: ["De 6 mois à 3 ans selon le diplôme préparé", "Toujours 2 ans", "De 6 à 12 mois maximum", "Quelques semaines à quelques mois"],
      answer: 0,
      explication: "La durée varie selon le cycle de formation : de 6 mois à 3 ans (cas particuliers possibles, ex. handicap)."
    },
    {
      id: "m1q7",
      theme: "Durées",
      question: "Quelle est la durée d'un contrat de professionnalisation ?",
      options: ["6 à 12 mois, jusqu'à 24 mois par accord de branche", "1 à 3 ans dans tous les cas", "36 mois minimum", "Illimitée"],
      answer: 0,
      explication: "Le contrat de professionnalisation dure de 6 à 12 mois, et peut aller jusqu'à 24 mois en cas d'accord de branche."
    },
    {
      id: "m1q8",
      theme: "Rémunération",
      question: "Un stagiaire est-il rémunéré ?",
      options: ["Une gratification est possible si le stage dépasse 2 mois", "Oui, au SMIC obligatoirement", "Oui, selon un barème légal en % du SMIC", "Jamais"],
      answer: 0,
      explication: "Le stage n'ouvre pas droit à un salaire, mais à une gratification lorsque sa durée dépasse 2 mois."
    },
    {
      id: "m1q9",
      theme: "Publics",
      question: "À quel public s'adresse le contrat d'apprentissage ?",
      options: ["Aux jeunes de 16 à 29 ans, sauf dérogations", "À toute personne sans condition d'âge", "Aux 16-25 ans uniquement", "Aux demandeurs d'emploi de plus de 26 ans"],
      answer: 0,
      explication: "Le contrat d'apprentissage concerne les jeunes de 16 à 29 ans révolus, avec des dérogations (handicap, création d'entreprise…)."
    },
    {
      id: "m1q10",
      theme: "Publics",
      question: "À quel public s'adresse le contrat de professionnalisation ?",
      options: ["Jeunes de 16 à 25 ans et demandeurs d'emploi de plus de 26 ans", "Jeunes de 16 à 29 ans uniquement", "Étudiants en cours de cursus", "Salariés en poste uniquement"],
      answer: 0,
      explication: "Le contrat de professionnalisation s'adresse aux 16-25 ans et aux demandeurs d'emploi de plus de 26 ans."
    },
    {
      id: "m1q11",
      theme: "Diplômes",
      question: "Quels diplômes peut-on préparer en contrat d'apprentissage ?",
      options: ["Du CAP à Bac+5", "Uniquement le CAP", "Uniquement les diplômes du supérieur", "Du Bac au Bac+3"],
      answer: 0,
      explication: "L'apprentissage permet d'obtenir un titre ou un diplôme du CAP jusqu'à Bac+5."
    },
    {
      id: "m1q12",
      theme: "Types de contrats",
      question: "Où se déroule la formation théorique d'un apprenti ?",
      options: ["En CFA (Centre de Formation d'Apprentis)", "Dans un organisme de formation privé uniquement", "Exclusivement en entreprise", "Au Rectorat"],
      answer: 0,
      explication: "L'apprenti partage son temps entre l'entreprise et le CFA. Le contrat de professionnalisation, lui, se déroule en organisme de formation."
    },
    {
      id: "m1q13",
      theme: "Diplômes",
      question: "À quel niveau de qualification correspond le BTS ?",
      options: ["Niveau 5 (Bac+2)", "Niveau 3", "Niveau 4", "Niveau 6 (Bac+3)"],
      answer: 0,
      explication: "Le BTS et le DUT sont des diplômes de niveau 5 (Bac+2). Le CAP est de niveau 3, le Bac niveau 4, la licence niveau 6."
    },
    {
      id: "m1q14",
      theme: "Histoire",
      question: "Depuis 2019, auprès de qui les contrats d'apprentissage sont-ils déposés ?",
      options: ["Auprès des OPCO", "Auprès des chambres consulaires", "Auprès des Conseils régionaux", "Auprès de France Travail"],
      answer: 0,
      explication: "La réforme de 2018-2019 a mis fin à l'enregistrement par les chambres consulaires : les contrats sont désormais déposés auprès des OPCO."
    },
    {
      id: "m1q15",
      theme: "Rémunération",
      question: "Comment est calculée la rémunération d'un alternant ?",
      options: ["En pourcentage du SMIC selon l'âge et la progression dans les études", "Au SMIC complet dès la première année", "Librement par l'employeur", "Selon le diplôme uniquement"],
      answer: 0,
      explication: "En alternance, le salaire est un pourcentage du SMIC qui dépend de l'âge et de l'année de formation."
    },
    {
      id: "m1q16",
      theme: "Histoire",
      question: "Quelle loi de 1919 a organisé l'enseignement technique en France ?",
      options: ["La loi Astier", "Les lois Delors", "La loi Avenir professionnel", "La loi Le Chapelier"],
      answer: 0,
      explication: "La loi Astier (1919) organise l'enseignement technique. Les CMA sont créées en 1925, les CFA en 1966, et la grande réforme de l'apprentissage date de 2018."
    }
  ],

  flashcards: [
    { id: "m1f1", recto: "Qui signe le contrat d'apprentissage ?", verso: "L'employeur, l'apprenti et le centre de formation. C'est un contrat de travail (statut salarié)." },
    { id: "m1f2", recto: "Quel document pour un stage, et quel statut ?", verso: "Une convention école / entreprise / étudiant. Le stagiaire garde le statut d'étudiant." },
    { id: "m1f3", recto: "Durées : apprentissage vs professionnalisation vs stage ?", verso: "Apprentissage : 6 mois à 3 ans · Professionnalisation : 6-12 mois (24 par accord de branche) · Stage : quelques semaines à quelques mois." },
    { id: "m1f4", recto: "Publics : apprentissage vs professionnalisation ?", verso: "Apprentissage : 16-29 ans (sauf dérogations) · Professionnalisation : 16-25 ans + demandeurs d'emploi de plus de 26 ans." },
    { id: "m1f5", recto: "Rémunération d'un stagiaire ?", verso: "Pas de salaire, mais une gratification si le stage dure plus de 2 mois." },
    { id: "m1f6", recto: "Quels diplômes en apprentissage ?", verso: "Du CAP au Bac+5 (titre ou diplôme)." },
    { id: "m1f7", recto: "Niveaux de diplômes : CAP, Bac Pro, BTS, Licence ?", verso: "CAP = niveau 3 · Bac Pro = niveau 4 · BTS/DUT = niveau 5 · Licence/Master 1 = niveau 6." },
    { id: "m1f8", recto: "Dates clés de l'apprentissage ?", verso: "1919 loi Astier · 1925 création des CMA · 1966 création des CFA · 2018 grande réforme · 2019 dépôt des contrats auprès des OPCO." }
  ],

  fiches: [
    {
      titre: "📝 Comparatif des 3 dispositifs",
      couleur: "peach",
      table: {
        entetes: ["", "Apprentissage", "Professionnalisation", "Stage"],
        lignes: [
          ["Nature", "Contrat de travail (employeur + apprenti + CFA)", "Contrat de travail (entreprise + apprenant)", "Convention (école + entreprise + étudiant)"],
          ["Objectif", "Insertion pro + diplôme ou certification", "Retour à l'emploi, diplôme, CQP ou qualification de branche", "Découverte du monde pro, sans diplôme"],
          ["Durée", "6 mois à 3 ans", "6-12 mois (24 par accord de branche)", "Quelques semaines à quelques mois"],
          ["Rémunération", "% du SMIC (âge + année)", "Barème légal obligatoire", "Gratification si > 2 mois"],
          ["Statut", "Salarié", "Salarié", "Étudiant"]
        ]
      }
    },
    {
      titre: "🎓 La pyramide des diplômes",
      couleur: "mint",
      contenu: [
        { sous: "Niveau 3", texte: "CAP (2 ans), CS. Accessible dès la sortie de 3ᵉ ou de 16 à 29 ans." },
        { sous: "Niveau 4", texte: "Bac Pro (seconde, première, terminale pro), BP, BTM, BMA." },
        { sous: "Niveau 5", texte: "BTS, DUT… et le Brevet de Maîtrise (BM) !" },
        { sous: "Niveau 6", texte: "Licence, licence professionnelle, Maîtrise / Master 1." }
      ]
    },
    {
      titre: "📜 L'histoire de l'apprentissage en bref",
      couleur: "sky",
      contenu: [
        { sous: "Les fondations (1919-1966)", texte: "1919 loi Astier (enseignement technique) · 1925 création des CMA · 1966 création des CFA · 1971 lois Delors (contrat de travail)." },
        { sous: "Modernisation (1987-2006)", texte: "1987 organisation par filière sous tutelle des Régions · 1993 sections d'apprentissage dans tous les établissements · 2006 enregistrement confié aux chambres consulaires." },
        { sous: "Nouveau modèle (2011-2019)", texte: "2014 le contrat peut être un CDI · 2018 grande réforme (financement, aides, rémunération, rupture) · 2019 dépôt des contrats auprès des OPCO." }
      ]
    }
  ]
});
