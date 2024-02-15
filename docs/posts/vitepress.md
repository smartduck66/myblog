---
title: Le choix de mon SSG
date: 2023-02-05
category:
  - SSG
tag:
  - jamstack
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

![VitePress](/assets/img/hero_vitepress.webp "VitePress")

J'ai mis des années à me décider à créer mon blog. C'est d'autant plus étrange que j'ai toujours adoré écrire. Une certaine fainéantise ? La sensation que je ne pourrais pas le maintenir régulièrement à jour ? L'impression que je rencontrerais des difficultés à écrire des billets *valuable* ? Probablement un peu de tout ça :wink:

Mais, une fois la décision prise en 2020, je me suis rapidement penché sur les outils qui me permettraient de poser ma prose. Et c'est à ce moment que j'ai découvert la mouvance Jamstack qui prône (entre autres) un retour à des sites statiques qui sont simplement des sites Web pré-construits avec les langages HTML, CSS et JavaScript. Les pages sont alors servies au navigateur appelant, très rapidement, sans appels dynamiques à une base de données.

A cette époque, je commençais à étudier Ruby et RoR, deux technologies que je n'ai pas creusées plus que cela. Et, dans la lignée, j'ai découvert [Jekyll] que j'ai utilisé à deux ou trois reprises.

#### Choisir un SSG
Utiliser un Static Site Generator pour construire et maintenir son blog est une décision judicieuse, surtout si l'on est développeur. Voici quelques raisons que j'espère objectives :

- Installation ultra-simple
- Arborescence du site fournie automatiquement
- Templates souvent prédéfinis pour la page d'accueil, les posts, les formulaires simples de contact... 
- Possibilité d'utiliser le langage [Markdown] pour construire ses pages
- Customisation de son blog via de simples fichiers de configuration, le langage JavaScript ou des directives plus élaborées (Vue.js, par exemple, pour VitePress)
- Compilation très rapide des pages avec les SSG les plus récents (Hugo écrit en GO est l'un des plus véloces)
- Tests en local
- Déploiement simplifié sur son repo GitHub, connecté ensuite à un hébergeur comme Netlify, Vercel, Gatsby Cloud, etc.

Le site jamstack.org maintient à jour une [liste] des SSG populaires et vous y retrouverez évidemment les ténors actuels tels que Next.js, Hugo, Gatsby, Astro, Eleventy ou d'autres un peu moins connus comme Hexo, Saber ou Harp.

#### VitePress
Alors pourquoi avoir choisi [VitePress], encore en Beta d'ailleurs à l'heure où j'écris ce billet, plutôt qu'un autre SSG plus connu ? En fait, je me suis dit que cela me permettrait de capitaliser sur ma connaissance du framework Vue.js, le jour où je déciderais de pousser ce SSG dans ses retranchements.

Initialement, j'étais d'ailleurs parti sur [VuePress] dont la première version était basée sur le *bundler* Webpack, la version 2 intégrant dorénavant Vite. Mais j'ai trouvé l'outil finalement trop riche pour mes besoins et, quand j'ai appris qu'Evan You (le créateur de Vue.js) [allait lancer VitePress], j'ai choisi d'utiliser ce nouveau SSG.

#### Premiers pas avec VitePress
Franchement, même si l'outil n'est pas encore en version 1.0 (*production ready*), j'ai pu constater après plusieurs mois d'utilisation sa parfaite intégrité. C'est vrai qu'il n'est pas livré avec des "thèmes de folie" et que la documentation reste encore un peu frustre mais l'essentiel est vraiment là. L'installation, via *yarn*, est super rapide et vous pouvez naviguer sur le site web de VitePress pour apprécier ses capacités.

Il faut tout de même signaler que l'outil est assez orienté "site documentaire" mais que des plugins permettent facilement de le configurer pour mieux répondre à la problématique d'un blog. Par exemple, lister les différents articles par ordre chronologique inverse se réalise avec [vitepress-blog-util] ou intégrer une fonction de recherche peut se faire en utilisant [Algolia] ou le plugin [d'Emerson Bottero].

Limiter le poids des images pour tout site web, blog compris, est fondamental. C'est éco-responsable et améliore votre score Lighthouse :wink:. Des hébergeurs vous proposent des plugin utilisés lors de la génération du site (ex : [Image Optim] chez Netlify) mais j'ai préféré écrire un tout petit script basé sur [sharp] qui compresse mes images jpg, gif ou png au format ultra-compact [WebP] :

```js
// Inspiration : https://sharp.pixelplumbing.com/
// Utilisation : node webp.js

const sharp = require("sharp");
const fs = require("fs");

const outputFolder = "./docs/public/assets/img/";
const inputFolder = "./docs/img_source/";

const files = fs.readdirSync(inputFolder);

files.map(async function (file_to_convert) {
  await sharp(inputFolder + file_to_convert).toFile(outputFolder + file_to_convert.substring(0, file_to_convert.indexOf(".")) + ".webp");
});

console.log("Fichiers images transformés au format webp");
```
<br>
Le fichier config.js vous permettra de configurer les éléments essentiels de votre site tels que son titre, sa langue, sa description, l'appel au tag Google Analytics, sa navigation, etc. Je vous livre la version de mon blog :

```js
const { getPostList } = require("vitepress-blog-util/scripts");

function custom_sort(a, b) {
  return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
}

module.exports = {
  base: "/",
  title: "Retour au {code} source",
  lang: "fr-FR",
  description: "blog André Tonic",
  head: [
    ["script", { async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXX" }],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-XXXXXXXXX');",
    ],
  ],
  themeConfig: {
    postList: getPostList("./docs/posts").sort(custom_sort),

    nav: [
      {
        text: "Accueil",
        link: "/",
      },
      {
        text: "Articles",
        link: "/articles.md",
      },
      {
        text: "Projets",
        link: "/projets.md",
      },
      {
        text: "Médias",
        link: "/media.md",
      },
      {
        text: "A propos",
        link: "/about.md",
      },
      {
        text: "Contact",
        link: "/contact.md",
      },
    ],

    socialLinks: [{ icon: "linkedin", link: "https://www.linkedin.com/in/atonic/" }],

    footer: {
      message: `Site généré avec VitePress - Hébergé @Netlify <br> <a href="https://www.fa2v.fr">Visitez fa2v.fr</a>`,
      copyright: "© André Tonic 2020 - Présent",
    },
  },
  vite: {
    optimizeDeps: {
      include: ["markdown-it"],
    },
  },
};
```
<br>
Bref, si vous recherchez une solution simple, fiable et customisable pour votre blog actuel ou futur, VitePress s'avère un bon choix surtout si vous appréciez son grand frère Vue.js et son écosystème.


[Jekyll]: https://jekyllrb.com/
[liste]: https://jamstack.org/generators/
[Markdown]: https://www.markdownguide.org/
[VitePress]: https://vitepress.vuejs.org/
[VuePress]: https://vuepress.vuejs.org/
[allait lancer VitePress]: https://www.youtube.com/watch?v=xXrhg26VCSc
[vitepress-blog-util]: https://www.npmjs.com/package/vitepress-blog-util
[Image Optim]: https://www.netlify.com/integrations/community-built/image-optim-build-plugin/
[sharp]: https://sharp.pixelplumbing.com/
[WebP]: https://fr.wikipedia.org/wiki/WebP
[d'Emerson Bottero]: https://github.com/emersonbottero/vitepress-plugin-search
[Algolia]: https://docsearch.algolia.com/docs/what-is-docsearch/



[> Accueil](/) [> Tous les articles](/articles)