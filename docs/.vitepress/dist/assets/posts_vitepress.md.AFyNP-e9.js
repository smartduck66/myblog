import{_ as n,c as l,m as s,a as i,t as e,V as t,o as p,aA as r}from"./chunks/framework.DyooxGaQ.js";const B=JSON.parse('{"title":"Le choix de mon SSG","description":"","frontmatter":{"title":"Le choix de mon SSG","date":"2023-02-05T00:00:00.000Z","category":["SSG"],"tag":["jamstack"],"archive":false},"headers":[],"relativePath":"posts/vitepress.md","filePath":"posts/vitepress.md"}'),h={name:"posts/vitepress.md"},k={id:"frontmatter-title",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),o={id:"frontmatter-date-substring-8-10-frontmatter-date-substring-5-7-frontmatter-date-substring-0-4",tabindex:"-1"},d=s("br",null,null,-1),u=s("br",null,null,-1),g=s("a",{class:"header-anchor",href:"#frontmatter-date-substring-8-10-frontmatter-date-substring-5-7-frontmatter-date-substring-0-4","aria-label":'Permalink to ":calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>"'},"​",-1),c=t('<p><img src="'+r+`" alt="VitePress" title="VitePress"></p><p>J&#39;ai mis des années à me décider à créer mon blog. C&#39;est d&#39;autant plus étrange que j&#39;ai toujours adoré écrire. Une certaine fainéantise ? La sensation que je ne pourrais pas le maintenir régulièrement à jour ? L&#39;impression que je rencontrerais des difficultés à écrire des billets <em>valuable</em> ? Probablement un peu de tout ça 😉</p><p>Mais, une fois la décision prise en 2020, je me suis rapidement penché sur les outils qui me permettraient de poser ma prose. Et c&#39;est à ce moment que j&#39;ai découvert la mouvance Jamstack qui prône (entre autres) un retour à des sites statiques qui sont simplement des sites Web pré-construits avec les langages HTML, CSS et JavaScript. Les pages sont alors servies au navigateur appelant, très rapidement, sans appels dynamiques à une base de données.</p><p>A cette époque, je commençais à étudier Ruby et RoR, deux technologies que je n&#39;ai pas creusées plus que cela. Et, dans la lignée, j&#39;ai découvert <a href="https://jekyllrb.com/" target="_blank" rel="noreferrer">Jekyll</a> que j&#39;ai utilisé à deux ou trois reprises.</p><h4 id="choisir-un-ssg" tabindex="-1">Choisir un SSG <a class="header-anchor" href="#choisir-un-ssg" aria-label="Permalink to &quot;Choisir un SSG&quot;">​</a></h4><p>Utiliser un Static Site Generator pour construire et maintenir son blog est une décision judicieuse, surtout si l&#39;on est développeur. Voici quelques raisons que j&#39;espère objectives :</p><ul><li>Installation ultra-simple</li><li>Arborescence du site fournie automatiquement</li><li>Templates souvent prédéfinis pour la page d&#39;accueil, les posts, les formulaires simples de contact...</li><li>Possibilité d&#39;utiliser le langage <a href="https://www.markdownguide.org/" target="_blank" rel="noreferrer">Markdown</a> pour construire ses pages</li><li>Customisation de son blog via de simples fichiers de configuration, le langage JavaScript ou des directives plus élaborées (Vue.js, par exemple, pour VitePress)</li><li>Compilation très rapide des pages avec les SSG les plus récents (Hugo écrit en GO est l&#39;un des plus véloces)</li><li>Tests en local</li><li>Déploiement simplifié sur son repo GitHub, connecté ensuite à un hébergeur comme Netlify, Vercel, Gatsby Cloud, etc.</li></ul><p>Le site jamstack.org maintient à jour une <a href="https://jamstack.org/generators/" target="_blank" rel="noreferrer">liste</a> des SSG populaires et vous y retrouverez évidemment les ténors actuels tels que Next.js, Hugo, Gatsby, Astro, Eleventy ou d&#39;autres un peu moins connus comme Hexo, Saber ou Harp.</p><h4 id="vitepress" tabindex="-1">VitePress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;VitePress&quot;">​</a></h4><p>Alors pourquoi avoir choisi <a href="https://vitepress.vuejs.org/" target="_blank" rel="noreferrer">VitePress</a>, encore en Beta d&#39;ailleurs à l&#39;heure où j&#39;écris ce billet, plutôt qu&#39;un autre SSG plus connu ? En fait, je me suis dit que cela me permettrait de capitaliser sur ma connaissance du framework Vue.js, le jour où je déciderais de pousser ce SSG dans ses retranchements.</p><p>Initialement, j&#39;étais d&#39;ailleurs parti sur <a href="https://vuepress.vuejs.org/" target="_blank" rel="noreferrer">VuePress</a> dont la première version était basée sur le <em>bundler</em> Webpack, la version 2 intégrant dorénavant Vite. Mais j&#39;ai trouvé l&#39;outil finalement trop riche pour mes besoins et, quand j&#39;ai appris qu&#39;Evan You (le créateur de Vue.js) <a href="https://www.youtube.com/watch?v=xXrhg26VCSc" target="_blank" rel="noreferrer">allait lancer VitePress</a>, j&#39;ai choisi d&#39;utiliser ce nouveau SSG.</p><h4 id="premiers-pas-avec-vitepress" tabindex="-1">Premiers pas avec VitePress <a class="header-anchor" href="#premiers-pas-avec-vitepress" aria-label="Permalink to &quot;Premiers pas avec VitePress&quot;">​</a></h4><p>Franchement, même si l&#39;outil n&#39;est pas encore en version 1.0 (<em>production ready</em>), j&#39;ai pu constater après plusieurs mois d&#39;utilisation sa parfaite intégrité. C&#39;est vrai qu&#39;il n&#39;est pas livré avec des &quot;thèmes de folie&quot; et que la documentation reste encore un peu frustre mais l&#39;essentiel est vraiment là. L&#39;installation, via <em>yarn</em>, est super rapide et vous pouvez naviguer sur le site web de VitePress pour apprécier ses capacités.</p><p>Il faut tout de même signaler que l&#39;outil est assez orienté &quot;site documentaire&quot; mais que des plugins permettent facilement de le configurer pour mieux répondre à la problématique d&#39;un blog. Par exemple, lister les différents articles par ordre chronologique inverse se réalise avec <a href="https://www.npmjs.com/package/vitepress-blog-util" target="_blank" rel="noreferrer">vitepress-blog-util</a> ou intégrer une fonction de recherche peut se faire en utilisant <a href="https://docsearch.algolia.com/docs/what-is-docsearch/" target="_blank" rel="noreferrer">Algolia</a> ou le plugin <a href="https://github.com/emersonbottero/vitepress-plugin-search" target="_blank" rel="noreferrer">d&#39;Emerson Bottero</a>.</p><p>Limiter le poids des images pour tout site web, blog compris, est fondamental. C&#39;est éco-responsable et améliore votre score Lighthouse 😉. Des hébergeurs vous proposent des plugin utilisés lors de la génération du site (ex : <a href="https://www.netlify.com/integrations/community-built/image-optim-build-plugin/" target="_blank" rel="noreferrer">Image Optim</a> chez Netlify) mais j&#39;ai préféré écrire un tout petit script basé sur <a href="https://sharp.pixelplumbing.com/" target="_blank" rel="noreferrer">sharp</a> qui compresse mes images jpg, gif ou png au format ultra-compact <a href="https://fr.wikipedia.org/wiki/WebP" target="_blank" rel="noreferrer">WebP</a> :</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Inspiration : https://sharp.pixelplumbing.com/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Utilisation : node webp.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sharp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sharp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> outputFolder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./docs/public/assets/img/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> inputFolder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./docs/img_source/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> files</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readdirSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inputFolder);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">files.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">file_to_convert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sharp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(inputFolder </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> file_to_convert).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(outputFolder </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> file_to_convert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">substring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, file_to_convert.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">indexOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.webp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Fichiers images transformés au format webp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><br>`,17),y=t(`<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">getPostList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress-blog-util/scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> custom_sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(b.frontmatter.date).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a.frontmatter.date).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  base: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Retour au {code} source&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lang: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;fr-FR&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  description: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;blog André Tonic&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  head: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;script&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { async: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXX&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;script&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {},</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(&#39;js&#39;, new Date());gtag(&#39;config&#39;, &#39;G-XXXXXXXXX&#39;);&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    postList: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPostList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./docs/posts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(custom_sort),</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Accueil&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Articles&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/articles.md&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Projets&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/projets.md&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Médias&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/media.md&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;A propos&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/about.md&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Contact&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/contact.md&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    socialLinks: [{ icon: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;linkedin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, link: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://www.linkedin.com/in/atonic/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }],</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    footer: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`Site généré avec VitePress - Hébergé @Netlify &lt;br&gt; &lt;a href=&quot;https://www.fa2v.fr&quot;&gt;Visitez fa2v.fr&lt;/a&gt;\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      copyright: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;© André Tonic 2020 - Présent&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vite: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    optimizeDeps: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      include: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;markdown-it&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><br>`,2),F=s("p",null,[s("a",{href:"/"},"> Accueil"),i(),s("a",{href:"/articles.html"},"> Tous les articles")],-1);function m(a,f,q,b,v,C){return p(),l("div",null,[s("h1",k,[i(e(a.$frontmatter.title)+" ",1),E]),s("h5",o,[i("📆 "+e(a.$frontmatter.date.substring(8,10))+"/"+e(a.$frontmatter.date.substring(5,7))+"/"+e(a.$frontmatter.date.substring(0,4)),1),d,u,i(),g]),c,i(" Le fichier config.js vous permettra de configurer les éléments essentiels de votre site tels que son titre, sa langue, sa description, l'appel au tag Google Analytics, sa navigation, etc. Je vous livre la version de mon blog : "),y,i(" Bref, si vous recherchez une solution simple, fiable et customisable pour votre blog actuel ou futur, VitePress s'avère un bon choix surtout si vous appréciez son grand frère Vue.js et son écosystème. "),F])}const A=n(h,[["render",m]]);export{B as __pageData,A as default};