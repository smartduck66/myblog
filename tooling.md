# Tooling
---

Pour formater un document rapidement via l'extension prettier, la commande de touches ALT + F est configurée

Pour mettre à jour les modules NPM (npm uninstall 'module' pour la désinstallation) :
- npm install npm@latest -g (dernière version NPM)
- npm -g upgrade typescript (update typescript)
- npx npm-check-updates (vérification des modules à migrer SANS les mettre à jour)
- npm install (migration)
- npm list vue (check dernière version de vue, par exemple)

Pour créer son squelette d'application TS :
- npm create vite@latest bel_vue -- --template vue-ts

Pour développer et tester en local :
- npm run docs:dev
- http://localhost:5173 lance le vite dev server (on bénéficie immédiatement du HMR, Hot Module Reload)

Pour construire le site statique (->dist) qui sera publié sur Netlify :
- npm run docs:build pour un preview en local
- git add -A
- git commit -m "new fonctions"
- git push
- Netlify le publie automatiquement en production sur https://glittery-froyo-469226.netlify.app/
- Plugins sitemap/submit sitemap installés sous netlify pour générer automatiquement, à chaque build, sitemap.xml (puis diffuser automatiquement à Google & yandex)

---

Pour créer son repo GIT, utiliser l'interface de GitHub puis en local :
- git init
- git add -A
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/smartduck66/fa2v.git
- git push -u origin main

---


