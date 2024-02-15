---
title: Trois exemples d'utilisation de crawlee
date: 2023-06-16
category:
  - outils
tag:
  - automation
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

<br>


![IMG](/assets/img/crawlee-logo.webp "logo crawlee")
<br><br>
Récemment, l'un de mes collègues souhaitait récupérer une donnée issue du site public de la Haute Autorité de Santé et ce, pour chacun des 7.500 établissements référencés ! Evidemment, c'était un travail trop long à effectuer manuellement et j'ai eu le réflexe de lui proposer d'utiliser un crawler Javascript. Pour la petite histoire, dans les années 80, je faisais la même chose sur des services videotex (Minitel) :wink:

Bref, après quelques recherches, la librairie [crawlee] m'a paru répondre à ce besoin de *web scraping* et je vais vous partager trois exemples mis en oeuvre. Pas de souci particulier sur son installation, parfaitement expliquée dans la [documentation] de l'outil, et j'ai donc choisi le crawler Playwright dont j'avais déjà entendu parler. Cheerio ou Puppeteer sont également disponibles.

#### Exemple n°1 : récupérer la date de certification des établissements recensés par la HAS
Le besoin était donc de récupérer cette date de certification, présentée de la manière suivante, sur chaque [page] :
<br><br>
![IMG](/assets/img/HAS.webp "Emplacement de la date de certification à récupérer")
<br>
[L'exemple] très didactique exposé dans la documentation vous permet de tester la récupération de différents éléments d'une page. J'ai pu appliquer assez facilement les commandes décrites (*locator, getByRole, filter, textContent*) pour récupérer respectivement le nom de l'établissement, l'établissement de rattachement ainsi que la fameuse date :

```js
const nom_etablissement = await page.locator("h1").textContent();
const etablissement_rattachement = await page.getByRole("listitem").filter({ hasText: "Établissement de rattachement :" }).innerText();
const date_certification = await page.locator("div.blocDate").first().textContent();
```
**Un point important** : je trouve toutefois que la documentation de la librairie [Playwright] est plus complète, pour appréhender l'ensemble de ses possibilités.


#### Exemple n°2 : récupérer des *posts* du site Pharaon Magazine
Le second cas d'usage est un peu plus complexe. Mon frère désirait tester la récupération automatique des billets de son site [Pharaon Magazine] dans le cadre d'une éventuelle future refonte. Voici un exemple d'article :
<br><br>
>![IMG](/assets/img/Billet_pharaon.webp "Exemple de billet tiré du site Pharaon Magazine")
<br>

Le code pour récupérer le titre, la date, l'auteur et le contenu d'un billet est le suivant :
```js
const titre_billet = await page.locator("h1").textContent();

const submitted = await page.locator("div.meta > div.submitted").textContent();
if (submitted) {
   const datePattern = /\b\d{2}[//]\d{2}[//]\d{4}\b/;
   const matches = submitted.match(datePattern);
   date_billet = matches![0];
   auteur_billet = submitted.substring(submitted.indexOf("—") + 2);
}

const contenu_billet = await page.locator("div.node > div.content").textContent();
```
Comment sait-on, par exemple, que la date et l'auteur se trouvent dans *div.meta > div.submitted* ? En fait, c'est là que l'analyse du source de la page via les outils de développement de Google Chrome (rubrique Elements) s'avère indispensable :wink:

Enfin, comment crawler les 234 pages du site automatiquement ? J'ai repris simplement la commande *enqueueLinks* de la manière suivante :
```js
// On récupère tous les liens des pages (1 à 234), sous la forme "/node?page=x"
const links = await enqueueLinks({
    selector: ".pager-item > a",
    label: "LIST",
});

// On récupère les liens des billets sur CHAQUE page
await page.waitForSelector(".view-content");
    await enqueueLinks({
        selector: ".title > a",
        label: "DETAIL", // <= note the different label
});
```
<br>

#### Exemple n°3 : récupérer le nombre d'avis Google
Autre commande utilisée : *getByText("quelque chose")*. Dans ce dernier exemple, je souhaitais récupérer le nombre d'avis Google my Business d'une liste de magasins. 
<br><br>
![IMG](/assets/img/avis_google.webp "Exemple d'un nombre d'avis Google sur une pharmacie")
<br>
A noter que dans chaque page visitée, ce nombre apparait deux fois, d'où la commande *first* qui est nécessaire pour signifier au crawler qu'il peut s'arrêter dès qu'il trouve une valeur. Sans cela, il plante...

```js
const avis = await page.getByText("avis Google").first().textContent();
```
<br>

#### Un outil très complet
Voilà, j'espère que ces quelques exemples vous auront donné l'envie de tester cet outil. Je n'ai fait que que "gratter" la surface d'une librairie très complète, relativement simple à utiliser et très performante. Impressionnant de constater en effet la vitesse d'exécution du crawling de centaines de pages ! Crawlee peut vraiment vous faire économiser des heures de travail :smiley:



[> Accueil](/) [> Tous les articles](/articles)

[crawlee]: https://crawlee.dev/
[documentation]: https://crawlee.dev/docs/quick-start
[page]: https://www.has-sante.fr/jcms/1_FicheEtablissement/fr/
[L'exemple]: https://crawlee.dev/docs/introduction/real-world-project
[Playwright]: https://playwright.dev/docs/api/class-playwright
[Pharaon Magazine]: https://www.pharaon-magazine.fr/
