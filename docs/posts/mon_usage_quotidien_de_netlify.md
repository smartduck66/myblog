---
title: Netlify, le créateur de Jamstack
date: 2023-02-10
category:
  - cloud
tag:
  - jamstack
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

<br>

![IMG](/assets/img/netlify_logo.webp "netlify")
<br><br>
Je souhaitais vous parler aujourd'hui de mon hébergeur préféré, j'ai nommé www.netlify.com. Après près de deux ans d'utilisation, je suis capable d'en tirer une première évaluation qui pourra vous donner des éléments de comparaison avec votre propre fournisseur ou vous aider à en choisir un pour vos projets.

Petit *caveat* toutefois : je suis loin d'être un expert des solutions multiples et variées d'hébergement d'un site web, statique ou dynamique. Je veux juste démontrer l'expérience client assez exceptionnelle vécue avec netlify. Je suis certain que d'autres fournisseurs doivent faire aussi bien :wink:

#### Le tournant du Jamstack
Quand j'ai débuté mon apprentissage des langages du web (cf. cet [autre billet]), j'ai évidemment immédiatement voulu faire un *GO LIVE*. C'était en mars 2021. Mon premier site "pur HTML/CSS" étant sauvegardé sur GitHub, je me suis alors tout naturellement tourné vers l'offre maison gratuite [Pages]. Cool, simple, rapide, *no big deal*.

Mais, comme ses conditions générales l'indiquent clairement, cette offre n'est pas destinée à une utilisation professionnelle :

>GitHub Pages n’est ni destiné, ni autorisé à être utilisé comme service d’hébergement web gratuit pour exécuter votre entreprise en ligne, votre site de commerce électronique ou tout autre site web visant principalement à faciliter des transactions commerciales ou à fournir un SaaS commercial. Les sites GitHub Pages ne devraient pas être utilisés pour des transactions sensibles telles que l’envoi de mots de passe ou de numéros de carte de crédit.

Par conséquent, comme mon frère souhaitait que je lui développe un site statique munie d'une boutique e-commerce, j'ai commencé à regarder les offres de *hosting* plus élaborées. De fil en aiguille, j'ai découvert l'univers [Jamstack] déjà décrit en mai dernier... et donc netlify co-fondé en 2014 par Christian Bach (Chief Strategy & Creative Officer) et Mathias Biilmann (CEO). Ma compréhension est que l'émergence de l'architecture web Jamstack (citée pour la première fois en 2015 par M. Biilmann) et la création de netlify (pour promouvoir cette "nouvelle" manière de construire des sites web ?) se sont auto-nourries pour devenir le succès que l'on sait.

Comme quoi, avoir des idées est important... mais savoir les exécuter est encore mieux. En effet, l'idée de combiner Javascript, API et Markup date des débuts de HTML5... mais le savant marketing de netlify a vraiment fait décoller le concept :+1: Pour ceux qui veulent aller plus loin sur Jamstack, ce [récent ouvrage] vous apportera plus d'informations.

#### Prise en main de netlify
A date, j'héberge plus de douze sites sur netlify... **totalement gratuitement**. C'est fou, non ? En fait, la société californienne vous autorise mensuellement 300 minutes de *build* et 100 Gb de bande passante, ce qui est suffisant pour nombre de sites personnels ou semi-professionnels. Evidemment, si mon activité de développement prenait une autre ampleur, je passerais au plan "Pro" mais cela ne m'apparait pas utile à date.<br><br>

![IMG](/assets/img/netlify_pricing.webp "netlify pricing")
<br>
Bon, il serait temps de "rentrer dans le dur", non ? En vous connectant sur netlify, un **tableau de bord** vous donne accès à toutes les commandes importantes applicables à vos sites hébergés, vous résume votre offre (en l'espèce, *starter* dans mon cas), vous affiche la liste de vos sites (préférés en premier, repérés par une petite étoile jaune) puis vos derniers *builds*.<br><br>

![IMG](/assets/img/netlify_dashboard.webp "netlify dashboard")
<br>
Le **processus de mise en ligne d'un site** est assez simple. Prenons l'exemple de ce blog construit autour de VitePress. Une fois l'installation locale fonctionnelle, on procède de la manière suivante :

- Synchronisation des éléments locaux avec son repo Git
- *Menu Sites/Add new site/Import an existing project* à partir du tableau de bord netlify
- Choisir GitHub en tant que *provider* puis le bon repo
- Une fois la "connexion" opérationnelle entre GitHub et netlify, tout *push* de votre code vers GitHub actionnera un *build* du site sur netlify (le GO LIVE étant évidemment à discrétion)
- Ensuite, différentes options sont disponibles comme la rajout de plugins (sitemap automatique, compression d'images, moteur de recherche Algolia, CMS, etc.), la gestion de formulaire (que j'utilise pour "Contact") ou la redirection d'un domaine externe (j'utilise pour ma part Google Domains)

