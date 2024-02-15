---
title: Gérer efficacement son panier e-commerce avec Snipcart
date: 2023-03-22
category:
  - outils
tag:
  - e-commerce
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

<br>


![IMG](/assets/img/snipcart-logo.webp "Snipcart")
<br><br>
La gestion d'un panier est une composante classique, mais pas obligatoire de tout site e-commerce. En effet, un simple *checkout* (page de paiement) peut dans certains cas être suffisant. Les plateformes de paiement telles que [stripe] ou [mollie] proposent d'ailleurs cette possibilité.

Mais, dès que votre site doit offrir la possibilité d'acheter plusieurs produits simultanément, le "panier" devient nécessaire.

#### La recherche d'un panier *serverless*
Lors du développement de mon premier site e-commerce, je me suis posé la question de "sous-traiter" la gestion du panier. Pas vraiment par fainéantise, mais l'expérience *front* et *back* d'acheter sur un site web et mobile EST UN VRAI MÉTIER. 

Entre l'ajout et la suppression des produits, la gestion des inventaires, les problèmes de sécurité, le parcours client qui doit être hyper-fluide (et responsive...), la gestion éventuelle des frais de port, le remboursement d'un client, la facturation, les offres promotionnelles, les souscriptions récurrentes, la TVA, la gestion des devises étrangères, le tableau de bord... je me suis rapidement dit que cela avait déjà été traité par d'autres et qu'il serait préférable que je consacre au fonctionnel spécifique de l'application :joy:

Une recherche rapide (*Add a shopping cart to a website*) m'a alors fait découvrir la solution canadienne [Snipcart], que j'ai immédiatement adoptée, rassuré en cela par un service bilingue très réactif. 

#### Une intégration JS relativement simple
Sincèrement, la [documentation] du produit est très pédestre. Il vous suffit de recopier ce *snippet* dans le fichier index.html de votre site, pour activer l'intégration de Snipcart :

```js
<script>
  window.SnipcartSettings = {
    publicApiKey: "YOUR_API_KEY",
    loadStrategy: "on-user-interaction",
  };

  (function(){var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");var m,g;(g=(m=window.SnipcartSettings).loadCSS)!=null||(m.loadCSS=!0);var y=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,f=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(f.forEach(function(t){return document.addEventListener(t,o)}),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],n=document.querySelector("#snipcart"),i=document.querySelector('src[src^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][src$="snipcart.js"]')),e=document.querySelector('link[href^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][href$="snipcart.css"]'));n||(n=document.createElement("div"),n.id="snipcart",n.setAttribute("hidden","true"),document.body.appendChild(n)),h(n),i||(i=document.createElement("script"),i.src="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.js"),i.async=!0,t.appendChild(i)),!e&&window.SnipcartSettings.loadCSS&&(e=document.createElement("link"),e.rel="stylesheet",e.type="text/css",e.href="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.css"),t.prepend(e)),f.forEach(function(v){return document.removeEventListener(v,o)})}function h(t){!y||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();
</script>
```
Ensuite, vous devez intégrer chaque produit vendu par votre site sous la forme d'attributs HTML tels que :

```html
<button class="snipcart-add-item"
  data-item-id="starry-night"
  data-item-price="79.99"
  data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
  data-item-image="/assets/images/starry-night.jpg"
  data-item-name="The Starry Night">
  Ajouter au panier
</button>
```
Snipcart vous offre la possibilité de *customiser* des champs, ce qui rend la solution assez malléable. J'ai par exemple utilisé cette possibilité pour rajouter des dates d'atelier de dégustation, afin de mieux qualifier les commandes passées sur un site de spiritueux.

Le **tableau de bord** de Snipcart est relativement complet et vous permet de visualiser classiquement vos commandes en nombre et en valeur, le nombre de clients, les paniers abandonnés, de paramétrer vos offres promotionnelles ou de lancer des campagnes marketing pour convaincre vos prospects de finaliser leurs achats :<br><br>

![IMG](/assets/img/Snipcart_dashboard.webp "Tableau de bord de Snipcart")
<br><br>
Toute l'intégration du panier à votre site peut se réaliser en mode *test*, ce qui permet de simuler l'acte d'achat de bout-en-bout. Les *gateways* de paiement pré-câblées sont Stripe, Paypal, Square, Braintree, Mollie, Authorize.net, mais vous pouvez également connecter *des gateways* plus exotiques, quoique cela nécessite un peu plus d'expérience de développement.

#### Webhooks
Les [Webhooks] sont un moyen de notifier votre application qu'un événement vient de survenir, comme par exemple un nouvel ordre d'achat. Ils permettent une intégration plus fine du panier dans l'expérience e-commerce de votre site. A chaque événement que vous jugez important, Snipcart enverra un POST à une URL que vous définirez.

Toujours sur le site de spiritueux mentionné plus haut, j'ai mis en place un Webhook qui me notifie dès qu'une commande **complète** est passée. Je récupère alors le POST de Snipcart via une *netlify function* qui s'exécute côté serveur ; cette dernière stocke simplement toutes les caractéristiques de la commande dans une base de données, aux fins de statistiques.

Cette communication bi-directionnelle entre votre application et Snipcart autorise vraiment une expérience d'achat *sans couture*.

#### Un outil simple et robuste
Snipcart en est à sa version 3. Lancée fin 2013 au Québec, la solution aurait séduit plus de 20.000 développeurs et e-commerçants. [Duda] a récemment acquis la plateforme, ce qui lui donne *a priori* les moyens de son développement, l'équipe initiale de Snipcart n'étant composée que d'une douzaine de personnes.

Après l'avoir utilisé à plusieurs reprises depuis 2021, j'estime que confier la gestion du panier e-commerce de son site à Snipcart est raisonnable. Même si vous n'êtes pas un développeur très expérimenté, la **simplicité** d'intégration et de paramétrage de la plateforme feront la différence.

Le seul bémol peut toutefois résider dans la commission retenue par l'éditeur : **2%** de chaque transaction effectuée, sans minimum garanti. Vous devrez donc intégrer ce coût au *business plan* de votre site. L'avenir dira si son récent acquéreur change les règles du jeu :wink:



[> Accueil](/) [> Tous les articles](/articles)

[stripe]: https://stripe.com/fr/payments/checkout
[mollie]: https://www.mollie.com/fr/products/checkout
[Duda]: https://techcrunch.com/2021/09/01/web-building-platform-duda-snaps-up-e-commerce-cart-tool-snipcart/
[Snipcart]: https://snipcart.com/
[documentation]: https://docs.snipcart.com/v3/
[Webhooks]: https://snipcart.com/blog/what-are-webhooks-explained-example