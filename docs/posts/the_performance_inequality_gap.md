---
title: Le fossé de l'inégalité des performances
date: 2023-02-26
category:
  - javascript
tag:
  - performance
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

<br>

![IMG](/assets/img/UX_hierarchy.webp "Hiérarchie UX")
<br><br>
Cette pyramide a été présentée lors de la conférence [Google I/O de 2018]. Elle démontrait que la vitesse de chargement d'une page était (et reste toujours) le souci **numéro 1** de tout utilisateur du Web, qu'il soit sur un PC connecté en fibre optique ou sur un mobile surfant en 3G.

Fin 2022, [Alex Russell] qui a travaillé 13 ans sur Chrome et maintenant sur Edge chez Microsoft, faisait le point sur le *Web performance inegality gap* à la conférence [performance.now()] d'Amsterdam. Il argue que "le digital étant devenu la nouvelle norme de notre Société, y accéder lentement est un facteur d'exclusion". Ce constat a d'ailleurs été dressé il y a plus de 20 ans en France, pour ceux qui possédait une liaison ADSL "poussive" (car trop éloignés du fameux répartiteur) ou qui, dorénavant, n'ont pas accès à une connexion fibre optique...

Mais la démonstration d'Alex Russell prend le problème par l'autre bout, c'est-à-dire par le **contenu auquel on souhaite accéder**. Et là, les chiffres sont sans appel : "Pour que [75%] des utilisateurs mondiaux puissent interagir avec une page Web en moins de 5 secondes lors de son premier chargement, son contenu ne doit pas excéder plus de **150 ko** de HTML/CSS/fontes et **300 à 350 ko** de Javascript (gzipped). Le problème est que les sites Web continuent d'envoyer davantage de scripts à plus de 80% des utilisateurs mondiaux, ce qui contribue à augmenter le fossé entre ceux qui possèdent la bonne technologie (PC, mobile et réseau de qualité) et ceux qui n'ont pas cette chance. C'est donc une crise éthique pour le *front-end*."

#### Tout le monde ne peut pas s'offrir un iPhone 14 ou un *desktop* doté d'un processeur 16 coeurs
Alex Russell se sert de la télémétrie du navigateur Edge pour constater que la moitié de ses usagers possèdent un PC *low-end* :

- Disque dur (pas de SSD, plus rapide)
- CPU avec 2 à 4 coeurs
- 4 Go de mémoire vive ou moins

Concernant le débit moyen de la connexion Internet fixe, il reprend les chiffres du profil "câble" de [WebPageTest], soit **5 Mbps** (latence de 25 ms), avec un chiffre encore plus mauvais pour les zones rurales.

Côté Mobile, l'équipement *moyen* représentatif posséde les caractéristiques suivantes (ex : Samsung Galaxy A50 ou Nokia G11) :

- Processeur ARM 8 coeurs, lent, peu de cache mémoire 
- 4 Go de mémoire vive
- 4G

Le réseau mobile d'accès, quant à lui, fournit en moyenne une bande passante de **9 Mbps** (latence de 170 ms).

#### Le fossé de l'inégalité des performances s'accroit
Ces chiffres doivent nous faire réfléchir. Que l'on soit développeur, designer, Product Manager ou sponsor d'un produit digital. Encore plus quand l'on intervient dans la sphère publique. En effet, la plupart des services publics, dans le Monde, sont ou vont être accessibles digitalement. Songez à la complexité de déclarer ses impôts en "mode papier", depuis quelques années.

Alex Russell nous donne un exemple édifiant d'une expérience récente avec CA.gov, le site des services publics de l'Etat de Californie où il réside. Il constate début novembre sa subite lenteur, analyse qu'il est développé avec React et Next.js et "toute une panoplie d'horreurs modernes". Il en avertit les responsables qui décident de revenir promptement à un développement *HTML-first*, ce qui améliore drastiquement les performances de ce site vital pour les quelques 40 millions de californiens.

