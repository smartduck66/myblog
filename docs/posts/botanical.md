---
title: La refonte de botanicalparis.com, un cas d'école
date: 2024-01-29
category:
  - projets
tag:
  - Vue.js
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

<br>

![IMG](/assets/img/image_accueil_botanicalparis.webp "Botanicalparis.com")
<br><br>
En septembre 2022, je déjeunais avec un entrepreneur qui me faisait part des problèmes de performance qu'il rencontrait avec certains de ces sites Web. Il en avait en effet développé plusieurs, sous Wordpress. Personnellement, je ne connaissais pas particulièrement ce CMS mais je lui ai proposé de vérifier ce que [Lighthouse] délivrait comme indicateurs sur l'un de ses sites dédié à la réservation d'ateliers de dégustation de spiritueux, [botanicalparis.com]. Je me rappelle que la performance était par exemple **inférieure à 50 sur 100**. Après quelques heures de recherche, des plugins remis à jour ou supprimés, l'indicateur reprenait des couleurs et je parvenais *peu ou prou* à ce résultat :
<br>

![IMG](/assets/img/Botanical_Lighthouse_original.webp "Lighthouse")


Comme je piétinais dans l'optimisation, sans réel moyen d'aller plus loin de par ma méconnaissance de l'environnement, j'ai proposé à Dimitri de **refondre entièrement** le site en question. Cela m'a occupé une vingtaine de jours sur le dernier trimestre 2022 et je n'ai pas regretté d'avoir réalisé ce *Proof Of Concept*. A l'époque, je démarrais avec [le framework Vue.js] et j'ai pu donc tester de nombreuses techniques de développement Web comme le routage, l'authentification, l'utilisation d'une base de données en mode PaaS instanciée en serverless, la mise en place d'un espace client ou d'un panier e-commerce.

Bref, j'avais développé une application dont la couverture fonctionnelle égalait le site actuellement en production, mais avec **des tests Lighthouse bien meilleurs** :
<br>

![IMG](/assets/img/Botanical_Lighthouse_refonteVueJS.webp "Lighthouse")

### Entre deux mondes
Qu'ai-je réellement appris au travers de cette expérience ?

Tout d'abord, comme tout développeur, cela m'a conforté dans mes capacités de **productivité**. Le site n'est pas complexe en termes d'UX/UI ou de fonctionnalités, mais cumule la palette complète de ce que l'on attend d'un site web *responsive* qui doit présenter une offre produit, prendre des commandes, proposer un espace client et un back office d'administration. Ce qui m'a bluffé, c'est la **relative rapidité** de développement autour du framework et l'intégration somme toute aisée de modules tierce partie comme la gestion d'un panier avec [snipcart] ou l'authentification avec [auth0].

Ensuite, j'appréhendais **la connexion avec une base de données externe** car je ne voulais pas me lancer dans une installation complexe. J'avais déjà utilisé la base de données *serverless* Faunadb avec le démonstrateur climatique [Kiko], mais je voulais cette fois tester une base de données *mysql*. Mon choix s'est alors porté sur [planetscale] dont j'avais entendu parler par l'intermédiaire de l'excellent podcast [syntax.fm]. Après une bonne journée de prise en main et deux autres pour écrire le code Javascript destiné à gérer les différentes requêtes SQL de lecture/écriture dans la base, le tout fonctionnait convenablement :wink:

Enfin, en prenant du recul, j'ai mieux compris **l'apport indéniable d'un framework Web**, même si l'on a parfois l'impression de ne pas maîtriser pleinement ce qui se passe. Le paradigme [#usingtheplaform] est certes séduisant mais nécessite, à mon sens, une expérience et une expertise très approfondies des 3 standards du Web que sont les langages **HTML, CSS et Javascript**. Des développeurs moins expérimentés, et qui ont besoin d'être productifs, doivent se reposer sur des outils plus "englobants". Je pense que l'écosystème Vue.js répond actuellement à cette problématique, entre le monde du CMS (Wordpress, Webflow, etc.) et le monde du développement "pur", sans framework, bundler ou autres plugins 'magiques'. Je ne désespère toutefois pas de prouver, un jour, que développer avec les seuls langages du Web ne rajoute pas un temps de travail trop important et apporte des performances encore meilleures :grin:

