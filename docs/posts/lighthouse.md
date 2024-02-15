---
title: Lighthouse
date: 2023-01-10
category:
  - outils
tag:
  - performance
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

Auditer, améliorer et monitorer le plus régulièrement et automatiquement possible son site web constituent la clé d'un bon référencement par les moteurs de recherche. De fait, un site lent, ne respectant pas les standards d'accessibilité ou les bonnes pratiques de développement aura peu de chances de figurer dans les 10 premiers sites affichés lors d'une recherche sur Google. Rassurez-vous : une bonne (éco-) conception et un peu de bons sens (pas d'images qui pèsent 5 mo...) vous permettront assez facilement d'obtenir des scores corrects. J'en ai eu récemment un bon exemple lors de la refonte d'un site web écrit initialement sous Wordpress : la performance initiale était à peine de 60/100. Après quelques heures d'investigation et de paramétrage (cache, poids des images, etc.), j'étais remonté à plus de 70 ; sa refonte en vue.js m'a amené plus tard à 95/100...

### Lighthouse, a minima
Google a mis à disposition des développeurs, depuis plusieurs années, différents outils qui vous aideront à mieux analyser la performance de votre site web. Par exemple, [Lighthouse] est fourni dans le navigateur Chrome (> Plus d'outils > Outils de développement > Lighthouse), vous permettant de lancer un test "à la volée" sur la page affichée. Cinq scores sont disponibles :

- **Performance** : six métriques principales (cf. ci-dessous) vous donneront une mesure *spot* de la performance de votre site. Chacune a un [poids] plus ou moins important dans le score global.
- **Accessibilité** : un site se doit d'être lisible, ergonomique, utilisable pour toute personne le visitant. Par exemple, une police de caractères trop petite ou trop peu de contraste sur un bouton sont des défauts à corriger. Le W3C a édité une [norme] qui évolue régulièrement.
- **Bonnes pratiques** : développer un site web repose sur des méthodologies éprouvées. Que ce soit du bon usage des balises HTML, de la résolution des images servies ou de la sécurité du site, vous devez appliquer les [bonnes pratiques] reconnues par l'industrie.
- **SEO** : les vérifications effectuées par ces tests vous assurent que votre site suit les optimisations minimales nécessaires à une bonne [indexation] par les moteurs de recherche. 
- **PWA** : enfin, le score [Progressive Web App] valide les différents aspects liés à cette technologie, encore trop peu mise en oeuvre.
<br><br>
![IMG](/assets/img/lighthouse.webp "Scores Lighthouse sur la page d'accueil du blog")
<br>

Lighthouse est vraiment l'outil qu'il vous faut a minima utiliser pour maintenir la qualité perçue de votre site web, d'autant plus qu'il est facilement intégrable dans une chaîne CI-CD. D'ailleurs, la vraie force de l'outil réside dans les recommandations proposées : en les suivant, vous êtes certain de faire progresser votre score sur chacune des dimensions. Le *graal* est évidemment de "topper" les 4 premiers indicateurs à 100, comme par exemple sur cette [page]. Si vous voulez constater la mise en oeuvre sur votre propre site de divers endroits du monde, je vous conseille de tester [Lighthouse Metrics].

### "Creusons" les indicateurs de la performance
Il est intéressant de bien comprendre chacun des indicateurs suivants, ce qui vous donnera les clés pour les améliorer et, donc, obtenir une performance se rapprochant des 100 points :

- **First Contentful Paint** : FCP mesure le nombre de secondes nécessaires au navigateur pour afficher le premier objet du [DOM] (ex : une image), une fois que l'usager a demandé la page en question. Votre site sera considéré comme rapide si le FCP est inférieur à 1,8 seconde, lent au-dessus de 3 secondes. Le chargement des fontes de caractères impacte particulièrement cet indicateur, raison pour laquelle le format [WOFF] est de plus en plus préféré.
- **Speed Index** :	SI mesure le nombre de secondes nécessaires au navigateur pour afficher un contenu durant le chargement d'une page. Lighthouse capture une vidéo de la page se chargeant dans le navigateur puis calcule la progression visuelle entre les différentes *frames*. SI sera bon si sa mesure est inférieure à 3,4 secondes, mauvais si elle dépasse 5,8 secondes. L'une des manières d'améliorer cet indicateur est de réduire le temps d'exécution du code javascript.
- **Largest Contentful Paint** : LCP mesure le nombre de secondes nécessaires au navigateur pour afficher l'image ou le bloc de texte le plus large de la page, dans la surface visible par l'usager (*viewport*) qui varie en fonction de la taille physique de l'écran. Un bon score doit être inférieur à 2,5 secondes ; un mauvais dépasse les 4 secondes. L'optimisation des images, des fontes de caractères, du code JS ou CSS contribuera à l'améliorer.
- **Time to Interactive**	: TTI mesure le nombre de secondes nécessaires à une page pour être "totalement interactive". Trois critères sont pris en compte par Lighthouse pour déterminer cet état : la page affiche du contenu "utile" (mesuré par l'indicateur FCP), les [*event handlers*] sont accessibles pour la plupart des éléments visibles de la page et la page est capable de répondre aux interactions de l'utilisateur en moins de 50 millisecondes. On considérera que le TTI d'une page est correct en dessous de 3,8 secondes, mauvais au dessus de 7,3 secondes. Un bon remède à un TTI médiocre est de différer ou, mieux, supprimer le chargement de code javascript.
- **Total Blocking Time**	: TBT mesure le temps qu'une page reste "bloquée" avant de répondre à une interaction de l'utilisateur (clic souris, touche pressée, appui sur l'écran). Toute tâche qui requiert plus de 50 millisecondes (ms) pour s'exécuter est considérée comme trop longue. La somme est calculée en additionnant la "portion bloquante" (nombre de ms au dessus de 50) de toutes les "longues" tâches entre les indicateurs FCP et TTI. TBT s'avérera correct en dessous de 200 ms, lent au dessus de 600 ms.
- **Cumulative Layout Shift** :	CLS mesure la stabilité visuelle d'une page. Il augmente à chaque changement visuel inattendu qui dégrade l'expérience utilisateur. Un bon CLS est inférieur à 0,1, un mauvais est supérieur à 0,25. Une bonne façon de l'améliorer est, par exemple, de fixer la taille des images et des vidéos.

D'autres indicateurs existent comme le **FID** (First Input Delay) qui mesure la durée maximum potentielle entre une interaction demandée par l'usager (ex : un clic sur un bouton) et la capacité réelle du navigateur à répondre à cette demande. 

Comme vous pouvez le constater, ces indicateurs ne sont pas toujours simples à appréhender et les mesures dépendent de facteurs comme la puissance du processeur ou le débit d'accès à Internet. Pour cette raison, Lighthouse affiche en bas des résultats un cartouche décrivant l'environnement dans lequel les tests sont effectués :
<br><br>
![IMG](/assets/img/mesures_lighthouse.webp "Références de mesures Lighthouse")
<br>

### Speedlify de Zach Leatherman
Sinon, le créateur du SSG Eleventy met à disposition l'outil [speedlify] que j'ai moi-même instancié sur les valeurs du [CAC40]. Zach a utilisé les API mises à disposition par Google pour automatiser la mesure des scores Lighthouse. L'outil permet de suivre dans le temps la performance de sites externes (ou de ses propres sites, bien entendu) et il est toujours instructif de constater le chemin qui reste à parcourir, même pour des entreprises renommées :wink:



[> Accueil](/) [> Tous les articles](/articles)

[Core Web Vitals]: https://web.dev/vitals-tools/
[poids]: https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/
[Lighthouse]: https://developer.chrome.com/docs/lighthouse/overview/
[Lighthouse Metrics]: https://lighthouse-metrics.com/
[speedlify]: https://www.zachleat.com/web/speedlify/
[bonnes pratiques]: https://developer.chrome.com/docs/lighthouse/best-practices/
[CAC40]: https://speedlifycac40.andretonic.fr/
[page]: https://www.speedlify.dev/eleventy-starters/
[Progressive Web App]: https://fr.wikipedia.org/wiki/Progressive_web_app
[indexation]: https://www.seo.fr/definition/seo-definition
[norme]: https://www.w3.org/WAI/standards-guidelines/
[DOM]: https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model
[WOFF]: https://fr.wikipedia.org/wiki/Web_Open_Font_Format
[*event handlers*]: https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers