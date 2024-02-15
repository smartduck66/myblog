---
title: Pourquoi C++ ?
date: 2021-03-02
category:
  - langage
tag:
  - compilé
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

J’ai commencé à coder en 1981 sur une TI57. Je me rappelle encore de la véritable fièvre qui s’était emparée de moi à la lecture de « l’ordinateur de poche n°2 », un magazine dédié aux calculatrices Texas Instruments, Hewlett-Packard, Sharp ou autres Casio. 

Deux ans plus tard, le fameux Canon X-07 doté du langage Basic et, surtout, de l’accès à un assembleur Z-80 me permettaient de commencer à écrire des programmes bien plus élaborés. Cette passion a perduré quelques 20 années et j’ai arrêté de coder en 2001, trop accaparé par ma carrière de consultant/chef de projet/manager/etc. Fin 2017, et cela faisait déjà quelques années que cela me trottait dans la tête, j’ai « replongé ». A plus de 50 ans, je me suis remis à coder… en C++.

Alors, vous pourriez me dire « Pourquoi C++ ? ». En effet, ce langage n’est pas réputé pour être facile d’accès. Après plus de 40 ans de bons et loyaux services, le C++ est un monument qui constitue la fondation de l’informatique moderne. Les systèmes d’exploitation, les navigateurs et services Web, les grands logiciels bureautiques sont écrits pour la majeure partie en C++. Cet état de fait m’a poussé à redémarrer mon apprentissage du code avec C++ et pas avec Java, Javascript, C#, GO ou autre Python. J’ai naïvement voulu côtoyer « les géants », tous ces programmeurs de génie qui ont écrit ces chefs d’œuvre, fondements de notre vie désormais numérique. Plus prosaïquement, après une première expérience en C dans les années 90, je savais que C++ était synonyme de performance, de versatilité et que le langage continuait à évoluer régulièrement.

J’ai souhaité démarrer « en douceur » et me suis procuré l’excellent ouvrage de Bjarne Stroustrup, [Programming, Principles & Practices using C++]. Il en a écrit une première version quand il professait à l’université du Texas, après 20 ans passés aux Bell Labs. La force de cet ouvrage est de pouvoir revisiter les principaux concepts génériques d’un langage de programmation, illustrés par des exemples rédigés en C++11/C++14. Le « moderne C++ » est donc utilisé, plutôt que C++98, ce qui facilite l’apprentissage et contribue à démythifier en partie la [complexité de la « bête »].

Après plus de six mois de lecture (soirées, WE, vacances), j’ai pu démarrer l’écriture d’un premier outil de gestion financière personnelle, avec un objectif peut-être un peu trop ambitieux : je désirais que ce premier logiciel soit multiplateforme et fonctionne sous Windows, MacOS et Linux. Au-delà du choix pas totalement évident d’une librairie graphique non-standardisée [FLTK], je me suis rendu compte que le « tooling » lié à C++ n’était pas tout à fait à la hauteur d’autres langages plus récents. J’ai passé des « heures carrées » à configurer une mini-chaîne CI/CD à coup de CMAKE pour obtenir un semblant de pipeline de développement. En partant d’un code écrit sous Microsoft Visual Studio, je compilais sous MacOS avec LLVM et sous Linux avec GCC. Mais, et c’est véritablement la promesse de ce langage, cela fonctionne et les performances sont au rendez-vous, avec un code quasi-identique à quelques `#ifdef` près entre les trois OS.

Fort de ce premier succès, je me suis attaqué à la lecture de la [« bible »] du créateur de C++, tout en écrivant un second logiciel basé sur la mise en forme de [données météorologiques]. Le mouvement open data permet en effet de récupérer gratuitement des monceaux de données, donc pourquoi s’en priver ? Cette fois, j’ai assez rapidement voulu tester la « connexion » d’un module écrit en C++ avec une interface Web afin de vérifier s’il était plus rapide de coder quelques pages HTML/JS pour la partie GUI. Et, à ma grande surprise et satisfaction, ce n’est pas très difficile de décorréler « l’intelligence » de l’application en back office et l’interface homme-machine en front office. Je me suis inspiré des conseils avisés de [Borislav Stanimirov] et adopté la communication par web sockets entre le client HTML exécuté par le navigateur et mon code métier C++. Le petit snippet suivant démontre la façon dont l’exécutable C++ est à l’écoute des sollicitations du browser :

