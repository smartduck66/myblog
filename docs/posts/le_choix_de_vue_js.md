---
title: Le choix de Vue.js
date: 2022-08-30
category:
  - framework
tag:
  - javascript
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

Chose promise, chose due ! Je vous avais dévoilé dans un précédent billet mon intention d'utiliser un framework JS et mon choix s'est donc arrêté sur Vue.js, l'un des rares frameworks à avoir un nom bien français :wink: En fait, je n'ai pas immédiatement démarré l'année 2022 sur Vue car j'ai d'abord préféré consolider mes bases sur le tryptique "HTML-CSS-JS" en portant mon [logiciel de données climatiques] écrit initialement en C++. J'ai tout de même utilisé la librairie [Bulma] qui m'a facilité la vie dans l'écriture de mon code CSS.

#### C'est parti !
Contrairement à mon [apprentissage du web] débuté l'année dernière, j'ai préféré suivre le [tutoriel] du site officiel, sans acheter d'ouvrage. L'avantage indéniable de Vue.js versus Angular ou React est vraiment sa simplicité d'accès. J'ai discuté avec plusieurs développeurs qui m'ont d'ailleurs fortement conseillé de démarrer par ce framework, avant d'essayer un autre outil. D'ailleurs, au vu des annonces dans le monde de l'open source, nous n'avons que l'embarras du choix dans ce secteur :joy: Ce qui me conforte dans le fait que bien maîtriser JavaScript est fondamental pour passer aisèment d'un framework à l'autre le cas échéant. D'ailleurs, une "petite" information en passant, même si ce n'est pas le sujet de l'article : j'en ai profité pour substituer TypeScript à JavaScript, ce qui contribue à mon sens à un code plus sécurisé. Venant d'un langage fortement typé (C++), c'était finalement assez naturel pour moi. J'ai donc construit une première *stack* technique autour de Vue 3, Vite, TypeScript, Pinia, VueUse, PrimeVue et la base de données Planetscale. Je vais vous détailler les raisons de ces choix.

#### Vue + Vite + TypeScript, de solides fondations
La création du squelette de l'application est réellement très simple. Il vous suffit de taper la commande suivante et de suivre les quelques instructions mentionnées :
```cmd
npm create vite@latest votreprojet -- --template vue-ts
```
En vous connectant à l'adresse ```http://localhost:5173```, vous aurez le plaisir de voir apparaître cette page :
<br><br>
![vite_vue](/assets/img/vite_vue.webp "Page d'accueil suite à l'installation de Vue3")
<br>
L'arborescence en résultant, sous vscode :
<br><br>
![vite_vue](/assets/img/arbo_vue.webp "L'arborescence des fichiers sous vscode")
<br>
Et c'est tout l'intérêt d'un framework : disposer d'un cadre minimal si possible léger et modulaire, afin de ne pas démarrer d'une feuille blanche. Vue vous propose une arborescence que vous peuplerez avec votre propre bibliothèque de composants. C'est sur cette notion fondamentale, définir des "web components", que le framework créé par [Evan You] en 2014 prend en effet toute sa dimension. Dans le cas de Vue, ces composants sont structurés autour de trois sections : la première dédiée au code JS, la seconde au templating HTML, la troisième au CSS. Cette véritable encapsulation, avec des mécanismes de dialogue entre composants, rend le développement Web très efficace, d'autant plus quand le typage de [Typescript] vous guide en "temps réel" pour éviter les erreurs de code. C'est d'ailleurs avec [Vite], installé en même temps que Vue, que j'ai découvert la fonction Hot Module Reload (HMR) qui fluidifie grandement votre travail de développeur : les modifications d'un composant sont chargées "à la volée" et vous constatez sans délai la résultante ! Magique :star_struck:

#### Pinia ou comment gérer simplement les états de l'application
Très vite, vous aurez besoin de partager des variables entre composants. Dans mon cas, des couleurs, des *responsive breakpoints*, des formats monétaires ou de date, des URLs... sont des données qui n'ont nul besoin d'être déclarées dans CHAQUE composant. Cette "gestion des états" est désormais assurée par [Pinia], un "Vue store" rapide et léger, qui se crée au démarrage de l'application et demeure persistant tant qu'elle est active. Le risque est d'ailleurs de trop l'utiliser sans laisser en local, dans le composant même, des variables qui ne serviront jamais "à l'extérieur".

```js
import { useStore } from "../assets/mixins/store.js";
const store = useStore();
...
<p v-if="store.sm"></p>
```
<br>

