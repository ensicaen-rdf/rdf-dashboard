<template>
  <body class="signin-page-body">
    <div class="box">
      <h1>Se connecter</h1>

      <div class="in">
        <label for="name">Adresse Mail</label>

        <div>
          <input type="text" v-model="username" placeholder="E-mail" />
        </div>

        <div class="button_action">
          <button v-on:click="username = ' @gmail.com'">@gmail.com</button>
          <button v-on:click="username = '@yahoo.com'">@yahoo.com</button>
          <button v-on:click="username = '@outlook.com'">@outlook.com</button>
          <button v-on:click="username = '@aol.com'">@aol.com</button>
        </div>
      </div>

      <div class="in">
        <label for="name">Mot de passe</label>
        <div>
          <input
            v-model="password"
            type="password"
            :name="string"
            placeholder="Entrer votre mot de passe"
            required
          />
        </div>
      </div>

      <div class="check_bar">
        <div>
          <input type="checkbox" name="" id="" />
          <label for="">Se souvenir de moi</label>
        </div>

        <a href="">Mot de passe oublié ? </a>
      </div>

      <button class="log">Se connecter</button>

      <span>Pas encore de compte ? <a href="/signup">S'inscrire</a> </span>
    </div>
  </body>
</template>


<script>
export default {
  data() {
    return {
      password: "",
      userLoggedIn: false,
      username: "",
      isActive: false,
    };
  },
  toggle() {
    this.isActive = !this.enable;
  },
};
</script>
