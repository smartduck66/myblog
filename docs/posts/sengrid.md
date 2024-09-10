---
title: Envoyer des mails via Sendgrid
date: 2024-09-10
category:
  - outils
tag:
  - Vue.js
archive: false
---
# {{ $frontmatter.title }}
##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

<br>

![IMG](/assets/img/logo_sendgrid.webp "Sendgrid")
<br><br>
Un site Web dispose d'une fonctionnalité universelle pour communiquer avec vous : l'envoi d'e-mails. En tant qu'utilisateur, cela nous paraît évident et peut d'ailleurs nous agacer quand ces messages se transforment en *spams* indésirables. En tant que développeur, de nombreuses solutions existent et je vais en évoquer une que j'ai choisie dans le cadre de la refonte d'un site Web pour un journal spécialisé. Pour ceux qui me suivent, une autre de ses briques techniques a été récemment abordée dans un billet relatif à [Cloudinary].

L'architecture utilisée pour ce site étant basée sur des fonctions *serverless*, j'avais une nouvelle fois besoin d'une solution SaaS décentralisée. [Sendgrid] de Twilio s'est rapidement imposée à moi grâce à une API simple et efficace, permettant d'envoyer tout e-mail transactionnel et marketing.

Avant de me lancer dans l'interfaçage de ce module avec mon application, j'ai d'abord dû :

- créer un compte
- paramétrer les éléments DNS (CNAME,TXT) pour autoriser le domaine qui envoit les mails (ex : andretonic.fr)
- définir un *sender* (ex : me@andretonic.fr)

Ces actions sont clairement explicitées sur le site de l'éditeur, nul besoin de le paraphraser :wink:

### Mise en place de l'API et utilisation basique
L'intégration du module NPM à votre code s'effectue grâce à la commande suivante :

```cmd
npm i @sendgrid/mail
```
J'avais, pour ma part, quatre besoins à couvrir :

- confirmer une commande (magazine papier, fichier PDF, clé USB, etc.)
- permettre à l'internaute de réinitialiser le mot de passe de son espace client
- faire parvenir un message à l'administrateur du site
- envoyer une newsletter périodique

Les trois premiers se résument à constituer le corps du mail (variable *msg*) et à demander à Sengrid d'envoyer le message. Voici le code correspondant, encapsulé dans une fonction *serverless* exécutée par [Netlify] :

```js
import sgMail from "@sendgrid/mail";
exports.handler = async (event, context) => {

  // Connexion à SendGrid
  const sender = "me@andretonic.fr"; 
  const { SG_API_KEY } = process.env;
  sgMail.setApiKey(SG_API_KEY);

  // Constitution du message au format Sendgrid
  // Inspiration : https://github.com/sendgrid/sendgrid-nodejs/tree/main/packages/mail
  const msg = {
    to: values[0],  // Valeur passée à la fonction serverless = destinataire de l'email
    from: sender,
    subject: `Réinitialisation de votre mot de passe`,
    html: `<p>Vous pouvez réinitialiser votre mot de passe en cliquant sur le lien suivant : <a href="${resetLink}">${resetLink}</a></p>`,
  };

  try {
    await sgMail.send(msg); // Tentative d'envoi du mail par l'API Sendgrid
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 200,
      body: JSON.stringify({ data: "Succès de l'envoi de l'email de réinitialisation du mot de passe de l'utilisateur." }),
    };
  } catch (error) {
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 405,
      body: JSON.stringify({ data: "Echec de l'envoi de l'email de réinitialisation du mot de passe de l'utilisateur : " + error }),
    };
  }
}
```
L'envoi d'une newsletter est un peu plus complexe car il faut tout d'abord construire la liste des destinataires :

```js
import sgMail from "@sendgrid/mail";
exports.handler = async (event, context) => {

  // Connexion à SendGrid
  const sender = "me@andretonic.fr";
  const email_test= "test@andretonic.fr";
  const { SG_API_KEY } = process.env;
  sgMail.setApiKey(SG_API_KEY);

  // Envoi d'une newsletter
  // Inspiration : https://www.twilio.com/docs/sendgrid/api-reference/mail-send/mail-send

  // Liste des destinataires
  let recipients = [];
  if (values[0]) {  // Valeur binaire passée à la fonction serverless = campagne de test (email de l'administrateur) OU campagne réelle
    // Si la case 'campagne de test' est cochée, on utilise la constante 'email_test' (1 seul abonné)
    recipients = [email_test];
  } else {
    // ...sinon, on prend toutes les occurences de la table 'newsletter'
    // Cette table est stockée dans le service SaaS Turso (base de données Sqlite déportée)
    try {
      const results = await conn.execute("SELECT * FROM newsletter");

      if (results.rows.length) {
        recipients = results.rows.map((item) => {
          return item.email;
        });
      } else throw new Error(`Aucun abonné à la newsletter !`);
    } catch (error) {
      await logging(conn, commande, error, values[0]);
      conn.close();
      return {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        statusCode: 405,
        body: JSON.stringify({ data: "Erreur lors de l'accès à la table newsletter" }),
      };
    }
  }

  // Construction des destinataires au format SendGrid
  const personalizations = recipients.map((email) => ({
    to: [{ email }],
    subject: values[1], // Valeur passée à la fonction serverless = titre de la newsletter
  }));

  // Construire le corps de l'e-mail
  const msg = {
    from: sender,
    personalizations: personalizations,
    content: [
      {
        type: "text/html",
        value: values[2],
      },
    ],
  };

  try {
    // Envoyer la campagne via l'API Sendgrid
    await sgMail.send(msg, true); // `true` pour activer le batch mode

    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 200,
      body: JSON.stringify({ data: "Les e-mails ont été envoyés avec succès - Volumétrie : " + recipients.length }),
    };
  } catch (error) {
    return {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      statusCode: 500,
      body: JSON.stringify({ data: "Echec de l'envoi des e-mails : " + error }),
    };
  }
}
```
Ces quelques exemples vous permettront de constater la simplicité d'utilisation de Sendgrid. Très sincèrement, **un couple d'heures** a été nécessaire pour intégrer le service, ce qui m'a agréablement surpris. Pour aller plus loin, je vous conseille la lecture de la section [Developers] de leur site.


### Tarification
L'éditeur américain propose des tarifs assez bien échelonnés, démarrant par une offre gratuite permettant d'envoyer 100 emails/jour jusqu'à 1 100$/mois pour 2,5 millions d'e-mails envoyés. Si vous avez des besoins modestes, le forfait *Essentials* à **20$/mois** autorise déjà jusqu'à 50 000 emails mensuellement, ce qui est un bon début :+1:

Une fois vos premiers messages envoyés via l'API, vous aurez la satisfaction de vérifier vos statistiques via le tableau de bord de Sengrid :grinning:
<br><br>
![IMG](/assets/img/sendgrid_dashboard.webp "Sendgrid dashboard")
<br><br>
[> Accueil](/) [> Tous les articles](/articles)

[Cloudinary]: /posts/cloudinary.md
[Sendgrid]: https://sendgrid.com/en-us
[Netlify]: https://www.netlify.com/blog/intro-to-serverless-functions/
[Developers]: https://www.twilio.com/docs/sendgrid/for-developers

