/* ============================================================
   Module 3 — Le financement de la formation en apprentissage
   Sources : Activité 3 + support BM 2025 (nouveautés 01/07/2025)
   ============================================================ */

window.MODULES = window.MODULES || [];

window.MODULES.push({
  id: "m3",
  emoji: "💶",
  titre: "Le financement de la formation",
  sousTitre: "OPCO, NPEC, participation employeur, reste à charge",

  questions: [
  // --- Concepts généraux ---
  {
    id: "m3q1",
    theme: "Les acteurs",
    question: "Qui prend en charge le coût de la formation d'un apprenti en CFA ?",
    options: ["L'OPCO (Opérateur de Compétences)", "France Travail", "La Région", "L'apprenti lui-même"],
    answer: 0,
    explication: "C'est l'OPCO (Opérateur de Compétences) qui finance le coût de la formation en CFA, dans la limite du NPEC."
  },
  {
    id: "m3q2",
    theme: "Le NPEC",
    question: "Que signifie le sigle NPEC ?",
    options: ["Niveau de Prise En Charge", "Norme de Paiement des Études en CFA", "Nouveau Plan d'Évaluation des Compétences", "Niveau Professionnel d'Entrée en Contrat"],
    answer: 0,
    explication: "NPEC = Niveau de Prise En Charge : c'est le montant maximal que l'OPCO finance pour une formation donnée."
  },
  {
    id: "m3q3",
    theme: "Le NPEC",
    question: "À quoi correspond le NPEC d'une formation ?",
    options: ["Au montant maximal financé par l'OPCO", "Au salaire de l'apprenti", "Au coût total payé par l'employeur", "À la taxe d'apprentissage"],
    answer: 0,
    explication: "Le NPEC est le plafond de financement : l'OPCO prend en charge le coût de la formation dans la limite de ce montant."
  },
  {
    id: "m3q4",
    theme: "Participation employeur",
    question: "À partir de quel niveau de diplôme l'employeur doit-il verser une participation obligatoire ?",
    options: ["Bac+3", "CAP", "Bac+2", "Bac+5 uniquement"],
    answer: 0,
    explication: "La participation obligatoire de l'employeur s'applique à partir du niveau Bac+3 (licence et au-delà)."
  },
  {
    id: "m3q5",
    theme: "Participation employeur",
    question: "Quel est le montant de la participation obligatoire de l'employeur pour un diplôme de niveau Bac+3 ou plus ?",
    options: ["750 €", "500 €", "1 000 €", "1 500 €"],
    answer: 0,
    explication: "Pour les diplômes de niveau Bac+3 et plus, l'employeur verse une participation obligatoire de 750 €."
  },
  {
    id: "m3q6",
    theme: "Reste à charge",
    question: "Comment calcule-t-on le reste à charge potentiel ?",
    options: ["Coût de la formation − NPEC", "NPEC − 750 €", "Coût de la formation + NPEC", "NPEC − coût de la formation"],
    answer: 0,
    explication: "Reste à charge potentiel = coût de la formation CFA − NPEC. Si le coût dépasse le NPEC, la différence n'est pas financée par l'OPCO."
  },
  {
    id: "m3q7",
    theme: "Reste à charge",
    question: "Si le coût de la formation est inférieur ou égal au NPEC, y a-t-il un reste à charge ?",
    options: ["Non, aucun reste à charge", "Oui, toujours 500 €", "Oui, 750 €", "Oui, la moitié du coût"],
    answer: 0,
    explication: "Quand le coût de la formation ne dépasse pas le NPEC, l'OPCO couvre tout : il n'y a pas de reste à charge."
  },
  {
    id: "m3q8",
    theme: "Participation employeur",
    question: "Quand l'employeur verse sa participation obligatoire de 750 €, combien verse l'OPCO ?",
    options: ["NPEC − 750 €", "Le NPEC en totalité", "Le coût total de la formation", "750 €"],
    answer: 0,
    explication: "La participation employeur vient en déduction : l'OPCO verse le NPEC moins les 750 € payés par l'employeur."
  },
  {
    id: "m3q9",
    theme: "Participation employeur",
    question: "Un apprenti prépare un CAP. L'employeur doit-il verser une participation obligatoire ?",
    options: ["Non, le CAP est inférieur à Bac+3", "Oui, 750 €", "Oui, 500 €", "Oui, si le contrat dure plus de 12 mois"],
    answer: 0,
    explication: "La participation obligatoire ne concerne que les diplômes de niveau Bac+3 et plus. Le CAP en est donc exempté."
  },

  // --- Cas 1 : CAP Boulanger ---
  {
    id: "m3q10",
    theme: "Cas 1 · CAP Boulanger",
    question: "CAP Boulanger : coût formation 6 000 €, NPEC 6 000 €. Quelle est la part financée par l'OPCO ?",
    options: ["6 000 €", "5 250 €", "3 000 €", "0 €"],
    answer: 0,
    explication: "Le coût (6 000 €) est égal au NPEC (6 000 €) : l'OPCO finance la totalité, soit 6 000 €."
  },
  {
    id: "m3q11",
    theme: "Cas 1 · CAP Boulanger",
    question: "CAP Boulanger (NPEC 6 000 €, coût 6 000 €) : quelle est la participation obligatoire de l'employeur ?",
    options: ["Aucune, le CAP est < Bac+3", "750 €", "500 €", "1 000 €"],
    answer: 0,
    explication: "Le CAP est un diplôme inférieur à Bac+3 : aucune participation obligatoire de l'employeur."
  },
  {
    id: "m3q12",
    theme: "Cas 1 · CAP Boulanger",
    question: "CAP Boulanger : coût 6 000 €, NPEC 6 000 €. Y a-t-il un reste à charge ?",
    options: ["Non, aucun", "Oui, 500 €", "Oui, 750 €", "Oui, 1 000 €"],
    answer: 0,
    explication: "Coût (6 000 €) − NPEC (6 000 €) = 0 € : pas de reste à charge."
  },

  // --- Cas 2 : BP Coiffure ---
  {
    id: "m3q13",
    theme: "Cas 2 · BP Coiffure",
    question: "BP Coiffure : coût formation 8 500 €, NPEC 8 000 €. Quelle est la part financée par l'OPCO ?",
    options: ["8 000 €", "8 500 €", "7 250 €", "7 750 €"],
    answer: 0,
    explication: "L'OPCO finance dans la limite du NPEC, soit 8 000 €. Les 500 € au-delà ne sont pas couverts."
  },
  {
    id: "m3q14",
    theme: "Cas 2 · BP Coiffure",
    question: "BP Coiffure (niveau Bac+2) : quelle est la participation obligatoire de l'employeur ?",
    options: ["Aucune, le diplôme est < Bac+3", "750 €", "500 €", "250 €"],
    answer: 0,
    explication: "Le BP Coiffure est de niveau Bac+2, donc inférieur à Bac+3 : pas de participation obligatoire."
  },
  {
    id: "m3q15",
    theme: "Cas 2 · BP Coiffure",
    question: "BP Coiffure : coût 8 500 €, NPEC 8 000 €. Quel est le reste à charge potentiel ?",
    options: ["500 €", "Aucun", "750 €", "1 000 €"],
    answer: 0,
    explication: "Coût (8 500 €) − NPEC (8 000 €) = 500 € de reste à charge potentiel."
  },

  // --- Cas 3 : Licence Pro Métiers du bois ---
  {
    id: "m3q16",
    theme: "Cas 3 · Licence Pro Bois",
    question: "Licence Pro Métiers du bois (Bac+3) : coût 9 000 €, NPEC 8 000 €. Quelle est la part financée par l'OPCO ?",
    options: ["7 250 €", "8 000 €", "9 000 €", "6 000 €"],
    answer: 0,
    explication: "Diplôme Bac+3 : l'employeur verse 750 €. L'OPCO verse donc NPEC − 750 € = 8 000 − 750 = 7 250 €."
  },
  {
    id: "m3q17",
    theme: "Cas 3 · Licence Pro Bois",
    question: "Licence Pro Métiers du bois (Bac+3) : quelle est la participation obligatoire de l'employeur ?",
    options: ["750 €", "Aucune", "500 €", "1 000 €"],
    answer: 0,
    explication: "La licence professionnelle est un diplôme Bac+3 : l'employeur doit verser la participation obligatoire de 750 €."
  },
  {
    id: "m3q18",
    theme: "Cas 3 · Licence Pro Bois",
    question: "Licence Pro Métiers du bois : coût 9 000 €, NPEC 8 000 €. Quel est le reste à charge potentiel ?",
    options: ["1 000 €", "500 €", "750 €", "Aucun"],
    answer: 0,
    explication: "Coût (9 000 €) − NPEC (8 000 €) = 1 000 € de reste à charge potentiel."
  },
  {
    id: "m3q19",
    theme: "Cas 3 · Licence Pro Bois",
    question: "Pourquoi l'OPCO ne verse-t-il que 7 250 € pour la Licence Pro alors que le NPEC est de 8 000 € ?",
    options: ["Car la participation employeur de 750 € est déduite", "Car le contrat ne dure que 12 mois", "Car le CFA a fait une remise", "Car la Région complète la différence"],
    answer: 0,
    explication: "Pour un diplôme ≥ Bac+3, les 750 € versés par l'employeur se déduisent du NPEC : 8 000 − 750 = 7 250 €."
  },

  // --- Cas 4 : Master Artisanat d'art ---
  {
    id: "m3q20",
    theme: "Cas 4 · Master Artisanat d'art",
    question: "Master Métiers de l'artisanat d'art (Bac+5) : coût 10 000 €, NPEC 8 500 €. Quelle est la part financée par l'OPCO ?",
    options: ["7 750 €", "8 500 €", "10 000 €", "7 250 €"],
    answer: 0,
    explication: "Bac+5 ⇒ participation employeur de 750 €. OPCO = NPEC − 750 € = 8 500 − 750 = 7 750 €."
  },
  {
    id: "m3q21",
    theme: "Cas 4 · Master Artisanat d'art",
    question: "Master Artisanat d'art (Bac+5) : quelle est la participation obligatoire de l'employeur ?",
    options: ["750 €", "Aucune", "1 500 €", "850 €"],
    answer: 0,
    explication: "Le Master est un diplôme Bac+5, donc ≥ Bac+3 : participation obligatoire de 750 €."
  },
  {
    id: "m3q22",
    theme: "Cas 4 · Master Artisanat d'art",
    question: "Master Artisanat d'art : coût 10 000 €, NPEC 8 500 €. Quel est le reste à charge potentiel ?",
    options: ["1 500 €", "1 000 €", "750 €", "500 €"],
    answer: 0,
    explication: "Coût (10 000 €) − NPEC (8 500 €) = 1 500 € de reste à charge potentiel."
  },

  // --- Cas 5 : BTS Métiers de la pierre ---
  {
    id: "m3q23",
    theme: "Cas 5 · BTS Métiers de la pierre",
    question: "BTS Métiers de la pierre (Bac+2) : coût 9 500 €, NPEC 9 000 €. Quelle est la part financée par l'OPCO ?",
    options: ["9 000 €", "9 500 €", "8 250 €", "8 000 €"],
    answer: 0,
    explication: "L'OPCO finance à hauteur du NPEC : 9 000 €. Pas de déduction car le BTS est < Bac+3."
  },
  {
    id: "m3q24",
    theme: "Cas 5 · BTS Métiers de la pierre",
    question: "BTS Métiers de la pierre (Bac+2) : quelle est la participation obligatoire de l'employeur ?",
    options: ["Aucune, le BTS est < Bac+3", "750 €", "500 €", "950 €"],
    answer: 0,
    explication: "Le BTS est un diplôme de niveau Bac+2, inférieur à Bac+3 : pas de participation obligatoire."
  },
  {
    id: "m3q25",
    theme: "Cas 5 · BTS Métiers de la pierre",
    question: "BTS Métiers de la pierre : coût 9 500 €, NPEC 9 000 €. Quel est le reste à charge potentiel ?",
    options: ["500 €", "Aucun", "1 000 €", "750 €"],
    answer: 0,
    explication: "Coût (9 500 €) − NPEC (9 000 €) = 500 € de reste à charge potentiel."
  },

  // --- Questions de synthèse ---
  {
    id: "m3q26",
    theme: "Synthèse",
    question: "Parmi ces diplômes, lequel déclenche la participation obligatoire de l'employeur ?",
    options: ["Licence professionnelle", "CAP", "BTS", "Brevet Professionnel"],
    answer: 0,
    explication: "Seuls les diplômes de niveau Bac+3 et plus (licence, master…) déclenchent la participation de 750 €. CAP, BP et BTS sont en dessous."
  },
  {
    id: "m3q27",
    theme: "Synthèse",
    question: "Un CFA facture 7 000 € pour une formation dont le NPEC est de 7 500 € (diplôme CAP). Que se passe-t-il ?",
    options: ["L'OPCO finance les 7 000 €, pas de reste à charge", "Reste à charge de 500 €", "L'employeur paie 750 €", "L'OPCO verse 7 500 €"],
    answer: 0,
    explication: "Le coût (7 000 €) est inférieur au NPEC (7 500 €) : l'OPCO couvre la totalité du coût réel, sans reste à charge."
  },
  {
    id: "m3q28",
    theme: "Synthèse",
    question: "Quels sont les 3 éléments à vérifier pour calculer le financement d'une formation en apprentissage ?",
    options: ["Coût CFA, NPEC, niveau du diplôme", "Salaire, âge, durée du contrat", "Région, secteur, effectif de l'entreprise", "Coût CFA, salaire de l'apprenti, âge"],
    answer: 0,
    explication: "Le raisonnement se fait en 3 étapes : comparer coût CFA et NPEC (reste à charge), vérifier le niveau du diplôme (participation 750 € si ≥ Bac+3), en déduire la part OPCO."
  },

  // --- Nouveautés 2025 ---
  {
    id: "m3q29",
    theme: "Nouveautés 2025",
    question: "Depuis quand la participation obligatoire de 750 € de l'employeur s'applique-t-elle ?",
    options: ["Depuis le 1er juillet 2025", "Depuis 2019", "Depuis le 1er janvier 2024", "Elle n'est pas encore en vigueur"],
    answer: 0,
    explication: "Depuis le 1er juillet 2025, les employeurs versent 750 € pour tout contrat d'apprentissage visant une formation à partir de Bac+3 (niveaux 6 et 7)."
  },
  {
    id: "m3q30",
    theme: "Nouveautés 2025",
    question: "En cas de nouveau contrat conclu après la rupture du contrat initial, quelle participation doit verser le nouvel employeur (diplôme ≥ Bac+3) ?",
    options: ["200 €", "750 €", "Aucune", "375 €"],
    answer: 0,
    explication: "Une participation réduite à 200 € est prévue pour le nouvel employeur lorsqu'un nouveau contrat suit la rupture du contrat initial."
  },
  {
    id: "m3q31",
    theme: "Nouveautés 2025",
    question: "Comment est financé le système de l'apprentissage ?",
    options: ["Par la taxe d'apprentissage (0,68 %) intégrée à la contribution unique collectée par les URSSAF", "Par un impôt payé par les apprentis", "Uniquement par les Régions", "Par les frais d'inscription au CFA"],
    answer: 0,
    explication: "Le financement repose sur la taxe d'apprentissage (0,68 %), intégrée à la contribution unique à la formation professionnelle et à l'alternance, collectée par les URSSAF."
  },
  {
    id: "m3q32",
    theme: "Nouveautés 2025",
    question: "Depuis le 1er juillet 2025, que prévoit la réforme pour les formations dispensées à 80 % à distance ?",
    options: ["Une réduction de 20 % du NPEC", "Une majoration de 20 % du NPEC", "Leur interdiction en apprentissage", "Un financement intégral par l'État"],
    answer: 0,
    explication: "Les NPEC des formations à 80 % à distance sont réduits de 20 % (économie estimée à 30 M€/an). La réforme prévoit aussi la proratisation journalière des NPEC et un 4e versement avec solde de 10 %."
  }
],

  flashcards: [
  { id: "m3f1", recto: "Que signifie NPEC ?", verso: "Niveau de Prise En Charge : le montant maximal que l'OPCO finance pour une formation en apprentissage." },
  { id: "m3f2", recto: "Qui finance la formation de l'apprenti en CFA ?", verso: "L'OPCO (Opérateur de Compétences), dans la limite du NPEC." },
  { id: "m3f3", recto: "À partir de quel niveau de diplôme l'employeur paie-t-il une participation obligatoire ?", verso: "À partir de Bac+3 (licence, master…)." },
  { id: "m3f4", recto: "Quel est le montant de la participation obligatoire de l'employeur ?", verso: "750 € pour les diplômes de niveau Bac+3 et plus." },
  { id: "m3f5", recto: "Formule du reste à charge potentiel ?", verso: "Reste à charge = Coût de la formation CFA − NPEC (si le coût dépasse le NPEC)." },
  { id: "m3f6", recto: "Formule de la part OPCO quand le diplôme est ≥ Bac+3 ?", verso: "Part OPCO = NPEC − 750 € (participation employeur déduite)." },
  { id: "m3f7", recto: "Un CAP déclenche-t-il une participation employeur ?", verso: "Non : le CAP est inférieur à Bac+3, aucune participation obligatoire." },
  { id: "m3f8", recto: "Coût CFA ≤ NPEC : que finance l'OPCO ?", verso: "La totalité du coût réel de la formation. Aucun reste à charge." },
  { id: "m3f9", recto: "Cas CAP Boulanger : coût 6 000 €, NPEC 6 000 €. Résultat ?", verso: "OPCO : 6 000 € · Participation employeur : aucune · Reste à charge : aucun." },
  { id: "m3f10", recto: "Cas BP Coiffure (Bac+2) : coût 8 500 €, NPEC 8 000 €. Résultat ?", verso: "OPCO : 8 000 € · Participation : aucune (< Bac+3) · Reste à charge : 500 €." },
  { id: "m3f11", recto: "Cas Licence Pro Bois (Bac+3) : coût 9 000 €, NPEC 8 000 €. Résultat ?", verso: "OPCO : 7 250 € · Employeur : 750 € · Reste à charge : 1 000 €." },
  { id: "m3f12", recto: "Cas Master Artisanat d'art (Bac+5) : coût 10 000 €, NPEC 8 500 €. Résultat ?", verso: "OPCO : 7 750 € · Employeur : 750 € · Reste à charge : 1 500 €." },
  { id: "m3f13", recto: "Cas BTS Métiers de la pierre (Bac+2) : coût 9 500 €, NPEC 9 000 €. Résultat ?", verso: "OPCO : 9 000 € · Participation : aucune (< Bac+3) · Reste à charge : 500 €." },
  { id: "m3f14", recto: "Les 3 questions à se poser face à un cas de financement ?", verso: "1️⃣ Coût CFA vs NPEC → reste à charge ? 2️⃣ Diplôme ≥ Bac+3 → participation 750 € ? 3️⃣ Part OPCO = NPEC (− 750 € le cas échéant)." },
  { id: "m3f15", recto: "Participation employeur : 750 € ou 200 € ?", verso: "750 € pour tout contrat visant un diplôme ≥ Bac+3 (depuis le 01/07/2025). Réduite à 200 € pour le nouvel employeur en cas de nouveau contrat après rupture du contrat initial." },
  { id: "m3f16", recto: "D'où vient l'argent qui finance l'apprentissage ?", verso: "De la taxe d'apprentissage (0,68 %), intégrée à la contribution unique à la formation professionnelle et à l'alternance, collectée par les URSSAF." }
],

  fiches: [
  {
    titre: "🏛️ Les acteurs du financement",
    couleur: "peach",
    contenu: [
      { sous: "L'OPCO (Opérateur de Compétences)", texte: "C'est lui qui finance le coût de la formation en CFA, dans la limite du NPEC." },
      { sous: "Le CFA", texte: "Il facture le coût de la formation. Si ce coût dépasse le NPEC, il supporte un reste à charge potentiel." },
      { sous: "L'employeur", texte: "Il verse une participation obligatoire de 750 € uniquement si le diplôme préparé est de niveau Bac+3 ou plus." }
    ]
  },
  {
    titre: "📏 Le NPEC : Niveau de Prise En Charge",
    couleur: "mint",
    contenu: [
      { sous: "Définition", texte: "Montant maximal que l'OPCO peut financer pour une formation donnée." },
      { sous: "Règle clé", texte: "L'OPCO verse le plus petit des deux montants : coût réel de la formation ou NPEC." },
      { sous: "Exemple", texte: "Coût 6 000 € et NPEC 6 000 € (CAP Boulanger) → l'OPCO finance 6 000 €, tout est couvert." }
    ]
  },
  {
    titre: "💼 La participation obligatoire de l'employeur",
    couleur: "sky",
    contenu: [
      { sous: "Quand ?", texte: "Uniquement pour les diplômes de niveau Bac+3 et plus (licence pro, master…)." },
      { sous: "Combien ?", texte: "750 €. Ce montant vient en déduction du versement de l'OPCO : Part OPCO = NPEC − 750 €." },
      { sous: "Mémo", texte: "CAP, BP, BTS (< Bac+3) → rien à payer. Licence, Master (≥ Bac+3) → 750 €." }
    ]
  },
  {
    titre: "⚖️ Le reste à charge potentiel",
    couleur: "lilac",
    contenu: [
      { sous: "Formule", texte: "Reste à charge = Coût de la formation CFA − NPEC." },
      { sous: "Si coût ≤ NPEC", texte: "Aucun reste à charge : l'OPCO couvre tout." },
      { sous: "Si coût > NPEC", texte: "La différence n'est pas financée par l'OPCO (ex. : BP Coiffure, 8 500 − 8 000 = 500 €)." }
    ]
  },
  {
    titre: "🗂️ Tableau récapitulatif des 5 cas",
    couleur: "sand",
    table: {
      entetes: ["Cas", "Coût CFA", "NPEC", "Niveau", "OPCO", "Employeur", "Reste à charge"],
      lignes: [
        ["CAP Boulanger", "6 000 €", "6 000 €", "CAP", "6 000 €", "—", "—"],
        ["BP Coiffure", "8 500 €", "8 000 €", "Bac+2", "8 000 €", "—", "500 €"],
        ["Licence Pro Bois", "9 000 €", "8 000 €", "Bac+3", "7 250 €", "750 €", "1 000 €"],
        ["Master Artisanat d'art", "10 000 €", "8 500 €", "Bac+5", "7 750 €", "750 €", "1 500 €"],
        ["BTS Métiers de la pierre", "9 500 €", "9 000 €", "Bac+2", "9 000 €", "—", "500 €"]
      ]
    }
  },
  {
    titre: "🧠 La méthode en 3 étapes",
    couleur: "rose",
    contenu: [
      { sous: "1️⃣ Comparer", texte: "Coût CFA vs NPEC → le dépassement éventuel = reste à charge potentiel." },
      { sous: "2️⃣ Vérifier le diplôme", texte: "Niveau ≥ Bac+3 ? → participation employeur de 750 €." },
      { sous: "3️⃣ Calculer la part OPCO", texte: "Part OPCO = min(coût, NPEC), moins 750 € si la participation employeur s'applique." }
    ]
  },
  {
    titre: "🆕 Les nouveautés du 1er juillet 2025",
    couleur: "mint",
    contenu: [
      { sous: "Participation employeur", texte: "750 € pour toute formation à partir de Bac+3 (niveaux 6 et 7). Réduite à 200 € pour le nouvel employeur après rupture du contrat initial." },
      { sous: "Baisse des NPEC", texte: "Proratisation journalière (au lieu de mensuelle) · réduction de 20 % pour les formations à 80 % à distance · 4ᵉ versement avec un solde de 10 % pour limiter les trop-perçus." },
      { sous: "Rentrée 2026", texte: "Plafond de 12 000 € étendu au niveau 5 (Bac+2) · création de bouquets de certifications par métier et niveau pour harmoniser les NPEC." },
      { sous: "Origine des fonds", texte: "Taxe d'apprentissage de 0,68 %, intégrée à la contribution unique collectée par les URSSAF." }
    ]
  }
]
});