Comme vous pouvez le constater, c'est VRAIMENT très *plug and play* et je n'ai jamais eu de difficultés à lancer un site statique, même quand il fait appel à des API en *front*.

#### Serverless
Maintenant, le *build et le run* de fonctions serverless qui s'exécutent côté serveur est un poil plus complexe. Alors que c'est réellement sur ce point que la puissance d'un environnement comme netlify fait toute la différence s'il est bien maîtrisé.

Pour tout vous avouer, j'ai un peu "galéré" au début et j'ai du m'y reprendre à plusieurs fois avant de trouver **la bonne configuration sur mon PC de développement**, car débugger une fonction sans pouvoir poser des points d'arrêt est assez sportif quand elle s'exécute sur un serveur distant.

En résumé, voici les étapes qu'il faut suivre si l'on veut utiliser une base de données *serverless* telle que [Planetscale], sachant que le code est stocké dans le répertoire /functions de votre arborescence :
- Installer netlify-cli sur votre PC : <code> npm install netlify-cli -g</code>
- Lancer <code> netlify init</code> pour connecter le repository GitHub
- Lancer <code>netlify functions:serve</code> pour tester les fonctions en local sur le port 9999 
- Créer le profil de la base de données dans la section "environment variables" sur netlify

Ensuite, des outils comme requestBin, ngrok et Postman vous serviront à tester et corriger en local les éventuelles bugs découvertes. Un article du blog de [snipcart] explique bien comment les utiliser.

Voici un exemple de fonction serverless (seulement un petit morceau...) qui est appelée du front de l'application sous la forme d'une méthode POST :
```js
import { connect } from "@planetscale/database";
import { fetch } from "undici"; // Indispensable en mode serverless : https://github.com/planetscale/database-js (custom fetch function)

// mini-ORM
// Implémentation type "MySQL" via planetscale
// *******************************************************************
exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Connexion à la base distante : les variables sont chargées en fonction des variables d'environnement stockées dans netlify
  const { PS_HOST, PS_DATABASE, PS_USERNAME, PS_PASSWORD, PS_SITE } = process.env;

  const config = {
    fetch,
    host: PS_HOST,
    database: PS_DATABASE,
    username: PS_USERNAME,
    password: PS_PASSWORD,
  };

  const conn = connect(config);

  //-- Parse the body contents into an object ===>>>> IMPERATIF POUR RECUPERER LES PARAMETRES
  const param = JSON.parse(event.body);
  const commande = param["c"];
  const values = param["v"];

  // Les "commandes" ont été anonymisées avec des chiffres pour ne pas qu'elles apparaissent 'en clair' dans le code JS minifié côté client
  switch (commande) {
    case "1": {
      // Sélection de tous les ateliers
      try {
        const cmd = "SELECT * FROM " + PS_SITE + "_atelier";
        const results = await conn.execute(cmd);
        return {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          statusCode: 200,
          body: JSON.stringify({ data: results.rows }),
        };
      } catch (error) {
        return {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          statusCode: 405,
          body: JSON.stringify({ data: "Une erreur s'est produite dans la recherche de tous les ateliers : " + error }),
        };
      }
    }
    // autres Case.....
    //
```

L'utilisation de fonctions *serverless* est par exemple essentielle dans l'accès à une base de données pour éviter que **vos secrets (user/password) ne soient accessibles** en parcourant le code source envoyé au navigateur. En effet, même si votre code Javascript et *minifié*, cela ne suffit pas à masquer le mot de passe qui permettra assez aisèment à n'importe quel petit malin de farfouiller dans vos tables :sob:

#### Conclusion
J'espère que ce petit aperçu des fonctionnalités de netlify vous aura donné envie d'aller plus loin. Et encore, je n'ai pas évoqué les possibilités d'Analytics, de gestion d'identité, des *background functions* (équivalentes aux classiques batchs), etc. Bref, encore beaucoup de futurs articles potentiels :wink: Si vous souhaitez en savoir plus, n'hésitez pas à me [contacter].



[autre billet]: /posts/web_discovery.md
[Pages]: https://pages.github.com/
[Jamstack]: /posts/jamstack_le_grand_retour_du_statique.md
[récent ouvrage]: https://books.google.com/books?id=TmYtEAAAQBAJ&pg=PA6
[Planetscale]: https://planetscale.com/
[snipcart]: https://snipcart.com/blog/what-are-webhooks-explained-example
[contacter]: /contact






[> Accueil](/) [> Tous les articles](/articles)