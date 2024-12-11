---
title: Valider des formulaires avec Vue.js
date: 2024-11-09
category:
  - outils
tag:
  - Vue.js
archive: false
---

# {{ $frontmatter.title }}

##### :calendar: {{ $frontmatter.date.substring(8,10) }}/{{ $frontmatter.date.substring(5,7) }}/{{ $frontmatter.date.substring(0,4) }}<br><br>

![IMG](/assets/img/logo_vee_validate.webp "VeeValidate")
<br>
La saisie de formulaires est un grand classique quand l'on développe un site Web : c'est en effet l'un des moyens les plus courants pour interagir avec l'internaute. Voici un exemple que j'ai récemment mis en place pour [Pharaon Magazine].

Dans l'univers de Vue.js, des librairies vous facilitent la vie pour piloter sereinement la validation d'un formulaire comme, par exemple, [VeeValidate]. Gratuite, appréciée des développeurs et assez versatile, elle nécessite un peu de pratique mais l'investissement en vaut la peine :wink:

### Les fondamentaux à poser

La documentation de VeeValidate étant assez touffue, je me propose de vous détailler la manière dont j'ai implémenté le formulaire de contact de Pharaon Magazine. Vous rencontrerez d'ailleurs une autre librairie, [Yup], qui est souvent utilisée conjointement avec VeeValidate : elle permet la définition de schémas de données.

Premièrement, il vous faut importer les librairies adéquates, définir le schéma de données du formulaire et indiquer le processus à exécuter quand l'on appuie sur le bouton "ENVOYER" :

```js
<script setup lang="ts">
import { useForm } from "vee-validate";
import Yup from "../assets/mixins/localeYup.js";

// Gestion du formulaire *******************************************************************************************************************
// Inspiration : https://vee-validate.logaretm.com/v4/examples/ui-libraries/
// Seuls les trois premiers champs sont obligatoires
const schema = Yup.object().shape({
  nom: Yup.string().required(),
  email: Yup.string().email().required(),
  sujet: Yup.string().required(),
  categorie: Yup.string(),
  message: Yup.string(),
});

// Utilisation de VeeValidate pour gérer le formulaire avec un schéma Yup
const { defineField, handleSubmit, resetForm, errors } = useForm({
  validationSchema: schema,
});

// Définition des champs du formulaire
const [nom] = defineField("nom");
const [email] = defineField("email");
const [sujet] = defineField("sujet");
const [categorie] = defineField("categorie");
const [message] = defineField("message");

const onSubmit = handleSubmit(async (values) => {
  // On envoie un e-mail à l'administrateur du site avec les informations collectées
  // Vous pouvez remplacer cette fonction Serverless gérée par Netlify par tout code approprié permettant d'envoyer les informations collectées
  await store
    .serverless("mail", {
      c: "token",
      v: [values.nom, values.email, values.sujet, values.categorie, values.message],
    })
    .then((results: any) => {
      if (results[0] == 200) {
        toast.add({ severity: "success", summary: "Votre demande de contact a été envoyée", detail: results[1], life: 3000 });
      } else {
        toast.add({ severity: "error", summary: "Contact - Erreur !", detail: results[1], life: 3000 });
      }
    });
  resetForm();
});
</script>
```
Ensuite, la section *template* du composant Vue.js décrit les zones à saisir insérées dans une balise *form* :
```html
<form @submit="onSubmit">
  <div class="label-input-global">
    <br /><br /><br />
    Nom et prénom*
  </div>
  <br />
  <InputText aria-label="Nom" v-model="nom" placeholder="Nom et prénom" class="input-form" maxlength="50" />
  <br />
  <small id="nom-help" class="p-error">
    {{ errors.nom }}
  </small>
  <div class="label-input-global">
    <br /><br />
    Adresse e-mail*
    <br /><br />
  </div>
  <InputText aria-label="email" v-model="email" placeholder="Adresse e-mail" class="input-form" autocomplete="email" maxlength="50" />
  <br />
  <small id="email-help" class="p-error">
    {{ errors.email }}
  </small>
  <div class="label-input-global">
    <br /><br />
    Sujet*
    <br /><br />
  </div>
  <InputText aria-label="sujet" v-model="sujet" placeholder="Sujet" class="input-form" maxlength="80" />
  <br />
  <small id="sujet-help" class="p-error">
    {{ errors.sujet }}
  </small>
  <div class="label-input-global">
    <br /><br />
    Catégorie
  </div>
  <br />
  <Select
    aria-label="catégorie"
    v-model="categorie"
    :options="categories"
    optionLabel="name"
    optionValue="value"
    placeholder="Choisissez une catégorie (optionnel)"
    class="dropdown"
  />
  <small id="nom-help" class="p-error">
    {{ errors.categorie }}
  </small>
  <div class="label-input-global">
    <br /><br />
    Message complémentaire (max 300 c.)
  </div>
  <br />
  <Textarea
    aria-label="Message"
    v-model="message"
    autoResize
    rows="6"
    maxlength="300"
    class="input-form"
    :style="{ 'margin-top': '-10px', 'margin-bottom': '40px', padding: '10px 10px 10px 10px' }"
  />
  <div>
    <Button aria-label="Envoyer" class="button" label="ENVOYER" type="submit" />
  </div>
</form>
```
Enfin, la partie CSS contient les styles dont la classe 'p-error' :
```html
<style scoped>
.p-error {
  color: red;
}
</style>
```
Un exemple de code valant toujours mieux qu'un long discours, vous avez maintenant la possibilité d'implémenter facilement la validation de vos propres formulaires :smiley:


[> Accueil](/) [> Tous les articles](/articles)

[Pharaon Magazine]: https://www.pharaon-magazine.fr/contact
[VeeValidate]: https://vee-validate.logaretm.com/v4/
[Yup]: https://www.npmjs.com/package/yup
