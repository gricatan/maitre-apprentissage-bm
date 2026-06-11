# 🎓 Quiz Apprentissage — Réviser le droit de l'apprentissage

Application web pédagogique et ludique pour réviser le bloc **« Recruter, accueillir et
former un apprenti, un alternant »** du Brevet de Maîtrise (CMA Lyon-Rhône).

## 🚀 Utilisation

Aucune installation : ouvrez simplement `index.html` dans un navigateur,
ou hébergez le dossier tel quel (InfinityFree, GitHub Pages, etc. — site 100 % statique).

## 🧩 Les 4 modes

| Mode | Description |
|---|---|
| 🎯 **Quiz** | Sessions de 10 QCM max, feedback immédiat et explication à chaque réponse |
| 🃏 **Flashcards** | Cartes recto-verso à retourner, auto-évaluation « Je savais / À revoir » |
| 📚 **Fiches** | Fiches de révision synthétiques + tableaux récapitulatifs des cas pratiques |
| 📊 **Progression** | Maîtrise globale et par thématique, taux de réussite, boîtes de Leitner, remise à zéro |

Chaque mode propose un **sélecteur de thématique** : on révise un module précis,
ou tout le programme avec « 🎲 Tout mélanger ».

## 📖 Les 6 thématiques

1. 📝 Apprentissage, professionnalisation ou stage ? (+ diplômes, histoire)
2. 🤝 Les partenaires de l'apprentissage (CMA, OPCO, CFA, DREETS…)
3. 💶 Le financement de la formation (NPEC, participation employeur, reste à charge)
4. ✍️ Les conditions du contrat (âge, maître d'apprentissage, forme, durée)
5. ⚖️ Obligations et missions des acteurs (employeur / CFA / apprenti)
6. 💰 Rémunération et aides à l'embauche (% SMIC, aide unique, aide exceptionnelle)

## 🧠 Principes pédagogiques appliqués (issus de la synthèse du cours)

- **Pratique de récupération** : se tester est plus efficace que relire (Roediger & Karpicke).
- **Répétition espacée / boîtes de Leitner** : chaque question a une boîte (1 à 5).
  Une bonne réponse fait monter d'une boîte, une erreur ramène en boîte 1.
  Le tirage aléatoire est **pondéré** : les questions en boîte basse (ratées ou nouvelles)
  reviennent beaucoup plus souvent que celles maîtrisées.
- **L'erreur comme levier** : feedback immédiat, bienveillant, toujours accompagné d'une explication.
- **Apprentissage distribué** : sessions courtes (10 questions / 8 cartes) à répéter régulièrement.
- **Double encodage & charge cognitive réduite** : une question à la fois, repères visuels et couleurs.

## 💾 Sauvegarde

La progression est enregistrée dans les **cookies** du navigateur (avec secours
`localStorage`), conservée 1 an. Aucune donnée ne quitte votre machine.

## 🔍 Page de relecture `/test`

La page `/test/` (fichier `test/index.html`) permet à l'auteur de **relire toutes les
questions et flashcards** : la bonne réponse est surlignée, l'explication affichée.
Un clic sur « Marquer comme validée » enregistre la validation **dans les cookies**
(clé séparée de la progression d'apprentissage). Filtre par thématique et mode
« n'afficher que le restant à vérifier » inclus.

## 📂 Structure

- `index.html` — structure de la page
- `styles.css` — thème clair (tons pastel chauds)
- `data/module*.js` — un fichier de données par thématique (questions, flashcards, fiches)
- `app.js` — logique : sélection de thématique, tirage pondéré, système Leitner, stockage cookies

Pour ajouter une thématique : créer `data/module7-xxx.js` sur le modèle des autres
(`window.MODULES.push({...})`) et ajouter la balise `<script>` correspondante dans `index.html`.
