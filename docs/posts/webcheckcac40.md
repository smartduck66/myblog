---
title: WebCheck'CAC40, la refonte de Speedlify'CAC40
date: 2024-02-03
category:
  - projets
tag:
  - Vue.js
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

<br>

![IMG](/assets/img/WebCheckCAC40.webp "WebCheck'CAC40")
<br><br>
Les travaux de Zach Leatherman, le créateur entre autres du SSG 11ty, m'avaient permis d'implémenter l'année dernière le projet [Speedlify]. La mesure systématique des indicateurs Google Lighthouse sur les emblématiques sites institutionnels du CAC40 ont été fort instructifs : des ressources financières illimitées ne sont hélas pas toujours synonymes de qualité. Seulement **7 à 8** des plus importantes sociétés françaises parviennent à dépasser la note de 360 sur 400 (= 90 x 4 indicateurs) et, en général, **une seule** dépasse les 390 sur 400. Evidemment, on peut toujours rétorquer que Lighthouse n'est pas *l'alpha et l'oméga* de la mesure de la performance d'un site Web et c'est probablement vrai. Mais ces outils de mesure ont déjà 5 ans, s'améliorent sans cesse, sont plutôt bien documentés et tout développeur, s'il s'en donne la peine, peut **auditer et améliorer la performance globale de son site**. A fortiori, les équipes internes ou les agences digitales qui réalisent les applications Web des géants économiques français...

Le dernier **batch** de mesures du 2 février nous fournit le quinté suivant :
- ArcelorMittal : 392 sur 400
- Vinci : 378 sur 400
- Edenred : 371 sur 400
- Saint-Gobain : 366 sur 400
- Pernod-Ricard : 363 sur 400

Je vous laisse découvrir les mauvais élèves en allant naviguer sur le [site] :wink:

Pourquoi avoir refondu Speedlify ? Surtout pour avoir totalement la main sur le code de l'application. J'ai donc repris le module *performance-leaderboard* de Zach et bâti une application en Vue.js, mon framework Javascript de prédilection. Et voici, WebCheck'CAC40 !

Un tableau collationne les **4 métriques principales issues de Lighthouse** (performance, accessibilité, Bonnes pratiques, SEO) ainsi que la répartition du **poids des pages** auditées. Un clic sur l'une des lignes du tableau vous permet de récupérer des indicateurs encore plus fins, comme le **FCP, le SI, le LCP, le TBT ou encore le CLS**. En sus, un affichage de **l'empreinte carbone** de la page est proposée, via Website Carbon Calculator, en fonction de la disponibilité de l'API. Enfin, un graphique historique présente l'évolution de la performance globale dans le temps, pour chacune des valeurs du CAC40.

### L'architecture de WebCheck'CAC40
J'ai souhaité capitaliser sur ma petite expertise de Vue.js, en continuant à faire confiance à ce framework, décidément toujours aussi facile d'accès. Cette application purement *front* s'appuie sur les modules suivants, déjà utilisés par exemple dans [botanical] ou [kiko] :
- **Vue Router** : npm i vue-router@4
- **VueUse** : npm i @vueuse/core (utilitaires)
- **PrimeVue** : npm i primevue (composants graphiques)
- **Pinia** : npm i pinia (gestion des états)
- **Sharp** : npm install sharp (package utilisé pour transformer en masse les images png/jpg en webp)
- **eCharts/vue-echarts** : npm i echarts vue-echarts (graphiques)

Le répertoire source central de l'application est décomposé en 4 sections assez classiques : assets, components, router, views. 
<br>

![IMG](/assets/img/archi_webcheckcac40.webp "Architecture de WebCheck'CAC40")
<br><br>
Le script *main.ts* instancie *App.vue*, qui lance le *Masthead* puis *Mesures.vue* qui présentent les derniers chiffres. Les données sont calculées directement sur mon PC, en local, via un script *node.js* qui appelle le module *performance-leaderboard* et crée des fichiers *json* stockés dans le répertoire /public. Cette génération *pseudo*-statique permet d'éviter une base de données, chaque fichier de mesures ne pesant que **27 ko** pour les 39 valeurs du CAC40 (Hermes est toujours aussi peu réceptif à la mesure...). Je vais tenter de lancer ce script **hebdomadairement** pour disposer de statistiques régulières.

Comme indiqué plus haut, cliquer sur l'une des lignes du tableau permet d'afficher une pop-up qui est en fait un composant Vue.js nommé *Teleport*. Ce composant natif permet de "téléporter" une partie du template d'un composant dans un nœud du DOM, qui existe en dehors de la hiérarchie du DOM de ce composant. Voici le code qui devrait vous permettre de mieux comprendre :