```
// GUI HTML "externe"
// args
const auto address = boost::asio::ip::tcp::v4(); 
const uint16_t port = 7654;

// run
cout << "Serveur KIKO à l'écoute sur le port 7654 (websockets)..." << endl;
Server server(tcp::endpoint(address, port));
return server.run();
```
C’est magique ! La librairie utilisée en arrière-plan est [Boost/BEAST] écrite par Vinnie Falco qu’il présente de la manière suivante : *« Beast is a C++ header-only library serving as a foundation for writing interoperable networking libraries by providing low-level HTTP/1, WebSocket, and networking protocol vocabulary types and algorithms using the consistent asynchronous model of Boost.Asio. »*. Je suis assez content de « KIKO » (climat, en japonais) dont vous pouvez voir l’interface simple mais néanmoins efficace ci-dessous.

![kiko](/assets/img/kiko.webp "Projet personnel Kiko")

Je ne compte pas m’arrêter en si bon chemin et je réfléchis déjà à un troisième logiciel, peut-être autour de la librairie [CNTK] de Microsoft qui permet de se familiariser avec quelques techniques de deep learning.

Coder en C++ n’est certes pas la façon la plus simple de démarrer pour quelqu’un qui n’a jamais codé. Je suis plutôt d’accord avec [Peter Norvig] qui a estimé qu’il faut 10 ans pour maîtriser un langage de programmation et certains pensent que le C++ est trop riche pour qu’un développeur puisse le maîtriser totalement. Cela étant posé, étudier le C++ permet de mettre en œuvre des concepts fondamentaux tels que la gestion de la mémoire, l’accès direct au hardware, la programmation impérative/objet/générique et même [fonctionnelle], les lambdas… qui vous permettront d’apprendre bien plus rapidement un autre langage. En effet, comme les langues étrangères, savoir coder dans plusieurs langages permet évidemment d’améliorer son employabilité sur le marché de l’emploi et de pouvoir « surfer » sur les tendances. Personnellement, en parallèle du C++, j’ai souhaité étudier un langage interprété (Ruby) doublé d’un puissant framework Web (Ruby on Rails) afin de constater par moi-même de la productivité promise par ces outils dans le développement de sites Web. Ma première maîtrise du C++ m’a permis de rapidement appréhender les concepts proposés par [RUBY], lui-même écrit en C.

En guise de conclusion, vous trouverez ci-joint une liste évidemment non exhaustive d’ouvrages ou de sites Web qui me permettent au quotidien de progresser dans la compréhension du C++ :
- Magazines [Cvu et Overload], édités mensuellement par l’ACCU.
- La collection C++ In-Depth Series supervisée par Bjarne Stroustrup.
- Les ouvrages mythiques de Scott Myers et Herb Sutter.
- Les vidéos des conférences telles que CPPCON, C++ Now et Meeting C++.
- Deux blogs très actifs, le premier tenu par [Jonathan Boccara] (ingénieur français œuvrant chez Murex) axé sur l’expressivité du code et le second par un polonais, [Bartlomiej Filipek], qui est plus général.
- Et, bien sûr, le site incontournable [isocpp] remis à jour quasiment quotidiennement.

Je ne doute pas que ce langage, comme le COBOL mais pour d’autres raisons, sera encore présent dans 50 ans. Les efforts continus de [standardisation] entamés dans les années 90 garantissent des évolutions régulières, afin d’améliorer la productivité de chacun des [millions de développeurs C++].

[millions de développeurs C++]: https://www.stroustrup.com/hopl20main-p5-p-bfc9cd4--final.pdf
[Boost/BEAST]: https://www.boost.org/doc/libs/1_75_0/libs/beast/doc/html/index.html
[complexité de la « bête »]: https://www.jetbrains.com/fr-fr/cpp/cpp-today-oreilly/
[C++TODAY]: https://resources.jetbrains.com/storage/products/cpp/books/Cplusplus_Today.pdf
[CNTK]: https://docs.microsoft.com/en-us/cognitive-toolkit/
[FLTK]: https://www.fltk.org/index.php
[fonctionnelle]: https://www.manning.com/books/functional-programming-in-c-plus-plus
[données météorologiques]: https://donneespubliques.meteofrance.fr/?fond=produit&id_produit=117&id_rubrique=39
[Programming, Principles & Practices using C++]: https://www.stroustrup.com/programming.html
[RUBY]: https://www.ruby-lang.org/en/documentation/ruby-from-other-languages/to-ruby-from-c-and-cpp/
[Borislav Stanimirov]: https://www.youtube.com/watch?v=bbbcZd4cuxg
[standardisation]: http://www.open-std.org/jtc1/sc22/wg21/
[« bible »]: https://www.stroustrup.com/4th.html
[Peter Norvig]: https://norvig.com/21-days.html
[Cvu et Overload]: https://accu.org/menu-overviews/journals-overview/
[isocpp]: https://isocpp.org/
[Jonathan Boccara]: http://www.fluentcpp.com/
[Bartlomiej Filipek]: https://www.cppstories.com/
[Programmez!]: https://www.programmez.com/

[> Accueil](/) [> Tous les articles](/articles)