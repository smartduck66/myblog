---
title: A la découverte des langages du web
date: 2021-12-31
category:
  - langage
tag:
  - web
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

Après un retour au code via C++ (2018-2020), 2021 a été pour moi la découverte des langages du Web. Même si j'avais fait un peu de "back" (TCL/TK) lors de mon passage chez Vignette au tout début des années 2000, tout ceci était maintenant très loin et il me fallait redémarrer de zéro. Mon apprentissage pourra donner des pistes à certains.

#### HTML, CSS
Etant de la "vieille école", j'ai préféré lire un ouvrage de qualité pour me lancer. Après quelques comparatifs, mon choix s'est arrêté sur "Responsive Web Design with HTML5 and CSS" de Ben Frain (3ème édition - packt). L'intérêt de cet ouvrage réside dans son côté progressif, mais également très pratique. L'auteur incite immédiatement le lecteur à coder, en prenant des exemples concrets tirés de la conception du [site web de l'ouvrage]. J'ai ainsi pu rapidement me familiariser avec les langages de base du web, HTML et CSS... et j'ai constaté que ce sont VERITABLEMENT des langages de programmation, riches et en constante évolution. Un premier site web simple, hébergé gratuitement sur [GitHub Pages], m'a permis après seulement quelques jours d'appréhender des notions comme le *responsive design*, la typographie, le format SVG ou encore la saisie de formulaires en HTML. Je me suis d'ailleurs assez rapidement pris au jeu du "front", moi qui était clairement un développeur "back".
<br><br>
![IMG](/assets/img/RWD3rd.webp "Responsive Web Design, Ben Frain")
<br>


#### RUBY et ROR
Peut-être un peu curieusement, je ne me suis pas immédiatement plongé dans le 3ème langage indispensable qu'est JavaScript. J'ai en effet entendu parler de Ruby et du fameux framework "Ruby on Rails". Ni une, ni deux, je me procure les deux ouvrages suivants : 
- "The Ruby Programming Language" de David Flanagan et Yukihiro Matsumoto (Matz, le créateur du langage), paru en 2008 chez O'Reilly.
- "Ruby on Rails Tutorial" de Michael Hartl (6ème édition - Addison-Wesley)

Pendant plusieurs semaines, je découvre un langage interprété très élégant, très modulaire et qui permet de réaliser des programmes "back" rapidement. En parallèle, l'étude du framework "RoR" via l'excellent ouvrage de M. Hartl, très didactique, me permet de mieux comprendre la mécanique "front - back" d'un site web. En effet, l'auteur suit une démarche pédestre qui, correctement suivie, vous amène à construire un site web complet sur Heroku, autour d'une base de données, d'une authentification, etc. Ce framework "very opiniated" comme disent les anglo-saxons a de réelles forces pour délivrer rapidement un produit digital. C'est d'ailleurs pour cette raison que nombre de start-ups l'ont utilisé depuis sa création en 2004 par [David Heinemeier Hansson].
<br><br>
![IMG](/assets/img/ruby_language.webp "The Ruby Programming Language, David Flanagan et Yukihiro Matsumoto")
<br>

#### Jamstack
J'ai tout de même pu mettre en application "un tout petit peu" ces nouvelles connaissances en déployant deux sites sous Jekyll, un *Server Side Generator* (SSG) écrit en Ruby par Tom Preston-Werner en 2008. L'énorme intérêt de ces outils réside dans la génération statique de pages, qui apporte entre autres une grande sécurité, des performances en termes d'accès et de SEO sans égales. Je reparlerai dans d'autres articles de l'univers Jamstack, mouvance lancée en 2015 par l'un des co-fondateurs de Netlify. Je vous conseille d'ailleurs un petit ouvrage bien écrit sur les sites statiques, "Working with Static Sites" de Raymond Camden et Brian Rinaldi. Le premier tient d'ailleurs un [blog de qualité] et le second est très actif, via sa newsletter ["JAMstacked"] éditée par Cooper Press.
<br><br>
![IMG](/assets/img/working_static_sites.webp "Working with Static Sites, Raymon Camden et Brian Rinaldi")
<br>

#### Hors JS, point de salut
Et puis, je n'ai plus differé le "grand saut" en me mettant à lire "JavaScript: The Definitive Guide" de David Flanagan (7ème édition - O'Reilly). Eh oui, c'est lui qui avait déjà "commis" l'ouvrage sur Ruby. Je l'ai d'ailleurs à peine terminé, tant le sujet est vaste, polymorphe (front et back avec node), complexe et en évolution également constante avec un organisme de standardisation très actif [(ECMA)]. Mes premières impressions sont plutôt bonnes sur la rapidité du langage (différentes comparaisons effectuées avec C++), sa syntaxe, sa versatilité et sa complexité d'apprentissage. Etant l'un (si ce n'est le...) des langages les plus utilisés et populaires actuellement, des ressources innombrables sont disponibles et il est rare de ne pas trouver rapidement une solution ou un conseil émanant de stack overflow ou de GitHub CodeSearch. Sans compte l'excellent [MDN Web Docs] qui constitue une référence de grande qualité sur le langage.
<br><br>
![IMG](/assets/img/JS_7th.webp "JavaScript, the Definitive Guide, David Flanagan")
<br> 

#### Conclusion
Cette année 2021 m'a donné l'occasion d'une première immersion dans le développement Web. J'en retire une vraie satisfaction, en découvrant un univers bien différent de mes expériences passées en tant que développeur. Ce que j'apprécie sans doute le plus est l'aspect "hello world !", c'est-à-dire la possibilité de publier et de partager son travail facilement "au monde entier". Ce qui m'a peut-être un peu dérouté au début est la structure très différente d'une application web versus un "monolithe" écrit dans un langage compilé. Un site web, c'est des centaines de fichiers, des modules externes que l'on intègre (via NPM, par exemple), une arborescence qui peut devenir complexe... et des interactions navigateur - serveur continuelles ! Mon CTO chez CACD2 m'a conseillé maintenant d'étudier un framework JS pour booster ma productivité... Ce sera vue.js et je vous en parlerai l'année prochaine :wink:


[blog de qualité]: https://www.raymondcamden.com/
["JAMstacked"]: https://jamstack.email/
[site web de l'ouvrage]: https://rwd.education/
[GitHub Pages]: https://pages.github.com/
[David Heinemeier Hansson]: https://world.hey.com/dhh
[(ECMA)]: https://www.ecma-international.org/technical-committees/tc39/
[MDN Web Docs]: https://developer.mozilla.org/fr/docs/Web/JavaScript


[> Accueil](/) [> Tous les articles](/articles)