<template>
  <card>
    <h4 slot="header" class="card-title">General</h4>
    <form>
      <div class="row">
        <div class="col-md-12">
          <base-input type="text"
                    label="Adresse de domicile"
                    :disabled="true"
                    placeholder="Adresse de domicile"
                    v-model="user.address">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="Ville"
                    :disabled="true"
                    placeholder="Ville"
                    v-model="user.city">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="number"
                      label="Code postal"
                      :disabled="true"
                      placeholder="Code postal"
                      v-model="user.zipCode">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                    label="Pays"
                    :disabled="true"
                    placeholder="Pays"
                    v-model="user.country">
          </base-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <base-input type="text"
                      label="Lieu de travail"
                      :disabled="true"
                      placeholder="Lieu de travail"
                      v-model="user.workplace">
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
