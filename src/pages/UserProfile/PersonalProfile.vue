<template>
  <card>
    <h4 slot="header" class="card-title">Informations personnelles</h4>
    <form>
      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                      label="N° sécurité sociale"
                      :disabled="true"
                      placeholder="N° sécurité sociale"
                      v-model="user.socialSecurityNumber">
          </base-input>
        </div>
        <div class="col-md">
          <base-input type="text"
                      label="Couleur des yeux"
                      :disabled="true"
                      placeholder="Couleur des yeux"
                      v-model="user.eyesColor">
          </base-input>
        </div>
        <div class="col-md-2">
          <base-input type="text"
                      label="Taille"
                      :disabled="true"
                      placeholder="Taille"
                      v-model="user.height">
          </base-input>
        </div>
        <div class="col-md-2">
          <base-input type="text"
                      label="Poids"
                      :disabled="true"
                      placeholder="Poids"
                      v-model="user.weight">
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <base-input type="text"
                      label="Groupe sanguin"
                      :disabled="true"
                      placeholder="Groupe sanguin"
                      v-model="user.bloodType">
          </base-input>
        </div>
        <div class="col-md-1">
          <base-input type="text"
                      label="Rhésus"
                      :disabled="true"
                      placeholder="Rhésus"
                      v-model="user.rhesus">
          </base-input>
        </div>
        <div class="col-md">
          <base-input type="text"
                      label="Pathologies"
                      :disabled="true"
                      placeholder="Pathologies"
                      v-model="user.diseases">
          </base-input>
        </div>
      </div>

      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    props: ["user"],
  }

</script>
<style>

</style>
