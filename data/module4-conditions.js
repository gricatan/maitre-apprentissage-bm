/* ============================================================
   Module 4 — Les conditions du contrat d'apprentissage
   Sources : Activité 4 + support BM 2025 (élaboration du contrat)
   ============================================================ */

window.MODULES = window.MODULES || [];

window.MODULES.push({
  id: "m4",
  emoji: "✍️",
  titre: "Les conditions du contrat",
  sousTitre: "Apprenti, entreprise, maître d'apprentissage, forme",

  questions: [
    // --- Conditions d'âge ---
    {
      id: "m4q1",
      theme: "Conditions d'âge",
      question: "Quelle est la condition d'âge de principe pour signer un contrat d'apprentissage ?",
      options: ["De 16 à 29 ans révolus", "De 18 à 35 ans", "De 15 à 25 ans", "Sans condition d'âge"],
      answer: 0,
      explication: "Le principe est 16 à 29 ans révolus, avec des dérogations vers le bas (15 ans après la 3ᵉ) et vers le haut (35 ans, voire sans limite)."
    },
    {
      id: "m4q2",
      theme: "Conditions d'âge",
      question: "Un jeune de 15 ans peut-il signer un contrat d'apprentissage ?",
      options: ["Oui, s'il a terminé sa classe de 3ᵉ", "Non, jamais", "Oui, sans condition", "Oui, s'il a l'accord de la DREETS"],
      answer: 0,
      explication: "Dérogation à la limite basse : possible à 15 ans si la 3ᵉ est terminée (certificat de fin de scolarité demandé par la CMA)."
    },
    {
      id: "m4q3",
      theme: "Conditions d'âge",
      question: "Dans quels cas peut-on signer un contrat d'apprentissage jusqu'à 35 ans ?",
      options: ["Après une rupture indépendante de la volonté de l'apprenti, ou pour préparer un diplôme supérieur au précédent", "Uniquement pour les sportifs de haut niveau", "Pour tout demandeur d'emploi", "Aucun cas possible après 30 ans"],
      answer: 0,
      explication: "Jusqu'à 35 ans : rupture indépendante de la volonté de l'apprenti, ou nouveau contrat visant un diplôme supérieur. Maximum 1 an entre les 2 contrats."
    },
    {
      id: "m4q4",
      theme: "Conditions d'âge",
      question: "Quel délai maximum doit séparer deux contrats pour bénéficier de la dérogation d'âge jusqu'à 35 ans ?",
      options: ["1 an", "6 mois", "2 ans", "Aucun délai imposé"],
      answer: 0,
      explication: "Il ne doit pas s'écouler plus d'1 an entre les deux contrats."
    },
    {
      id: "m4q5",
      theme: "Conditions d'âge",
      question: "Qui peut signer un contrat d'apprentissage sans aucune limite d'âge ?",
      options: ["Personnes handicapées (RQTH), créateurs/repreneurs d'entreprise, sportifs de haut niveau", "Uniquement les personnes handicapées", "Les demandeurs d'emploi de longue durée", "Personne : la limite est toujours 35 ans"],
      answer: 0,
      explication: "Sans limite d'âge : reconnaissance de handicap (RQTH ou équivalent), projet de création ou reprise d'entreprise, sportifs de haut niveau."
    },
    {
      id: "m4q6",
      theme: "Cas pratiques",
      question: "Nora, 29 ans, aura 30 ans le mois prochain. Peut-elle signer un contrat d'apprentissage pour un CAP pâtisserie ?",
      options: ["Oui, si le contrat est signé avant son 30ᵉ anniversaire", "Non, elle est trop âgée", "Oui, mais seulement avec une dérogation DREETS", "Non, sauf si elle est demandeuse d'emploi"],
      answer: 0,
      explication: "La condition d'âge s'apprécie à la signature : signé avant le 30ᵉ anniversaire, le contrat est valable (16-29 ans révolus)."
    },
    // --- Conditions médicales et nationalité ---
    {
      id: "m4q7",
      theme: "Condition médicale",
      question: "Dans quel délai la visite médicale d'embauche d'un apprenti majeur doit-elle être organisée ?",
      options: ["Dans les 2 mois de l'embauche", "Dans les 6 mois", "Avant la signature du contrat", "Dans la première semaine"],
      answer: 0,
      explication: "La visite (médicale ou d'information et de prévention) a lieu dans les 2 mois de l'embauche. Pour les mineurs affectés à des activités dangereuses : examen médical d'aptitude AVANT le début du contrat."
    },
    {
      id: "m4q8",
      theme: "Condition de nationalité",
      question: "Que doit posséder un ressortissant hors UE pour signer un contrat d'apprentissage ?",
      options: ["Une autorisation de travail ou un titre de séjour autorisant à travailler", "Rien de particulier", "Uniquement un passeport valide", "Une attestation du CFA"],
      answer: 0,
      explication: "Principe : autorisation de travail ou titre de séjour autorisant à travailler. Exception : pour les mineurs pris en charge par l'aide sociale à l'enfance, le contrat validé par l'OPCO vaut autorisation de travail (depuis le 01/04/2021)."
    },
    // --- Conditions entreprise / MA ---
    {
      id: "m4q9",
      theme: "L'entreprise",
      question: "Quelle condition l'activité de l'entreprise doit-elle remplir ?",
      options: ["Permettre la préparation du diplôme visé", "Avoir au moins 5 salariés", "Exister depuis plus de 3 ans", "Être inscrite au répertoire des métiers uniquement"],
      answer: 0,
      explication: "L'activité doit permettre la préparation du diplôme (ex. : un électricien ne peut pas former un coiffeur). En cas de doute, consulter le référentiel du diplôme avec l'appui du CFA."
    },
    {
      id: "m4q10",
      theme: "Maître d'apprentissage",
      question: "Quelles sont les conditions pour être maître d'apprentissage ?",
      options: ["Diplôme du domaine de même niveau ou supérieur + 1 an d'expérience, OU 2 ans d'expérience en relation avec le diplôme", "Obligatoirement un diplôme + 5 ans d'expérience", "Être chef d'entreprise uniquement", "Aucune condition"],
      answer: 0,
      explication: "Deux profils possibles : diplôme du domaine (niveau égal ou supérieur) + 1 an d'expérience, OU 2 ans d'exercice d'une activité en relation avec le diplôme préparé."
    },
    {
      id: "m4q11",
      theme: "Maître d'apprentissage",
      question: "Qui peut être désigné maître d'apprentissage dans l'entreprise ?",
      options: ["Un salarié volontaire, le chef d'entreprise ou le conjoint collaborateur", "Uniquement le chef d'entreprise", "Uniquement un salarié en CDI", "N'importe quel salarié, même contre son gré"],
      answer: 0,
      explication: "Le maître d'apprentissage peut être un salarié volontaire, le chef d'entreprise lui-même ou le conjoint collaborateur."
    },
    {
      id: "m4q12",
      theme: "Maître d'apprentissage",
      question: "Combien d'apprentis un maître d'apprentissage peut-il encadrer simultanément ?",
      options: ["2 apprentis + 1 redoublant", "Autant qu'il le souhaite", "1 seul", "5 maximum"],
      answer: 0,
      explication: "Le quota légal est de 2 apprentis maximum par maître d'apprentissage, plus 1 en cas de redoublement (dérogation possible)."
    },
    {
      id: "m4q13",
      theme: "Cas pratiques",
      question: "Un maître d'apprentissage pressenti a un diplôme du domaine mais seulement 6 mois d'expérience. Le contrat peut-il être signé ?",
      options: ["Non : il faut un diplôme + 1 an d'expérience, ou 2 ans d'expérience", "Oui, le diplôme suffit", "Oui, avec l'accord de l'OPCO", "Non : il faut 5 ans d'expérience"],
      answer: 0,
      explication: "C'est le cas de Lucas (Activité 4) : 6 mois d'expérience ne suffisent pas. Il faut diplôme + 1 an, ou 2 ans d'expérience sans diplôme."
    },
    {
      id: "m4q14",
      theme: "Cas pratiques",
      question: "Un artisan sans diplôme mais avec 10 ans d'expérience dans son métier peut-il être maître d'apprentissage ?",
      options: ["Oui : 2 ans d'expérience en lien avec le diplôme suffisent, même sans diplôme", "Non, le diplôme est obligatoire", "Oui, mais seulement pour un apprenti majeur", "Non, sauf accord du Rectorat"],
      answer: 0,
      explication: "C'est le cas de Thomas (Activité 4) : sans diplôme, 2 ans d'expérience en relation avec le diplôme préparé suffisent. 10 ans, c'est largement bon !"
    },
    {
      id: "m4q15",
      theme: "Cas pratiques",
      question: "Une gérante seule accueille déjà 2 apprenties et veut en recruter une 3ᵉ. Est-ce possible ?",
      options: ["Non : le quota est de 2 apprentis par maître d'apprentissage (+1 redoublant)", "Oui, sans limite", "Oui, si les apprenties sont majeures", "Non : une gérante seule ne peut pas avoir d'apprenti"],
      answer: 0,
      explication: "C'est le cas d'Émilie (Activité 4) : le quota de 2 apprentis (+1 redoublant) par maître d'apprentissage est atteint, le 3ᵉ contrat sera refusé."
    },
    {
      id: "m4q16",
      theme: "Cas pratiques",
      question: "Maya, en situation de handicap, se voit proposer un contrat d'apprentissage de 4 ans. Est-ce légal ?",
      options: ["Oui : la durée peut être allongée jusqu'à 4 ans pour les personnes handicapées", "Non : 3 ans est le maximum absolu", "Oui, pour tout apprenti qui le demande", "Non, sauf pour un Master"],
      answer: 0,
      explication: "La durée du contrat peut être allongée jusqu'à 4 ans pour les personnes en situation de handicap, avec un aménagement validé par les parties."
    },
    // --- Conditions de forme ---
    {
      id: "m4q17",
      theme: "Conditions de forme",
      question: "Le contrat d'apprentissage doit-il être écrit ?",
      options: ["Oui, obligatoirement, avec des clauses et mentions obligatoires", "Non, un accord oral suffit", "Seulement pour les mineurs", "Seulement si l'OPCO l'exige"],
      answer: 0,
      explication: "Le contrat est obligatoirement écrit (Cerfa). L'absence d'écrit peut entraîner une requalification : rappel de salaires et cotisations + éventuelle indemnité."
    },
    {
      id: "m4q18",
      theme: "Conditions de forme",
      question: "Qui doit signer le contrat si l'apprenti est mineur ?",
      options: ["L'employeur, l'apprenti et son représentant légal", "L'employeur et l'apprenti seulement", "Le représentant légal à la place de l'apprenti", "L'employeur et le CFA"],
      answer: 0,
      explication: "Le contrat est signé par les deux parties (employeur et apprenti), et par le représentant légal si l'apprenti est mineur."
    },
    {
      id: "m4q19",
      theme: "Conditions de forme",
      question: "Dans quel délai la première période d'alternance (CFA/entreprise) doit-elle avoir lieu ?",
      options: ["Dans les 3 premiers mois du contrat", "Dans les 6 premiers mois", "Dans le premier mois", "À tout moment"],
      answer: 0,
      explication: "Une période d'alternance entre CFA et entreprise doit intervenir dans les 3 premiers mois du contrat."
    },
    {
      id: "m4q20",
      theme: "Conditions de forme",
      question: "Quelle est la durée de principe d'un contrat d'apprentissage ?",
      options: ["Entre 6 et 36 mois, égale à la durée du cycle de formation", "Exactement 24 mois", "Entre 12 et 48 mois", "Libre"],
      answer: 0,
      explication: "Entre 6 et 36 mois en principe, égale au cycle de formation, examens inclus. Exceptions : convention tripartite, handicap (4 ans), redoublement (+1 an, une seule fois)…"
    },
    {
      id: "m4q21",
      theme: "Conditions de forme",
      question: "En cas d'échec à l'examen final, que peut-il se passer ?",
      options: ["Prolongation d'1 an maximum, une seule fois", "Le contrat est automatiquement rompu", "Prolongation illimitée", "L'apprenti doit changer d'entreprise"],
      answer: 0,
      explication: "Le contrat peut être prolongé d'un an au plus en cas d'échec à l'examen, une seule fois (redoublement)."
    },
    {
      id: "m4q22",
      theme: "Conditions de forme",
      question: "Quel document permet d'ajuster la durée du contrat au niveau initial de l'apprenti ?",
      options: ["Une convention tripartite apprenti / employeur / CFA", "Un simple mail à l'OPCO", "Un avenant signé par le seul employeur", "Une décision du Rectorat"],
      answer: 0,
      explication: "La réduction ou l'allongement de la durée passe par une convention tripartite entre l'apprenti, l'employeur et le CFA."
    }
  ],

  flashcards: [
    { id: "m4f1", recto: "Condition d'âge de principe pour être apprenti ?", verso: "16 à 29 ans révolus (l'âge s'apprécie à la date de signature du contrat)." },
    { id: "m4f2", recto: "Dérogation d'âge vers le bas ?", verso: "15 ans si la classe de 3ᵉ est terminée (certificat de fin de scolarité demandé par la CMA)." },
    { id: "m4f3", recto: "Dérogations jusqu'à 35 ans ?", verso: "Rupture du contrat indépendante de la volonté de l'apprenti, ou nouveau contrat pour un diplôme supérieur. Maximum 1 an entre les 2 contrats." },
    { id: "m4f4", recto: "Qui peut être apprenti sans limite d'âge ?", verso: "Personnes reconnues handicapées (RQTH), porteurs d'un projet de création/reprise d'entreprise, sportifs de haut niveau." },
    { id: "m4f5", recto: "Profil requis du maître d'apprentissage ?", verso: "Diplôme du domaine de niveau égal ou supérieur + 1 an d'expérience, OU 2 ans d'exercice en relation avec le diplôme préparé." },
    { id: "m4f6", recto: "Quota d'apprentis par maître d'apprentissage ?", verso: "2 apprentis + 1 redoublant (dérogation possible)." },
    { id: "m4f7", recto: "Qui peut être maître d'apprentissage ?", verso: "Un salarié volontaire, le chef d'entreprise ou le conjoint collaborateur." },
    { id: "m4f8", recto: "Visite médicale : quel délai ?", verso: "Dans les 2 mois de l'embauche. Pour un mineur affecté à des activités dangereuses : examen médical d'aptitude AVANT le début du contrat." },
    { id: "m4f9", recto: "Durée du contrat d'apprentissage ?", verso: "6 à 36 mois (= cycle de formation, examens inclus). Jusqu'à 4 ans si handicap ; +1 an maximum en cas de redoublement (une seule fois)." },
    { id: "m4f10", recto: "Quels documents formalisent l'embauche d'un apprenti ?", verso: "Le Cerfa + la convention de formation (frais, reste à charge, participation employeur) + éventuelles convention tripartite de durée et avenants." },
    { id: "m4f11", recto: "Que risque un employeur sans contrat écrit ?", verso: "Une requalification : rappel des salaires et cotisations + éventuelle indemnité." }
  ],

  fiches: [
    {
      titre: "🧑‍🎓 Les conditions pour être apprenti(e)",
      couleur: "peach",
      contenu: [
        { sous: "Âge : principe", texte: "16 à 29 ans révolus, apprécié à la signature du contrat." },
        { sous: "Dérogations", texte: "15 ans après la 3ᵉ · jusqu'à 35 ans après rupture subie ou pour un diplôme supérieur (max 1 an entre les contrats) · sans limite : handicap, création/reprise d'entreprise, sportif de haut niveau." },
        { sous: "Condition médicale", texte: "Visite dans les 2 mois de l'embauche ; pour les mineurs sur activités dangereuses, examen d'aptitude avant le début du contrat." },
        { sous: "Nationalité", texte: "Hors UE : autorisation de travail ou titre de séjour. Pour les mineurs ASE, le contrat validé par l'OPCO vaut autorisation de travail (depuis 04/2021)." }
      ]
    },
    {
      titre: "🏢 Les conditions relatives à l'entreprise",
      couleur: "mint",
      contenu: [
        { sous: "Activité adaptée", texte: "L'activité doit permettre la préparation du diplôme (vérifier le référentiel ; un électricien ne peut pas former un coiffeur)." },
        { sous: "Assurer la formation", texte: "Équipement adapté, laisser l'apprenti se rendre au CFA, respecter hygiène, sécurité et moralité." },
        { sous: "Maître d'apprentissage", texte: "Salarié volontaire, chef d'entreprise ou conjoint collaborateur. Profil : diplôme du domaine + 1 an d'expérience OU 2 ans d'expérience. Quota : 2 apprentis + 1 redoublant." }
      ]
    },
    {
      titre: "📄 Les conditions de forme",
      couleur: "sky",
      contenu: [
        { sous: "Écrit obligatoire", texte: "Contrat écrit (Cerfa) avec clauses obligatoires. Sans écrit : risque de requalification (rappels de salaires + indemnité)." },
        { sous: "Signatures", texte: "Employeur + apprenti(e), et le représentant légal si mineur. Notification du dépôt OPCO par mail ou sur l'espace personnel." },
        { sous: "Durée", texte: "6 à 36 mois = cycle de formation. Alternance dans les 3 premiers mois. Ajustable par convention tripartite ; 4 ans si handicap ; +1 an si redoublement." },
        { sous: "Documents", texte: "Cerfa + convention de formation (frais, reste à charge, participation) + convention tripartite et avenants éventuels." }
      ]
    },
    {
      titre: "🗂️ Les 5 cas pratiques de l'Activité 4",
      couleur: "sand",
      table: {
        entetes: ["Cas", "Situation", "Verdict", "Pourquoi"],
        lignes: [
          ["Nora, 29 ans", "CAP pâtisserie, 30 ans le mois prochain", "✅ Valable", "Signature avant le 30ᵉ anniversaire"],
          ["Lucas, 35 ans, RQTH", "MA : diplôme + 6 mois d'expérience", "❌ Refusé", "MA non conforme : il faut 1 an avec diplôme ou 2 ans sans"],
          ["Émilie, 22 ans", "Gérante seule avec déjà 2 apprenties", "❌ Refusé", "Quota de 2 apprentis (+1 redoublant) atteint"],
          ["Maya, 24 ans, RQTH", "Bac pro coiffure en 4 ans", "✅ Valable", "Allongement jusqu'à 4 ans possible si handicap"],
          ["Thomas, 18 ans", "MA sans diplôme, 10 ans de métier", "✅ Valable", "2 ans d'expérience suffisent, même sans diplôme"]
        ]
      }
    }
  ]
});