### Quelques 'tips'
Cette introduction étant faite, voici quelques conseils et astuces que j'ai pu mettre en pratique lors de ce développement.

Tout d'abord, il faut pouvoir **tester en local les fonctions serverless** qui seront appelées par l'application. Comme je l'ai déjà mentionné dans d'autres billets, j'utilise [netlify] pour héberger mes projets personnels, qui met à disposition *netlify-cli* :

```console
npm install netlify-cli -g
netlify init 
netlify functions:serve 
```
La première commande l'installe, la seconde connecte le répertoire github et la dernière est utilisée pour tester les fonctions en local sur le port 9999 (ex : localhost:9999/.netlify/functions/database?cmd=1). Cet outil s'est avéré très précieux dans le débogage des appels à la base de données qui sont **sécurisés**, car s'exécutant côté serveur et non dans le navigateur. Vous constaterez, dans le code qui gère la connexion à la base de données, que les *secrets* sont masqués :

```js
// Fonction serverless : /functions/db.js 
// Connexion à la base distante : les variables sont chargées 
// en fonction des variables d'environnement stockées dans netlify
const { PS_HOST, PS_DATABASE, PS_USERNAME, PS_PASSWORD, PS_SITE } = process.env;

const config = {
  fetch,
  host: PS_HOST,
  database: PS_DATABASE,
  username: PS_USERNAME,
  password: PS_PASSWORD,
};

const conn = connect(config);
```

Le **routage** entre les différentes pages de l'application est assuré par [Vue Router], configuré aisèment grâce au squelette de [Richard]. On ne rappellera jamais assez que le [chargement dynamique des composants] (*code splitting*), que ce soit dans Vue ou tout autre framework JS, a un impact très important sur l'indicateur de performance Lighthouse en ne chargeant en mémoire que le code nécessaire à un instant t :

```js
// Fichier : /router/index.js
{
  path: "/degustations",
  name: "Dégustations",
  // When building apps with a bundler, the JavaScript bundle can become quite large, 
  // and thus affect the page load time. It would be more efficient if we can split 
  // each route's components into separate chunks, and only load them when the route 
  // is visited.
  component: () => import("../views/Degustations.vue"),
},
```
La **gestion d'états** a été confiée à [pinia] (futur Vuex 5 ?) qui m'a permis de partager des constantes globalement, comme par exemple des *breakpoints* de taille d'écran :

```js
// Fichier : /src/assets/mixins/store.js
sm: breakpoints.smaller("sm"),
md: breakpoints.between("sm", "md"),
lg: breakpoints.between("md", "lg"),
xl: breakpoints.between("lg", "xl"),
xxl: breakpoints.between("xl", "2xl"),
xxxl: breakpoints["2xl"],
```

Quand une réservation d'atelier est effectuée par un client, il faut décrémenter le nombre de places disponibles pour une date donnée. A cet effet, snipcart permet [l'implémentation] d'un **webhook** qui autorise la communication asynchrone entre le site et un module tierce partie, en l'occurence la gestion du panier e-commerce :

```js
// Fonction serverless : /functions/snipcart_webhook_order_events.js
// Décrémentation des places dans les ateliers en fonction du nom, 
// de la date et de l'horaire 
// Exemple : "UPDATE date_atelier SET dispo = dispo - 1 WHERE nom ='GIN_DU_MONDE' 
// AND date='2022-12-02' AND start_hour='20:00'"
const commandes_ateliers = root.content.items.map((item) => {
  const c = new commande(); // note the "new" keyword here
  c.name = item.id; // Ex : GIN_PARISIEN
  c.price = item.price;
  c.quantity = item.quantity;
  if (item.name != "Carte cadeau") {
    c.date = item.customFields[0].value;
    c.start_hour = item.customFields[1].value;
  }
  return c;
});

const site1 = extractNetlifySiteFromContext(context).site_url;

const data1 = { c: "7", v: commandes_ateliers };
const response1 = await fetch(site1 + "/.netlify/functions/db", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: JSON.stringify(data1),
});

const results1 = await response1.json();
return { statusCode: 200, body: JSON.stringify(results1) }; else {
  return { statusCode: 422, body: "String error !" };
}
```

