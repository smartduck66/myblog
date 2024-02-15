import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Retour au {code} source",
  lang: "fr-FR",
  description: "Blog de André Tonic",
  head: [
    ["script", { src: "https://www.googletagmanager.com/gtag/js?id=G-MN366W1XX4" }],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-MN366W1XX4');",
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Accueil",
        link: "/",
      },
      {
        text: "Articles",
        link: "/articles.md",
      },
      {
        text: "Projets",
        link: "/projets.md",
      },
      {
        text: "Médias",
        link: "/media.md",
      },
      {
        text: "A propos",
        link: "/about.md",
      },
      {
        text: "Contact",
        link: "/contact.md",
      },
    ],

    

    socialLinks: [{ icon: "linkedin", link: "https://www.linkedin.com/in/atonic/" }],

    footer: {
      message: `Site généré avec VitePress - Hébergé @Netlify <br> Visitez <a href="https://www.fa2v.fr">fa2v.fr</a>`,
      copyright: "© André Tonic 2020 - Présent",
    },
  }
})
