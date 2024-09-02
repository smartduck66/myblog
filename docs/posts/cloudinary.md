---
title: Pourquoi utiliser Cloudinary ?
date: 2024-09-02
category:
  - outils
tag:
  - Vue.js
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

<br>

![IMG](/assets/img/cloudinary.webp "Cloudinary")
<br><br>
Je viens d'être confronté à un problème, simple de prime abord, mais qui a des répercussions profondes sur tout site web : **comment gérer ses ressources multimedia d'une manière dynamique**, i.e. en octroyant la possibilité à un administrateur externe d'en télécharger, modifier ou éventuellement supprimer ?
<br><br>
En effet, depuis que je suis remis à développer, je n'ai délivré que des sites statiques sur lesquels j'avais totalement "la main" : dès que je devais modifier une image, je reconstruisais le site et le remettais en ligne sans me poser de questions. Pour technosaures.fr, j'ai toutefois mis en place un éditeur autorisant *l'upload* d'images... éléments que je devais récupérer plus ou moins manuellement lors de chaque mise à jour du code du site via gitHub :unamused:
<br><br>
Refondant depuis quelques semaines un site Web pour un journal spécialisé (nous en reparlerons...), j'ai dû sérieusement me repencher sur ce sujet afin de **découpler** la gestion des images. Pour ce faire, j'ai opté pour le Digital Asset Manager (DAM) nommé [Cloudinary] qui me permet de totalement déléguer la gestion de toutes les ressources multimedia du site.

Le site Web, réalisé en Vue.js et adossé à une base de données *serverless* [Turso], appelle les images via leur identifiant stocké en base. C'est simple, rapide et efficace.

### Mise en place et utilisation basique
L'intégration du module NPM à votre code s'effectue grâce à la commande suivante, qui installe également le *wrapper* pour Vue.js :

```cmd
npm i cloudinary @cloudinary/url-gen @cloudinary/vue
```
La première utilisation d'un DAM est de pouvoir afficher des images, préalablement chargées via la console d'administration. Le code est vraiment très simple :

```js
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/vue";

// Création d'une instance utilisant l'identifiant Cloudinary fourni lors de l'inscription au service SaaS
const cld = new Cloudinary({
  cloud: {
    cloudName: id_cloudinary,
  },
});
...
// Dans la section template du composant Vue.js
<div class="c-vignette-1">
	<AdvancedImage :cldImg="cld.image(directory + reference_image)" class="responsive-img-global" alt="imageProduit" />
</div>
```
Le composant *AdvancedImage* charge l'image en lui passant son répertoire de stockage dans Cloudinary et sa référence, un style pouvant lui être appliquée. C'est tout ! Difficile de faire plus simple...

### Chargement d'images *en masse* et autres manipulations
Charger des images via la console d'administration de Cloudinary s'avère très facile... mais pas quand l'on doit en charger plusieurs milliers :wink: J'ai donc écrit un batch en node.js qui m'a permis de récupérer rapidement les images de l'ancien site écrit en Drupal :

```js
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: CLD_CLOUD_NAME,
  api_key: CLD_API_KEY,
  api_secret: CLD_API_SECRET,
});

// Upload l'image dans Cloudinary
await cloudinary.uploader
  .upload(filepath, {
    public_id: imageKey,
    folder: cld_path_actus,
  })
  .catch((error) => {
    console.log(error);
  });
```
L'architecture que j'ai retenue, une nouvelle fois, est basée sur des fonctions *serverless* qui constituent le back office du site. Je les appelle d'une manière sécurisée à partir du *front* pour, entre autres, permettre à l'Administrateur externe du site de charger des images liées aux articles éditoriaux qu'il saisit régulièrement :

```js
// Upload d'une image et transformation de l'image en webP (values[] = array de valeurs passé à partir du front de l'application)
await cloudinary.uploader.upload(`data:image/jpeg;base64,${values[0]}`, {
  public_id: values[1],
  folder: values[2],
  resource_type: "image",
  format: "webp",
});

// Suppression d'une image    
await cloudinary.uploader.destroy(values[0]);

// Vérification de l'existence d'une image
await await cloudinary.api.resource(values[0]);
```
Ces quelques exemples vous permettront de constater la simplicité d'utilisation de Cloudinary. Pour aller plus loin, je vous conseille la lecture de la section [Developers] de leur site.


### Limitations
Même si j'ai à peine "gratté la surface" de ce service, deux points me semblent importants à souligner :

- La version gratuite vous autorise 25.000 **transformations** mensuellement (chargement, suppression, opération sur l'image, etc.). Cela peut paraître beaucoup mais finalement assez peu dès que votre site sera en production. Le problème, à mon sens, est l'inexistence d'un palier tarifaire intermédiaire entre la gratuité et le premier prix de 89$/mois pour 225.000 manipulations. Il faut espérer que l'éditeur modifie cette politique prochainement.
- La version gratuite **n'autorise pas la manipulation de documents PDF** ; j'ai donc dû développer pour le moment un processus *in house*, ce qui altère l'homogénéité du traitement des ressources multimedia du site.

En conclusion, utiliser un DAM couplé à un site Web peut faire sens si vous devez confier la mise à jour *d'assets digitaux* à une tierce personne. Découpler la gestion des données au sens large (data, images, fichiers, etc.) du code de l'application apporte une réelle souplesse dans la maintenance au long cours :+1:

[> Accueil](/) [> Tous les articles](/articles)

[Cloudinary]: https://cloudinary.com/
[Turso]: https://turso.tech/
[Developers]: https://cloudinary.com/developers

