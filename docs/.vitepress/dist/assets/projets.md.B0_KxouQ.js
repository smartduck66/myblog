import{c as a,p as n,F as o,G as l,e as c,o as r,m as e,t as s}from"./chunks/framework.DyooxGaQ.js";const i=[{date:"2023-12-30",titre:"Kikō",teaser:"Cet outil permet de visualiser une sélection de données climatiques et environnementales, issues de l'open data : température moyenne, température minimale, température maximale, ensoleillement, précipitations, rafales de vent, distance de la centrale nucléaire la plus proche, prix moyen au m2 des maisons. Les valeurs annuelles affichées sont, à date, moyennées sur la période 1991-2020 (hors records climatiques).",technos:"Vue.js",url:"https://kiko.andretonic.fr"},{date:"2024-02-03",titre:"WebCheck'CAC40",teaser:"Découvrez les mesures régulières effectuées sur les sites institutionnels des sociétés du CAC40, via l'utilisation de l'API Google Lighthouse facilitée par les travaux de Zach Leatherman (speedlify).",technos:"Vue.js",url:"https://webcheckcac40.andretonic.fr"},{date:"2023-02-28",titre:"Botanicalparis.com",teaser:"Ce démonstrateur technique a été développé pour démontrer la performance du framework vue.js versus WordPress, sur les indicateurs Lighthouse de Google. Des messages d'erreur peuvent apparaître au lancement du site car planetscale, hébergeur de la base de données sous-jacente, met en sommeil toute BD inactive depuis 7 jours.",technos:"Vue.js",url:"https://jazzy-florentine-dc0c2d.netlify.app/"},{date:"2023-12-30",titre:"Speedlify",teaser:"Zach Leatherman a automatisé les tests Lighthouse fournis par Google, afin de suivre la performance de sites Web dans le temps. Une instantiation est mise à disposition sur les sites de l'indice CAC40. Plus le score global approche les 400 points, meilleur est le site en termes de performance, accessibilité, bonnes pratiques et SEO. PROJET PLUS MAINTENU ET REMPLACÉ PAR WEBCHECK'CAC40.",technos:"11ty",url:"https://speedlifycac40.andretonic.fr"}],u={class:"article"},d=["href"],p=e("br",null,null,-1),m=e("br",null,null,-1),h={class:"article-info"},f=e("hr",null,null,-1),_={class:"article-info"},y=JSON.parse('{"title":"Projets","description":"","frontmatter":{"layout":"doc","title":"Projets"},"headers":[],"relativePath":"projets.md","filePath":"projets.md"}'),g={name:"projets.md"},P=Object.assign(g,{setup(v){return(C,j)=>(r(),a("div",null,[n(i).length?(r(!0),a(o,{key:0},l(n(i),t=>(r(),a("div",u,[e("a",{class:"title",target:"_blank",href:t.url},s(t.titre),9,d),p,m,e("div",h,s(t.teaser),1),f,e("div",_,[e("span",null," Dernière mise à jour : "+s(new Date(t.date).toLocaleDateString()),1),e("span",null," Technologies : "+s(t.technos),1)])]))),256)):c("",!0)]))}});export{y as __pageData,P as default};