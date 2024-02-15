---
title: 'Speedlify CAC40 : update décembre 2023'
date: 2023-12-30
category:
  - outils
tag:
  - performance
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

<br>

![IMG](/assets/img/vinci_logo.webp "Vinci")
<br><br>
Vinci a détroné Arcelor-Mittal qui, lors de notre précédente mise à jour, avait décroché la "timbale" avec [un score impressionnant de 400 !]

Le métallurgiste reste néanmoins second mais c'est surtout **Edenred** qui impressionne : à peine rentré dans le CAC40, la société se classe dans le tiercé gagnant des sites web les plus vertueux :wink:

La queue du peloton est désormais occupée par Veolia, ST Micro et Michelin. Les deux derniers étaient d'ailleurs également à ces mêmes positions en mars dernier, preuve que leurs équipes digitales n'ont pas pris le temps d'améliorer les performances de leur site Web. Dommage :thinking:

Le dernier classement de l'année (à noter que la moyenne des 39 valeurs mesurées **n'a quasiment pas évolué** entre mars et décembre, 320,95 versus 321,18):

| Rang        |      Société      |  Score Lighthouse | CO2 |
| ------------- | :-----------: | ----: | -----: |
|**1**|	**VINCI**	|**389**| <span style="color:green">**B (0,27g CO2)**</span> |
|2	|ARCELORMITAL	|388| C (0,36g CO2) |
|3	|EDENRED	|371| F (1,76g CO2) |
|4|	BOUYGUES|	366| C (0,38g CO2) |
|5|	PERNOD RICARD	|355| F (1,33g CO2) |
|6|	SAFRAN	|352| F (7,32g CO2) |
|7	|AIRBUS GROUP|349| F (2,63g CO2) |
|8	|WORDLINE|	349| F (1,35g CO2) |
|9	|ESSILORLUXOTTICA	|345| F (2,32g CO2) |
|10	|STELLANTIS	|345| F (1,69g CO2) |
|11	|TOTALENERGIES	|345| <span style="color:green">**B (0,31g CO2)**</span> |
|12|	ORANGE|	343| C (0,36g CO2) |
|13|	SOCIETE GENERALE|	337| F (2,83g CO2) |
|14	|AIR LIQUIDE	|335| F (2,12g CO2) |
|15	|SCHNEIDER ELECTRIC	|330| F (1,28g CO2) |
|16	|SAINT-GOBAIN	|328| E (0,74g CO2) |
|17	|BNP PARIBAS|	326| C (0,45g CO2) |
|18	|PUBLICIS	|324| D (0,53g CO2) |
|19	|ALSTOM	|320| F (1,98g CO2) |
|20	|AXA	|318| F (0,98g CO2) |
|21	|LVMH|	318| D (0,64g CO2) |
|22|	EUROFINS SCIENTIFIC|	317| C (0,39g CO2) |
|23	|DASSAULT SYSTEMES|	312| F (2,85g CO2) |
|24|	LEGRAND	|312| E (0,82g CO2) |
|25|	UNIBAIL-RODAMCO-WESTFIELD|	312| D (0,52g CO2) |
|26|	CAP GEMINI|	311|  F (1,01g CO2) |
|27	|ENGIE	|308| C (0,36g CO2) |
|28	|KERING|	307| F (21,97g CO2) |
|29	|RENAULT|	304| E (0,78g CO2) |
|30|	CARREFOUR	|300| <span style="color:green">**B (0,33g CO2)**</span> |
|31|	CREDIT AGRICOLE|	299| C (0,42g CO2) |
|32	|DANONE|	297| E (0,83g CO2) |
|33|	TELEPERFORMANCE|	297| F (11,05g CO2) |
|34	|SANOFI|	296| F (2,24g CO2) |
|35|	THALES|	295| F (2,21g CO2) |
|36	|L'OREAL|	285| <span style="color:green">**B (0,27g CO2)**</span> |
|37	|VEOLIA	|263| F (0,85g CO2) |
|38	|ST MICRO|	257| F (2,65g CO2) |
|39	|MICHELIN	|221| F (1,65g CO2) |
|*40*|	*HERMES INTERNATIONAL*|	*0*|

Un focus sur le poids des pages d'accueil met à l'honneur Arcelor-Mittal, Bouygues et Orange avec **un poids inférieur à 1 Méga-octets**. En mars dernier, ils étaient cinq à se prévaloir de cette performance : Arcelor-Mittal, Société Générale, Vinci, EssilorLuxottica et Vivendi (qui est sortie du CAC40 au 1er juillet dernier). Comme quoi, conserver sa "sobriété web" est un défi quotidien, surtout quand on voit Kering qui n'a toujours pas amélioré ce critère : 22 Mo en mars 2023, 34 Mo pour terminer l'année :upside_down_face:

Enfin, n'avez-vous toutefois rien remarqué ?... En effet, une nouvelle colonne vient d'apparaître qui vous donne **l'empreinte carbone** de la même page en gramme(s) de CO2 généré(s) pour chaque appel. Cette notation provient du site [Website Carbon Calculator] et vous pourrez la comparer à d'autres outils tels que [EcoIndex] ou [Ecograder].

La première chose que l'on apprend en parcourant ces notations est qu'aucune page d'accueil de ces sites institutionnels ne parvient à obtenir une note A+ ou A ; **seuls 4 sites décrochent une notation B** et 7 une notation C... Plus préoccupant, plus de la moitié des sites en présence sont notés F... avec des disparités vraiment très fortes (que penser de Kering ou TP ?) !

La seconde chose est qu'il **n'existe pas de corrélation immédiate** entre un site bien noté par Lighthouse et une empreinte carbone minimale. En effet, Edenred est 3ème de notre classement mais pourtant noté F ; à l'inverse, L'Oréal est 36ème sur 39 au niveau Lighthouse et affiche seulement 0,27g CO2 (note B). Bref, de futures mesures et, pourquoi pas, des rapprochement d'outils permettront d'y voir plus clair à l'avenir :smirk:

Vous pouvez retrouver toutes les mesures et leurs variations depuis le lancement du site sur [Speedlify CAC40].

*NB : Euronext ayant décidé de réinclure Vivendi SE dans le CAC40 en remplacement de Worldine (18/12/2023), la prochaine mise à jour de speedlify CAC40 tiendra compte de cette modification*

[> Accueil](/) [> Tous les articles](/articles)

[Speedlify CAC40]: https://speedlifycac40.andretonic.fr/
[un score impressionnant de 400 !]: /posts/speedlify_cac40_mars2023.md
[Website Carbon Calculator]: https://www.websitecarbon.com
[EcoIndex]: https://www.ecoindex.fr
[Ecograder]: https://ecograder.com