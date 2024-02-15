---
title: Kikō, un démonstrateur climatique
date: 2023-03-09
category:
  - projets
tag:
  - Vue.js
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

<br>

![IMG](/assets/img/mont_fuji.webp "Mont Fuji")
<br><br>
Pour ceux qui me suivent depuis la création de ce blog, j'avais déjà parlé de ce *[side project]*, initialement écrit en C++ (v1.0). Pourquoi Kikō ? Je cherchais un terme court qui signifiait "climat" et, comme je suis un amoureux du pays du Soleil Levant, Kikō se traduit justement par *climat* en japonais... 

#### La genèse de Kikō
L'idée m'est venue en juillet 2018 alors que mon épouse et moi-même recherchions une maison de campagne en province. Nous étions déjà sensibles aux modifications climatiques et souhaitions mieux connaître les évolutions de température, ensoleillement et précipitations en France métropolitaine. En fouillant un peu les données publiques, je suis rapidement tombé sur la possibilité de télécharger des données climatiques gratuitement sur le site de [Météo France].

Par la suite, j'ai également voulu intégrer la [valeur foncière] des maisons vendues ainsi que les sites [Seveso] et nucléaires, à proximité des quelques 400 stations météo référencées.

Aves ces centaines de milliers de données remises à jour régulièrement, j'avais matière à travailler :wink:

#### L'interface de Kikō v2.0
Le back-office de l'outil, qui correspond *grosso modo* au chargement des données, a été porté assez rapidement de C++ à Node.js, sans difficultés majeures. J'ai d'ailleurs à l'époque était assez surpris par une vitesse de traitement des fichiers (quand même plus d'un million de lignes pour les valeurs foncières) **quasi identique** entre les deux langages.

Côté interface utilisateur, ce que vous pouvez voir en vous connectant à [Kikō], reste pour le moment très simple, que vous disposiez d'un grand écran ou d'un smartphone :
- Une première zone référence les valeurs de la station météorologique la plus proche de mon domicile, en l'occurence celle de **Trappes**. Cela me permet de pouvoir comparer en un clin d'oeil les conditions climatiques que je connais bien, avec celles des stations renvoyées par ma recherche.
- Une seconde zone permet de saisir une fourchette de valeurs pour **quatre critères climatiques** que sont la température moyenne (en degrés celsius), la durée d'insolation (en heures/an), le niveau des précipitations (en mm/mois) et le nombre de jours de rafales de vent par an (vitesse > 58 km/h).
- Une troisième zone propose deux recherches **rapides** : l'une pour un numéro de département (DOM-TOM compris), la seconde pour obtenir les risques (Seveso et nucléaire) liés à une commune en particulier.
- La quatrième zone se remplira automatiquement, dès le lancement d'une recherche, avec une **liste de stations météorologiques** répondant aux critères saisis. En sus des 4 critères déjà mentionnés, la température minimale, la température maximale, la distance de la centrale nucléaire la plus proche ainsi que le prix moyen des maisons vendues sur le département, s'afficheront.

Les valeurs annuelles affichées sont, à date, moyennées sur la période **1991-2020** (hors records climatiques). La période précédente (1980-2010) présentait des valeurs parfois notoirement plus basses, avec par exemple une température moyenne annuelle inférieure de plusieurs dizièmes de degrés...

#### La stack technique de Kikō
Pour mes ami(e)s codeurs, voici le détail de la stack technique utilisée :
- Vue.js : version 3
- Faunadb : base de données serverless
- VueUse : utilitaires
- PrimeVue : composants graphiques
- Vee-validate : validation des champs de saisie
- Yup : *schema builder* utilisé très souvent avec Vee-validate
- Pinia : gestion des états
- Sharp : transformation des images png/jpg au format compact webp

Comme vous pouvez le constater, rien d'extravagant. Les tests *lighthouse* sont d'ailleurs corrects :wink:

Enfin, pour les matheux, j'utilise la [formule de Haversine] pour calculer la distance entre deux points à *vol d'oiseau* (distance de la centrale nucléaire la plus proche).

#### Et la suite ?
Comme je l'ai antérieurement énoncé, Kikō est un *démonstrateur* encore très simple. Il m'a servi à progresser dans le traitement de la donnée et à m'aguerrir à l'utilisation du framework Vue.js. Dans les années à venir, je continuerai à l'améliorer avec les quelques idées suivantes :
- Choisir sa station de référence
- Intégrer des prévisions à 10, 20 ou 50 ans
- Afficher les résultats sur une carte dynamique
- Montrer les évolutions et les records sous forme graphique
- etc.

Si ce projet vous intéresse, n'hésitez pas à me [contacter] pour échanger :sunrise_over_mountains:

[side project]: /posts/pourquoi_c_plus_plus.md
[Météo France]: https://donneespubliques.meteofrance.fr
[valeur foncière]: https://www.data.gouv.fr/fr/datasets/demandes-de-valeurs-foncieres
[Seveso]: https://public.opendatasoft.com/explore/dataset/sites-seveso/table
[Kikō]: https://kiko.andretonic.fr
[formule de Haversine]: https://fr.wikipedia.org/wiki/Formule_de_haversine
[contacter]: /contact




[> Accueil](/) [> Tous les articles](/articles)