**L'authentification** donnant accès à la page d'administration est gérée via *auth0*. Une fois le paramétrage effectué sur la console du service, le code à insérer dans une page est aussi simple que cela :

```js
// File : /src/views/Admin.vue
<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";

const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

function login() {
  loginWithRedirect();
}
function log_out() {
  logout({ logoutParams: { returnTo: window.location.origin } });
}
</script>
```
Vue.js a généré un écosystème considérable de composants d'interface utilisateur. Par exemple, j'ai utilisé [FullCalendar] qui offre une interface assez complète :
<br>

![IMG](/assets/img/FullCalendar.webp "Calendrier")
<br>

Le **poids des images** est crucial dans l'optimisation de tout site Web, d'où l'introduction du standard *webp*. J'ai écrit le script suivant, lancé manuellement quand j'intègre de nouvelles images :
```js
// Inspiration : https://sharp.pixelplumbing.com/
// Utilisation : node webp.cjs
const sharp = require("sharp");
const fs = require("fs");
const outputFolder = "./public/img/";
const inputFolder = "./img_source/";
const files = fs.readdirSync(inputFolder);
files.map(async function (file_to_convert) {
  await sharp(inputFolder + file_to_convert).toFile(outputFolder + 
  file_to_convert.substring(0, file_to_convert.indexOf(".")) + ".webp");
});
console.log("Fichiers images transformés au format webp");
```

Les **fontes de caractères** sont également un facteur de poids excessif des sites Web. Le format *woff2* permet de les alléger. J'ai d'ailleurs pris le parti de n'en utiliser qu'une seule :
```js
// Fichier : /src/assets/styles.css
@font-face {
  font-family: "Inter-V";
  src: url("../assets/fonts/Inter.var.woff2") format("woff2-variations");
  font-weight: 100 900;
  font-style: oblique 0deg 10deg;
  font-display: fallback;
}
```

Enfin, Lighthouse met en avant dans ses recommandations d'utiliser **defer** lors du chargement initial, ce qui permet de retarder l'exécution du script jusqu'à ce que le document soit prêt. Cette technique peut améliorer les performances de chargement de la page et garantir que le script ne bloque pas le rendu initial de la page :

```js
// Fichier : /index.html
<script type="module" src="/src/main.ts" defer></script>
```

### Conclusion
J'espère que ce cas d'école vous aura inspiré et démontré que le portage d'une application réalisée avec un CMS classique fait sens, surtout quand l'on s'écarte d'un site marketing classique ou autre blog. Le niveau de maîtrise et de précision du code envoyé au navigateur est incomparablement bien meilleur :smiley:

Maintenant, je suis persuadé que des experts CMS sont capables d'optimiser les performances des sites qu'ils délivrent avec ce genre d'outils. Comme toujours, il faut trouver le **bon compromis** entre délai de livraison / qualité du code / empreinte carbone / simplicité de mise à jour / ... Bref, pas simple !

Retrouvez tous mes projets personnels, ainsi que ce POC, dans cette [section] de mon blog.


[> Accueil](/) [> Tous les articles](/articles)

[botanicalparis.com]: https://www.botanicalparis.com/
[le framework Vue.js]: /posts/le_choix_de_vue_js.md
[Lighthouse]: /posts/lighthouse.md
[snipcart]: https://snipcart.com/
[auth0]: https://auth0.com/
[kiko]: /posts/kiko_data_climat_france_dom_tom.md
[planetscale]: https://planetscale.com/
[syntax.fm]: https://syntax.fm/
[#usingtheplaform]: https://timkadlec.com/remembers/2019-10-21-using-the-platform/
[Richard]: https://github.com/richardevcom
[Vue Router]: https://router.vuejs.org/
[chargement dynamique des composants]: https://vuejs.org/guide/best-practices/performance.html  
[pinia]: https://pinia.vuejs.org
[l'implémentation]: https://snipcart.com/blog/what-are-webhooks-explained-example
[netlify]: /posts/mon_usage_quotidien_de_netlify.md
[FullCalendar]: https://www.npmjs.com/package/@fullcalendar/vue3
[section]: /projets.md