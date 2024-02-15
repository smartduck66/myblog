---
layout: doc
title: Contact
---

#### Vous pouvez me contacter via le formulaire ci-dessous.

<br>
<!--L'intégration de Netlify form diffère d'un site purement statique comme Jekyll. Cf. https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/-->
<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/pages/contact_ok.html">
<input type="hidden" name="form-name" value="contact" />
  <div class="form-Input_Wrapper">
    <input id="email" name="email" type="email" placeholder="evan.you@vue.js" required />
    <label for="email">Votre email : </label>
  </div>
  <br>        
  <div class="form-Input_Wrapper">
    <textarea id="message" name="message" placeholder="Bonjour..." rows="5" required></textarea>
    <label for="message">Votre message : </label>
  </div>
  <p></p>
  <br>
  <button type="submit" class="button_envoyez">Envoyez</button>
</form>

<style scoped lang="scss">

/**
 * Formulaire de contact
 */
 /*We want reverse order to sort the label being after the input*/
.form-Input_Wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -ms-flex-direction: column-reverse;
  flex-direction: column-reverse;
}

.form-Input_Wrapper label {
  color: 888;
  font-size: 15px;
  margin-bottom: 5px;
}

 input:not([type="range"]),
textarea {
  min-height: 30px;
  padding: 5px;
  font-size: 15px;
  border: 1px solid #ebebeb;
  outline: none;
  
}

.button_envoyez {
  width: 100px;
  height: 40px;
  background-color: #3a5ccc;
  color:white;
  background-repeat: no-repeat;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}
</style>