#### VueUse, une collection d'utilitaires et PrimeVue, une librairie de composants graphiques
Vue 3 prône le mode "Composition API" qui permet de concevoir des composants utilisant des fonctions importées, telles que des APIs de réactivité, des *hooks* ou encore des injections de dépendance. La syntaxe ```<script setup>``` dans des *Single File Components* (SFC) favorise la réutilisation de code. Dans ce cadre, les utilitaires fournis par [VueUse] vous apporteront plus de 200 fonctions dans des domaines très divers ; pour ma part, j'utilise par exemple ```{ breakpointsTailwind, useBreakpoints }``` qui proposent des *breakpoints* réactifs très pratiques pour adapter votre code CSS en fonction de l'écran de l'utilisateur. De même, pourquoi passer des jours à réécrire des composants graphiques comme un calendrier ou un éditeur alors que [PrimeVue] met à votre disposition des dizaines d'éléments plutôt bien conçus et que vous pouvez d'ailleurs *tweaker*. [Vuetify] propose également des composants *material design*. Là se trouvent notamment de vrais gains de productivité qui vous permettent de mieux vous concentrer sur le fonctionnel spécifique de votre application.

#### Planetscale, une base de données serverless
En général, qui dit base de données, dit back office. Ce n'est pas obligatoire car gérer des données en local peut parfois suffire, et c'est la méthode que j'ai utilisée pour mes premiers "petits" projets. Plus récemment, j'ai néanmoins eu besoin de faire appel à une table qui stockait 5 Mo de données et là, ce n'est plus très efficient de les charger localement. Après quelques recherches, j'ai adopté la solution SaaS [Planetscale] qui vous permet d'accéder à une base de données MySQL totalement managée : vous n'avez donc plus besoin d'installer et de gérer vous-même une base de données sur Heroku, AWS, GCP ou autre platform.sh. Il vous suffit d'écrire une fonction serverless que votre plateforme d'hébergement exécutera, pour accéder d'une manière sécurisée à la base de données distante. Pour ma part, j'utilise netlify qui propose des explications assez claires sur l'intérêt d'utiliser le [serverless] ainsi que des [dizaines d'exemples].

#### GO PROD !
Développer localement, c'est bien mais pouvoir déployer son application, c'est encore mieux :smile: Classiquement, je m'appuie sur GitHub pour stocker mon code et mes *repositories* sont "connectés" à netlify qui permet de déployer très simplement son application Vue.js packagée par Vite. Je ne suis d'ailleurs pas encore venu à bout des 300 minutes mensuelles de build incluses dans l'offre gratuite de netlify.<br> 
Ces dernières années ont vraiment vu le *tooling* Web progresser spectaculairement, avec un développement en local bien plus efficace, relayé en bout de chaîne par une fluidité de mise en production. Sincèrement, nul besoin maintenant d'acquérir des compétences *devops* poussées ou de passer des heures à installer une machine virtuelle ou un container docker : un tryptique Vue JS/netlify/outils SaaS peut répondre à une foule de besoins. Vous devrez soigner les aspects sécurité (pas de *secret* qui traîne dans votre code front) et vérifier le coût récurrent des plateformes SaaS, mais c'est une *stack* technique à ne pas négliger.


#### Conclusion
Ce premier billet "écrit à chaud" sera complété l'année prochaine, au fur et à mesure de ma maîtrise du framework. Par exemple, je n'ai pas eu recours à Vue Router pour le moment, alors que c'est une brique essentielle dès que l'application grandit, que l'on veuille quitter le paradigme *Single Page Application* (SPA) ou bien quand l'on souhaite charger du code dynamiquement en mémoire. D'autre part, la communauté très importante autour de Vue.js lui apporte régulièrement des améliorations que j'exploiterai graduellement :thumbsup:

[logiciel de données climatiques]: pourquoi_c_plus_plus
[Bulma]: https://bulma.io/
[apprentissage du web]: web_discovery
[tutoriel]: https://vuejs.org/guide/introduction.html
[Vite]: https://vitejs.dev/
[TypeScript]: https://www.typescriptlang.org/
[Pinia]: https://pinia.vuejs.org/
[VueUse]: https://vueuse.org/
[PrimeVue]: https://www.primefaces.org/primevue/
[Vuetify]: https://vuetifyjs.com/en/
[Planetscale]: https://planetscale.com/
[serverless]: https://docs.netlify.com/functions/overview/
[dizaines d'exemples]: https://functions.netlify.com/examples/
[Evan You]: https://evanyou.me/

[> Accueil](/) [> Tous les articles](/articles)