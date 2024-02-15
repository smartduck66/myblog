# Ce blog personnel (www.andretonic.fr) s'appuie sur vitepress

# Derniers travaux :
17/11/2022 : initialisation (https://vitepress.vuejs.org/)
18/11/2022 : installation d'un plugin complémentaire pour faciliter la mise en place du blog (vitepress-blog-util)
20/11/2022 : formulaire de contact
19/12/2022 : mise en ligne - add GA 4 - https://github.com/vuejs/vitepress/issues/1131
15/02/2024 : mise à jour technique (suppression de yarn, passage à npm, suppression de vitepress-blog-util)
---

Pour créer son repo GIT, utiliser l'interface de GitHub puis en local :
. git init
. git add -A
. git commit -m "first commit"
. git branch -M main
. git remote add origin https://github.com/smartduck66/myblog.git
. git push -u origin main

Pour développer et tester en local :
. npm run docs:dev
. http://localhost:5173 lance le vite dev server (on bénéficie immédiatement du HMR, Hot Module Reload)


Pour construire le site statique (->dist) qui sera publié sur Netlify :
. npm run docs:build pour un preview en local
. git add -A
. git commit -m "new fonctions"
. git push
. Netlify le publie automatiquement en production sur https://glittery-froyo-469226.netlify.app/
. Plugins sitemap/submit sitemap installés sous netlify pour générer automatiquement, à chaque build, sitemap.xml (puis diffuser automatiquement à Google & yandex)


Installation de dépendances :
. npm add -D vitepress
. npm i sass
. npm i sharp (package utilisé dans le script webp.js pour transformer en masse les images png/jpg en webp)

---
Caractères accentués avec le pavé numérique :

    À : «Alt» + 0192
    Ç : «Alt» + 0199
    É : «Alt» + 0201
    È : «Alt» + 0200
    Ù : «Alt» + 0217

Nouvelle extension IDE VSCODE installée : Volar
Pour formater un document rapidement via l'extension prettier, la commande de touches ALT + F est configurée