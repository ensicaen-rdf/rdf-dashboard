<template>
  <card class="card-user">
    <img slot="image" src="img/logo-gouv-small.png" alt="..."/>
    <div class="author">
      <a href="#">
        <img class="avatar border-gray" :src="'img/faces/face-' + this.user.id.toString() + '.jpg'" :alt="this.user.name"/>

        <h4 class="title">{{ this.user.firstname }} {{ this.user.lastname }}<br />
          <small>Nat. ID : 123456789</small>
        </h4>
      </a>
    </div>
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <base-input type="text"
                        label="Nom"
                        :disabled="true"
                        placeholder="Nom"
                        v-model="user.lastname">
            </base-input>
          </div>
          <div class="col">
            <base-input type="text"
                        label="Prénom"
                        :disabled="true"
                        placeholder="Prénom"
                        v-model="user.firstname">
            </base-input>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <base-input type="text"
                        label="Prénom n°2"
                        :disabled="true"
                        placeholder="Prénom n°2"
                        v-model="user.secondName">
            </base-input>
          </div>
          <div class="col">
            <base-input type="text"
                        label="Prénom n°3"
                        :disabled="true"
                        placeholder="Prénom n°3"
                        v-model="user.thirdName">
            </base-input>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <base-input type="text"
                        label="Date de naissance"
                        :disabled="true"
                        placeholder="Date de naissance"
                        v-model="user.birthdate">
            </base-input>
          </div>
          <div class="col">
            <base-input type="text"
                        label="Lieu de naissance"
                        :disabled="true"
                        placeholder="Lieu de naissance"
                        v-model="user.birthplace">
            </base-input>
          </div>
        </div>
      </div>
    </div>
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