#### Notre aveuglement (?) à recourir systématiquement à un framework Javascript
Ni une, ni deux, Alex Russell embraye sur un article qui a fait couler beaucoup d'encre depuis quelques semaines. En effet, [The market for Lemons] est une charge en règle contre le "trop-plein" de Javascript en général, et les frameworks JS en particulier. Ce n'est certes pas nouveau et de nombreuses voix s'élèvent depuis plusieurs années contre la "tyrannie" des *Single Page Applications* qui encombrent le client et ont **détourné le Web de ses fondamentaux**. Mais, cette fois, notre sémillant architecte va beaucoup plus loin et parle "d'une décennie perdue" et quasiment d'un complot de ces vendeurs de solutions. Notons tout de même que quelques outils plus *light* trouvent grâce à ses yeux tels que Vue, Svelte ou encore Eleventy.

Sans prendre parti dans ce débat très clivant, il est bon de rappeler quelques faits :

- La répartition des tâches entre **client et serveur** est aussi vieux que l'informatique. L'antique terminal IBM était "bête comme ses pieds", puis l'ordinateur personnel est venu bousculer le *statu quo* à partir de 1975, suivi du déploiement massif des applications client "lourd"/serveur dans les années 80/90... pour revenir à plus "d'équité" depuis le début de ce siècle avec la déferlante des architectures Web. Bref, tout est affaire d'équilibre sur les 3 "morceaux" immuables de la chaîne que sont le client, le réseau et le serveur.
- Choisir un framework, des composants sur étagère ou n'importe quelle librairie qui vous permet d'améliorer votre productivité de développeur n'est pas déraisonnable... à partir du moment **où vous maitrisez suffisamment les sous-jacents** pour prendre une décision éclairée. Utiliser un framework JS qui facilite la construction de composants Web sans savoir bien coder en HTML, CSS et Javascript, c'est comme conduire sans permis. Cela va "rouler" jusqu'à la sortie de route, i.e. l'application trop lente, impossible à maintenir.
- Tout développeur doit savoir quel outil utiliser pour répondre au besoin exprimé. Pourquoi utiliser Angular, React ou Vue quand une solution *Jamstack* telle qu'Astro ou VitePress suffit ?
- Même si HTML et CSS ne sont pas considérés comme des langages de programmation, ils ont fortement évolué depuis 15 ans. Nombre de sites Web ne nécessitent pas d'utiliser massivement Javascript. Il suffit, par contre, de faire l'effort **d'étudier un peu plus** ces "langages déclaratifs" afin de mieux en tirer parti... et d'obtenir des sites plus légers.
- Dans la même veine, la plateforme Web (i.e. les navigateurs) évolue régulièrement en offrant de nouvelles API qui peuvent remplacer avantageusement des librairies externes. Fetch ou la [Web Authentication API] en sont de bons exemples. **#usetheplatform**

#### Conclusion
Le navigateur NCSA Mosaic fête ses 30 ans. Il a en effet été publié en 1993, alors que le World Wide Web développé par le CERN ne comptait que 200 sites, 3 ans après son lancement. Cette révolution portait déjà en son sein "le fossé de l'inégalité des performances", en partant du fait que le Monde entier allait pouvoir se connecter à Internet et bénéficier de ses multiples apports... **mais sans posséder** justement les mêmes moyens d'accès.

Cette situation n'est pas prête de s'améliorer, comme Alex Russell l'a abondamment démontrée, statistiques à l'appui. La bonne nouvelle est que tous les outils existent pour respecter la limite des quelques 500 ko par page. Je vous encourage d'ailleurs à parcourir le billet [Lighthouse] que j'avais commis en janvier dernier :wink:


[Google I/O de 2018]: https://web.dev/web-performance-made-easy/
[Alex Russell]: https://infrequently.org/about-me/
[performance.now()]: https://infrequently.org/2022/12/performance-baseline-2023/
[75%]: https://support.speedcurve.com/docs/performance-for-product-managers#75th-percentile
[WebPageTest]: https://www.webpagetest.org
[The market for Lemons]: https://infrequently.org/2023/02/the-market-for-lemons/
[Web Authentication API]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API
[Lighthouse]: /posts/lighthouse.md

[> Accueil](/) [> Tous les articles](/articles)