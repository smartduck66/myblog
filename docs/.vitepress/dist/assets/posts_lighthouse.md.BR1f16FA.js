import{_ as a,c as n,m as e,a as r,t,V as i,o,am as u,an as l}from"./chunks/framework.DyooxGaQ.js";const P=JSON.parse('{"title":"Lighthouse","description":"","frontmatter":{"title":"Lighthouse","date":"2023-01-10T00:00:00.000Z","category":["outils"],"tag":["performance"],"archive":false},"headers":[],"relativePath":"posts/lighthouse.md","filePath":"posts/lighthouse.md"}'),d={name:"posts/lighthouse.md"},c={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),m={id:"frontmatter-date-substring-8-10-frontmatter-date-substring-5-7-frontmatter-date-substring-0-4",tabindex:"-1"},h=e("br",null,null,-1),g=e("br",null,null,-1),f=e("a",{class:"header-anchor",href:"#frontmatter-date-substring-8-10-frontmatter-date-substring-5-7-frontmatter-date-substring-0-4","aria-label":'Permalink to ":calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>"'},"​",-1),b=i('<p>Auditer, améliorer et monitorer le plus régulièrement et automatiquement possible son site web constituent la clé d&#39;un bon référencement par les moteurs de recherche. De fait, un site lent, ne respectant pas les standards d&#39;accessibilité ou les bonnes pratiques de développement aura peu de chances de figurer dans les 10 premiers sites affichés lors d&#39;une recherche sur Google. Rassurez-vous : une bonne (éco-) conception et un peu de bons sens (pas d&#39;images qui pèsent 5 mo...) vous permettront assez facilement d&#39;obtenir des scores corrects. J&#39;en ai eu récemment un bon exemple lors de la refonte d&#39;un site web écrit initialement sous Wordpress : la performance initiale était à peine de 60/100. Après quelques heures d&#39;investigation et de paramétrage (cache, poids des images, etc.), j&#39;étais remonté à plus de 70 ; sa refonte en vue.js m&#39;a amené plus tard à 95/100...</p><h3 id="lighthouse-a-minima" tabindex="-1">Lighthouse, a minima <a class="header-anchor" href="#lighthouse-a-minima" aria-label="Permalink to &quot;Lighthouse, a minima&quot;">​</a></h3><p>Google a mis à disposition des développeurs, depuis plusieurs années, différents outils qui vous aideront à mieux analyser la performance de votre site web. Par exemple, <a href="https://developer.chrome.com/docs/lighthouse/overview/" target="_blank" rel="noreferrer">Lighthouse</a> est fourni dans le navigateur Chrome (&gt; Plus d&#39;outils &gt; Outils de développement &gt; Lighthouse), vous permettant de lancer un test &quot;à la volée&quot; sur la page affichée. Cinq scores sont disponibles :</p><ul><li><strong>Performance</strong> : six métriques principales (cf. ci-dessous) vous donneront une mesure <em>spot</em> de la performance de votre site. Chacune a un <a href="https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/" target="_blank" rel="noreferrer">poids</a> plus ou moins important dans le score global.</li><li><strong>Accessibilité</strong> : un site se doit d&#39;être lisible, ergonomique, utilisable pour toute personne le visitant. Par exemple, une police de caractères trop petite ou trop peu de contraste sur un bouton sont des défauts à corriger. Le W3C a édité une <a href="https://www.w3.org/WAI/standards-guidelines/" target="_blank" rel="noreferrer">norme</a> qui évolue régulièrement.</li><li><strong>Bonnes pratiques</strong> : développer un site web repose sur des méthodologies éprouvées. Que ce soit du bon usage des balises HTML, de la résolution des images servies ou de la sécurité du site, vous devez appliquer les <a href="https://developer.chrome.com/docs/lighthouse/best-practices/" target="_blank" rel="noreferrer">bonnes pratiques</a> reconnues par l&#39;industrie.</li><li><strong>SEO</strong> : les vérifications effectuées par ces tests vous assurent que votre site suit les optimisations minimales nécessaires à une bonne <a href="https://www.seo.fr/definition/seo-definition" target="_blank" rel="noreferrer">indexation</a> par les moteurs de recherche.</li><li><strong>PWA</strong> : enfin, le score <a href="https://fr.wikipedia.org/wiki/Progressive_web_app" target="_blank" rel="noreferrer">Progressive Web App</a> valide les différents aspects liés à cette technologie, encore trop peu mise en oeuvre. <br><br><img src="'+u+'" alt="IMG" title="Scores Lighthouse sur la page d&#39;accueil du blog"><br></li></ul><p>Lighthouse est vraiment l&#39;outil qu&#39;il vous faut a minima utiliser pour maintenir la qualité perçue de votre site web, d&#39;autant plus qu&#39;il est facilement intégrable dans une chaîne CI-CD. D&#39;ailleurs, la vraie force de l&#39;outil réside dans les recommandations proposées : en les suivant, vous êtes certain de faire progresser votre score sur chacune des dimensions. Le <em>graal</em> est évidemment de &quot;topper&quot; les 4 premiers indicateurs à 100, comme par exemple sur cette <a href="https://www.speedlify.dev/eleventy-starters/" target="_blank" rel="noreferrer">page</a>. Si vous voulez constater la mise en oeuvre sur votre propre site de divers endroits du monde, je vous conseille de tester <a href="https://lighthouse-metrics.com/" target="_blank" rel="noreferrer">Lighthouse Metrics</a>.</p><h3 id="creusons-les-indicateurs-de-la-performance" tabindex="-1">&quot;Creusons&quot; les indicateurs de la performance <a class="header-anchor" href="#creusons-les-indicateurs-de-la-performance" aria-label="Permalink to &quot;&quot;Creusons&quot; les indicateurs de la performance&quot;">​</a></h3><p>Il est intéressant de bien comprendre chacun des indicateurs suivants, ce qui vous donnera les clés pour les améliorer et, donc, obtenir une performance se rapprochant des 100 points :</p><ul><li><strong>First Contentful Paint</strong> : FCP mesure le nombre de secondes nécessaires au navigateur pour afficher le premier objet du <a href="https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model" target="_blank" rel="noreferrer">DOM</a> (ex : une image), une fois que l&#39;usager a demandé la page en question. Votre site sera considéré comme rapide si le FCP est inférieur à 1,8 seconde, lent au-dessus de 3 secondes. Le chargement des fontes de caractères impacte particulièrement cet indicateur, raison pour laquelle le format <a href="https://fr.wikipedia.org/wiki/Web_Open_Font_Format" target="_blank" rel="noreferrer">WOFF</a> est de plus en plus préféré.</li><li><strong>Speed Index</strong> : SI mesure le nombre de secondes nécessaires au navigateur pour afficher un contenu durant le chargement d&#39;une page. Lighthouse capture une vidéo de la page se chargeant dans le navigateur puis calcule la progression visuelle entre les différentes <em>frames</em>. SI sera bon si sa mesure est inférieure à 3,4 secondes, mauvais si elle dépasse 5,8 secondes. L&#39;une des manières d&#39;améliorer cet indicateur est de réduire le temps d&#39;exécution du code javascript.</li><li><strong>Largest Contentful Paint</strong> : LCP mesure le nombre de secondes nécessaires au navigateur pour afficher l&#39;image ou le bloc de texte le plus large de la page, dans la surface visible par l&#39;usager (<em>viewport</em>) qui varie en fonction de la taille physique de l&#39;écran. Un bon score doit être inférieur à 2,5 secondes ; un mauvais dépasse les 4 secondes. L&#39;optimisation des images, des fontes de caractères, du code JS ou CSS contribuera à l&#39;améliorer.</li><li><strong>Time to Interactive</strong> : TTI mesure le nombre de secondes nécessaires à une page pour être &quot;totalement interactive&quot;. Trois critères sont pris en compte par Lighthouse pour déterminer cet état : la page affiche du contenu &quot;utile&quot; (mesuré par l&#39;indicateur FCP), les <a href="https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers" target="_blank" rel="noreferrer"><em>event handlers</em></a> sont accessibles pour la plupart des éléments visibles de la page et la page est capable de répondre aux interactions de l&#39;utilisateur en moins de 50 millisecondes. On considérera que le TTI d&#39;une page est correct en dessous de 3,8 secondes, mauvais au dessus de 7,3 secondes. Un bon remède à un TTI médiocre est de différer ou, mieux, supprimer le chargement de code javascript.</li><li><strong>Total Blocking Time</strong> : TBT mesure le temps qu&#39;une page reste &quot;bloquée&quot; avant de répondre à une interaction de l&#39;utilisateur (clic souris, touche pressée, appui sur l&#39;écran). Toute tâche qui requiert plus de 50 millisecondes (ms) pour s&#39;exécuter est considérée comme trop longue. La somme est calculée en additionnant la &quot;portion bloquante&quot; (nombre de ms au dessus de 50) de toutes les &quot;longues&quot; tâches entre les indicateurs FCP et TTI. TBT s&#39;avérera correct en dessous de 200 ms, lent au dessus de 600 ms.</li><li><strong>Cumulative Layout Shift</strong> : CLS mesure la stabilité visuelle d&#39;une page. Il augmente à chaque changement visuel inattendu qui dégrade l&#39;expérience utilisateur. Un bon CLS est inférieur à 0,1, un mauvais est supérieur à 0,25. Une bonne façon de l&#39;améliorer est, par exemple, de fixer la taille des images et des vidéos.</li></ul><p>D&#39;autres indicateurs existent comme le <strong>FID</strong> (First Input Delay) qui mesure la durée maximum potentielle entre une interaction demandée par l&#39;usager (ex : un clic sur un bouton) et la capacité réelle du navigateur à répondre à cette demande.</p><p>Comme vous pouvez le constater, ces indicateurs ne sont pas toujours simples à appréhender et les mesures dépendent de facteurs comme la puissance du processeur ou le débit d&#39;accès à Internet. Pour cette raison, Lighthouse affiche en bas des résultats un cartouche décrivant l&#39;environnement dans lequel les tests sont effectués : <br><br><img src="'+l+'" alt="IMG" title="Références de mesures Lighthouse"><br></p><h3 id="speedlify-de-zach-leatherman" tabindex="-1">Speedlify de Zach Leatherman <a class="header-anchor" href="#speedlify-de-zach-leatherman" aria-label="Permalink to &quot;Speedlify de Zach Leatherman&quot;">​</a></h3><p>Sinon, le créateur du SSG Eleventy met à disposition l&#39;outil <a href="https://www.zachleat.com/web/speedlify/" target="_blank" rel="noreferrer">speedlify</a> que j&#39;ai moi-même instancié sur les valeurs du <a href="https://speedlifycac40.andretonic.fr/" target="_blank" rel="noreferrer">CAC40</a>. Zach a utilisé les API mises à disposition par Google pour automatiser la mesure des scores Lighthouse. L&#39;outil permet de suivre dans le temps la performance de sites externes (ou de ses propres sites, bien entendu) et il est toujours instructif de constater le chemin qui reste à parcourir, même pour des entreprises renommées 😉</p><p><a href="/">&gt; Accueil</a> <a href="/articles.html">&gt; Tous les articles</a></p>',13);function v(s,q,_,L,T,w){return o(),n("div",null,[e("h1",c,[r(t(s.$frontmatter.title)+" ",1),p]),e("h5",m,[r("📆 "+t(s.$frontmatter.date.substring(8,10))+"/"+t(s.$frontmatter.date.substring(5,7))+"/"+t(s.$frontmatter.date.substring(0,4)),1),h,g,r(),f]),b])}const k=a(d,[["render",v]]);export{P as __pageData,k as default};