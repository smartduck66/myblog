---
title: JAMstack, le grand retour du statique
date: 2022-05-15
category:
  - architecture
tag:
  - web
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

Cette "nouvelle" architecture fait beaucoup parler d'elle depuis son officialisation au milieu des années 2010, les trois premières lettres de JAMstack signifiant Javascript, API et Markdown. Si l'on se réfère à la [définition] de ses créateurs et actifs promoteurs, "Jamstack est une architecture conçue pour rendre le web plus rapide, plus sécurisé et plus simple à porter à l'échelle. Ses principes fondamentaux constitués par la pré-génération et le découplage front/back permettent aux sites et applications web d'être délivrés en toute confiance et d'être très résilientes". Au-delà du discours marketing habituel, cette mouvance tente de faire cohabiter le meilleur des deux mondes au sein d'un site web : l'aspect statique (rapidité, sécurité, SEO optimal) et l'aspect dynamique (interactions, richesse de l'expérience utilisateur)

#### Premiers pas
Pour ma part, j'ai été rapidement séduit par cette architecture qui m'a rappelé mon expérience chez Vignette en 2000 : un Content Management System (CMS) qui pré-générait des pages statiques à partir d'une base de données, afin de rendre son site web plus tolérant à la montée en charge. Rien ne vaut en effet d'accéder à un site web constitué par de simples pages HTML : aucun délai de génération "à la volée" par le serveur (SSR) ou par le client (CSR), pas de goulet d'étranglement à une base de données, une indexation optimale par les moteurs de recherche (meilleur SEO)... Pour cette raison, tout blog, site documentaire ou marketing se prête admirablement à utiliser cette architecture. J'ai d'ailleurs pu la mettre en oeuvre l'année dernière au travers de deux sites très simples, l'un servant à mon fils de vitrine pour son activité initiale d'auto-entrepreneur et l'autre, dédié au [vintage computing]. A chaque fois, [Jekyll] a été utilisé, l'un des premiers SSG (Server Side Generation) écrit en Ruby, toujours maintenu plus de 10 ans après sa création par une équipe enthousiaste.<br> 
J'ai pu constater la très grande facilité de mise en oeuvre de ce type d'outils : après l'installation sur son poste client, Jekyll propose une arborescence-type que l'on n'a plus qu'à peupler avec des fichiers écrits en [Markdown], un langage de balises plus simple à mettre en oeuvre que du HTML. Ensuite, le site peut être testé en local après sa génération puis mis en production via netlify, vercel ou autre cloudflare. Sincèrement, même en tant que néophyte en 2021 sur ces technologies, je n'ai eu aucune difficulté à mettre en ligne en quelques jours les sites précités.

#### Que demander de plus ?
Mais on ne peut pas toujours se contenter de pages purement statiques, sans interaction aucune avec l'extérieur. Et c'est là qu'intervent le "découplage front-back". Jamstack prône la consommation de services externes (headless CMS, base de données, applications tierces) via des API et impose de fait une séparation claire entre le "front" de son application et le "back" souvent constitué par des services SaaS. Par exemple, j'utilise une gestion de panier e-commerce nommée [snipcart], totalement externe à mes applications : je l'appelle dans mon code via un bouton "postant" les caractéristiques du produit à acheter. 
<br><br>
![IMG](/assets/img/panier_technosaures.webp "Un panier, dans technosaures.fr")
<br> 

De même, netlify met à disposition un [CMS "light"] qui permet de mettre à jour son site (anciennement netlify CMS, dorénavant maintenu par Decap) : l'administrateur saisit son article qui est pré-généré ensuite automatiquement et stocké en page statique.<br>
Cette APIsation (le 'A' de jAmstack), couplée à Javascript (le 'J'...), rend cette architecture web extrêmement puissante et adaptée virtuellement à n'importe quel site ou application.

#### What's next ?
Je prévois de tester des fonctionnalités comme "l'hydration", qui apporte une dose plus ou moins forte d'interactivité, grâce à la possibilité d'inclure du code javascript côté client APRES la génération des pages côté serveur. Eleventy va l'implémenter dans sa [version 2.0], avec son plugin "is-land". Si vous souhaitez creuser le sujet, [Ryan Carniato] a récemment écrit un bon article sur le sujet.



[définition]: https://jamstack.org/what-is-jamstack/
[vintage computing]: https://www.technosaures.fr/
[Jekyll]: https://jekyllrb.com/
[Markdown]: https://www.markdownguide.org/
[snipcart]: https://snipcart.com/
[CMS "light"]: https://decapcms.org/
[version 2.0]: https://www.11ty.dev/docs/plugins/partial-hydration/
[Ryan Carniato]: https://dev.to/this-is-learning/conquering-javascript-hydration-a9f




[> Accueil](/) [> Tous les articles](/articles)