# 🎓 Quiz Apprentissage — Le financement de la formation en apprentissage

Application web pédagogique et ludique pour réviser le **financement de la formation en
apprentissage** (Brevet de Maîtrise, bloc « Recruter, accueillir et former un apprenti, un alternant »).

## 🚀 Utilisation

Aucune installation : ouvrez simplement `index.html` dans un navigateur,
ou hébergez le dossier tel quel (GitHub Pages, etc.).

## 🧩 Les 4 modes

| Mode | Description |
|---|---|
| 🎯 **Quiz** | Sessions de 10 QCM tirés au hasard, feedback immédiat et explication à chaque réponse |
| 🃏 **Flashcards** | Cartes recto-verso à retourner, auto-évaluation « Je savais / À revoir » |
| 📚 **Fiches** | Fiches de révision synthétiques + tableau récapitulatif des 5 cas pratiques |
| 📊 **Progression** | Maîtrise globale, taux de réussite, répartition par boîte de Leitner, remise à zéro |

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

## 📂 Structure

- `index.html` — structure de la page
- `styles.css` — thème clair (tons pastel chauds)
- `data.js` — questions QCM, flashcards et fiches (contenu de l'Activité 3)
- `app.js` — logique : tirage pondéré, système Leitner, stockage cookies