```js
<Teleport to="body">
    <div v-if="open" class="modal">
      <div @click="open = false">
        <img src="../assets/img/close.png" class="Close" />
      </div>
      <div class="FlexWrapper_modal">
        <div class="sous-titre2">{{ URL }} : KPIs & mix poids page ({{ store.milliers_2.format(page_weight / 1024) }} Mo)</div>
        <div class="my_grid">
          <div class="c-item-1">
            <div>
              <a target="_blank" href="https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint" aria-label="FCP">FCP</a>
              <span> (First Contentful Paint) : </span>
            </div>
            ...
          </div>
          <div class="c-item-2">
            <div>{{ store.milliers_2.format(FCP) + " s" }}</div>
            ...
          </div>
          <div class="c-item-3">
            <div :style="{ 'background-color': FCP_color, color: FCP_color }">FCP</div>
            ...
          </div>
        </div>
        <Chart v-bind="{ values: weights, width: 320, height: 280, color: '#0a94a8' }" />
        <div class="legend">Poids : images, scripts, document, fontes, styles, modules tierce partie</div>
      </div>
    </div>
  </Teleport>
```
Je trouve ce composant très pratique au bémol près qu'il peut rapidement "gonfler" le module javascript sous forme de "code non utilisé" et, donc, dégrader l'indicateur de performance de Lighthouse.

Vous avez peut-être remarqué l'exposition d'un composant **Chart** dans le code ci-dessus. En fait, il appelle le code suivant, qui permet de construire un graphique très simplement :
```js
<script lang="ts">
import { use } from "echarts/core";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import VChart from "vue-echarts";
import { ref, defineComponent } from "vue";

use([PieChart, CanvasRenderer, UniversalTransition]);

export default defineComponent({
  // A type helper for defining a Vue component with type inference
  name: "Chart",
  components: {
    VChart,
  },

  props: ["values", "width", "height", "color"],

  setup(props) {
    const option = ref({
      series: [
        {
          type: "pie",
          data: props.values,
        },
      ],
    });
    const init_options = ref({
      width: props.width,
      height: props.height,
    });

    return { option, init_options };
  },
});
</script>

<template>
  <v-chart class="chart" :option="option" :init-options="init_options" />
</template>

<style scoped>
.chart {
  height: 100vh;
}
</style>
```
Après avoir importé les bons modules [d'Apache Echarts], il suffit de lui demander le graphique à tracer (*type: "pie"*) puis de lui passer les valeurs (*data: props.values*) :blush: Vous avez un second graphique, [historique] celui-ci, qui deviendra plus expressif le temps passant.


### Conclusion
Pour terminer, un petit mot sur la mesure des indicateurs Lighthouse de cette application :
<br>

![IMG](/assets/img/lighthouse_webcheckcac40.webp "Lighthouse")
<br><br>
Evidemment, il est beaucoup plus simple d'obtenir ce genre de score sur une petite application, même si gagner ne serait-ce qu'un point n'est pas toujours si simple. J'ai du passer plusieurs heures pour *splitter* proprement mes modules javascript (chargement de composants dynamiques), travailler les couleurs pour que le contraste ne soit pas trop faible, appliquer de judicieux *async* pour que le chargement des différents fichiers de l'application soit le plus parallélisé possible... ou encore faire maigrir le thème fourni par PrimeVue de **174 à 26 ko** en ne conservant que le code CSS véritablement nécessaire aux composants graphiques utilisés (Datatable, Menu, Dropdown, Card).

Et la suite, me direz-vous ? Je souhaite améliorer WebCheck'CAC40 tout au long de cette année en lui adjoignant, par exemple, une section présentant des analyses plus **profondes** des sites mesurés. A très vite, donc :smiley:


Retrouvez tous mes projets personnels, ainsi que WebCheck'CAC40, dans cette [section] de mon blog.
<br><br>

::: tip Mise à jour du 1er mars
J'ai décidé de publier WebCheck'CAC40 en Open Source, licence MIT, pour trois raisons principales :

- Cet outil de mesure des indicateurs Lighthouse des sites institutionnels du CAC40 est dorénavant suffisamment stable pour être diffusé
- Etant principalement construit autour de modules Open Source, il est normal de le partager avec la Communauté
- J'espère que cela poussera de nombreux développeurs à auditer plus systématiquement les sites qu'ils construisent, en constatant la simplicité d'implémentation de l'API Google Lighthouse

:::
<br><br>

[> Accueil](/) [> Tous les articles](/articles)

[section]: /projets
[Speedlify]: https://speedlifycac40.andretonic.fr/
[site]: https://webcheckcac40.andretonic.fr/
[botanical]: https://jazzy-florentine-dc0c2d.netlify.app/
[kiko]: https://kiko.andretonic.fr/
[d'Apache Echarts]: https://echarts.apache.org/en/index.html
[historique]: https://webcheckcac40.andretonic.fr/historique
